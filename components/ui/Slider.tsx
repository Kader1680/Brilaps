"use client";

import { useEffect, useRef } from "react";

const images = [
  "https://colorlib.com/wp/wp-content/uploads/sites/2/2_startup-website-template.jpg",
  "https://colorlib.com/wp/wp-content/uploads/sites/2/featured_startup-website-template.jpg",
  "https://www.sliderrevolution.com/wp-content/uploads/2022/02/Digeco.jpg",
  "https://templately.com/_next/image?url=https%3A%2F%2Fitems.templately.com%2Fpack-692422974f24255126aaa97bdc22951c%2Fgreentech-fintech-startup-website-template-banner-uvLf21K.jpg&w=2048&q=75",
];

export default function Slider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;
    const slideWidth = slider.scrollWidth / 2; // for infinite effect

    const autoScroll = () => {
      scrollAmount += 1;
      if (scrollAmount >= slideWidth) {
        scrollAmount = 0;
      }
      slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
    };

    const interval = setInterval(autoScroll, 30); // adjust speed
    return () => clearInterval(interval);
  }, []);

  return (
   <div className="relative w-full overflow-hidden bg-gray-100 py-8">
        <div className="flex w-max animate-scroll gap-8">
            {[...images, ...images].map((src, i) => (
            <div key={i} className="flex-shrink-0 w-64 h-40 bg-white rounded-xl shadow-md flex items-center justify-center">
                <img src={src} alt={`slide-${i}`} className="max-h-full max-w-full object-contain" />
            </div>
            ))}
        </div>
        </div>

  );
}
