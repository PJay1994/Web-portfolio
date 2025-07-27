import Head from 'next/head'
import Link from 'next/link'
import MobileNavigation from '../components/MobileNavigation'

export default function Unity2DShooter() {
  return (
    <>
      <Head>
        <title>Unity 2D Shooter - Peter Bidle</title>
        <meta name="description" content="Strategic 2D Shooter with AI Enemies & Grid-Based Combat" />
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
          <h1>Unity 2D Shooter</h1>
          <p className="project-subtitle">Strategic 2D Shooter with AI Enemies & Grid-Based Combat</p>
          <div className="tech-stack">
            <span className="tech-tag">Unity</span>
            <span className="tech-tag">C#</span>
            <span className="tech-tag">2D Physics</span>
            <span className="tech-tag">AI Enemies</span>
            <span className="tech-tag">Grid-Based Movement</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container">
        <div className="main-content">
          {/* Project Overview */}
          <section className="content-section">
            <h2>Project Overview</h2>
            <p>A strategic 2D shooter featuring grid-based movement, intelligent AI enemies, and collectible power-ups. This Unity 2D game showcases advanced movement systems, enemy AI pathfinding, and tactical combat mechanics with precise positioning and timing.</p>
            
            <p>The project demonstrates proficiency in Unity's 2D physics system, coroutine-based movement, collision detection, and game state management. Players navigate through tile-based levels, strategically positioning themselves to defeat enemies while collecting coins and power-ups.</p>

            {/* Image Gallery */}
            <div className="image-gallery">
              <div className="gallery-item">
                <div className="code-image">
                  <img src="/images/unity-2d-shooter/unity-scene-view-main-level.png" alt="Unity Scene View - Game Layout" />
                </div>
                <div className="gallery-caption">Unity Scene View - Game Layout with Player and Enemies</div>
              </div>
              <div className="gallery-item">
                <div className="code-image">
                  <img src="/images/unity-2d-shooter/inspector-coin-object-setup.png" alt="Unity Inspector - Coin Object Setup" />
                </div>
                <div className="gallery-caption">Unity Inspector - Coin Object Configuration</div>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="content-section">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h4>Grid-Based Movement</h4>
                <p>Precise tile-based character movement using coroutines for smooth animations and responsive controls.</p>
              </div>
              <div className="feature-item">
                <h4>AI Enemy System</h4>
                <p>Intelligent enemy behavior with target tracking, pathfinding, and dynamic movement patterns.</p>
              </div>
              <div className="feature-item">
                <h4>Combat & Shooting Mechanics</h4>
                <p>Strategic combat system with precise aiming, projectile physics, and tactical positioning gameplay.</p>
              </div>
              <div className="feature-item">
                <h4>Collectible System</h4>
                <p>Coin collection mechanics with visual feedback and progression tracking through CoinManager singleton.</p>
              </div>
              <div className="feature-item">
                <h4>Scene Management</h4>
                <p>Seamless level transitions and game state management with custom SceneLoader implementation.</p>
              </div>
              <div className="feature-item">
                <h4>Physics-Based Collision</h4>
                <p>Precise collision detection using Unity's Physics2D system for responsive gameplay interactions.</p>
              </div>
            </div>
          </section>

          {/* Technical Implementation */}
          <section className="content-section">
            <h2>Technical Implementation</h2>
            <p>Built using Unity's 2D framework with custom C# scripts implementing tactical shooter mechanics through modern game development patterns.</p>

            <h3>Core Systems:</h3>
            <ul>
              <li><strong>Unity 2D Physics</strong> - Collision detection and trigger-based interactions</li>
              <li><strong>Coroutine Movement</strong> - Smooth grid-based character animation</li>
              <li><strong>Singleton Pattern</strong> - Global game state management (CoinManager, GameManager)</li>
              <li><strong>Component Architecture</strong> - Modular script design for maintainable code</li>
              <li><strong>Animation System</strong> - Unity Animator integration for character states</li>
            </ul>

            <h3>Player Movement System:</h3>
            <div className="code-image">
              <img src="/images/unity-2d-shooter/code-player-input-system.png" alt="Player Input System C# Script" />
            </div>
            
            <div className="code-block">
              <code>
{`// Grid-based movement with collision checking
private void Update()
{
    if (!isMoving)
    {
        input.x = Input.GetAxisRaw("Horizontal");
        input.y = Input.GetAxisRaw("Vertical");

        if (input != Vector2.zero)
        {
            animator.SetFloat("moveX", input.x);
            animator.SetFloat("moveY", input.y);

            var targetPos = transform.position;
            targetPos.x += input.x;
            targetPos.y += input.y;

            if (IsWalkable(targetPos))
                StartCoroutine(Move(targetPos));
        }
    }
    animator.SetBool("isMoving", isMoving);
}`}
              </code>
            </div>
          </section>

          {/* Game Mechanics */}
          <section className="content-section">
            <h2>Game Mechanics</h2>
            
            <h3>Movement & Navigation:</h3>
            <p>The game implements precise grid-based movement using Unity's coroutine system. Characters move smoothly between grid positions while maintaining tactical shooter precision and responsiveness.</p>

            <div className="code-image">
              <img src="/images/unity-2d-shooter/code-move-coroutine-vector3.png" alt="Movement Coroutine Implementation" />
            </div>
            
            <div className="code-block">
              <code>
{`// Smooth coroutine-based movement
IEnumerator Move(Vector3 targetPos)
{
    isMoving = true;
    
    while ((targetPos - transform.position).sqrMagnitude > Mathf.Epsilon)
    {
        transform.position = Vector3.MoveTowards(transform.position, 
                                               targetPos, 
                                               moveSpeed * Time.deltaTime);
        yield return null;
    }
    transform.position = targetPos;
    isMoving = false;
}`}
              </code>
            </div>

            <h3>AI Enemy Behavior:</h3>
            <p>Enemies use target-based AI with collision avoidance and dynamic pathfinding:</p>

            <div className="code-image">
              <img src="/images/unity-2d-shooter/code-enemy-controller-update.png" alt="Enemy Controller Update Method" />
            </div>
            
            <div className="code-block">
              <code>
{`// Enemy AI target tracking
private void Update()
{
    if (target != null)
    {
        Vector2 targetDirection = (target.position - transform.position).normalized;
        animator.SetFloat("moveX", targetDirection.x);
        animator.SetFloat("moveY", targetDirection.y);
        animator.SetBool("isMoving", targetDirection.magnitude > 0.1);
        
        MoveTowardsTarget(targetDirection);
    }
}`}
              </code>
            </div>

            <h3>Collision & Interaction System:</h3>
            <p>The game uses Unity's Physics2D system for precise collision detection:</p>

            <div className="code-image">
              <img src="/images/unity-2d-shooter/code-iswalkable-collision.png" alt="Collision Detection Method" />
            </div>
            
            <div className="code-block">
              <code>
{`// Collision detection for walkable areas
private bool IsWalkable(Vector3 targetPos)
{
    if (Physics2D.OverlapCircle(targetPos, 0.2f, solidObjectLayer) != null)
    {
        return false;
    }
    return true;
}

// Player-Enemy collision handling
private void OnTriggerEnter2D(Collider2D other)
{
    if (other.CompareTag("Enemy"))
    {
        GameManager.isGameOver = true;
    }
}`}
              </code>
            </div>
          </section>

          {/* System Architecture */}
          <section className="content-section">
            <h2>System Architecture</h2>
            
            <h3>Singleton Management:</h3>
            <p>The game uses singleton patterns for global state management:</p>

            <div className="code-image">
              <img src="/images/unity-2d-shooter/code-coin-manager-singleton.png" alt="CoinManager Singleton Implementation" />
            </div>
            
            <div className="code-block">
              <code>
{`// CoinManager singleton implementation
public class CoinManager : MonoBehaviour
{
    public static CoinManager instance;
    public int MaxCoins = 8;
    private int coins;
    [SerializeField] private TMP_Text coinsDisplay;
    
    private void Awake()
    {
        if (instance != null && instance != this)
        {
            Destroy(gameObject);
            return;
        }
        instance = this;
        DontDestroyOnLoad(gameObject);
    }
    
    public void ChangeCoins(int amount)
    {
        Coins += amount;
        if (Coins >= MaxCoins)
        {
            GameOver("You Collected all the coins");
        }
    }
}`}
              </code>
            </div>

            <h3>Scene Management:</h3>
            <p>Custom scene loading system for seamless level transitions:</p>

            <div className="code-image">
              <img src="/images/unity-2d-shooter/code-scene-loader.png" alt="Scene Loader Class" />
            </div>
            
            <div className="code-block">
              <code>
{`// Scene transition system
public class SceneLoader : MonoBehaviour
{
    public GameObject currentCanvas;
    
    public void LoadNextScene(int sceneNumber)
    {
        SceneManager.LoadScene(sceneNumber);
    }
    
    public void toggleCanvas(GameObject nextCanvas)
    {
        nextCanvas.SetActive(true);
        currentCanvas.SetActive(false);
        currentCanvas = nextCanvas;
    }
}`}
              </code>
            </div>
          </section>

          {/* Challenges & Solutions */}
          <section className="content-section">
            <h2>Development Challenges & Solutions</h2>
            
            <h3>Grid-Based Movement Precision:</h3>
            <p><strong>Challenge:</strong> Ensuring characters snap perfectly to grid positions while maintaining smooth movement.</p>
            <p><strong>Solution:</strong> Implemented coroutine-based movement with Vector3.MoveTowards for frame-rate independent smooth transitions and precise endpoint positioning.</p>

            <h3>AI Pathfinding:</h3>
            <p><strong>Challenge:</strong> Creating intelligent enemy movement that feels challenging but fair.</p>
            <p><strong>Solution:</strong> Developed target-tracking AI with collision avoidance using Physics2D.OverlapCircle for obstacle detection and normalized vector calculations for smooth directional movement.</p>

            <h3>State Management:</h3>
            <p><strong>Challenge:</strong> Managing game state across multiple scenes and components.</p>
            <p><strong>Solution:</strong> Implemented singleton pattern for global managers (CoinManager, GameManager) with DontDestroyOnLoad to persist data between scenes.</p>
          </section>

          {/* Technical Highlights */}
          <section className="content-section">
            <h2>Technical Highlights</h2>
            
            <h3>Coin Collection System:</h3>
            <p>Dynamic coin spawning and collection with real-time UI updates:</p>

            <div className="code-image">
              <img src="/images/unity-2d-shooter/code-change-coins-method.png" alt="Coin Collection Implementation" />
            </div>
            
            <div className="code-block">
              <code>
{`// Coin collection trigger
private void OnTriggerEnter2D(Collider2D collision)
{
    if (collision.CompareTag("Player") && !hasTriggered)
    {
        hasTriggered = true;
        CoinManager.instance.ChangeCoins(value);
        Destroy(gameObject);
    }
}

// Coin spawning system
public class CoinSpawner : MonoBehaviour
{
    public GameObject coinPrefab;
    
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.CompareTag("Player"))
        {
            Vector3 randomPosition = new Vector3(Random.Range(-1, 1), 
                                                Random.Range(-1, 1), 0);
            Instantiate(coinPrefab, randomPosition, Quaternion.identity);
        }
    }
}`}
              </code>
            </div>

            <h3>Player Trigger System:</h3>
            <p>Collision detection for game events and interactions:</p>

            <div className="code-image">
              <img src="/images/unity-2d-shooter/code-player-triggers.png" alt="Player Trigger System" />
            </div>

            <h3>Animation Integration:</h3>
            <p>Seamless integration with Unity's Animator system for character states and movement feedback.</p>

            <h3>Physics-Based Interactions:</h3>
            <p>Efficient use of Unity's 2D physics system for collision detection, trigger events, and spatial queries.</p>
          </section>

          {/* Future Enhancements */}
          <section className="content-section">
            <h2>Future Enhancements</h2>
            <p>Planned improvements and additional features for continued development:</p>
            
            <ul>
              <li><strong>Weapon System</strong> - Multiple weapon types with different firing patterns and damage values</li>
              <li><strong>Power-Up System</strong> - Speed boosts, weapon upgrades, and temporary abilities</li>
              <li><strong>Multiple Levels</strong> - Progressive difficulty with unique level layouts and enemy patterns</li>
              <li><strong>Sound System</strong> - Audio feedback for shooting, movement, and ambient music</li>
              <li><strong>Multiplayer Mode</strong> - Local multiplayer support for competitive gameplay</li>
              <li><strong>High Score System</strong> - Player progression tracking and leaderboards</li>
            </ul>
          </section>

          {/* Project Links */}
          <div className="project-links">
            <a href="https://github.com/PJay1994/unity-2d-shooter" className="project-btn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  )
}