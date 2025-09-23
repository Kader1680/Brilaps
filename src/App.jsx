import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Work from "./components/Work";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
    <button
  class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
  Button
</button>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Work />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
