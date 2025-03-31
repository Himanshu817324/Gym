import mongoose from 'mongoose';

const trainingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['personal', 'group', 'online', 'on-demand'],
      required: true,
    },
    trainer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    duration: {
      type: Number, // in minutes
      required: true,
    },
    difficulty: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      required: true,
    },
    schedule: [{
      day: {
        type: String,
        enum: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
      },
      time: String,
      capacity: Number,
      currentBookings: {
        type: Number,
        default: 0,
      },
    }],
    price: {
      type: Number,
      required: true,
    },
    discount: {
      percentage: Number,
      validUntil: Date,
    },
    equipment: [String],
    prerequisites: [String],
    objectives: [String],
    benefits: [String],
    images: [String],
    videoUrl: String, // For online/on-demand sessions
    category: {
      type: String,
      enum: [
        'strength',
        'cardio',
        'yoga',
        'dance',
        'martial-arts',
        'sports',
        'rehabilitation',
        'nutrition',
      ],
      required: true,
    },
    tags: [String],
    rating: {
      average: {
        type: Number,
        default: 0,
      },
      count: {
        type: Number,
        default: 0,
      },
    },
    reviews: [{
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
      },
      comment: String,
      date: {
        type: Date,
        default: Date.now,
      },
    }],
    isActive: {
      type: Boolean,
      default: true,
    },
    isPopular: {
      type: Boolean,
      default: false,
    },
    maxParticipants: Number,
    location: {
      type: String,
      enum: ['gym', 'online', 'outdoor'],
      required: true,
    },
    cancellationPolicy: {
      type: String,
      required: true,
    },
    materials: [{
      title: String,
      description: String,
      fileUrl: String,
    }],
    relatedPrograms: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Training',
    }],
  },
  {
    timestamps: true,
  }
);

// Index for search functionality
trainingSchema.index({
  title: 'text',
  description: 'text',
  category: 'text',
  tags: 'text',
});

// Method to update training rating
trainingSchema.methods.updateRating = async function () {
  if (this.reviews.length === 0) {
    this.rating.average = 0;
    this.rating.count = 0;
    return;
  }

  const totalRating = this.reviews.reduce((sum, review) => sum + review.rating, 0);
  this.rating.average = totalRating / this.reviews.length;
  this.rating.count = this.reviews.length;
};

// Method to check availability
trainingSchema.methods.isAvailable = function (day, time) {
  const schedule = this.schedule.find(
    (slot) => slot.day === day && slot.time === time
  );

  if (!schedule) return false;

  return schedule.currentBookings < schedule.capacity;
};

// Method to calculate discounted price
trainingSchema.methods.getDiscountedPrice = function () {
  if (this.discount && this.discount.percentage && this.discount.validUntil > new Date()) {
    return this.price * (1 - this.discount.percentage / 100);
  }
  return this.price;
};

const Training = mongoose.model('Training', trainingSchema);

export default Training; 