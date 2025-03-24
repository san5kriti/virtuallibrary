import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/Home.module.css";

const PomodoroTimer: React.FC = () => {
  const [isTimerVisible, setIsTimerVisible] = useState(false); // Track visibility of the timer
  const [timeLeft, setTimeLeft] = useState(25 * 60); // Countdown time
  const [isActive, setIsActive] = useState(false); // Track if the timer is running

  // Format time as mm:ss
  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Toggle timer visibility
  const handleToggleTimer = () => setIsTimerVisible(!isTimerVisible);

  // Handle start/pause of the timer
  const handleStartPause = () => {
    setIsActive(!isActive);
  };

  // Countdown logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    } else if (timeLeft === 0) {
      new Audio("/ding.mp3").play();
      setIsActive(false);
      setTimeLeft(25 * 60);
    }
    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  return (
    <div>
      <button onClick={handleToggleTimer} className={styles.utilityButton}>
        🍅 Pomodoro
      </button>

      {isTimerVisible && (
        <div className={styles.pomodoroTimer}>
          <h1>{formatTime(timeLeft)}</h1>
          <span className={styles.startReset} onClick={handleStartPause}>
            {isActive ? "Pause" : "Start"}
          </span>
        </div>
      )}
    </div>
  );
};

export default PomodoroTimer;