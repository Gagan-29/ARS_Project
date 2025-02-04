import React from "react";
import { BookOpen, Shield, Lock, FileText, Layers, Scale } from "lucide-react";

const Term = () => {
  const TermSection = ({ icon: Icon, title, children }) => (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6 hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
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
          <h1 className="text-4xl font-extrabold text-center">
            Terms of Service
          </h1>
        </div>

        <div className="p-8 space-y-6">
          <TermSection icon={BookOpen} title="Acceptance of Terms">
            <p className="text-gray-600">
              By accessing our Admission Recommendation System, you agree to
              these terms. Continued use constitutes acceptance of our policies.
            </p>
          </TermSection>

          <TermSection icon={Shield} title="User Eligibility">
            <p className="text-gray-600">
              This service is for students and educational institutions. Users
              must be:
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Minimum 13 years old</li>
                <li>Legally capable of entering agreements</li>
              </ul>
            </p>
          </TermSection>

          <TermSection icon={Lock} title="Account Responsibility">
            <ul className="text-gray-600 space-y-2">
              <li>• Maintain confidential account credentials</li>
              <li>• Provide accurate registration information</li>
              <li>• Responsible for all account activities</li>
            </ul>
          </TermSection>

          <TermSection icon={FileText} title="Data Privacy">
            <p className="text-gray-600">
              We collect and process personal data in compliance with our
              Privacy Policy. Your data is protected and used transparently.
            </p>
          </TermSection>

          <TermSection icon={Layers} title="Intellectual Property">
            <p className="text-gray-600">
              All content and functionality are protected by copyright and
              intellectual property laws. Unauthorized use is prohibited.
            </p>
          </TermSection>

          <TermSection icon={Scale} title="Limitation of Liability">
            <p className="text-gray-600">
              Service provided "as is" without warranties. We are not liable for
              any direct or indirect damages arising from system use.
            </p>
          </TermSection>
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

export default Term;
