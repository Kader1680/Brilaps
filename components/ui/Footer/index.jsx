import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const socials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/213549891600",
    icon: <FaWhatsapp size={22} />,
  },
  {
    name: "Gmail",
    href: "mailto:ouldhenniabaghdad@gmail.com",
    icon: <SiGmail size={22} />,
  },
  {
    name: "Facebook",
    href: "https://web.facebook.com/profile.php?id=61575335054762",
    icon: <FaFacebookF size={22} />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/brilaps7/",
    icon: <FaInstagram size={22} />,
  },
];

const Footer = () => (
  <footer className="bg-gray-50">
    <div className="custom-screen pt-16">
      <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
        <p className="text-gray-600">
          © 2025 Brilaps Startup. All rights reserved.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-x-6 text-gray-400 mt-6 sm:mt-0">
          {socials.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              aria-label={item.name}
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-600 transition duration-150"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
