import React, { useState } from "react";

const DetailsInput = () => {
  const [formData, setFormData] = useState({
    name: "",
    gpa: "",
    class10: "",
    class12: "",
    gender: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    gpa: "",
    class10: "",
    class12: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (
      !formData.gpa ||
      isNaN(formData.gpa) ||
      formData.gpa < 0 ||
      formData.gpa > 10
    )
      formErrors.gpa = "GPA should be between 0 and 10";
    if (
      !formData.class10 ||
      isNaN(formData.class10) ||
      formData.class10 < 0 ||
      formData.class10 > 100
    )
      formErrors.class10 = "Class 10 percentage should be between 0 and 100";
    if (
      !formData.class12 ||
      isNaN(formData.class12) ||
      formData.class12 < 0 ||
      formData.class12 > 100
    )
      formErrors.class12 = "Class 12 percentage should be between 0 and 100";
    if (!formData.gender) formErrors.gender = "Gender is required";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted", formData);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-2xl ring-4 ring-blue-200/50 transform transition-all hover:scale-[1.02]">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-2">
            Student Profile
          </h2>
          <p className="text-gray-500">Enter your academic details</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-blue-300"
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              GPA
            </label>
            <input
              type="number"
              name="gpa"
              value={formData.gpa}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.gpa
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-blue-300"
              }`}
              step="0.1"
              min="0"
              max="10"
              placeholder="0.0 - 10.0"
            />
            {errors.gpa && (
              <p className="text-red-500 text-xs mt-1">{errors.gpa}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Class 10 Percentage
            </label>
            <input
              type="number"
              name="class10"
              value={formData.class10}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.class10
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-blue-300"
              }`}
              min="0"
              max="100"
              placeholder="0 - 100"
            />
            {errors.class10 && (
              <p className="text-red-500 text-xs mt-1">{errors.class10}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Class 12 Percentage
            </label>
            <input
              type="number"
              name="class12"
              value={formData.class12}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.class12
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-blue-300"
              }`}
              min="0"
              max="100"
              placeholder="0 - 100"
            />
            {errors.class12 && (
              <p className="text-red-500 text-xs mt-1">{errors.class12}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.gender
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-blue-300"
              }`}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default DetailsInput;
