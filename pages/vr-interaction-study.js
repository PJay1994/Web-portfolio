import Head from 'next/head'
import Link from 'next/link'

export default function VRInteractionStudy() {
  return (
    <>
      <Head>
        <title>VR Interaction Study - Peter Bidle</title>
        <meta name="description" content="Hand Tracking vs Controllers - Usability & Immersion Research" />
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
          <h1>VR Interaction Study</h1>
          <p className="project-subtitle">Hand Tracking vs Controllers - Usability & Immersion Research</p>
          <div className="tech-stack">
            <span className="tech-tag">Unity</span>
            <span className="tech-tag">C#</span>
            <span className="tech-tag">XR Interaction Toolkit</span>
            <span className="tech-tag">Meta Quest 3</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container">
        <div className="main-content">
          {/* Project Overview */}
          <section className="content-section">
            <h2>Project Overview</h2>
            <p>This research project explores the differences between hand tracking and traditional VR controllers in terms of user experience, immersion, and task completion efficiency. Developed for academic research purposes, the study involved creating multiple VR prototypes and conducting user testing sessions with participants.</p>
            
            <p>The project aimed to understand how different interaction methods affect user behavior in virtual environments, providing valuable insights for future VR application development and user interface design decisions.</p>

            {/* Image Gallery */}
            <div className="image-gallery">
              <div className="gallery-item">
                <div className="gallery-placeholder"><i className="fa-brands fa-meta"></i></div>
                <div className="gallery-caption">VR Environment Setup</div>
              </div>
              <div className="gallery-item">
                <div className="gallery-placeholder"><i className="fa-solid fa-hands"></i></div>
                <div className="gallery-caption">Hand Tracking Interface</div>
              </div>
              <div className="gallery-item">
                <div className="gallery-placeholder"><i className="fa-solid fa-gamepad"></i></div>
                <div className="gallery-caption">Controller Interface</div>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="content-section">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h4>Dual Interaction Systems</h4>
                <p>Implemented both hand tracking and controller-based interaction methods for comparative analysis.</p>
              </div>
              <div className="feature-item">
                <h4>User Testing Framework</h4>
                <p>Built-in data collection and analytics system to track user performance and behavior patterns.</p>
              </div>
              <div className="feature-item">
                <h4>Immersive Environments</h4>
                <p>Created multiple virtual scenarios to test different interaction paradigms and use cases.</p>
              </div>
              <div className="feature-item">
                <h4>Performance Metrics</h4>
                <p>Real-time tracking of completion times, error rates, and user satisfaction scores.</p>
              </div>
            </div>
          </section>

          {/* Technical Implementation */}
          <section className="content-section">
            <h2>Technical Implementation</h2>
            <p>The project was built using Unity's XR Interaction Toolkit, leveraging the Meta Quest 3's advanced hand tracking capabilities alongside traditional controller support.</p>

            <h3>Core Technologies:</h3>
            <ul>
              <li><strong>Unity 2022.3 LTS</strong> - Primary development environment</li>
              <li><strong>XR Interaction Toolkit</strong> - Cross-platform VR interaction framework</li>
              <li><strong>Meta Quest 3 SDK</strong> - Hand tracking and device-specific features</li>
              <li><strong>C# Scripting</strong> - Custom interaction logic and data collection</li>
            </ul>

            <div className="code-block">
              <code>
{`// Example: Hand tracking detection and switching
public class InteractionModeManager : MonoBehaviour
{
    public XRHandTrackingSubsystem handTracking;
    public GameObject handTrackingUI;
    public GameObject controllerUI;
    
    void Update()
    {
        if (handTracking.isRunning && handsAreTracked)
        {
            SwitchToHandTracking();
        }
        else
        {
            SwitchToControllers();
        }
    }
}`}
              </code>
            </div>
          </section>

          {/* Research Findings */}
          <section className="content-section">
            <h2>Research Findings</h2>
            <p>The study revealed several key insights about VR interaction preferences:</p>
            
            <ul>
              <li>Hand tracking showed higher immersion scores but longer task completion times</li>
              <li>Controllers provided more precise input for complex interactions</li>
              <li>User preference varied significantly based on prior VR experience</li>
              <li>Hybrid approaches combining both methods showed promising results</li>
            </ul>

            <p>These findings contribute to the broader understanding of VR user interface design and inform best practices for future VR application development.</p>
          </section>

          {/* Project Links */}
          <div className="project-links">
            <a href="#" className="project-btn">
              <i className="fab fa-github"></i>
              View on GitHub
            </a>
            <a href="#" className="project-btn secondary">
              <i className="fas fa-file-pdf"></i>
              Research Paper
            </a>
          </div>
        </div>
      </div>
    </>
  )
}