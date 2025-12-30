const twilio = require("twilio");

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

function sendSMS() {
  console.log("Twilio Phone:", process.env.TWILIO_PHONE);

  return client.messages
    .create({
      body: "Twilio test message 🚨",
      from: process.env.TWILIO_PHONE,
      to: "+94765601923",
    })
    .then((message) => console.log("SMS sent:", message.sid))
    .catch((err) => console.error("SMS error:", err));
}

module.exports = sendSMS;
