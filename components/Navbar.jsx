import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className=" border-gray-200 px-2 sm:px-4 py-2.5  bg-gray-900 mb-3">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt=" Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Tech News
            </span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
