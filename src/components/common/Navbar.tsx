import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="container mx-auto">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="javascript:void(0)" className="block w-full py-5">
              <Image
                src="/logo.svg"
                alt="logo"
                className="w-full"
                width={200}
                height={50}
              />
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={toggleNavbar}
                className={`absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden ${
                  navbarOpen ? "navbarTogglerActive" : ""
                }`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
              </button>
              <nav
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow transition-all lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${
                  !navbarOpen ? "hidden" : ""
                }`}
              >
                <ul className="block lg:flex">
                  <li>
                    <a
                      href="#"
                      className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#faq"
                      className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#team"
                      className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex"
                    >
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#testimonials"
                      className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex"
                    >
                      Testimonials
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <a
                href="javascript:void(0)"
                className="rounded-lg bg-primary py-3 px-7 text-base font-medium text-white hover:bg-opacity-90"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;