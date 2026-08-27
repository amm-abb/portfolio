import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'

const projects = [
  {
    title: 'A simple ecommerce data pipeline',
    description: 'A production-style pipeline that generates fake data, validates and transforms records, and loads clean datasets into PostgreSQL.',
    tags: ['Pandas', 'PostgreSQL', 'Pyspark', 'Python'],
    icon: 'DATA',
    github: 'https://github.com/amm-abb/ecommerce-data-pipeline',
    demo: '#',
  },
  {
    title: 'Scalable Data Lake Pipeline',
    description: 'A containerized analytics stack using PostgreSQL, dbt-style transformations',
    tags: ['Pandas', 'PostgreSQL', 'Pyspark', 'Delta', 'Parquet'],
    icon: 'ETL',
    github: 'https://github.com/amm-abb/ecommerce_etl_pipeline',
    demo: '#',
  },
  {
    title: 'Data Analyytic Frontend',
    description: 'An ecommerce data pipeline with a react frontend showing data analytic results',
    tags: ['API', 'Node', 'React', 'Pandas', 'PostgreSQL', 'Pyspark', 'Python', 'Parquet'],
    icon: 'API',
    github: 'https://github.com/amm-abb/React-Node-App',
    demo: '#',
  },
]

const skills = ['APIs', 'AWS', 'Docker', 'ETL', 'GCP', 'Git', 'Pandas', 'PostgreSQL', 'Python', 'RAG','SQL']

function App() {
  return (
    <div className="app-shell">
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#top">Ammar Abbas<span></span></a>
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <p className="eyebrow">Software Developer · Data & AI Engineer</p>
            <h2>for building reliable data pipelines and AI based tools</h2>
            <p className="hero-text">
              deliver scaleable and maintainable data workflows using modern data-engineering practices
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">View projects <span aria-hidden="true">→</span></a>
              <a className="button secondary" href="https://github.com/amm-abb" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
          <div className="hero-card" aria-label="Developer profile summary">
            <div className="terminal-top"><span></span><span></span><span></span></div>
            <pre><code>{`$ WHOAMI\nSoftware Developer | Data & AI Engineer\n\n$ FOCUS\nAPIs | ETL | SQL | Generative AI\n\n$ STATUS\nAvailable for freelance work`}</code></pre>
          </div>
        </section>

        <section id="projects" className="section container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work</p>
            </div>
          </div>
          <div className="project-grid">
            {projects.map((project) => {
              return (
                <article className="project-card" key={project.title}>
                  <div className="icon-box" aria-hidden="true">{project.icon}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer">Code</a>
                    <a href={project.demo}>Details ↗</a>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="container skills-layout">
            <div>
              <p className="eyebrow">Toolkit</p>
              <h2>In Use Stack</h2>
              <p className="muted">A focused stack for data pipelines and AI engineering</p>
            </div>
            <div className="skill-cloud">
              {skills.map(skill => <span key={skill}>{skill}</span>)}
            </div>
          </div>
        </section>

        <section id="contact" className="section container contact-card">
          <div>
            <p className="eyebrow">Collaboration</p>
            <h2>Should the need arise</h2>
          </div>
          <div className="contact-actions">
            <a className="button primary" href="mailto:ammar.abbas@hotmail.de">✉ Email me</a>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <p>© {new Date().getFullYear()} Ammar Abbas. Built with React.</p>
      </footer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
)
