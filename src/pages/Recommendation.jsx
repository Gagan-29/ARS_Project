import React from "react";

// Sample data for demonstration
const colleges = [
  {
    id: 1,
    name: "College A",
    university: "VIT Vellore",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCelU6sB8zSVor8TJunZSwR1M6u9qh_DzdIb3TbfxmAjuJeydmcPR_ozaeQ5aRJBnmZzw&usqp=CAU",
    rating: 4,
    reviews: 120,
    nirfRank: 11,
  },
  {
    id: 2,
    name: "College B",
    university: "VIT Vellore",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCelU6sB8zSVor8TJunZSwR1M6u9qh_DzdIb3TbfxmAjuJeydmcPR_ozaeQ5aRJBnmZzw&usqp=CAU",
    rating: 4,
    reviews: 120,
    nirfRank: 11,
  },
  {
    id: 3,
    name: "College C",
    university: "VIT Vellore",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCelU6sB8zSVor8TJunZSwR1M6u9qh_DzdIb3TbfxmAjuJeydmcPR_ozaeQ5aRJBnmZzw&usqp=CAU",
    rating: 4,
    reviews: 120,
    nirfRank: 11,
  },
  {
    id: 4,
    name: "College D",
    university: "VIT Vellore",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCelU6sB8zSVor8TJunZSwR1M6u9qh_DzdIb3TbfxmAjuJeydmcPR_ozaeQ5aRJBnmZzw&usqp=CAU",
    rating: 4,
    reviews: 120,
    nirfRank: 11,
  },
  {
    id: 5,
    name: "College E",
    university: "VIT Vellore",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCelU6sB8zSVor8TJunZSwR1M6u9qh_DzdIb3TbfxmAjuJeydmcPR_ozaeQ5aRJBnmZzw&usqp=CAU",
    rating: 4,
    reviews: 120,
    nirfRank: 11,
  },
];

const Recommendation = () => {
  return (
    <div className="container mx-auto p-4 mt-15">
      <h1 className="text-3xl font-bold text-center mb-6">
        College Recommendations
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {colleges.map((college) => (
          <div
            key={college.id}
            className="bg-white w-48 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-col"
          >
            <img
              src={college.image}
              alt={college.name}
              className="w-full h-32 object-cover" // Fixed height for the image
            />
            <div className="flex-1 p-2 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold mb-1">{college.name}</h2>
                <h3 className="text-sm text-gray-600 mb-1">
                  {college.university}
                </h3>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500">
                    {"★".repeat(college.rating)}{" "}
                    {"☆".repeat(5 - college.rating)}
                  </span>
                  <span className="ml-2 text-gray-600">
                    ({college.reviews} reviews)
                  </span>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                NIRF Rank: <span className="font-bold">{college.nirfRank}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendation;
