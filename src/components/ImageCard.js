import React, { useState } from "react";

const ImageCard = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };
  return (
    <>
      <div className="relative image-card">
        <img
          className="h-auto max-w-full cursor-pointer relative"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
          alt=""
        />
        <div className="absolute bottom-0 left-0 p-5 image-card-overlay h-full w-full flex sm:hidden  flex-col justify-between ">
          <div className="flex justify-end items-center">
            <button
              className="bg-gray-100 rounded py-1 px-3 hover:bg-white"
              onClick={handleLikeClick}
            >
              <i
                class={`fa-solid fa-heart ${
                  isLiked ? "text-red-600" : "text-gray-500 "
                }`}
              ></i>
            </button>
            <button className="bg-gray-100  rounded py-1 px-3 ml-3 hover:bg-white">
              <i class="fa-solid fa-add text-gray-500"></i>
            </button>
          </div>
          <div className="flex justify-between items-center ">
            <div className="overflow-hidden flex items-center">
              <img
                class="w-10 h-10 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Rounded avatar"
              />
              <p className="whitespace-nowrap overflow-hidden overflow-ellipsis w-10/12 text-sm ml-3 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                eligendi eaque tempora quaerat praesentium, mollitia impedit
                adipisci a nihil sed omnis suscipit dolore porro, voluptatum
                perspiciatis ipsa! Saepe, natus dolor.
              </p>
            </div>
            <button className="bg-gray-100  rounded py-1 px-3 ml-3 hover:bg-white">
              <i class="fa-solid fa-arrow-down text-gray-500"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageCard;
