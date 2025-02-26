import mongoose, { disconnect } from "mongoose";

const CartSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "users",
        required: true
     },
    cardItems : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "cardItems",
        required : true
    },
    totalPrice : {
        type : Number,
        required : true,
        default: 0,
    },
    totalItems : {
        type : Number,
        required : true,
        default: 0,
    },
    totalDiscountPrice : {
        type : Number,
        required : true,
        default: 0,
    },
    disconnect:{
        type:Number,
        required:true,
        default:0
    }
});
const Cart = mongoose.model("cart", CartSchema);
module.exports = Cart;
