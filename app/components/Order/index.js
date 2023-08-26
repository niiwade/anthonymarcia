"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Order.module.css"; // Import CSS module

const HorizontalTimeline = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className="featured-image">
        <img src="/images/am6.jpeg" alt="" />
      </div>

      <Link href="/" class="separator">
        {" "}
        Back to Home
      </Link>

      <h1>A&M</h1>

      <ul>
        <li>
          <p>• Processional song- This is the day the Lord has made</p>
        </li>
        <hr />
        <li>
          <p>• Bridal March- Canon in D</p>
        </li>
        <hr />
        <li>
          <p>• Introit-Ey3 Wode</p>
        </li>
        <hr />
        <li>
          <p>• Kyrie-Mass of the Sacred Heart</p>
        </li>
        <hr />
        <li>
          <p>• Gloria-Mass of the Sacred Heart</p>
        </li>
        <hr />
        <li>
          <p>• 1st Reading-1st Corinthians 12:31-13:8a</p>
        </li>
        <hr />
        <li>
          <p>
            • Responsorial Psalm- Psalm 127 ( Blessed are those who fear the
            Lord and walk in His ways(CH 32))
          </p>
        </li>
        <hr />
        <li>
          <p> • Gospel Acclamation- 1 John 4:18 and 19</p>
        </li>
        <hr />
        <li>
          <p> • Gospel Reading-Mark 10:6-9</p>
        </li>
        <hr />
        <li>
          <p> • Homily</p>
        </li>
      </ul>

      <hr />

      <h2>MARRIAGE RITES</h2>

      <ul>
        <li>
          <p>• Exchange of vows</p>
        </li>
        <hr />
        <li>
          <p>•Blessing &Exchange of Rings</p>
        </li>
        <hr />
        <li>
          <p>Lighting of Paschal Candle - CH 320</p>
        </li>
        <hr />
        <li>
          <p>• Prayer of the faithful</p>
        </li>
        <hr />
        <li>
          <p>• Collection-Medley of songs</p>
        </li>
        <hr />
        <li>
          <p>• Preparation of host and chalice</p>
        </li>
        <hr />
        <li>
          <p>• Sanctus-Mass of the Scared Heart</p>
        </li>
        <hr />
        <li>
          <p> • The Lords Prayer</p>
        </li>
        <hr />
        <li>
          <p> Nuptial Blessing</p>
        </li>
        <hr />
        <li>
          <p> Sign of Peace</p>
        </li>
        <hr />
        <li>
          <p> Agnus Dei-Mass of the Sacred Heart</p>
        </li>
        <hr />
        <li>
          <p> Communion-CH95 CH103 CH357</p>
        </li>
        <hr />
        <li>
          <p> Post Communion Song-Your Grace and Mercy </p>
        </li>
        <hr />
        <li>
          <p>
            {" "}
            Signing of Marriage Certificate/Second Collection-Medely of songs
          </p>
        </li>
        <hr />
        <li>
          <p> Announcements</p>
        </li>
        <hr />
        <li>
          <p> Benediction/Final Blessing</p>
        </li>
        <hr />
        <li>
          <p> Alleluia Chorus</p>
        </li>
        <hr />

        <hr />
        <li>
          <p> Wedding March</p>
        </li>
      </ul>

      <div>
        <iframe
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Corpus%20Christi%20Catholic%20Church+(My%20Business%20Name)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/population/">
            Calculate population in area
          </a>
        </iframe>
      </div>
    </div>
  );
};

export default HorizontalTimeline;
