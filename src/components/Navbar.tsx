"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Hanterar scroll-effekten
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-20 top-0 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-[#3a0ca3] shadow-lg"
          : "bg-gradient-to-r from-[#f72585] to-[#7209b7]"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="self-center text-3xl font-bold whitespace-nowrap text-[#eeeeee]"
        >
          Josefine Eriksson
        </Link>

        {/* Mobilmeny-knapp */}
        <div className="flex md:order-2">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#eeeeee] rounded-lg md:hidden hover:bg-[#4361ee] focus:outline-none focus:ring-2 focus:ring-[#f72585] transition duration-300"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Öppna huvudmeny</span>
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Meny-länkar */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-500 ease-in-out ${
            isOpen ? "flex" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent bg-[#7209b7]">
            <li>
              <Link
                href="/"
                className="group relative block py-2 px-3 text-xl text-[#eeeeee] transition-all duration-300 md:p-0"
                aria-current="page"
                onClick={() => setIsOpen(false)}
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#3a0ca3] group-active:text-[#3a0ca3]">
                  CV
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#4cc9f0] to-[#4361ee] opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/ommig"
                className="group relative block py-2 px-3 text-xl text-[#eeeeee] transition-all duration-300 md:p-0"
                onClick={() => setIsOpen(false)}
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#3a0ca3] group-active:text-[#3a0ca3]">
                  Om mig
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#4cc9f0] to-[#4361ee] opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="group relative block py-2 px-3 text-xl text-[#eeeeee] transition-all duration-300 md:p-0"
                onClick={() => setIsOpen(false)}
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#3a0ca3] group-active:text-[#3a0ca3]">
                  Portfolio
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#4cc9f0] to-[#4361ee] opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
