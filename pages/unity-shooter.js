import Head from 'next/head'
import Link from 'next/link'
import MobileNavigation from '../components/MobileNavigation'

export default function UnityShooter() {
  return (
    <>
      <Head>
        <title>Unity 2D Shooter - Peter Bidle</title>
        <meta name="description" content="Fast-Paced Action Game with Enemy Waves & Performance Optimization" />
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
      <MobileNavigation />

      {/* Project Hero */}
      <section className="project-hero">
        <div className="container">
          <h1>Top-Down 2D Shooter</h1>
          <p className="project-subtitle">Fast-Paced Action Game with Enemy Waves & Performance Optimization</p>
          <div className="tech-stack">
            <span className="tech-tag">Unity</span>
            <span className="tech-tag">C#</span>
            <span className="tech-tag">2D Graphics</span>
            <span className="tech-tag">Object Pooling</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container">
        <div className="main-content">
          {/* Project Overview */}
          <section className="content-section">
            <h2>Project Overview</h2>
            <p>A fast-paced top-down 2D shooter game developed in Unity, featuring intense enemy wave mechanics, precise sprite-based graphics, and optimized performance systems. The game challenges players to survive increasingly difficult waves of enemies while managing resources and upgrades.</p>
            
            <p>This project showcases advanced Unity 2D development techniques, including object pooling for performance optimization, dynamic difficulty scaling, and responsive player controls that create an engaging arcade-style gaming experience.</p>

            {/* Image Gallery */}
            <div className="image-gallery">
              <div className="gallery-item">
                <div className="gallery-placeholder">🎮</div>
                <div className="gallery-caption">Main Gameplay Scene</div>
              </div>
              <div className="gallery-item">
                <div className="gallery-placeholder">💥</div>
                <div className="gallery-caption">Combat & Effects System</div>
              </div>
              <div className="gallery-item">
                <div className="gallery-placeholder">📊</div>
                <div className="gallery-caption">Score & UI Interface</div>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="content-section">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h4>Enemy Wave System</h4>
                <p>Dynamic enemy spawning with increasing difficulty, multiple enemy types, and intelligent AI behavior patterns.</p>
              </div>
              <div className="feature-item">
                <h4>Player Damage System</h4>
                <p>Comprehensive health management with visual feedback, invincibility frames, and smooth damage transitions.</p>
              </div>
              <div className="feature-item">
                <h4>Object Pooling</h4>
                <p>Performance-optimized memory management for bullets, enemies, and effects to maintain smooth 60fps gameplay.</p>
              </div>
              <div className="feature-item">
                <h4>Score Tracking</h4>
                <p>Real-time score system with multipliers, high score persistence, and achievement-based progression.</p>
              </div>
              <div className="feature-item">
                <h4>Sprite-Based Assets</h4>
                <p>High-quality 2D sprites with animation systems, particle effects, and responsive visual feedback.</p>
              </div>
              <div className="feature-item">
                <h4>Responsive Controls</h4>
                <p>Smooth player movement with precise aiming mechanics and customizable control schemes.</p>
              </div>
            </div>
          </section>

          {/* Technical Implementation */}
          <section className="content-section">
            <h2>Technical Implementation</h2>
            <p>Built using Unity's 2D framework with custom C# scripts for game logic, the project emphasizes performance optimization and code maintainability.</p>

            <h3>Core Systems:</h3>
            <ul>
              <li><strong>Unity 2D Physics</strong> - Collision detection and rigidbody movement</li>
              <li><strong>Object Pooling Pattern</strong> - Memory-efficient entity management</li>
              <li><strong>State Machine</strong> - Game state management and scene transitions</li>
              <li><strong>Event System</strong> - Decoupled communication between game components</li>
              <li><strong>ScriptableObjects</strong> - Data-driven enemy and weapon configurations</li>
            </ul>

            <div className="code-block">
              <code>
{`// Object Pool Manager for Performance Optimization
public class ObjectPool : MonoBehaviour
{
    [SerializeField] private GameObject bulletPrefab;
    [SerializeField] private int poolSize = 100;
    private Queue<GameObject> bulletPool = new Queue<GameObject>();
    
    void Start()
    {
        // Pre-instantiate bullets for the pool
        for (int i = 0; i < poolSize; i++)
        {
            GameObject bullet = Instantiate(bulletPrefab);
            bullet.SetActive(false);
            bulletPool.Enqueue(bullet);
        }
    }
    
    public GameObject GetBullet()
    {
        if (bulletPool.Count > 0)
        {
            GameObject bullet = bulletPool.Dequeue();
            bullet.SetActive(true);
            return bullet;
        }
        return Instantiate(bulletPrefab);
    }
    
    public void ReturnBullet(GameObject bullet)
    {
        bullet.SetActive(false);
        bulletPool.Enqueue(bullet);
    }
}`}
              </code>
            </div>
          </section>

          {/* Game Mechanics */}
          <section className="content-section">
            <h2>Game Mechanics</h2>
            <p>The game features a carefully balanced progression system that keeps players engaged:</p>
            
            <h3>Player Systems:</h3>
            <ul>
              <li><strong>Health & Lives</strong> - Multi-hit system with visual health indicators</li>
              <li><strong>Weapon Upgrades</strong> - Collectible power-ups that enhance firepower</li>
              <li><strong>Movement</strong> - 360-degree movement with momentum-based physics</li>
              <li><strong>Shooting</strong> - Mouse-aimed firing with multiple weapon types</li>
            </ul>

            <h3>Enemy AI:</h3>
            <ul>
              <li><strong>Chase Behavior</strong> - Enemies track and pursue the player</li>
              <li><strong>Spawn Patterns</strong> - Strategic enemy placement and timing</li>
              <li><strong>Difficulty Scaling</strong> - Progressive speed and health increases</li>
              <li><strong>Special Abilities</strong> - Unique enemy types with different attack patterns</li>
            </ul>
          </section>

          {/* Challenges & Solutions */}
          <section className="content-section">
            <h2>Challenges & Solutions</h2>
            <p>During development, several technical challenges were overcome:</p>

            <h3>Performance Optimization:</h3>
            <p><strong>Challenge:</strong> Frame rate drops when spawning large numbers of bullets and enemies.</p>
            <p><strong>Solution:</strong> Implemented object pooling pattern to reuse GameObjects instead of constant instantiation/destruction, resulting in consistent 60fps performance.</p>

            <h3>Collision Detection:</h3>
            <p><strong>Challenge:</strong> Accurate hit detection for fast-moving projectiles.</p>
            <p><strong>Solution:</strong> Used Unity's continuous collision detection and implemented raycast-based bullet detection for pixel-perfect accuracy.</p>

            <h3>Game Balance:</h3>
            <p><strong>Challenge:</strong> Creating engaging difficulty progression without overwhelming players.</p>
            <p><strong>Solution:</strong> Implemented data-driven design using ScriptableObjects for easy tweaking of enemy stats, spawn rates, and power-up effects.</p>
          </section>

          {/* Project Links */}
          <div className="project-links">
            <a href="https://github.com/PJay1994/Top-Down-shooter" className="project-btn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
              View on GitHub
            </a>
            <a href="#" className="project-btn secondary">
              <i className="fas fa-download"></i>
              Download Game
            </a>
          </div>
        </div>
      </div>
    </>
  )
}