import React from "react";
import Slideshow from "@/components/Gallery";

const imageUrls = ["/images/am.jpg", "/images/photo7.jpg"];

const GalleryPage = () => {
  return (
    <div>
      <Slideshow images={imageUrls} />
    </div>
  );
};

export default GalleryPage;
