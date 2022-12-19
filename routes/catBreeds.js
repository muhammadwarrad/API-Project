import { Router } from "express";
import * as controllers from "../controllers/catBreeds.js";

const router = Router();

router.get("/", controllers.getCatBreeds);
router.get("/:id", controllers.getcatBreed);
router.post("/", controllers.createcatBreed);
router.put("/:id", controllers.updatecatBreed);
router.delete("/:id", controllers.deletecatBreed);

export default router;
