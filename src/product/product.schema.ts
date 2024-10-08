import { Schema, Document } from 'mongoose';

export const ProductSchema = new Schema({
  name: String,
  price: Number,
});

export interface Product extends Document {
  name: string;
  price: number;
}
