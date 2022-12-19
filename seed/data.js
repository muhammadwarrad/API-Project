import db from "../db/connection.js";

import catBreed from "../models/catBreed.js";

import catBreeds from "./catBreeds.json" assert { type: "json" };

const insertData = async () => {
  await db.dropDatabase();

  await catBreed.create(catBreeds);
  

  await db.close();
};

insertData();
