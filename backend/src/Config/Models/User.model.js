import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role:{
        type: String,
        default: 'CUSTOMER',
        reduce: true,
    },
    mobile:{
        type: Number,
      },
    address:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'addresses'
    }],
    paymentInfomation:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'payment_infomation'
    }],
    ratting:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'ratting'
    }],
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'reviews'
    }],
    created_at:{
        type: Date,
        default: Date.now,
    }
    });

const User = mongoose.model('users', UserSchema);
export default User;