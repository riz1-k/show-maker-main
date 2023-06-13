/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-slate-800 py-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-auto">
            <h4 className="text-xl font-bold text-white uppercase">
              ShowMaker
            </h4>
            <p className="mt-2 text-white">
              Ignite corporate family magic through SHOWMAKER's enchanting
              events. <br /> Elevate your experience today and let the
              extraordinary begin.
            </p>
            <Link
              href="/terms-and-conditions"
              className="mt-3 text-white text-sm hover:underline"
            >
              Terms & Conditions | Privacy Policy
            </Link>
          </div>
          <div className="w-full mt-4 md:mt-0 md:w-auto">
            <h5 className="text-lg font-semibold text-white">Contact</h5>
            <p className="mt-2 text-white">
              No. 1/1, Anepalya 5th main cross,Adugodi Post, Bangalore - 560030
            </p>
            <div className="flex items-center space-x-5 mt-2">
              <a
                href="tel:+919535677151"
                className=" text-white hover:underline underline-offset-4"
              >
                📞+91 9535677151
              </a>
              <a
                href="tel:+919535914893"
                className=" text-white hover:underline underline-offset-4"
              >
                📞+91 9535914893
              </a>
            </div>
          </div>
          <div className="w-full mt-4 md:mt-0 md:w-auto">
            <h5 className="text-lg font-semibold text-white">Follow Us</h5>
            <div className="flex mt-2">
              <a
                href="https://www.linkedin.com/company/showmaker-events/"
                target="_blank"
                className="text-white hover:text-gray-200"
              >
                <AiFillLinkedin size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
