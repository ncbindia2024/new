import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Software Development',
      excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build and deploy software applications.',
      content: 'Artificial Intelligence is transforming software development in unprecedented ways...',
      author: 'John Smith',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI/ML',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices for 2024',
      excerpt: 'A comprehensive guide to successfully migrating your applications to the cloud with minimal downtime.',
      content: 'Cloud migration has become essential for modern businesses...',
      author: 'Sarah Johnson',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Cloud',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity Trends Every Business Should Know',
      excerpt: 'Stay ahead of cyber threats with these emerging security trends and best practices for 2024.',
      content: 'Cybersecurity landscape is constantly evolving...',
      author: 'Mike Chen',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Security',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
      featured: false
    },
    {
      id: 4,
      title: 'Mobile App Development: Native vs Cross-Platform',
      excerpt: 'Comparing the pros and cons of native and cross-platform mobile development approaches.',
      content: 'Choosing the right mobile development approach is crucial...',
      author: 'Emily Davis',
      date: '2024-01-01',
      readTime: '8 min read',
      category: 'Mobile',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg',
      featured: false
    },
    {
      id: 5,
      title: 'Data Analytics: Turning Information into Insights',
      excerpt: 'Learn how modern data analytics can transform your business decision-making process.',
      content: 'Data is the new oil, but only when properly refined...',
      author: 'Robert Williams',
      date: '2023-12-28',
      readTime: '9 min read',
      category: 'Analytics',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg',
      featured: false
    },
    {
      id: 6,
      title: 'UI/UX Design Principles for Better User Experience',
      excerpt: 'Essential design principles that create engaging and intuitive user experiences.',
      content: 'Great design is invisible - it just works...',
      author: 'Lisa Anderson',
      date: '2023-12-25',
      readTime: '4 min read',
      category: 'Design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      featured: false
    }
  ];

  const categories = ['All', 'AI/ML', 'Cloud', 'Security', 'Mobile', 'Analytics', 'Design'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20" style={{background: 'linear-gradient(135deg, #1e40af 0%, #10b981 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Tech Insights Blog</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in technology and software development.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Featured Post</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>
              <div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  {featuredPost.category}
                </span>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{featuredPost.title}</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center text-gray-500 mb-6">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">{new Date(featuredPost.date).toLocaleDateString()}</span>
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{featuredPost.readTime}</span>
                </div>
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center group">
                  Read Full Article
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-3">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-3">{new Date(post.date).toLocaleDateString()}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl p-12 text-white" style={{background: 'linear-gradient(to right, #2563eb, #16a34a)'}}>
            <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to our newsletter for the latest tech insights and company updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
              />
              <a 
                href="mailto:sales@f24tech.com?subject=Newsletter Subscription&body=Please subscribe me to your newsletter."
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;