import { Link } from "react-router-dom";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  // return (
  //   <section id="home" className="flex items-center justify-center h-screen bg-gray-200">
  //     <div className="text-center flex flex-col-reverse md:flex-col gap-4 ">
  //       <div className="flex-1">
  //         <h2 className="text-3xl font-bold mt-4">Gagas Firmansyah</h2>
  //         <p className="text-xl">Project Manager | Ex-Graphic Designer</p>
  //         <p className="mt-2">"Menggabungkan pengalaman manajemen proyek dengan keahlian desain grafis untuk menghasilkan hasil terbaik."</p>
  //         <div className="mt-4">
  //           <Link to={"contact"} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
  //             Hire Me
  //           </Link>
  //           <Link to={"projects"} className="bg-green-500 text-white px-4 py-2 rounded">
  //             View Portfolio
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="flex-1">
  //       <img
  //         src="https://media.licdn.com/dms/image/v2/D4D35AQEMP6Yekzsy2w/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1721197236942?e=1756479600&v=beta&t=3P2xdlaGnLCPT3ekyHlq-r9k4FERlT1jOXISD1qlavY"
  //         alt="Foto Profil"
  //         className="rounded-full w-32 h-32 mx-auto"
  //       />
  //     </div>
  //   </section>
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="flex-1 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4 animate-fade-up">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                  Hi, I'm <span className="text-primary-600">Gagas Firmansyah</span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-200 font-light">Project Manager | UI/UX Designer | Illustrator</p>
              </div>

              <p className="text-lg text-gray-500 dark:text-gray-300 max-w-2xl animate-fade-up animation-delay-200">
                "Menggabungkan kreativitas desain dengan ketepatan manajemen proyek untuk menghadirkan solusi digital yang efektif dan berkesan."{" "}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up animation-delay-400">
                <button
                  onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  View My Work
                </button>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-8 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors duration-300"
                >
                  Get In Touch
                </button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-6 animate-fade-up animation-delay-600">
                <a href="https://www.linkedin.com/in/m-gagas-firmansyah-98309031a/?originalSubdomain=id" className="text-gray-400 hover:text-primary-600 transition-colors duration-300">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/gagastech" className="text-gray-400 hover:text-primary-600 transition-colors duration-300">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors duration-300">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1  mb-6">
            <div className="flex justify-center animate-slide-in-right">
              <div className="relative">
                <div className="w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl">
                  <img src="/gagas.webp" alt="Gagas Firmansyah - Project Manager & Designer" className="w-full h-full object-cover" />
                </div>
                <div className="absolute md:-bottom-4 md:-right-4 -bottom-2 -right-2  md:w-20 md:h-20 lg:w-24 lg:h-24 w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} className="text-gray-400 hover:text-primary-600 transition-colors duration-300">
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
