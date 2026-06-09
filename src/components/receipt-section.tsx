import { useState, useEffect, useRef } from "preact/hooks";
import lottie, { type AnimationItem } from "lottie-web";
import ReceiptForm from "./receipt-form";

export default function ReceiptSection() {
  const [sectionState, setSectionState] = useState<"idle" | "success" | "error">("idle");
  const lottieRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (lottieRef.current) {
      animationRef.current = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "/assets/receipt_printer_printing.json",
      });
    }
    return () => {
      animationRef.current?.destroy();
      animationRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (sectionState === "success") {
      animationRef.current?.goToAndPlay(0, true);
    } else {
      animationRef.current?.stop();
    }
  }, [sectionState]);

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
        <img
          src="/assets/receipt_printer_waiting.svg"
          alt="Receipt printer illustration"
          style={{ display: sectionState === "idle" ? "block" : "none" }}
        />
        <div
          ref={lottieRef}
          style={{ display: sectionState === "success" ? "block" : "none" }}
        />
        <div class="receipt-section__illustration-background"></div>
      </div>

    </section>
  );
}
