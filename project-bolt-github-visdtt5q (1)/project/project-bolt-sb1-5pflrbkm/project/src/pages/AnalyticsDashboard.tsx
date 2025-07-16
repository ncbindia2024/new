import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  Users, 
  Eye, 
  MousePointer, 
  Mail,
  TrendingUp,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';
import { format, subDays, startOfWeek, startOfMonth, startOfYear } from 'date-fns';

interface AnalyticsData {
  summary: any[];
  topPages: any[];
  deviceBreakdown: any[];
  locationBreakdown: any[];
  contactStats: any[];
  newsletterStats: any[];
}

const AnalyticsDashboard = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState('30days');
  const [customStartDate, setCustomStartDate] = useState('');
  const [customEndDate, setCustomEndDate] = useState('');

  const getDateRange = () => {
    const now = new Date();
    switch (dateRange) {
      case 'today':
        return { start: format(now, 'yyyy-MM-dd'), end: format(now, 'yyyy-MM-dd') };
      case '7days':
        return { start: format(subDays(now, 7), 'yyyy-MM-dd'), end: format(now, 'yyyy-MM-dd') };
      case '30days':
        return { start: format(subDays(now, 30), 'yyyy-MM-dd'), end: format(now, 'yyyy-MM-dd') };
      case 'thisweek':
        return { start: format(startOfWeek(now), 'yyyy-MM-dd'), end: format(now, 'yyyy-MM-dd') };
      case 'thismonth':
        return { start: format(startOfMonth(now), 'yyyy-MM-dd'), end: format(now, 'yyyy-MM-dd') };
      case 'thisyear':
        return { start: format(startOfYear(now), 'yyyy-MM-dd'), end: format(now, 'yyyy-MM-dd') };
      case 'custom':
        return { start: customStartDate, end: customEndDate };
      default:
        return { start: format(subDays(now, 30), 'yyyy-MM-dd'), end: format(now, 'yyyy-MM-dd') };
    }
  };

  const fetchAnalytics = async () => {
    setLoading(true);
    try {
      const { start, end } = getDateRange();
      const token = localStorage.getItem('adminToken');
      
      // Mock data for frontend-only deployment
      const mockData = {
        summary: [
          { date: '2024-01-15', unique_visitors: 150, total_page_views: 450, avg_session_duration: 180 },
          { date: '2024-01-14', unique_visitors: 120, total_page_views: 380, avg_session_duration: 165 },
          { date: '2024-01-13', unique_visitors: 200, total_page_views: 600, avg_session_duration: 200 }
        ],
        topPages: [
          { page_title: 'Home', page_url: '/', views: 1200, avg_time_on_page: 45 },
          { page_title: 'Services', page_url: '/services', views: 800, avg_time_on_page: 120 },
          { page_title: 'Portfolio', page_url: '/portfolio', views: 650, avg_time_on_page: 90 }
        ],
        deviceBreakdown: [
          { device_type: 'desktop', count: 60, percentage: 60 },
          { device_type: 'mobile', count: 35, percentage: 35 },
          { device_type: 'tablet', count: 5, percentage: 5 }
        ],
        locationBreakdown: [
          { country: 'United States', city: 'New York', visitors: 45 },
          { country: 'United Kingdom', city: 'London', visitors: 32 },
          { country: 'Canada', city: 'Toronto', visitors: 28 }
        ],
        contactStats: [
          { id: 1, name: 'John Doe', email: 'john@example.com', status: 'new', service_interest: 'Web Development', created_at: '2024-01-15' },
          { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'contacted', service_interest: 'Mobile App', created_at: '2024-01-14' }
        ],
        newsletterStats: [
          { status: 'active', count: 1250 },
          { status: 'unsubscribed', count: 45 }
        ]
      };
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      setData(mockData);
    } catch (error) {
      console.error('Failed to fetch analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, [dateRange, customStartDate, customEndDate]);

  const getDeviceIcon = (deviceType: string) => {
    switch (deviceType) {
      case 'mobile': return <Smartphone className="h-4 w-4" />;
      case 'tablet': return <Tablet className="h-4 w-4" />;
      default: return <Monitor className="h-4 w-4" />;
    }
  };

  const calculateTotals = () => {
    if (!data?.summary) return { visitors: 0, pageViews: 0, avgDuration: 0 };
    
    return data.summary.reduce((acc, day) => ({
      visitors: acc.visitors + day.unique_visitors,
      pageViews: acc.pageViews + day.total_page_views,
      avgDuration: acc.avgDuration + day.avg_session_duration
    }), { visitors: 0, pageViews: 0, avgDuration: 0 });
  };

  const totals = calculateTotals();

  if (loading) {
    return (
      <div className="pt-24 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading analytics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/admin" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Admin Dashboard
          </Link>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
              <p className="text-gray-600">Track website performance and user behavior (Demo Mode)</p>
            </div>
            
            {/* Date Range Selector */}
            <div className="mt-4 lg:mt-0 flex flex-wrap gap-2">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="today">Today</option>
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
                <option value="thisweek">This Week</option>
                <option value="thismonth">This Month</option>
                <option value="thisyear">This Year</option>
                <option value="custom">Custom Range</option>
              </select>
              
              {dateRange === 'custom' && (
                <>
                  <input
                    type="date"
                    value={customStartDate}
                    onChange={(e) => setCustomStartDate(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                    type="date"
                    value={customEndDate}
                    onChange={(e) => setCustomEndDate(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Visitors</p>
                <p className="text-3xl font-bold text-gray-900">{totals.visitors.toLocaleString()}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Page Views</p>
                <p className="text-3xl font-bold text-gray-900">{totals.pageViews.toLocaleString()}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Eye className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Avg. Session</p>
                <p className="text-3xl font-bold text-gray-900">
                  {Math.round(totals.avgDuration / data?.summary.length || 0)}s
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Activity className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Contacts</p>
                <p className="text-3xl font-bold text-gray-900">{data?.contactStats.length || 0}</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <Mail className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Top Pages */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Top Pages</h3>
              <BarChart3 className="h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {data?.topPages.slice(0, 5).map((page, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 truncate">{page.page_title}</p>
                    <p className="text-sm text-gray-500 truncate">{page.page_url}</p>
                  </div>
                  <div className="text-right ml-4">
                    <p className="font-semibold text-gray-900">{page.views}</p>
                    <p className="text-sm text-gray-500">{Math.round(page.avg_time_on_page)}s avg</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Device Breakdown */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Device Types</h3>
              <PieChart className="h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {data?.deviceBreakdown.map((device, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-3 text-gray-600">
                      {getDeviceIcon(device.device_type)}
                    </div>
                    <span className="font-medium text-gray-900 capitalize">
                      {device.device_type}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${device.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-900 w-12 text-right">
                      {device.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Location Breakdown */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Top Locations</h3>
              <Globe className="h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-3">
              {data?.locationBreakdown.slice(0, 8).map((location, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{location.country}</p>
                    {location.city && (
                      <p className="text-sm text-gray-500">{location.city}</p>
                    )}
                  </div>
                  <span className="font-semibold text-gray-900">{location.visitors}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Contacts */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Recent Contacts</h3>
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {data?.contactStats.slice(0, 5).map((contact, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-gray-900">{contact.name}</p>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      contact.status === 'new' ? 'bg-green-100 text-green-800' :
                      contact.status === 'contacted' ? 'bg-blue-100 text-blue-800' :
                      contact.status === 'qualified' ? 'bg-purple-100 text-purple-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {contact.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{contact.email}</p>
                  <p className="text-sm text-gray-500">
                    {contact.service_interest && `Interested in: ${contact.service_interest}`}
                  </p>
                  <p className="text-xs text-gray-400">
                    {new Date(contact.created_at).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <Link
                to="/admin/contacts"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View all contacts →
              </Link>
            </div>
          </div>
        </div>

        {/* Daily Trend Chart Placeholder */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Daily Visitors Trend</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Chart visualization would go here</p>
              <p className="text-sm text-gray-400">Integration with Chart.js or similar library</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;