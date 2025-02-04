import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Star,
  Search,
  Filter,
  PenTool,
  BookOpen,
  Globe,
  Award,
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
      country: "UK",
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
      country: "Germany",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState("all");

  const filteredReviews = useMemo(() => {
    return reviewsData.filter(
      (review) =>
        (selectedUniversity === "all" ||
          review.university
            .toLowerCase()
            .includes(selectedUniversity.toLowerCase())) &&
        (searchTerm === "" ||
          review.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
          review.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
          review.review.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm, selectedUniversity]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-amber-400 fill-amber-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold text-transparent pb-5 bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600 mb-4">
          University Experience Insights
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Authentic student stories to guide your global academic journey
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-white/80 rounded-2xl shadow-xl p-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search universities, courses, or keywords..."
                className="w-full pl-10 pr-4 py-3 border-2 border-cyan-100 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex-shrink-0">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  className="w-full pl-10 pr-4 py-3 border-2 border-cyan-100 rounded-xl focus:ring-2 focus:ring-cyan-500"
                  value={selectedUniversity}
                  onChange={(e) => setSelectedUniversity(e.target.value)}
                >
                  <option value="all">All Universities</option>
                  <option value="oxford">University of Oxford</option>
                  <option value="munich">Technical University of Munich</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredReviews.map((review) => (
          <div
            key={review.id}
            className="bg-white/80 rounded-2xl shadow-xl p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
          >
            {/* Review Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600">
                  {review.university}
                </h3>
                <p className="text-gray-600 flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-cyan-500" />
                  <span>{review.course}</span>
                </p>
              </div>
              <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">
                {review.status}
              </span>
            </div>

            {/* Review Content */}
            <div className="mb-6">
              <p className="text-gray-700 italic">"{review.review}"</p>
            </div>

            {/* Student Details */}
            <div className="grid grid-cols-2 gap-4 mb-6 bg-cyan-50/50 p-4 rounded-xl">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-indigo-500" />
                <span className="text-gray-700">
                  Graduation: {review.graduationYear}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-cyan-500" />
                <span className="text-gray-700">{review.duration}</span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-1">
                {renderStars(review.rating)}
              </div>
              <span className="text-sm text-gray-500">
                Academic Score: {review.undergraduateMarks}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Add Review Button */}
      <div className="max-w-4xl mx-auto mt-12 flex justify-center">
        <Link
          to="/share-experience"
          className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-indigo-600 text-white rounded-xl hover:from-cyan-700 hover:to-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
        >
          <PenTool className="w-6 h-6" />
          <span className="text-lg font-semibold">Share Your Experience</span>
        </Link>
      </div>
    </div>
  );
};

export default Review;
