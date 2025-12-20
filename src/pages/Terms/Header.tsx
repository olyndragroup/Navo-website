import React from "react";

const Header: React.FC = () => {
  const today = new Date();
  const formattedDate = today
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .replace(",", "");

  return (
    <div className="w-full flex flex-col items-center gap-6 md:gap-9 py-12 px-4">

      {/* Centered 2-column layout */}
      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT SIDE — date, title, buttons */}
        <div className="flex flex-col items-start text-left gap-4">
          <h2 className="text-sm font-semibold tracking-wide text-[#3F51B5]">
            Current as of {formattedDate}
          </h2>

          <h1 className="text-4xl font-bold">
            Terms and Conditions
          </h1>

          <div className="flex gap-3 border border-[#3F51B5] rounded-md p-2 mt-2">
            <button className="cursor-pointer border border-[#667085] bg-[#F5F7FA] text-[#667085] font-medium px-4 py-2 rounded-md shadow-sm hover:bg-[#E1E5F2]">
              Human friendly
            </button>

            <button className="cursor-pointer border border-[#667085] bg-[#C7C7CC] text-[#667085] font-medium px-4 py-2 rounded-md shadow-sm hover:bg-[#adadb4]">
              Legal rubbish
            </button>
          </div>
        </div>

        {/* RIGHT SIDE — description */}
        <div className="flex items-center">
          <p className="text-lg text-[#667085] leading-relaxed">
            By accessing our website, you are agreeing to be bound by these
            terms of service, and agree that you are responsible for
            compliance with any applicable laws.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Header;
