import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import Story from "../Story";

import styles from "./Hero.module.scss";
import { animateTitle, animateImage, revealMenu } from "./animations";

import Logo from "@/components/Logo";

const Hero = () => {
  const timeline = useRef(gsap.timeline());
  const heroRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timeline.current;

      tl.add(animateTitle()).add(revealMenu(), 0).add(animateImage(), 0);
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.hero__top}>
        {/* <div data-menu-item data-hidden>
          <Logo />
        </div> */}
        <Link data-menu-item data-hidden href="/our-story">
          Our Story
        </Link>

        <Link href="/order">
          <span data-menu-item data-hidden>
            Order of Service
          </span>
        </Link>

        <Link href="/gallery">
          <span data-menu-item data-hidden>
            Gallery
          </span>
        </Link>
      </div>

      <h1 className={styles.hero__title}>
        <span data-hidden data-title-first>
          Its
        </span>
        <span data-hero-line className={styles.hero__line}></span>
        <span data-hidden data-title-last>
          Our Wedding
        </span>
      </h1>

      <div className={styles.hero__image}>
        <div data-image-overlay className={styles.hero__imageOverlay}></div>
        <Image
          data-image
          src="/images/photo_main.gif"
          width={1728}
          height={650}
          alt="Blob"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

export default Hero;
