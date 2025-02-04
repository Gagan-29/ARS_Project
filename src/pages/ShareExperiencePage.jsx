import React, { useState } from "react";
import {
  ArrowLeft,
  Send,
  User,
  BookOpen,
  Calendar,
  TrendingUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ShareExperiencePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    university: "",
    course: "",
    graduationYear: "",
    duration: "",
    age: "",
    highSchoolMarks: "",
    undergraduateMarks: "",
    review: "",
    status: "Current Student",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/reviews");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={() => navigate("/reviews")}
            className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300 mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Reviews
          </button>
          <h1 className="text-5xl font-extrabold text-transparent pb-5 bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600 mb-4">
            Share Your Academic Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl text-center mx-auto">
            Empower future students by sharing your authentic university
            experience and insights
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 space-y-8"
        >
          {/* Personal Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <User className="w-7 h-7 text-cyan-600" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Personal Details
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-cyan-100 rounded-xl focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-cyan-100 rounded-xl focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <BookOpen className="w-7 h-7 text-indigo-600" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Academic Information
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  University
                </label>
                <input
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-cyan-100 rounded-xl focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course
                </label>
                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-cyan-100 rounded-xl focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Graduation Year
                </label>
                <input
                  type="text"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-cyan-100 rounded-xl focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Duration
                </label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-cyan-100 rounded-xl focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Academic Scores */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <TrendingUp className="w-7 h-7 text-cyan-600" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Academic Scores
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  High School Marks (%)
                </label>
                <input
                  type="text"
                  name="highSchoolMarks"
                  value={formData.highSchoolMarks}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-cyan-100 rounded-xl focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Undergraduate Marks (%)
                </label>
                <input
                  type="text"
                  name="undergraduateMarks"
                  value={formData.undergraduateMarks}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-cyan-100 rounded-xl focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Status and Review */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-cyan-100 rounded-xl focus:ring-2 focus:ring-cyan-500"
                required
              >
                <option value="Current Student">Current Student</option>
                <option value="Alumni">Alumni</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Experience
              </label>
              <textarea
                name="review"
                value={formData.review}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 border-2 border-cyan-100 rounded-xl focus:ring-2 focus:ring-cyan-500"
                required
                placeholder="Share your detailed experience about the admission process, university life, and valuable tips for future students..."
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center space-x-3 bg-gradient-to-r from-cyan-600 to-indigo-600 text-white px-10 py-4 rounded-xl hover:from-cyan-700 hover:to-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <Send className="w-5 h-5" />
              <span>Submit Experience</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShareExperiencePage;
