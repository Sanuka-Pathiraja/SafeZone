import { sendSingleSMS, sendBulkSameSMS, checkBalance } from "../CallFeat/quicksend.js";

async function run() {
  // Send single SMS
  await sendSingleSMS("0774499718", "Hello from USafe!");

  // Send bulk SMS (same message)
  await sendBulkSameSMS(["0769653219", "0774955689", "0774499718", "0765601923", "0770308954"], "Hello! This is a bulk message from QuickSend.");

  // Check balance
  await checkBalance();
}

export default run;
