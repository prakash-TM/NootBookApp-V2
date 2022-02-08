// import { ObjectId } from "mongodb";
// import { Schema } from "mongoose";

import * as Mongoose from "mongoose";

// Defining a schema
const noteBookSchema = new Mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: String, required: true },
}, { timestamps: true });

const noteBookModel = Mongoose.model("Notebook", noteBookSchema);
export { noteBookSchema, noteBookModel };