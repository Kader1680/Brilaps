import React from "react";

const Contact = () => {
  return (
  <section id="contact" class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold text-black mb-4">Let's Work Together</h2>
      <p class="text-xl text">Ready to start your next project? Get in touch today!</p>
    </div>

   
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      
    
      <a href="mailto:ouldhenniabaghdad.com" 
         class="bg-blue-500/10 hover:bg-blue-500/20 rounded-xl p-6 flex flex-col items-center justify-center text-center transition">
        <div class="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
          <i class="fas fa-envelope text-blue-600 text-2xl"></i>
        </div>
        <h4 class="font-bold text-gray-900">Email</h4>
        <p class="text-gray-700 text-sm break-words">ouldhenniabaghdad@gmail.com</p>
      </a>

      <a href="https://wa.me/213549891600" target="_blank"
         class="bg-emerald-500/10 hover:bg-emerald-500/20 rounded-xl p-6 flex flex-col items-center justify-center text-center transition">
        <div class="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
          <i class="fab fa-whatsapp text-emerald-600 text-2xl"></i>
        </div>
        <h4 class="font-bold text-gray-900">WhatsApp</h4>
        <p class="text-gray-700 text-sm">+213 549891600</p>
      </a>

      <a href="https://www.instagram.com/brilaps7/" target="_blank"
         class="bg-pink-500/10 hover:bg-pink-500/20 rounded-xl p-6 flex flex-col items-center justify-center text-center transition">
        <div class="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mb-4">
          <i class="fab fa-instagram text-pink-500 text-2xl"></i>
        </div>
        <h4 class="font-bold text-gray-900">Instagram</h4>
        <p class="text-gray-700 text-sm">@brilaps7</p>
      </a>

      
      <a href="https://web.facebook.com/profile.php?viewas=100000686899395&id=61575335054762" target="_blank"
         class="bg-blue-700/10 hover:bg-blue-700/20 rounded-xl p-6 flex flex-col items-center justify-center text-center transition">
        <div class="w-16 h-16 bg-blue-700/20 rounded-full flex items-center justify-center mb-4">
          <i class="fab fa-facebook-f text-blue-700 text-2xl"></i>
        </div>
        <h4 class="font-bold text-gray-900">Facebook</h4>
        <p class="text-gray-700 text-sm">Facebook Profile</p>
      </a>

    </div>
  </div>
</section>

  );
};

export default Contact;
