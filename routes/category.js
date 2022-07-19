import express from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "../controllers/category.js";

const router = express.Router();

router.route("/").post(createCategory).get(getAllCategory);
router.route("/:id").put(updateCategory).delete(deleteCategory);

export default router;
