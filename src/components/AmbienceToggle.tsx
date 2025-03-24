import React, { useState, useRef } from "react";
import styles from "../styles/Home.module.css";

interface SoundToggleProps {
  label: string;
  icon: string;
  soundUrl: string;
}

const SoundToggle: React.FC<SoundToggleProps> = ({ label, icon, soundUrl }) => {
  const [isActive, setIsActive] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    setIsActive(!isActive);
    if (audioRef.current) {
      if (isActive) {
        audioRef.current.pause(); // Pause the sound
      } else {
        audioRef.current.play(); // Play the sound
      }
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={`${styles.soundToggle} ${isActive ? styles.active : ""}`}
      >
        <span>{icon}</span> {label}
      </button>
      {/* Hidden audio element that plays the sound */}
      <audio ref={audioRef} src={soundUrl} loop />
    </div>
  );
};

// --- Ambience Toggle ---
const AmbienceToggle: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.ambienceWrapper}>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.utilityButton}>
         🎧 Ambience
      </button>

      {/* Slide-out Panel */}
      {isOpen && (
        <div className={styles.slidePanel}>
          <SoundToggle label="Rain" icon="🌧️" soundUrl="rain.wav" />
          <SoundToggle label="Page Flip" icon="📖" soundUrl="pageflip.wav" />
          <SoundToggle label="Fireplace" icon="🪵" soundUrl="fire-place.wav" />
          <SoundToggle label="Brown Noise" icon="🧸" soundUrl="brownnoise.mp3" />
          <SoundToggle label="Piano" icon="🎹" soundUrl="piano.wav" />
        </div>
      )}
    </div>
  );
};

export default AmbienceToggle;