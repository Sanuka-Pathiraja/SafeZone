require("dotenv").config();
const express = require("express");
const twilio = require("twilio");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// console.log("Twilio Phone:", process.env.TWILIO_PHONE);

// TEMPORARY test SMS
// client.messages
//   .create({
//     body: "Twilio test message 🚨",
//     from: process.env.TWILIO_PHONE,
//     to: "+94765601923",
//   })
//   .then((msg) => console.log("SMS sent:", msg.sid))
//   .catch((err) => console.error(err));

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
