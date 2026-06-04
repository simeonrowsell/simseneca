import { useState } from "preact/hooks";

interface Props {
  onSuccess: () => void;
  onError: () => void;
  onReset: () => void;
}

export default function ReceiptForm({ onSuccess, onError, onReset }: Props) {

  const [responseMessage, setResponseMessage] = useState("");
  const [formState, setFormState] = useState("ready");
  const [messageValue, setMessageValue] = useState("");

  async function submit(e: SubmitEvent) {
    e.preventDefault();
    setFormState("waiting");
    const formData = new FormData(e.target as HTMLFormElement);

    // Send the form data to the API route
    const response = await fetch("/api/receipt", {
      method: "POST",
      body: formData
    });
    const responseData = await response.json();

    if (response.status === 200) {
      setFormState("success");
      setResponseMessage(responseData.message);
      onSuccess();
    }

    if (response.status === 400 || response.status === 500) {
      setFormState("error");
      setResponseMessage(responseData.message);
      onError();
    }
  }

  return (
    <div class="receipt-form">
      {formState === "waiting" && 
        <div class="receipt-form__success">
          <p>Waiting for response...</p>
        </div>
      }

      {formState === "ready" &&
        <form onSubmit={submit}>

          <label for="receipt-message">Your message...</label>
          <textarea 
            id="receipt-message" 
            name="receipt-message"
            placeholder="> Your message..."
            maxlength={50} 
            value={messageValue}
            onInput={(e) => setMessageValue((e.target as HTMLTextAreaElement).value)}
            required>
          </textarea>

          <button type="submit">Submit</button>
        </form>
      }

      {formState === "success" &&
        <div class="receipt-form__success">
          <p>Message sent successfully!</p>
          <button onClick={() => {
            setFormState("ready");
            setResponseMessage("");
            setMessageValue("");
            onReset();
          }}>Send another message</button>
        </div>
      }
      
      {formState === "error" && 
        <div class="receipt-form__error">
          <p>{responseMessage}</p>
          <button onClick={() => {
            setFormState("ready");
            setResponseMessage("");
            onReset();
          }}>Try again</button>
        </div>
      }
    </div>
  );
}