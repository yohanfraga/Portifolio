const skills = [
  {
    category: "Languages",
    items: ["C#", "TypeScript", "SQL", "JavaScript", "Python"],
  },
  {
    category: "Frameworks/Technologies",
    items: [".NET", ".NET Core", "Node.js", "Docker", "Apache Kafka", "RabbitMQ"],
  },
  {
    category: "Databases",
    items: ["SQL Server", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "Cloud Platforms",
    items: ["Azure (Functions, Service Bus, AKS)", "AWS (S3, Lambda, Kinesis, API Gateway, SQS, EventBridge)"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "CI/CD pipelines", "Unit Testing", "Agile (Scrum, Kanban)", "Swagger"],
  },
  {
    category: "Architecture",
    items: ["Event-Driven Architecture", "Microservices", "Clean Code", "SOLID Principles"],
  },
  {
    category: "Design Patterns/Methodologies",
    items: [
      "Domain-Driven Design (DDD)",
      "Test-Driven Development (TDD)",
      "Object-Oriented Programming (OOP)",
      "Repository Pattern",
      "Unit of Work",
      "RESTful APIs"
    ],
  },
  {
    category: "Soft Skills",
    items: ["Ownership mindset", "Problem-Solving", "Communication", "Time Management", "Adaptability", "Curiosity"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Skills</h2>
          <div className="mt-2 h-1 w-20 bg-orange-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-orange-500 dark:text-orange-400 mb-4">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 dark:bg-orange-400 rounded-full mr-2"></div>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
