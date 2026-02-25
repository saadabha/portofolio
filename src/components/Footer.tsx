import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Sa&apos;ad Abdul Hakim. Built with Next.js
        </p>
        <div className={styles.links}>
          <a href="mailto:saadabdulhakim08@gmail.com" aria-label="Email">Email</a>
          <a href="https://www.linkedin.com/in/saadabha/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/saadabha" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
