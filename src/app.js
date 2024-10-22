import express from "express";
import "dotenv/config";
import product from "./routes/product_registration-router.js";

const app = express();

app.use(express.json());

app.use("/product", product);


app.listen(process.env.API_PORT, () => console.log("Servidor executando na porta " + process.env.API_PORT));