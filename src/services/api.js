import axios from "axios";

/**
 * Backend URL
 *
 * Local Development:
 * VITE_API_URL=http://127.0.0.1:8000
 *
 * Production:
 * VITE_API_URL=https://safelink-ai-d5f8.onrender.com
 */
const BACKEND_URL =
  import.meta.env.VITE_API_URL ||
  "https://safelink-ai-d5f8.onrender.com";

/**
 * Clean and normalize URL before sending it to backend.
 */
function cleanUrl(input) {
  if (!input) return "";

  let url = input.trim();

  // Remove accidental trailing ports like :1
  url = url.replace(/:\d+$/, "");

  // Add https:// if protocol is missing
  if (!/^https?:\/\//i.test(url)) {
    url = `https://${url}`;
  }

  return url;
}

/**
 * Internal POST helper
 */
async function postScan(url, timeout = 15000) {
  return axios.post(
    `${BACKEND_URL}/api/scan`,
    {
      url,
    },
    {
      timeout,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

/**
 * Scan a URL
 */
export async function scanURL(userInput) {
  const sanitizedUrl = cleanUrl(userInput);

  if (!sanitizedUrl) {
    throw new Error("Please enter a valid URL.");
  }

  try {
    // First attempt
    const response = await postScan(sanitizedUrl, 15000);

    return response.data;
  } catch (err) {
    const shouldRetry =
      err.code === "ECONNABORTED" ||
      err.code === "ERR_NETWORK" ||
      !err.response;

    // Retry once (Render cold start)
    if (shouldRetry) {
      try {
        const retry = await postScan(sanitizedUrl, 45000);
        return retry.data;
      } catch (retryErr) {
        throw new Error(
          retryErr.response?.data?.detail ||
            retryErr.message ||
            "Backend is currently unavailable."
        );
      }
    }

    throw new Error(
      err.response?.data?.detail ||
        err.response?.data?.message ||
        err.message ||
        "Failed to analyze the website."
    );
  }
}

/**
 * Health Check
 */
export async function checkBackend() {
  try {
    const response = await axios.get(`${BACKEND_URL}/docs`, {
      timeout: 5000,
    });

    return response.status === 200;
  } catch {
    return false;
  }
}

export default {
  scanURL,
  checkBackend,
};