import "dotenv/config";
import express from "express";
// import run from "./Controller/MessageController.js";
import AppDataSource from "./config/data-source.js";

const app = express();
app.use(express.json());

// Connect DB
AppDataSource.initialize()
  .then(() => console.log("📌 PostgreSQL + TypeORM Connected Successfully!"))
  .catch((err) => console.error("❌ DB Connection Error: ", err));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

// run();
