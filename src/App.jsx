import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DetailsInput from "./pages/DetailsInput";
import Recommendation from "./pages/Recommendation";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import "./index.css";
import Footer from "./components/Footer.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Review from "./pages/Review.jsx";
import ShareExperiencePage from "./pages/ShareExperiencePage.jsx";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details" element={<DetailsInput />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/reviews" element={<Review />} />
        <Route path="/share-experience" element={<ShareExperiencePage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
