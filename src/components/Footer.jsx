import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 bg-[#0f1e5c] text-white text-center">
      <p className="text-lg">
        © {new Date().getFullYear()} Brilaps. All rights reserved.
      </p>
      <div className="flex justify-center gap-6 mt-4">
        <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
        <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
