import React from "react";

import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import x from "../../assets/x.svg";

const Footer = () => {
  return (
    <div className="w-full bg-[#F5F7FA]">
      {/* Top section with light purple background */}
      <div className="w-full bg-[#C9CEEA] px-1 py-2">
        <div className="rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
            {/* Left: text content */}
            <div className="mb-4 md:mb-0 text-left">
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Get notified when we launch
              </h3>
              <p className="text-[#3F51B5]">
                Stay up to date with the latest news, announcements, and
                articles.
              </p>
            </div>

            {/* Right: subscription form */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-64 border border-[#7C89CD] bg-[#F5F7FA] text-[#667085] font-inter font-medium px-4 py-2 rounded-md shadow-sm hover:bg-[#E1E5F2] text-left"
              />
              <button className="cursor-pointer bg-[#3F51B5] border border-[#3F51B5] text-white font-inter font-medium px-6 py-2 rounded-md shadow-sm hover:bg-[#2D3E9A]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-[1440px] mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Logo and description */}
          <div className="w-full md:w-1/3 text-left">
            <img src={logo} alt="Company Logo" className="h-10 mb-10" />
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
            Enjoy amazing work experiences  that create more happiness in the world.
            </p>
          </div>

          {/* Navigation links aligned left */}
          <div className="flex flex-wrap gap-12 w-full md:w-2/3">
            <div className="text-left">
              <h3 className="text-base font-semibold text-[#2E2E2E] mb-4">
                Product
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 text-left">
                <li>
                  <a href="#">Overview</a>
                </li>
                <li>
                  <a
                    href="/#features"
                    className="hover:text-primary transition"
                  >
                    Features
                  </a>
                </li>
              
            
                <li>
                  <a href="/#pricing" className="hover:text-primary transition">
                    Pricing
                  </a>
                </li>
            
              </ul>
            </div>

           
            <div className="text-left">
              <h3 className="text-base font-semibold text-[#2E2E2E] mb-4">
                Resources
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 text-left">
                <li>
                  <Link
                    to="/blog"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <a href="#">Newsletter</a>
                </li>
              
                <li>

                       <Link
                    to="/faq"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    FAQs
                  </Link>
                </li>
               
              </ul>
            </div>

            <div className="text-left">
              <h3 className="text-base font-semibold text-[#2E2E2E] mb-4">
                Legal
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 text-left">
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <a href="#">Cookies</a>
                </li>
              </ul>
            </div>

            <div className="text-left">
              <h3 className="text-base font-semibold text-[#2E2E2E] mb-4">
                Company
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 text-left">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    About Us
                  </Link>
                </li>
           
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 pt-6 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            © 2077 Nova. All rights reserved.
          </p>
          <div className="flex gap-5 mt-4 md:mt-0">
            <a href="#" aria-label="X">
              <img src={x} alt="X" className="h-6 w-6" />
            </a>
            <a href="#" aria-label="linkedin">
              <img src={linkedin} alt="linkedin" className="h-6 w-6" />
            </a>

            <a href="#" aria-label="Facebook">
              <img src={facebook} alt="Facebook" className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Github">
              <img src={github} alt="Github" className="h-6 w-6" />
            </a>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
