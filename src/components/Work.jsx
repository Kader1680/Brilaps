import React from "react";
import { ExternalLink } from "lucide-react";

const Work = () => {
  const projects = [
    {
      title: "Buca Restaurant Online",
      image: "/buca.png",
      link: "https://buca.ca/",
      description:
        "Built an ecommerce platform that helped the owner generate $1022 in sales within the first month.",
    },
    {
      title: "Canada India Business",
      image: "/canada.png",
      link: "https://www.canada-indiabusiness.com/",
      description:
        "Built an ecommerce platform that helped the owner generate $1022 in sales within the first month.",
    },
    {
      title: "The Good Coffee Society",
      image: "/coffee.png",
      link: "https://thegoodcoffeesociety.com/",
      description: "Another example of a high-converting ecommerce store.",
    },
    {
      title: "Hawksmoor Air Street",
      image: "/food.png",
      link: "https://thehawksmoor.com/locations/airstreet/?utm_source=google&utm_medium=organic&utm_campaign=gbp",
      description: "Helped increase visibility and client conversions online.",
    },
    {
      title: "Business France UK",
      image: "/bf.png",
      link: "https://www.businessfrance.fr/en",
      description: "Delivered SEO optimized ecommerce website.",
    },
    {
      title: "Qatar Building Company",
      image: "/qatars.png",
      link: "https://qbc.qa/",
      description: "Designed modern UI for ecommerce business growth.",
    },
  ];

  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          My Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition bg-gray-50"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm">{p.description}</p>
                </div>
                {/* Link button with icon */}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-blue-600 hover:underline"
                >
                  Visit Site <ExternalLink className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
