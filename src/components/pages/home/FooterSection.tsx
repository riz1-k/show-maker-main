import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary py-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-auto">
            <h4 className="text-xl font-bold text-white">Company Name</h4>
            <p className="mt-2 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="w-full mt-4 md:mt-0 md:w-auto">
            <h5 className="text-lg font-semibold text-white">Contact</h5>
            <p className="mt-2 text-white">123 Street, City Name, Country</p>
            <p className="mt-2 text-white">contact@example.com</p>
            <p className="mt-2 text-white">+1234567890</p>
          </div>
          <div className="w-full mt-4 md:mt-0 md:w-auto">
            <h5 className="text-lg font-semibold text-white">Follow Us</h5>
            <div className="flex mt-2">
              <a href="#" className="text-white hover:text-gray-200 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-200 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.6 7.6L19 6 21 9 18 11l-1.5-2.1"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
