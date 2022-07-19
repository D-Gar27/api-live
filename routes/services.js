import express from "express";
import {
  createService,
  deleteService,
  getOneService,
  getAllServices,
  updateService,
} from "../controllers/services.js";

const router = express.Router();

router.route("/").post(createService).get(getAllServices);
router
  .route("/:id")
  .get(getOneService)
  .put(updateService)
  .delete(deleteService);

export default router;
