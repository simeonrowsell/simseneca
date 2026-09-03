export const prerender = false

import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  try {
    const piResponse = await fetch(import.meta.env.RECEIPT_STATUS_URL, {
      method: "GET",
      signal: AbortSignal.timeout(3_000)
    });

    return new Response(
      JSON.stringify({ online: piResponse.status === 200 }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ online: false }),
      { status: 200 }
    );
  }
};
