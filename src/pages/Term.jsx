import React from "react";
import { BookOpen, Shield, Lock, FileText, Layers, Scale } from "lucide-react";

const Term = () => {
  const TermSection = ({ icon: Icon, title, children }) => (
    <div className="bg-gradient-to-br from-white to-indigo-50 shadow-lg rounded-2xl p-7 mb-6 border-l-6 border-teal-600 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center mb-4">
        <Icon className="text-teal-600 mr-4 animate-pulse" size={36} />
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-teal-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white/90 rounded-3xl shadow-2xl overflow-hidden border-4 border-teal-100">
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-8 px-8">
          <h1 className="text-5xl font-extrabold text-center tracking-tight">
            Terms of Service
          </h1>
        </div>

        <div className="p-8 space-y-7">
          <TermSection icon={BookOpen} title="Acceptance of Terms">
            <p className="text-gray-700 leading-relaxed">
              By accessing our Admission Recommendation System, you agree to
              these terms. Continued use constitutes acceptance of our policies.
            </p>
          </TermSection>

          <TermSection icon={Shield} title="User Eligibility">
            <p className="text-gray-700">
              This service is for students and educational institutions. Users
              must be:
              <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                <li>Minimum 13 years old</li>
                <li>Legally capable of entering agreements</li>
              </ul>
            </p>
          </TermSection>

          <TermSection icon={Lock} title="Account Responsibility">
            <ul className="text-gray-700 space-y-2 list-disc list-inside">
              <li>Maintain confidential account credentials</li>
              <li>Provide accurate registration information</li>
              <li>Responsible for all account activities</li>
            </ul>
          </TermSection>

          <TermSection icon={FileText} title="Data Privacy">
            <p className="text-gray-700 leading-relaxed">
              We collect and process personal data in compliance with our
              Privacy Policy. Your data is protected and used transparently.
            </p>
          </TermSection>

          <TermSection icon={Layers} title="Intellectual Property">
            <p className="text-gray-700 leading-relaxed">
              All content and functionality are protected by copyright and
              intellectual property laws. Unauthorized use is prohibited.
            </p>
          </TermSection>

          <TermSection icon={Scale} title="Limitation of Liability">
            <p className="text-gray-700 leading-relaxed">
              Service provided "as is" without warranties. We are not liable for
              any direct or indirect damages arising from system use.
            </p>
          </TermSection>
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 text-center">
          <p className="text-sm text-gray-600 font-medium">
            Last Updated: February 2024 • © Admission Recommendation System
          </p>
        </div>
      </div>
    </div>
  );
};

export default Term;
