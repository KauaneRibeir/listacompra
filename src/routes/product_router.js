import { Router } from "express";
import {
  store,
  index,
  show,



} from "../controllers/product_controller.js";


const router = Router();


router.post("/",store); 
router.get("/", index); 
router.get("/:id",show);

export default router;
