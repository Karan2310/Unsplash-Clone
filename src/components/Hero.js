import React, { useRef } from "react";

const Hero = () => {
  const inputRef = useRef(null);
  const handleButtonClick = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    console.log(inputValue);
    inputRef.current.value = "";
  };
  return (
    <div className="hero relative flex items-center justify-center">
      <div className="bg-overlay"></div>
      <div className="content text-left text-white w-11/12 md:w-7/12 ">
        <h1 className="text-2xl md:text-5xl font-bold">Unsplash</h1>
        <p className="my-3 md:my-6  text-xs md:text-lg">
          The internet’s source for visuals. <br /> Powered by creators
          everywhere.
        </p>

        <div className="hidden md:block">
          <div className="search">
            <form onSubmit={handleButtonClick}>
              <input
                type="text"
                placeholder=" &#x1F50D;  Search high-resolution images"
                className="search-input w-full px-4 py-6 rounded h-12 focus:outline-none text-black"
                ref={inputRef}
              />
            </form>
          </div>

          <p className="mt-4">
            Trending:{" "}
            <span className="text-gray-300 hover:text-white cursor-pointer">
              {" "}
              flower, wallpapers, background, shappy, love;
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
