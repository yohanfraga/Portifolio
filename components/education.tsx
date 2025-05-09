export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">Education</h2>
          <div className="mt-2 h-1 w-20 bg-orange-500 mx-auto"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800">Bachelor of Software Engineering</h3>
              <div className="flex items-center text-orange-500 mb-2">
                <span className="font-medium">UniCesumar, Distance Education</span>
                <span className="mx-2">•</span>
                <span>In Progress</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800">Technician in Mechatronics</h3>
              <div className="flex items-center text-orange-500 mb-2">
                <span className="font-medium">ETEC Horácio Augusto da Silveira</span>
                <span className="mx-2">•</span>
                <span>São Paulo, Brazil</span>
                <span className="mx-2">•</span>
                <span>July 2016 – June 2018</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
