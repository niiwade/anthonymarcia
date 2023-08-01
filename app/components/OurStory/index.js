// components/AboutUs.js

import React from "react";
import styles from "./AboutUs.module.scss";
import Link from "next/link";

const Story = () => {
  return (
    <div className={styles.container}>
      <header>
        <nav className={styles.nav}>
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
          <span className={styles.nav__copy}>26th August 2023 </span>
        </nav>
        <h1 className={styles["page-title"]}>Our Story</h1>
      </header>
      <main>
        <article className={styles.content}>
          <section className={styles["content__descriptor"]}>
            <h2 className={styles["content__title"]}>Our Story</h2>
          </section>

          <section className={styles["content__text-box"]}>
            <p className={styles["content__text"]}>
              We met during our college years at UNC! We shared a class together
              and started studying at the library almost every week. We were
              friends for about a year before making it official.
            </p>
            <p className={styles["content__text"]}>
              We met during our college years at UNC! We shared a class together
              and started studying at the library almost every week. We were
              friends for about a year before making it official.
            </p>
            <p className={styles["content__text"]}>
              We met during our college years at UNC! We shared a class together
              and started studying at the library almost every week. We were
              friends for about a year before making it official.
            </p>
            <p className={styles["content__text"]}>
              We met during our college years at UNC! We shared a class together
              and started studying at the library almost every week. We were
              friends for about a year before making it official.
            </p>
            <p className={styles["content__text"]}>
              We have now been together for 5 years, have traveled to 10
              countries together, and are so excited for this next chapter of
              our lives.
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
            <p className={styles["content__text"]}>#The Merge</p>
          </section>
        </article>
      </main>
    </div>
  );
};

export default Story;
