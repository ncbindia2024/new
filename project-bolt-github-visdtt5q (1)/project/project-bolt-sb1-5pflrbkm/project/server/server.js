const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { format, subDays, startOfDay, endOfDay } = require('date-fns');
const Database = require('./database');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// Helper function to get client IP
const getClientIP = (req) => {
  return req.headers['x-forwarded-for'] || 
         req.connection.remoteAddress || 
         req.socket.remoteAddress ||
         (req.connection.socket ? req.connection.socket.remoteAddress : null);
};

// Helper function to parse user agent
const parseUserAgent = (userAgent) => {
  const device = /Mobile|Android|iPhone|iPad/.test(userAgent) ? 
    (/iPad/.test(userAgent) ? 'tablet' : 'mobile') : 'desktop';
  
  let browser = 'Unknown';
  if (userAgent.includes('Chrome')) browser = 'Chrome';
  else if (userAgent.includes('Firefox')) browser = 'Firefox';
  else if (userAgent.includes('Safari')) browser = 'Safari';
  else if (userAgent.includes('Edge')) browser = 'Edge';

  let os = 'Unknown';
  if (userAgent.includes('Windows')) os = 'Windows';
  else if (userAgent.includes('Mac')) os = 'macOS';
  else if (userAgent.includes('Linux')) os = 'Linux';
  else if (userAgent.includes('Android')) os = 'Android';
  else if (userAgent.includes('iOS')) os = 'iOS';

  return { device, browser, os };
};

// Routes

// Authentication
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    const user = await Database.findOne('users', { username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const validPassword = await bcrypt.compare(password, user.password_hash);
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Analytics tracking
app.post('/api/analytics/session', async (req, res) => {
  try {
    const {
      sessionId,
      userConsent,
      referrer,
      landingPage,
      country,
      city
    } = req.body;

    const ip = getClientIP(req);
    const userAgent = req.headers['user-agent'] || '';
    const { device, browser, os } = parseUserAgent(userAgent);

    await Database.insert('analytics_sessions', {
      session_id: sessionId,
      user_consent: userConsent,
      ip_address: ip,
      user_agent: userAgent,
      country: country || null,
      city: city || null,
      device_type: device,
      browser,
      os,
      referrer: referrer || null,
      landing_page: landingPage
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Analytics session error:', error);
    res.status(500).json({ error: 'Failed to track session' });
  }
});

app.post('/api/analytics/pageview', async (req, res) => {
  try {
    const { sessionId, pageUrl, pageTitle, timeOnPage } = req.body;

    await Database.insert('page_views', {
      session_id: sessionId,
      page_url: pageUrl,
      page_title: pageTitle,
      time_on_page: timeOnPage || 0
    });

    // Update session page count
    await Database.query(
      'UPDATE analytics_sessions SET total_pages = total_pages + 1 WHERE session_id = ?',
      [sessionId]
    );

    res.json({ success: true });
  } catch (error) {
    console.error('Page view tracking error:', error);
    res.status(500).json({ error: 'Failed to track page view' });
  }
});

app.post('/api/analytics/interaction', async (req, res) => {
  try {
    const {
      sessionId,
      interactionType,
      elementId,
      elementText,
      pageUrl
    } = req.body;

    await Database.insert('user_interactions', {
      session_id: sessionId,
      interaction_type: interactionType,
      element_id: elementId,
      element_text: elementText,
      page_url: pageUrl
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Interaction tracking error:', error);
    res.status(500).json({ error: 'Failed to track interaction' });
  }
});

app.post('/api/analytics/consent', async (req, res) => {
  try {
    const { sessionId, consentType, consentGiven } = req.body;
    const ip = getClientIP(req);

    await Database.insert('user_consent', {
      session_id: sessionId,
      consent_type: consentType,
      consent_given: consentGiven,
      ip_address: ip
    });

    // Update session consent status
    if (consentType === 'analytics' && consentGiven) {
      await Database.update(
        'analytics_sessions',
        { user_consent: true },
        { session_id: sessionId }
      );
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Consent tracking error:', error);
    res.status(500).json({ error: 'Failed to record consent' });
  }
});

// Analytics dashboard data
app.get('/api/analytics/dashboard', authenticateToken, async (req, res) => {
  try {
    const { startDate, endDate, period = 'daily' } = req.query;
    
    const start = startDate || format(subDays(new Date(), 30), 'yyyy-MM-dd');
    const end = endDate || format(new Date(), 'yyyy-MM-dd');

    const [
      summary,
      topPages,
      deviceBreakdown,
      locationBreakdown,
      contactStats,
      newsletterStats
    ] = await Promise.all([
      Database.getAnalyticsSummary(start, end),
      Database.getTopPages(start, end),
      Database.getDeviceBreakdown(start, end),
      Database.getLocationBreakdown(start, end),
      Database.getContactSubmissions(),
      Database.getNewsletterStats()
    ]);

    res.json({
      summary,
      topPages,
      deviceBreakdown,
      locationBreakdown,
      contactStats: contactStats.slice(0, 10),
      newsletterStats
    });
  } catch (error) {
    console.error('Dashboard data error:', error);
    res.status(500).json({ error: 'Failed to fetch dashboard data' });
  }
});

// Contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const {
      name,
      email,
      company,
      phone,
      service,
      budget,
      message
    } = req.body;

    const contactId = await Database.insert('contact_submissions', {
      name,
      email,
      company: company || null,
      phone: phone || null,
      service_interest: service || null,
      budget_range: budget || null,
      message
    });

    res.json({ success: true, contactId });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
});

// Newsletter subscription
app.post('/api/newsletter', async (req, res) => {
  try {
    const { email } = req.body;

    await Database.query(
      'INSERT INTO newsletter_subscriptions (email) VALUES (?) ON DUPLICATE KEY UPDATE status = "active", subscribed_at = CURRENT_TIMESTAMP',
      [email]
    );

    res.json({ success: true });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ error: 'Failed to subscribe to newsletter' });
  }
});

// Project management
app.get('/api/projects', authenticateToken, async (req, res) => {
  try {
    const { status } = req.query;
    const projects = await Database.getProjects(status);
    res.json(projects);
  } catch (error) {
    console.error('Projects fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

app.post('/api/projects', authenticateToken, async (req, res) => {
  try {
    const {
      title,
      description,
      longDescription,
      client,
      category,
      duration,
      teamSize,
      imageUrl,
      challenge,
      solution,
      features,
      technologies,
      tags,
      results,
      testimonial
    } = req.body;

    const projectId = await Database.insert('projects', {
      title,
      description,
      long_description: longDescription,
      client,
      category,
      duration,
      team_size: teamSize,
      image_url: imageUrl,
      challenge,
      solution
    });

    // Insert related data
    if (features && features.length > 0) {
      for (const feature of features) {
        await Database.insert('project_features', {
          project_id: projectId,
          feature
        });
      }
    }

    if (technologies && technologies.length > 0) {
      for (const tech of technologies) {
        await Database.insert('project_technologies', {
          project_id: projectId,
          technology: tech
        });
      }
    }

    if (tags && tags.length > 0) {
      for (const tag of tags) {
        await Database.insert('project_tags', {
          project_id: projectId,
          tag
        });
      }
    }

    if (results && results.length > 0) {
      for (const result of results) {
        await Database.insert('project_results', {
          project_id: projectId,
          result
        });
      }
    }

    if (testimonial && testimonial.text) {
      await Database.insert('project_testimonials', {
        project_id: projectId,
        testimonial_text: testimonial.text,
        author_name: testimonial.author,
        author_role: testimonial.role
      });
    }

    res.json({ success: true, projectId });
  } catch (error) {
    console.error('Project creation error:', error);
    res.status(500).json({ error: 'Failed to create project' });
  }
});

// Contact management
app.get('/api/contacts', authenticateToken, async (req, res) => {
  try {
    const { status, limit = 50 } = req.query;
    const contacts = await Database.getContactSubmissions(status, parseInt(limit));
    res.json(contacts);
  } catch (error) {
    console.error('Contacts fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

app.put('/api/contacts/:id/status', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    await Database.update(
      'contact_submissions',
      { status },
      { id }
    );

    res.json({ success: true });
  } catch (error) {
    console.error('Contact status update error:', error);
    res.status(500).json({ error: 'Failed to update contact status' });
  }
});

// Start server
app.listen(PORT, async () => {
  console.log(`🚀 F24Tech Server running on port ${PORT}`);
  console.log(`📊 Admin Dashboard: http://localhost:${PORT === 3001 ? '3000' : PORT}/admin`);
  console.log(`🔐 Default Login: admin / admin123`);
  
  // Test database connection
  const dbConnected = await Database.testConnection();
  if (!dbConnected) {
    console.error('⚠️  Server started but database connection failed');
    console.error('📝 Please check your database credentials in .env file');
    console.error('🔧 Database: u925328211_ncb');
    console.error('👤 Username: u925328211_ncb');
  }
});

module.exports = app;