import React, { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState(0);

  const about = [
    {
      title: "Share team inboxes",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      title: "Deliver instant answers",
      description:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
    {
      title: "Manage your team with reports",
      description:
        "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.",
    },
  ];

  return (
    <section className="w-full bg-[#F5F7FA] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className=" w-full lg:max-w-3xl mb-16 text-center">
          <h2 className="text-sm font-semibold  tracking-wide text-[#3F51B5] mb-3">
            About us
          </h2>
          <h3 className="text-3xl lg:text-4xl font-semibold text-[#2E2E2E] text-center mb-4">
            Our mission is to make working fun and easier!
          </h3>
          <p className="text-lg text-[#2E2E2E] text-center">
            Nova is a Modular workflow solution company that reduces workload for you and your team, so you don't have to stress. Businesses of every size - from new startups to public companies - use our software to manage their businesses.
          </p>
        </div>

        {/* about + image */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Tabs */}
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            {about.map((about, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-start gap-4 px-4 py-3 text-left transition-all ${
                  activeTab === index
                    ? "border-l-4 border-[#3F51B5] bg-white shadow-sm"
                    : "border-l-4 border-transparent hover:bg-gray-50"
                }`}
              >
                <div className="flex flex-col">
                  <h3 className="font-medium text-lg text-[#2E2E2E]">
                    {about.title}
                  </h3>
                  <p className="text-sm text-[#667085]">
                    {about.description}
                  </p>
                  <button className="mt-4 text-[#3F51B5] font-medium flex items-center gap-2 hover:underline">
                    Learn More
                    {/* Inline SVG arrow */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14m0 0l-6-6m6 6l-6 6"
                      />
                    </svg>
                  </button>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}