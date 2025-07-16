import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A comprehensive e-commerce solution with advanced inventory management and analytics.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Web Development'
    },
    {
      title: 'Healthcare Management System',
      description: 'Complete patient management system with appointment scheduling and medical records.',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg',
      tags: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
      category: 'Healthcare'
    },
    {
      title: 'Financial Analytics Dashboard',
      description: 'Real-time financial data visualization and reporting platform for investment firms.',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg',
      tags: ['Angular', 'D3.js', 'AWS', 'Machine Learning'],
      category: 'FinTech'
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
      image: 'https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg',
      tags: ['React Native', 'Blockchain', 'Biometrics', 'API'],
      category: 'Mobile App'
    },
    {
      title: 'IoT Monitoring Platform',
      description: 'Industrial IoT platform for monitoring and controlling manufacturing equipment.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg',
      tags: ['IoT', 'Real-time', 'MQTT', 'Time Series DB'],
      category: 'IoT'
    },
    {
      title: 'AI-Powered CRM',
      description: 'Customer relationship management system with AI-driven insights and automation.',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg',
      tags: ['AI/ML', 'CRM', 'Automation', 'Analytics'],
      category: 'AI/ML'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover some of our recent projects that showcase our expertise across various industries and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-4">
                    <button className="bg-white/90 p-3 rounded-full hover:bg-white transition-colors">
                      <ExternalLink className="h-5 w-5 text-gray-900" />
                    </button>
                    <button className="bg-white/90 p-3 rounded-full hover:bg-white transition-colors">
                      <Github className="h-5 w-5 text-gray-900" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link 
                  to={`/portfolio/${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                  className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
                >
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/portfolio"
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;