import pokemonRouter from "./pokemon.mjs";
import express from "express";

const router = express.Router();
console.log("test");
router.use("/pokemon", pokemonRouter);

export default router;
