import React, { useState } from 'react';
import { Menu, X, Code, Palette, Smartphone, Globe, Star, Mail, Phone, MapPin, ExternalLink, Github, Linkedin } from 'lucide-react';
 import { CheckCircle, Users, Target, ArrowRight } from 'lucide-react';

const PortfolioWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav style={{backgroundColor:"#3a1277"}} className="shadow-lg fixed w-full top-0 z-50 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-4xl font-bold fs-2">Jeoloardo</h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className=" hover:text-blue-600 px-3 py-2 text-xl font-bold transition-colors ">Home</a>
                <a href="#who-am" className=" hover:text-blue-600 px-3 py-2 text-xl font-bold transition-colors">Who Am I</a>
                <a href="#work" className=" hover:text-blue-600 px-3 py-2 text-xl font-bold transition-colors">Work</a>
                <a href="#reviews" className="  hover:text-blue-600 px-3 py-2 text-xl font-bold transition-colors">Reviews</a>
                <a href="#contact" className="  hover:text-blue-600 px-3 py-2 text-xl font-bold transition-colors">Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-800 hover:text-blue-600">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="text-gray-800 hover:text-blue-600 block px-3 py-2 text-sm font-medium" onClick={toggleMenu}>Home</a>
              <a href="#who-am" className="text-gray-800 hover:text-blue-600 block px-3 py-2 text-sm font-medium" onClick={toggleMenu}>Who Am I</a>
              <a href="#work" className="text-gray-800 hover:text-blue-600 block px-3 py-2 text-sm font-medium" onClick={toggleMenu}>Work</a>
              <a href="#reviews" className="text-gray-800 hover:text-blue-600 block px-3 py-2 text-sm font-medium" onClick={toggleMenu}>Reviews</a>
              <a href="#contact" className="text-gray-800 hover:text-blue-600 block px-3 py-2 text-sm font-medium" onClick={toggleMenu}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Professional Website
                <span className="text-blue-600"> Development</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Transform your business ideas into powerful digital solutions. I create modern, responsive websites that drive results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button style={{background:"linear-gradient(to right, #FF3834 0%, #FF7133 100%)"}} className="  text-white px-8 py-4 rounded-lg font-semibold  transition-colors">
                  <a href="#contact"> Contact Me </a>
                  
                </button>
                <button style={{background:"linear-gradient(to right, #FF3834 0%, #FF7133 100%)"}} className="border-2  text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                 <a href="#work"> See My Work</a>
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/New_10img.png"
                alt="Hero"
                className="rounded-xl shadow-lg"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-200 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>



 
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative">
              {/* Main circular image container */}
              <div className="w-full max-w-md mx-auto lg:max-w-lg">
                <div className="aspect-square rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 p-8">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                    {/* Placeholder for developer image */}
                    <div className="   rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white">
                      <img  src="/me.png" alt="Developer" className="w-full h-full object-cover"/>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative arrow */}
              <div className="absolute bottom-0 right-0 transform translate-x-8 translate-y-8 hidden lg:block">
                <div className="relative">
                  <svg width="120" height="60" viewBox="0 0 120 60" className="text-blue-300">
                    <path d="M10 30 Q60 10 110 30" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                  </svg>
                  <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 text-blue-500" size={24} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:pl-8">
            {/* Header */}
            <div className="mb-8">
              <p className="text-blue-600 font-semibold text-lg mb-2">
                Une gestion à 360° de vos projets
              </p>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                I'm More Than Just a 
                <span className="block">Fullstack Developer</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              Fast evolution and adaptation are essential for survival and growth of businesses. 
              As a fullstack developer, I have the technical and creative resources to quickly 
              respond to my clients' needs and deliver exceptional web solutions.
            </p>

            {/* Feature List */}
            <div className="space-y-8 mb-10">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    A Professional Developer
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    I'm a qualified and experienced developer in both frontend and backend 
                    technologies, specializing in modern web development frameworks.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Full Range of Skills
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    I master a wide range of technologies including React, Node.js, Next.js, 
                    databases, and cloud services to handle any type of project requirements.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Business-Focused Approach
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    I analyze my clients' needs while taking into account all the specificities 
                    of their business activities to deliver tailored solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>





    <section
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: "url('https://prestacode.fr/wp-content/uploads/2021/06/19.png')" }} // replace with your image in public/
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Item 1 */}
          <div>
            <h2 className="text-4xl font-bold">22+</h2>
            <p className="mt-2 text-lg">Projects Delivered</p>
          </div>

          {/* Item 2 */}
          <div>
            <h2 className="text-4xl font-bold">12+</h2>
            <p className="mt-2 text-lg">Happy Clients</p>
          </div>

          {/* Item 3 */}
          <div>
            <h2 className="text-4xl font-bold">7+</h2>
            <p className="mt-2 text-lg">Years Experience</p>
          </div>
        </div>
      </div>
    </section>


 



       <section id="who-am" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who Am I?</h2>
              <p className="text-lg text-gray-700 mb-6">
                I'm a passionate freelance web developer with over 5 years of experience creating exceptional digital experiences. I specialize in modern web technologies and focus on delivering solutions that perfectly match your business needs.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">50+</h3>
                  <p className="text-gray-700">Projects Completed</p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-purple-600 mb-2">100%</h3>
                  <p className="text-gray-700">Client Satisfaction</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">React</span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Node.js</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Next.js</span>
                <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">JavaScript</span>
                <span className="px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium">Laravel</span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-purple-600 p-8 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-4">My Approach</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <span>Understanding your business needs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <span>Creative design & development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <span>Testing & optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">4</span>
                    </div>
                    <span>Launch & ongoing support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services I Offer</h2>
            <p className="text-xl text-gray-700">Comprehensive web development solutions for your business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Website Development</h3>
              <p className="text-gray-700">Custom websites built with modern technologies for optimal performance.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ecommerce Building</h3>
              <p className="text-gray-700">Responsive mobile applications that work seamlessly across all devices.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">SAAS </h3>
              <p className="text-gray-700">Beautiful and intuitive designs that enhance user experience.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Solutions</h3>
              <p className="text-gray-700">Tailored software solutions to meet your specific business requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Portfolio Section */}
      <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Work</h2>
          <p className="text-xl text-gray-700">
            Some of my latest projects and achievements
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    Website
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-500 hover:text-blue-600 cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Reviews</h2>
            <p className="text-xl text-gray-700">What my clients say about working with me</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "Exceptional work! The website exceeded our expectations and was delivered on time. Professional communication throughout the project."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">JD</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">John Davis</h4>
                  <p className="text-gray-600 text-sm">CEO, Tech Startup</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "Outstanding developer! Created exactly what we needed for our e-commerce platform. Highly recommended for any web development project."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">SM</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Sarah Miller</h4>
                  <p className="text-gray-600 text-sm">Founder, Online Store</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "Great attention to detail and excellent problem-solving skills. The mobile app works perfectly and our users love it!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">MJ</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Michael Johnson</h4>
                  <p className="text-gray-600 text-sm">Product Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
         <section id="contact" class="py-20 gradient-bg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-black mb-4">Let's Work Together</h2>
                <p class="text-xl text">Ready to start your next project? Get in touch today!</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div class="bg-white rounded-2xl p-8 shadow-xl contact-card">
                    <h3 class="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                    
                    <div class="space-y-6">
                         <div class="flex items-center space-x-4">
                            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <i class="fas fa-envelope text-blue-600 text-xl"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-gray-900">Email</h4>
                                <p class="text-gray-700">ouldhenniabaghdad.com</p>
                            </div>
                        </div>
                        
                     
                        
                         <div class="flex items-center space-x-4">
                            <div class="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                                <i class="fab fa-whatsapp text-emerald-600 text-xl"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-gray-900">WhatsApp</h4>
                                <p class="text-gray-700">+213 549891600</p>
                            </div>
                        </div>
                        
                         <div class="flex items-center space-x-4">
                            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                <i class="fas fa-map-marker-alt text-purple-600 text-xl"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-gray-900">Location</h4>
                                <p class="text-gray-700">Available worldwide</p>
                            </div>
                        </div>
                    </div>
                    
                     <div class="mt-10">
                        <h4 class="font-bold text-gray-900 mb-4 text-xl">Follow Me</h4>
                        <div class="grid grid-cols-4 gap-3">
                             <a href="https://www.linkedin.com/in/abdelkader-ould-hennia/" class="social-icon w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 cursor-pointer transition-colors">
                                <i class="fab fa-linkedin-in text-blue-600 text-lg"></i>
                            </a>
                            
                             <a href="https://x.com/Kader_1680" class="social-icon w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 cursor-pointer transition-colors">
                                <i class="fab fa-twitter text-blue-400 text-lg"></i>
                            </a>
                            
                             <a href="https://www.youtube.com/@Jeolardo1972/" class="social-icon w-12 h-12 bg-red-100 rounded-full flex items-center justify-center hover:bg-red-200 cursor-pointer transition-colors">
                                <i class="fab fa-youtube text-red-600 text-lg"></i>
                            </a>
                            
                             <a href="https://github.com/Kader1680" class="social-icon w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer transition-colors">
                                <i class="fab fa-github text-gray-700 text-lg"></i>
                            </a>
                            
                             <a href="https://web.facebook.com/profile.php?viewas=100000686899395&id=61575335054762" class="social-icon w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 cursor-pointer transition-colors">
                                <i class="fab fa-facebook-f text-blue-700 text-lg"></i>
                            </a>
                            
                          
                        </div>
                    </div>
                </div>
                
               
                <div class="rounded-2xl p-8 shadow-xl contact-card">
                    <h3 class="text-2xl font-bold text-black-800 mb-6">Send a Message</h3>
                    
                    <form class="space-y-6">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                            <input type="text" id="name" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="John Doe" />
                        </div>
                        
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input type="email" id="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="john@example.com"/>
                        </div>
                        
                        <div>
                            <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                            <input type="text" id="subject" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="Project Inquiry"/>
                        </div>
                        
                        <div>
                            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                            <textarea id="message" rows="5" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="Tell me about your project..."></textarea>
                        </div>
                        
                        <button type="submit" class="w-full gradient-bg text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center">
                            <i class="fas fa-paper-plane mr-2"></i> Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>

        
        </section>

      <footer className="bg-[#3a1277] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Jeoloardo Web Solutions</h3>
            <p className="text-gray-400 mb-6">Professional freelance web development services</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#who-am" className="text-gray-400 hover:text-white transition-colors">Who Am I</a>
              <a href="#work" className="text-gray-400 hover:text-white transition-colors">Work</a>
              <a href="#reviews" className="text-gray-400 hover:text-white transition-colors">Reviews</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
           
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioWebsite;