import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Add actual form submission logic
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-2 border border-purple-100/50 transform transition-all hover:scale-[1.01]">
        {/* Contact Information Section */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-500 text-white p-10 flex flex-col justify-center">
          <div className="flex justify-center mb-6">
            <MessageCircle
              size={64}
              strokeWidth={1.5}
              className="text-white/20 absolute"
            />
            <MessageCircle size={48} strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Info</h2>
          <div className="space-y-6">
            {[
              {
                icon: Mail,
                text: "support@admissionrecsys.com",
                className: "hover:text-indigo-200 transition-colors",
              },
              {
                icon: Phone,
                text: "+91 9264728732",
                className: "hover:text-indigo-200 transition-colors",
              },
              {
                icon: MapPin,
                text: "VIT Vellore, Tamil Nadu",
                className: "hover:text-indigo-200 transition-colors",
              },
            ].map(({ icon: Icon, text, className }) => (
              <div key={text} className="flex items-center space-x-4">
                <Icon className="text-white/80" size={24} />
                <span className={`${className}`}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 pb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 text-center">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              {
                name: "name",
                type: "text",
                placeholder: "Your Name",
                required: true,
              },
              {
                name: "email",
                type: "email",
                placeholder: "Your Email",
                required: true,
              },
              {
                name: "phone",
                type: "tel",
                placeholder: "Phone Number",
                required: false,
              },
            ].map(({ name, type, placeholder, required }) => (
              <div key={name} className="relative group">
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  required={required}
                  className="w-full px-4 py-3 border border-purple-200/50 rounded-xl bg-purple-50/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
              </div>
            ))}

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              required
              className="w-full px-4 py-3 border border-purple-200/50 rounded-xl bg-purple-50/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-3 rounded-xl hover:opacity-90 transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Send size={20} />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
