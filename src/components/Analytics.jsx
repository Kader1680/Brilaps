import React from "react";
import { FaUsers, FaProjectDiagram, FaChartLine } from "react-icons/fa";

export default function Analytics() {
  const stats = [
    {
      icon: <FaUsers className="text-[#ec7578] text-4xl" />,
      label: "Happy Clients",
      value: "15+",
    },
    {
      icon: <FaProjectDiagram className="text-[#c57f9c] text-4xl" />,
      label: "Projects Delivered",
      value: "20+",
    },
    {
      icon: <FaChartLine className="text-[#7794e5] text-4xl" />,
      label: "Success Rate",
      value: "100%",
    },
  ];

  return (
    <section className="py-16 bg-[#101010] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#ec7578]">Our Achievements</h2>
        <p className="mb-12 text-[#9e89c0]">
          We’re proud of the work we’ve done and the results we’ve delivered.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#101010] border border-[#ec7578] rounded-2xl p-6 flex flex-col items-center hover:bg-[#1a1a1a] transition"
            >
              {stat.icon}
              <h3 className="text-2xl font-bold mt-4 text-white">{stat.value}</h3>
              <p className="text-[#9e89c0]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
