export default function Skills() {
  // return (
  //   <section id="skills" className="p-8 bg-gray-100">
  //     <h2 className="text-2xl font-bold">Skills</h2>
  //     <div className="mt-4">
  //       <h3 className="font-bold">Manajemen Proyek:</h3>
  //       <p>[ Project Planning ] [ Team Coordination ] [ Client Communication ] [ Agile / Scrum Basics]</p>
  //       <h3 className="font-bold">Desain & Kreatif:</h3>
  //       <p>[ Adobe Photoshop, Illustrator ] [ Motion Graphics / After Effects ] [ Branding & Visual Identity ][ Layout & UI Visual]</p>
  //     </div>
  //   </section>
  const skillCategories = [
    {
      title: "Project Management",
      skills: [
        { name: "Agile/Scrum", level: 95 },
        { name: "Risk Management", level: 88 },
        { name: "Team Leadership", level: 92 },
        { name: "Budget Planning", level: 85 },
        { name: "Stakeholder Management", level: 90 },
      ],
    },
    {
      title: "UI/UX Design",
      skills: [
        { name: "User Research", level: 87 },
        { name: "Wireframing", level: 93 },
        { name: "Prototyping", level: 90 },
        { name: "Design Systems", level: 88 },
        { name: "Usability Testing", level: 85 },
      ],
    },
    {
      title: "Design Tools & Software",
      skills: [
        { name: "Figma", level: 95 },
        { name: "Adobe Creative Suite", level: 92 },
        { name: "Sketch", level: 88 },
        { name: "Principle", level: 82 },
        { name: "Miro/Mural", level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">Kumpulan keahlian lengkap yang mencakup manajemen proyek, desain, dan kepemimpinan kreatif.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-6 text-center">{category.title}</h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
