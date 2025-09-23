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
import Flowshow from "./components/Flowshow";
import "./index.css";
const App = () => {
  return (
    <div>
 
      <Navbar />
      <Hero />
      {/* <Flowshow /> */}
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
