import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, FolderOpen, BarChart3, Users, Settings, FileText } from 'lucide-react';

const AdminPage = () => {
  const adminCards = [
    {
      title: 'Add New Project',
      description: 'Add a new project to the portfolio with details, images, and case study information.',
      icon: Plus,
      link: '/admin/add-project',
      color: 'bg-blue-500'
    },
    {
      title: 'Manage Portfolio',
      description: 'View, edit, and delete existing projects in the portfolio.',
      icon: FolderOpen,
      link: '/admin/manage-portfolio',
      color: 'bg-green-500'
    },
    {
      title: 'Analytics',
      description: 'View website analytics, project views, and contact form submissions.',
      icon: BarChart3,
      link: '/admin/analytics',
      color: 'bg-purple-500'
    },
    {
      title: 'Team Management',
      description: 'Manage team members, roles, and permissions.',
      icon: Users,
      link: '/admin/team',
      color: 'bg-orange-500'
    },
    {
      title: 'Site Settings',
      description: 'Configure website settings, contact information, and company details.',
      icon: Settings,
      link: '/admin/settings',
      color: 'bg-gray-500'
    },
    {
      title: 'Content Management',
      description: 'Manage blog posts, service descriptions, and other website content.',
      icon: FileText,
      link: '/admin/content',
      color: 'bg-indigo-500'
    }
  ];

  const recentActivity = [
    { action: 'New project added', item: 'E-Commerce Platform', time: '2 hours ago' },
    { action: 'Portfolio updated', item: 'Healthcare System', time: '1 day ago' },
    { action: 'Contact form submission', item: 'New client inquiry', time: '3 days ago' },
    { action: 'Team member added', item: 'John Doe - Developer', time: '1 week ago' }
  ];

  const stats = [
    { label: 'Total Projects', value: '24', change: '+3 this month' },
    { label: 'Active Clients', value: '18', change: '+2 this month' },
    { label: 'Team Members', value: '12', change: '+1 this month' },
    { label: 'Monthly Visitors', value: '5.2K', change: '+15% this month' }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20" style={{background: 'linear-gradient(135deg, #1e40af 0%, #10b981 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Admin Dashboard</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Manage your portfolio, projects, and website content from this central dashboard.
          </p>
          <div className="mt-8 bg-blue-600/20 border border-blue-400/30 rounded-lg p-4">
            <p className="text-white/90 text-sm">
              <strong>Demo Mode:</strong> This is a frontend-only demo. In production, this would connect to a MySQL database for full functionality.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600 font-medium mb-1">{stat.label}</p>
                <p className="text-sm text-green-600">{stat.change}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admin Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Management Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adminCards.map((card, index) => (
              <Link
                key={index}
                to={card.link}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 ${card.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <card.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{activity.action}</p>
                      <p className="text-gray-600">{activity.item}</p>
                    </div>
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Quick Actions</h2>
              <div className="space-y-4">
                <Link
                  to="/admin/add-project"
                  className="block bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <div className="flex items-center">
                    <Plus className="h-5 w-5 mr-3" />
                    Add New Project
                  </div>
                </Link>
                <Link
                  to="/admin/manage-portfolio"
                  className="block bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <div className="flex items-center">
                    <FolderOpen className="h-5 w-5 mr-3" />
                    Manage Portfolio
                  </div>
                </Link>
                <a
                  href="mailto:admin@f24tech.com?subject=Admin Dashboard Notification"
                  className="block bg-gray-600 text-white p-4 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 mr-3" />
                    Send Admin Report
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminPage;