import express from "express";
import productsRouter from "./routes/products.routes.js";
const app = express();
app.use(express.json());
app.use("/products", productsRouter);

app.listen(3003, () => {
  console.log("App running on port 3003....");
});
