import React from "react";
import { Award, Users, Target, Lightbulb } from "lucide-react";
export default function AboutMe() {
  // return (
  //   <section id="about" className="p-8 bg-white">
  //     <h2 className="text-2xl font-bold">Tentang Saya</h2>
  //     <div className="flex mt-4">
  //       {/* <img src="path/to/illustration.jpg" alt="Ilustrasi" className="w-1/3 rounded" /> */}
  //       <div className="ml-4">
  //         <p>
  //           “Saya Gagas, seorang Project Manager dengan latar belakang Graphic Design. Selama 3+ tahun, saya berfokus pada pembuatan desain visual dan animasi untuk streamer, serta kini memimpin tim kreatif dalam mengelola proyek desain dan
  //           multimedia. Dengan kombinasi keterampilan desain dan manajemen proyek, saya memastikan setiap pekerjaan selesai tepat waktu, berkualitas tinggi, dan sesuai kebutuhan klien.”{" "}
  //         </p>
  //         <p>3+ tahun pengalaman desain grafis.</p>
  //         <p>Project Manager di bidang kreatif.</p>
  //         <p>Fokus: koordinasi tim, desain, dan manajemen deadline.</p>
  //       </div>
  //     </div>
  //   </section>
  const stats = [
    { icon: Target, label: "Projects Completed", value: "150+" },
    { icon: Users, label: "Happy Clients", value: "80+" },
    { icon: Award, label: "Years Experience", value: "8+" },
    { icon: Lightbulb, label: "Creative Solutions", value: "300+" },
  ];
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">Tentang Saya</h2>
          <p className="text-lg text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">Seorang project manager yang menggabungkan pendekatan strategis dengan latar belakang desain kreatif.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Mewujudkan Ide Melalui Eksekusi Strategis</h3>

            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-200 leading-relaxed">
                Saya adalah seorang project manager yang menggabungkan pendekatan strategis dengan latar belakang desain kreatif. Berawal sebagai graphic designer dan animator, saya telah berfokus selama lebih dari 3 tahun pada pembuatan
                desain yang menarik, terutama untuk streamer dan media digital. Kini, dengan peran sebagai Project Manager, saya memadukan pemikiran strategis dengan pengalaman kreatif untuk menghadirkan hasil yang berdampak nyata.
              </p>
              <p className="text-gray-600 dark:text-gray-200 leading-relaxed">
                Perjalanan saya dari dunia desain menuju manajemen proyek memberi saya keunggulan unik dalam menjembatani tujuan bisnis dengan solusi kreatif. Saya percaya bahwa eksekusi strategis yang solid, dipadukan dengan sentuhan
                desain yang tepat, dapat menghasilkan proyek yang tidak hanya selesai tepat waktu dan sesuai anggaran, tetapi juga memberikan nilai lebih bagi pengguna akhir.
              </p>
              <p className="text-gray-600 dark:text-gray-200 leading-relaxed">
                Dengan pendekatan yang menggabungkan metodologi agile dan design thinking, saya memastikan setiap ide dapat diwujudkan menjadi solusi yang fungsional, menarik, dan efektif.{" "}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Project Management", "UI/UX Design", "Digital Illustration", "Team Leadership", "Agile/Scrum", "Design Systems"].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://plus.unsplash.com/premium_photo-1683749805442-dd033af82294?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFuYWdlbWVudHxlbnwwfDF8MHx8fDA%3D?"
              alt="Creative workspace"
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-900 dark:hover:bg-primary-900 hover:bg-primary-50 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-800 text-primary-600 rounded-lg mb-4">
                <stat.icon size={24} />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-200 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
