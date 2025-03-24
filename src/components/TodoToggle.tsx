import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const TodoToggle: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const removeTask = (index: number) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  return (
    <>
      {/* Button to toggle To-Do list */}
      <button onClick={() => setIsOpen(!isOpen)} className={styles.utilityButton}>
         📝 To-Do List
      </button>

      {/* To-Do Drawer */}
      {isOpen && (
        <div className={styles.todoDrawer}>
          <div className={styles.dragHeader}>
            <h4>Tasks</h4>
            <span className={styles.closeBtn} onClick={() => setIsOpen(false)}>✖</span>
          </div>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add task..."
            className={styles.taskInput}
          />
          <button onClick={addTask} className={styles.addButton}>Add</button>
          <ul className={styles.taskList}>
            {tasks.map((task, idx) => (
              <li key={idx} className={styles.taskItem}>
                {task}
                <button onClick={() => removeTask(idx)} className={styles.removeBtn}>🗑️</button>
              </li>
            ))}
          </ul>
        </div>
      )}
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
      </div>
    </>
  );
};

export default TodoToggle;