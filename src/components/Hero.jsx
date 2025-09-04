export default function Hero() {
  return (
    <div className="min-h-screen flex items-center bg-gradient-to-r from-gray-900 to-gray-700 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
           <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm Jeolardo 
            </h1>
            <h2 className="text-xl md:text-2xl mb-4">
              Fullstack Web Developer | Creator of modern websites 🚀
            </h2>
            <p className="mb-6 text-lg text-gray-300">
              Welcome to my portfolio! I specialize in building responsive,
              fast, and user-friendly web applications that help businesses
              grow online.
            </p>
            <a
              href="#work"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
            >
              View My Work
            </a>
          </div>

           <div className="flex justify-center">
            <img
              src="./me.png" 
              alt="Jeolardo"
              className="rounded-2xl shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
