import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
    firseName :{
        type: String,
        required: true,
    },
    lastName :{
        type: String,
        required: true,
    },
    streerAddress:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    state:{
        type: String,
        required: true,
    },
    zipCode:{
        type: Number,
        required: true,
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref: 'users'
    },
    mobile:{
        type: String,
    },
});
const Address = mongoose.model('addresses', AddressSchema);
export default Address;