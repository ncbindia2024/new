import React from 'react';
import { FileText, Scale, Shield, AlertCircle } from 'lucide-react';

const TermsPage = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20" style={{background: 'linear-gradient(135deg, #1e40af 0%, #10b981 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Terms of Service</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Please read these terms carefully before using our services. They govern your relationship with F24Tech.
          </p>
        </div>
      </section>

      {/* Terms Content */}
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
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Clear Terms</h3>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Fair Practices</h3>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Protection</h3>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Transparency</h3>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-8">
              By accessing and using F24Tech's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Description of Service</h2>
            <p className="text-gray-600 mb-6">
              F24Tech provides software development, consulting, and technology services including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-8">
              <li>Custom software development</li>
              <li>Mobile application development</li>
              <li>Cloud solutions and migration</li>
              <li>Data analytics and business intelligence</li>
              <li>Cybersecurity services</li>
              <li>UI/UX design services</li>
              <li>Technical consulting and support</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. User Responsibilities</h2>
            <p className="text-gray-600 mb-6">
              As a user of our services, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-8">
              <li>Provide accurate and complete information when requested</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not interfere with or disrupt our services or servers</li>
              <li>Respect intellectual property rights</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Service Agreements</h2>
            <p className="text-gray-600 mb-6">
              Specific project work will be governed by separate service agreements that will include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-8">
              <li>Project scope and deliverables</li>
              <li>Timeline and milestones</li>
              <li>Payment terms and conditions</li>
              <li>Intellectual property ownership</li>
              <li>Confidentiality provisions</li>
              <li>Support and maintenance terms</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Payment Terms</h2>
            <p className="text-gray-600 mb-6">
              Payment terms for our services include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-8">
              <li>Invoices are due within 30 days of receipt unless otherwise specified</li>
              <li>Late payments may incur interest charges</li>
              <li>Services may be suspended for overdue accounts</li>
              <li>All prices are exclusive of applicable taxes</li>
              <li>Refunds are subject to the terms of individual service agreements</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              Intellectual property rights are handled as follows:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-8">
              <li>Client retains ownership of their proprietary data and content</li>
              <li>F24Tech retains ownership of our proprietary methodologies and tools</li>
              <li>Custom-developed solutions ownership is defined in individual agreements</li>
              <li>Third-party software and tools remain property of their respective owners</li>
              <li>Open-source components are governed by their respective licenses</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Confidentiality</h2>
            <p className="text-gray-600 mb-8">
              We maintain strict confidentiality regarding client information and projects. Both parties agree to protect confidential information shared during the course of our business relationship. This includes technical data, business strategies, and any other proprietary information.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              F24Tech's liability is limited as follows:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-8">
              <li>Our total liability shall not exceed the amount paid for the specific service</li>
              <li>We are not liable for indirect, incidental, or consequential damages</li>
              <li>We do not guarantee uninterrupted or error-free service</li>
              <li>Force majeure events are excluded from liability</li>
              <li>Some jurisdictions may not allow these limitations</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Warranties and Disclaimers</h2>
            <p className="text-gray-600 mb-6">
              Our warranties and disclaimers include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-8">
              <li>We warrant that services will be performed with professional skill and care</li>
              <li>We disclaim all other warranties, express or implied</li>
              <li>No warranty is made regarding third-party software or services</li>
              <li>Client is responsible for data backup and security</li>
              <li>Specific warranties may be provided in individual service agreements</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Termination</h2>
            <p className="text-gray-600 mb-8">
              Either party may terminate services under the following conditions: breach of contract terms, non-payment of fees, mutual agreement, or as specified in individual service agreements. Upon termination, each party will return or destroy confidential information as appropriate.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Dispute Resolution</h2>
            <p className="text-gray-600 mb-8">
              Any disputes arising from these terms or our services will be resolved through good faith negotiation first. If negotiation fails, disputes will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">12. Governing Law</h2>
            <p className="text-gray-600 mb-8">
              These terms are governed by the laws of the State of California, United States, without regard to conflict of law principles. Any legal action must be brought in the courts of California.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">13. Changes to Terms</h2>
            <p className="text-gray-600 mb-8">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">14. Severability</h2>
            <p className="text-gray-600 mb-8">
              If any provision of these terms is found to be unenforceable or invalid, the remaining provisions will continue to be valid and enforceable to the fullest extent permitted by law.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">15. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For questions about these terms of service, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-2"><strong>Email:</strong> legal@f24tech.com</p>
              <p className="text-gray-600 mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p className="text-gray-600"><strong>Address:</strong> 123 Tech Street, Silicon Valley, CA 94000</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions About Our Terms?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our legal team is here to help clarify any questions you may have about our terms of service.
          </p>
          <a 
            href="mailto:legal@f24tech.com"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Legal Team
          </a>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;