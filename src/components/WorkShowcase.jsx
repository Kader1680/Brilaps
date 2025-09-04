import { useState } from "react";

const projects = [
  {
    title: "Buca Restaurant Online",
    image: "./buca.png",
    link: "https://buca.ca/",
    description:
      "Built an ecommerce platform that helped the owner generate $1022 in sales within the first month.",
  },
  {
    title: "Canada India Business",
    image: "./canada.png",
    link: "https://www.canada-indiabusiness.com/",
    description:
      "Built an ecommerce platform that helped the owner generate $1022 in sales within the first month.",
  },
  {
    title: "The Good Coffee Society",
    image: "./coffee.png",
    link: "https://thegoodcoffeesociety.com/",
    description: "Another example of a high-converting ecommerce store.",
  },
  {
    title: "Hawksmoor Air Street",
    image: "./food.png",
    link: "https://thehawksmoor.com/locations/airstreet/?utm_source=google&utm_medium=organic&utm_campaign=gbp",
    description: "Helped increase visibility and client conversions online.",
  },
  {
    title: "Business France UK",
    image: "./bf.png",
    link: "https://www.businessfrance.fr/en",
    description: "Delivered SEO optimized ecommerce website.",
  },
  {
    title: "Qatar Building Company",
    image: "./qatars.png",
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

  return (
    <section id="work" className="py-16   text-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#ec7578]">
          My Work
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {paginatedProjects.map((proj, i) => (
            <div
              key={i}
              className="  border border-[#2a2a2a] rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:border-[#ec7578]"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-[#7794e5]">
                  {proj.title}
                </h3>
                <p className="text-sm text-[#9e89c0] mb-4">{proj.description}</p>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#ec7578] hover:bg-[#c57f9c] text-white px-4 py-2 rounded-md transition"
                >
                  Visit Site
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: count }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-2 rounded-md ${
                page === i + 1
                  ? "bg-[#ec7578] text-white"
                  : "bg-transparent border border-[#ec7578] text-[#ec7578] hover:bg-[#ec7578] hover:text-white"
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
