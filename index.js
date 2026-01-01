import "dotenv/config";
import express from "express";
import sendSMS from "./CallFeat/callDemo.js";
const app = express();
const PORT = 5000;

await sendSMS(
  "+94765601923", // 👈 YOUR phone number here
  "Naveesh",
  "https://www.google.com/maps?q=6.9271,79.8612"
);

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
