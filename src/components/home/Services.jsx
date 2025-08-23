import React from "react";
import { CheckCircle, Users, Palette, Target, Clock, Award } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Target,
      title: "Project Management",
      description: "Kepemimpinan proyek dari awal hingga selesai, memastikan keberhasilan tepat waktu dan sesuai anggaran.",
      features: ["Agile & Waterfall methodologies", "Risk assessment & mitigation", "Team coordination & leadership", "Stakeholder communication", "Budget & timeline management"],
      price: "Starting at $5,000/month",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Solusi desain berfokus pada pengguna yang memadukan estetika dan fungsionalitas untuk pengalaman luar biasa.",
      features: ["User research & personas", "Wireframing & prototyping", "Design system development", "Usability testing", "Responsive design"],
      price: "Starting at $3,500/project",
    },
    {
      icon: Users,
      title: "Digital Illustration",
      description: "Ilustrasi kustom yang menghadirkan identitas merek Anda dan menyampaikan ide kompleks secara sederhana.",
      features: ["Brand illustration systems", "Character design", "Icon & infographic design", "Marketing visuals", "Web & print illustrations"],
      price: "Starting at $150/illustration",
    },
  ];

  const processSteps = [
    {
      icon: Users,
      title: "Penemuan (Discovery)",
      description: "Memahami tujuan, tantangan, dan kebutuhan Anda melalui sesi kolaboratif.",
    },
    {
      icon: Target,
      title: "Strategi (Strategy)",
      description: "Menyusun rencana komprehensif dengan tonggak pencapaian dan indikator keberhasilan yang jelas.",
    },
    {
      icon: Palette,
      title: "Pembuatan (Creation)",
      description: "Mewujudkan ide melalui proses desain dan pengembangan yang iteratif.",
    },
    {
      icon: Award,
      title: "Penyerahan (Delivery)",
      description: "Menjamin peluncuran sukses dengan dukungan dan optimisasi berkelanjutan.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">Services I Offer</h2>
          <p className="text-lg text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">Solusi menyeluruh yang mencakup manajemen proyek, desain, dan layanan kreatif.</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-primary-600" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-200 mb-6">{service.description}</p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-200">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-lg font-semibold text-primary-600 mb-4">{service.price}</p>
                <button className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300">Get Started</button>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-50 mb-4">My Work Process</h3>
            <p className="text-lg text-gray-600 dark:text-gray-200">Metodologi terbukti yang menjamin hasil proyek yang sukses.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <step.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2">{step.title}</h4>
                  <p className="text-gray-600 dark:text-gray-200">{step.description}</p>
                </div>

                {/* Connection Line */}
                {index < processSteps.length - 1 && <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary-200 transform translate-x-4 -translate-y-1/2"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Why Work With Me */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-50 mb-8">Why Work With Me?</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <Clock className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2">On-Time Delivery</h4>
              <p className="text-gray-600 dark:text-gray-200">95% proyek diselesaikan sesuai jadwal atau lebih cepat.</p>
            </div>

            <div className="p-6">
              <Award className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2">Quality Focus</h4>
              <p className="text-gray-600 dark:text-gray-200">Perhatian cermat terhadap setiap detail dalam setiap hasil kerja.</p>
            </div>

            <div className="p-6">
              <Users className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2">Collaborative Approach</h4>
              <p className="text-gray-600 dark:text-gray-200">Komunikasi transparan sepanjang jalannya proyek.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
