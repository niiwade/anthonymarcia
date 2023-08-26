import React, { useState, useEffect } from "react";
import styles from "./Countdown.module.scss";

const Countdown = () => {
  const weddingDate = new Date("2023-08-26"); // Replace with your wedding date in the format "YYYY-MM-DD"
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());
  const [countdownCompleted, setCountdownCompleted] = useState(false);

  function getTimeRemaining() {
    const currentTime = new Date();
    const timeDiff = weddingDate - currentTime;

    const totalSeconds = Math.floor(timeDiff / 1000);
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const remainingTime = getTimeRemaining();
      setTimeRemaining(remainingTime);

      if (remainingTime.days <= 0 && remainingTime.hours <= 0 && remainingTime.minutes <= 0 && remainingTime.seconds <= 0) {
        setCountdownCompleted(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.countdown}>
      {countdownCompleted ? (
        <p>This is our day!</p>
      ) : (
        <p>
          {timeRemaining.days} days {timeRemaining.hours} hours{" "}
          {timeRemaining.minutes} minutes {timeRemaining.seconds} seconds
        </p>
      )}
    </div>
  );
};

export default Countdown;
