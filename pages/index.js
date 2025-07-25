import Head from 'next/head'
import Link from 'next/link'
import ScrollFloat from '../components/ScrollFloat'


export default function Home() {
  return (
    <>
      <Head>
        <title>Peter Bidle - Portfolio</title>
        <meta name="description" content="Software Engineer & Game Developer Portfolio" />
        <link rel="icon" href="/favicon20x20.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NKBZERC2MM"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NKBZERC2MM');
            `,
          }}
        />
      </Head>

      {/* Navigation */}
      <nav id="navbar">
        <div className="container">
          <a href="#" className="logo">
            <img src="/logo.png" alt="Peter Bidle Logo" className="logo-image" />
          </a>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Peter Bidle</h1>
            <p>Software Engineer & Game Developer</p>
            <a href="#portfolio" className="cta-button">View My Work</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <ScrollFloat>
            <h2>About Me</h2>
          </ScrollFloat>
          <div className="about-content">
            <div className="about-image">👋</div>
            <div className="about-text">
              <p>I'm a dedicated and versatile <strong>Software Engineer & Game Developer</strong> currently completing my Bachelor's degree in Computer Software Engineering at Blackpool and The Fylde College (Jun 2024 - Jun 2025, Grade: 1st). My educational foundation includes a Foundation degree in Software Engineering Game Development and a Level 3 Diploma in ICT Systems and Data Security with Distinction.</p>
              <p>My expertise spans across game development, interactive media, and immersive VR experiences. I've worked extensively with Unity (C#), Unreal Engine, Python, and Flutter. Throughout my studies, I've led and contributed to a variety of projects — from VR usability studies using the Meta Quest 3 to networked multiplayer games and innovative tech prototypes. I combine strong technical skills with user-centred design thinking, and I'm actively seeking roles where I can apply this blend of creative and engineering knowledge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className="container">
          <ScrollFloat>
            <h2>Education</h2>
          </ScrollFloat>
          <div className="education-timeline">
            <div className="education-item">
              <div className="education-date">Jun 2024 - Jun 2025</div>
              <div className="education-content">
                <h3>Bachelor's Degree, Computer Software Engineering</h3>
                <h4>Blackpool and The Fylde College</h4>
                <p><strong>Grade:</strong> 1st</p>
                <p><strong>Key Skills:</strong> Visual Studio, SQL, JavaScript, Machine Learning, Databases, C#, Unity, Database Management System (DBMS), HTML, Communication, Software Development, Game Engines, Python, Game Development</p>
              </div>
            </div>
            <div className="education-item">
              <div className="education-date">Sep 2022 - Jun 2024</div>
              <div className="education-content">
                <h3>Foundation Degree, Software Engineering Game Development</h3>
                <h4>Blackpool and The Fylde College</h4>
                <p><strong>Key Skills:</strong> Visual Studio, SQL, JavaScript, Machine Learning, Databases, C#, Unity, HTML, Software Development, Game Engines, Python, Game Development</p>
              </div>
            </div>
            <div className="education-item">
              <div className="education-date">Sep 2021 - Jun 2022</div>
              <div className="education-content">
                <h3>Level 3 Diploma, ICT Systems and Data Security</h3>
                <h4>Blackpool and The Fylde College</h4>
                <p><strong>Grade:</strong> Distinction</p>
                <p><strong>Modules:</strong> Customer Support Provision for the IT Professional, Networking Principles, ICT Systems Security Policy, Principles of ICT System and Data Security, Web Development Creating An Event Driven Computer Program</p>
                <p><strong>Key Skills:</strong> Procedural Programming, Visual Studio, SQL, JavaScript, Machine Learning, Databases, C#, Unity, Testing and Debugging, Program Design, HTML, Software Development, Game Engines, Python, Game Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section">
        <div className="container">
          <ScrollFloat>
            <h2>Portfolio</h2>
          </ScrollFloat>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-image"><i className="fa-brands fa-meta"></i></div>
              <div className="portfolio-content">
                <h3>VR Interaction Study – Hand Tracking vs Controllers</h3>
                <p><strong>Tech Used:</strong> Unity, C#, XR Interaction Toolkit, Meta Quest 3<br />
                Developed immersive VR prototypes to compare hand tracking and controllers for usability and immersion. Designed for academic research and tested with users.</p>
                <Link href="/vr-interaction-study" className="portfolio-link">View Project →</Link>
              </div>
            </div>
            
            <div className="portfolio-item">
              <div className="portfolio-image"><i className="fa-solid fa-gun"></i></div>
              <div className="portfolio-content">
                <h3>Top-Down 2D Shooter (Unity)</h3>
                <p><strong>Tech Used:</strong> Unity, C#<br />
                A fast-paced shooter with enemy waves, score tracking, and sprite-based assets. Features player damage system and object pooling for performance.</p>
                <Link href="/unity-shooter" className="portfolio-link">View Project →</Link>
              </div>
            </div>
            
            <div className="portfolio-item">
              <div className="portfolio-image"><i className="fa-brands fa-python"></i></div>
              <div className="portfolio-content">
                <h3>Rock-Paper-Scissors Multiplayer (Python)</h3>
                <p><strong>Tech Used:</strong> Python, Sockets, bcrypt<br />
                Multiplayer game with secure login, client-server architecture, and real-time play using sockets.</p>
                <Link href="/python-multiplayer" className="portfolio-link">View Project →</Link>
              </div>
            </div>
            
            <div className="portfolio-item">
              <div className="portfolio-image"><i className="fa-solid fa-car"></i></div>
              <div className="portfolio-content">
                <h3>Self-Driving Car AI – Neural Network Simulation</h3>
                <p><strong>Tech Used:</strong> JavaScript, Neural Networks, HTML5 Canvas, Machine Learning<br />
                AI-powered autonomous vehicles that learn to drive using neural networks and genetic algorithms. Features real-time decision making and collision avoidance.</p>
                <Link href="/self-driving-car" className="portfolio-link">View Project →</Link>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="portfolio-image"><i className="fa-solid fa-gamepad"></i></div>
              <div className="portfolio-content">
                <h3>MonoGame Platformer – Cross-Platform 2D Game</h3>
                <p><strong>Tech Used:</strong> MonoGame, C#, 2D Physics, Cross-Platform<br />
                Feature-rich platformer game with custom physics, sprite animation, and level design. Showcases advanced C# programming and game development skills.</p>
                <Link href="/monogame-platformer" className="portfolio-link">View Project →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <ScrollFloat>
            <h2>Skills & Technologies</h2>
          </ScrollFloat>
          <div className="skills-grid">
            <div className="skill-item">
              <div className="skill-icon"><i className="fa-solid fa-gamepad"></i></div>
              <h3>Game Development</h3>
              <p>Unity, Game Engines, C#, Game Development</p>
            </div>
            <div className="skill-item">
              <div className="skill-icon"><i className="fa-solid fa-code"></i></div>
              <h3>Programming Languages</h3>
              <p>C#, Python, C, C++, JavaScript, Java, Go, Visual Basic</p>
            </div>
            <div className="skill-item">
              <div className="skill-icon"><i className="fa-solid fa-database"></i></div>
              <h3>Database & Backend</h3>
              <p>SQL, Databases, DBMS, Data Structures, Algorithms</p>
            </div>
            <div className="skill-item">
              <div className="skill-icon"><i className="fa-solid fa-globe"></i></div>
              <h3>Web Technologies</h3>
              <p>HTML, JavaScript, Software Development</p>
            </div>
            <div className="skill-item">
              <div className="skill-icon"><i className="fa-solid fa-robot"></i></div>
              <h3>Machine Learning & AI</h3>
              <p>Machine Learning, Algorithmic Thinking</p>
            </div>
            <div className="skill-item">
              <div className="skill-icon"><i className="fa-solid fa-cloud"></i></div>
              <h3>Cloud & Tools</h3>
              <p>Microsoft Azure, Visual Studio, Microsoft Office</p>
            </div>
            <div className="skill-item">
              <div className="skill-icon"><i className="fa-brands fa-dev"></i></div>
              <h3>Development Practices</h3>
              <p>Testing & Debugging, Program Design, Procedural Programming</p>
            </div>
            <div className="skill-item">
              <div className="skill-icon"><i className="fa-solid fa-briefcase"></i></div>
              <h3>Professional Skills</h3>
              <p>Customer Service, Communication, Network Strategy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section">
        <div className="container">
          <ScrollFloat>
            <h2>Licenses & Certifications</h2>
          </ScrollFloat>
          <div className="certifications-grid">
            <div className="certification-item">
              <div className="cert-icon">C#</div>
              <h3>C#: Advanced Practices</h3>
              <p className="cert-date">LinkedIn • Jul 2025</p>
              <p>Advanced C# programming techniques and best practices</p>
            </div>
            <div className="certification-item">
              <div className="cert-icon"><i className="fa-brands fa-golang"></i></div>
              <h3>Learning Go (2021)</h3>
              <p className="cert-date">LinkedIn • Jul 2025</p>
              <p>Modern Go programming language fundamentals</p>
            </div>
            <div className="certification-item">
              <div className="cert-icon"><i className="fa-brands fa-python"></i></div>
              <h3>Algorithmic Thinking with Python: Foundations</h3>
              <p className="cert-date">LinkedIn • Mar 2023</p>
              <p>Core algorithmic concepts and problem-solving approaches</p>
            </div>
            <div className="certification-item">
              <div className="cert-icon"><i className="fa-brands fa-microsoft"></i></div>
              <h3>Azure for Architects: Design a Networking Strategy</h3>
              <p className="cert-date">LinkedIn • Mar 2023</p>
              <p>Microsoft Azure networking architecture and strategy design</p>
            </div>
            <div className="certification-item">
              <div className="cert-icon"><i className="fa-brands fa-java"></i></div>
              <h3>Java: Data Structures</h3>
              <p className="cert-date">LinkedIn • Mar 2023</p>
              <p>Advanced data structures implementation and optimization in Java</p>
            </div>
            <div className="certification-item">
              <div className="cert-icon"><i className="fa-brands fa-python"></i></div>
              <h3>Python Quick Start</h3>
              <p className="cert-date">LinkedIn • Mar 2023</p>
              <p>Foundational Python programming skills and best practices</p>
            </div>
            <div className="certification-item">
              <div className="cert-icon"><i className="fa-solid fa-code"></i></div>
              <h3>Programming Foundations: Fundamentals</h3>
              <p className="cert-date">LinkedIn • Sep 2021</p>
              <p>Core programming concepts and software development principles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <ScrollFloat>
            <h2>Contact Me</h2>
          </ScrollFloat>
          <form className="contact-form" name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="social-links">
            <a href="mailto:peterbidle1@gmail.com" title="Email"><i className="fa-solid fa-envelope"></i></a>
            <a href="https://linkedin.com/in/peterbidle" title="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/PJay1994" title="GitHub"><i className="fa-brands fa-github"></i></a>
          </div>
          <p>&copy; 2025 Peter Bidle. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}