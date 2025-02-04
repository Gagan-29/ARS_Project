import React, { useState } from "react";
import { User, Lock, LogIn, Heart } from "lucide-react";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <div className="w-full max-w-md px-8 py-10 bg-white rounded-2xl shadow-2xl border border-purple-100/50 transform transition-all hover:scale-105">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Heart className="text-rose-500" size={48} strokeWidth={1.5} />
          </div>
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Welcome Back
          </h2>
          <p className="text-gray-500 mt-2 tracking-wide">
            Login to your personal space
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User
                className="text-purple-400 group-focus-within:text-purple-600 transition-colors"
                size={22}
              />
            </div>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full p-4 pl-12 border border-purple-200/50 rounded-xl bg-purple-50/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              required
            />
          </div>

          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock
                className="text-purple-400 group-focus-within:text-purple-600 transition-colors"
                size={22}
              />
            </div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-4 pl-12 border border-purple-200/50 rounded-xl bg-purple-50/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="mr-2 text-purple-600 rounded focus:ring-purple-500"
              />
              <label className="text-gray-600 font-light">Remember me</label>
            </div>
            <a href="#" className="text-purple-600 hover:underline font-medium">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white p-4 rounded-xl hover:opacity-90 transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
          >
            <LogIn size={20} />
            <span>Login</span>
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <a
              href="/register"
              className="text-purple-600 hover:underline font-semibold"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
