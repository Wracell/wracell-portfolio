import React from "react";

const ContactForm = () => {
  return (
    <form className="w-full">
      <h2 className="text-2xl text-center font-bold mb-5 text-white shadow-black drop-shadow-md">
        Contact Me
      </h2>

      {/* Name Input */}
      <div className="mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          // FIX: Changed text-gray-200 to text-gray-900 so user can see what they type
          className="w-[300px] md:w-full px-3 py-2 text-sm text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email Input */}
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-[300px] md:w-full px-3 py-2 text-sm text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Message Input - Changed to Textarea for better UX */}
      <div className="mb-3">
        <textarea
          placeholder="Your message"
          name="message"
          rows={4} // Give it some default height
          className="w-[300px] md:w-full px-3 py-2 text-sm text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
      </div>

      <div className="flex justify-center pt-2">
        <button className="w-full md:w-auto px-8 py-3 text-sm font-bold rounded text-white uppercase transition-all duration-150 ease-linear bg-blue-600 hover:bg-blue-500 hover:shadow-lg active:bg-blue-700">
          Send message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;