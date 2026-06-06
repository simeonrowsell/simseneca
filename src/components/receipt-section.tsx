import { useState } from "preact/hooks";
import ReceiptForm from "./receipt-form";

import './receipt-section.css';

export default function ReceiptSection() {
  const [sectionState, setSectionState] = useState<"idle" | "success" | "error">("idle");

  return (
    <section class={`receipt-section${sectionState !== "idle" ? ` receipt-section--${sectionState}` : ""}`}>

      <div class="receipt-section__header">
        <h1 class="receipt-title">Send a message straight to my printer</h1>
        <p class="receipt-description">Whatever you write will be instantly printed on the receipt printer sitting on my desk. It's completely anonymous, just you to me, one human to another.</p>
      </div>

      <div class="receipt-section__form">
        <ReceiptForm
          onSuccess={() => setSectionState("success")}
          onError={() => setSectionState("error")}
          onReset={() => setSectionState("idle")}
        />
        <p class="receipt-section__form-description">Max 50 characters, standard ASCII (the printer's not too smart)</p> 
      </div>

      <div class="receipt-section__illustration">
        {/* Lottie goes here, receives isSuccess={isSuccess} */}
        illustration
      </div>

    </section>
  );
}
