import Head from 'next/head'
import Link from 'next/link'

export default function PythonMultiplayer() {
  return (
    <>
      <Head>
        <title>Rock-Paper-Scissors Multiplayer - Peter Bidle</title>
        <meta name="description" content="Networked Python Game with Secure Authentication & Real-Time Play" />
        <link rel="icon" href="/favicon20x20.ico" />
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
          <h1>Rock-Paper-Scissors Multiplayer</h1>
          <p className="project-subtitle">Networked Python Game with Secure Authentication & Real-Time Play</p>
          <div className="tech-stack">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">Sockets</span>
            <span className="tech-tag">bcrypt</span>
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
            <p>A multiplayer implementation of the classic Rock-Paper-Scissors game built with Python's socket programming. The project features secure user authentication, real-time network communication, and robust client-server architecture designed to handle multiple concurrent players.</p>
            
            <p>This project demonstrates advanced networking concepts, security best practices with password hashing, and the implementation of a game protocol that maintains synchronization between multiple clients through a central server.</p>

            {/* Image Gallery */}
            <div className="image-gallery">
              <div className="gallery-item">
                <div className="gallery-placeholder">🐍</div>
                <div className="gallery-caption">Python Server Architecture</div>
              </div>
              <div className="gallery-item">
                <div className="gallery-placeholder">🔐</div>
                <div className="gallery-caption">Secure Login System</div>
              </div>
              <div className="gallery-item">
                <div className="gallery-placeholder">🎮</div>
                <div className="gallery-caption">Game Interface</div>
              </div>
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
                <h4>Client-Server Architecture</h4>
                <p>Robust TCP socket communication handling multiple concurrent connections with threading.</p>
              </div>
              <div className="feature-item">
                <h4>Real-Time Gameplay</h4>
                <p>Synchronized game state between players with instant move validation and result processing.</p>
              </div>
              <div className="feature-item">
                <h4>Session Management</h4>
                <p>Persistent user sessions with reconnection capabilities and game state preservation.</p>
              </div>
              <div className="feature-item">
                <h4>Matchmaking System</h4>
                <p>Automatic player pairing and lobby management for seamless multiplayer experience.</p>
              </div>
              <div className="feature-item">
                <h4>Error Handling</h4>
                <p>Comprehensive error handling for network issues, disconnections, and invalid game states.</p>
              </div>
            </div>
          </section>

          {/* Technical Implementation */}
          <section className="content-section">
            <h2>Technical Implementation</h2>
            <p>The project utilizes Python's built-in socket library for network communication, with additional security provided by the bcrypt library for password hashing and user authentication.</p>

            <h3>Core Technologies:</h3>
            <ul>
              <li><strong>Python Sockets</strong> - TCP/IP network communication</li>
              <li><strong>Threading</strong> - Concurrent client handling on the server</li>
              <li><strong>bcrypt</strong> - Secure password hashing and verification</li>
              <li><strong>JSON Protocol</strong> - Structured message formatting between client and server</li>
              <li><strong>SQLite</strong> - Local user database for authentication</li>
            </ul>

            <div className="code-block">
              <code>
{`# Server-side client handler with secure authentication
import socket
import threading
import bcrypt
import json

class GameServer:
    def __init__(self, host='localhost', port=12345):
        self.host = host
        self.port = port
        self.clients = {}
        self.games = {}
        
    def handle_client(self, client_socket, address):
        try:
            while True:
                message = client_socket.recv(1024).decode('utf-8')
                if message:
                    data = json.loads(message)
                    self.process_message(client_socket, data)
                else:
                    break
        except Exception as e:
            print(f"Error handling client {address}: {e}")
        finally:
            self.disconnect_client(client_socket)
            
    def authenticate_user(self, username, password):
        # Hash password and verify against database
        stored_hash = self.get_user_hash(username)
        return bcrypt.checkpw(password.encode('utf-8'), stored_hash)`}
              </code>
            </div>
          </section>

          {/* Network Architecture */}
          <section className="content-section">
            <h2>Network Architecture</h2>
            <p>The game follows a client-server model with the following communication flow:</p>
            
            <h3>Server Responsibilities:</h3>
            <ul>
              <li><strong>Connection Management</strong> - Accept and manage multiple client connections</li>
              <li><strong>Authentication</strong> - Verify user credentials and maintain sessions</li>
              <li><strong>Game Logic</strong> - Process moves, determine winners, and maintain game state</li>
              <li><strong>Matchmaking</strong> - Pair players and create game instances</li>
              <li><strong>Broadcasting</strong> - Send game updates to all relevant clients</li>
            </ul>

            <h3>Client Responsibilities:</h3>
            <ul>
              <li><strong>User Interface</strong> - Handle player input and display game state</li>
              <li><strong>Network Communication</strong> - Send moves and receive updates from server</li>
              <li><strong>Session Management</strong> - Maintain connection and handle reconnection</li>
              <li><strong>Input Validation</strong> - Ensure valid moves before sending to server</li>
            </ul>
          </section>

          {/* Security Implementation */}
          <section className="content-section">
            <h2>Security Implementation</h2>
            <p>Security was a key consideration in the project design, implementing several measures to protect user data and game integrity:</p>

            <h3>Password Security:</h3>
            <ul>
              <li><strong>bcrypt Hashing</strong> - Industry-standard password hashing with salt</li>
              <li><strong>No Plain Text Storage</strong> - Passwords never stored in readable format</li>
              <li><strong>Secure Transmission</strong> - Hashed passwords sent over network</li>
            </ul>

            <h3>Network Security:</h3>
            <ul>
              <li><strong>Input Validation</strong> - All incoming data validated before processing</li>
              <li><strong>Session Tokens</strong> - Unique identifiers for authenticated sessions</li>
              <li><strong>Connection Limits</strong> - Prevent spam connections and DOS attacks</li>
              <li><strong>Graceful Disconnection</strong> - Proper cleanup when clients disconnect</li>
            </ul>
          </section>

          {/* Future Enhancements */}
          <section className="content-section">
            <h2>Future Enhancements</h2>
            <p>Several improvements could be made to expand the project's functionality:</p>
            
            <ul>
              <li><strong>GUI Interface</strong> - Replace console interface with a graphical user interface using tkinter or pygame</li>
              <li><strong>Tournament Mode</strong> - Support for multi-round tournaments with bracket systems</li>
              <li><strong>Spectator Mode</strong> - Allow users to watch ongoing games without participating</li>
              <li><strong>Statistics Tracking</strong> - Win/loss records, player rankings, and historical data</li>
              <li><strong>Chat System</strong> - In-game messaging between players</li>
              <li><strong>SSL/TLS Encryption</strong> - Encrypted communication for enhanced security</li>
            </ul>
          </section>

          {/* Project Links */}
          <div className="project-links">
            <a href="#" className="project-btn">
              <i className="fab fa-github"></i>
              View on GitHub
            </a>
            <a href="#" className="project-btn secondary">
              <i className="fas fa-download"></i>
              Download Source
            </a>
            <a href="#" className="project-btn secondary">
              <i className="fas fa-book"></i>
              Documentation
            </a>
          </div>
        </div>
      </div>
    </>
  )
}