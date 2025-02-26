import mongoose from "mongoose";
const { Schema } = mongoose;

const OrderSchema = new Schema({
    user : {
        type : Schema.Types.ObjectId,
        ref : "users"
    },
    orderItems:[{
        type: Schema.Types.ObjectId,
        ref: "orderItems",
        required: true
    }],
    orderDate:{
        type: Date,
        default: Date.now,
        required: true
    },
    deliveryDate:{
        type: Date,
        required: true
    },
    deliveryAddress:{
        type: Schema.Types.ObjectId,
        ref: "addresses",
        required: true
    },
    paymentDetails:{
        paymentMethod :{
            type: String
        },
        transacionId: {
            type: String
        },
        paymenrId: {
            type: String
        },
        paymentStatus:{
            type: String,
            default: "Pending"
        },
    },
    totalPrice: {
        type: Number,
        required: true
    },
    totalDiscountPrice: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    orderSatatus: {
        type: String,
        default: "Pending",
        required: true
    },
    totalItems: {
        type: Number,
        required: true
    },
    creared_at: {
        type: Date,
        default: Date.now(),
    }

});
const Order = mongoose.model("orders", OrderSchema);
export default Order;