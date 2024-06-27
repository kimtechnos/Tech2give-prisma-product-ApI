import { Router } from "express";
import {
  getAllproducts,
  getSingleproduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../prisma/controllers/product.controllers.js";

const router = Router();

router
  .get("/", getAllproducts)
  .get("/:id", getSingleproduct)
  .post("/", createProduct)
  .patch("/:id", updateProduct)
  .delete("/:id", deleteProduct);

export default router;
