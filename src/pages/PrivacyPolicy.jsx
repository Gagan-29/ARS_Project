import React from 'react';
import { Shield, Lock, Database, UserCheck } from 'lucide-react';

const PrivacyPolicy = () => {
  const policyDetails = [
    {
      icon: Shield,
      title: "Information Collection",
      content: "We collect personal information provided during registration, including academic records, contact details, and educational preferences to personalize college recommendations."
    },
    {
      icon: Lock,
      title: "Data Protection",
      content: "All personal data is encrypted and stored securely. We implement industry-standard security measures to protect against unauthorized access, alteration, or disclosure."
    },
    {
      icon: Database,
      title: "Data Usage",
      content: "Your information is used solely for providing personalized college recommendations, application support, and improving our services. We do not sell or share personal data with third parties without consent."
    },
    {
      icon: UserCheck,
      title: "User Rights",
      content: "Users can request data access, correction, or deletion at any time. We provide transparent mechanisms to manage and control personal information."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy</h1>
        
        <div className="space-y-6">
          <p className="text-gray-600 text-center mb-6">
            Effective Date: February 2024
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {policyDetails.map((policy, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center"
              >
                <policy.icon className="mb-4 text-black" size={48} />
                <h2 className="text-xl font-semibold mb-3">{policy.title}</h2>
                <p className="text-gray-700">{policy.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-600">
              For privacy concerns or data requests, contact us at privacy@admissionrecsys.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;