/**
 * API Client for form submissions
 * 
 * In demo mode (default), this calls the local mock API.
 * When NEXT_PUBLIC_DEMO_MODE=false, it would call the real AWS backend.
 */

interface FormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

interface SubmitResponse {
  success: boolean;
  leadId?: string;
  message?: string;
  timestamp?: string;
  demo?: boolean;
  processedData?: any;
  whatWouldHappen?: any[];
  estimatedCost?: any;
  error?: string;
}

export async function submitForm(data: FormData): Promise<SubmitResponse> {
  const isDemoMode = process.env.NEXT_PUBLIC_DEMO_MODE !== "false";
  
  // In demo mode, call the mock API
  if (isDemoMode) {
    const response = await fetch("/api/mock-submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to submit form");
    }

    return response.json();
  }

  // In production mode, this would call the real AWS backend
  // Example implementation:
  /*
  const apiUrl = process.env.NEXT_PUBLIC_API_GATEWAY_URL;
  
  if (!apiUrl) {
    throw new Error("API Gateway URL not configured");
  }

  // Generate HMAC signature
  const timestamp = Date.now();
  const payload = JSON.stringify(data);
  const message = `${timestamp}.${payload}`;
  const signature = await generateHMAC(message);

  // Get Turnstile token (if implemented)
  const turnstileToken = await getTurnstileToken();

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Signature": signature,
      "X-Timestamp": timestamp.toString(),
      "X-Turnstile-Token": turnstileToken,
    },
    body: payload,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to submit form");
  }

  return response.json();
  */

  throw new Error("Production mode not implemented. Set NEXT_PUBLIC_DEMO_MODE=true to use mock mode.");
}

