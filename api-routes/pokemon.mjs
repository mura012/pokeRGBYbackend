import express from "express";
import Pokemon from "../models/pokemon.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
  const pokemons = await Pokemon.find().sort({ number: 1 });
  res.send(pokemons);
});

router.get("/:type", async (req, res) => {
  const pokemons = await Pokemon.find({ typeA: req.params.type });
  res.send(pokemons);
});

export default router;
