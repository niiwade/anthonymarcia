import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Countdown from "@/components/Countdown";
import Image from "next/image";

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
        <Link
          data-menu-item
          data-hidden
          href="/our-story"
          className={styles.hero_text}
        >
          Our Story
        </Link>

        <Link href="/order" className={styles.hero_text}>
          <span data-menu-item data-hidden>
            Order of Service
          </span>
        </Link>

        <Link href="/gallery" className={styles.hero_text}>
          <span data-menu-item data-hidden>
            Gallery
          </span>
        </Link>
      </div>

      <div className={styles.hero__image}>
        <div data-image-overlay className={styles.hero__imageOverlay}></div>
        <Image
          data-image
          src="/images/am.jpg"
          layout="fill" // This makes the image take up the whole parent container (hero__image)
          objectFit="cover"
          alt="Blob"
        />
      </div>

      <div className={styles.hero__title}>
        <span data-hidden data-title-first>
          Its Our Wedding
        </span>
        <Countdown />
      </div>
    </section>
  );
};

export default Hero;
