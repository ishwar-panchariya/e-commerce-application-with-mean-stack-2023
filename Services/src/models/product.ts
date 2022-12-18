import mongoose from "mongoose";

export interface ProductDoc extends mongoose.Document {
    name: string;
    description: string;
    richDescription: string;
    image: string;
    images: string[];
    brand: string;
    price: number;
    category: string;
    countInStock: number;
    rating: number;
    isFeatured: boolean;
}

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    richDescription: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        required: true
    },
    images: [{
            type: String
    }],
    brand: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        default: 0
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    countInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 1000
    },
    rating: {
        type: Number,
        default: 0
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    createdOn: {
        type: Date,
        default: Date.now()
    }
})

const Product = mongoose.model<ProductDoc>('Product', ProductSchema)

export { Product }