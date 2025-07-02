export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-orange-500 mx-auto"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Hi, I'm Yohan Fraga — a Software Engineer with expertise in modern backend technologies. My primary focus is on creating scalable solutions using .NET/C# and Node.js, implementing event-driven architectures, and leveraging cloud technologies with AWS and Azure. Currently pursuing a B.Sc. in Software Engineering while bringing 2+ years of professional experience working in industry-level environments and building production-grade systems.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            I'm open to international relocation, especially within Europe or Denmark, and remote positions globally.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">What I Bring to the Table:</p>
          <ul className="list-disc pl-6 text-lg text-gray-600 dark:text-gray-300 mb-6 space-y-2">
            <li>Strong expertise in C#, .NET, Node.js, TypeScript, and modern architectures</li>
            <li>
              Extensive experience with cloud platforms: Azure (Functions, Service Bus, AKS) and AWS (S3, Lambda, Kinesis, API Gateway, SQS, EventBridge)
            </li>
            <li>
              Proficiency in event streaming platforms like Apache Kafka and RabbitMQ for building resilient, asynchronous systems
            </li>
            <li>
              A collaborative approach grounded in Agile practices (SCRUM, KANBAN), with a DevSecOps mindset
            </li>
          </ul>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            My Core Values: I believe in taking ownership of my work, solving complex problems, and continuously learning. I thrive in environments where I can contribute to meaningful projects while growing my skills and knowledge.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Looking Ahead: I'm eager to join a team where I can leverage my expertise in development to build scalable, high-performance systems. Whether it's developing microservices, implementing event-driven architectures, or advancing cloud-native platforms, I'm ready to take on new challenges and deliver robust solutions using the best tool for each job.
          </p>
        </div>
      </div>
    </section>
  )
}
