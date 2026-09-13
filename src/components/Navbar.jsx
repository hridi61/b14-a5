import { useState } from "react";

const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <button
          className="md:hidden text-gray-700 text-xl"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <a href="#" className="flex items-center gap-2 font-bold text-lg">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 text-white flex items-center justify-center text-sm">
            DS
          </span>
          Dev <span className="text-pink-600">Stack</span>
        </a>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          {navLinks.map((link) => (
            <a key={link} href="#" className="hover:text-pink-600">
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#" className="hidden sm:inline text-sm font-medium text-gray-600 hover:text-gray-900">
            Sign In
          </a>
          <a href="#" className="text-sm font-semibold text-white bg-pink-600 px-4 py-2 rounded-full hover:bg-pink-700">
            Sign Up
          </a>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-3 px-4 pb-4 text-sm font-medium text-gray-600">
          {navLinks.map((link) => (
            <a key={link} href="#" onClick={() => setMenuOpen(false)}>
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;