import React from 'react';
import { Target, Eye, Award, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To deliver innovative software solutions that drive business growth and digital transformation.'
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be the leading technology partner for businesses seeking cutting-edge digital solutions.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in every project we undertake.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace emerging technologies to create solutions that push boundaries.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About F24Tech
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded with a passion for technology and innovation, F24Tech has been at the forefront 
            of digital transformation, helping businesses leverage the power of modern software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Transforming Ideas into Reality
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over a decade of experience in software development, we specialize in creating 
              custom solutions that address unique business challenges. Our team of expert developers, 
              designers, and consultants work collaboratively to deliver exceptional results.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From enterprise applications to mobile solutions, we leverage cutting-edge technologies 
              to build scalable, secure, and user-friendly software that drives business success.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                10+ Years Experience
              </span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                Agile Development
              </span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                24/7 Support
              </span>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" 
              alt="Team collaboration" 
              className="w-full h-64 object-cover rounded-xl mb-6"
            />
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <h4 className="text-2xl font-bold text-blue-600">50+</h4>
                <p className="text-gray-600">Team Members</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-green-600">15+</h4>
                <p className="text-gray-600">Technologies</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg card-hover text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;