import Image from "next/image";
import React, { useState } from "react";
import NextLink from "next/link";

const Navbar2 = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <header className=" sticky bg-[#000] left-0 top-0 z-50 w-full">
      <div className="container mx-auto">
        <div className="relative  flex items-center justify-between">
          <div className=" max-h-24  px-4">
            <NextLink href="/" className=" w-full flex  items-center ">
              <Image
                src="/SHOWMAKERSVG123.svg"
                alt="logo"
                width={120}
                height={50}
              />
              <h1 className="text-2xl -ml-3  whitespace-pre text-[#51ADE5]   font-poppins font-bold uppercase -mt-4   ">
                ShowMaker
              </h1>
            </NextLink>
          </div>
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
                    <NextLink href="/#home">Home</NextLink>
                  </li>
                  <li className="flex py-2 cursor-pointer text-base font-medium text-white hover:text-primary font-poppins tracking-wider  lg:ml-12 lg:inline-flex">
                    <NextLink href="/#faq">FAQ</NextLink>
                  </li>
                  <li className="flex py-2 cursor-pointer text-base font-medium text-white hover:text-primary font-poppins tracking-wider  lg:ml-12 lg:inline-flex">
                    <NextLink href="/#team">Team</NextLink>
                  </li>
                  <li className="flex py-2 cursor-pointer text-base font-medium text-white hover:text-primary font-poppins tracking-wider  lg:ml-12 lg:inline-flex">
                    <NextLink href="/#testimonials">Testimonials</NextLink>
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

export default Navbar2;
