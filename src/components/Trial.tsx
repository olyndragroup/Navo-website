import React from "react";

const Trial: React.FC<CTAProps> = ({
  title = "Start your free trial",
  subtitle = "Join over 4,000+ startups already growing with Nova.",
  buttonText = "Get started",
}) => {
  return (
    <section className="relative bg-[#3F51B5] py-16 px-4">
      {/* Background shape */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#4a5fc1] rounded-full opacity-30"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Text content */}
          <div className="text-center md:text-left mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-xl text-blue-100 max-w-xl">{subtitle}</p>
          </div>

          {/* Button */}
          <button className="bg-[#00B894] hover:bg-[#009D7A] text-white font-bold py-3 px-8 rounded-lg flex items-center transition duration-300 transform hover:scale-105">
            {buttonText}
            <svg
              className="ml-2 w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Trial;
