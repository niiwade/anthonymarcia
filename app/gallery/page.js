import React from "react";
import Slideshow from "@/components/Gallery";

const imageUrls = [
  "/images/am.jpg",
  "/images/am1.jpeg",
  "/images/am2.jpeg",
  "/images/am3.jpeg",
  "/images/am4.jpeg",
  "/images/am5.jpeg",
  "/images/am6.jpeg",
  "/images/am7.jpeg",
  "/images/photo7.jpg",
];

const GalleryPage = () => {
  return (
    <div>
      <Slideshow images={imageUrls} />
    </div>
  );
};

export default GalleryPage;
