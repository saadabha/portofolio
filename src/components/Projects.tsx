import styles from "./Projects.module.css";
import Image from "next/image";

const projects = [
  {
    title: "Logister",
    href: "https://logister-website.vercel.app/",
    image: "/images/logister.png",
    tags: ["Next.js", "Hono", "PostgreSQL"],
  },
  {
    title: "CSR Management",
    href: "https://csr-management.vercel.app/",
    image: "/images/csr.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    title: "SahabatGuru",
    href: "https://sahabat-guru.vercel.app/",
    image: "/images/sahabatguru.png",
    tags: ["Next.js", "Hono", "PostgreSQL"],
  },
  {
    title: "GEA ITB 2024 Election",
    href: "https://github.com/SandWithCheese/pemilu-gea",
    image: "/images/pemilugea.png",
    tags: ["Next.js", "Tailwind CSS", "PostgreSQL"],
  },
  {
    title: "Harvest Moon Card Game",
    href: "https://github.com/SandWithCheese/Tubes02_OOP",
    image: "/images/MoliNana.png",
    tags: ["Java", "OOP"],
  },
  {
    title: "Word Ladder Solver",
    href: "https://github.com/saadabha/Tucil3_13522092",
    image: "/images/wordladder.png",
    tags: ["Algorithm", "Search"],
  },
  {
    title: "WikiRace Solver",
    href: "https://wikiracesolver.vercel.app/",
    image: "/images/wikirace.png",
    tags: ["Web", "Graph"],
  },
  {
    title: "Fingerprint Matcher",
    href: "https://github.com/shafiqIrv/Tubes3_ImHim",
    image: "/images/fingerprint.png",
    tags: ["Pattern Matching", "AI"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <div className="section-heading">
          <h2>Projects</h2>
          <p>Some things I&apos;ve built and contributed to</p>
          <div className="accent-line" />
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className={styles.overlay} />
              </div>

              <div className={styles.info}>
                <h3 className={styles.title}>{project.title}</h3>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.arrow}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
