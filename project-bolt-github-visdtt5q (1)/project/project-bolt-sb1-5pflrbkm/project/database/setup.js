const mysql = require('mysql2/promise');
const fs = require('fs').promises;
const path = require('path');
require('dotenv').config();

async function setupDatabase() {
  console.log('🚀 Starting database setup...');

  try {
    // Connect to MySQL server (without specifying database)
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'u925328211_ncb',
      password: process.env.DB_PASSWORD || 'Aman123@f24tech24',
      multipleStatements: true
    });

    console.log('✅ Connected to MySQL server');

    // Read and execute schema file
    const schemaPath = path.join(__dirname, 'schema.sql');
    const schema = await fs.readFile(schemaPath, 'utf8');
    
    // Replace database name in schema
    const updatedSchema = schema.replace(/f24tech_analytics/g, process.env.DB_NAME || 'u925328211_ncb');
    
    console.log('📄 Executing database schema...');
    await connection.execute(updatedSchema);
    
    console.log('✅ Database schema created successfully');
    console.log('📊 Tables created:');
    console.log('   - users (admin authentication)');
    console.log('   - projects (portfolio management)');
    console.log('   - project_features, project_technologies, project_tags, project_results');
    console.log('   - project_testimonials');
    console.log('   - contact_submissions (contact form data)');
    console.log('   - newsletter_subscriptions');
    console.log('   - career_applications');
    console.log('   - analytics_sessions (user tracking with consent)');
    console.log('   - page_views, user_interactions');
    console.log('   - daily_analytics (aggregated data)');
    console.log('   - user_consent (GDPR compliance)');

    // Create default admin user
    console.log('👤 Creating default admin user...');
    console.log('   Username: admin');
    console.log('   Password: admin123');
    console.log('   Email: admin@f24tech.com');

    await connection.end();
    console.log('🎉 Database setup completed successfully!');
    console.log('');
    console.log('Next steps:');
    console.log('1. Update .env file with your database credentials');
    console.log('2. Start the server: node server/server.js');
    console.log('3. Access admin panel at: http://localhost:3000/admin');
    console.log('4. Login with username: admin, password: admin123');

  } catch (error) {
    console.error('❌ Database setup failed:', error.message);
    console.log('');
    console.log('Troubleshooting:');
    console.log('1. Make sure MySQL is running');
    console.log('2. Check your database credentials in .env file');
    console.log('3. Ensure the database user has CREATE privileges');
    process.exit(1);
  }
}

// Run setup if called directly
if (require.main === module) {
  setupDatabase();
}

module.exports = setupDatabase;