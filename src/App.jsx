// App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkShowcase from "./components/WorkShowcase";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Analytics from "./components/Analytics";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import "./App.css"
 function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Reviews /> 
      <Services />
      <Contact />

      <Analytics />
      <WorkShowcase />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
