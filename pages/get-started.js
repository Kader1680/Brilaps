import Head from "next/head";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function GetStarted() {
  const socials = [
    {
      name: "WhatsApp",
      href: "https://wa.me/213549891600",
      icon: <FaWhatsapp size={28} />,
    },
    {
      name: "Gmail",
      href: "mailto:ouldhenniabaghdad@gmail.com",
      icon: <SiGmail size={28} />,
    },
    {
      name: "Facebook",
      href: "https://web.facebook.com/profile.php?id=61575335054762",
      icon: <FaFacebookF size={28} />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/brilaps7/",
      icon: <FaInstagram size={28} />,
    },
  ];

  return (
    <>
      <Head>
        <title>Contact us - Blinder</title>
      </Head>
      <div className="pt-28 pb-12">
        <div className="custom-screen text-gray-600">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Connect with us
            </h1>
            <p className="mt-3 text-gray-500">
              Reach out directly through your favorite social platform
            </p>
          </div>

          {/* Social Grid */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {socials.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center gap-2 p-6 border rounded-lg shadow-sm hover:shadow-md transition text-gray-600 hover:text-gray-800"
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
