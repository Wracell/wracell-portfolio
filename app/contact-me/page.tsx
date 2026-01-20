import ContactForm from "@/components/ContactForm";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg-3.jpg)" }} // Ensure content fits within screen
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
    >
      <div
        style={{ backgroundImage: "url(/atombg-comp.webp)" }}
        // 1. Adjusted sizing: 90% width on mobile, 80% on desktop.
        // 2. Added overflow-y-auto so if the screen is tiny, you can scroll inside the card.
        className="relative h-[45%] w-[85%] md:h-[60%] md:w-[70%] bg-cover bg-center md:bg-center bottom-20 md:bottom-0 rounded-xl border border-white shadow-2xl overflow-hidden"
      >
        {/* Responsive Wrapper:
           - Mobile: inset-0 (full size), flexbox, black overlay for readability.
           - Desktop (md): absolute positioning, bottom-left alignment, no background overlay.
        */}
        <div className="absolute inset-0 flex items-center justify-center md:block md:inset-auto md:left-12 md:bottom-20 w-full md:w-[400px]">
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;