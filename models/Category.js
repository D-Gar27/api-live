import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name_mm: String,
  name_eng: String,
});

export default mongoose.model("categorie", CategorySchema);
