@@ .. @@
 -- F24Tech Analytics Database Schema
 
--- Create database
-CREATE DATABASE IF NOT EXISTS f24tech_analytics;
-USE f24tech_analytics;
+-- Use existing database
+-- Database u925328211_ncb should already exist
 
 -- Users table for admin authentication
-CREATE TABLE users (
+CREATE TABLE IF NOT EXISTS users (
     id INT PRIMARY KEY AUTO_INCREMENT,
@@ .. @@
 );
 
 -- Projects table
-CREATE TABLE projects (
+CREATE TABLE IF NOT EXISTS projects (
     id INT PRIMARY KEY AUTO_INCREMENT,
@@ .. @@
 );
 
 -- Project features
-CREATE TABLE project_features (
+CREATE TABLE IF NOT EXISTS project_features (
     id INT PRIMARY KEY AUTO_INCREMENT,
@@ .. @@
 );
 
 -- Project technologies
-CREATE TABLE project_technologies (
+CREATE TABLE IF NOT EXISTS project_technologies (
     id INT PRIMARY KEY AUTO_INCREMENT,
@@ .. @@
 );
 
 -- Project tags
-CREATE TABLE project_tags (
+CREATE TABLE IF NOT EXISTS project_tags (
     id INT PRIMARY KEY AUTO_INCREMENT,
@@ .. @@
 );
 
 -- Project results
-CREATE TABLE project_results (
+CREATE TABLE IF NOT EXISTS project_results (
     id INT PRIMARY KEY AUTO_INCREMENT,
@@ .. @@
 );
 
 -- Project testimonials
-CREATE TABLE project_testimonials (
+CREATE TABLE IF NOT EXISTS project_testimonials (
     id INT PRIMARY KEY AUTO_INCREMENT,
@@ .. @@
 );
 
 -- Contact submissions
-CREATE TABLE contact_submissions (
+CREATE TABLE IF NOT EXISTS contact_submissions (
     id INT PRIMARY KEY AUTO_INCREMENT,
@@ .. @@
 );
 
 -- Newsletter subscriptions
-CREATE TABLE newsletter_subscriptions (
+CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
     id INT PRIMARY KEY AUTO_INCREMENT,
@@ .. @@
 );
 
 -- Career applications
-CREATE TABLE career_applications (
+CREATE TABLE IF NOT EXISTS career_applications (
     id INT PRIMARY KEY AUTO_INCREMENT,
@@ .. @@
 );
 
 -- Website analytics (with consent)
-CREATE TABLE analytics_sessions (
+CREATE TABLE IF NOT EXISTS analytics_sessions (
     id INT PRIMARY KEY AUTO_INCREMENT,
@@ .. @@
 );
 
 -- Page views
-CREATE TABLE page_views (
+CREATE TABLE IF NOT EXISTS page_views (
     id INT PRIMARY KEY AUTO_INCREMENT,
@@ .. @@
 );
 
 -- User interactions (clicks, form submissions, etc.)
-CREATE TABLE user_interactions (
+CREATE TABLE IF NOT EXISTS user_interactions (
     id INT PRIMARY KEY AUTO_INCREMENT,
@@ .. @@
 );
 
 -- Daily analytics summary
-CREATE TABLE daily_analytics (
+CREATE TABLE IF NOT EXISTS daily_analytics (
     id INT PRIMARY KEY AUTO_INCREMENT,
@@ .. @@
 );
 
 -- Consent records
-CREATE TABLE user_consent (
+CREATE TABLE IF NOT EXISTS user_consent (
     id INT PRIMARY KEY AUTO_INCREMENT,
@@ .. @@
 );
 
 -- Insert default admin user (password: admin123)
-INSERT INTO users (username, email, password_hash, role) VALUES 
-('admin', 'admin@f24tech.com', '$2b$10$rOzJqQZQZQZQZQZQZQZQZOzJqQZQZQZQZQZQZQZQZOzJqQZQZQZQZQ', 'admin');
+INSERT IGNORE INTO users (username, email, password_hash, role) VALUES 
+('admin', 'admin@f24tech.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin');