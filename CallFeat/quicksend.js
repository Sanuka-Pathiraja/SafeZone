import axios from "axios";

/**
 * QuickSend SMS Integration
 */

// ⚠️ Replace these with your QuickSend credentials
const QUICKSEND_EMAIL = process.env.QUICKSEND_EMAIL; // Your account email
const QUICKSEND_API_KEY = process.env.QUICKSEND_API_KEY; // Your API Key

const BASE_URL = "https://quicksend.lk/Client/api.php";

/**
 * Send Single SMS
 * @param {string} to - Receiver phone number (e.g., 0771234567)
 * @param {string} msg - Message content
 * @param {string} senderID - Sender ID (default: "QKSendDemo")
 */
export async function sendSingleSMS(to, msg, senderID = "QKSendDemo") {
  try {
    const response = await axios.post(
      `${BASE_URL}?FUN=SEND_SINGLE`,
      {
        senderID,
        to,
        msg,
      },
      {
        auth: {
          username: QUICKSEND_EMAIL,
          password: QUICKSEND_API_KEY,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Single SMS Response:", response.data);
    return response.data;
  } catch (err) {
    console.error("Error sending single SMS:", err.response?.data || err.message);
  }
}

/**
 * Send Bulk SMS (same message)
 * @param {string[]} numbers - Array of phone numbers
 * @param {string} msg - Message to send
 * @param {string} senderID - Sender ID (default: "QKSendDemo")
 */
export async function sendBulkSameSMS(numbers, msg, senderID = "QKSendDemo") {
  try {
    const response = await axios.post(
      `${BASE_URL}?FUN=SEND_BULK_SAME`,
      {
        check_cost: false, // Set true if you want to check cost first
        senderID,
        to: numbers,
        msg,
      },
      {
        auth: {
          username: QUICKSEND_EMAIL,
          password: QUICKSEND_API_KEY,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Bulk Same SMS Response:", response.data);
    return response.data;
  } catch (err) {
    console.error("Error sending bulk same SMS:", err.response?.data || err.message);
  }
}

/**
 * Check QuickSend Balance
 */
export async function checkBalance() {
  try {
    const response = await axios.post(
      `${BASE_URL}?FUN=CHECK_BALANCE`,
      {},
      {
        auth: {
          username: QUICKSEND_EMAIL,
          password: QUICKSEND_API_KEY,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("QuickSend Balance:", response.data);
    return response.data;
  } catch (err) {
    console.error("Error checking balance:", err.response?.data || err.message);
  }
}
