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
      <div className="bg-white/30 backdrop-blur-md rounded-lg shadow-xl p-10 border border-white/10 w-full max-w-md relative">
        {/* Circle Images with Curved Lines */}
        <div className="absolute top-0 left-0 right-0 flex justify-center items-center">
          {/* Circle 1 */}
          <div
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg flex items-center justify-center"
            style={{
              backgroundColor: "rgba(59, 130, 246, 0.2)", // Light blue transparent background
              transform: "translate(-200px, 100px)",
            }}
          >
            <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png"
                alt="Circle 1"
                className="w-full h-full rounded-full"
              />
            </div>
          </div>

          {/* Curved Line SVG */}
          <svg
            className="w-1/3 h-20"
            viewBox="0 0 200 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 40 C100 0, 100 100, 190 40"
              stroke="black"
              strokeWidth="4"
              fill="transparent"
            />
          </svg>

          {/* Circle 2 */}
          <div
            className="w-32 h-32 rounded-full bg-green-500 border-4 border-white shadow-lg flex items-center justify-center opacity-20"
            style={{ transform: "translate(-100px, 200px)" }}
          >
            <img
              src="https://via.placeholder.com/120"
              alt="Circle 2"
              className="w-28 h-28 rounded-full"
            />
          </div>

          {/* Circle 3 */}
          <div
            className="w-32 h-32 rounded-full bg-purple-500 border-4 border-white shadow-lg flex items-center justify-center opacity-20"
            style={{ transform: "translate(100px, -100px)" }}
          >
            <img
              src="https://via.placeholder.com/120"
              alt="Circle 3"
              className="w-28 h-28 rounded-full"
            />
          </div>

          {/* Circle 4 */}
          <div
            className="w-32 h-32 rounded-full bg-red-500 border-4 border-white shadow-lg flex items-center justify-center opacity-20"
            style={{ transform: "translate(200px, 100px)" }}
          >
            <img
              src="https://via.placeholder.com/120"
              alt="Circle 4"
              className="w-28 h-28 rounded-full"
            />
          </div>

          {/* Circle 5 */}
          <div
            className="w-32 h-32 rounded-full bg-yellow-500 border-4 border-white shadow-lg flex items-center justify-center opacity-20"
            style={{ transform: "translate(250px, -150px)" }}
          >
            <img
              src="https://via.placeholder.com/120"
              alt="Circle 5"
              className="w-28 h-28 rounded-full"
            />
          </div>

          {/* Circle 6 */}
          <div
            className="w-32 h-32 rounded-full bg-orange-500 border-4 border-white shadow-lg flex items-center justify-center opacity-20"
            style={{ transform: "translate(-150px, -250px)" }}
          >
            <img
              src="https://via.placeholder.com/120"
              alt="Circle 6"
              className="w-28 h-28 rounded-full"
            />
          </div>

          {/* Circle 7 */}
          <div
            className="w-32 h-32 rounded-full bg-teal-500 border-4 border-white shadow-lg flex items-center justify-center opacity-20"
            style={{ transform: "translate(-200px, -100px)" }}
          >
            <img
              src="https://via.placeholder.com/120"
              alt="Circle 7"
              className="w-28 h-28 rounded-full"
            />
          </div>
        </div>

        {/* Content */}
        <h1 className="text-4xl font-bold mb-10 text-center text-gray-800 drop-shadow-lg">
          Get Your Preferred Colleges
        </h1>

        {/* Buttons Container */}
        <div className="w-full space-y-6">
          <Link to="/login">
            <button className="w-full bg-blue-600 text-white text-xl font-semibold p-5 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none border border-blue-600">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="w-full bg-green-600 text-white text-xl mt-5 font-semibold p-5 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 focus:outline-none border border-green-600">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
