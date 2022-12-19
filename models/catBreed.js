import mongoose from "mongoose"
const catBreedSchema = new mongoose.Schema({
    breed: { type: String},
    country: { type: String},
    origin: { type: String},
    coat: { type: String},
    pattern: { type: String},
   
});
export default mongoose.model('catBreed',
catBreedSchema)