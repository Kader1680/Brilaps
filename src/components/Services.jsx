export default function Services() {
  const services = [
    {
      img: "./ecommerce.png",
      title: "E-commerce Development",
      points: [
        "Custom online stores",
        "Shopping cart & checkout",
        "Payment integration",
      ],
    },
    {
      img: "./landing.png",
      title: "Landing Pages",
      points: [
        "High-converting design",
        "SEO optimized",
        "Fast & responsive",
      ],
    },
    {
      img: "./sass.png",
      title: "Build SaaS Platforms",
      points: [
        "Scalable architecture",
        "Authentication & billing",
        "API integrations",
      ],
    },
    {
      img: "./webapp.png",
      title: "Custom Web Applications",
      points: [
        "Tailored solutions",
        "Modern frameworks",
        "Secure & efficient",
      ],
    },
  ];

  return (
    <section className="py-16 bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#ec7578]">
          My Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-[#2a2a2a] rounded-xl shadow-lg p-1 text-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={service.img}
                alt={service.title}
                className="  mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-3 text-[#ec7578]">
                {service.title}
              </h3>
              <ul className="text-gray-300 text-sm space-y-2">
                {service.points.map((point, idx) => (
                  <li key={idx}>✅ {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
