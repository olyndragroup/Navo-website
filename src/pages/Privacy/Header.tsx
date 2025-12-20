import React from "react";

const Header: React.FC = () => {
  // Format: dd mmm yyyy
  const today = new Date();
  const formattedDate = today
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .replace(",", "");

  return (
    <div className="w-full flex flex-col items-center gap-6 md:gap-9 py-12">
      <div className="flex flex-col items-center text-center gap-3 w-full">
        <h2 className="text-sm font-semibold tracking-wide text-[#3F51B5]">
          Current as of {formattedDate}
        </h2>

        <h1 className="text-4xl font-bold">Privacy Policy</h1>

        <p className="text-lg max-w-2xl mx-auto text-[#667085]">
          Your privacy is important to us at Navo. We respect your privacy
          regarding any information we may collect from you while using our
          website.
        </p>
      </div>

     {/* Button group container */}
<div className="flex items-center justify-center w-full md:w-auto">
  <div className="flex gap-3 border border-[#3F51B5] rounded-md p-2">
    <button className="cursor-pointer border border-[#667085] bg-[#F5F7FA] text-[#667085] font-inter font-medium px-4 py-2 rounded-md shadow-sm hover:bg-[#E1E5F2]">
      Human friendly
    </button>

    <button className="cursor-pointer border border-[#667085] bg-[#C7C7CC] text-[#667085] font-inter font-medium px-4 py-2 rounded-md shadow-sm hover:bg-[#adadb4]">
      Legal rubbish
    </button>
  </div>
</div>




    </div>
  );
};

export default Header;
