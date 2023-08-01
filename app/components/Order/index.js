"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./HorizontalTimeline.module.css"; // Import CSS module

const HorizontalTimeline = () => {
  return (
    <div className="wrapper">
      <div className="left-container">
        <h1 className="heading">Order of Service</h1>
        <Link href="/" class="separator">
          {" "}
          Home
        </Link>
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
          <p>Saturday, August 26th | 7:00 PM Topgolf</p>
          <p className="indent">Wedding Procession</p>
        </div>
        <div className="content">
          <p>Saturday, August 26th | 7:00 PM Topgolf</p>
          <p className="indent">Words of Welcome</p>
        </div>

        <div className="content">
          <p>Saturday, August 26th | 7:00 PM </p>
          <p className="indent">Introduction</p>
        </div>
        <div className="content">
          <p>Saturday, August 26th | 7:00 PM </p>
          <p className="indent">Readings</p>
        </div>

        <div className="content">
          <p>Saturday, August 26th | 7:00 PM </p>
          <p className="indent">Officiant Addresses Couple</p>
        </div>

        <div className="content">
          <p>Saturday, August 26th | 7:00 PM </p>
          <p className="indent"> Exchange Vows</p>
        </div>
        <div className="content">
          <p>Saturday, August 26th | 7:00 PM </p>
          <p className="indent">Ring Exchange</p>
        </div>

        <div className="content">
          <p>Saturday, August 26th | 7:00 PM </p>
          <p className="indent">The Kiss</p>
        </div>
        <div className="content">
          <p>Saturday, August 26th | 7:00 PM </p>
          <p className="indent">Photo List</p>
        </div>
        <div className="content">
          <p>Saturday, August 26th | 7:00 PM </p>
          <p className="indent">Reception</p>
        </div>
        <div className="content">
          <p>Saturday, August 26th | 7:00 PM </p>
          <p className="indent">Cake Cutting</p>
        </div>
        <div className="content">
          <p>Saturday, August 26th | 7:00 PM </p>
          <p className="indent">First Dance</p>
        </div>
        <div className="content">
          <p>Saturday, August 26th | 7:00 PM </p>
          <p className="indent">Closing Remarks</p>
        </div>
      </div>
    </div>
  );
};

export default HorizontalTimeline;
