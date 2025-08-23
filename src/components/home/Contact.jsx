import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";

export default function Contact() {
  // return (
  //   <section id="contact" className="p-8 bg-white">
  //     <h2 className="text-2xl font-bold">Contact</h2>
  //     <form className="mt-4">
  //       <div className="mb-4">
  //         <label className="block">Nama:</label>
  //         <input type="text" className="border rounded w-full p-2" />
  //       </div>
  //       <div className="mb-4">
  //         <label className="block">Email:</label>
  //         <input type="email" className="border rounded w-full p-2" />
  //       </div>
  //       <div className="mb-4">
  //         <label className="block">Pesan:</label>
  //         <textarea className="border rounded w-full p-2" rows="4"></textarea>
  //       </div>
  //       <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
  //         Kirim
  //       </button>
  //     </form>
  //     <div className="mt-4">
  //       <a href="https://linkedin.com" className="mr-4">
  //         LinkedIn
  //       </a>
  //       <a href="mailto:email@example.com" className="mr-4">
  //         Email
  //       </a>
  //       <a href="https://wa.me/your-number">WhatsApp</a>
  //     </div>
  //   </section>
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);

    alert("Thank you for your message! I'll get back to you soon.");
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">Let's Work Together</h2>
          <p className="text-lg text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">Siap mewujudkan proyek Anda? Mari diskusikan bagaimana saya dapat membantu Anda mencapai tujuan.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-6">Get In Touch</h3>
              <p className="text-gray-600 dark:text-gray-200 mb-8">Saya selalu terbuka untuk membahas peluang baru, proyek kreatif, atau kolaborasi potensial. Jangan ragu untuk menghubungi melalui salah satu saluran di bawah ini.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-50">Email</h4>
                  <p className="text-gray-600 dark:text-gray-200">gagas.firmansyah@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-50">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-200">+62 883 999 932</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-50">Location</h4>
                  <p className="text-gray-600 dark:text-gray-200">Tegal, Jawa Tengah</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 dark:text-gray-50 mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 hover:bg-primary-200 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 hover:bg-primary-200 transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 hover:bg-primary-200 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 dark:text-gray-50 dark:bg-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 dark:text-gray-50 dark:bg-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Project Type
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 dark:text-gray-50 dark:bg-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="project-management">Project Management</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="illustration">Digital Illustration</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 dark:text-gray-50 dark:bg-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Bagikan detail proyek, timeline, dan target Anda..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
