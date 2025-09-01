import FAQ from "../components/FAQ";
import { Link } from "react-router-dom";
import Road from "../assets/Road8.png";  

function Home() {
  return (
    <div className="bg-white text-gray-900 mt-14">
      {/* Section 2 */}
      <div className="pt-5">
        <div className="w-screen h-[28rem] bg-black">
  <img
    src={Road}
    alt="Road Safety"
    className="h-full object-cover w-full"
  />
</div>
      </div>

      {/* Section 3: Services */}

    <section className="pt-16 pb-20 px-10 bg-gradient-to-b from-blue-50 via-white to-blue-100">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
        Services Offered
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* Service 1 */}
        <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transform transition duration-300 border border-blue-100">
          <h3 className="text-xl font-bold mb-3 text-blue-700">
            Road Safety Assessments
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Conduct thorough evaluations of road safety using AI-driven tools, 
            identifying potential hazards, and recommending corrective actions.
          </p>
        </div>

        {/* Service 2 */}
        <div className="p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transform transition duration-300 border border-indigo-100">
          <h3 className="text-xl font-bold mb-3 text-indigo-700">
            Automated Data Collection
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Seamlessly gather accurate and comprehensive road data using our 
            smartphone app, dashcams, and Network Survey Vehicles (NSVs).
          </p>
        </div>

        {/* Service 3 */}
        <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transform transition duration-300 border border-purple-100">
          <h3 className="text-xl font-bold mb-3 text-purple-700">
            Hazard Detection & Classification
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Automatically detect and classify road hazards such as potholes, 
            cracks, and signage issues using advanced AI algorithms.
          </p>
        </div>

        {/* Service 4 */}
        <div className="p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transform transition duration-300 border border-pink-100">
          <h3 className="text-xl font-bold mb-3 text-pink-700">
            Predictive Maintenance
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Use AI analytics to forecast asset deterioration and schedule proactive 
            maintenance, preventing costly repairs and extending infrastructure lifespan.
          </p>
        </div>

        {/* Service 5 */}
        <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transform transition duration-300 border border-green-100">
          <h3 className="text-xl font-bold mb-3 text-green-700">
            Customizable Reporting
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Generate tailored reports that meet the requirements of stakeholders, 
            ensuring all aspects of road safety are thoroughly documented.
          </p>
        </div>

        {/* Service 6 */}
        <div className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transform transition duration-300 border border-yellow-100">
          <h3 className="text-xl font-bold mb-3 text-yellow-700">
            Road Asset Management
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Leverage AI technology to monitor, manage, and optimize road assets, 
            ensuring their longevity and reducing maintenance costs.
          </p>
        </div>
      </div>
    </section>

      {/* Section 5: Get Started */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">How We Use AI & ML</h2>
        <p className="mt-4">Transforming road audits with AI-powered insights.</p>
        <Link to="/upload">
          <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg">Get Started</button>
        </Link>
      </section>

      {/* Section 6: FAQ */}
      <FAQ />

      {/* Section 7: Testimonials */}
      <section className="py-16 px-10">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="p-6 bg-gray-100 rounded-xl shadow">"RoadVision AI improved our road management..."</div>
          <div className="p-6 bg-gray-100 rounded-xl shadow">"Great solution for city planning..."</div>
        </div>
      </section>
    </div>
  );
}

export default Home;
