import React from "react";

const Stats = () => {
  const stats = [
    { number: "22+", label: "Projects Completed" },
    { number: "12+", label: "Happy Clients" },
    { number: "7+", label: "Years Experience" },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-100 to-indigo-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-5xl font-bold text-[#0f1e5c]">{stat.number}</h3>
            <p className="text-xl text-gray-700 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
