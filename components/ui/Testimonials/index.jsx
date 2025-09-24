import Image from "next/image";

const Testimonials = () => {
  const reviews = [
    {
      image: "/client1.jpg",
      country: "America",
      flag: "/usa.png",
    },
    {
      image: "/client2.png",
      country: "🇦🇪 United Arab Emirates",
      flag: "/uae.png",
    },
    {
      image: "/client3.png",
      country: "🇬🇧 United Kingdom",
      flag: "/uk.png",
    },
    {
      image: "/client4.png",
      country: "🇫🇷 France",
      flag: "/france.png",
    },
    {
      image: "/client5.png",
      country: "America",
      flag: "/usa.png",
    },
    {
      image: "/clientV.png",
      country: "America",
      flag: "/usa.png",
    },
    {
      image: "/client7.png",
      country: "🇩🇿 Algeria",
      flag: "/algeria.png",
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Client Reviews
          </h2>
          <p className="text-xl text-gray-700">
            What my clients say about working with me
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105"
            >
              {/* Flag Icon */}
              <div className="absolute top-2 left-2 w-8 h-6">
                <Image
                  src={review.flag}
                  alt={`${review.country} Flag`}
                  width={32}
                  height={24}
                  className="rounded shadow-md"
                />
              </div>

              {/* Full Image */}
              <Image
                src={review.image}
                alt={`Client ${index + 1}`}
                width={500}
                height={256}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
