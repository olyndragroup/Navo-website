import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact: React.FC = () => {
  const [country, setCountry] = useState<"us" | "ng">("ng");

  const phonePlaceholder =
    country === "us" ? "(555) 000-0000" : "7012345678";

  return (
    <section className="bg-[#F5F7FA] py-16 lg:py-24" id="contact-us">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Top: contact details (kept left-aligned and on top) */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold tracking-wide text-[#3F51B5] mb-3 text-center">
            Contact us
          </h2>
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#2E2E2E] mb-4 text-center">
            Get in touch
          </h1>
          <p className="text-lg text-[#2E2E2E] mb-6 text-center">
            We’d love to hear from you. Please fill out this form.
          </p>
        </div>

        {/* Form (stacked under the top content, no background) */}
        <form className="w-full space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* Name fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-#667085 mb-1 text-left"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full border border-gray-300 text-#667085 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="First name"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1 text-left"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Last name"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1 text-left"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@company.com"
            />
          </div>
{/* Phone Number - unified input box */}
<div>
  <label
    htmlFor="phone"
    className="block text-sm font-medium text-gray-700 mb-1 text-left"
  >
    Phone number
  </label>

  <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 overflow-hidden">
    <select
      id="country"
      name="country"
      value={country}
      onChange={(e) => setCountry(e.target.value as "us" | "ng")}
      className="bg-gray-50 text-gray-700 px-3 py-2 focus:outline-none cursor-pointer"
      aria-label="Select country"
    >
      <option value="ng">🇳🇬 +234</option>
      <option value="us">🇺🇸 +1</option>
    </select>

    <input
      type="tel"
      id="phone"
      name="phone"
      className="flex-1 px-4 py-2 focus:outline-none text-gray-700"
      placeholder={phonePlaceholder}
    />
  </div>
</div>


          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1 text-left"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="How can we help you?"
            ></textarea>
          </div>

          {/* Privacy policy agreement */}
          <div className="flex items-center gap-3">
                <input
                    id="privacy"
                    type="checkbox"
                    className="h-5 w-5 accent-indigo-600 rounded-md border-gray-300 focus:ring-indigo-500 cursor-pointer"
                />
                  <label htmlFor="privacy" className="text-sm text-gray-700">
              You agree to our friendly{" "}
              <Link
                to="/privacy"
                className="underline decoration-1 underline-offset-2 text-indigo-600 hover:text-indigo-800"
              >
                privacy policy
              </Link>
              .
            </label>
            </div>


          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#3F51B5] text-white py-3 rounded-lg font-medium hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
