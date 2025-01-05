function AboutSection() {
    return (
      <section
        id="about"
        className="self-center mt-32 px-6 w-full max-w-[1665px] max-md:mt-16 max-md:px-4"
      >
        <div className="flex gap-8 max-md:flex-col items-center">
          {/* Image Section */}
          <div className="w-[30%] max-md:w-[50%]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/102558da2277f135bb37cebb50050f5d9f8a2d1585edf153311e73f6cc668abf?placeholderIfAbsent=true&apiKey=32ea7a6332e74b77babd6d1104c25fd5"
              alt="Sustainable Finance"
              className="object-cover w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Text Section */}
          <div className="w-[70%] max-md:w-full text-left">
            {/* Tagline */}
            <div className="inline-block px-6 py-3 bg-green-400 rounded-full text-white text-lg font-medium">
              Driving Green Finance
            </div>
  
            {/* Title */}
            <h2 className="mt-6 text-4xl font-extrabold text-green-700 max-md:text-3xl">
              Who Are We?
            </h2>
  
            {/* Description */}
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Transforming green finance through AI-powered solutions and
              sustainability-driven insights.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              At EcoFinex, we provide a platform dedicated to optimizing
              sustainable investments. Through advanced AI-driven project scoring,
              ESG compliance tracking, and portfolio optimization, we empower
              financial institutions to make data-driven decisions that maximize
              environmental impact and financial returns. Our goal is to bridge
              the gap between green ambitions and impactful investments, fostering
              a future where finance aligns seamlessly with sustainability.
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  export default AboutSection;
  