import catBreed from "../models/catBreed.js";

export const getCatBreeds = async (req, res) => {
  try {
    const catBreeds = await catBreed.find();
    res.json(catBreeds);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getcatBreed = async (req, res) => {
  try {
    const { id } = req.params;
    const cat = await catBreed.findById(id);

    if (cat) {
      return res.json(cat);
    }

    res.status(404).json({ message: "catBreed not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createcatBreed = async (req, res) => {
  try {
    const newCat = new catBreed(req.body);
    await newCat.save();
    res.status(201).json(req.body);
    console.log(req.body)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updatecatBreed = async (req, res) => {
  try {
    const { id } = req.params;
    const catBreed1 = await catBreed.findByIdAndUpdate(id, req.body);
    res.status(201).json(catBreed1);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deletecatBreed = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await catBreed.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("catBreed deleted!");
    }

    throw new Error("catBreed not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
