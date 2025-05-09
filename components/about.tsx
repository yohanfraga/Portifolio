export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-orange-500 mx-auto"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 mb-6">
            Hi, I'm Yohan Fraga — a passionate Backend Developer focused on designing robust, resilient and cloud-first
            systems designed for growth. With a strong foundation in .NET and C#, I specialize in crafting
            microservices, implementing event-driven architectures, and delivering high-quality, maintainable software.
          </p>
          <p className="text-lg text-gray-600 mb-6">What I Bring to the Table:</p>
          <ul className="list-disc pl-6 text-lg text-gray-600 mb-6 space-y-2">
            <li>Expertise in C#, .NET, SQL Server, and modern backend architectures</li>
            <li>
              Hands-on experience with Azure cloud services, Docker containers, and CI/CD pipelines for smooth,
              automated deployments
            </li>
            <li>
              Familiarity with event streaming platforms like Apache Kafka for building resilient, asynchronous systems
            </li>
            <li>
              A collaborative approach grounded in Agile practices (SCRUM, KANBAN), with a DevSecOps mindset ("you build
              it, you run it")
            </li>
          </ul>
          <p className="text-lg text-gray-600 mb-6">
            Why I'm Passionate About Tech: I love solving complex problems and transforming ideas into scalable,
            reliable solutions. My personal projects — like a web app showcasing pathfinding algorithms — reflect my
            curiosity and drive to explore creative ways to optimize systems.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            My Core Values: Collaboration, continuous learning, and ownership. I believe impactful software is built by
            diverse teams who share knowledge and take full responsibility for their solutions.
          </p>
          <p className="text-lg text-gray-600">
            Looking Ahead: I'm eager to join a team where I can grow my skills and contribute to meaningful,
            global-impact projects as a .NET/C# Backend Developer. Whether it's building high-availability services or
            advancing cloud-native platforms, I'm ready to take on new challenges.
          </p>
        </div>
      </div>
    </section>
  )
}
