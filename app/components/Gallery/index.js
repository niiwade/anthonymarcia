"use client";

// components/Slideshow.js

import React, { useState, useEffect } from "react";
import styles from "./Slideshow.module.scss";
import Link from "next/link";

const Slideshow = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideShowInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 6000); // Change slide every 3 seconds

    return () => {
      clearInterval(slideShowInterval);
    };
  }, [images]);

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  return (
    <div className={styles["pic-wrapper"]}>
      <div className={styles["slideshow-container"]}>
        {images.map((imageUrl, i) => (
          <figure
            key={i}
            className={`${styles["figure"]} ${styles[`pic-${i + 1}`]}`}
            style={{
              backgroundImage: `url(${imageUrl})`,
              opacity: currentSlide === i ? 1 : 0, // Show only the current slide
            }}
          ></figure>
        ))}
      </div>
      <div className={styles["controls"]}>
        <button className={styles["prev-button"]} onClick={handlePrevSlide}>
          &lt; Prev
        </button>
        <Link className={styles["home-button"]} href="/">
          Home
        </Link>
        <button className={styles["next-button"]} onClick={handleNextSlide}>
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
