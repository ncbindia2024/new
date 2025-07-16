import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Edit, Trash2, Eye, Filter, Search, Plus } from 'lucide-react';

const ManagePortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProjects, setSelectedProjects] = useState<number[]>([]);

  const categories = ['All', 'Web Development', 'Mobile App', 'Healthcare', 'FinTech', 'E-commerce', 'IoT', 'AI/ML'];

  // Sample projects data (in a real app, this would come from an API)
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'E-Commerce Platform',
      client: 'RetailCorp Inc.',
      category: 'E-commerce',
      status: 'Published',
      lastUpdated: '2024-01-15',
      views: 1250,
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg'
    },
    {
      id: 2,
      title: 'Healthcare Management System',
      client: 'MedCenter Group',
      category: 'Healthcare',
      status: 'Published',
      lastUpdated: '2024-01-10',
      views: 890,
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg'
    },
    {
      id: 3,
      title: 'Financial Analytics Dashboard',
      client: 'InvestPro Capital',
      category: 'FinTech',
      status: 'Draft',
      lastUpdated: '2024-01-08',
      views: 0,
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg'
    },
    {
      id: 4,
      title: 'Mobile Banking App',
      client: 'SecureBank Ltd.',
      category: 'Mobile App',
      status: 'Published',
      lastUpdated: '2024-01-05',
      views: 2100,
      image: 'https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg'
    },
    {
      id: 5,
      title: 'IoT Monitoring Platform',
      client: 'ManufacturingTech Corp',
      category: 'IoT',
      status: 'Published',
      lastUpdated: '2024-01-03',
      views: 675,
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg'
    },
    {
      id: 6,
      title: 'AI-Powered CRM',
      client: 'SalesForce Pro',
      category: 'AI/ML',
      status: 'Published',
      lastUpdated: '2024-01-01',
      views: 1450,
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg'
    }
  ]);

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSelectProject = (projectId: number) => {
    setSelectedProjects(prev => 
      prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  const handleSelectAll = () => {
    if (selectedProjects.length === filteredProjects.length) {
      setSelectedProjects([]);
    } else {
      setSelectedProjects(filteredProjects.map(p => p.id));
    }
  };

  const handleDeleteProject = (projectId: number) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects(prev => prev.filter(p => p.id !== projectId));
      setSelectedProjects(prev => prev.filter(id => id !== projectId));
    }
  };

  const handleBulkDelete = () => {
    if (confirm(`Are you sure you want to delete ${selectedProjects.length} selected projects?`)) {
      setProjects(prev => prev.filter(p => !selectedProjects.includes(p.id)));
      setSelectedProjects([]);
    }
  };

  const handleStatusChange = (projectId: number, newStatus: string) => {
    setProjects(prev => prev.map(p => 
      p.id === projectId ? { ...p, status: newStatus } : p
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-green-100 text-green-800';
      case 'Draft': return 'bg-yellow-100 text-yellow-800';
      case 'Archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Manage Portfolio</h1>
              <p className="text-xl text-white/90 max-w-3xl">
                View, edit, and manage all your portfolio projects from this central dashboard.
              </p>
            </div>
            <Link
              to="/admin/add-project"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center mt-6 md:mt-0"
            >
              <Plus className="h-5 w-5 mr-2" />
              Add New Project
            </Link>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Bulk Actions */}
            {selectedProjects.length > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">{selectedProjects.length} selected</span>
                <button
                  onClick={handleBulkDelete}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Selected
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Projects Table */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-4 text-left">
                      <input
                        type="checkbox"
                        checked={selectedProjects.length === filteredProjects.length && filteredProjects.length > 0}
                        onChange={handleSelectAll}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Project
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Client
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Views
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Last Updated
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredProjects.map((project) => (
                    <tr key={project.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={selectedProjects.includes(project.id)}
                          onChange={() => handleSelectProject(project.id)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-12 h-12 rounded-lg object-cover mr-4"
                          />
                          <div>
                            <div className="text-sm font-medium text-gray-900">{project.title}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">{project.client}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                          {project.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <select
                          value={project.status}
                          onChange={(e) => handleStatusChange(project.id, e.target.value)}
                          className={`text-xs font-semibold rounded-full px-2 py-1 border-0 ${getStatusColor(project.status)}`}
                        >
                          <option value="Published">Published</option>
                          <option value="Draft">Draft</option>
                          <option value="Archived">Archived</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">{project.views.toLocaleString()}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{project.lastUpdated}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <Link
                            to={`/portfolio/${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                            className="text-blue-600 hover:text-blue-800 p-1"
                            title="View Project"
                          >
                            <Eye className="h-4 w-4" />
                          </Link>
                          <button
                            onClick={() => {
                              const emailSubject = `Edit Project: ${project.title}`;
                              const emailBody = `
Project Details to Edit:

Title: ${project.title}
Client: ${project.client}
Category: ${project.category}
Status: ${project.status}
Last Updated: ${project.lastUpdated}
Views: ${project.views}

Please provide the updated information for this project.
                              `;
                              window.location.href = `mailto:admin@f24tech.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
                            }}
                            className="text-green-600 hover:text-green-800 p-1"
                            title="Edit Project"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteProject(project.id)}
                            className="text-red-600 hover:text-red-800 p-1"
                            title="Delete Project"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500 mb-4">No projects found</div>
                <Link
                  to="/admin/add-project"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Add Your First Project
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{projects.length}</div>
              <div className="text-gray-600">Total Projects</div>
            </div>
            <div className="bg-green-50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {projects.filter(p => p.status === 'Published').length}
              </div>
              <div className="text-gray-600">Published</div>
            </div>
            <div className="bg-yellow-50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">
                {projects.filter(p => p.status === 'Draft').length}
              </div>
              <div className="text-gray-600">Drafts</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {projects.reduce((sum, p) => sum + p.views, 0).toLocaleString()}
              </div>
              <div className="text-gray-600">Total Views</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagePortfolioPage;