import React, { useState, useMemo } from "react";
import { Star, Award, MapPin, ChevronDown, Search } from "lucide-react";

const colleges = [
  {
    id: 1,
    name: "VIT University",
    university: "Vellore Institute of Technology",
    image:
      "https://collegekeeda.com/wp-content/uploads/2023/12/Direct-Admission-in-vit-vellore.webp",
    rating: 4,
    reviews: 120,
    nirfRank: 11,
    location: "Tamil Nadu",
    courses: ["Engineering", "Computer Science", "Management"],
  },
  {
    id: 2,
    name: "IIT Bombay",
    university: "Indian Institute of Technology",
    image:
      "https://im.rediff.com/getahead/2018/jun/11iit-bombay.jpg?w=450&h=450",
    rating: 5,
    reviews: 250,
    nirfRank: 2,
    location: "Maharashtra",
    courses: ["Engineering", "Research", "Sciences"],
  },
  {
    id: 3,
    name: "IIT Delhi",
    university: "Indian Institute of Technology",
    image:
      "https://static.theprint.in/wp-content/uploads/2017/09/IIT_Delhi_Entrance-e1531132159388.jpg",
    rating: 4.5,
    reviews: 235,
    nirfRank: 4,
    location: "Delhi",
    courses: ["Engineering", "Research", "Sciences"],
  },
  {
    id: 4,
    name: "IIT Madras",
    university: "Indian Institute of Technology",
    image:
      "https://acr.iitm.ac.in/wp-content/uploads/2021/08/IITM_NewGate1.jpg",
    rating: 5,
    reviews: 375,
    nirfRank: 1,
    location: "Tamil Nadu",
    courses: ["Engineering", "Research", "Sciences"],
  },
];

const Recommendation = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    location: "",
    minRating: 0,
    courses: "",
  });

  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isCourseOpen, setIsCourseOpen] = useState(false);

  const locations = ["Tamil Nadu", "Maharashtra", "Karnataka", "Delhi"];
  const courses = ["Engineering", "Management", "Computer Science", "Sciences"];

  // Use useMemo to memoize filtered and sorted colleges
  const filteredColleges = useMemo(() => {
    return colleges
      .filter(
        (college) =>
          college.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (filters.location ? college.location === filters.location : true) &&
          college.rating >= filters.minRating &&
          (filters.courses ? college.courses.includes(filters.courses) : true)
      )
      .sort((a, b) => a.nirfRank - b.nirfRank);
  }, [searchTerm, filters]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4">
      <div className="container mx-auto">
        <div className="bg-white shadow-xl rounded-2xl p-8 mb-10">
          <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-6">
            College Recommendations
          </h1>

          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="text-blue-500" size={20} />
              </div>
              <input
                type="text"
                placeholder="Search colleges by name, location, or courses"
                className="w-full pl-10 pr-4 py-3 border-2 border-blue-200 rounded-xl 
                  text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 
                  transition duration-300 ease-in-out"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <div
                  onClick={() => {
                    setIsLocationOpen(!isLocationOpen);
                    setIsCourseOpen(false);
                  }}
                  className="w-full py-3 px-4 border-2 border-blue-200 rounded-xl 
                    flex items-center justify-between cursor-pointer 
                    hover:bg-blue-50 transition duration-300"
                >
                  <span className="text-gray-700">
                    {filters.location || "All Locations"}
                  </span>
                  <ChevronDown className="text-blue-500" size={20} />
                </div>
                {isLocationOpen && (
                  <div
                    className="absolute z-10 w-full mt-1 bg-white 
                    rounded-xl shadow-lg border border-blue-100"
                  >
                    {locations.map((location) => (
                      <div
                        key={location}
                        onClick={() => {
                          setFilters({ ...filters, location });
                          setIsLocationOpen(false);
                        }}
                        className="px-4 py-2 hover:bg-blue-50 cursor-pointer 
                          first:rounded-t-xl last:rounded-b-xl"
                      >
                        {location}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative">
                <div
                  onClick={() => {
                    setIsCourseOpen(!isCourseOpen);
                    setIsLocationOpen(false);
                  }}
                  className="w-full py-3 px-4 border-2 border-blue-200 rounded-xl 
                    flex items-center justify-between cursor-pointer 
                    hover:bg-blue-50 transition duration-300"
                >
                  <span className="text-gray-700">
                    {filters.courses || "All Courses"}
                  </span>
                  <ChevronDown className="text-blue-500" size={20} />
                </div>
                {isCourseOpen && (
                  <div
                    className="absolute z-10 w-full mt-1 bg-white 
                    rounded-xl shadow-lg border border-blue-100"
                  >
                    {courses.map((course) => (
                      <div
                        key={course}
                        onClick={() => {
                          setFilters({ ...filters, courses: course });
                          setIsCourseOpen(false);
                        }}
                        className="px-4 py-2 hover:bg-blue-50 cursor-pointer 
                          first:rounded-t-xl last:rounded-b-xl"
                      >
                        {course}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredColleges.map((college) => (
            <div
              key={college.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={college.image}
                  alt={college.name}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full flex items-center">
                  <Award className="mr-2" size={16} />
                  <span>NIRF {college.nirfRank}</span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-blue-900">
                  {college.name}
                </h2>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="mr-2" size={16} />
                  <span>{college.university}</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`mr-1 ${
                          i < college.rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                        size={20}
                        fill={i < college.rating ? "#FFC107" : "none"}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-500">
                      ({college.reviews} reviews)
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2 mb-4">
                  {college.courses.slice(0, 2).map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  View College Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
