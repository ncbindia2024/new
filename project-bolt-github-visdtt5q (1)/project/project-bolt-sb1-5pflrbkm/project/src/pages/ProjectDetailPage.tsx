import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, Award, CheckCircle, ExternalLink } from 'lucide-react';

const ProjectDetailPage = () => {
  const { projectId } = useParams();

  const projectDetails = {
    'ecommerce-platform': {
      title: 'E-Commerce Platform',
      client: 'RetailCorp Inc.',
      category: 'E-commerce',
      duration: '6 months',
      teamSize: '8 members',
      description: 'A comprehensive e-commerce solution with advanced inventory management, payment processing, and analytics dashboard.',
      challenge: 'RetailCorp needed to modernize their outdated e-commerce platform to handle increased traffic, improve user experience, and integrate with their existing inventory management system.',
      solution: 'We built a scalable, modern e-commerce platform using React and Node.js, integrated multiple payment gateways, implemented real-time inventory tracking, and created a comprehensive admin dashboard with analytics.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'Redis', 'Docker', 'Kubernetes'],
      features: [
        'Responsive web design',
        'Real-time inventory management',
        'Multiple payment gateway integration',
        'Advanced search and filtering',
        'Customer account management',
        'Order tracking system',
        'Analytics dashboard',
        'Mobile-optimized checkout'
      ],
      results: [
        '300% increase in online sales',
        '50% reduction in cart abandonment',
        '99.9% uptime achieved',
        '40% improvement in page load speed',
        '25% increase in customer retention'
      ],
      images: [
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg'
      ],
      testimonial: {
        text: "F24Tech transformed our online presence completely. The new platform not only looks amazing but has significantly improved our sales and customer satisfaction.",
        author: "Sarah Johnson",
        role: "CEO, RetailCorp Inc."
      }
    },
    'healthcare-system': {
      title: 'Healthcare Management System',
      client: 'MedCenter Group',
      category: 'Healthcare',
      duration: '8 months',
      teamSize: '10 members',
      description: 'Complete patient management system with appointment scheduling, medical records, and telemedicine capabilities.',
      challenge: 'MedCenter Group needed a comprehensive digital solution to manage patient records, streamline appointment scheduling, and enable telemedicine consultations while ensuring HIPAA compliance.',
      solution: 'We developed a secure, HIPAA-compliant healthcare platform with patient portal, doctor dashboard, appointment management, electronic health records, and integrated telemedicine capabilities.',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker', 'HIPAA', 'WebRTC', 'Redis', 'Nginx'],
      features: [
        'Patient portal and registration',
        'Appointment scheduling system',
        'Electronic health records (EHR)',
        'Telemedicine video consultations',
        'Prescription management',
        'Medical device integration',
        'Insurance verification',
        'Billing and payment processing'
      ],
      results: [
        '40% reduction in appointment wait times',
        'HIPAA compliance achieved',
        '95% patient satisfaction rate',
        '60% increase in telemedicine adoption',
        '30% improvement in operational efficiency'
      ],
      images: [
        'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg',
        'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg',
        'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg'
      ],
      testimonial: {
        text: "The healthcare platform has revolutionized how we deliver patient care. Our staff is more efficient and patients love the convenience of online appointments and telemedicine.",
        author: "Dr. Michael Chen",
        role: "Chief Medical Officer, MedCenter Group"
      }
    },
    'fintech-dashboard': {
      title: 'Financial Analytics Dashboard',
      client: 'InvestPro Capital',
      category: 'FinTech',
      duration: '5 months',
      teamSize: '6 members',
      description: 'Real-time financial data visualization and reporting platform for investment firms with advanced analytics.',
      challenge: 'InvestPro Capital needed a sophisticated analytics platform to process real-time market data, provide portfolio insights, and generate automated reports for their investment professionals.',
      solution: 'We created a high-performance financial dashboard using Angular and D3.js, integrated real-time market data feeds, implemented machine learning algorithms for predictive analytics, and built automated reporting systems.',
      technologies: ['Angular', 'D3.js', 'AWS', 'Machine Learning', 'WebSocket', 'Python', 'TensorFlow', 'PostgreSQL'],
      features: [
        'Real-time market data visualization',
        'Portfolio performance analytics',
        'Risk assessment tools',
        'Automated report generation',
        'Custom dashboard creation',
        'Alert and notification system',
        'Historical data analysis',
        'Predictive modeling'
      ],
      results: [
        '60% faster data processing',
        '25% improvement in trading decisions',
        'Real-time analytics achieved',
        '45% reduction in report generation time',
        '90% user adoption rate'
      ],
      images: [
        'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
        'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg'
      ],
      testimonial: {
        text: "The analytics platform has given us a competitive edge in the market. The real-time insights and predictive analytics have significantly improved our investment strategies.",
        author: "Robert Williams",
        role: "Portfolio Manager, InvestPro Capital"
      }
    }
  };

  const project = projectDetails[projectId as keyof typeof projectDetails];

  if (!project) {
    return (
      <div className="pt-24 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
        <Link to="/portfolio" className="text-blue-600 hover:text-blue-700">
          ← Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20" style={{background: 'linear-gradient(135deg, #1e40af 0%, #10b981 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/portfolio" className="inline-flex items-center text-white/80 hover:text-white mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                {project.category}
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{project.title}</h1>
              <p className="text-xl text-white/90 mb-8">{project.description}</p>
              
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <Calendar className="h-6 w-6 text-white/80 mx-auto mb-2" />
                  <div className="text-white font-semibold">{project.duration}</div>
                  <div className="text-white/70 text-sm">Duration</div>
                </div>
                <div>
                  <Users className="h-6 w-6 text-white/80 mx-auto mb-2" />
                  <div className="text-white font-semibold">{project.teamSize}</div>
                  <div className="text-white/70 text-sm">Team Size</div>
                </div>
                <div>
                  <Award className="h-6 w-6 text-white/80 mx-auto mb-2" />
                  <div className="text-white font-semibold">{project.client}</div>
                  <div className="text-white/70 text-sm">Client</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={project.images[0]} 
                alt={project.title}
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{project.challenge}</p>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{project.solution}</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
              <div className="space-y-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Technologies Used</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="bg-white text-gray-800 px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-shadow"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Results Achieved</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.results.map((result, index) => (
              <div key={index} className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">✓</div>
                <p className="text-gray-800 font-medium">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Client Testimonial</h2>
          <blockquote className="text-2xl text-gray-600 italic mb-8 leading-relaxed">
            "{project.testimonial.text}"
          </blockquote>
          <div>
            <div className="font-semibold text-gray-900 text-lg">{project.testimonial.author}</div>
            <div className="text-gray-600">{project.testimonial.role}</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl p-12 text-white" style={{background: 'linear-gradient(to right, #2563eb, #16a34a)'}}>
            <h3 className="text-3xl font-bold mb-4">Inspired by This Project?</h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can create a similar success story for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`mailto:sales@f24tech.com?subject=Project Inquiry - Similar to ${project.title}&body=Hi, I'm interested in a project similar to the ${project.title} case study. Please contact me to discuss the details.`}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Start Similar Project
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

export default ProjectDetailPage;