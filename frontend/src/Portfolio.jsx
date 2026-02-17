import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowUpRight, Briefcase, Code2, Palette, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Full Stack Development",
      description: "Modern shopping experience with real-time inventory, AI recommendations, and seamless checkout.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      color: "#00D9FF",
      year: "2025"
    },
    {
      title: "AI Content Studio",
      category: "Machine Learning",
      description: "Creative toolkit leveraging generative AI for content creation and brand consistency.",
      tech: ["Python", "TensorFlow", "FastAPI", "React"],
      color: "#FF3366",
      year: "2024"
    },
    {
      title: "Financial Dashboard",
      category: "Data Visualization",
      description: "Real-time analytics platform with predictive insights and portfolio management tools.",
      tech: ["Vue.js", "D3.js", "Firebase", "WebSocket"],
      color: "#FFD60A",
      year: "2024"
    },
    {
      title: "Social Network App",
      category: "Mobile Development",
      description: "Privacy-focused social platform with end-to-end encryption and decentralized architecture.",
      tech: ["React Native", "GraphQL", "MongoDB", "IPFS"],
      color: "#00FF94",
      year: "2023"
    }
  ];

  const skills = [
    { name: "React & Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js & Python", level: 88 },
    { name: "UI/UX Design", level: 85 },
    { name: "Cloud & DevOps", level: 82 },
    { name: "AI/ML Integration", level: 78 }
  ];

  return (
    <div className="portfolio-container">
      {/* Custom Cursor */}
      <div 
        className="custom-cursor"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
      
      {/* Animated Background */}
      <div className="bg-grid" />
      <div className="bg-gradient" style={{
        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
      }} />

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">Lakshan Alahapperuma</span>
          <span className="logo-bracket">/&gt;</span>
        </div>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact" className="nav-cta">Get in Touch</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero-content">
          <div className="hero-label" style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: 1 - scrollY / 500
          }}>
            <span className="pill">Available for Hire</span>
          </div>
          
          <h1 className="hero-title" style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            opacity: 1 - scrollY / 600
          }}>
            <span className="title-line">Creative</span>
            <span className="title-line gradient-text">Developer</span>
            <span className="title-line">& Designer</span>
          </h1>

          <p className="hero-description" style={{
            transform: `translateY(${scrollY * 0.4}px)`,
            opacity: 1 - scrollY / 550
          }}>
            Crafting exceptional digital experiences at the intersection of 
            <span className="highlight"> design</span>,
            <span className="highlight"> technology</span>, and
            <span className="highlight"> innovation</span>.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">30+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
          </div>

          <div className="hero-cta">
            <a href="#work" className="btn-primary">
              View My Work
              <ArrowUpRight size={20} />
            </a>
            <a href="#contact" className="btn-secondary">
              Let's Talk
            </a>
          </div>
        </div>

        <div className="hero-visual" style={{
          transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.05}deg)`,
        }}>
          <div className="floating-card card-1">
            <Code2 size={32} />
            <span>Full Stack</span>
          </div>
          <div className="floating-card card-2">
            <Palette size={32} />
            <span>UI/UX</span>
          </div>
          <div className="floating-card card-3">
            <Briefcase size={32} />
            <span>Consulting</span>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="work" id="work">
        <div className="section-header">
          <h2 className="section-title">
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">A showcase of recent work and collaborations</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="project-header">
                <div className="project-year">{project.year}</div>
                <div className="project-category">{project.category}</div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-footer">
                <button className="project-link" style={{ '--accent-color': project.color }}>
                  View Project
                  <ExternalLink size={16} />
                </button>
              </div>

              <div 
                className="project-accent" 
                style={{ backgroundColor: project.color }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <div className="skills-container">
          <div className="skills-header">
            <h2 className="section-title">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="skill-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-fill"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.15}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-container">
          <div className="about-content">
            <h2 className="section-title">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="about-text">
              <p>
                I'm a full-stack developer and designer passionate about creating 
                digital experiences that are both beautiful and functional. With over 
                5 years of experience, I specialize in building modern web applications 
                using cutting-edge technologies.
              </p>
              <p>
                My approach combines technical expertise with design thinking, ensuring 
                every project not only works flawlessly but also delivers an exceptional 
                user experience. I believe in writing clean, maintainable code and 
                creating interfaces that delight users.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community.
              </p>
            </div>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <div className="placeholder-icon">👨‍💻</div>
              <div className="image-accent" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="contact-container">
          <h2 className="section-title">
            Let's Create <span className="gradient-text">Something Amazing</span>
          </h2>
          <p className="contact-description">
            Have a project in mind? Let's collaborate and bring your ideas to life.
          </p>

          <div className="contact-methods">
            <a href="mailto:your.email@example.com" className="contact-card">
              <Mail size={28} />
              <span>your.email@example.com</span>
            </a>
            <a href="https://linkedin.com/in/yourprofile" className="contact-card">
              <Linkedin size={28} />
              <span>LinkedIn Profile</span>
            </a>
            <a href="https://github.com/yourusername" className="contact-card">
              <Github size={28} />
              <span>GitHub Portfolio</span>
            </a>
          </div>

          <div className="contact-cta">
            <a href="mailto:your.email@example.com" className="btn-primary large">
              Start a Conversation
              <ArrowUpRight size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <span className="footer-logo">
              <span className="logo-bracket">&lt;</span>
              Lakshan Alahapperuma
              <span className="logo-bracket">/&gt;</span>
            </span>
            <p>Building the future, one line of code at a time.</p>
          </div>
          <div className="footer-right">
            <p>© 2026 All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --bg-dark: #0a0a0a;
          --bg-card: #111111;
          --text-primary: #ffffff;
          --text-secondary: #a0a0a0;
          --accent-blue: #00D9FF;
          --accent-pink: #FF3366;
          --accent-yellow: #FFD60A;
          --accent-green: #00FF94;
        }

        .portfolio-container {
          background-color: var(--bg-dark);
          color: var(--text-primary);
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          overflow-x: hidden;
          position: relative;
        }

        /* Custom Cursor */
        .custom-cursor {
          width: 20px;
          height: 20px;
          border: 2px solid var(--accent-blue);
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.15s ease;
          transform: translate(-50%, -50%);
          mix-blend-mode: difference;
        }

        /* Background Effects */
        .bg-grid {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(0, 217, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 217, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          z-index: 0;
          pointer-events: none;
        }

        .bg-gradient {
          position: fixed;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle at 30% 50%,
            rgba(0, 217, 255, 0.08) 0%,
            transparent 50%
          ),
          radial-gradient(
            circle at 70% 50%,
            rgba(255, 51, 102, 0.08) 0%,
            transparent 50%
          );
          z-index: 0;
          pointer-events: none;
          transition: transform 0.3s ease-out;
        }

        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 2rem 4rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          backdrop-filter: blur(20px);
          background: rgba(10, 10, 10, 0.8);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .nav-logo {
          font-size: 1.5rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .logo-bracket {
          color: var(--accent-blue);
          font-weight: 400;
        }

        .logo-text {
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-pink));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }

        .nav-links a {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-links a:hover {
          color: var(--text-primary);
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-blue);
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .nav-cta {
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-pink));
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          color: var(--text-primary) !important;
          font-weight: 600;
        }

        .nav-cta::after {
          display: none;
        }

        /* Hero Section */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 8rem 4rem 4rem;
          z-index: 1;
        }

        .hero-content {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }

        .hero-label {
          margin-bottom: 2rem;
          animation: fadeInUp 0.8s ease forwards;
          opacity: 0;
        }

        .pill {
          display: inline-block;
          padding: 0.5rem 1.25rem;
          background: rgba(0, 217, 255, 0.1);
          border: 1px solid var(--accent-blue);
          border-radius: 50px;
          color: var(--accent-blue);
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .hero-title {
          font-size: clamp(3.5rem, 10vw, 8rem);
          font-weight: 900;
          line-height: 0.95;
          margin-bottom: 2rem;
          letter-spacing: -0.03em;
        }

        .title-line {
          display: block;
          animation: fadeInUp 0.8s ease forwards;
          opacity: 0;
        }

        .title-line:nth-child(1) {
          animation-delay: 0.1s;
        }

        .title-line:nth-child(2) {
          animation-delay: 0.2s;
        }

        .title-line:nth-child(3) {
          animation-delay: 0.3s;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-pink), var(--accent-yellow));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.5rem;
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 800px;
          margin-bottom: 3rem;
          animation: fadeInUp 0.8s ease 0.4s forwards;
          opacity: 0;
        }

        .highlight {
          color: var(--text-primary);
          font-weight: 600;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          max-width: 700px;
          margin-bottom: 3rem;
          animation: fadeInUp 0.8s ease 0.5s forwards;
          opacity: 0;
        }

        .stat-item {
          text-align: left;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 900;
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-pink));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .hero-cta {
          display: flex;
          gap: 1.5rem;
          animation: fadeInUp 0.8s ease 0.6s forwards;
          opacity: 0;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-pink));
          color: var(--text-primary);
          padding: 1.25rem 2.5rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 40px rgba(0, 217, 255, 0.3);
        }

        .btn-primary.large {
          font-size: 1.125rem;
          padding: 1.5rem 3rem;
        }

        .btn-secondary {
          background: transparent;
          color: var(--text-primary);
          padding: 1.25rem 2.5rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          border: 2px solid rgba(255, 255, 255, 0.1);
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--accent-blue);
        }

        .hero-visual {
          position: absolute;
          right: 5%;
          top: 50%;
          transform: translateY(-50%);
          z-index: -1;
          opacity: 0.5;
        }

        .floating-card {
          position: absolute;
          background: var(--bg-card);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          animation: float 6s ease-in-out infinite;
        }

        .floating-card span {
          font-weight: 600;
          font-size: 0.875rem;
        }

        .card-1 {
          top: -100px;
          right: 100px;
          color: var(--accent-blue);
          animation-delay: 0s;
        }

        .card-2 {
          top: 50px;
          right: -50px;
          color: var(--accent-pink);
          animation-delay: 2s;
        }

        .card-3 {
          top: 200px;
          right: 50px;
          color: var(--accent-yellow);
          animation-delay: 4s;
        }

        /* Work Section */
        .work {
          position: relative;
          padding: 8rem 4rem;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .section-title {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 900;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .section-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
        }

        .projects-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: var(--bg-card);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, border-color 0.3s ease;
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 255, 255, 0.15);
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .project-year {
          font-size: 0.875rem;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .project-category {
          font-size: 0.75rem;
          color: var(--accent-blue);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 700;
        }

        .project-title {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .project-description {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .tech-tag {
          background: rgba(255, 255, 255, 0.05);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .project-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .project-link {
          background: transparent;
          border: 2px solid var(--accent-color);
          color: var(--accent-color);
          padding: 0.875rem 1.75rem;
          border-radius: 50px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          background: var(--accent-color);
          color: var(--bg-dark);
          transform: translateX(4px);
        }

        .project-accent {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          opacity: 0.6;
        }

        /* Skills Section */
        .skills {
          padding: 8rem 4rem;
          background: rgba(0, 0, 0, 0.3);
          position: relative;
          z-index: 1;
        }

        .skills-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .skills-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .skills-grid {
          display: grid;
          gap: 2rem;
        }

        .skill-item {
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .skill-name {
          font-weight: 700;
          font-size: 1.125rem;
        }

        .skill-percentage {
          color: var(--accent-blue);
          font-weight: 700;
          font-size: 1.125rem;
        }

        .skill-bar {
          height: 8px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50px;
          overflow: hidden;
          position: relative;
        }

        .skill-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent-blue), var(--accent-pink));
          border-radius: 50px;
          animation: fillBar 1.5s ease forwards;
          width: 0;
        }

        /* About Section */
        .about {
          padding: 8rem 4rem;
          position: relative;
          z-index: 1;
        }

        .about-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .about-text {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .about-text p {
          font-size: 1.125rem;
          line-height: 1.8;
          color: var(--text-secondary);
        }

        .about-image {
          position: relative;
        }

        .image-placeholder {
          background: var(--bg-card);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .placeholder-icon {
          font-size: 8rem;
        }

        .image-accent {
          position: absolute;
          bottom: -20%;
          right: -20%;
          width: 60%;
          height: 60%;
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-pink));
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.3;
          z-index: -1;
        }

        /* Contact Section */
        .contact {
          padding: 8rem 4rem;
          background: rgba(0, 0, 0, 0.3);
          position: relative;
          z-index: 1;
        }

        .contact-container {
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
        }

        .contact-description {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: 4rem;
        }

        .contact-methods {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .contact-card {
          background: var(--bg-card);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
          color: var(--text-primary);
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          border-color: var(--accent-blue);
          transform: translateY(-4px);
          box-shadow: 0 10px 40px rgba(0, 217, 255, 0.2);
        }

        .contact-card svg {
          color: var(--accent-blue);
        }

        .contact-cta {
          margin-top: 3rem;
        }

        /* Footer */
        .footer {
          padding: 3rem 4rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
          z-index: 1;
        }

        .footer-content {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-logo {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          display: block;
        }

        .footer-left p {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .footer-right p {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fillBar {
          from {
            width: 0;
          }
          to {
            width: var(--target-width);
          }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .nav {
            padding: 1.5rem 2rem;
          }

          .hero {
            padding: 6rem 2rem 4rem;
          }

          .hero-visual {
            opacity: 0.2;
          }

          .work, .skills, .about, .contact {
            padding: 6rem 2rem;
          }

          .about-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .hero-stats {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .nav-links {
            gap: 1.5rem;
          }

          .hero-stats {
            grid-template-columns: 1fr;
          }

          .hero-cta {
            flex-direction: column;
            align-items: stretch;
          }

          .stat-number {
            font-size: 2.5rem;
          }

          .footer-content {
            flex-direction: column;
            gap: 2rem;
            text-align: center;
          }

          .contact-methods {
            grid-template-columns: 1fr;
          }

          .custom-cursor {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
