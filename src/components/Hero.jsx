import React from "react";

const Hero = () => {
  return (
   
     <section
      id="home"
      className="relative min-h text-center  flex flex-col justify-center bg-gradient-to-br from-blue-50 p-10 to-indigo-100"
    >
      {/* Background Image with Overlay */}
      <div
      
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bgimage.png')", opacity:"80%" }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid   gap-12 items-center text-white">
        
        {/* Left Content */}
        <div className="text-center ">
          <h1 className="text-4xl text-[#0f1e5c] sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Stop Losing Clients to{" "}
            <span className="text-[#fd9609]">Bad Websites</span>
          </h1>

          <p className="text-base font-semibold sm:text-lg md:text-xl mb-8 text-white">
            I build modern, responsive websites that don’t just look good —
            they bring you more leads, more sales, and more growth.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center  text-center  gap-4">
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-lg font-semibold shadow-md hover:opacity-90 transition"
            >
              Contact Me
            </a>
            <a
              href="#work"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-[#0f1e5c] text-white rounded-lg font-semibold shadow-md hover:opacity-90 transition"
            >
              See My Work
            </a>
          </div>
        </div>

        {/* Right Side - Video */}
        
      </div>

    
    </section>
   
   
  );
};

export default Hero;
