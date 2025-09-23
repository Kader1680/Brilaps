import React from "react";
import { Code, Globe, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: "Web Development",
      desc: "Build responsive and scalable web applications tailored to your business.",
    },
    {
      icon: <Globe size={40} />,
      title: "SEO Optimization",
      desc: "Improve your website’s ranking and visibility with modern SEO strategies.",
    },
    {
      icon: <Smartphone size={40} />,
      title: "Mobile Friendly",
      desc: "Designs that work seamlessly across desktops, tablets, and smartphones.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Services I Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-[#fd9609] flex justify-center mb-6">{s.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
