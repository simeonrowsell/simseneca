import { useState } from "preact/hooks";

export default function ReceiptForm() {

  const [responseMessage, setResponseMessage] = useState("");

  async function submit(e: SubmitEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    // Send the form data to the API route
    const response = await fetch("/api/receipt", {
      method: "POST",
      body: formData
    });
    // Handle the response
    const responseData = await response.json();
    // Update the UI based on the response
    if (responseData.message) {
      setResponseMessage(responseData.message);
    }
  }

  return (
    <form onSubmit={submit}>

      <label for="receipt-message">Message</label>
      <textarea id="receipt-message" name="receipt-message" maxlength="50" required></textarea>

      <button type="submit">Submit</button>
      
      {responseMessage && <p>{responseMessage}</p>}

    </form>
  );
}