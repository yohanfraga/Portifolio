const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "X-Bits Software",
    location: "Curitiba, Brazil",
    period: "February 2024 - Present",
    description: "Working on two main projects:",
    projects: [
      {
        name: "Traceability Project",
        details: [
          "Developed a traceability system for an explosives company, ensuring compliance with strict regulatory requirements.",
          "Ensured data sensitivity and compliance by implementing secure logging, encryption, and role-based access control.",
          "Optimized order processing using Unit of Work and Repository Pattern, handling quantity checks, compliance approvals, and transport scheduling.",
          "Improved scalability and performance, reducing processing time by 78% through optimized database queries, asynchronous operations, and multithreading.",
          "Integrated with SAP to synchronize order data, stock movements, and compliance logs via RESTful APIs.",
          "Implemented robust CI/CD pipelines with automated builds, tests, and deployments, ensuring consistent and reliable delivery.",
        ],
      },
      {
        name: "Partilha",
        details: [
          "Developed a testamentary will software to securely write and store testamentary information.",
          "Designed the backend to handle sensitive legal data, ensuring data integrity, encryption, and secure retrieval mechanisms.",
          "Established CI/CD workflows to automate testing and deployment processes, increasing development velocity and ensuring the secure handling of sensitive legal data throughout the delivery pipeline.",
        ],
      },
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">Experience</h2>
          <div className="mt-2 h-1 w-20 bg-orange-500 mx-auto"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-orange-200 pl-8 ml-4">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`mb-12 ${index === experiences.length - 1 ? "" : ""}`}>
                <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-[9px] mt-1.5"></div>
                <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                <div className="flex items-center text-orange-500 mb-2">
                  <span className="font-medium">{exp.company}</span>
                  <span className="mx-2">•</span>
                  <span>{exp.location}</span>
                  <span className="mx-2">•</span>
                  <span>{exp.period}</span>
                </div>
                <p className="text-gray-600 mb-4">{exp.description}</p>

                {exp.projects &&
                  exp.projects.map((project, pIndex) => (
                    <div key={pIndex} className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">{project.name}</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        {project.details.map((detail, dIndex) => (
                          <li key={dIndex} className="text-gray-600">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
