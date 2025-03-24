import Head from 'next/head'; // Make sure to import the Head component
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
      </div>

      {/* Utility Panel (bottom-left column) */}
      <div className={styles.utilityPanel}>
        <PomodoroTimer />
        <TodoToggle />
        <AmbienceToggle />
      </div>
    </div>
  );
}