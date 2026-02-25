import styles from "./Experience.module.css";

interface ExperienceEntry {
  role: string;
  organization: string;
  dateRange: string;
  bullets: string[];
}

const experiences: ExperienceEntry[] = [
  {
    role: "Software Engineer Intern",
    organization: "NalaGenetics",
    dateRange: "Jun 2025 – Aug 2025",
    bullets: [
      "Redeveloped the careers page as part of migrating content to the company's main business website.",
      "Developed new features in clinical decision software to enable automated JSON report upload to AWS and PDF report download option.",
    ],
  },
  {
    role: "Vice Head of Capture The Flag Division",
    organization: "ARKAVIDIA",
    dateRange: "Okt 2024 – May 2025",
    bullets: [
      "Assisted in leading the CTF division team to organize national-level cybersecurity competitions.",
      "Served as the main liaison between the organizing committee and participants, ensuring efficient communication.",
    ],
  },
  {
    role: "Staff of Competition and Community",
    organization: "Himpunan Mahasiswa Informatika (HMIF) ITB",
    dateRange: "Jul 2024 – Jun 2025",
    bullets: [
      "Organized Capture The Flag (CTF) Community Qualification, a series of online learning sessions designed to introduce students to cybersecurity concepts.",
      "Coordinated a CTF competition as the culmination of the learning series, aimed at recruiting new members for the CTF community at HMIF ITB.",
    ],
  },
  {
    role: "Staff of Website Division",
    organization: "Sekolah Teknik Elektro dan Informatika - Komputasi (STEI-K) ITB 2022",
    dateRange: "Des 2022 – Jun 2023",
    bullets: [
      "Designed and developed an interactive Peer Tutoring page prototype using Figma and React.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <div className="section-heading">
          <h2>Experience</h2>
          <p>Professional and organizational involvement</p>
          <div className="accent-line" />
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Experience</h3>
          </div>

          <div className={styles.entries}>
            {experiences.map((exp, i) => (
              <div key={i} className={styles.entry}>
                <div className={styles.entryHeader}>
                  <div className={styles.entryLeft}>
                    <h4 className={styles.role}>{exp.role}</h4>
                    <p className={styles.org}>{exp.organization}</p>
                  </div>
                  <span className={styles.date}>{exp.dateRange}</span>
                </div>
                <ul className={styles.bullets}>
                  {exp.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
