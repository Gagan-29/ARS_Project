import React from "react";
import { Shield, Lock, Database, UserCheck, Umbrella } from "lucide-react";

const PrivacyPolicy = () => {
  const policyDetails = [
    {
      icon: Shield,
      title: "Information Collection",
      content:
        "We collect personal information provided during registration, including academic records, contact details, and educational preferences to personalize college recommendations.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Lock,
      title: "Data Protection",
      content:
        "All personal data is encrypted and stored securely. We implement industry-standard security measures to protect against unauthorized access, alteration, or disclosure.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Database,
      title: "Data Usage",
      content:
        "Your information is used solely for providing personalized college recommendations, application support, and improving our services. We do not sell or share personal data with third parties without consent.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: UserCheck,
      title: "User Rights",
      content:
        "Users can request data access, correction, or deletion at any time. We provide transparent mechanisms to manage and control personal information.",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden p-10 border border-purple-100/50 transform transition-all hover:scale-[1.01]">
        <div className="flex justify-center mb-8">
          <Umbrella
            size={64}
            strokeWidth={1.5}
            className="text-purple-300 absolute"
          />
          <Umbrella size={48} strokeWidth={1.5} className="text-purple-600" />
        </div>

        <h1 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
          Privacy Policy
        </h1>

        <p className="text-gray-600 text-center mb-8">
          Effective Date: February 2024
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {policyDetails.map((policy, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${policy.color} text-white p-6 rounded-2xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl`}
            >
              <div className="flex justify-center mb-4">
                <policy.icon
                  className="text-white/80 absolute"
                  size={64}
                  strokeWidth={1.5}
                />
                <policy.icon
                  className="text-white"
                  size={48}
                  strokeWidth={1.5}
                />
              </div>
              <h2 className="text-xl font-semibold mb-3 text-center">
                {policy.title}
              </h2>
              <p className="text-white/90 text-center">{policy.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Contact Us
          </h3>
          <p className="text-gray-600">
            For privacy concerns or data requests, contact us at{" "}
            <a
              href="mailto:privacy@admissionrecsys.com"
              className="text-purple-600 hover:underline"
            >
              privacy@admissionrecsys.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
