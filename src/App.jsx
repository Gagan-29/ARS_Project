import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DetailsInput from "./pages/DetailsInput";
import Recommendation from "./pages/Recommendation";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
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
      </Routes>
    </Router>
  );
};

export default App;
