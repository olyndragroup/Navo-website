import React from "react";
import apps from "../../assets/apps.svg";

const Features = () => {
  return (
    <div>
      <div className="w-full flex flex-col items-center text-center gap-6 md:gap-2 py-12 px-4">
        <h1 className="text-sm font-semibold  tracking-wide text-[#3F51B5]">
          Integrations
        </h1>
        <h1 className="text-4xl font-medium">Get more value from your tools</h1>

        <p className="text-lg max-w-2xl mx-auto text-[#667085]">
          Connect your tools, connect your teams. With over 200 apps already
          available in our directory, your team’s favourite tools are just a
          click away.
        </p>
      </div>
      <div className="w-full flex justify-center mb-12">
        <img
          src={apps}
          alt="Illustration — design concept"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className=" text-center items-center gap-4 py-6 w-full md:w-auto">
        <button className="cursor-pointer bg-[#00B894]  text-[#FFFFFF] font-inter font-medium px-6 py-2 rounded-md shadow-sm hover:bg-[#12a689]">
          View all integrations
        </button>
      </div>
    </div>
  );
};

export default Features;
