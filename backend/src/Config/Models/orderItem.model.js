import mongoose from "mongoose";

const OrderItemSchema = new mongoose.Schema({
   product :  {
         type: mongoose.Schema.Types.ObjectId,
         ref: "products",
         required: true
   },
   size:{
            type: String,
   },
    quantity : {
            type: Number,
            required: true,
    },
    price:{
            type: Number,
            required: true,
    },
    discountPrice:{
            type: Number,
            required: true,
    },
    userId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: true
    }


});
const OrderItem = mongoose.model("orderItem", OrderItemSchema);
export default OrderItem;