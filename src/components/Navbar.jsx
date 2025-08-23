import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  // return (
  //   <header className="bg-gray-800 text-white p-4">
  //     <div className="container mx-auto flex justify-between items-center">
  //       <h1 className="text-xl font-bold">Nama</h1>
  //       <nav>
  //         <ul className="flex space-x-4">
  //           <li>
  //             <a href="#home">Home</a>
  //           </li>
  //           <li>
  //             <a href="#about">About</a>
  //           </li>
  //           <li>
  //             <a href="#experience">Experience</a>
  //           </li>
  //           <li>
  //             <a href="#projects">Projects</a>
  //           </li>
  //           <li>
  //             <a href="#skills">Skills</a>
  //           </li>
  //           <li>
  //             <a href="#certifications">Certifications</a>
  //           </li>
  //           <li>
  //             <a href="#contact">Contact</a>
  //           </li>
  //         </ul>
  //       </nav>
  //     </div>
  //   </header>

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary-700 dark:text-primary-500">Gagas Firmansyah</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center justify-center space-x-8">
              <ThemeToggle />
              {[
                { name: "Home", id: "hero" },
                { name: "About", id: "about" },
                { name: "Skills", id: "skills" },
                { name: "Portfolio", id: "portfolio" },
                { name: "Services", id: "services" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <li key={item.id}>
                  <button onClick={() => scrollToSection(item.id)} className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-500 font-medium transition-colors duration-200">
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 dark:text-gray-100 hover:text-primary-600 transition-colors">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800  border-t border-gray-200">
            <nav className="py-4">
              <ul className="space-y-2">
                {[
                  { name: "Home", id: "hero" },
                  { name: "About", id: "about" },
                  { name: "Skills", id: "skills" },
                  { name: "Portfolio", id: "portfolio" },
                  { name: "Services", id: "services" },
                  { name: "Contact", id: "contact" },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-500 hover:bg-gray-900 transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
                <div className="px-4">
                  <ThemeToggle />
                </div>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
