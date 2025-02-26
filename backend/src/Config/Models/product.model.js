import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discountPrice: {
        type: Number,

    },
    discountPersent: {
        type: Number,
    },
    quntity: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,

    },
    color: {
        type: String,
    },
    sizes: [{
        name: { type: String },
        quntity: { type: Number },
    }],
    imageUrl: {
    type: String,
},
    rating: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "rating",

},
    review: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "review",
},
    numRating: {
    type: Number,
},
catagory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "catagory",
},
createdAt: {
    type: Date,
    default: Date.now,
},

});
module.exports = mongoose.model('product', productSchema);
export default Product;
