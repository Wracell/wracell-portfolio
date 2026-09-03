"use client";

import React from "react";

const ContactForm = () => {
  return (
    <form className="w-full max-w-[380px] mx-auto">
      <h2 className="text-2xl md:text-3xl text-center font-bold mb-2 text-white tracking-tight">
        Contact{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Me
        </span>
      </h2>
      <p className="text-center text-gray-400 text-xs md:text-sm font-light mb-6">
        Have an idea or want to collaborate? Let&apos;s talk.
      </p>

      {/* Name Input */}
      <div className="mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="glass-input w-full px-4 py-3 text-sm rounded-xl"
        />
      </div>

      {/* Email Input */}
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="glass-input w-full px-4 py-3 text-sm rounded-xl"
        />
      </div>

      {/* Message Input */}
      <div className="mb-4">
        <textarea
          placeholder="Your message"
          name="message"
          rows={4}
          className="glass-input w-full px-4 py-3 text-sm rounded-xl resize-none"
        />
      </div>

      <div className="flex justify-center pt-1">
        <button
          type="submit"
          className="w-full rounded-xl btn-gradient px-8 py-3 text-sm font-semibold tracking-wide"
        >
          <span>Send message</span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;