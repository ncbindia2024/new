# F24Tech Analytics & Management System

A comprehensive website with MySQL-based analytics, project management, and user tracking with GDPR compliance.

## 🚀 Features

### ✅ **Legal & Privacy Compliant**
- **Cookie consent banner** with granular controls
- **GDPR compliant** user tracking
- **Opt-in analytics** - only tracks consented users
- **Privacy policy** and terms of service
- **Data retention** controls

### 📊 **Analytics Dashboard**
- **Real-time visitor tracking** with consent
- **Page view analytics** and user behavior
- **Device and location breakdown**
- **Custom date ranges** (daily, weekly, monthly, yearly)
- **Contact form analytics**
- **Newsletter subscription tracking**

### 🎯 **Project Management**
- **Add new projects** with comprehensive details
- **Manage portfolio** with status controls
- **Client testimonials** and case studies
- **Technology and feature tracking**
- **Image and media management**

### 📧 **Contact Management**
- **Contact form submissions** stored in database
- **Lead status tracking** (new, contacted, qualified, closed)
- **Newsletter subscriptions** with unsubscribe
- **Career applications** management
- **Email integration** for notifications

### 🔐 **Admin System**
- **Secure authentication** with JWT tokens
- **Role-based access** (admin, manager, viewer)
- **Dashboard overview** with key metrics
- **User management** and permissions

## 🛠️ **Technology Stack**

### **Frontend:**
- React 18 with TypeScript
- Tailwind CSS for styling
- React Router for navigation
- Date-fns for date handling

### **Backend:**
- Node.js with Express
- MySQL database with connection pooling
- JWT authentication
- bcrypt for password hashing
- CORS enabled

### **Analytics:**
- Custom analytics system
- Session tracking with consent
- Page view and interaction tracking
- Location data (with permission)
- Device and browser detection

## 📦 **Installation & Setup**

### **1. Clone and Install**
```bash
git clone <repository>
cd f24tech-website
npm install
```

### **2. Database Setup**
```bash
# Install MySQL (if not already installed)
# Ubuntu/Debian:
sudo apt install mysql-server

# macOS:
brew install mysql

# Windows: Download from mysql.com
```

### **3. Configure Environment**
Create `.env` file:
```env
# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=f24tech_analytics

# JWT Secret (generate a secure random string)
JWT_SECRET=your_jwt_secret_key_here

# Server Configuration
PORT=3001
```

### **4. Setup Database**
```bash
# Run automated database setup
npm run setup-db
```

This creates:
- Database and all tables
- Indexes for performance
- Default admin user (username: admin, password: admin123)

### **5. Start Application**
```bash
# Start both frontend and backend
npm run dev-full

# Or start separately:
npm run server  # Backend on port 3001
npm run dev     # Frontend on port 3000
```

## 🔑 **Default Admin Access**

- **URL:** http://localhost:3000/admin
- **Username:** admin
- **Password:** admin123
- **Email:** admin@f24tech.com

**⚠️ Change default password after first login!**

## 📊 **Database Schema**

### **Core Tables:**
- `users` - Admin authentication
- `projects` - Portfolio projects
- `contact_submissions` - Contact form data
- `newsletter_subscriptions` - Email subscriptions

### **Analytics Tables:**
- `analytics_sessions` - User sessions with consent
- `page_views` - Page tracking data
- `user_interactions` - Click and form tracking
- `user_consent` - GDPR compliance records
- `daily_analytics` - Aggregated daily stats

### **Project Management:**
- `project_features` - Project features list
- `project_technologies` - Tech stack used
- `project_tags` - Project categorization
- `project_results` - Achievement metrics
- `project_testimonials` - Client feedback

## 🎯 **Usage Guide**

### **Admin Dashboard:**
1. Login at `/admin`
2. View analytics overview
3. Manage projects and contacts
4. Track website performance

### **Analytics Features:**
- **Date Filtering:** Select custom date ranges
- **Device Tracking:** Mobile, tablet, desktop breakdown
- **Location Data:** Country and city analytics
- **Page Performance:** Most viewed pages and time spent
- **Contact Analytics:** Form submissions and lead status

### **Project Management:**
1. **Add Projects:** `/admin/add-project`
   - Complete project details
   - Features and technologies
   - Client testimonials
   - Results and metrics

2. **Manage Portfolio:** `/admin/manage-portfolio`
   - Edit existing projects
   - Change status (draft/published/archived)
   - Bulk operations
   - View analytics per project

### **Contact Management:**
- View all contact submissions
- Update lead status
- Track conversion rates
- Export contact data

## 🔒 **Privacy & Compliance**

### **GDPR Features:**
- ✅ **Consent management** - Users control their data
- ✅ **Data minimization** - Only collect necessary data
- ✅ **Right to deletion** - Users can request data removal
- ✅ **Transparent tracking** - Clear privacy policy
- ✅ **Secure storage** - Encrypted passwords and secure sessions

### **Cookie Categories:**
- **Essential:** Required for website functionality
- **Analytics:** Track user behavior (opt-in)
- **Marketing:** Advertising and remarketing (opt-in)

## 🚀 **Deployment**

### **Production Setup:**
1. **Database:** Use managed MySQL (AWS RDS, Google Cloud SQL)
2. **Backend:** Deploy to VPS, AWS EC2, or similar
3. **Frontend:** Build and deploy to CDN
4. **Environment:** Update production environment variables
5. **SSL:** Enable HTTPS for security
6. **Monitoring:** Set up error tracking and monitoring

### **Environment Variables (Production):**
```env
NODE_ENV=production
DB_HOST=your-production-db-host
DB_USER=your-production-db-user
DB_PASSWORD=your-secure-db-password
JWT_SECRET=your-production-jwt-secret
FRONTEND_URL=https://yourdomain.com
```

## 📈 **Analytics API Endpoints**

### **Public Endpoints:**
- `POST /api/analytics/session` - Track user session
- `POST /api/analytics/pageview` - Track page views
- `POST /api/analytics/interaction` - Track user interactions
- `POST /api/analytics/consent` - Record user consent
- `POST /api/contact` - Submit contact form
- `POST /api/newsletter` - Newsletter subscription

### **Admin Endpoints (Authenticated):**
- `GET /api/analytics/dashboard` - Analytics dashboard data
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create new project
- `GET /api/contacts` - Get contact submissions
- `PUT /api/contacts/:id/status` - Update contact status

## 🛡️ **Security Features**

- **JWT Authentication** with secure tokens
- **Password Hashing** with bcrypt
- **SQL Injection Protection** with parameterized queries
- **CORS Configuration** for cross-origin requests
- **Input Validation** and sanitization
- **Rate Limiting** (recommended for production)
- **HTTPS Enforcement** (production)

## 📞 **Support**

For technical support or questions:
- **Email:** admin@f24tech.com
- **Documentation:** Check README.md
- **Issues:** Create GitHub issue

## 📄 **License**

This project is proprietary software for F24Tech Softwares.

---

**🎉 Your analytics and management system is now ready!**

Access the admin dashboard at http://localhost:3000/admin and start tracking your website's performance with full GDPR compliance.