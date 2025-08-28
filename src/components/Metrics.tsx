import React from "react";

const Metrics = () => {
  return (
    <div className="w-full bg-[#F5F7FA]">
      {/* Text Content */}
      <div className="w-full max-w-[1440px] mx-auto px-4 py-8">
        <div className="">
          <h2 className="text-2xl font-bold text-[#3F51B5] mb-4">
            Unleash the full power of data
          </h2>
          <p className="text-lg text-[#2E2E2E] mb-6 leading-0">
            Everything you need to convert, engage, and retain more users.
          </p>

          {/* Metric Cards */}
          <div className="grid grid-cols-3 gap-6">
            {/* Metric Card 1 */}
            <div className="bg-[#F5F7FA] p-4 rounded-lg">
              <p className="text-2xl font-bold text-[#2E2E2E]">40+</p>
              <p className="text-sm text-[#2E2E2E]">Integrations</p>
            </div>

            {/* Metric Card 2 */}
            <div className="bg-[#F5F7FA] p-4 rounded-lg">
              <p className="text-2xl font-bold text-[#2E2E2E]">600%</p>
              <p className="text-sm text-[#2E2E2E]">Return on investment</p>
            </div>

            {/* Metric Card 3 */}
            <div className="bg-[#F5F7FA] p-4 rounded-lg">
              <p className="text-2xl font-bold text-[#2E2E2E]">4k+</p>
              <p className="text-sm text-[#2E2E2E]">Global customers</p>
            </div>
          </div>
        </div>

        {/* Additional Text Elements */}
      </div>
    </div>
  );
};

export default Metrics;
