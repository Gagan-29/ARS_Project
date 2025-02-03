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
      // Handle successful form submission, e.g., saving data to database or API
      console.log("Form Submitted", formData);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <div className="p-8 w-96 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Enter Your Details
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded mt-1 text-gray-800"
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">GPA (UG)</label>
            <input
              type="number"
              name="gpa"
              value={formData.gpa}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded mt-1 text-gray-800"
              step="0.1"
              min="0"
              max="10"
              required
            />
            {errors.gpa && <p className="text-red-500 text-sm">{errors.gpa}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Class 10 Percentage</label>
            <input
              type="number"
              name="class10"
              value={formData.class10}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded mt-1 text-gray-800"
              min="0"
              max="100"
              required
            />
            {errors.class10 && (
              <p className="text-red-500 text-sm">{errors.class10}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Class 12 Percentage</label>
            <input
              type="number"
              name="class12"
              value={formData.class12}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded mt-1 text-gray-800"
              min="0"
              max="100"
              required
            />
            {errors.class12 && (
              <p className="text-red-500 text-sm">{errors.class12}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded mt-1 text -gray-800"
              required
            >
              <option value="Select Gender" className="text-black">
                Select Gender
              </option>
              <option value="male" className="text-black">
                Male
              </option>
              <option value="female" className="text-black">
                Female
              </option>
              <option value="other" className="text-black">
                Other
              </option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DetailsInput;
