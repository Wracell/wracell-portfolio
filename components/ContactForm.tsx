import React from "react";

const ContactForm = () => {
  return (
    <form className="">
      <h2 className="text-2xl text-center font-bold mb-5 text-white">Contact Me</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          placeholder="Your message"
          name="message"
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="flex justify-center pt-4">
        <button className="px-6 mb-10 py-3 text-sm font-bold rounded text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400">
          Send a message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
