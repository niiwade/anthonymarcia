"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./HorizontalTimeline.module.css"; // Import CSS module

const HorizontalTimeline = () => {
  return (
    <div className="wrapper">
      <div className="left-container">
        <h1 className="heading">Order of Service</h1>
        <Link href="/" class="separator"> Home</Link>
   
      </div>
      <div className="right-container">
        {/* <div className="meta">
    <p>
    <span>Lacus -</span>
    <span>Ultricies posuere</span>
    </p>
    <p>
    <span>Nunc -</span>
    <span>Erat varius</span>
    </p>
  </div> */}
        <div className="featured-image">
          <img src="/images/am.jpg" alt="" />
        </div>
        <div className="content">
          <p>Friday, September 11th | 7:00 PM Topgolf</p>
          <p className="indent">Engagement</p>
        </div>
        <div className="content">
          <p>Friday, September 11th | 7:00 PM Topgolf</p>
          <p className="indent">Wedding</p>
        </div>
        <div className="content">
          <p>Friday, September 11th | 7:00 PM Topgolf</p>
          <p className="indent">Exchange of Vows</p>
        </div>

        <div className="content">
          <p>Friday, September 11th | 7:00 PM Topgolf</p>
          <p className="indent">Kiss the Bride</p>
        </div>
        <div className="content">
          <p>Friday, September 11th | 7:00 PM Topgolf</p>
          <p className="indent">Kiss the Bride</p>
        </div>

        <div className="content">
          <p>Friday, September 11th | 7:00 PM Topgolf</p>
          <p className="indent">Kiss the Bride</p>
        </div>

        <div className="content">
          <p>Friday, September 11th | 7:00 PM Topgolf</p>
          <p className="indent">Kiss the Bride</p>
        </div>
        <div className="content">
          <p>Friday, September 11th | 7:00 PM Topgolf</p>
          <p className="indent">Kiss the Bride</p>
        </div>

        <div className="content">
          <p>Friday, September 11th | 7:00 PM Topgolf</p>
          <p className="indent">Kiss the Bride</p>
        </div>
        <div className="content">
          <p>Friday, September 11th | 7:00 PM Topgolf</p>
          <p className="indent">Kiss the Bride</p>
        </div>
      </div>
    </div>
  );
};

export default HorizontalTimeline;
