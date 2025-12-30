require("dotenv").config();
const express = require("express");
const sendSMS = require("./CallFeat/callDemo");
const app = express();
const PORT = 5000;

sendSMS();

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
