import mongoose from 'mongoose';
import ProductSchema from './schema.js';

export default mongoose.model('product', ProductSchema);
