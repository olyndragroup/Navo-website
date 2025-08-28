import React from "react";
import imgarrow from "../assets/arrow.svg";

const TickIcon = () => (
  <div className="flex items-center justify-center w-6 h-6 rounded bg-[#B4EDCC]">
    <svg
      className="h-4 w-4 text-[#2ECC71]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M5 13l4 4L19 7"
      />
    </svg>
  </div>
);

const Pricing = () => {
  return (
    <div className="w-full bg-[#F5F7FA] relative">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="text-left">
          <p className="text-[#2B377B] font-medium">Pricing</p>
          <h1 className="text-4xl font-bold">Simple, transparent pricing</h1>
          <p className="mt-2 text-gray-600 max-w-xl">
            We believe Untitled should be accessible to all companies, no matter
            the size.
          </p>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Arrow pointing to Basic plan with tag at tip */}
          <div className="absolute z-10 top-[-32px] left-[calc(33.33%-8px)] flex items-center">
            <img src={imgarrow} alt="Arrow" className="w-16 h-auto" />
            <span className="ml-[-16px] bg-[#00B894] text-white px-3 py-1 rounded-full text-sm font-medium">
              Most popular!
            </span>
          </div>

          {/* Basic plan Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#9BA5D9]">
            <div className="p-8">
              <div className="mt-8">
                <h2 className="text-4xl font-bold text-[#2E2E2E]">$10/mth</h2>
                <p className="mt-2 text-[#2E2E2E] font-bold">Basic plan</p>
                <p className="text-gray-500">Billed annually.</p>
              </div>
            </div>

            <div className="px-8">
              <ul className="mt-4 space-y-3">
                {[
                  "Access to all basic features",
                  "Basic reporting and analytics",
                  "Up to 10 individual users",
                  "20GB individual data each user",
                  "Basic chat and email support",
                ].map((text, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <TickIcon />
                    <span className="text-gray-600">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8">
              <button className="mt-8 w-full bg-[#00B894] text-white py-3 px-6 rounded-lg font-medium">
                Get Started
              </button>
            </div>
          </div>

          {/* Business plan Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#9BA5D9]">
            <div className="p-8">
              <div className="mt-8">
                <h2 className="text-4xl font-bold text-[#2E2E2E]">$20/mth</h2>
                <p className="mt-2 text-[#2E2E2E] font-bold">Business plan</p>
                <p className="text-gray-500">Billed annually.</p>
              </div>
            </div>

            <div className="px-8">
              <ul className="mt-4 space-y-3">
                {[
                  "200+ integrations",
                  "Advanced reporting and analytics",
                  "Up to 20 individual users",
                  "40GB individual data each user",
                  "Priority chat and email support",
                ].map((text, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <TickIcon />
                    <span className="text-gray-600">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8">
              <button className="mt-8 w-full bg-[#00B894] text-white py-3 px-6 rounded-lg font-medium">
                Get Started
              </button>
            </div>
          </div>

          {/* Enterprise plan Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#9BA5D9]">
            <div className="p-8">
              <div className="mt-8">
                <h2 className="text-4xl font-bold text-[#2E2E2E]">$40/mth</h2>
                <p className="mt-2 text-[#2E2E2E] font-bold">Enterprise plan</p>
                <p className="text-gray-500">Billed annually.</p>
              </div>
            </div>

            <div className="px-8">
              <ul className="mt-4 space-y-3">
                {[
                  "Advanced custom fields",
                  "Audit log and data history",
                  "Unlimited individual users",
                  "Unlimited individual data",
                  "Personalised+priority service",
                ].map((text, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <TickIcon />
                    <span className="text-gray-600">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8">
              <button className="mt-8 w-full bg-[#00B894] text-white py-3 px-6 rounded-lg font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
