import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import BlogPage from './pages/BlogPage';
import CareersPage from './pages/CareersPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import AdminPage from './pages/AdminPage';
import AddProjectPage from './pages/AddProjectPage';
import ManagePortfolioPage from './pages/ManagePortfolioPage';
import AnalyticsDashboard from './pages/AnalyticsDashboard';
import CookieConsent from './components/CookieConsent';
import HomePage from './pages/HomePage';
import analytics from './utils/analytics';

function App() {
  const handleConsentChange = (consents: any) => {
    analytics.updateConsent(consents);
  };

  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:projectId" element={<ProjectDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/add-project" element={<AddProjectPage />} />
          <Route path="/admin/manage-portfolio" element={<ManagePortfolioPage />} />
          <Route path="/admin/analytics" element={<AnalyticsDashboard />} />
        </Routes>
        <Footer />
        <CookieConsent onConsentChange={handleConsentChange} />
      </div>
    </Router>
  );
}

export default App;