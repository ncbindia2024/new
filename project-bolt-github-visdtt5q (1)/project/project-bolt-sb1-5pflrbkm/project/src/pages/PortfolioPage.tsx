import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight, Filter } from 'lucide-react';

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web Development', 'Mobile App', 'Healthcare', 'FinTech', 'E-commerce', 'IoT', 'AI/ML'];

  const projects = [
    {
      id: 'ecommerce-platform',
      title: 'E-Commerce Platform',
      description: 'A comprehensive e-commerce solution with advanced inventory management, payment processing, and analytics dashboard.',
      longDescription: 'Built a complete e-commerce ecosystem including customer portal, admin dashboard, inventory management, and analytics. Features include real-time inventory tracking, multiple payment gateways, order management, and comprehensive reporting.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      category: 'E-commerce',
      client: 'RetailCorp Inc.',
      duration: '6 months',
      teamSize: '8 members',
      results: ['300% increase in online sales', '50% reduction in cart abandonment', '99.9% uptime achieved']
    },
    {
      id: 'healthcare-system',
      title: 'Healthcare Management System',
      description: 'Complete patient management system with appointment scheduling, medical records, and telemedicine capabilities.',
      longDescription: 'Developed a comprehensive healthcare platform that streamlines patient care, appointment management, and medical record keeping. Includes telemedicine features, prescription management, and integration with medical devices.',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg',
      tags: ['Vue.js', 'Python', 'PostgreSQL', 'Docker', 'HIPAA'],
      category: 'Healthcare',
      client: 'MedCenter Group',
      duration: '8 months',
      teamSize: '10 members',
      results: ['40% reduction in appointment wait times', 'HIPAA compliance achieved', '95% patient satisfaction rate']
    },
    {
      id: 'fintech-dashboard',
      title: 'Financial Analytics Dashboard',
      description: 'Real-time financial data visualization and reporting platform for investment firms with advanced analytics.',
      longDescription: 'Created a sophisticated financial analytics platform that provides real-time market data, portfolio analysis, risk assessment, and automated reporting for investment professionals.',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg',
      tags: ['Angular', 'D3.js', 'AWS', 'Machine Learning', 'WebSocket'],
      category: 'FinTech',
      client: 'InvestPro Capital',
      duration: '5 months',
      teamSize: '6 members',
      results: ['60% faster data processing', '25% improvement in trading decisions', 'Real-time analytics achieved']
    },
    {
      id: 'mobile-banking',
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication, real-time transactions, and financial planning tools.',
      longDescription: 'Developed a feature-rich mobile banking app with advanced security features, real-time transaction processing, budget tracking, and financial planning tools.',
      image: 'https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg',
      tags: ['React Native', 'Blockchain', 'Biometrics', 'API', 'Security'],
      category: 'Mobile App',
      client: 'SecureBank Ltd.',
      duration: '7 months',
      teamSize: '9 members',
      results: ['2M+ downloads in first year', '4.8/5 app store rating', 'Zero security incidents']
    },
    {
      id: 'iot-platform',
      title: 'IoT Monitoring Platform',
      description: 'Industrial IoT platform for monitoring and controlling manufacturing equipment with predictive maintenance.',
      longDescription: 'Built an comprehensive IoT platform that monitors industrial equipment, predicts maintenance needs, and optimizes manufacturing processes through real-time data analysis.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg',
      tags: ['IoT', 'Real-time', 'MQTT', 'Time Series DB', 'Machine Learning'],
      category: 'IoT',
      client: 'ManufacturingTech Corp',
      duration: '9 months',
      teamSize: '12 members',
      results: ['30% reduction in downtime', '25% increase in efficiency', '$2M annual cost savings']
    },
    {
      id: 'ai-crm',
      title: 'AI-Powered CRM',
      description: 'Customer relationship management system with AI-driven insights, automation, and predictive analytics.',
      longDescription: 'Developed an intelligent CRM system that uses AI to provide customer insights, automate workflows, predict customer behavior, and optimize sales processes.',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg',
      tags: ['AI/ML', 'CRM', 'Automation', 'Analytics', 'Python'],
      category: 'AI/ML',
      client: 'SalesForce Pro',
      duration: '6 months',
      teamSize: '7 members',
      results: ['45% increase in lead conversion', '60% reduction in manual tasks', '35% improvement in customer retention']
    },
    {
      id: 'logistics-web-app',
      title: 'Logistics Management Platform',
      description: 'Comprehensive logistics and supply chain management platform with real-time tracking and optimization.',
      longDescription: 'Created a full-featured logistics platform that manages supply chain operations, tracks shipments in real-time, optimizes routes, and provides comprehensive analytics.',
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg',
      tags: ['React', 'Node.js', 'GPS Tracking', 'Optimization', 'Analytics'],
      category: 'Web Development',
      client: 'LogiFlow Systems',
      duration: '8 months',
      teamSize: '10 members',
      results: ['40% reduction in delivery times', '25% cost savings', '99% tracking accuracy']
    },
    {
      id: 'education-mobile',
      title: 'Educational Learning App',
      description: 'Interactive mobile learning platform with gamification, progress tracking, and personalized content.',
      longDescription: 'Built an engaging educational app that makes learning fun through gamification, provides personalized learning paths, and tracks student progress with detailed analytics.',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg',
      tags: ['Flutter', 'Gamification', 'Analytics', 'Cloud Storage', 'AI'],
      category: 'Mobile App',
      client: 'EduTech Solutions',
      duration: '5 months',
      teamSize: '6 members',
      results: ['1M+ active users', '85% completion rate', '4.7/5 user rating']
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20" style={{background: 'linear-gradient(135deg, #1e40af 0%, #10b981 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Portfolio</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Explore our successful projects across various industries and discover how we've helped businesses achieve their digital transformation goals.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Filter Projects</h2>
            <div className="flex items-center text-gray-600">
              <Filter className="h-5 w-5 mr-2" />
              {filteredProjects.length} Projects
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
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
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Link 
                      to={`/portfolio/${project.id}`}
                      className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
                    >
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <span className="text-sm text-gray-500">{project.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl p-12 text-white" style={{background: 'linear-gradient(to right, #2563eb, #16a34a)'}}>
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help bring your vision to life with our proven expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:sales@f24tech.com?subject=New Project Inquiry&body=Hi, I'm interested in starting a new project with F24Tech. Please contact me to discuss the details."
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Start Your Project
              </a>
              <Link 
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;