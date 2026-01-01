import "dotenv/config";
import express from "express";
import run from "./Controller/MessageController.js";
const app = express();
app.use(express.json());

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

run();
