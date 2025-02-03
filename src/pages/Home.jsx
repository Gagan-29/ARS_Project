import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const textVariants = [
    "Discover Your Global Education Journey",
    "Opportunities don't happen. You create them.",
  ];

  const countries = [
    {
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png",
      name: "India",
    },
    {
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Flag_of_Australia.svg/2560px-Flag_of_Australia.svg.png",
      name: "Australia",
    },
    {
      flag: "https://cdn.britannica.com/97/897-050-0BFECDA5/Flag-Germany.jpg",
      name: "Germany",
    },
    {
      flag: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg",
      name: "UK",
    },
    {
      flag: "https://cdn.britannica.com/82/682-004-F0B47FCB/Flag-France.jpg",
      name: "France",
    },
  ];

  const [displayText, setDisplayText] = useState(textVariants[0]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [animationStep, setAnimationStep] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => {
        if (!isDeleting) {
          if (prev < textVariants[currentTextIndex].length) {
            return prev + 1;
          } else {
            setTimeout(() => setIsDeleting(true), 1000);
            return prev;
          }
        } else {
          if (prev > 0) {
            return prev - 1;
          } else {
            setIsDeleting(false);
            setCurrentTextIndex(
              (prevIndex) => (prevIndex + 1) % textVariants.length
            );
            return 0;
          }
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isDeleting, currentTextIndex]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br mt-10 from-blue-50 to-indigo-100 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-300 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-2xl bg-white/70 rounded-2xl shadow-2xl p-10 transform transition-all hover:scale-[1.02]">
          <div className="h-32 flex items-center justify-center">
            <h1 className="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-fadeIn">
              {textVariants[currentTextIndex].slice(0, animationStep)}
            </h1>
          </div>

          <p className="text-center text-gray-600 mb-12 text-lg">
            Explore top international universities and take the first step
            towards your academic dreams.
          </p>

          <div className="flex space-x-6 justify-center">
            <Link to="/login" className="w-full max-w-xs">
              <button className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none">
                Login
              </button>
            </Link>
            <Link to="/register" className="w-full max-w-xs">
              <button className="w-full bg-purple-600 text-white py-4 rounded-xl hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none">
                Register
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-16 flex justify-center space-x-8">
          {countries.map((country, index) => (
            <div
              key={index}
              className="w-24 h-24 rounded-full border-4 border-white shadow-lg transform transition-all hover:scale-110 hover:rotate-6"
            >
              <img
                src={country.flag}
                alt={`${country.name} Flag`}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
