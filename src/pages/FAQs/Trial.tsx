import React from "react";

function Trial() {
  return (
    <div className="py-8">
      <div className="w-full flex flex-col items-center text-center gap-6 md:gap-2 py-4 px-4">
        <h1 className="text-4xl font-medium">Start your 30-day free trial</h1>

        <p className="text-lg max-w-2xl mx-auto text-[#667085]">
          Join over 4,000+ startups already growing with Navo.
        </p>
      </div>
      <div className="flex items-center justify-center gap-5 w-full md:w-auto py-4">
        <button className="cursor-pointer border border-[#667085] bg-[#F5F7FA] text-[#667085] font-inter font-medium px-4 py-2 rounded-md shadow-sm hover:bg-[#b7c3d5]">
          Learn more
        </button>

        <button className="cursor-pointer border border-[#00B894] bg-[#00B894] text-[#ffffff] font-inter font-medium px-4 py-2 rounded-md shadow-sm hover:bg-[#12a689]">
          Get started
        </button>
      </div>
    </div>
  );
}

export default Trial;
