import Head from 'next/head'
import Link from 'next/link'
import MobileNavigation from '../components/MobileNavigation'

export default function MonoGamePlatformer() {
  return (
    <>
      <Head>
        <title>MonoGame Platformer - Peter Bidle</title>
        <meta name="description" content="Cross-Platform 2D Platformer Game with Physics & Animation" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
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
      <MobileNavigation />

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

            {/* Gameplay Screenshots Gallery */}
            <div className="image-gallery">
              <div className="gallery-item">
                <div className="code-image">
                  <img src="/images/monogame-platformer/platformer_gameplay_player_vs_monster.png" alt="MonoGame Platformer Gameplay - Player vs Monster" />
                </div>
                <div className="gallery-caption">Main Gameplay - Player Character vs Monster Encounters</div>
              </div>
              <div className="gallery-item">
                <div className="code-image">
                  <img src="/images/monogame-platformer/platformer_level_editor.png" alt="Built-in Level Editor" />
                </div>
                <div className="gallery-caption">Built-in Level Editor with Real-time Editing Tools</div>
              </div>
              <div className="gallery-item">
                <div className="code-image">
                  <img src="/images/monogame-platformer/platformer_spell_combat.png" alt="Spell Combat System" />
                </div>
                <div className="gallery-caption">Magic Spell Combat System with Visual Effects</div>
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
                <h4>Built-in Level Editor</h4>
                <p>Comprehensive level design tools with real-time editing, collision visualization, and tile placement system.</p>
              </div>
              <div className="feature-item">
                <h4>Enemy AI Behavior</h4>
                <p>Intelligent enemy movement patterns with pathfinding and player detection systems.</p>
              </div>
              <div className="feature-item">
                <h4>Combat & Magic System</h4>
                <p>Spell casting mechanics with visual effects, damage systems, and attack collision detection.</p>
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

            {/* Animation System Implementation */}
            <div className="code-image">
              <img src="/images/monogame-platformer/platformer_code_animation_system.png" alt="Animation System Variables and Implementation" />
            </div>

            <h3>Animation & Character System:</h3>
            <p>The game features a sophisticated animation system with multiple character states and smooth transitions:</p>
            
            <div className="code-image">
              <img src="/images/monogame-platformer/platformer_code_player_states.png" alt="Player State Management Enums" />
            </div>

            <div className="code-block">
              <code>
{`// Player state management with animation transitions
public enum motion { none, walk, jump, idle1, idle2, duck, spell, ouch }
public enum duck_state { down, up }
public enum jump_state { start, air, end }
public enum Facing { left = -1, right = 1 }

// Animation control with MeoMotion and MeoPlayer systems
MeoMotion meo;                    // reference to MonsterSys's meoMotion player
MeoPlayer meo_play;               // for controlling enemy character animations
bool flip;                        // flip horizontally
Vector2 rescale;                  // adjusts meo player image scale for resolution`}
              </code>
            </div>
          </section>

          {/* Physics & Movement System */}
          <section className="content-section">
            <h2>Physics & Movement System</h2>
            <p>The platformer implements realistic physics with precise collision detection and responsive character controls:</p>

            <div className="code-image">
              <img src="/images/monogame-platformer/platformer_code_physics_constants.png" alt="Physics Constants and Movement Parameters" />
            </div>

            <h3>Physics Constants:</h3>
            <div className="code-block">
              <code>
{`// Physics constants for realistic platformer feel
const float GRAVITY = 0.25f;
const float MAX_FALL_SPEED = 20;
const float MAX_VELOCITY = 7.3f;        // max walk/run speed
const float MAX_JUMP = -12;             // maximum jump-up speed

// Player collision and positioning
const int half_player_width = 32;
const int player_feet_offset = 26;
const int player_head_offset = 71;`}
              </code>
            </div>

            <h3>Input System Implementation:</h3>
            <div className="code-image">
              <img src="/images/monogame-platformer/platformer_code_input_system.png" alt="Keyboard Input Handling System" />
            </div>

            <div className="code-image">
              <img src="/images/monogame-platformer/platformer_code_input_update.png" alt="Input Update Method Implementation" />
            </div>

            <div className="code-block">
              <code>
{`// Responsive input handling with state tracking
public KeyboardState kb, okb;
public bool shift_down, control_down, alt_down;
public bool shift_press, control_press, alt_press;

public void Update()
{
    old_alt_down = alt_down; old_shift_down = shift_down; old_control_down = control_down;
    okb = kb;
    kb = Keyboard.GetState();
    
    // Detect key press events (not just held down)
    if ((shift_down) && (!old_shift_down)) shift_press = true;
    if ((control_down) && (!old_control_down)) control_press = true;
    if ((alt_down) && (!old_alt_down)) alt_press = true;
}`}
              </code>
            </div>
          </section>

          {/* Enemy AI System */}
          <section className="content-section">
            <h2>Enemy AI & Monster System</h2>
            <p>The game features intelligent enemy behavior with different monster types and sophisticated AI patterns:</p>

            <div className="code-image">
              <img src="/images/monogame-platformer/platformer_code_monster_system.png" alt="Monster System Variables and Properties" />
            </div>

            <h3>Monster Types & Behavior:</h3>
            <div className="code-image">
              <img src="/images/monogame-platformer/platformer_code_monster_types.png" alt="Monster Types and AI Behavior Patterns" />
            </div>

            <div className="code-block">
              <code>
{`// Monster type system with different AI behaviors
enum MonsterType { None, Mouster, Hellcat }

public class Monster
{
    const float GRAVITY = 0.25f, MAX_FALL_SPEED = 20;
    const float MAX_JUMP = -12;
    
    public enum Act { idle, walk, run, attack, jump, ouch }    // AI states
    public enum Mode { wander, chase, escape, patrol }        // AI behavior modes
    
    MonsterType type;           // which type of monster
    public bool dead;           // if it's dead, skip processing it
    public int life;            // life status
    public Vector2 pos, vel;    // world position, velocity
    public Vector2 target_vel;  // velocity goal (either random or deliberate)
    public Rectangle bbox;      // bounding box for collision detection
    public Rectangle attack_box;// for collision detection of attack from monster
    bool grounded;             // monster on ground or not
}`}
              </code>
            </div>
          </section>

          {/* HUD & UI System */}
          <section className="content-section">
            <h2>HUD & User Interface</h2>
            <p>The game includes a comprehensive HUD system with health management, score tracking, and visual feedback:</p>

            <div className="code-image">
              <img src="/images/monogame-platformer/platformer_code_hud_system.png" alt="HUD System Implementation with Health and Lives" />
            </div>

            <h3>HUD Components:</h3>
            <div className="code-block">
              <code>
{`// HUD class for displaying player status
class Hud
{
    SpriteBatch spriteBatch;
    SpriteFont font;
    Texture2D hud_tex;
    Rectangle lifebar_border, lifebar, life_word, mini_hero, life_rect;
    Vector2 lifebar_pos, lives_pos, life_word_pos, count_pos;
    public float life;         // amount of life in lifebar
    public int lives;          // number of retries
    
    public Hud(SpriteBatch spr, SpriteFont fnt)
    {
        spriteBatch = spr;
        font = fnt;
        lifebar_border = new Rectangle(0, 64, 284, 21);
        lifebar = new Rectangle(0,0,284,21);
        life_word = new Rectangle(0, 22, 60, 27);
        mini_hero = new Rectangle(326, 14, 48, 37);
        life_word_pos = new Vector2(10, 6);
        lifebar_pos = new Vector2(70, 10);
        lives_pos = new Vector2(360, 3);
        count_pos = new Vector2(410, 10);
    }
}`}
              </code>
            </div>
          </section>

          {/* System Architecture */}
          <section className="content-section">
            <h2>System Architecture</h2>
            <p>The game implements a modular architecture with well-defined system boundaries and clear separation of concerns:</p>

            <div className="code-image">
              <img src="/images/monogame-platformer/platformer_code_system_architecture.png" alt="System Architecture and Game States" />
            </div>

            <h3>Core Game Systems:</h3>
            <div className="code-image">
              <img src="/images/monogame-platformer/platformer_code_collision_system.png" alt="Collision System Implementation" />
            </div>

            <div className="code-block">
              <code>
{`// Game state management and core systems
Hud hud;                      // reference to Game1.hud for display of player status
Facing direction = Facing.right; // which direction is the character facing
motion hero_motion = motion.idle1, last_hero_motion = motion.none;
duck_state duck_mode = duck_state.down;
jump_state jump_mode = jump_state.start;

// Coordinate system management
public Vector4 bbox;           // bounding box used in other modules
public Vector2 pos;            // player's position in world coordinates  
public Vector2 screen_pos;     // player's position as it appears on screen
public Point loc;              // player tile-map location
Vector2 old_pos;              // previous world position
Point old_loc;                // previous map location (in tiles)
Vector2 snow_loc;             // snow location
Vector2 vel;                  // player's velocity
float MAX_JUMP = -14f;        // maximum jump-up speed
bool grounded;               // player on ground or not`}
              </code>
            </div>
          </section>

          {/* Level Design & Editor */}
          <section className="content-section">
            <h2>Level Design & Built-in Editor</h2>
            <p>The game features a comprehensive level editor integrated directly into the gameplay experience:</p>

            <div className="code-image">
              <img src="/images/monogame-platformer/platformer_visual_effects.png" alt="Visual Effects and Level Design" />
            </div>

            <h3>Level Editor Features:</h3>
            <ul>
              <li><strong>Tile Placement</strong> - A-Z keys for adding different tile types and terrain</li>
              <li><strong>Collision Editing</strong> - Visual collision box editing with F12 debug view</li>
              <li><strong>Character Placement</strong> - 1-9 keys for adding different characters and enemies</li>
              <li><strong>Save/Load System</strong> - Export levels to Content\\lev1.txt format</li>
              <li><strong>Real-time Testing</strong> - Enter key for instant level testing</li>
              <li><strong>Visual Feedback</strong> - Red collision boxes and tile placement indicators</li>
            </ul>

            <h3>Advanced Level Features:</h3>
            <ul>
              <li><strong>Dynamic Backgrounds</strong> - Parallax scrolling space environments</li>
              <li><strong>Interactive Elements</strong> - Spring platforms, collectible management</li>
              <li><strong>Environmental Hazards</strong> - Lava, spikes, and moving platforms</li>
              <li><strong>Atmospheric Effects</strong> - Particle systems and visual polish</li>
            </ul>
          </section>

          {/* Game Mechanics */}
          <section className="content-section">
            <h2>Advanced Game Mechanics</h2>
            
            <h3>Combat System:</h3>
            <p>The game implements a sophisticated combat system with multiple interaction types:</p>
            <ul>
              <li><strong>Spell Casting</strong> - Magic projectile system with visual effects</li>
              <li><strong>Collision Detection</strong> - Separate bounding boxes for movement and attack</li>
              <li><strong>Damage System</strong> - Health management with visual feedback</li>
              <li><strong>Enemy Interactions</strong> - Multiple monster types with unique behaviors</li>
            </ul>

            <h3>Character Movement:</h3>
            <p>Responsive platformer controls with realistic physics:</p>
            <ul>
              <li><strong>Variable Jump Height</strong> - Jump height based on input duration</li>
              <li><strong>Ground Detection</strong> - Precise collision detection for jumping</li>
              <li><strong>Momentum System</strong> - Realistic acceleration and deceleration</li>
              <li><strong>State Transitions</strong> - Smooth animation between movement states</li>
            </ul>

            <h3>Visual Systems:</h3>
            <p>Polished visual presentation with dynamic effects:</p>
            <ul>
              <li><strong>Sprite Flipping</strong> - Automatic character orientation based on movement</li>
              <li><strong>Animation Timing</strong> - Frame-perfect sprite animation system</li>
              <li><strong>Screen Effects</strong> - Dynamic camera positioning and visual feedback</li>
              <li><strong>UI Integration</strong> - Responsive HUD with health and status indicators</li>
            </ul>
          </section>

          {/* Challenges & Solutions */}
          <section className="content-section">
            <h2>Development Challenges & Solutions</h2>
            
            <h3>Frame-Rate Independent Physics:</h3>
            <p><strong>Challenge:</strong> Ensuring consistent physics behavior across different frame rates and platforms.</p>
            <p><strong>Solution:</strong> Implemented delta time-based physics calculations with fixed timestep integration for stable collision detection and movement.</p>

            <h3>Complex Animation State Management:</h3>
            <p><strong>Challenge:</strong> Managing multiple animation states with smooth transitions and timing.</p>
            <p><strong>Solution:</strong> Created a comprehensive enum-based state system with transition logic and frame timing controls for seamless animation flow.</p>

            <h3>Level Editor Integration:</h3>
            <p><strong>Challenge:</strong> Building a level editor that works seamlessly within the game runtime.</p>
            <p><strong>Solution:</strong> Developed a real-time editing system with visual feedback, instant testing capabilities, and persistent save/load functionality.</p>

            <h3>Cross-Platform Compatibility:</h3>
            <p><strong>Challenge:</strong> Ensuring consistent gameplay experience across different platforms and input methods.</p>
            <p><strong>Solution:</strong> Used MonoGame's cross-platform capabilities with abstracted input handling and scalable rendering systems.</p>
          </section>

          {/* Future Enhancements */}
          <section className="content-section">
            <h2>Future Enhancements</h2>
            <p>Planned improvements and additional features for continued development:</p>
            
            <ul>
              <li><strong>Multiplayer Mode</strong> - Local co-op gameplay with shared screen mechanics</li>
              <li><strong>Enhanced Level Editor</strong> - Visual tile palette, brush tools, and advanced editing features</li>
              <li><strong>Mobile Controls</strong> - Touch-optimized interface for mobile platforms</li>
              <li><strong>Boss Battles</strong> - Complex enemy encounters with unique mechanics and patterns</li>
              <li><strong>Story Mode</strong> - Narrative elements and character development progression</li>
              <li><strong>Sound System</strong> - Dynamic audio with environmental effects and music</li>
              <li><strong>Achievement System</strong> - Progress tracking and unlock rewards</li>
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