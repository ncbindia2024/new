const Database = require('./database');

async function testConnection() {
  console.log('🔍 Testing database connection...');
  console.log('📊 Database: u925328211_ncb');
  console.log('👤 Username: u925328211_ncb');
  console.log('🏠 Host: localhost');
  
  try {
    const connected = await Database.testConnection();
    if (connected) {
      console.log('✅ Database connection successful!');
      
      // Test a simple query
      const result = await Database.query('SELECT 1 as test');
      console.log('✅ Query test successful:', result);
      
      // Check if tables exist
      const tables = await Database.query('SHOW TABLES');
      console.log('📋 Available tables:', tables.length);
      
      if (tables.length === 0) {
        console.log('⚠️  No tables found. Run: npm run setup-db');
      } else {
        console.log('✅ Database is ready!');
        tables.forEach(table => {
          const tableName = Object.values(table)[0];
          console.log(`   - ${tableName}`);
        });
      }
      
    } else {
      console.log('❌ Database connection failed');
    }
  } catch (error) {
    console.error('❌ Connection error:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Make sure MySQL is running');
    console.log('2. Verify database credentials');
    console.log('3. Check if database exists');
    console.log('4. Ensure user has proper permissions');
  }
  
  process.exit(0);
}

testConnection();