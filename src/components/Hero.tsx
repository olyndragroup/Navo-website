import React from "react";
import heroImage from "../assets/HeroImage.svg";

const HeroHeader = () => {
  return (
    <div className="w-full bg-[#F5F7FA] py-20">
      {/* Main container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center lg:justify-between gap-12">
        {/* Left: text content */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#2E2E2E] mb-6">
            The Modular workflow solution for modern enterprises
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 mb-8">
            The all-in-one workflow solution, designed to simplify, automate and
            accelerate how your work gets done.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button className="px-8 py-3 border border-[#3F51B5] text-[#3F51B5] rounded-lg hover:bg-gray-100 transition-colors">
              Login
            </button>
            <button className="px-8 py-3 bg-[#3F51B5] text-white rounded-lg hover:bg-[#2E3A8F] transition-colors">
              Sign Up
            </button>
          </div>
        </div>

        {/* Right: image */}
        <div className="w-full max-w-lg flex justify-center">
          <img
            src={heroImage}
            alt="Hero"
            className="object-contain w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
