export default function Certifications() {
  return (
    <div className="mt-16 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">Certifications</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["PMP (Project Management Professional)", "Certified Scrum Master (CSM)", "Google UX Design Professional Certificate"].map((cert, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-500">
            <p className="font-medium text-gray-800">{cert}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
