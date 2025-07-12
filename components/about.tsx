"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs"

export default function About() {
  const trackPersonalClick = async () => {
    try {
      await fetch('/api/personal-clicks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    } catch (error) {
      console.error('Error tracking personal tab click:', error)
    }
  }

  const handleTabChange = (value: string) => {
    if (value === 'personal') {
      trackPersonalClick()
    }
  }

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-orange-500 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="professional" className="w-full" onValueChange={handleTabChange}>
            <div className="text-center mb-12">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-transparent border-0 p-0 gap-2">
                <TabsTrigger 
                  value="professional" 
                  className="text-base font-medium px-6 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 data-[state=active]:!bg-orange-500 data-[state=active]:!text-white data-[state=active]:shadow-md transition-all border-0"
                >
                  Professional
                </TabsTrigger>
                <TabsTrigger 
                  value="personal" 
                  className="text-base font-medium px-6 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 data-[state=active]:!bg-orange-500 data-[state=active]:!text-white data-[state=active]:shadow-md transition-all border-0"
                >
                  Personal
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="professional" className="space-y-6">
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
            </TabsContent>
            
            <TabsContent value="personal" className="space-y-6">
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  I'm 25 years old, living it up in Curitiba, Paraná, Brazil! When I'm not deep in the coding zone building awesome stuff, you'll find me hanging out with my two cats who are basically my roommates and entertainment committee all rolled into one.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Meet Luna and Zuko - the real stars of my life! Luna is this gorgeous 5-year-old black cat who thinks she owns the house (and let's be honest, she probably does). Then there's Zuko, my 6-month-old grey troublemaker who's currently in his "destroy everything" phase. These two are literally my world, and I probably have way too many photos of them on my phone.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">What keeps me busy when I'm not coding:</p>
                <ul className="list-disc pl-6 text-lg text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                  <li><strong>LEGO</strong> - This is what got me into engineering in the first place. I love building sets and creating my own designs. There's something magical about turning a pile of bricks into something awesome.</li>
                  <li><strong>Star Wars</strong> - Yep, I'm that guy. I can quote the movies, I've watched every series, and yes, I have strong opinions about the sequel trilogy.</li>
                  <li><strong>Comedy TV shows</strong> - The Office is my absolute favorite. I've probably watched the entire series at least 10 times. Jim and Pam's relationship still gets me every time!</li>
                  <li><strong>Music</strong> - Music is everything to me. I'm always discovering new artists, going to concerts when I can, and I probably spend too much time curating playlists.</li>
                  <li><strong>Going out with friends</strong> - Weekends are for hanging out with my crew, whether we're grabbing dinner, checking out new places around the city, or just chilling and laughing about random stuff.</li>
                </ul>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  I'm the kind of person who gets genuinely excited about the small things - like when my code compiles on the first try or finding the perfect song for a moment. I believe in working hard but also in enjoying life and not taking everything too seriously.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  At the end of the day, I'm just a guy who loves technology, cherishes his cats, and believes that life's too short not to laugh at The Office quotes with friends. If you're looking for someone who brings both technical skills and genuine enthusiasm to a team, well... here I am!
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
