const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const cartSchema = new Schema({
  user: {
    type: Types.ObjectId,
    ref: "User",
    required: false,
  },
  restaurant: {
    type: Types.ObjectId,
    ref: "Restaurant",
    required: false,
  },
  items: [
    {
      foodItem: {
        type: Types.ObjectId,
        ref: "FoodItem",
        required: true,
      },
      quantity: { type: Number, required: true, default: 1, min: 1 },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
