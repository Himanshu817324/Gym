import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    items: [{
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
      price: {
        type: Number,
        required: true,
      },
      name: String, // Store product name at time of purchase
      image: String, // Store product image at time of purchase
    }],
    shippingAddress: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
      country: String,
    },
    paymentInfo: {
      method: {
        type: String,
        enum: ['stripe', 'paypal', 'razorpay', 'upi', 'qr'],
        required: true,
      },
      transactionId: String,
      status: {
        type: String,
        enum: ['pending', 'completed', 'failed', 'refunded'],
        default: 'pending',
      },
      amount: {
        type: Number,
        required: true,
      },
      currency: {
        type: String,
        default: 'USD',
      },
    },
    orderStatus: {
      type: String,
      enum: [
        'pending',
        'processing',
        'shipped',
        'delivered',
        'cancelled',
        'refunded',
      ],
      default: 'pending',
    },
    shipping: {
      method: String,
      cost: Number,
      trackingNumber: String,
      estimatedDelivery: Date,
    },
    subtotal: {
      type: Number,
      required: true,
    },
    tax: {
      type: Number,
      required: true,
    },
    shippingCost: {
      type: Number,
      required: true,
    },
    discount: {
      code: String,
      amount: Number,
    },
    total: {
      type: Number,
      required: true,
    },
    notes: String,
    invoiceNumber: String,
    isGift: {
      type: Boolean,
      default: false,
    },
    giftMessage: String,
    refundReason: String,
    refundAmount: Number,
    refundStatus: {
      type: String,
      enum: ['pending', 'approved', 'rejected', 'completed'],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Method to calculate order totals
orderSchema.methods.calculateTotals = function () {
  this.subtotal = this.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  this.total = this.subtotal + this.tax + this.shippingCost;

  if (this.discount && this.discount.amount) {
    this.total -= this.discount.amount;
  }
};

// Pre-save middleware to calculate totals
orderSchema.pre('save', function (next) {
  this.calculateTotals();
  next();
});

// Static method to generate invoice number
orderSchema.statics.generateInvoiceNumber = async function () {
  const date = new Date();
  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  const lastOrder = await this.findOne({
    invoiceNumber: new RegExp(`^INV${year}${month}${day}`),
  }).sort({ invoiceNumber: -1 });

  let sequence = '0001';
  if (lastOrder) {
    const lastSequence = parseInt(lastOrder.invoiceNumber.slice(-4));
    sequence = (lastSequence + 1).toString().padStart(4, '0');
  }

  return `INV${year}${month}${day}${sequence}`;
};

const Order = mongoose.model('Order', orderSchema);

export default Order; 