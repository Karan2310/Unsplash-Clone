import React, { useEffect } from "react";
import ImageCard from "./ImageCard";
import axios from "axios";

const Gallery = ({ images }) => {
  const itemsPerColumn = Math.ceil(images.length / 3);
  const column1Data = images.slice(0, itemsPerColumn);
  const column2Data = images.slice(itemsPerColumn, itemsPerColumn * 2);
  const column3Data = images.slice(itemsPerColumn * 2);

  return (
    <div className="gallery p-0 sm:p-4 md:w-11/12 mx-auto my-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="grid gap-6 self-baseline">
          {column1Data.map((image, index) => {
            return <ImageCard key={index} data={image} />;
          })}
        </div>
        <div className="grid gap-6 self-start">
          {column2Data.map((image, index) => {
            return <ImageCard key={index} data={image} />;
          })}
        </div>
        <div className="grid gap-6  self-start">
          {column3Data.map((image, index) => {
            return (
              <div className="self-start" key={index}>
                <ImageCard data={image} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
