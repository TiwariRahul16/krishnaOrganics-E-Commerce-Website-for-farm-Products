import mongoose from "mongoose";
import { Schema,model } from "mongoose";


const ProductSchema = new Schema({
    name: { type: String, required: true },
    price: { type: String,required: true },
    email: { type: String },
    productpic: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });
  
  export default mongoose.models.Products || model("Products", ProductSchema);
  
