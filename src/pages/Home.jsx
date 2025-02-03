import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?education,books,university')",
      }}
    >
      {/* Glassmorphism Card */}
      <div className="bg-white/30 backdrop-blur-md rounded-lg shadow-xl p-10 border border-white/10 w-full max-w-md">
        <h1 className="text-4xl font-bold mb-10 text-center text-white drop-shadow-lg">
          Get Your Preferred Colleges
        </h1>

        {/* Buttons Container */}
        <div className="w-full space-y-6">
          <Link to="/login">
            <button className="w-full bg-white/20 backdrop-blur-md text-white text-xl font-semibold p-5 rounded-lg hover:bg-white/40 transition-all duration-300 transform hover:scale-105 focus:outline-none border border-white/10">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="w-full bg-white/20 mt-5 backdrop-blur-md text-white text-xl font-semibold p-5 rounded-lg hover:bg-white/40 transition-all duration-300 transform hover:scale-105 focus:outline-none border border-white/10">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
