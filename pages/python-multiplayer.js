import Head from 'next/head'
import Link from 'next/link'
import MobileNavigation from '../components/MobileNavigation'

export default function PythonMultiplayer() {
  return (
    <>
      <Head>
        <title>Rock-Paper-Scissors Multiplayer - Peter Bidle</title>
        <meta name="description" content="Networked Python Game with Secure Authentication & Real-Time Play" />
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
          <h1>Rock-Paper-Scissors Multiplayer</h1>
          <p className="project-subtitle">Networked Python Game with Secure Authentication & Real-Time Play</p>
          <div className="tech-stack">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">Sockets</span>
            <span className="tech-tag">bcrypt</span>
            <span className="tech-tag">Pygame</span>
            <span className="tech-tag">Threading</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container">
        <div className="main-content">
          {/* Project Overview */}
          <section className="content-section">
            <h2>Project Overview</h2>
            <p>A multiplayer implementation of the classic Rock-Paper-Scissors game built with Python's socket programming and Pygame for the graphical interface. The project features secure user authentication, real-time network communication, and robust client-server architecture designed to handle multiple concurrent players.</p>
            
            <p>This project demonstrates advanced networking concepts, security best practices with password hashing, and the implementation of a game protocol that maintains synchronization between multiple clients through a central server with an intuitive GUI interface.</p>

            {/* Game Interface Screenshots */}
            <div className="image-gallery">
              <div className="gallery-item">
                <div className="code-image">
                  <img src="/images/python-multiplayer/rps-game-interface-main.png" alt="Rock Paper Scissors Game Interface" />
                </div>
                <div className="gallery-caption">Main Game Interface - Player Move Selection</div>
              </div>
              <div className="gallery-item">
                <div className="code-image">
                  <img src="/images/python-multiplayer/rps-multiplayer-gameplay.png" alt="Multiplayer Gameplay Session" />
                </div>
                <div className="gallery-caption">Live Multiplayer Session - Two Players Connected</div>
              </div>
              <div className="gallery-item">
                <div className="code-image">
                  <img src="/images/python-multiplayer/rps-game-results.png" alt="Game Results Display" />
                </div>
                <div className="gallery-caption">Game Results - Win/Loss/Tie Outcomes</div>
              </div>
            </div>
          </section>

          {/* Authentication System */}
          <section className="content-section">
            <h2>Secure Authentication System</h2>
            <p>The game implements a comprehensive user authentication system with secure password handling and session management:</p>

            <h3>User Registration & Login:</h3>
            <div className="code-image">
              <img src="/images/python-multiplayer/rps-terminal-registration.png" alt="Terminal Registration Process" />
            </div>

            <h3>Authentication Features:</h3>
            <ul>
              <li><strong>User Registration:</strong> New users can create accounts with username and password</li>
              <li><strong>Secure Login:</strong> bcrypt password hashing for enhanced security</li>
              <li><strong>Session Management:</strong> Persistent user sessions with reconnection capabilities</li>
              <li><strong>Login Validation:</strong> Proper error handling for failed authentication attempts</li>
              <li><strong>Multi-User Support:</strong> Concurrent user registration and login handling</li>
            </ul>

            <h3>Terminal-Based Interface:</h3>
            <div className="code-image">
              <img src="/images/python-multiplayer/rps-terminal-login.png" alt="Terminal Login Interface" />
            </div>

            <div className="code-image">
              <img src="/images/python-multiplayer/rps-successful-login.png" alt="Successful Login Process" />
            </div>
          </section>

          {/* Key Features */}
          <section className="content-section">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h4>Secure Authentication</h4>
                <p>User registration and login system with bcrypt password hashing for enhanced security.</p>
              </div>
              <div className="feature-item">
                <h4>Pygame GUI Interface</h4>
                <p>Intuitive graphical user interface built with Pygame for smooth gameplay experience.</p>
              </div>
              <div className="feature-item">
                <h4>Real-Time Multiplayer</h4>
                <p>Synchronized game state between players with instant move validation and result processing.</p>
              </div>
              <div className="feature-item">
                <h4>Client-Server Architecture</h4>
                <p>Robust TCP socket communication handling multiple concurrent connections with threading.</p>
              </div>
              <div className="feature-item">
                <h4>Game State Management</h4>
                <p>Comprehensive tracking of player moves, wins, losses, and tie games with visual feedback.</p>
              </div>
              <div className="feature-item">
                <h4>Cross-Platform Compatibility</h4>
                <p>Works on Windows, macOS, and Linux with consistent gameplay experience.</p>
              </div>
            </div>
          </section>

          {/* Technical Implementation */}
          <section className="content-section">
            <h2>Technical Implementation</h2>
            <p>The project utilizes Python's built-in socket library for network communication, Pygame for the graphical interface, and bcrypt for secure password hashing and user authentication.</p>

            <h3>Core Technologies:</h3>
            <ul>
              <li><strong>Python Sockets</strong> - TCP/IP network communication and client-server architecture</li>
              <li><strong>Pygame</strong> - Cross-platform graphics and user interface framework</li>
              <li><strong>Threading</strong> - Concurrent client handling and non-blocking server operations</li>
              <li><strong>bcrypt</strong> - Secure password hashing and verification system</li>
              <li><strong>JSON Protocol</strong> - Structured message formatting between client and server</li>
            </ul>

            <h3>Database & User Management:</h3>
            <div className="code-image">
              <img src="/images/python-multiplayer/rps-user-database.png" alt="User Database JSON Structure" />
            </div>

            <div className="code-block">
              <code>
{`# User database structure with secure password hashing
{
    "pjay": "$2b$12$IiI9AUBM61Hv6e38fDtYyjuO8v63jXZdK2FWaSHZIjCFGnKKXtmGy",
    "jenny": "$2b$12$HduIR7wIb/GsuQiYhJStY.yIK3tOpRTCX0jOiJ5eeVZXGr2XuzU40Q6"
}

# Server-side authentication handling
def authenticate_user(username, password):
    with open('users.json', 'r') as f:
        users = json.load(f)
    
    if username in users:
        stored_hash = users[username].encode('utf-8')
        return bcrypt.checkpw(password.encode('utf-8'), stored_hash)
    return False

def register_user(username, password):
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    
    with open('users.json', 'r+') as f:
        users = json.load(f)
        users[username] = hashed_password.decode('utf-8')
        f.seek(0)
        json.dump(users, f, indent=4)
        f.truncate()`}
              </code>
            </div>
          </section>

          {/* Game Logic Implementation */}
          <section className="content-section">
            <h2>Game Logic & UI Implementation</h2>
            <p>The Pygame interface provides an intuitive and responsive user experience with clear visual feedback:</p>

            <h3>UI Color Scheme & Visual Design:</h3>
            <div className="code-image">
              <img src="/images/python-multiplayer/rps-ui-color-scheme.png" alt="UI Color Scheme Implementation" />
            </div>

            <h3>Game Result Display System:</h3>
            <div className="code-image">
              <img src="/images/python-multiplayer/rps-game-result-logic.png" alt="Game Result Logic Implementation" />
            </div>

            <div className="code-block">
              <code>
{`# Game logic and result display implementation
if (game.winner() == 1 and p == 1) or (game.winner() == 0 and p == 0):
    text = font.render("You Won!", 1, (0, 255, 0))  # Green for win
elif game.winner() == -1:
    text = font.render("Tie Game!", 1, (0, 0, 0))   # Black for tie
else:
    text = font.render("You Lost...", 1, (255, 0, 0))  # Red for loss

# Button creation for game choices
btns = [Button("Rock", 25, 250, (128, 128, 128)),     # Gray
        Button("Scissors", 125, 250, (255, 0, 0)),    # Red  
        Button("Paper", 225, 250, (0, 255, 0))]       # Green

# UI text display with proper positioning
font = pygame.font.SysFont("AvantGarde", 30)
text = font.render("Your Move", 1, (0, 155, 255))    # Blue headers
win.blit(text, (30, 100))

text = font.render("Opponents", 1, (0, 155, 255))
win.blit(text, (200, 100))`}
              </code>
            </div>

            <h3>Button Interaction System:</h3>
            <div className="code-image">
              <img src="/images/python-multiplayer/rps-button-system.png" alt="Button System Implementation" />
            </div>
          </section>

          {/* Multiplayer Gameplay */}
          <section className="content-section">
            <h2>Multiplayer Gameplay Experience</h2>
            <p>The game supports real-time multiplayer interaction with smooth synchronization and immediate feedback:</p>

            <h3>Gameplay Flow:</h3>
            <div className="code-image">
              <img src="/images/python-multiplayer/rps-waiting-for-players.png" alt="Waiting for Players Interface" />
            </div>

            <h3>Game Features:</h3>
            <ul>
              <li><strong>Player Matching:</strong> Automatic pairing of players waiting in the lobby</li>
              <li><strong>Move Selection:</strong> Intuitive button-based interface for Rock, Paper, Scissors</li>
              <li><strong>Real-time Feedback:</strong> Immediate display of both player moves and results</li>
              <li><strong>Game Continuation:</strong> Seamless transition between rounds for continued play</li>
              <li><strong>Win/Loss Tracking:</strong> Visual indication of game outcomes with color coding</li>
            </ul>

            <h3>Synchronized Game States:</h3>
            <div className="code-image">
              <img src="/images/python-multiplayer/rps-synchronized-gameplay.png" alt="Synchronized Multiplayer Gameplay" />
            </div>

            <div className="code-image">
              <img src="/images/python-multiplayer/rps-tie-game-example.png" alt="Tie Game Example" />
            </div>
          </section>

          {/* Network Architecture */}
          <section className="content-section">
            <h2>Network Architecture</h2>
            <p>The game follows a client-server model with the following communication flow:</p>
            
            <h3>Server Responsibilities:</h3>
            <ul>
              <li><strong>Connection Management</strong> - Accept and manage multiple client connections</li>
              <li><strong>Authentication</strong> - Verify user credentials and maintain secure sessions</li>
              <li><strong>Game Logic</strong> - Process moves, determine winners, and maintain game state</li>
              <li><strong>Player Matching</strong> - Pair players and create game instances</li>
              <li><strong>State Synchronization</strong> - Ensure consistent game state across all clients</li>
            </ul>

            <h3>Client Responsibilities:</h3>
            <ul>
              <li><strong>User Interface</strong> - Handle player input and display game state with Pygame</li>
              <li><strong>Network Communication</strong> - Send moves and receive updates from server</li>
              <li><strong>Session Management</strong> - Maintain connection and handle reconnection scenarios</li>
              <li><strong>Input Validation</strong> - Ensure valid moves before sending to server</li>
              <li><strong>Visual Feedback</strong> - Provide immediate response to user interactions</li>
            </ul>

            <div className="code-block">
              <code>
{`# Client-server communication structure
class GameClient:
    def __init__(self):
        self.socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.server_ip = "localhost"
        self.port = 5555
        
    def connect(self):
        try:
            self.socket.connect((self.server_ip, self.port))
            return self.socket.recv(2048).decode()
        except:
            return None
            
    def send_move(self, move):
        try:
            self.socket.send(str.encode(move))
            return self.socket.recv(2048).decode()
        except socket.error as e:
            print(f"Socket error: {e}")
            return None

# Server handling multiple clients
def threaded_client(conn, player_id):
    conn.send(str.encode(f"Connected as Player {player_id}"))
    
    while True:
        try:
            data = conn.recv(4096).decode()
            if not data:
                break
                
            # Process player move and update game state
            games[game_id].update_move(player_id, data)
            
            if games[game_id].both_players_moved():
                result = games[game_id].get_result()
                conn.sendall(str.encode(result))
                
        except Exception as e:
            print(f"Error: {e}")
            break
    
    conn.close()`}
              </code>
            </div>
          </section>

          {/* Security Implementation */}
          <section className="content-section">
            <h2>Security Implementation</h2>
            <p>Security was a key consideration in the project design, implementing several measures to protect user data and game integrity:</p>

            <h3>Password Security:</h3>
            <ul>
              <li><strong>bcrypt Hashing</strong> - Industry-standard password hashing with automatic salt generation</li>
              <li><strong>No Plain Text Storage</strong> - Passwords never stored in readable format</li>
              <li><strong>Secure Transmission</strong> - Password verification handled server-side</li>
              <li><strong>Registration Validation</strong> - Username uniqueness checking and password requirements</li>
            </ul>

            <h3>Network Security:</h3>
            <ul>
              <li><strong>Input Validation</strong> - All incoming data validated before processing</li>
              <li><strong>Session Management</strong> - Secure player identification and game state isolation</li>
              <li><strong>Connection Limits</strong> - Prevent spam connections and resource exhaustion</li>
              <li><strong>Graceful Error Handling</strong> - Proper cleanup when clients disconnect unexpectedly</li>
            </ul>
          </section>

          {/* Development Challenges */}
          <section className="content-section">
            <h2>Development Challenges & Solutions</h2>
            
            <h3>Pygame Threading Integration:</h3>
            <p><strong>Challenge:</strong> Integrating Pygame's main loop with network communication without blocking.</p>
            <p><strong>Solution:</strong> Implemented non-blocking socket operations and proper threading to maintain smooth GUI responsiveness while handling network events.</p>

            <h3>State Synchronization:</h3>
            <p><strong>Challenge:</strong> Ensuring both players see consistent game state and moves simultaneously.</p>
            <p><strong>Solution:</strong> Developed a robust game state management system with server-side validation and synchronized message broadcasting.</p>

            <h3>Connection Management:</h3>
            <p><strong>Challenge:</strong> Handling player disconnections gracefully without breaking ongoing games.</p>
            <p><strong>Solution:</strong> Implemented comprehensive error handling with automatic cleanup and game state preservation for reconnection scenarios.</p>

            <h3>Cross-Platform Compatibility:</h3>
            <p><strong>Challenge:</strong> Ensuring consistent gameplay experience across different operating systems.</p>
            <p><strong>Solution:</strong> Used Python's cross-platform libraries and tested extensively on Windows, macOS, and Linux systems.</p>
          </section>

          {/* Future Enhancements */}
          <section className="content-section">
            <h2>Future Enhancements</h2>
            <p>Several improvements could be made to expand the project's functionality and user experience:</p>
            
            <ul>
              <li><strong>Tournament Mode</strong> - Support for multi-round tournaments with bracket systems and leaderboards</li>
              <li><strong>Spectator Mode</strong> - Allow users to watch ongoing games without participating</li>
              <li><strong>Statistics Tracking</strong> - Comprehensive win/loss records, player rankings, and historical data</li>
              <li><strong>Chat System</strong> - In-game messaging between players for social interaction</li>
              <li><strong>Custom Game Variants</strong> - Rock-Paper-Scissors-Lizard-Spock and other variations</li>
              <li><strong>SSL/TLS Encryption</strong> - Encrypted communication for enhanced network security</li>
              <li><strong>Replay System</strong> - Save and review previous games with move history</li>
              <li><strong>Mobile Client</strong> - Cross-platform mobile app using Kivy or similar framework</li>
            </ul>
          </section>

          {/* Project Links */}
          <div className="project-links">
            <a href="https://github.com/PJay1994/RPS-Login" className="project-btn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  )
}