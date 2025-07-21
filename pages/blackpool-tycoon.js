import Head from 'next/head'
import Link from 'next/link'

export default function BlackpoolTycoon() {
  return (
    <>
      <Head>
        <title>Blackpool Tycoon Board Game - Peter Bidle</title>
        <meta name="description" content="Strategic Board Game Prototype - Property Management & Tourism" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>

      {/* Navigation */}
      <nav>
        <div className="container">
          <Link href="/" className="logo">Peter Bidle</Link>
          <Link href="/#portfolio" className="back-link">
            <i className="fas fa-arrow-left"></i>
            Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Project Hero */}
      <section className="project-hero">
        <div className="container">
          <h1>Blackpool Tycoon</h1>
          <p className="project-subtitle">Strategic Board Game Prototype - Property Management & Tourism</p>
          <div className="tech-stack">
            <span className="tech-tag">InDesign</span>
            <span className="tech-tag">Game Design</span>
            <span className="tech-tag">Print Assembly</span>
            <span className="tech-tag">Iterative Design</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container">
        <div className="main-content">
          {/* Project Overview */}
          <section className="content-section">
            <h2>Project Overview</h2>
            <p>Blackpool Tycoon is a strategic board game prototype that combines property management mechanics with tourism-themed gameplay set around Blackpool's famous attractions. Players compete to build the most successful tourism empire by acquiring properties, managing visitor flow, and adapting to dynamic weather conditions.</p>
            
            <p>This project showcases physical game design skills, from initial concept through iterative prototyping to final production. The game incorporates feedback-driven design improvements and demonstrates understanding of game balance, player engagement, and thematic integration.</p>

            {/* Image Gallery */}
            <div className="image-gallery">
              <div className="gallery-item">
                <div className="gallery-placeholder">🏰</div>
                <div className="gallery-caption">Game Board & Layout</div>
              </div>
              <div className="gallery-item">
                <div className="gallery-placeholder">🎲</div>
                <div className="gallery-caption">Game Components & Pieces</div>
              </div>
              <div className="gallery-item">
                <div className="gallery-placeholder">📋</div>
                <div className="gallery-caption">Rules & Player Cards</div>
              </div>
            </div>
          </section>

          {/* Game Components */}
          <section className="content-section">
            <h2>Game Components</h2>
            <p>The game includes professionally designed components created with Adobe InDesign and manual assembly:</p>
            
            <div className="components-grid">
              <div className="component-item">
                <span className="component-icon">🗺️</span>
                <h4>Game Board</h4>
                <p className="component-count">1 Main Board</p>
                <p>Blackpool-themed map with iconic attractions</p>
              </div>
              <div className="component-item">
                <span className="component-icon">🏠</span>
                <h4>Property Cards</h4>
                <p className="component-count">40 Properties</p>
                <p>Hotels, attractions, and entertainment venues</p>
              </div>
              <div className="component-item">
                <span className="component-icon">👥</span>
                <h4>Visitor Tokens</h4>
                <p className="component-count">120 Tokens</p>
                <p>Representing tourists and revenue</p>
              </div>
              <div className="component-item">
                <span className="component-icon">🌦️</span>
                <h4>Weather Cards</h4>
                <p className="component-count">24 Cards</p>
                <p>Dynamic weather affecting gameplay</p>
              </div>
              <div className="component-item">
                <span className="component-icon">💰</span>
                <h4>Money</h4>
                <p className="component-count">200 Bills</p>
                <p>Currency for property transactions</p>
              </div>
              <div className="component-item">
                <span className="component-icon">🎯</span>
                <h4>Player Pieces</h4>
                <p className="component-count">6 Pieces</p>
                <p>Unique player markers and trackers</p>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="content-section">
            <h2>Gameplay Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h4>Property Management</h4>
                <p>Strategic acquisition and development of Blackpool's iconic attractions and accommodations.</p>
              </div>
              <div className="feature-item">
                <h4>Tourism Mechanics</h4>
                <p>Visitor flow system based on seasonal patterns and attraction popularity.</p>
              </div>
              <div className="feature-item">
                <h4>Weather Events</h4>
                <p>Dynamic weather cards that affect visitor numbers and property income.</p>
              </div>
              <div className="feature-item">
                <h4>Competitive Strategy</h4>
                <p>Multiple paths to victory through different tourism business models.</p>
              </div>
              <div className="feature-item">
                <h4>Thematic Integration</h4>
                <p>Authentic Blackpool landmarks and tourism industry mechanics.</p>
              </div>
              <div className="feature-item">
                <h4>Balanced Gameplay</h4>
                <p>Carefully tested game balance ensuring engaging competition for all players.</p>
              </div>
            </div>
          </section>

          {/* Design Process */}
          <section className="content-section">
            <h2>Design & Development Process</h2>
            <p>The game development followed a structured iterative design process with multiple testing phases:</p>

            <h3>Phase 1: Concept Development</h3>
            <ul>
              <li><strong>Theme Research</strong> - Studied Blackpool's tourism industry and attractions</li>
              <li><strong>Mechanical Framework</strong> - Established core gameplay mechanics and victory conditions</li>
              <li><strong>Initial Prototyping</strong> - Created paper prototype for early testing</li>
            </ul>

            <h3>Phase 2: Visual Design</h3>
            <ul>
              <li><strong>Adobe InDesign</strong> - Professional layout and component design</li>
              <li><strong>Typography</strong> - Clear, readable fonts for rules and cards</li>
              <li><strong>Color Scheme</strong> - Thematic colors reflecting Blackpool's seaside atmosphere</li>
              <li><strong>Iconography</strong> - Custom icons for game components and actions</li>
            </ul>

            <h3>Phase 3: Testing & Iteration</h3>
            <ul>
              <li><strong>Playtesting Sessions</strong> - Multiple rounds with different player groups</li>
              <li><strong>Feedback Collection</strong> - Systematic recording of player experiences</li>
              <li><strong>Balance Adjustments</strong> - Fine-tuning of economic systems and timing</li>
              <li><strong>Rule Refinement</strong> - Clarification and simplification of complex mechanics</li>
            </ul>

            <h3>Phase 4: Production</h3>
            <ul>
              <li><strong>Print Production</strong> - High-quality printing of all components</li>
              <li><strong>Manual Assembly</strong> - Cutting, laminating, and organizing components</li>
              <li><strong>Quality Control</strong> - Testing assembled components for durability</li>
              <li><strong>Final Documentation</strong> - Complete rulebook and quick-reference guides</li>
            </ul>
          </section>

          {/* Skills Demonstrated */}
          <section className="content-section">
            <h2>Skills Demonstrated</h2>
            <p>This project showcases a diverse range of design and development skills:</p>

            <h3>Game Design:</h3>
            <ul>
              <li><strong>Mechanical Design</strong> - Creating balanced, engaging gameplay systems</li>
              <li><strong>Thematic Integration</strong> - Aligning mechanics with narrative theme</li>
              <li><strong>Player Psychology</strong> - Understanding what makes games fun and engaging</li>
              <li><strong>Playtesting</strong> - Systematic testing and iteration methodologies</li>
            </ul>

            <h3>Visual Design:</h3>
            <ul>
              <li><strong>Adobe InDesign</strong> - Professional layout and typography</li>
              <li><strong>Information Design</strong> - Clear communication through visual hierarchy</li>
              <li><strong>Print Production</strong> - Understanding of printing processes and requirements</li>
              <li><strong>Component Design</strong> - Creating functional and attractive game pieces</li>
            </ul>

            <h3>Project Management:</h3>
            <ul>
              <li><strong>Iterative Development</strong> - Managing multiple design and testing cycles</li>
              <li><strong>Feedback Integration</strong> - Incorporating user feedback into design improvements</li>
              <li><strong>Quality Assurance</strong> - Testing and refining for final production</li>
              <li><strong>Documentation</strong> - Creating clear rules and instructional materials</li>
            </ul>
          </section>

          {/* Project Links */}
          <div className="project-links">
            <a href="#" className="project-btn">
              <i className="fas fa-file-pdf"></i>
              View Rulebook
            </a>
            <a href="#" className="project-btn secondary">
              <i className="fas fa-images"></i>
              Component Gallery
            </a>
            <a href="#" className="project-btn secondary">
              <i className="fas fa-play"></i>
              Gameplay Video
            </a>
          </div>
        </div>
      </div>
    </>
  )
}