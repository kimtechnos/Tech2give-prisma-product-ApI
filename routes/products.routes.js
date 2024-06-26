import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const product = await prisma.product.findFirst({
      where: { id: id },
    });

    res.status(200).json(product);
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      productThumbnail,
      productTitle,
      productDescription,
      productCost,
      onOffer,
    } = req.body;

    const newProduct = await prisma.product.create({
      data: {
        productThumbnail,
        productTitle,
        productDescription,
        productCost,
        onOffer,
      },
    });

    res.status(201).json(newProduct);
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const {
      productThumbnail,
      productTitle,
      productDescription,
      productCost,
      onOffer,
    } = req.body;

    const updatedProduct = await prisma.product.update({
      where: { id: id },
      data: {
        productThumbnail,
        productTitle,
        productDescription,
        productCost,
        onOffer,
      },
    });

    res.json(updatedProduct);
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deleteproduct = await prisma.product.delete({
      where: { id: id },
    });
    res.status(200).json(deleteproduct);
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

export default router;
