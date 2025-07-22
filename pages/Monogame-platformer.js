import Head from 'next/head'
import Link from 'next/link'

export default function MonoGamePlatformer() {
  return (
    <>
      <Head>
        <title>MonoGame Platformer - Peter Bidle</title>
        <meta name="description" content="Cross-Platform 2D Platformer Game with Physics & Animation" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>

      {/* Navigation */}
      <nav>
        <div className="container">
          <Link href="/" className="logo">
            <img src="/logo.png" alt="Logo" className="logo-image" />
            Peter Bidle
          </Link>
          <Link href="/#portfolio" className="back-link">
            <i className="fas fa-arrow-left"></i>
            Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Project Hero */}
      <section className="project-hero">
        <div className="container">
          <h1>MonoGame Platformer</h1>
          <p className="project-subtitle">Cross-Platform 2D Platformer Game with Physics & Animation</p>
          <div className="tech-stack">
            <span className="tech-tag">MonoGame</span>
            <span className="tech-tag">C#</span>
            <span className="tech-tag">2D Physics</span>
            <span className="tech-tag">Cross-Platform</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container">
        <div className="main-content">
          {/* Project Overview */}
          <section className="content-section">
            <h2>Project Overview</h2>
            <p>A feature-rich 2D platformer game built with MonoGame framework, showcasing advanced game development techniques including custom physics systems, sprite animation, level design, and cross-platform deployment. The game features smooth character movement, engaging gameplay mechanics, and polished visual effects.</p>
            
            <p>This project demonstrates proficiency in C# programming, game engine architecture, 2D graphics programming, and cross-platform game development. The platformer includes multiple levels, collectibles, enemies, and a progression system that creates an engaging player experience.</p>

            {/* Image Gallery */}
            <div className="image-gallery">
              <div className="gallery-item">
                <div className="gallery-placeholder">🎮</div>
                <div className="gallery-caption">Gameplay Mechanics</div>
              </div>
              <div className="gallery-item">
                <div className="gallery-placeholder">🏃</div>
                <div className="gallery-caption">Character Animation System</div>
              </div>
              <div className="gallery-item">
                <div className="gallery-placeholder">🗺️</div>
                <div className="gallery-caption">Level Design & Tilemap</div>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="content-section">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h4>Custom Physics Engine</h4>
                <p>Implemented gravity, collision detection, and responsive platformer physics for smooth character movement.</p>
              </div>
              <div className="feature-item">
                <h4>Sprite Animation System</h4>
                <p>Frame-based animation system with smooth transitions between running, jumping, and idle states.</p>
              </div>
              <div className="feature-item">
                <h4>Tilemap Level Design</h4>
                <p>Flexible tile-based level editor support for creating diverse and engaging platformer levels.</p>
              </div>
              <div className="feature-item">
                <h4>Enemy AI Behavior</h4>
                <p>Intelligent enemy movement patterns with pathfinding and player detection systems.</p>
              </div>
              <div className="feature-item">
                <h4>Collectibles & Power-ups</h4>
                <p>Interactive game objects including coins, power-ups, and special abilities that enhance gameplay.</p>
              </div>
              <div className="feature-item">
                <h4>Cross-Platform Support</h4>
                <p>Deployable to Windows, Mac, Linux, and mobile platforms using MonoGame's cross-platform capabilities.</p>
              </div>
            </div>
          </section>

          {/* Technical Implementation */}
          <section className="content-section">
            <h2>Technical Implementation</h2>
            <p>Built using the MonoGame framework with C#, leveraging object-oriented programming principles and game development design patterns for maintainable and scalable code architecture.</p>

            <h3>Core Technologies:</h3>
            <ul>
              <li><strong>MonoGame Framework</strong> - Cross-platform game development framework</li>
              <li><strong>C# Programming</strong> - Object-oriented game logic and systems</li>
              <li><strong>Content Pipeline</strong> - Asset management and optimization</li>
              <li><strong>SpriteBatch Rendering</strong> - Optimized 2D graphics rendering</li>
              <li><strong>Custom Physics</strong> - Collision detection and response systems</li>
            </ul>

            <div className="code-block">
              <code>
{`// Player Movement and Physics Implementation
public class Player : GameObject
{
    private Vector2 velocity;
    private bool isGrounded;
    private bool isJumping;
    
    private const float MOVE_SPEED = 300f;
    private const float JUMP_SPEED = -600f;
    private const float GRAVITY = 2000f;
    
    public void Update(GameTime gameTime)
    {
        HandleInput();
        ApplyPhysics(gameTime);
        UpdateAnimation(gameTime);
        CheckCollisions();
    }
    
    private void HandleInput()
    {
        KeyboardState keyboardState = Keyboard.GetState();
        
        // Horizontal movement
        if (keyboardState.IsKeyDown(Keys.Left))
            velocity.X = -MOVE_SPEED;
        else if (keyboardState.IsKeyDown(Keys.Right))
            velocity.X = MOVE_SPEED;
        else
            velocity.X = 0;
            
        // Jumping
        if (keyboardState.IsKeyDown(Keys.Space) && isGrounded)
        {
            velocity.Y = JUMP_SPEED;
            isGrounded = false;
            isJumping = true;
        }
    }
    
    private void ApplyPhysics(GameTime gameTime)
    {
        float elapsed = (float)gameTime.ElapsedGameTime.TotalSeconds;
        
        // Apply gravity
        velocity.Y += GRAVITY * elapsed;
        
        // Update position
        position += velocity * elapsed;
    }
}`}
              </code>
            </div>
          </section>

          {/* Game Mechanics */}
          <section className="content-section">
            <h2>Game Mechanics</h2>
            <p>The platformer features a comprehensive set of mechanics designed to create engaging and challenging gameplay:</p>
            
            <h3>Player Mechanics:</h3>
            <ul>
              <li><strong>Movement System</strong> - Responsive left/right movement with acceleration and deceleration</li>
              <li><strong>Jumping Physics</strong> - Variable jump height based on input duration</li>
              <li><strong>Wall Jumping</strong> - Advanced movement option for skilled players</li>
              <li><strong>Double Jump</strong> - Air mobility power-up for enhanced platforming</li>
            </ul>

            <h3>Level Design Elements:</h3>
            <ul>
              <li><strong>Platform Types</strong> - Solid, one-way, moving, and breakable platforms</li>
              <li><strong>Hazards</strong> - Spikes, lava, and environmental dangers</li>
              <li><strong>Checkpoints</strong> - Save progress and respawn points throughout levels</li>
              <li><strong>Secret Areas</strong> - Hidden passages and bonus content for exploration</li>
            </ul>

            <h3>Progression System:</h3>
            <ul>
              <li><strong>Score System</strong> - Points for collecting items and completing levels</li>
              <li><strong>Level Unlocking</strong> - Progressive difficulty and new areas</li>
              <li><strong>Achievement System</strong> - Challenges and rewards for skilled play</li>
              <li><strong>Time Trials</strong> - Speed-run modes for competitive players</li>
            </ul>
          </section>

          {/* Animation & Graphics */}
          <section className="content-section">
            <h2>Animation & Graphics Systems</h2>
            
            <h3>Sprite Animation:</h3>
            <p><strong>Implementation:</strong> Custom animation system supporting multiple animation states.</p>
            <p><strong>Features:</strong> Frame-based animations with configurable timing, smooth state transitions, and sprite flipping for directional movement.</p>

            <h3>Visual Effects:</h3>
            <p><strong>Particle Systems:</strong> Jump dust, collectible sparkles, and environmental effects.</p>
            <p><strong>Screen Effects:</strong> Camera shake on impact, smooth camera following, and level transition effects.</p>

            <h3>Asset Pipeline:</h3>
            <p><strong>Texture Management:</strong> Efficient sprite sheet loading and texture atlas organization.</p>
            <p><strong>Audio Integration:</strong> Sound effects for actions, ambient music, and dynamic audio mixing.</p>
          </section>

          {/* Challenges & Solutions */}
          <section className="content-section">
            <h2>Development Challenges & Solutions</h2>
            
            <h3>Physics Precision:</h3>
            <p><strong>Challenge:</strong> Ensuring pixel-perfect collision detection for responsive platformer feel.</p>
            <p><strong>Solution:</strong> Implemented custom AABB collision system with proper collision response and edge case handling for smooth movement.</p>

            <h3>Performance Optimization:</h3>
            <p><strong>Challenge:</strong> Maintaining 60fps with multiple animated sprites and effects.</p>
            <p><strong>Solution:</strong> Optimized rendering with sprite batching, efficient collision culling, and object pooling for frequently created/destroyed objects.</p>

            <h3>Cross-Platform Compatibility:</h3>
            <p><strong>Challenge:</strong> Ensuring consistent gameplay across different platforms and input methods.</p>
            <p><strong>Solution:</strong> Abstracted input handling and implemented scalable UI/resolution systems for various screen sizes and control schemes.</p>
          </section>

          {/* Future Enhancements */}
          <section className="content-section">
            <h2>Future Enhancements</h2>
            <p>Planned improvements and additional features for continued development:</p>
            
            <ul>
              <li><strong>Multiplayer Mode</strong> - Local co-op gameplay with shared screen mechanics</li>
              <li><strong>Level Editor</strong> - In-game level creation tools for user-generated content</li>
              <li><strong>Mobile Controls</strong> - Touch-optimized interface for mobile platforms</li>
              <li><strong>Boss Battles</strong> - Complex enemy encounters with unique mechanics</li>
              <li><strong>Story Mode</strong> - Narrative elements and character development</li>
              <li><strong>Online Leaderboards</strong> - Competitive scoring and time trial rankings</li>
            </ul>
          </section>

          {/* Project Links */}
          <div className="project-links">
            <a href="https://github.com/PJay1994/platformer-monogame" className="project-btn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  )
}