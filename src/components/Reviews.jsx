export default function ReviewsAndGallery() {
  const reviews = [
    "./client1.png",
    "./client2.png",
    "./client3.png",
    "./client4.png",
    "./client5.png",
    // "./client6.png",
   
  ];

  

  return (
    <>
      {/* Reviews Section */}
      <section className="py-16 bg-[#1a1a1a] text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#ec7578]">
            Client Reviews
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((img, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden shadow-lg border border-[#2a2a2a]"
              >
                <img
                  src={img}
                  alt={`Review ${i + 1}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

     
    </>
  );
}
