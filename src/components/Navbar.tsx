import { useState } from "react";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-[#f9fafb] border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center px-8">
          {/* Logo */}
          <div className="flex-shrink-0 font-kadwa text-[28px] font-normal text-[#2E2E2E]">
            <img src={logo} alt="Company Logo" className="h-20 mb-4" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center w-[399px]">
            <a
              href="#"
              className="text-[#3F51B5] font-inter font-medium text-base leading-6"
            >
              Home
            </a>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-[#3F51B5] font-inter font-medium text-base leading-6">
                Services
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute left-0 hidden group-hover:block mt-2 w-40 bg-white shadow-lg border rounded-md z-10">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 font-inter text-sm text-gray-700"
                >
                  Service 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 font-inter text-sm text-gray-700"
                >
                  Service 2
                </a>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-[#3F51B5] font-inter font-medium text-base leading-6">
                Resources
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute left-0 hidden group-hover:block mt-2 w-40 bg-white shadow-lg border rounded-md z-10">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 font-inter text-sm text-gray-700"
                >
                  Resource 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 font-inter text-sm text-gray-700"
                >
                  Resource 2
                </a>
              </div>
            </div>

            <a
              href="#"
              className="text-[#3F51B5] font-inter font-medium text-base leading-6"
            >
              Pricing
            </a>
          </div>

          {/* Action Buttons Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button className="cursor-pointer border border-[#7C89CD] bg-[#F5F7FA] text-[#3F51B5] font-inter font-medium px-4 py-2 rounded-md shadow-sm hover:bg-[#E1E5F2]">
              Login
            </button>
            <button className="cursor-pointer bg-[#3F51B5] border border-[#3F51B5] text-white font-inter font-medium px-4 py-2 rounded-md shadow-sm hover:bg-[#2D3E9A]">
              Sign Up
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-[#3F51B5]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-[#f9fafb] border-t border-gray-200">
          <a
            href="#"
            className="block text-[#3F51B5] font-inter font-medium text-base leading-6 py-2"
          >
            Home
          </a>

          {/* Services Mobile */}
          <div>
            <button
              onClick={() => toggleDropdown("services")}
              className="flex justify-center items-center w-full text-[#3F51B5] font-inter font-medium text-base leading-6 py-2"
            >
              Services
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openDropdown === "services" && (
              <div className="space-y-1">
                <a
                  href="#"
                  className="block w-full px-2 py-2 rounded font-inter text-sm text-gray-700 hover:bg-gray-100"
                >
                  Service 1
                </a>
                <a
                  href="#"
                  className="block w-full px-2 py-2 rounded font-inter text-sm text-gray-700 hover:bg-gray-100"
                >
                  Service 2
                </a>
              </div>
            )}
          </div>

          {/* Resources Mobile */}
          <div>
            <button
              onClick={() => toggleDropdown("resources")}
              className="flex justify-center items-center w-full text-[#3F51B5] font-inter font-medium text-base leading-6 py-2"
            >
              Resources
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openDropdown === "resources" && (
              <div className="space-y-1">
                <a
                  href="#"
                  className="block w-full px-2 py-2 rounded font-inter text-sm text-gray-700 hover:bg-gray-100"
                >
                  Resource 1
                </a>
                <a
                  href="#"
                  className="block w-full px-2 py-2 rounded font-inter text-sm text-gray-700 hover:bg-gray-100"
                >
                  Resource 2
                </a>
              </div>
            )}
          </div>

          <a
            href="#"
            className="block text-[#3F51B5] font-inter font-medium text-base leading-6 py-2"
          >
            Pricing
          </a>

          {/* Mobile Buttons */}
          <button className="w-full border border-[#7C89CD] bg-[#F5F7FA] text-[#3F51B5] font-inter font-medium px-4 py-2 rounded-md shadow-sm hover:bg-[#E1E5F2]">
            Login
          </button>
          <button className="w-full bg-[#3F51B5] border border-[#3F51B5] text-white font-inter font-medium px-4 py-2 rounded-md shadow-sm hover:bg-[#2D3E9A]">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}
