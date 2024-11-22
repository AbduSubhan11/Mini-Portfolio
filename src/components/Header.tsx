"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

function Header() {
  const pathName = usePathname();
  const [isHamburger, setIsHamburger] = useState(false);

  const hamburHandler = () => {
    setIsHamburger(!isHamburger);
  };

  const closeMenu = () => {
    setIsHamburger(false);
  };
  return (
    <header className="flex items-center justify-between bg-[#ebfeff] px-5 lg:px-16 h-28 border-b border-black">
      <div>
        <h1 className="font-bold text-3xl ">SUBHAN</h1>
      </div>

      <nav
        className={`lg:space-x-12 text-xl ${
          isHamburger
            ? "fixed flex flex-col bg-[#ebfeff] right-0 top-0 h-screen w-52 px-10 py-32 space-y-5 text-2xl"
            : "lg:flex hidden"
        }`}
      >
        <Link
          href={"/"}
          className={` ${pathName == "/" ? "text-[#457B9D] font-bold" : ""} ${
            isHamburger ? "border-b-2 border-gray-300" : ""
          }`}
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          href={"/about"}
          className={`${
            pathName == "/about" ? "text-[#457B9D] font-bold" : ""
          } ${isHamburger ? "border-b-2 border-gray-300" : ""}`}
          onClick={closeMenu}
        >
          About
        </Link>
        <Link
          href={"/skill"}
          className={`${
            pathName == "/skill" ? "text-[#457B9D] font-bold" : ""
          } ${isHamburger ? "border-b-2 border-gray-300" : ""}`}
          onClick={closeMenu}
        >
          Skill
        </Link>
        <Link
          href={"/project"}
          className={`${
            pathName == "/project" ? "text-[#457B9D] font-bold" : ""
          } ${isHamburger ? "border-b-2 border-gray-300" : ""}`}
          onClick={closeMenu}
        >
          Project
        </Link>
        <Link
          href={"/contact"}
          className={`${
            pathName == "/contact" ? "text-[#457B9D] font-bold" : ""
          } ${isHamburger ? "border-b-2 border-gray-300" : ""}`}
          onClick={closeMenu}
        >
          Contact
        </Link>
      </nav>

      {/* HAMBURGER */}
      <div className="lg:hidden z-20">
        <button
          className="flex flex-col justify-between w-6 h-[18px] focus:outline-none"
          onClick={hamburHandler}
        >
          <span
            className={`block h-[3px] w-full bg-[#457B9D] transition-transform duration-300 ease-in-out ${
              isHamburger ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-[3px] w-1/2 bg-[#457B9D] transition-opacity duration-300 ease-in-out ${
              isHamburger ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-[3px] w-full bg-[#457B9D] transition-transform duration-300 ease-in-out ${
              isHamburger ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
