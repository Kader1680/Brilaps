import React from "react";

const Work = () => {
  const projects = [
    { img: "/work1.png", title: "Ecommerce Website" },
    { img: "/work2.png", title: "Portfolio Website" },
    { img: "/work3.png", title: "Dashboard System" },
  ];

  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition">
              <img src={p.img} alt={p.title} className="w-full h-64 object-cover" />
              <div className="p-4 bg-gray-50">
                <h3 className="text-xl font-semibold">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
