import React from "react";

function OurService() {
  const services = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/102558da2277f135bb37cebb50050f5d9f8a2d1585edf153311e73f6cc668abf?placeholderIfAbsent=true&apiKey=32ea7a6332e74b77babd6d1104c25fd5",
      title: "Data Collection & Processing",
      description:
        "Aggregate ESG data from government sources, NGOs, and financial institutions. Include climate data, economic metrics, and project-specific KPIs for comprehensive analysis.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ba7847b09fdc468357770877c927d29c251d76432047cbffe8a7bacd3875409?placeholderIfAbsent=true&apiKey=32ea7a6332e74b77babd6d1104c25fd5",
      title: "Project Scoring & Analysis",
      description:
        "Develop AI models to evaluate projects based on ESG metrics. Use NLP to extract insights from unstructured reports and ensure data-driven decisions.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/01549a26939ce0e107765b448fe78cac1c784c91841523a63f2fee91b58a4b9d?placeholderIfAbsent=true&apiKey=32ea7a6332e74b77babd6d1104c25fd5",
      title: "Optimization Engine",
      description:
        "Maximize ESG outcomes using linear and mixed-integer programming. Optimize resources under constraints like budget and risk tolerance.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/67465ea771ef5f971abf910c645593b831fecb69e379d008b382ec212df200e5?placeholderIfAbsent=true&apiKey=32ea7a6332e74b77babd6d1104c25fd5",
      title: "Risk Prediction",
      description:
        "Predict future risks associated with green investments using advanced data analytics and forecasting models.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f2f5a00c4808efefc21ff90d67b399fb83c315f5dcf5a49a14342d08c17f296f?placeholderIfAbsent=true&apiKey=32ea7a6332e74b77babd6d1104c25fd5",
      title: "Stakeholder Dashboard",
      description:
        "Provide visualizations of project rankings, ROI, and ESG scores. Enable scenario analysis to explore various investment strategies.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/100d2ba9ba447c025e23cfb5686dbb0181f63adacedf670dc5b2c9cf98047ff5?placeholderIfAbsent=true&apiKey=32ea7a6332e74b77babd6d1104c25fd5",
      title: "Portfolio Diversification",
      description:
        "Incorporate portfolio theory to diversify investments, ensuring financial stability and enhanced ESG outcomes.",
    },
  ];

  return (
    <section id="services" className="mt-20 max-md:mt-10">
      <h2 className="text-center text-4xl font-bold text-green-700">
        Our Services
      </h2>
      <p className="text-center mt-4 text-lg text-gray-700">
        Empowering sustainable finance with advanced AI solutions.
      </p>
      <div className="mt-16 mx-auto w-full max-w-[1326px] max-md:mt-10 max-md:max-w-full px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-start">
                {/* Icon with Light Green Background */}
                <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full">
                  <img
                    loading="lazy"
                    src={service.icon}
                    alt={service.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-green-700">
                  {service.title}
                </h3>
                <p className="mt-4 text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurService;
