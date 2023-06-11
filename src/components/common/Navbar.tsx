import Image from "next/image";
import React, { useState } from "react";
import { Link } from "react-scroll";
import NextLink from "next/link";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <header className=" sticky bg-[#000] left-0 top-0 z-50 w-full">
      <div className="container mx-auto">
        <div className="relative -mx-4 flex items-center justify-between">
          {/* <div className="w-60 max-w-full px-4">
            <NextLink href="/" className="block w-full py-5">
              <Image
                src="/logo.svg"
                alt="logo"
                className="w-full"
                width={200}
                height={50}
              />
            </NextLink>
          </div> */}
          <div className="flex w-full items-center justify-end   px-4">
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
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg  py-5 px-6 shadow transition-all lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${
                  !navbarOpen ? "hidden" : ""
                }`}
              >
                <ul className="block lg:flex">
                  <li className="flex py-2 cursor-pointer text-base font-medium text-white hover:text-primary font-poppins tracking-wider  lg:ml-12 lg:inline-flex">
                    <Link to="home" smooth offset={-100}>
                      Home
                    </Link>
                  </li>
                  <li className="flex py-2 cursor-pointer text-base font-medium text-white hover:text-primary font-poppins tracking-wider  lg:ml-12 lg:inline-flex">
                    <Link to="faq" smooth>
                      FAQ
                    </Link>
                  </li>
                  <li className="flex py-2 cursor-pointer text-base font-medium text-white hover:text-primary font-poppins tracking-wider  lg:ml-12 lg:inline-flex">
                    <Link to="team" smooth>
                      Team
                    </Link>
                  </li>
                  <li className="flex py-2 cursor-pointer text-base font-medium text-white hover:text-primary font-poppins tracking-wider  lg:ml-12 lg:inline-flex">
                    <Link to="testimonials" smooth>
                      Testimonials
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
