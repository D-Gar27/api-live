import Category from "../models/Category.js";

const createCategory = async (req, res) => {
  try {
    const category = req.body;
    await Category.create(category);
    res.status(201).json({ msg: "Sucssfully Created" });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const updateCategory = async (req, res) => {
  const id = req.params.id;
  try {
    const categoryToEdit = req.body;
    await Category.findByIdAndUpdate(id, categoryToEdit);
    res.status(200).json({ msg: "Successfully Edited" });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getAllCategory = async (req, res) => {
  try {
    const category = await Category.find({});
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const deleteCategory = async (req, res) => {
  const id = req.params.id;
  try {
    const category = await Category.findByIdAndDelete(id);
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export { createCategory, deleteCategory, getAllCategory, updateCategory };
