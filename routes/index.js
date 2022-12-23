import { Router } from "express";

import catBreedRoutes from "./catBreeds.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("This is the api root!");
});

router.use("/catBreeds", catBreedRoutes);

export default router;
