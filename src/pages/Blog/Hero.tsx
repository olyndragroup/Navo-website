import React from "react";
import blogImage from "../../assets/BlogImage.svg";
import mo from "../../assets/MO.svg";

const Hero = () => {
  return (
    <div className="w-full  py-20">
      {/* Main container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center lg:justify-between gap-12">
        
        {/* Left: text content */}
        <div className="max-w-xl text-center lg:text-left">
          
          {/* Badge */}
          <button className="mb-3 px-2 py-1 text-sm font-semibold tracking-wide rounded-full bg-[#C9CEEA] text-[#3F51B5] border border-[#C9CEEA]">
            8 min read
          </button>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-semibold text-[#2E2E2E] mb-6">
          How Workflow Automation Improves Team Productivity
          </h1>

          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-[#667085] mb-8">
          Reducing manual work, improving visibility, and building consistent processes for modern teams.
          </p>

          {/* Author */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
  <img
    src={mo}
    alt="Author"
    className="w-auto h-auto object-contain"
  />

  <div className="flex flex-col justify-center">
    <p className="text-sm text-[#101828] font-semibold">Francisca Igwe</p>
    <p className="text-sm text-[#667085]">Published 21 Jan 2026</p>
  </div>
</div>

        </div>

        {/* Right: image */}
        <div className="w-full max-w-lg flex justify-center">
          <img 
            src={blogImage} 
            alt="Hero" 
            className="w-full h-auto object-contain" 
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
