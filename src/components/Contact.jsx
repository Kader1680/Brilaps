import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Me</h2>
        <p className="text-lg text-gray-700 mb-8">
          Let’s talk about your next project! Fill out the form below or reach me directly.
        </p>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-4 border rounded-lg"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#fd9609] text-white rounded-lg hover:opacity-90"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
