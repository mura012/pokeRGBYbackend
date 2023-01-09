import express from "express";
import apiRoutes from "./api-routes/index.mjs";
import env from "dotenv";
import "./helpers/db.mjs";
import cors from "cors";
env.config();
const app = express();
const port = process.env.PORT || 8080;

app.use(
  cors({
    origin: "https://pokergbytools-a1x1qov5i-mura012.vercel.app",
  })
);

app.get("/", (req, res) => {
  res.send("pokeRGBY");
});

app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`スタート: http://localhost:${port}`);
});
