export const prerender = false

import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const receiptMessage = data.get("receipt-message");

  // Validate required fields
  if (!receiptMessage) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }

  // Validate message length
  if (typeof receiptMessage === "string" && receiptMessage.length > 50) {
    return new Response(
      JSON.stringify({
        message: "Message exceeds maximum length of 50 characters",
      }),
      { status: 400 }
    );
  }
  
  // Send to the Pi
  const piResponse = await fetch(import.meta.env.RECEIPT_URL, {
    method: "POST",
    body: JSON.stringify({ message: receiptMessage }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "secret": import.meta.env.RECEIPT_SECRET
    }
  });

  if(piResponse.status !== 200) {
    return new Response(
      JSON.stringify({
        message: "Failed to send to the Pi",
      }),
      { status: 500 }
    );
  }

  return new Response(
    JSON.stringify({
      message: "Success!"
    }),
    { status: 200 }
  );
};