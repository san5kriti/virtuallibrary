import Head from 'next/head';
import AmbienceToggle from "../components/AmbienceToggle";
import TodoToggle from "../components/TodoToggle";
import PomodoroTimer from "../components/PomodoroTimer";
import styles from "../styles/Home.module.css";

export default function VirtualLibrary() {
  return (
    <div className={styles.container}>
      {/* Image Background */}
      <img className={styles.imageBackground} src="/cat.png" alt="Background" />

      <div className={styles.overlay}></div>

      {/* Hero Title */}
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&display=swap" rel="stylesheet" />
      </Head>

      <div className={styles.heroTitle}>
        <h1>virtual<br />library</h1>
        <span>by Sans</span>
        <img src="/coffe.gif" alt="cozy gif" className={styles.heroGif} />
      </div>

      {/* Utility Panel (bottom-left column) */}
      <div className={styles.utilityPanel}>
        <PomodoroTimer />
        <TodoToggle />
        <AmbienceToggle />
      </div>
      <div className={styles.contactWrapper}>
        <a href="https://www.linkedin.com/in/sanskritishelke/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/san5kriti/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://sanskritishelke.com/" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-globe"></i>
        </a>
        <a href="mailto:sanskritishelke.r@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://buymeacoffee.com/san5kriti" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-coffee"></i>
        </a>
      </div>

      {/* Copyright */}
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Sanskriti Shelke. All Rights Reserved.</p>
      </footer>
    </div>
  );
}