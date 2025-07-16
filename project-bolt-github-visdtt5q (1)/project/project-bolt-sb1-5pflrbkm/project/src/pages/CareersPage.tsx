import React from 'react';
import { MapPin, Clock, DollarSign, Users, ArrowRight, Heart, Zap, Award } from 'lucide-react';

const CareersPage = () => {
  const openPositions = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$120,000 - $160,000',
      description: 'Join our engineering team to build scalable web applications using modern technologies.',
      requirements: ['5+ years of experience', 'React/Node.js expertise', 'Cloud platforms knowledge'],
      posted: '2024-01-15'
    },
    {
      id: 2,
      title: 'Mobile App Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$100,000 - $140,000',
      description: 'Develop cutting-edge mobile applications for iOS and Android platforms.',
      requirements: ['React Native/Flutter experience', 'Mobile UI/UX understanding', '3+ years experience'],
      posted: '2024-01-12'
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Austin, TX / Remote',
      type: 'Full-time',
      salary: '$110,000 - $150,000',
      description: 'Manage and optimize our cloud infrastructure and deployment pipelines.',
      requirements: ['AWS/Azure expertise', 'Kubernetes experience', 'CI/CD pipeline knowledge'],
      posted: '2024-01-10'
    },
    {
      id: 4,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Los Angeles, CA / Remote',
      type: 'Full-time',
      salary: '$80,000 - $120,000',
      description: 'Create beautiful and intuitive user experiences for our client projects.',
      requirements: ['Figma/Sketch proficiency', 'User research experience', 'Portfolio required'],
      posted: '2024-01-08'
    },
    {
      id: 5,
      title: 'Project Manager',
      department: 'Operations',
      location: 'New York, NY / Remote',
      type: 'Full-time',
      salary: '$90,000 - $130,000',
      description: 'Lead cross-functional teams to deliver projects on time and within budget.',
      requirements: ['PMP certification preferred', 'Agile methodology', '4+ years PM experience'],
      posted: '2024-01-05'
    },
    {
      id: 6,
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Seattle, WA / Remote',
      type: 'Full-time',
      salary: '$130,000 - $170,000',
      description: 'Analyze complex data sets to drive business insights and machine learning solutions.',
      requirements: ['Python/R expertise', 'Machine learning knowledge', 'PhD/Masters preferred'],
      posted: '2024-01-03'
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and wellness programs'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Flexible hours, remote work options, and unlimited PTO policy'
    },
    {
      icon: Zap,
      title: 'Growth & Learning',
      description: 'Professional development budget, conference attendance, and skill training'
    },
    {
      icon: Award,
      title: 'Competitive Package',
      description: 'Competitive salary, equity options, and performance bonuses'
    },
    {
      icon: Users,
      title: 'Great Culture',
      description: 'Collaborative environment, team events, and inclusive workplace'
    },
    {
      icon: DollarSign,
      title: 'Financial Benefits',
      description: '401(k) matching, stock options, and financial planning assistance'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We embrace new technologies and creative solutions to solve complex problems.'
    },
    {
      title: 'Team Collaboration',
      description: 'We believe in the power of teamwork and open communication.'
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and encourage lifelong learning.'
    },
    {
      title: 'Client Success',
      description: 'Our clients\' success is our success, and we go above and beyond to deliver.'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20" style={{background: 'linear-gradient(135deg, #1e40af 0%, #10b981 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Join Our Team</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Build the future of technology with us. We're looking for passionate individuals who want to make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#open-positions"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              View Open Positions
            </a>
            <a 
              href="mailto:careers@f24tech.com"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Work at F24Tech?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're more than just a workplace – we're a community of innovators, creators, and problem-solvers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" 
                alt="Team collaboration" 
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Open Positions</h2>
            <p className="text-xl text-gray-600">
              Find your next career opportunity with us. We're always looking for talented individuals.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position) => (
              <div key={position.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {position.department}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{position.description}</p>
                    
                    <div className="flex flex-wrap gap-6 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {position.salary}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {position.requirements.map((req, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 lg:mt-0 lg:ml-6">
                    <a 
                      href={`mailto:careers@f24tech.com?subject=Application for ${position.title}&body=Hi, I'm interested in applying for the ${position.title} position. Please find my resume attached.`}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center group"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Hiring Process</h2>
            <p className="text-xl text-gray-600">
              We've designed our process to be transparent and efficient while getting to know you better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Application', description: 'Submit your resume and cover letter' },
              { step: '2', title: 'Phone Screen', description: 'Initial conversation with our HR team' },
              { step: '3', title: 'Technical Interview', description: 'Technical assessment with the team' },
              { step: '4', title: 'Final Interview', description: 'Meet with leadership and team members' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl p-12 text-white" style={{background: 'linear-gradient(to right, #2563eb, #16a34a)'}}>
            <h3 className="text-3xl font-bold mb-4">Don't See the Right Position?</h3>
            <p className="text-xl mb-8 opacity-90">
              We're always interested in meeting talented individuals. Send us your resume and let's talk!
            </p>
            <a 
              href="mailto:careers@f24tech.com?subject=General Application&body=Hi, I'm interested in opportunities at F24Tech. Please find my resume attached."
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;