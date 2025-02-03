import React from "react";
import { Book, Target, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Admission Recommendation System
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <Book className="mx-auto mb-4 text-blue-600" size={48} />
            <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
            <p className="text-gray-700">
              Helping students find the perfect educational path by providing
              personalized college recommendations based on their unique profile
              and aspirations.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg text-center">
            <Target className="mx-auto mb-4 text-green-600" size={48} />
            <h2 className="text-xl font-semibold mb-3">Our Approach</h2>
            <p className="text-gray-700">
              Utilizing advanced algorithms and comprehensive student data to
              match individuals with colleges that align with their academic
              strengths, interests, and career goals.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <Users className="mx-auto mb-4 text-purple-600" size={48} />
            <h2 className="text-xl font-semibold mb-3">Our Impact</h2>
            <p className="text-gray-700">
              Empowering students to make informed decisions about their higher
              education by providing data-driven, personalized college
              recommendations.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 italic">
            "Guiding your academic journey, one recommendation at a time"
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
