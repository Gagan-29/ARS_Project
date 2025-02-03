import React from 'react';
import { Star, Award, MapPin } from 'lucide-react';

const colleges = [
  {
    id: 1,
    name: "College A",
    university: "VIT Vellore",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCelU6sB8zSVor8TJunZSwR1M6u9qh_DzdIb3TbfxmAjuJeydmcPR_ozaeQ5aRJBnmZzw&usqp=CAU",
    rating: 4,
    reviews: 120,
    nirfRank: 11,
    location: "Tamil Nadu"
  },
  // Repeat the structure for other colleges...
];

const Recommendation = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          College Recommendations
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {colleges.map((college) => (
            <div 
              key={college.id} 
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={college.image}
                  alt={college.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full flex items-center">
                  <Award className="mr-2" size={16} />
                  <span>NIRF {college.nirfRank}</span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{college.name}</h2>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="mr-2" size={16} />
                  <span>{college.university}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`mr-1 ${i < college.rating ? 'text-yellow-500' : 'text-gray-300'}`} 
                        size={20} 
                        fill={i < college.rating ? '#FFC107' : 'none'}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-500">
                      ({college.reviews} reviews)
                    </span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors">
                  View Details
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