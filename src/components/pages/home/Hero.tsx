import { url } from "inspector";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="home"
      style={{
        backgroundImage: `url(/hero/hero-img-03.jpg)`,
        boxShadow:
          "0px 4px 4px 0px #00000040,inset 0 0 0 1000px rgba(0,0,0,.5)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative bg-white pt-[90px] pb-[110px] h-[90vh]"
    >
      <div className="container mx-auto relative h-screen w-full left-0 top-0 ">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 ">
            <div className=" h-full flex flex-col items-center mt-32 ">
              <h1 className="mb-3  font-poppins  text-center  text-4xl  font-bold leading-snug text-white sm:text-[42px] lg:text-[48px] xl:text-[50px]">
                The
                <span className="text-yellow-400"> #1 Choice </span>
                for Bringing Corporate <br />
                Teams Together Like{" "}
                <span className="text-yellow-400"> Family!</span>
              </h1>
              <p className="mb-8 max-w-[580px] text-center text-lg font-poppins font-medium  text-gray-2">
                Elevate Your Team Building: Discover Our 100+ Unique Activities
                for Building Stronger Connections
              </p>
              <ul className="flex flex-wrap items-center">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="inline-flex items-center justify-center rounded-lg bg-yellow-500 hover:bg-yellow-500 py-4 px-6 text-center text-base font-normal text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <span
        className="absolute bottom-0 left-0 right-0 block h-24   bg-opacity-80 
      from-transparent
      to-[#000]
      bg-gradient-to-b

      "
      />
    </section>
  );
};

export default HeroSection;
