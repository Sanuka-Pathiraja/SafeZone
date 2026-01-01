import "dotenv/config";
import express from "express";
import sendSMS from "./CallFeat/callDemo.js";
const app = express();
const PORT = 5000;

await sendSMS(
  "+94774955689", // 👈 YOUR phone number here
  "Naveesh"
);

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
