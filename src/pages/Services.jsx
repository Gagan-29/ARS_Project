import React from 'react';
import { 
  Search, 
  FilePieChart, 
  UserCheck, 
  BookOpen, 
  Target, 
  Trophy 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Personalized College Matching",
      description: "Advanced algorithm to match students with ideal colleges based on academic profile, interests, and career goals.",
      color: "text-blue-600"
    },
    {
      icon: FilePieChart,
      title: "Comprehensive Profile Analysis",
      description: "Detailed evaluation of academic performance, extracurricular activities, and personal achievements.",
      color: "text-green-600"
    },
    {
      icon: UserCheck,
      title: "Admission Eligibility Check",
      description: "Verify and predict your chances of admission to various colleges and programs.",
      color: "text-purple-600"
    },
    {
      icon: BookOpen,
      title: "Scholarship Recommendations",
      description: "Identify potential scholarship opportunities tailored to your academic and personal profile.",
      color: "text-red-600"
    },
    {
      icon: Target,
      title: "Career Path Guidance",
      description: "Align college recommendations with long-term career aspirations and professional goals.",
      color: "text-orange-600"
    },
    {
      icon: Trophy,
      title: "Application Support",
      description: "Comprehensive guidance through the college application process, including document preparation and submission.",
      color: "text-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Our Services
        </h1>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <service.icon 
                className={`mx-auto mb-4 ${service.color}`} 
                size={48} 
              />
              <h2 className="text-xl font-semibold text-center mb-3">
                {service.title}
              </h2>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;