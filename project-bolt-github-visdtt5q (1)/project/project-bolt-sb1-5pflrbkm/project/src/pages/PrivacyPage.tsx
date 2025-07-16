import React from 'react';
import { Shield, Eye, Lock, Users } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20" style={{background: 'linear-gradient(135deg, #1e40af 0%, #10b981 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <p className="text-gray-600 text-lg">
                <strong>Last updated:</strong> January 1, 2024
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Data Protection</h3>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Secure Storage</h3>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Transparency</h3>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900">User Control</h3>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
            <p className="text-gray-600 mb-6">
              We collect information you provide directly to us, such as when you:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Fill out contact forms on our website</li>
              <li>Request quotes or consultations</li>
              <li>Subscribe to our newsletter</li>
              <li>Communicate with us via email or phone</li>
              <li>Apply for job positions</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Automatically Collected Information</h3>
            <p className="text-gray-600 mb-6">
              When you visit our website, we automatically collect certain information about your device and usage:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-8">
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent</li>
              <li>Referring website information</li>
              <li>Device information (mobile, desktop, etc.)</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-6">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-8">
              <li>Responding to your inquiries and providing customer support</li>
              <li>Processing service requests and project proposals</li>
              <li>Sending newsletters and marketing communications (with your consent)</li>
              <li>Improving our website and services</li>
              <li>Analyzing website usage and performance</li>
              <li>Complying with legal obligations</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Information Sharing and Disclosure</h2>
            <p className="text-gray-600 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-8">
              <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and conducting business</li>
              <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-8">
              <li>SSL encryption for data transmission</li>
              <li>Secure servers and databases</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and employee training</li>
              <li>Data backup and recovery procedures</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Your Rights and Choices</h2>
            <p className="text-gray-600 mb-6">
              You have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-8">
              <li><strong>Access:</strong> You can request access to the personal information we hold about you</li>
              <li><strong>Correction:</strong> You can request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> You can request deletion of your personal information</li>
              <li><strong>Opt-out:</strong> You can unsubscribe from marketing communications at any time</li>
              <li><strong>Data Portability:</strong> You can request a copy of your data in a portable format</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Cookies and Tracking Technologies</h2>
            <p className="text-gray-600 mb-6">
              We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Third-Party Links</h2>
            <p className="text-gray-600 mb-8">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Children's Privacy</h2>
            <p className="text-gray-600 mb-8">
              Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">9. International Data Transfers</h2>
            <p className="text-gray-600 mb-8">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Changes to This Privacy Policy</h2>
            <p className="text-gray-600 mb-8">
              We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this privacy policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-2"><strong>Email:</strong> privacy@f24tech.com</p>
              <p className="text-gray-600 mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p className="text-gray-600"><strong>Address:</strong> 123 Tech Street, Silicon Valley, CA 94000</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions About Your Privacy?</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're here to help. Contact us if you have any questions about how we handle your data.
          </p>
          <a 
            href="mailto:privacy@f24tech.com"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Privacy Team
          </a>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;