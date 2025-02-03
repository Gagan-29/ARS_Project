import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?education,books,university')",
      }}
    >
      {/* Glassmorphism Card */}
      <div className="bg-white/50 backdrop-blur-md rounded-lg shadow-xl p-10 border border-white/10 w-full max-w-md relative z-10">
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

      {/* Circle Images with Curved Lines */}
      <div className="absolute inset-0 z-0">
        {/* Circle with SVG */}
        <div className="absolute top-10 left-10">
          <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg flex items-center justify-center bg-blue-100">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png"
              alt="India Flag"
              className="w-28 h-28 rounded-full"
            />
          </div>
        </div>

        <svg
          className="absolute top-24 left-44"
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
        <div className="absolute top-40 left-80">
          <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg flex items-center justify-center bg-blue-100">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Flag_of_Australia.svg/2560px-Flag_of_Australia.svg.png"
              alt="Australia Flag"
              className="w-28 h-28 rounded-full"
            />
          </div>
        </div>

        {/* Circle 3 */}
        <div className="absolute bottom-10 left-20">
          <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg flex items-center justify-center bg-blue-100">
            <img
              src="https://cdn.britannica.com/97/897-050-0BFECDA5/Flag-Germany.jpg"
              alt="Germany Flag"
              className="w-28 h-28 rounded-full"
            />
          </div>
        </div>

        {/* Circle 4 */}
        <div className="absolute bottom-20 right-20">
          <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg flex items-center justify-center bg-blue-100">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg"
              alt="UK Flag"
              className="w-28 h-28 rounded-full"
            />
          </div>
        </div>

        {/* Circle 5 */}
        <div className="absolute top-10 right-10">
          <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg flex items-center justify-center bg-blue-100">
            <img
              src="https://cdn.britannica.com/82/682-004-F0B47FCB/Flag-France.jpg"
              alt="France Flag"
              className="w-28 h-28 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
