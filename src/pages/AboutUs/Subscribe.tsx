import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full bg-[#F5F7FA] py-12 px-30 ">
      {/* Top section with light purple background */}
      <div className="w-full bg-[#C9CEEA] px-4 py-10 flex justify-center rounded-md">
        <div className="w-full max-w-2xl text-center">
          {/* Text content */}
          <h3 className="text-2xl font-semibold text-[#3F51B5] mb-1">
            Join our newsletter
          </h3>
          <p className="text-[#3F51B5] mb-6">
            Be the first to know when new updates are posted!
          </p>

          {/* Subscription form */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-72 border border-[#F5F7FA] bg-[#F5F7FA] text-[#667085] px-4 py-2 rounded-md shadow-sm hover:bg-[#E1E5F2] focus:outline-none focus:ring-2 focus:ring-[#3F51B5]"
            />
            <button className="cursor-pointer bg-[#00B894] border border-[#00B894] text-white px-6 py-2 rounded-md shadow-sm hover:bg-[#00cc99] transition-all">
              Subscribe
            </button>

          
          </div>

          {/* Privacy note */}
          <p className="text-sm text-[#3F51B5]">
            We care about your data in our{" "}
            <a
              href="#"
              className="underline text-[#3F51B5] hover:text-[#2E3BA9]"
            >
              privacy policy
            </a>
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;


