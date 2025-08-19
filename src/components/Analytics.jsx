import React from "react";
import { FaUsers, FaProjectDiagram, FaChartLine, FaAward } from "react-icons/fa";

export default function Analytics() {
  const stats = [
    {
      icon: <FaUsers className="text-blue-500 text-4xl" />,
      label: "Happy Clients",
      value: "15+",
    },
    {
      icon: <FaProjectDiagram className="text-green-500 text-4xl" />,
      label: "Projects Delivered",
      value: "20+",
    },
    {
      icon: <FaChartLine className="text-purple-500 text-4xl" />,
      label: "Success Rate",
      value: "100%",
    } 
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
        <p className="text-gray-600 mb-12">
          We’re proud of the work we’ve done and the results we’ve delivered.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition"
            >
              {stat.icon}
              <h3 className="text-2xl font-bold mt-4">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
