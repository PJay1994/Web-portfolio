import Head from 'next/head'
import Link from 'next/link'

export default function SelfDrivingCar() {
  return (
    <>
      <Head>
        <title>Self-Driving Car AI - Peter Bidle</title>
        <meta name="description" content="Neural Network-Powered Autonomous Vehicle Simulation" />
        <link rel="icon" href="/favicon.ico" />
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
      <nav>
        <div className="container">
          <Link href="/" className="logo">
            <img src="/logo.svg" alt="Peter Bidle Logo" className="logo-image" />  
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
          <h1>Self-Driving Car AI</h1>
          <p className="project-subtitle">Neural Network-Powered Autonomous Vehicle Simulation</p>
          <div className="tech-stack">
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">Neural Networks</span>
            <span className="tech-tag">HTML5 Canvas</span>
            <span className="tech-tag">Machine Learning</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container">
        <div className="main-content">
          {/* Project Overview */}
          <section className="content-section">
            <h2>Project Overview</h2>
            <p>An advanced self-driving car simulation that uses artificial neural networks to learn autonomous driving behavior. The AI cars navigate through traffic, avoid collisions, and evolve their driving strategies through genetic algorithms and machine learning techniques.</p>
            
            <p>This project demonstrates deep understanding of neural networks, genetic algorithms, collision detection, and real-time AI decision making. The cars learn to drive by processing sensor data and making split-second decisions to navigate safely through complex traffic scenarios.</p>

            {/* Image Gallery */}
            <div className="image-gallery">
              <div className="gallery-item">
                <div className="gallery-placeholder">🚗</div>
                <div className="gallery-caption">AI Car Simulation</div>
              </div>
              <div className="gallery-item">
                <div className="gallery-placeholder">🧠</div>
                <div className="gallery-caption">Neural Network Visualization</div>
              </div>
              <div className="gallery-item">
                <div className="gallery-placeholder">📊</div>
                <div className="gallery-caption">Sensor Data Processing</div>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="content-section">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h4>Neural Network AI</h4>
                <p>Multi-layer neural network with configurable inputs, hidden layers, and outputs for intelligent decision making.</p>
              </div>
              <div className="feature-item">
                <h4>Genetic Algorithm Evolution</h4>
                <p>Population-based learning where successful cars pass their "genes" to the next generation with mutations.</p>
              </div>
              <div className="feature-item">
                <h4>Real-Time Sensor System</h4>
                <p>Ray-casting sensors that detect road boundaries and traffic obstacles for environmental awareness.</p>
              </div>
              <div className="feature-item">
                <h4>Collision Detection</h4>
                <p>Precise polygon-based collision system for realistic interactions between cars and environment.</p>
              </div>
              <div className="feature-item">
                <h4>Traffic Generation</h4>
                <p>Dynamic traffic patterns with dummy cars creating realistic driving scenarios and challenges.</p>
              </div>
              <div className="feature-item">
                <h4>Network Visualization</h4>
                <p>Real-time visualization of neural network activity showing decision-making processes.</p>
              </div>
            </div>
          </section>

          {/* Technical Implementation */}
          <section className="content-section">
            <h2>Technical Implementation</h2>
            <p>Built entirely in vanilla JavaScript using HTML5 Canvas for real-time graphics rendering and custom neural network implementation from scratch.</p>

            <h3>Core Systems:</h3>
            <ul>
              <li><strong>Neural Network</strong> - Custom implementation with feedforward propagation and bias systems</li>
              <li><strong>Genetic Algorithm</strong> - Mutation and selection mechanisms for evolutionary learning</li>
              <li><strong>Physics Engine</strong> - Realistic car movement with acceleration, friction, and steering</li>
              <li><strong>Sensor System</strong> - Ray-casting for environment detection and obstacle avoidance</li>
              <li><strong>Canvas Rendering</strong> - High-performance 2D graphics with smooth animations</li>
            </ul>

            <div className="code-block">
              <code>
{`// Neural Network Implementation
class NeuralNetwork {
    constructor(neuronCounts) {
        this.levels = [];
        for (let i = 0; i < neuronCounts.length - 1; i++) {
            this.levels.push(new Level(
                neuronCounts[i], neuronCounts[i + 1]
            ));
        }
    }

    static feedForward(givenInputs, network) {
        let outputs = Level.feedForward(
            givenInputs, network.levels[0]);
        for (let i = 1; i < network.levels.length; i++) {
            outputs = Level.feedForward(
            outputs, network.levels[i]);
        }
        return outputs;
    }

    static mutate(network, amount = 1) {
        network.levels.forEach(level => {
            for (let i = 0; i < level.biases.length; i++) {
                level.biases[i] = lerp(
                    level.biases[i],
                    Math.random() * 2 - 1,
                    amount
                )
            }
        });
    }
}`}
              </code>
            </div>
          </section>

          {/* AI Learning Process */}
          <section className="content-section">
            <h2>AI Learning Process</h2>
            <p>The self-driving cars use a sophisticated learning approach combining neural networks with evolutionary algorithms:</p>
            
            <h3>Sensor Input Processing:</h3>
            <ul>
              <li><strong>Ray Casting</strong> - 10 sensors detect distances to obstacles and road boundaries</li>
              <li><strong>Normalization</strong> - Sensor data converted to 0-1 range for neural network input</li>
              <li><strong>Real-time Processing</strong> - Continuous sensor updates for dynamic decision making</li>
            </ul>

            <h3>Neural Network Architecture:</h3>
            <ul>
              <li><strong>Input Layer</strong> - 10 neurons (one for each sensor)</li>
              <li><strong>Hidden Layers</strong> - Configurable layers for complex pattern recognition</li>
              <li><strong>Output Layer</strong> - 4 neurons (forward, left, right, reverse controls)</li>
              <li><strong>Activation Function</strong> - Binary threshold activation for clear decisions</li>
            </ul>

            <h3>Evolutionary Learning:</h3>
            <ul>
              <li><strong>Population</strong> - 300 AI cars learning simultaneously</li>
              <li><strong>Fitness Function</strong> - Distance traveled without collision</li>
              <li><strong>Selection</strong> - Best performing car becomes the "parent" for next generation</li>
              <li><strong>Mutation</strong> - Random variations in neural network weights and biases</li>
            </ul>
          </section>

          {/* Challenges & Solutions */}
          <section className="content-section">
            <h2>Challenges & Solutions</h2>
            
            <h3>Neural Network Optimization:</h3>
            <p><strong>Challenge:</strong> Finding the right network architecture and learning parameters.</p>
            <p><strong>Solution:</strong> Implemented configurable network layers and mutation rates, allowing experimentation with different configurations to find optimal performance.</p>

            <h3>Real-Time Performance:</h3>
            <p><strong>Challenge:</strong> Running 300+ AI cars simultaneously without frame rate drops.</p>
            <p><strong>Solution:</strong> Optimized collision detection algorithms and efficient canvas rendering techniques to maintain smooth 60fps performance.</p>

            <h3>Learning Convergence:</h3>
            <p><strong>Challenge:</strong> Preventing AI from getting stuck in local optima.</p>
            <p><strong>Solution:</strong> Implemented mutation mechanisms and diverse traffic patterns to encourage exploration of different driving strategies.</p>
          </section>

          {/* Features & Controls */}
          <section className="content-section">
            <h2>Interactive Features</h2>
            <p>The simulation includes several interactive elements for experimentation and analysis:</p>
            
            <ul>
              <li><strong>Save/Load System</strong> - Preserve best performing neural networks for future sessions</li>
              <li><strong>Real-time Visualization</strong> - Watch neural network decisions being made in real-time</li>
              <li><strong>Population Management</strong> - Control the number of AI cars learning simultaneously</li>
              <li><strong>Traffic Patterns</strong> - Configurable traffic density and behavior for varied challenges</li>
              <li><strong>Network Inspection</strong> - Visual representation of active neurons and connections</li>
            </ul>
          </section>

          {/* Project Links */}
          <div className="project-links">
            <a href="https://github.com/PJay1994/ML-Self-Driving-Car" className="project-btn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
              View on GitHub
            </a>
            <a href="https://github.com/PJay1994/self-driving-car-ai/archive/main.zip" className="project-btn secondary" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-download"></i>
              Download Source
            </a>
          </div>
        </div>
      </div>
    </>
  )
}