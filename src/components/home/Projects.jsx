import React, { useState } from "react";
import { ExternalLink, Eye } from "lucide-react";

export default function Projects() {
  // return (
  //   <section id="projects" className="p-8 bg-white">
  //     <h2 className="text-2xl font-bold">Projects / Case Studies</h2>
  //     <div className="mt-4">
  //       <h3 className="font-bold">Project 1: Implementasi ERP System</h3>
  //       <p>Tujuan: Digitalisasi bisnis manufaktur</p>
  //       <p>Tools: Jira, MS Project, Agile</p>
  //       <p>Tim: 15 orang</p>
  //       <p>Hasil: Selesai lebih cepat, efisiensi biaya 20%</p>
  //       <img src="path/to/dashboard.jpg" alt="Screenshot Dashboard" className="mt-2 rounded" />
  //     </div>
  //     <div className="mt-4">
  //       <h3 className="font-bold">Project 2: Mobile App Development</h3>
  //       <p>Tujuan: Aplikasi pelanggan retail</p>
  //       <p>Tools: Trello, Scrum</p>
  //       <p>Hasil: 10.000+ pengguna aktif dalam 6 bulan</p>
  //     </div>
  //   </section>
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      description: "Led the complete redesign of a major e-commerce platform, improving user experience and increasing conversion rates by 35%.",
      category: "management",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Project Management", "Team Leadership", "Agile"],
      duration: "6 months",
      teamSize: "12 members",
    },
    {
      id: 2,
      title: "Mobile Banking App UI/UX",
      description: "Designed an intuitive mobile banking interface focusing on security, accessibility, and user-friendly financial management.",
      category: "design",
      image: "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["UI/UX Design", "Mobile Design", "User Research"],
      duration: "4 months",
      users: "500K+ active users",
    },
    {
      id: 3,
      title: "Brand Illustration Series",
      description: "Created a comprehensive illustration library for a tech startup, establishing their visual identity across digital platforms.",
      category: "illustration",
      image: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Digital Illustration", "Brand Identity", "Visual Design"],
      duration: "3 months",
      deliverables: "150+ illustrations",
    },
    {
      id: 4,
      title: "Healthcare Portal Development",
      description: "Managed the development of a comprehensive healthcare portal, coordinating between multiple stakeholders and technical teams.",
      category: "management",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Project Management", "Healthcare", "Compliance"],
      duration: "8 months",
      budget: "$2.5M managed",
    },
    {
      id: 5,
      title: "SaaS Dashboard Interface",
      description: "Designed a comprehensive dashboard for a SaaS platform, focusing on data visualization and user workflow optimization.",
      category: "design",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Dashboard Design", "Data Visualization", "SaaS"],
      duration: "5 months",
      improvement: "60% faster task completion",
    },
    {
      id: 6,
      title: "Educational Content Illustrations",
      description: "Developed engaging illustrations for an educational platform, making complex concepts accessible through visual storytelling.",
      category: "illustration",
      image: "https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Educational Design", "Character Design", "Storytelling"],
      duration: "4 months",
      reach: "1M+ students impacted",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "management", label: "Project Management" },
    { id: "design", label: "UI/UX Design" },
    { id: "illustration", label: "Illustration" },
  ];

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">Featured Work</h2>
          <p className="text-lg text-gray-600 dark:text-gray-200 max-w-2xl mx-auto mb-8">Menampilkan proyek-proyek di bidang manajemen proyek, desain UI/UX, dan ilustrasi</p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors duration-300 ${activeFilter === filter.id ? "bg-primary-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="transform translate-y-4 opacity-0 hover:translate-y-0 hover:opacity-100 transition-all duration-300">
                    <button className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-100 transition-colors mr-3">
                      <Eye size={20} />
                    </button>
                    <button className="bg-primary-600 text-white p-3 rounded-full hover:bg-primary-700 transition-colors">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4 line-clamp-3">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 dark:text-gray-700 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Stats */}
                <div className="border-t pt-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex justify-between items-center">
                    <span>Duration: {project.duration}</span>
                    {project.teamSize && <span>Team: {project.teamSize}</span>}
                    {project.users && <span>{project.users}</span>}
                    {project.deliverables && <span>{project.deliverables}</span>}
                    {project.budget && <span>{project.budget}</span>}
                    {project.improvement && <span>{project.improvement}</span>}
                    {project.reach && <span>{project.reach}</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-200 mb-6">Tertarik melihat karya lainnya atau membicarakan proyek baru?</p>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-300">
            Ayo Kolaborasi!{" "}
          </button>
        </div>
      </div>
    </section>
  );
}
