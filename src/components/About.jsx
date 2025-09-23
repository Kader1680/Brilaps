import React from "react";
 

const About = () => {
  return (
    <section id="who-am" className="py-20 bg-white">
     <div>
        <div className="w-full">
          <div className="aspect-w-16 aspect-h-9 rounded-xl shadow-2xl overflow-hidden">
            <video
              className="w-full h-full object-cover"
              src="/zeez.mp4" // replace with your video path
              autoPlay
              loop
              muted
              playsInline
              controls
            />
          </div>
        </div>
    </div>


      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img src="/me.png" alt="About Me" className="rounded-lg shadow-lg" />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Who Am I?</h2>
          <p className="text-lg text-gray-700 mb-6">
            I’m a passionate developer who loves solving problems and building
            digital products that help businesses grow. With experience in both
            frontend and backend, I create modern and scalable solutions.
          </p>
          <a
            href="#contact"
            className="px-6 py-3 bg-[#0f1e5c] text-white rounded-lg hover:opacity-90"
          >
            Let’s Work Together
          </a>
        </div>
      </div> */}
    </section>
  );
};

export default About;
