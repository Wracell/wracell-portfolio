"use client";

import ContactForm from "@/components/ContactForm";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg-3.jpg)" }}
      className="w-full h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
    >
      <div
        className="relative h-auto w-[92%] sm:w-[85%] md:h-[65%] md:w-[70%] lg:w-[60%] rounded-2xl glass-panel animate-glow-pulse overflow-hidden"
      >
        {/* Decorative background image (right side, desktop only) */}
        <div
          style={{ backgroundImage: "url(/atombg-comp.webp)" }}
          className="absolute inset-0 bg-cover bg-center opacity-30 md:opacity-40 pointer-events-none"
        />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center md:justify-start h-full p-6 md:p-12">
          <div className="animate-fade-in-up w-full md:w-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;