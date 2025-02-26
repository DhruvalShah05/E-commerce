import mongoose, { disconnect } from "mongoose";

const CartItemSchema = new mongoose.Schema({
    cart:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "cart",
        required: true
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true
        },
        size:{
            type: String,
            required: true,
        },
        quantity:{
            type: Number,
            required: true,
            default: 1,
        },
        price:{
            type: Number,
            required: true,
        },
        disconnectPrice:{
            type: Number,
            required: true,
        },
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: true
        }
});
const CartItem = mongoose.model("cartItem", CartItemSchema);
module.exports = CartItem;