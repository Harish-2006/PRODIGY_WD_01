
import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "Web Design",
      description: "Beautiful, responsive designs that captivate your audience and drive conversions.",
      icon: "🎨",
    },
    {
      title: "Development",
      description: "Robust, scalable applications built with modern technologies and best practices.",
      icon: "💻",
    },
    {
      title: "SEO Optimization",
      description: "Improve your search rankings and drive organic traffic to your website.",
      icon: "📈",
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: "📱",
    },
    {
      title: "E-commerce",
      description: "Complete online store solutions with payment integration and inventory management.",
      icon: "🛒",
    },
    {
      title: "Analytics",
      description: "Data-driven insights to help you make informed business decisions.",
      icon: "📊",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive digital solutions to help your business grow and succeed in the digital landscape.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-gray-50 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-100 hover:border-blue-200"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
