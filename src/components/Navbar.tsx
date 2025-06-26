import React from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-3 bg-gradient-to-r from-[#18122B] to-[#2D1B4A] rounded-b-2xl shadow-lg flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2 font-bold text-2xl text-white">
        <span className="tracking-tight">Carlos Mafla</span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex gap-8 text-white font-medium">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:text-fuchsia-400 transition-colors duration-200 relative px-2"
          >
            {link.name}
            {/* Underline for active link (example: Home) */}
            {link.name === "Home" && (
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-fuchsia-500 rounded"></span>
            )}
          </a>
        ))}
      </div>

      {/* Right Side: Theme Toggle & Contact Button */}
      <div className="flex items-center gap-4">
        {/* Light/Dark Toggle */}
        <div className="flex items-center gap-1 bg-[#2D1B4A] px-2 py-1 rounded-full">
          <span className="text-xs text-white">Light</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:bg-fuchsia-600 transition-all"></div>
            <span className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-all peer-checked:translate-x-4"></span>
          </label>
          <span className="text-xs text-fuchsia-400 font-semibold">Dark</span>
        </div>
        {/* Contact Me Button */}
        <a
          href="#contact"
          className="bg-fuchsia-700 hover:bg-fuchsia-600 text-white font-bold px-6 py-2 rounded-full shadow-lg transition-colors duration-200 text-base"
        >
          Contact me
        </a>
      </div>
    </nav>
  );
} 