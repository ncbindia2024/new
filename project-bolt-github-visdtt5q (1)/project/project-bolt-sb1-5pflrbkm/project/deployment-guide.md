# F24Tech Deployment Guide

## 🚀 Quick Deployment Steps

### 1. Database Setup
```bash
# Install dependencies
npm install

# Setup MySQL database with your credentials
npm run setup-db
```

### 2. Environment Configuration
Your `.env` file is already configured with:
- **Database:** u925328211_ncb
- **Username:** u925328211_ncb  
- **Password:** Aman123@f24tech24
- **Host:** localhost

### 3. Start Application
```bash
# Development mode (both frontend and backend)
npm run dev-full

# Production mode (backend only)
npm run start

# Build frontend for deployment
npm run build
```

## 🌐 Deployment Options

### Option 1: Full Stack Deployment (Recommended)
Deploy both frontend and backend to the same server:

1. **VPS/Server Requirements:**
   - Node.js 18+
   - MySQL database
   - PM2 for process management

2. **Commands:**
   ```bash
   # Install PM2 globally
   npm install -g pm2
   
   # Start backend with PM2
   pm2 start server/server.js --name "f24tech-backend"
   
   # Build and serve frontend
   npm run build
   pm2 serve dist 3000 --name "f24tech-frontend"
   ```

### Option 2: Separate Deployment
- **Frontend:** Deploy to Netlify/Vercel (static files)
- **Backend:** Deploy to Railway/Heroku/DigitalOcean

## 🔧 Production Configuration

### Backend Deployment Services:
1. **Railway** (Recommended)
   - Connect GitHub repository
   - Set environment variables
   - Auto-deploy on push

2. **Heroku**
   - Create new app
   - Set config vars
   - Deploy via Git

3. **DigitalOcean App Platform**
   - Create new app
   - Configure environment
   - Auto-deploy

### Frontend Deployment:
1. **Netlify** (Current setup)
   - Connected to repository
   - Auto-deploy on push
   - Redirects configured

## 📊 Admin Access

After deployment:
- **URL:** `your-domain.com/admin`
- **Username:** admin
- **Password:** admin123
- **Change password** after first login!

## 🔐 Security Checklist

- [ ] Change default admin password
- [ ] Update JWT secret in production
- [ ] Enable HTTPS
- [ ] Configure firewall
- [ ] Set up SSL certificates
- [ ] Enable database backups

## 📈 Analytics Features

Your system includes:
- ✅ Real-time visitor tracking
- ✅ GDPR compliant analytics
- ✅ Contact form management
- ✅ Project portfolio system
- ✅ Newsletter subscriptions
- ✅ Daily/weekly/monthly reports

## 🆘 Troubleshooting

### Database Connection Issues:
1. Verify MySQL credentials
2. Check database exists
3. Ensure MySQL server is running
4. Test connection manually

### Common Commands:
```bash
# Test database connection
node -e "require('./server/database.js').testConnection()"

# Reset database
npm run setup-db

# View logs
pm2 logs f24tech-backend
```

## 📞 Support

For deployment assistance:
- **Email:** admin@f24tech.com
- **Documentation:** README.md