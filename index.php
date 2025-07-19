<?php
$page_title = "Portfolio";
$include_main_styles = true;

// Include header
include 'includes/header.php';
?>

<!-- Hero Section -->
<section id="home" class="hero">
    <div class="container">
        <div class="hero-content">
            <h1>Peter Bidle</h1>
            <p>Software Engineer & Game Developer</p>
            <a href="#portfolio" class="cta-button">View My Work</a>
        </div>
    </div>
</section>

<!-- About Section -->
<section id="about" class="section">
    <div class="container">
        <h2>About Me</h2>
        <div class="about-content">
            <div class="about-image">
                👋
            </div>
            <div class="about-text">
                <p>I'm a dedicated and versatile <strong>Software Engineer & Game Developer</strong> currently completing my Bachelor's degree in Computer Software Engineering at Blackpool and The Fylde College (Jun 2024 - Jun 2025, Grade: 1st). My educational foundation includes a Foundation degree in Software Engineering Game Development and a Level 3 Diploma in ICT Systems and Data Security with Distinction.</p>
                <p>My expertise spans across game development, interactive media, and immersive VR experiences. I've worked extensively with Unity (C#), Unreal Engine, Python, and Flutter. Throughout my studies, I've led and contributed to a variety of projects — from VR usability studies using the Meta Quest 3 to networked multiplayer games and innovative tech prototypes. I combine strong technical skills with user-centred design thinking, and I'm actively seeking roles where I can apply this blend of creative and engineering knowledge.</p>
            </div>
        </div>
    </div>
</section>

<!-- Education Section -->
<section id="education" class="section">
    <div class="container">
        <h2>Education</h2>
        <div class="education-timeline">
            <div class="education-item">
                <div class="education-date">Jun 2024 - Jun 2025</div>
                <div class="education-content">
                    <h3>Bachelor's Degree, Computer Software Engineering</h3>
                    <h4>Blackpool and The Fylde College</h4>
                    <p><strong>Grade:</strong> 1st</p>
                    <p><strong>Key Skills:</strong> Visual Studio, SQL, JavaScript, Machine Learning, Databases, C#, Unity, Database Management System (DBMS), HTML, Communication, Software Development, Game Engines, Python, Game Development</p>
                </div>
            </div>
            <div class="education-item">
                <div class="education-date">Sep 2022 - Jun 2024</div>
                <div class="education-content">
                    <h3>Foundation Degree, Software Engineering Game Development</h3>
                    <h4>Blackpool and The Fylde College</h4>
                    <p><strong>Key Skills:</strong> Visual Studio, SQL, JavaScript, Machine Learning, Databases, C#, Unity, HTML, Software Development, Game Engines, Python, Game Development</p>
                </div>
            </div>
            <div class="education-item">
                <div class="education-date">Sep 2021 - Jun 2022</div>
                <div class="education-content">
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

<!-- Portfolio Section -->
<section id="portfolio" class="section">
    <div class="container">
        <h2>My Portfolio</h2>
        <div class="portfolio-grid">
            <div class="portfolio-item">
                <div class="portfolio-image">🥽</div>
                <div class="portfolio-content">
                    <h3>VR Interaction Study – Hand Tracking vs Controllers</h3>
                    <p><strong>Tech Used:</strong> Unity, C#, XR Interaction Toolkit, Meta Quest 3<br>
                    Developed immersive VR prototypes to compare hand tracking and controllers for usability and immersion. Designed for academic research and tested with users.</p>
                    <a href="vr-interaction-study.php" class="portfolio-link">View Project →</a>
                </div>
            </div>
            <div class="portfolio-item">
                <div class="portfolio-image">🎮</div>
                <div class="portfolio-content">
                    <h3>Top-Down 2D Shooter (Unity)</h3>
                    <p><strong>Tech Used:</strong> Unity, C#<br>
                    A fast-paced shooter with enemy waves, score tracking, and sprite-based assets. Features player damage system and object pooling for performance.</p>
                    <a href="unity-shooter.php" class="portfolio-link">View Project →</a>
                </div>
            </div>
            <div class="portfolio-item">
                <div class="portfolio-image">🐍</div>
                <div class="portfolio-content">
                    <h3>Rock-Paper-Scissors Multiplayer (Python)</h3>
                    <p><strong>Tech Used:</strong> Python, Sockets, bcrypt<br>
                    Multiplayer game with secure login, client-server architecture, and real-time play using sockets.</p>
                    <a href="python-multiplayer.php" class="portfolio-link">View Project →</a>
                </div>
            </div>
            <div class="portfolio-item">
                <div class="portfolio-image">🏰</div>
                <div class="portfolio-content">
                    <h3>Blackpool Tycoon – Board Game Prototype</h3>
                    <p><strong>Tech Used:</strong> InDesign, Manual Print Assembly<br>
                    Board game based on property management and tourism around Blackpool attractions. Includes visitor tokens, weather events, and iterative design with feedback.</p>
                    <a href="blackpool-tycoon.php" class="portfolio-link">View Project →</a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Skills Section -->
<section id="skills" class="section">
    <div class="container">
        <h2>Skills & Technologies</h2>
        <div class="skills-grid">
            <div class="skill-item">
                <div class="skill-icon">🎮</div>
                <h3>Game Development</h3>
                <p>Unity, Game Engines, C#, Game Development</p>
            </div>
            <div class="skill-item">
                <div class="skill-icon">💻</div>
                <h3>Programming Languages</h3>
                <p>C#, Python, C, C++, JavaScript, Java, Go, Visual Basic</p>
            </div>
            <div class="skill-item">
                <div class="skill-icon">🗄️</div>
                <h3>Database & Backend</h3>
                <p>SQL, Databases, DBMS, Data Structures, Algorithms</p>
            </div>
            <div class="skill-item">
                <div class="skill-icon">🌐</div>
                <h3>Web Technologies</h3>
                <p>HTML, JavaScript, Software Development</p>
            </div>
            <div class="skill-item">
                <div class="skill-icon">🤖</div>
                <h3>Machine Learning & AI</h3>
                <p>Machine Learning, Algorithmic Thinking</p>
            </div>
            <div class="skill-item">
                <div class="skill-icon">☁️</div>
                <h3>Cloud & Tools</h3>
                <p>Microsoft Azure, Visual Studio, Microsoft Office</p>
            </div>
            <div class="skill-item">
                <div class="skill-icon">🛠️</div>
                <h3>Development Practices</h3>
                <p>Testing & Debugging, Program Design, Procedural Programming</p>
            </div>
            <div class="skill-item">
                <div class="skill-icon">💼</div>
                <h3>Professional Skills</h3>
                <p>Customer Service, Communication, Network Strategy</p>
            </div>
        </div>
    </div>
</section>

<!-- Certifications Section -->
<section id="certifications" class="section">
    <div class="container">
        <h2>Licenses & Certifications</h2>
        <div class="certifications-grid">
            <div class="certification-item">
                <div class="cert-icon">⚡</div>
                <h3>C#: Advanced Practices</h3>
                <p class="cert-date">LinkedIn • Jul 2025</p>
                <p>Advanced C# programming techniques and best practices</p>
            </div>
            <div class="certification-item">
                <div class="cert-icon">🚀</div>
                <h3>Learning Go (2021)</h3>
                <p class="cert-date">LinkedIn • Jul 2025</p>
                <p>Modern Go programming language fundamentals</p>
            </div>
            <div class="certification-item">
                <div class="cert-icon">🧠</div>
                <h3>Algorithmic Thinking with Python: Foundations</h3>
                <p class="cert-date">LinkedIn • Mar 2023</p>
                <p>Core algorithmic concepts and problem-solving approaches</p>
            </div>
            <div class="certification-item">
                <div class="cert-icon">☁️</div>
                <h3>Azure for Architects: Design a Networking Strategy</h3>
                <p class="cert-date">LinkedIn • Mar 2023</p>
                <p>Microsoft Azure networking architecture and strategy design</p>
            </div>
            <div class="certification-item">
                <div class="cert-icon">☕</div>
                <h3>Java: Data Structures</h3>
                <p class="cert-date">LinkedIn • Mar 2023</p>
                <p>Advanced data structures implementation and optimization in Java</p>
            </div>
            <div class="certification-item">
                <div class="cert-icon">🐍</div>
                <h3>Python Quick Start</h3>
                <p class="cert-date">LinkedIn • Mar 2023</p>
                <p>Foundational Python programming skills and best practices</p>
            </div>
            <div class="certification-item">
                <div class="cert-icon">💻</div>
                <h3>Programming Foundations: Fundamentals</h3>
                <p class="cert-date">LinkedIn • Sep 2021</p>
                <p>Core programming concepts and software development principles</p>
            </div>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section id="contact" class="section">
    <div class="container">
        <h2>Get In Touch</h2>
        <form class="contact-form" name="contact" method="POST" data-netlify="true" >
            <input type="hidden" name="form-name" value="contact" />
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" required>
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
            </div>
            <button type="submit" class="submit-btn">Send Message</button>
        </form>
    </div>
</section>

<?php
// Include footer
include 'includes/footer.php';
?>