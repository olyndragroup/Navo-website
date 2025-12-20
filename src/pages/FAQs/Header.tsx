import React from "react";

const Header = () => {
  return (
    <div className="w-full flex flex-col items-center text-center gap-6 md:gap-9 py-12 px-4">
      <h1 className="text-sm font-semibold  tracking-wide text-[#3F51B5]">
        Support
      </h1>
      <h1 className="text-4xl font-semibold">FAQs</h1>

      <p className="text-lg max-w-2xl mx-auto text-[#667085]">
        Everything you need to know about the product and billing. Can’t find
        the answer you’re looking for? Please{" "}
        <span className="underline">chat to our friendly team.</span>{" "}
      </p>
    </div>
  );
};

export default Header;
