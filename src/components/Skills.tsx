import styles from "./Skills.module.css";

interface SkillCategory {
  label: string;
  items: string[];
}

const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C++", "C", "SQL"],
  },
  {
    label: "Frameworks & Libraries",
    items: ["Next.js", "React", "Hono", "Tailwind CSS", "Node.js"],
  },
  {
    label: "Databases & Tools",
    items: ["PostgreSQL", "MySQL", "Drizzle ORM", "Git", "Docker"],
  },
  {
    label: "Methodologies",
    items: ["Agile", "Scrum", "REST API"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <div className="section-heading">
          <h2>Skills</h2>
          <p>Technologies and tools I work with</p>
          <div className="accent-line" />
        </div>

        <div className={styles.grid}>
          {skillCategories.map((cat) => (
            <div key={cat.label} className={styles.card}>
              <h3 className={styles.categoryLabel}>{cat.label}</h3>
              <div className={styles.tags}>
                {cat.items.map((item) => (
                  <span key={item} className={styles.tag}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
