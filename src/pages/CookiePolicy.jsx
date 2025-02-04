import React from "react";
import { Cookie, Shield, Database, Lock, Globe } from "lucide-react";

const CookiePolicy = () => {
  const PolicySection = ({ icon: Icon, title, children }) => (
    <div className="bg-gradient-to-br from-white to-purple-50 shadow-lg rounded-2xl p-7 mb-6 border-l-6 border-purple-600 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center mb-4">
        <Icon className="text-purple-600 mr-4 animate-pulse" size={36} />
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-pink-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white/90 rounded-3xl shadow-2xl overflow-hidden border-4 border-purple-100">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-8 px-8">
          <h1 className="text-5xl font-extrabold text-center tracking-tight">
            Cookie Policy
          </h1>
        </div>

        <div className="p-8 space-y-7">
          <PolicySection icon={Cookie} title="What Are Cookies">
            <p className="text-gray-700 leading-relaxed">
              Cookies are small text files stored on your device to enhance user
              experience, analyze site traffic, and personalize content with
              intelligent tracking.
            </p>
          </PolicySection>

          <PolicySection icon={Shield} title="Types of Cookies">
            <ul className="text-gray-700 space-y-3 list-disc list-inside">
              <li>Essential Cookies: Critical for site functionality</li>
              <li>Performance Cookies: Site performance analytics</li>
              <li>Functional Cookies: User experience optimization</li>
              <li>Marketing Cookies: Personalized advertising</li>
            </ul>
          </PolicySection>

          <PolicySection icon={Database} title="Cookie Usage">
            <p className="text-gray-700">
              We leverage cookies to:
              <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                <li>Streamline site navigation</li>
                <li>Preserve user preferences</li>
                <li>Gather anonymous usage insights</li>
              </ul>
            </p>
          </PolicySection>

          <PolicySection icon={Lock} title="Cookie Control">
            <p className="text-gray-700 leading-relaxed">
              Manage cookie preferences through your browser settings. Note that
              blocking cookies might limit site functionality and
              personalization.
            </p>
          </PolicySection>

          <PolicySection icon={Globe} title="Third-Party Cookies">
            <p className="text-gray-700 leading-relaxed">
              We may utilize third-party cookies for advanced analytics and
              performance tracking, always adhering to respective privacy
              policies and user consent.
            </p>
          </PolicySection>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 text-center">
          <p className="text-sm text-gray-600 font-medium">
            Last Updated: February 2024 • © Admission Recommendation System
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
