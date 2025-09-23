import React from "react";

const Reviews = () => {
  const reviews = [
    { name: "Sarah Johnson", text: "Amazing work! My website looks fantastic." },
    { name: "David Lee", text: "Professional and fast delivery. Highly recommended!" },
    { name: "Emily Davis", text: "Great communication and perfect execution of the project." },
  ];

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Client Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-4">"{r.text}"</p>
              <h3 className="font-semibold text-lg">{r.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
