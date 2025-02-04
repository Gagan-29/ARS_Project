import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Star,
  Search,
  GraduationCap,
  Calendar,
  Clock,
  Book,
  School,
  User,
  PenTool,
} from "lucide-react";

const Review = () => {
  const [reviewsData] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      university: "University of Oxford",
      course: "MSc Computer Science",
      graduationYear: 2023,
      duration: "2 years",
      age: 25,
      highSchoolMarks: "95%",
      undergraduateMarks: "88%",
      review:
        "The program was intensive but rewarding. The faculty is excellent and the research opportunities are abundant. I particularly enjoyed the AI and Machine Learning modules.",
      status: "Alumni",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      university: "Technical University of Munich",
      course: "MSc Mechanical Engineering",
      graduationYear: 2024,
      duration: "2 years",
      age: 23,
      highSchoolMarks: "92%",
      undergraduateMarks: "85%",
      review:
        "Currently in my final semester. The practical exposure and industry connections are outstanding. The German language support for international students is very helpful.",
      status: "Current Student",
      rating: 4,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState("all");

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          University Admission Reviews
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Real experiences shared by students and alumni to help you make
          informed decisions about your education journey
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by university, course, or keyword..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full md:w-64">
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedUniversity}
                onChange={(e) => setSelectedUniversity(e.target.value)}
              >
                <option value="all">All Universities</option>
                <option value="oxford">University of Oxford</option>
                <option value="munich">Technical University of Munich</option>
                <option value="harvard">Harvard University</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviewsData.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-[1.02]"
          >
            {/* Review Header */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {review.university}
                </h3>
                <p className="text-gray-600">{review.course}</p>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {review.status}
              </span>
            </div>

            {/* Student Details Grid */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">{review.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">
                  Class of {review.graduationYear}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">{review.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">{review.age} years</span>
              </div>
            </div>

            {/* Academic Scores */}
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-gray-700 mb-2">
                Academic Scores
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">High School</p>
                  <p className="font-medium text-gray-700">
                    {review.highSchoolMarks}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Undergraduate</p>
                  <p className="font-medium text-gray-700">
                    {review.undergraduateMarks}
                  </p>
                </div>
              </div>
            </div>

            {/* Review Content */}
            <div className="mb-4">
              <p className="text-gray-600">{review.review}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-1">
              {renderStars(review.rating)}
            </div>
          </div>
        ))}
      </div>

      {/* Add Review Button */}
      <div className="max-w-7xl mx-auto mt-8 flex justify-center">
        <Link
          to="/share-experience"
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none flex items-center space-x-2"
        >
          <PenTool className="w-5 h-5" />
          <span>Share Your Experience</span>
        </Link>
      </div>
    </div>
  );
};

export default Review;
