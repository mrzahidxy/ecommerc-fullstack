const express = require("express");
const multer = require("multer");
const {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} = require("firebase/storage");
const storage = require("../firebase");
const product = require("../models/product");
const { verifyToken, verifyTokenAndAdmin } = require("./verifyToken");

const router = express.Router();
const maxFileSize = 5 * 1024 * 1024; // 5MB

function getObjectPathFromUrl(url) {
  const startIndex = url.indexOf("/o/") + 3; // +3 to skip "/o/"
  const endIndex = url.indexOf("?"); // Index of the "?" character

  if (startIndex !== -1 && endIndex !== -1) {
    const objectPath = url.substring(startIndex, endIndex);
    return objectPath;
  } else {
    return null; // Invalid URL format
  }
}

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: maxFileSize },
});

// Uploads an image to Firebase Storage and creates a portfolio item
const uploadImageAndCreateProduct = async (
  img,
  title,
  description,
  price,
  quantity,
  category,
  color,
  size
) => {
  const filename = `${Date.now()}_${img.originalname}`;
  const fileRef = ref(storage, filename);

  await uploadBytes(fileRef, img.buffer);
  const imageUrl = await getDownloadURL(fileRef);

  return new product({
    title,
    description,
    img: imageUrl,
    price,
    quantity,
    category,
    color,
    size,
  }).save();
};

// Create a new item
router.post(
  "/",
  verifyTokenAndAdmin,
  upload.single("image"),
  async (req, res) => {
    try {
      const { title, description, price, quantity, category, color, size } =
        req.body;
      const img = req.file;

      if (!img) {
        return res.status(400).json({ error: "Image file is required" });
      }

      const createdProduct = await uploadImageAndCreateProduct(
        img,
        title,
        description,
        price,
        quantity,
        category,
        color,
        size
      );

      res.status(201).json(createdProduct);
    } catch (error) {
      console.error("Error creating product item:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

// Update an existing product
router.put(
  "/:id",
  verifyTokenAndAdmin,
  upload.single("image"),
  async (req, res) => {
    try {
      const { title, description, price, quantity, category, color, size } =
        req.body;
      const img = req.file;
      const productId = req.params.id;

      // First, delete the old image from Firebase Storage (if it exists)
      const existingProduct = await product.findById(productId);
      if (existingProduct) {
        // Extract the filename from the existing image URL
        const existingImageRef = ref(
          storage,
          getObjectPathFromUrl(existingProduct.img)
        );

        // Delete the existing image
        try {
          await deleteObject(existingImageRef);
        } catch (error) {
          console.error("Error deleting existing image:", error);
        }
      }

      // Upload the new image to Firebase Storage
      if (img) {
        const filename = `${Date.now()}_${img.originalname}`;
        const fileRef = ref(storage, filename);
        await uploadBytes(fileRef, img.buffer);
        const imageUrl = await getDownloadURL(fileRef);

        // Update the portfolio item in the database with the new image URL
        const updatedProduct = await product.findByIdAndUpdate(
          productId,
          {
            title,
            description,
            price,
            quantity,
            category,
            color,
            size,
            img: imageUrl,
          },
          { new: true }
        );

        res.status(200).json(updatedProduct);
      } else {
        // If no new image is provided, update the portfolio item without changing the image
        const updatedProduct = await Portfolio.findByIdAndUpdate(
          portfolioItemId,
          {
            title,
            description,
            price,
            quantity,
            category,
            color,
            size,
          },
          { new: true }
        );

        res.status(200).json(updatedProduct);
      }
    } catch (error) {
      console.error("Error updating portfolio item:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

// Get products
router.get("/", async (req, res) => {
  try {
    const products = await product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error retrieving portfolio items:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Find by id
router.get("/:id", async (req, res) => {
  try {
    const productbyId = await product.findById(req.params.id);
    res.status(200).json(productbyId);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
