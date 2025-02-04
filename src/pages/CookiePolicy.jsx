import React from "react";
import { Cookie, Shield, Database, Lock, Globe } from "lucide-react";

const CookiePolicy = () => {
  const PolicySection = ({ icon: Icon, title, children }) => (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6 border-l-4 border-blue-500">
      <div className="flex items-center mb-4">
        <Icon className="text-blue-600 mr-4" size={32} />
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      </div>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-blue-600 text-white py-6 px-8">
          <h1 className="text-4xl font-extrabold text-center">Cookie Policy</h1>
        </div>

        <div className="p-8 space-y-6">
          <PolicySection icon={Cookie} title="What Are Cookies">
            <p className="text-gray-600">
              Cookies are small text files stored on your device to enhance user
              experience, analyze site traffic, and personalize content.
            </p>
          </PolicySection>

          <PolicySection icon={Shield} title="Types of Cookies">
            <ul className="text-gray-600 space-y-2 list-disc list-inside">
              <li>Essential Cookies: Necessary for site functionality</li>
              <li>Performance Cookies: Analyze site performance</li>
              <li>Functional Cookies: Enhance user experience</li>
              <li>Marketing Cookies: Personalize advertising</li>
            </ul>
          </PolicySection>

          <PolicySection icon={Database} title="Cookie Usage">
            <p className="text-gray-600">
              We use cookies to:
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Improve site navigation</li>
                <li>Remember user preferences</li>
                <li>Collect anonymous usage statistics</li>
              </ul>
            </p>
          </PolicySection>

          <PolicySection icon={Lock} title="Cookie Control">
            <p className="text-gray-600">
              You can manage cookie preferences through your browser settings.
              Blocking cookies may impact site functionality.
            </p>
          </PolicySection>

          <PolicySection icon={Globe} title="Third-Party Cookies">
            <p className="text-gray-600">
              We may use third-party cookies for analytics and performance
              tracking. These are subject to respective privacy policies.
            </p>
          </PolicySection>
        </div>

        <div className="bg-gray-100 p-6 text-center">
          <p className="text-sm text-gray-500">
            Last Updated: February 2024 • © Admission Recommendation System
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
