import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/Home.module.css";

const PomodoroTimer: React.FC = () => {
  const [isTimerVisible, setIsTimerVisible] = useState(false);
  const [customMinutes, setCustomMinutes] = useState(25);
  const [timeLeft, setTimeLeft] = useState(customMinutes * 60);
  const [isActive, setIsActive] = useState(false);

  // Format time as mm:ss
  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Toggle timer visibility
  const handleToggleTimer = () => setIsTimerVisible(!isTimerVisible);

  // Start/Pause the timer
  const handleStartPause = () => {
    setIsActive(!isActive);
  };

  // When time runs out
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    } else if (timeLeft === 0) {
      new Audio("/timerbell.wav").play();
      setIsActive(false);
      setTimeLeft(customMinutes * 60); // Reset to selected duration
    }
    return () => clearInterval(timer);
  }, [isActive, timeLeft, customMinutes]);

  // Update timeLeft if customMinutes changes (but only when timer is NOT active)
  useEffect(() => {
    if (!isActive) {
      setTimeLeft(customMinutes * 60);
    }
  }, [customMinutes]);

  return (
    <div>
      <button onClick={handleToggleTimer} className={styles.utilityButton}>
        🍅 Pomodoro
      </button>

      {isTimerVisible && (
        <div className={styles.pomodoroTimer}>
          <h1>{formatTime(timeLeft)}</h1>

          {/* Input for custom minutes */}
          {!isActive && (
            <div className={styles.customInput}>
              <label htmlFor="minutes">⏱️ Set Minutes: </label>
              <input
                type="number"
                id="minutes"
                value={customMinutes}
                min={1}
                max={120}
                onChange={(e) => setCustomMinutes(parseInt(e.target.value) || 1)}
                className={styles.inputBox}
              />
            </div>
          )}

          <span className={styles.startReset} onClick={handleStartPause}>
            {isActive ? "Pause" : "Start"}
          </span>
        </div>
      )}
    </div>
  );
};

export default PomodoroTimer;
