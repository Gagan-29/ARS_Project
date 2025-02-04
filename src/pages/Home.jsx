import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Globe,
  Medal,
  Rocket,
  Send,
  MessageCircle,
  Star,
  BookOpen,
  Users,
} from "lucide-react";

const Home = () => {
  const textVariants = [
    "Unlock Your Global Academic Potential",
    "Transform Dreams into Reality",
  ];

  const countries = [
    {
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png",
      name: "India",
      universities: 45,
    },
    {
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Flag_of_Australia.svg/2560px-Flag_of_Australia.svg.png",
      name: "Australia",
      universities: 38,
    },
    {
      flag: "https://cdn.britannica.com/97/897-050-0BFECDA5/Flag-Germany.jpg",
      name: "Germany",
      universities: 52,
    },
    {
      flag: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg",
      name: "UK",
      universities: 60,
    },
    {
      flag: "https://cdn.britannica.com/82/682-004-F0B47FCB/Flag-France.jpg",
      name: "France",
      universities: 42,
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
            setTimeout(() => setIsDeleting(true), 1500);
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
    <div className="relative min-h-screen bg-gradient-to-br from-cyan-50 to-indigo-100 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] right-[-50px] w-[600px] h-[600px] bg-cyan-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-100px] left-[-50px] w-[500px] h-[500px] bg-violet-300/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white/80  rounded-3xl shadow-2xl p-10 transform transition-all hover:scale-[1.02]">
          <div className="text-center">
            <h1 className="text-6xl font-extrabold mb-6 pb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600 animate-fadeIn">
              {textVariants[currentTextIndex].slice(0, animationStep)}
              <span className="animate-blink">|</span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Embark on a transformative academic journey across top global
              universities
            </p>

            <div className="flex space-x-6 justify-center mb-12">
              <Link to="/login" className="w-full max-w-xs">
                <button className="w-full bg-cyan-600 text-white py-4 rounded-xl hover:bg-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Login
                </button>
              </Link>
              <Link to="/register" className="w-full max-w-xs">
                <button className="w-full bg-indigo-600 text-white py-4 rounded-xl hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Register
                </button>
              </Link>
            </div>
          </div>

          {/* University Insights Section */}
          <div className="mt-8 bg-white/60 rounded-xl p-6 transform transition-all hover:scale-[1.01] shadow-md">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <MessageCircle className="w-8 h-8 text-cyan-600" />
                <h3 className="text-2xl font-semibold text-gray-800">
                  University Insights
                </h3>
              </div>
              <Link
                to="/reviews"
                className="flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-indigo-600 transition-all duration-300 shadow-md transform hover:scale-105"
              >
                <span>Share Your Journey</span>
                <Star className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 bg-white/80 p-4 rounded-lg shadow-sm">
                <BookOpen className="w-6 h-6 text-cyan-600" />
                <p className="text-gray-700">Share your admission experience</p>
              </div>
              <div className="flex items-center space-x-3 bg-white/80 p-4 rounded-lg shadow-sm">
                <Users className="w-6 h-6 text-indigo-600" />
                <p className="text-gray-700">
                  Connect with students and alumni
                </p>
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-600 bg-white/60 p-4 rounded-lg">
              Help future students by sharing your academic journey, scores, and
              university insights
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-12">
            <div className="bg-white/60 rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-cyan-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Global Opportunities
                </h3>
              </div>
              <p className="text-gray-600">
                Explore universities across continents, connecting you with
                world-class education.
              </p>
            </div>

            <div className="bg-white/60 rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <Medal className="w-8 h-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Quality Education
                </h3>
              </div>
              <p className="text-gray-600">
                Curated selection of top-ranked universities with proven
                academic excellence.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
              Partner Countries
            </h2>
            <div className="flex justify-center space-x-8">
              {countries.map((country, index) => (
                <div
                  key={index}
                  className="group relative w-28 h-28 rounded-full border-4 border-white shadow-lg transform transition-all hover:scale-110 hover:rotate-6"
                >
                  <img
                    src={country.flag}
                    alt={`${country.name} Flag`}
                    className="w-full h-full rounded-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <span className="text-sm">
                      {country.universities} Universities
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
