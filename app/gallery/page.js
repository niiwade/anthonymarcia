import React from "react";
import Slideshow from "@/components/Gallery";

const imageUrls = [
  "/images/am.jpg",
  "/images/photo3.jpg",
  "/images/photo7.jpg",
  "/images/photo6.jpg",
  "/images/photo3.jpg",
];

const GalleryPage = () => {
  return (
    <div>
      <Slideshow images={imageUrls} />
    </div>
  );
};

export default GalleryPage;
