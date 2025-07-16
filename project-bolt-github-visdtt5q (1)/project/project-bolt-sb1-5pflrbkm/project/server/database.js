const mysql = require('mysql2/promise');
require('dotenv').config();

// Database connection configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'u925328211_ncb',
  password: process.env.DB_PASSWORD || 'Aman123@f24tech24',
  database: process.env.DB_NAME || 'u925328211_ncb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  acquireTimeout: 60000,
  timeout: 60000,
  reconnect: true
};

// Create connection pool
const pool = mysql.createPool(dbConfig);

// Database helper functions
class Database {
  // Test connection
  static async testConnection() {
    try {
      const connection = await pool.getConnection();
      await connection.ping();
      connection.release();
      console.log('✅ Database connected successfully');
      return true;
    } catch (error) {
      console.error('❌ Database connection failed:', error.message);
      return false;
    }
  }

  // Execute query
  static async query(sql, params = []) {
    try {
      const [results] = await pool.execute(sql, params);
      return results;
    } catch (error) {
      console.error('Database query error:', error);
      throw error;
    }
  }

  // Get single record
  static async findOne(table, conditions = {}) {
    const whereClause = Object.keys(conditions).map(key => `${key} = ?`).join(' AND ');
    const values = Object.values(conditions);
    const sql = `SELECT * FROM ${table}${whereClause ? ` WHERE ${whereClause}` : ''} LIMIT 1`;
    const results = await this.query(sql, values);
    return results[0] || null;
  }

  // Insert record
  static async insert(table, data) {
    const columns = Object.keys(data).join(', ');
    const placeholders = Object.keys(data).map(() => '?').join(', ');
    const values = Object.values(data);
    const sql = `INSERT INTO ${table} (${columns}) VALUES (${placeholders})`;
    const result = await this.query(sql, values);
    return result.insertId;
  }

  // Update record
  static async update(table, data, conditions) {
    const setClause = Object.keys(data).map(key => `${key} = ?`).join(', ');
    const whereClause = Object.keys(conditions).map(key => `${key} = ?`).join(' AND ');
    const values = [...Object.values(data), ...Object.values(conditions)];
    const sql = `UPDATE ${table} SET ${setClause} WHERE ${whereClause}`;
    return await this.query(sql, values);
  }

  // Delete record
  static async delete(table, conditions) {
    const whereClause = Object.keys(conditions).map(key => `${key} = ?`).join(' AND ');
    const values = Object.values(conditions);
    const sql = `DELETE FROM ${table} WHERE ${whereClause}`;
    return await this.query(sql, values);
  }

  // Analytics specific queries
  static async getAnalyticsSummary(startDate, endDate) {
    const sql = `
      SELECT 
        DATE(session_start) as date,
        COUNT(DISTINCT session_id) as unique_visitors,
        COUNT(*) as total_sessions,
        AVG(total_time_seconds) as avg_session_duration,
        SUM(total_pages) as total_page_views
      FROM analytics_sessions 
      WHERE session_start BETWEEN ? AND ?
      AND user_consent = TRUE
      GROUP BY DATE(session_start)
      ORDER BY date DESC
    `;
    return await this.query(sql, [startDate, endDate]);
  }

  static async getTopPages(startDate, endDate, limit = 10) {
    const sql = `
      SELECT 
        pv.page_url,
        pv.page_title,
        COUNT(*) as views,
        COUNT(DISTINCT pv.session_id) as unique_views,
        AVG(pv.time_on_page) as avg_time_on_page
      FROM page_views pv
      JOIN analytics_sessions s ON pv.session_id = s.session_id
      WHERE pv.view_time BETWEEN ? AND ?
      AND s.user_consent = TRUE
      GROUP BY pv.page_url, pv.page_title
      ORDER BY views DESC
      LIMIT ?
    `;
    return await this.query(sql, [startDate, endDate, limit]);
  }

  static async getDeviceBreakdown(startDate, endDate) {
    const sql = `
      SELECT 
        device_type,
        COUNT(*) as count,
        ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM analytics_sessions WHERE session_start BETWEEN ? AND ? AND user_consent = TRUE), 2) as percentage
      FROM analytics_sessions 
      WHERE session_start BETWEEN ? AND ?
      AND user_consent = TRUE
      GROUP BY device_type
    `;
    return await this.query(sql, [startDate, endDate, startDate, endDate]);
  }

  static async getLocationBreakdown(startDate, endDate) {
    const sql = `
      SELECT 
        country,
        city,
        COUNT(*) as visitors
      FROM analytics_sessions 
      WHERE session_start BETWEEN ? AND ?
      AND user_consent = TRUE
      AND country IS NOT NULL
      GROUP BY country, city
      ORDER BY visitors DESC
      LIMIT 20
    `;
    return await this.query(sql, [startDate, endDate]);
  }

  // Contact and lead management
  static async getContactSubmissions(status = null, limit = 50) {
    let sql = `
      SELECT * FROM contact_submissions 
      ${status ? 'WHERE status = ?' : ''}
      ORDER BY created_at DESC 
      LIMIT ?
    `;
    const params = status ? [status, limit] : [limit];
    return await this.query(sql, params);
  }

  static async getNewsletterStats() {
    const sql = `
      SELECT 
        status,
        COUNT(*) as count
      FROM newsletter_subscriptions 
      GROUP BY status
    `;
    return await this.query(sql);
  }

  // Project management
  static async getProjects(status = null) {
    let sql = `
      SELECT p.*, 
        GROUP_CONCAT(DISTINCT pt.technology) as technologies,
        GROUP_CONCAT(DISTINCT pf.feature) as features,
        GROUP_CONCAT(DISTINCT ptg.tag) as tags
      FROM projects p
      LEFT JOIN project_technologies pt ON p.id = pt.project_id
      LEFT JOIN project_features pf ON p.id = pf.project_id
      LEFT JOIN project_tags ptg ON p.id = ptg.project_id
      ${status ? 'WHERE p.status = ?' : ''}
      GROUP BY p.id
      ORDER BY p.updated_at DESC
    `;
    const params = status ? [status] : [];
    return await this.query(sql, params);
  }
}

module.exports = Database;