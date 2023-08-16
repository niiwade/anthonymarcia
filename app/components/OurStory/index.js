// components/AboutUs.js

import React from "react";
import styles from "./AboutUs.module.scss";
import Link from "next/link";

const Story = () => {
  return (
    <div className={styles.container}>
      <header>
        <h1 className={styles["page-title"]}>Our Story</h1>
        <ul className={styles.nav__list}>
          <li>
            <Link
              className={`${styles.nav__link} ${styles["nav__link--active"]}`}
              href="/"
            >
              Home
            </Link>
          </li>
        </ul>
        <div className="featured-image">
          <img src="/images/am2.jpeg" alt="" />
        </div>
      </header>
      <main>
        <article className={styles.content}>
          <section className={styles["content__descriptor"]}>
            <h2 className={styles["content__title"]}>Our Story</h2>
          </section>

          <section className={styles["content__text-box"]}>
            <p className={styles["content__text"]}>
              In 2017, we met in GFZA where we were both posted to for our
              national service. I was selling wrist beads and he bought one from
              me. That is where we exchanged contacts so I could be updated on
              what exactly he wanted to order One day, he called me to say hi
              and we started talking as friends. Talking every evening became a
              usual thing for us.
            </p>
            <p className={styles["content__text"]}>
              In 2018, we finished with our national service and parted ways.
              Even though we were still talking as friends, the distance drew us
              a bit apart. Fast forward to 2020 , Anthony asked me to be his
              girlfriend and i agreed because the bond was already tight.
            </p>
            <p className={styles["content__text"]}>
              We moved from being good friends to being best friends. We told
              each other almost everything. Anthony would listen to anything , I
              have to say and find the perfect response or solution to it.
              Well... sometimes too logical Lol. We are an opposite of each
              other but we attract , we complete the statement &ldquo;Like poles
              repel, unlike poles attract &rdquo;
            </p>
          </section>
        </article>
      </main>

      <main>
        <article className={styles.content1}>
          <section className={styles["content__descriptor"]}>
            <h2 className={styles["content__title"]}>Our Hashtag</h2>
          </section>

          <section className={styles["content__text-box"]}>
            <p className={styles["content__text"]}>#0823AM</p>
          </section>
        </article>
      </main>
    </div>
  );
};

export default Story;
