import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className=" border-gray-200 px-2 sm:px-4 py-2.5  bg-gray-900 pb-3 ">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link className="flex items-center" href="/">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt=" Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Tech News
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
