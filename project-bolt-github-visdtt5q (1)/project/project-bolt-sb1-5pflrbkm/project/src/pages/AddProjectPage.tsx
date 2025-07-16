import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Upload, Plus, X, CheckCircle } from 'lucide-react';

const AddProjectPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    longDescription: '',
    client: '',
    category: '',
    duration: '',
    teamSize: '',
    image: '',
    tags: [],
    features: [],
    technologies: [],
    results: [],
    challenge: '',
    solution: '',
    testimonial: {
      text: '',
      author: '',
      role: ''
    }
  });

  const [currentTag, setCurrentTag] = useState('');
  const [currentFeature, setCurrentFeature] = useState('');
  const [currentTechnology, setCurrentTechnology] = useState('');
  const [currentResult, setCurrentResult] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    'Web Development',
    'Mobile App',
    'Healthcare',
    'FinTech',
    'E-commerce',
    'IoT',
    'AI/ML',
    'Enterprise',
    'Education',
    'Real Estate'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof typeof prev] as any,
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const addToArray = (arrayName: string, value: string, setValue: (value: string) => void) => {
    if (value.trim()) {
      setFormData(prev => ({
        ...prev,
        [arrayName]: [...(prev[arrayName as keyof typeof prev] as string[]), value.trim()]
      }));
      setValue('');
    }
  };

  const removeFromArray = (arrayName: string, index: number) => {
    setFormData(prev => ({
      ...prev,
      [arrayName]: (prev[arrayName as keyof typeof prev] as string[]).filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const emailSubject = `New Project Submission: ${formData.title}`;
    const emailBody = `
New Project Details:

Title: ${formData.title}
Client: ${formData.client}
Category: ${formData.category}
Duration: ${formData.duration}
Team Size: ${formData.teamSize}

Description:
${formData.description}

Long Description:
${formData.longDescription}

Challenge:
${formData.challenge}

Solution:
${formData.solution}

Features:
${formData.features.map(feature => `• ${feature}`).join('\n')}

Technologies:
${formData.technologies.map(tech => `• ${tech}`).join('\n')}

Tags:
${formData.tags.join(', ')}

Results:
${formData.results.map(result => `• ${result}`).join('\n')}

Testimonial:
"${formData.testimonial.text}"
- ${formData.testimonial.author}, ${formData.testimonial.role}

Image URL: ${formData.image}
    `;

    // Create mailto link
    const mailtoLink = `mailto:admin@f24tech.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        title: '',
        description: '',
        longDescription: '',
        client: '',
        category: '',
        duration: '',
        teamSize: '',
        image: '',
        tags: [],
        features: [],
        technologies: [],
        results: [],
        challenge: '',
        solution: '',
        testimonial: {
          text: '',
          author: '',
          role: ''
        }
      });
    }, 3000);
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20" style={{background: 'linear-gradient(135deg, #1e40af 0%, #10b981 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/admin" className="inline-flex items-center text-white/80 hover:text-white mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Admin Dashboard
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Add New Project</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Add a new project to your portfolio with detailed information, case study, and client testimonials.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {isSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Submitted Successfully!</h2>
              <p className="text-gray-600 mb-8">Your email client should open shortly with the project details. The project will be reviewed and added to the portfolio.</p>
              <Link to="/admin" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Back to Dashboard
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Title *</label>
                    <input
                      type="text"
                      name="title"
                      required
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="E-Commerce Platform"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Client Name *</label>
                    <input
                      type="text"
                      name="client"
                      required
                      value={formData.client}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="TechCorp Inc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                    <select
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select Category</option>
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                    <input
                      type="text"
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="6 months"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Team Size</label>
                    <input
                      type="text"
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="8 members"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Image URL</label>
                    <input
                      type="url"
                      name="image"
                      value={formData.image}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="https://images.pexels.com/..."
                    />
                  </div>
                </div>
              </div>

              {/* Descriptions */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Descriptions</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Short Description *</label>
                    <textarea
                      name="description"
                      required
                      rows={3}
                      value={formData.description}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                      placeholder="A brief description of the project..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Detailed Description</label>
                    <textarea
                      name="longDescription"
                      rows={5}
                      value={formData.longDescription}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                      placeholder="Detailed description of the project, its scope, and objectives..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Challenge</label>
                    <textarea
                      name="challenge"
                      rows={4}
                      value={formData.challenge}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                      placeholder="What challenges did the client face that this project solved?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Solution</label>
                    <textarea
                      name="solution"
                      rows={4}
                      value={formData.solution}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                      placeholder="How did you solve the client's challenges?"
                    />
                  </div>
                </div>
              </div>

              {/* Arrays */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Details</h3>
                
                {/* Tags */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                  <div className="flex gap-2 mb-3">
                    <input
                      type="text"
                      value={currentTag}
                      onChange={(e) => setCurrentTag(e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="React, Node.js, etc."
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addToArray('tags', currentTag, setCurrentTag))}
                    />
                    <button
                      type="button"
                      onClick={() => addToArray('tags', currentTag, setCurrentTag)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.tags.map((tag, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeFromArray('tags', index)}
                          className="ml-2 text-blue-600 hover:text-blue-800"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Key Features</label>
                  <div className="flex gap-2 mb-3">
                    <input
                      type="text"
                      value={currentFeature}
                      onChange={(e) => setCurrentFeature(e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Real-time notifications, User authentication, etc."
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addToArray('features', currentFeature, setCurrentFeature))}
                    />
                    <button
                      type="button"
                      onClick={() => addToArray('features', currentFeature, setCurrentFeature)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    {formData.features.map((feature, index) => (
                      <div key={index} className="bg-white p-3 rounded-lg flex items-center justify-between">
                        <span>{feature}</span>
                        <button
                          type="button"
                          onClick={() => removeFromArray('features', index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Technologies Used</label>
                  <div className="flex gap-2 mb-3">
                    <input
                      type="text"
                      value={currentTechnology}
                      onChange={(e) => setCurrentTechnology(e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="React, Node.js, MongoDB, etc."
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addToArray('technologies', currentTechnology, setCurrentTechnology))}
                    />
                    <button
                      type="button"
                      onClick={() => addToArray('technologies', currentTechnology, setCurrentTechnology)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.technologies.map((tech, index) => (
                      <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center">
                        {tech}
                        <button
                          type="button"
                          onClick={() => removeFromArray('technologies', index)}
                          className="ml-2 text-green-600 hover:text-green-800"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Results Achieved</label>
                  <div className="flex gap-2 mb-3">
                    <input
                      type="text"
                      value={currentResult}
                      onChange={(e) => setCurrentResult(e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="300% increase in sales, 50% reduction in load time, etc."
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addToArray('results', currentResult, setCurrentResult))}
                    />
                    <button
                      type="button"
                      onClick={() => addToArray('results', currentResult, setCurrentResult)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    {formData.results.map((result, index) => (
                      <div key={index} className="bg-white p-3 rounded-lg flex items-center justify-between">
                        <span>{result}</span>
                        <button
                          type="button"
                          onClick={() => removeFromArray('results', index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Client Testimonial</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Testimonial Text</label>
                    <textarea
                      name="testimonial.text"
                      rows={4}
                      value={formData.testimonial.text}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                      placeholder="The project exceeded our expectations and delivered amazing results..."
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Author Name</label>
                      <input
                        type="text"
                        name="testimonial.author"
                        value={formData.testimonial.author}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Author Role</label>
                      <input
                        type="text"
                        name="testimonial.role"
                        value={formData.testimonial.role}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="CEO, TechCorp Inc."
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-12 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
                >
                  Submit Project
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default AddProjectPage;