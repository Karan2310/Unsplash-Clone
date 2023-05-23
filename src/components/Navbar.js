import React, { useState, useRef } from "react";
import Logo from "../asssets/Unsplash.svg";

const Navbar = () => {
  const inputRef = useRef(null);
  const [activeLink, setactiveLink] = useState(-1);
  const links = [
    {
      name: "Greener Cities",
      url: "#",
    },
    {
      name: "Wallpapers",
      url: "#",
    },
    {
      name: "3D Renders",
      url: "#",
    },
    {
      name: "Nature",
      url: "#",
    },
    {
      name: "Travel",
      url: "#",
    },
    {
      name: "Architecture & Interiors",
      url: "#",
    },
    {
      name: "Street Photography",
      url: "#",
    },
    {
      name: "Textures & Patterns",
      url: "#",
    },
    {
      name: "Greener Cities",
      url: "#",
    },
    {
      name: "Wallpapers",
      url: "#",
    },
    {
      name: "3D Renders",
      url: "#",
    },
    {
      name: "Nature",
      url: "#",
    },
    {
      name: "Travel",
      url: "#",
    },
    {
      name: "Architecture & Interiors",
      url: "#",
    },
    {
      name: "Street Photography",
      url: "#",
    },
    {
      name: "Textures & Patterns",
      url: "#",
    },
  ];
  let searchValue;
  const handleButtonClick = (e) => {
    e.preventDefault();
    searchValue = inputRef.current.value;
    console.log(searchValue);
    inputRef.current.value = "";
  };
  return (
    <div className="sticky top-0 bg-white shadow z-10">
      <div className="py-3 px-5 flex items-center w-full justify-between text-sm whitespace-nowrap ">
        <div className="flex w-full">
          <img src={Logo} alt="" height="32px" width="32px" />
          <form className="w-full ml-4" onSubmit={handleButtonClick}>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-semibold text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                className="block w-full bg-gray-100 ring-1 ring-gray-100 hover:ring-gray-300 rounded-full px-4 py-2.5  focus:outline-none text-sm focus:bg-white text-gray-600 placeholder:text-gray-500 pl-10"
                placeholder="Search high-resolution images"
                required
                ref={inputRef}
              />
            </div>
          </form>
        </div>
        <div className="hidden lg:flex ">
          <a
            href="#"
            className="text-gray-500 hover:text-gray-800 mx-3 ml-5 font-semibold"
          >
            Explore
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-800 mx-3 font-semibold"
          >
            Advertise
          </a>
          <a
            href="#"
            className=" mx-3 font-semibold gradient-text hover:animate-gradient"
          >
            Unsplash+
          </a>
        </div>
        <div className="divider h-8 bg-gray-300 w-0.5 mx-4"></div>
        <div className="flex items-center">
          <div className="hidden md:block">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-800 font-semibold"
            >
              Log in
            </a>
            <button className="bg-white text-gray-500 font-semibold text-sm ring-1 ring-gray-400 px-3 py-1.5 rounded-sm hover:ring-black hover:text-black w-32 mx-5">
              Submit a photo
            </button>
          </div>
          <div className="menu">
            <i
              className="fa-solid fa-bars cursor-pointer "
              style={{ color: "#767676", fontSize: "20px" }}
            ></i>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="bg-white w-full h-14 flex items-center justify-between px-5 text-sm">
        <div className="flex items-center w-full ">
          <a
            href="#"
            className={`text-black hover:text-gray-800 font-semibold ${
              activeLink == -1 ? "active-link" : ""
            }`}
          >
            Editorial
          </a>
          <div className="divider h-8 bg-gray-300 w-0.5 mx-4"></div>
          <div className="overflow-x-auto py-10 overflow-y-visible whitespace-nowrap scrollbar-hidden">
            {links.map((e, index) => {
              return (
                <a
                  key={index}
                  href={e.url}
                  onClick={() => {
                    setactiveLink(index);
                    searchValue = e.name;
                    console.log(searchValue);
                  }}
                  className={`text-gray-500 hover:text-gray-800 font-medium mr-7 ${
                    activeLink == index ? "active-link" : ""
                  }`}
                >
                  {e.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
