import React from "react";

const Foot = () => {
  return (
    <footer className="relative bg-[#3F51B5] py-16 px-4 text-white">
      {/* Background shape */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#4a5fc1] rounded-full opacity-30" />
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-3xl relative z-10">
        {/* Centered top section */}
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-2xl md:text-3xl font-semibold mb-10">Nova</h4>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Let’s get started on something great
          </h3>
          <p className="text-base text-blue-100 mb-8 max-w-md text-center">
            Join over 4,000+ startups already growing with Nova.
          </p>

          <button className="bg-[#00B894] hover:bg-[#009D7A] text-white py-3 px-8 rounded-lg font-medium transition-transform duration-300 hover:scale-105">
            Get started
          </button>
        </div>

        {/* Footer bottom section - aligned left */}
        <div className="mt-12 text-blue-100 text-sm flex flex-col md:flex-row justify-start items-center gap-6">
  <p>© 2077 Nova UI. All rights reserved.</p>

  <div className="flex gap-6">
    <a href="#" className="hover:underline">
      Terms
    </a>
    <a href="#" className="hover:underline">
      Privacy
    </a>
    <a href="#" className="hover:underline">
      Cookies
    </a>
  </div>
</div>

      </div>
    </footer>
  );
};

export default Foot;
