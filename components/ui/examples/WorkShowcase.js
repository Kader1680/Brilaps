import { useState } from "react";
import Image from "next/image";

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
    image: "/coffe.png",
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

export default function WorkShowcase() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const count = Math.ceil(projects.length / itemsPerPage);

  const paginatedProjects = projects.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handlePageChange = (value) => {
    setPage(value);
  };

  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Projects We’ve Delivered
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProjects.map((proj, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
            >
              <div className="relative w-full h-52">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {proj.title}
                </h3>
                <p className="text-gray-600 mt-2">{proj.description}</p>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 border border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition"
                >
                  Visit Site
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 space-x-2">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-4 py-2 rounded-lg border ${
                page === i + 1
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-800 hover:bg-gray-100"
              } transition`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
