import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center  ">
        
        {/* 🔥 Headline */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Stop Losing Clients to{" "}
          <span style={{ color: "#fd9609" }}>Bad Websites</span>
        </h1>

        {/* Supporting Text */}
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          I build modern, responsive websites that don’t just look good —
          they bring you more leads, more sales, and more growth.
        </p>

        {/* CTAs */}
        <div className=" flex flex-wrap justify-center lg:justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-lg font-semibold shadow-md hover:opacity-90 transition"
          >
            Contact Me
          </a>
          <a
            href="#work"
            className="px-8 py-4 bg-[#0f1e5c] text-white rounded-lg font-semibold shadow-md hover:opacity-90 transition"
          >
            See My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
