import { Heart, Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  // return (
  // <footer className="bg-gray-800 text-white p-4 text-center">
  //   <p>© 2025 [Nama Klien] | All Rights Reserved</p>
  // </footer>
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">Gagas Firmansyah</h3>
            <p className="text-gray-300 mb-6">Project Manager | UI/UX Designer | Illustrator</p>
            <p className="text-gray-400 text-sm">Mewujudkan ide menjadi pengalaman digital sukses dengan manajemen proyek yang tepat dan desain kreatif.</p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About", id: "about" },
                { name: "Skills", id: "skills" },
                { name: "Portfolio", id: "portfolio" },
                { name: "Services", id: "services" },
                { name: "Contact", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <button onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })} className="text-gray-300 hover:text-white transition-colors duration-200">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-300">
              <p>Tegal, Jawa Tengah </p>
              <p>gagas.firmansyah@gmail.com</p>
              <p>+62 883 999 932</p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} <span className="hover:underline">Syahrul.dev</span> All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0 flex items-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
}
