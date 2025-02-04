import React, { useState, useRef } from "react";
import {
  Upload,
  FileText,
  FileCheck,
  Edit3,
  Send,
  Paperclip,
} from "lucide-react";

const DetailsInput = () => {
  const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB

  const [resumeFile, setResumeFile] = useState(null);
  const [highSchoolFile, setHighSchoolFile] = useState(null);
  const [undergradFile, setUndergradFile] = useState(null);
  const resumeRef = useRef(null);
  const highSchoolRef = useRef(null);
  const undergradRef = useRef(null);

  const handleFileUpload = (setter, ref) => {
    const file = ref.current.files[0];
    if (file) {
      if (file.size <= MAX_FILE_SIZE) {
        setter(file);
      } else {
        alert(`File size must be max ${MAX_FILE_SIZE / (1024 * 1024)}MB`);
      }
    }
  };

  const renderFileUploader = (ref, file, setter, label) => (
    <div className="relative w-full">
      <input
        type="file"
        ref={ref}
        onChange={() => handleFileUpload(setter, ref)}
        accept=".pdf,.doc,.docx"
        className="hidden"
      />
      <button
        type="button"
        onClick={() => ref.current.click()}
        className="w-full flex items-center justify-center p-4 border-2 border-dashed border-purple-300 rounded-xl hover:border-purple-500 transition-all group"
      >
        <Paperclip className="mr-2 text-purple-400 group-hover:text-purple-600" />
        <span className="text-gray-600 group-hover:text-purple-600">
          {file ? file.name : `Upload ${label}`}
        </span>
      </button>
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submission logic
    console.log("Files submitted", {
      resumeFile,
      highSchoolFile,
      undergradFile,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 border border-purple-100/50 transform transition-all hover:scale-[1.02]">
        <div className="text-center mb-8">
          <FileText
            className="mx-auto mb-4 text-purple-500"
            size={48}
            strokeWidth={1.5}
          />
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
            Your Academic Journey
          </h2>
          <p className="text-gray-500">
            Drop your documents and unlock personalized college recommendations
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            {
              label: "Resume",
              ref: resumeRef,
              file: resumeFile,
              setter: setResumeFile,
            },
            {
              label: "High School Marksheet",
              ref: highSchoolRef,
              file: highSchoolFile,
              setter: setHighSchoolFile,
            },
            {
              label: "Undergraduate Marksheet",
              ref: undergradRef,
              file: undergradFile,
              setter: setUndergradFile,
            },
          ].map(({ label, ref, file, setter }) => (
            <div key={label}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {label}
              </label>
              {renderFileUploader(ref, file, setter, label)}
            </div>
          ))}

          <div className="flex space-x-4">
            <button
              type="button"
              className="w-1/2 flex items-center justify-center p-3 bg-purple-100 text-purple-700 rounded-xl hover:bg-purple-200 transition-colors"
            >
              <Edit3 className="mr-2" size={20} />
              Edit
            </button>
            <button
              type="submit"
              className="w-1/2 flex items-center justify-center p-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl hover:opacity-90 transition-colors"
            >
              <Send className="mr-2" size={20} />
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailsInput;
