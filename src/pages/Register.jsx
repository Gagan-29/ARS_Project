import React, { useState } from "react";
import { User, Mail, Phone, Lock, UserPlus, Pyramid } from "lucide-react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let validationErrors = {};
    const phonePattern = /^[0-9]{10}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.username) validationErrors.username = "Username is required";
    if (!formData.password) validationErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.email || !emailPattern.test(formData.email)) {
      validationErrors.email = "Please enter a valid email address";
    }
    if (!formData.phoneNumber || !phonePattern.test(formData.phoneNumber)) {
      validationErrors.phoneNumber =
        "Please enter a valid 10-digit phone number";
    }

    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Register submitted", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-purple-100 to-pink-100">
      <div className="w-full max-w-md px-8 mt-10 mb-5 py-7 bg-white rounded-3xl shadow-2xl border border-purple-100/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Pyramid className="text-purple-500" size={48} strokeWidth={1.5} />
          </div>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
            Get Started
          </h2>
          <p className="text-gray-500 mt-2 tracking-wide">
            Create your personal account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            {
              name: "username",
              type: "text",
              icon: User,
              placeholder: "Username",
            },
            { name: "email", type: "email", icon: Mail, placeholder: "Email" },
            {
              name: "phoneNumber",
              type: "text",
              icon: Phone,
              placeholder: "Phone Number",
            },
            {
              name: "password",
              type: "password",
              icon: Lock,
              placeholder: "Password",
            },
            {
              name: "confirmPassword",
              type: "password",
              icon: Lock,
              placeholder: "Confirm Password",
            },
          ].map(({ name, type, icon: Icon, placeholder }) => (
            <div key={name} className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Icon
                  className="text-purple-400 group-focus-within:text-purple-600 transition-colors"
                  size={22}
                />
              </div>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className={`w-full p-4 pl-12 border border-purple-200/50 rounded-xl bg-purple-50/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                  errors[name] ? "border-red-500" : ""
                }`}
              />
              {errors[name] && (
                <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white p-4 rounded-xl hover:opacity-90 transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
          >
            <UserPlus size={20} />
            <span>Create Account</span>
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-purple-600 hover:underline font-semibold"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
