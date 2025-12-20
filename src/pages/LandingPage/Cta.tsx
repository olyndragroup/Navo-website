import React from "react";
import CTAimage from "../../assets/Contents.svg";

interface CTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

const CTA: React.FC<CTAProps> = ({
  title = "Work made easy with Nova.",
  subtitle = "Start your 30-day free trial today.",
  buttonText = "Get started",
}) => {
  return (
    <section className="relative bg-[#3F51B5] py-16 px-4 overflow-hidden">
      {/* Background shape */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#4a5fc1] rounded-full opacity-30 translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: text + button */}
          <div className="flex-1 text-center md:text-left z-10 pr-4 md:pr-12 md:pl-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-xl text-blue-100 max-w-xl mb-6">{subtitle}</p>
            <button className="bg-[#00B894] hover:bg-[#009D7A] text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
              {buttonText}
            </button>
          </div>

          {/* Right: image overlapping shape */}
          <div className="flex-1 flex justify-center relative">
            <img
              src={CTAimage}
              alt="Hero"
              className="object-contain w-full max-w-md h-auto relative z-10 drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
