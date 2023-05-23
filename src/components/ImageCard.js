import React, { useState } from "react";

const ImageCard = ({ data }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleOpenClick = () => {
    const url = data.links.download;
    window.open(url, "_blank");
  };

  return (
    <>
      {data && (
        <div className="relative image-card h-fit">
          <img
            className="h-auto max-w-full cursor-pointer relative"
            src={data.urls.regular}
            alt=""
          />
          <div className="absolute bottom-0 left-0 p-5 image-card-overlay h-full w-full flex sm:hidden  flex-col justify-between ">
            <div className="flex justify-end items-center">
              <button
                className="bg-gray-100 rounded py-1 px-3 hover:bg-white"
                onClick={handleLikeClick}
              >
                <i
                  className={`fa-solid fa-heart ${
                    isLiked ? "text-red-600" : "text-gray-500 "
                  }`}
                ></i>
              </button>
              <button className="bg-gray-100  rounded py-1 px-3 ml-3 hover:bg-white">
                <i className="fa-solid fa-add text-gray-500"></i>
              </button>
            </div>
            <div className="flex justify-between items-center ">
              <div className="overflow-hidden flex items-center">
                <img
                  className="w-10 h-10 rounded-full"
                  src={data.user.profile_image.small}
                  alt="Rounded avatar"
                />
                <p
                  className="whitespace-nowrap overflow-hidden overflow-ellipsis w-10/12 text-sm ml-3 text-white"
                  title={data.alt_description}
                >
                  {data.alt_description}
                </p>
              </div>
              <button
                className="bg-gray-100  rounded py-1 px-3 ml-3 hover:bg-white"
                title="Open in new tab"
                onClick={handleOpenClick}
              >
                <i className="fa-solid fa-arrow-up-right-from-square  text-gray-500"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageCard;
