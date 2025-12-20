import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToHashElement from "./components/ScrollToHashElement";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AboutUs from "./pages/AboutUs";
import LandingPage from "./pages/LandingPage"; // 👈 this automatically loads pages/Home/index.tsx
import FAQs from "./pages/FAQs";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/ContactUs";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToHashElement /> 
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<LandingPage />} />   {/* 👈 Home page */}
          <Route path="/about" element={<AboutUs />} />  {/* 👈 About page */}
          <Route path="/faq" element={<FAQs />} />  {/* 👈 FAQs page */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
