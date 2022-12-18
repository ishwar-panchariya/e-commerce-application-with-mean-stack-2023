import mongoose from "mongoose";

export interface CategoryDoc extends mongoose.Document {
    name: string;
    icon: string;
    color: string;
}

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
    },
    color: {
        type: String,
    },
    createdOn: {
        type: Date,
        default: Date.now()
    }
})

const Category = mongoose.model<CategoryDoc>('Category', CategorySchema)

export { Category }