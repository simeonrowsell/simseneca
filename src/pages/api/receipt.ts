export const prerender = false

import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  // Extract fields from the form data and converting to string
  const receiptMessage = data.get("receipt-message")?.toString() ?? "";

  // Validate required fields
  if (!receiptMessage) {
    return new Response(
      JSON.stringify({
        message: "Message is empty",
      }),
      { status: 400 }
    );
  }

  // Sanitize the message to remove any non-printable characters
  const sanitizedMessage = receiptMessage.replace(/[^\x20-\x7E]/g, "");

  // Validate required fields
  if (!sanitizedMessage) {
    return new Response(
      JSON.stringify({
        message: "Message contains only non-printable characters",
      }),
      { status: 400 }
    );
  }

  // Validate message length
  if (sanitizedMessage.length > 150) {
    return new Response(
      JSON.stringify({
        message: "Message exceeds maximum length of 150 characters",
      }),
      { status: 400 }
    );
  }
  
  console.log(`[receipt] Sending message (${sanitizedMessage.length} chars): "${sanitizedMessage}"`);

  try {
    // Send to the Pi
    const piResponse = await fetch(import.meta.env.RECEIPT_PRINT_URL, {
      method: "POST",
      body: JSON.stringify({ message: sanitizedMessage }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        "secret": import.meta.env.RECEIPT_SECRET
      },
      signal: AbortSignal.timeout(5_000)
    });

    if (piResponse.status !== 200) {
      return new Response(
        JSON.stringify({ message: "Ughh, some printer error" }),
        { status: 500 }
      );
    }

  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Couldn't even reach the printer. Forget it" }),
      { status: 500 }
    );
  }

  return new Response(
    JSON.stringify({
      message: "Message printed!"
    }),
    { status: 200 }
  );
};