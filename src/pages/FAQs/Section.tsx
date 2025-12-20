import React from "react";

const Section = () => {
  return (
    <div className="bg-[#F5F7FA]">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 justify-items-center w-full flex flex-col items-center text-left gap-6 md:gap-12 py-10 px-4">
        <section>
          <h2 className=" font-bold text-[#2E2E2E]">
            Is there a free trial available?
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-[#667085]">
              Yes, you can try us for free for 30 days. If you want, we’ll
              provide you with a free, personalized 30-minute onboarding call to
              get you up and running as soon as possible.
            </p>
          </div>
        </section>
        <section>
          <h2 className=" font-bold text-[#2E2E2E]">
            Can I change my plan later?
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-[#667085]">
              Of course. Our pricing scales with your company. Chat to our
              friendly team to find a solution that works for you.
            </p>
          </div>
        </section>
        <section>
          <h2 className=" font-bold text-[#2E2E2E]">
            What is your cancellation policy?
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-[#667085]">
              We understand that things change. You can cancel your plan at any
              time and we’ll refund you the difference already paid.
            </p>
          </div>
        </section>
        <section>
          <h2 className=" font-bold text-[#2E2E2E]">
            Can other info be added to an invoice?
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-[#667085]">
              Yes, you can try us for free for 30 days. If you want, we’ll
              provide you with a free, personalized 30-minute onboarding call to
              get you up and running as soon as possible.
            </p>
          </div>
        </section>
        <section>
          <h2 className=" font-bold text-[#2E2E2E]">How does billing work?</h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-[#667085]">
              Plans are per workspace, not per account. You can upgrade one
              workspace, and still have any number of free workspaces.
            </p>
          </div>
        </section>
        <section>
          <h2 className=" font-bold text-[#2E2E2E]">
            How do I change my account email?
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-[#667085]">
              You can change the email address associated with your account by
              going to navo.com/account from a laptop or desktop.
            </p>
          </div>
        </section>
      </div>

     
          
    
      <div className="px-30 py-5 justify-center rounded-md">
        <div className="w-full bg-[#FFFFFF] rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
            {/* Left: text content */}
            <div className="mb-4 md:mb-0 text-left">
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Still have questions?
              </h3>
              <p className="text-[#667085]">
                Can’t find the answer you’re looking for? Please chat to our
                friendly team.
              </p>
            </div>

            {/* Right: subscription form */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <button className="cursor-pointer bg-[#00B894]  text-[#FFFFFF] font-inter font-medium px-6 py-2 rounded-md shadow-sm hover:bg-[#12a689]">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
