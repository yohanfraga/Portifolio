type Project = {
  name: string;
  description?: string;
  details: string[];
}

type Experience = {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  projects: Project[];
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "Backend Software Engineer",
    company: "X-Bits Software",
    location: "Curitiba, Brazil",
    period: "February 2024 - Present",
    description: "Working on two main projects:",
    projects: [
      {
        name: "Traceability Project",
        description: "Developed a traceability system for an explosives company, ensuring compliance with strict regulatory requirements.",
        details: [
          "Achieved 100% compliance with regulatory standards by implementing secure logging and role-based access control.",
          "Boosted throughput by reducing order processing latency by 78%, leveraging Unit of Work and Repository Patterns, improving quantity validation, compliance approval automation, and transport scheduling efficiency.",
          "Reduced average database query execution time from 1.8s to 0.4s and improved system responsiveness under high load through asynchronous programming and parallelism.",
          "Ensured real-time data consistency by integrating with SAP to sync 100% of order data, stock movement logs, and compliance checks via RESTful APIs.",
          "Implemented robust CI/CD pipelines with automated builds, tests, and deployments, ensuring consistent and reliable delivery.",
          "Designed and maintained unit and integration test suites, enabling early detection of defects and supporting continuous delivery practices.",
          "Collaborated within a 15-person cross-functional team—including DevOps, software architects, QAs, frontend/backend/mobile developers, UI/UX designers, and a Scrum Master—to define acceptance criteria and ensure high-quality feature delivery.",
        ],
      },
      {
        name: "Partilha Project",
        description: "Developed a secure testamentary software system designed to help users(lawyers) create, store, and manage digital wills while ensuring legal and data security compliance.",
        details: [
          "Designed the backend to handle sensitive legal data, ensuring data integrity, encryption, and secure retrieval mechanisms.",
          "Established CI/CD workflows to automate testing and deployment processes, increasing development velocity and ensuring the secure handling of sensitive legal data throughout the delivery pipeline.",
        ],
      },
    ],
  },
  {
    id: 2,
    role: "Open Source Contribution",
    company: "AsyncAPI.NET SDK – V3 Migration",
    location: "GitHub",
    period: "2025",
    description: "Contributed to the migration of the open-source AsyncAPI.NET SDK to version 3.0, aligning with the latest AsyncAPI specification and improving the SDK's long-term maintainability.",
    projects: [
      {
        name: "Core Development",
        details: [
          "Migrated and refactored over 20 core schema and model classes, ensuring alignment with the v3.0 specification while preserving backward compatibility.",
          "Improved schema parsing and validation logic to support complex nested schemas, reducing test failures by 35% and increasing spec compliance.",
          "Boosted unit test coverage from 62% to 84%, detecting and resolving multiple edge case bugs in the migration process.",
        ],
      },
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Experience</h2>
          <div className="mt-2 h-1 w-20 bg-orange-500 mx-auto"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-4 border-orange-200 dark:border-orange-800/50 pl-8 ml-4">
            <div className="absolute w-4 h-4 bg-white dark:bg-gray-900 -left-1 top-0"></div>
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`mb-12 ${index === experiences.length - 1 ? "" : ""}`}>
                <div className="absolute w-5 h-5 bg-orange-500 dark:bg-orange-400 rounded-full -left-[12px] mt-1.5 shadow-[0_0_0_4px_rgba(249,115,22,0.2)] dark:shadow-[0_0_0_4px_rgba(251,146,60,0.2)] animate-pulse"></div>
                <div className="absolute w-3 h-3 bg-white dark:bg-gray-900 rounded-full -left-[8px] mt-2.5"></div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{exp.role}</h3>
                <div className="flex items-center text-orange-500 dark:text-orange-400 mb-2">
                  <span className="font-medium">{exp.company}</span>
                  <span className="mx-2">•</span>
                  <span>{exp.location}</span>
                  <span className="mx-2">•</span>
                  <span>{exp.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>

                {exp.projects &&
                  exp.projects.map((project, pIndex) => (
                    <div key={pIndex} className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">{project.name}</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description || project.details[0]}</p>
                      <ul className="list-disc pl-6 space-y-2">
                        {project.details.slice(project.description ? 0 : 1).map((detail, dIndex) => (
                          <li key={dIndex} className="text-gray-600 dark:text-gray-300">
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
