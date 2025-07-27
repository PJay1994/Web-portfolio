import Head from 'next/head'
import Link from 'next/link'
import MobileNavigation from '../components/MobileNavigation'

export default function VRInteractionStudy() {
  return (
    <>
      <Head>
        <title>VR Interaction Study - Peter Bidle</title>
        <meta name="description" content="Hand Tracking vs Controllers - Usability & Immersion Research" />
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

            {/* VR Environment Screenshots */}
            <div className="image-gallery">
              <div className="gallery-item">
                <div className="code-image">
                  <img src="/images/vr-interaction-study/vr-hand-tracking-environment.png" alt="VR Hand Tracking Environment" />
                </div>
                <div className="gallery-caption">VR Environment - Hand Tracking Interaction Mode</div>
              </div>
              <div className="gallery-item">
                <div className="code-image">
                  <img src="/images/vr-interaction-study/vr-controller-environment.png" alt="VR Controller Environment" />
                </div>
                <div className="gallery-caption">VR Environment - Controller-Based Interaction Mode</div>
              </div>
              <div className="gallery-item">
                <div className="code-image">
                  <img src="/images/vr-interaction-study/vr-laboratory-testing-environment.png" alt="VR Lab Testing Environment" />
                </div>
                <div className="gallery-caption">Immersive Laboratory Setting for User Testing</div>
              </div>
            </div>
          </section>

          {/* Research Findings */}
          <section className="content-section">
            <h2>Research Findings</h2>
            <p>The study collected comprehensive data from multiple participants across different age groups and VR experience levels, revealing significant insights about interaction preferences and performance metrics.</p>

            <h3>Performance Metrics Analysis:</h3>
            <div className="code-image">
              <img src="/images/vr-interaction-study/task-performance-comparison-chart.png" alt="Task Performance and Error Rate Comparison" />
            </div>

            <h3>Key Performance Insights:</h3>
            <ul>
              <li><strong>Task Completion Time:</strong> Hand tracking showed longer average completion times (14.5s) compared to controllers (12.3s)</li>
              <li><strong>Error Rates:</strong> Hand tracking had higher error rates (4.1) versus controllers (1.7)</li>
              <li><strong>Learning Curve:</strong> Controllers demonstrated faster initial adoption for complex interactions</li>
              <li><strong>Precision Tasks:</strong> Controllers provided superior accuracy for fine motor control tasks</li>
            </ul>

            <h3>Usability and Immersion Analysis:</h3>
            <div className="code-image">
              <img src="/images/vr-interaction-study/usability-immersion-scores-chart.png" alt="Usability and Immersion Scores by Interaction Method" />
            </div>

            <h3>User Experience Findings:</h3>
            <ul>
              <li><strong>Immersion Scores:</strong> Hand tracking received slightly higher immersion ratings (GEQ scores)</li>
              <li><strong>Usability (SUS):</strong> Controllers scored significantly higher in usability assessments</li>
              <li><strong>User Preference:</strong> 65% of participants preferred controllers for task-based activities</li>
              <li><strong>Natural Interaction:</strong> Hand tracking was favored for exploratory and casual interactions</li>
            </ul>
          </section>

          {/* Key Features */}
          <section className="content-section">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h4>Dual Interaction Systems</h4>
                <p>Seamlessly implemented both hand tracking and controller-based interaction methods for direct comparison.</p>
              </div>
              <div className="feature-item">
                <h4>Data Collection Framework</h4>
                <p>Built-in analytics system tracking completion times, error rates, and user behavior patterns in real-time.</p>
              </div>
              <div className="feature-item">
                <h4>Immersive Test Environments</h4>
                <p>Multiple virtual scenarios designed to test different interaction paradigms and use cases.</p>
              </div>
              <div className="feature-item">
                <h4>Performance Metrics</h4>
                <p>Comprehensive tracking of task completion times, error rates, and standardized usability scores (SUS, GEQ).</p>
              </div>
              <div className="feature-item">
                <h4>Cross-Platform Compatibility</h4>
                <p>Developed for Meta Quest 3 with scalable architecture for other VR platforms.</p>
              </div>
              <div className="feature-item">
                <h4>Research Methodology</h4>
                <p>Structured user studies with standardized testing protocols and statistical analysis.</p>
              </div>
            </div>
          </section>

          {/* Technical Implementation */}
          <section className="content-section">
            <h2>Technical Implementation</h2>
            <p>The project was built using Unity's XR Interaction Toolkit, leveraging the Meta Quest 3's advanced hand tracking capabilities alongside traditional controller support for comprehensive comparative analysis.</p>

            <h3>Unity Development Environment:</h3>
            <div className="code-image">
              <img src="/images/vr-interaction-study/vr-futuristic-lab-setting.png" alt="Unity VR Development Scene" />
            </div>

            <h3>Core Technologies:</h3>
            <ul>
              <li><strong>Unity 2022.3 LTS</strong> - Primary development environment with XR support</li>
              <li><strong>XR Interaction Toolkit</strong> - Cross-platform VR interaction framework</li>
              <li><strong>Meta Quest 3 SDK</strong> - Hand tracking and device-specific optimization</li>
              <li><strong>C# Scripting</strong> - Custom interaction logic and data collection systems</li>
              <li><strong>Unity Analytics</strong> - Real-time performance tracking and data visualization</li>
            </ul>

            <h3>Hand Tracking Integration:</h3>
            <div className="code-image">
              <img src="/images/vr-interaction-study/Screenshot 2025-05-12 160231.png" alt="Unity Hand Tracking Setup and Particle Systems" />
            </div>

            <div className="code-block">
              <code>
{`// Hand tracking detection and interaction mode switching
public class InteractionModeManager : MonoBehaviour
{
    public XRHandTrackingSubsystem handTracking;
    public GameObject handTrackingUI;
    public GameObject controllerUI;
    public ParticleSystem feedbackParticles;
    
    private bool handsAreTracked = false;
    private DataCollectionManager dataManager;
    
    void Update()
    {
        CheckHandTrackingStatus();
        UpdateInteractionMode();
        LogInteractionData();
    }
    
    void CheckHandTrackingStatus()
    {
        if (handTracking.isRunning)
        {
            handsAreTracked = AreHandsVisible();
            if (handsAreTracked && !IsControllerActive())
            {
                SwitchToHandTracking();
            }
        }
        else if (IsControllerActive())
        {
            SwitchToControllers();
        }
    }
    
    void SwitchToHandTracking()
    {
        handTrackingUI.SetActive(true);
        controllerUI.SetActive(false);
        dataManager.LogModeSwitch("HandTracking", Time.time);
        feedbackParticles.Play();
    }
}`}
              </code>
            </div>
          </section>

          {/* VR Environment Design */}
          <section className="content-section">
            <h2>VR Environment Design</h2>
            <p>The research environments were carefully designed to provide controlled testing conditions while maintaining high immersion levels for accurate user behavior assessment.</p>

            <h3>Laboratory Environment:</h3>
            <div className="code-image">
              <img src="/images/vr-interaction-study/vr-laboratory-testing-environment.png" alt="VR Laboratory Testing Environment" />
            </div>

            <h3>Environment Features:</h3>
            <ul>
              <li><strong>Modular Design</strong> - Interchangeable test scenarios for different interaction types</li>
              <li><strong>Visual Feedback Systems</strong> - Real-time indication of successful interactions</li>
              <li><strong>Consistent Lighting</strong> - Optimal conditions for hand tracking accuracy</li>
              <li><strong>Spatial Audio</strong> - 3D audio cues for enhanced immersion and guidance</li>
              <li><strong>Comfort Settings</strong> - Adjustable movement options to prevent motion sickness</li>
            </ul>

            <h3>Interaction Testing Scenarios:</h3>
            <ul>
              <li><strong>Object Manipulation</strong> - Precise grabbing and placement tasks</li>
              <li><strong>UI Interaction</strong> - Button pressing and menu navigation</li>
              <li><strong>Gesture Recognition</strong> - Custom hand gesture detection and response</li>
              <li><strong>Multi-Object Tasks</strong> - Complex scenarios requiring multiple interactions</li>
              <li><strong>Distance Interaction</strong> - Ray-casting and remote object manipulation</li>
            </ul>
          </section>

          {/* Research Methodology */}
          <section className="content-section">
            <h2>Research Methodology</h2>
            <p>The study employed a within-subjects design where each participant experienced both interaction methods, ensuring robust comparative data while controlling for individual differences.</p>

            <h3>Study Design:</h3>
            <ul>
              <li><strong>Participants:</strong> 24 participants (ages 18-45) with varying VR experience levels</li>
              <li><strong>Session Duration:</strong> 45-60 minutes per participant including setup and questionnaires</li>
              <li><strong>Task Types:</strong> 6 standardized interaction tasks repeated for both modalities</li>
              <li><strong>Counterbalancing:</strong> Order of interaction methods randomized to prevent learning effects</li>
              <li><strong>Data Collection:</strong> Automated logging of all interactions with timestamp precision</li>
            </ul>

            <h3>Metrics Collected:</h3>
            <ul>
              <li><strong>Objective Measures:</strong> Task completion time, error count, interaction accuracy</li>
              <li><strong>Subjective Measures:</strong> System Usability Scale (SUS), Game Experience Questionnaire (GEQ)</li>
              <li><strong>Behavioral Data:</strong> Movement patterns, gesture recognition confidence scores</li>
              <li><strong>Preference Data:</strong> Post-session interviews and preference rankings</li>
            </ul>
          </section>

          {/* Results & Implications */}
          <section className="content-section">
            <h2>Results & Implications</h2>
            
            <h3>Statistical Findings:</h3>
            <ul>
              <li><strong>Task Efficiency:</strong> Controllers showed 15% faster completion times (p &lt; 0.05)</li>
              <li><strong>Error Reduction:</strong> Controllers had 58% fewer interaction errors (p &lt; 0.01)</li>
              <li><strong>Usability Rating:</strong> Controllers scored 14 points higher on SUS scale (82 vs 68)</li>
              <li><strong>Immersion Paradox:</strong> Hand tracking rated higher for "naturalness" despite lower performance</li>
            </ul>

            <h3>Design Implications:</h3>
            <ul>
              <li><strong>Context-Dependent Choice:</strong> Interaction method should match application type</li>
              <li><strong>Hybrid Approaches:</strong> Combining both methods could optimize user experience</li>
              <li><strong>Learning Considerations:</strong> Hand tracking requires longer adaptation periods</li>
              <li><strong>Accessibility:</strong> Controllers provide more reliable interaction for users with motor limitations</li>
            </ul>

            <h3>Future VR Development:</h3>
            <ul>
              <li><strong>Adaptive Interfaces:</strong> Systems that switch between modalities based on task type</li>
              <li><strong>Improved Hand Tracking:</strong> Better gesture recognition could close the performance gap</li>
              <li><strong>Training Protocols:</strong> Structured onboarding for hand tracking proficiency</li>
              <li><strong>Multimodal Feedback:</strong> Enhanced haptic and audio cues for hand tracking</li>
            </ul>
          </section>

          {/* Technical Challenges */}
          <section className="content-section">
            <h2>Development Challenges & Solutions</h2>
            
            <h3>Hand Tracking Calibration:</h3>
            <p><strong>Challenge:</strong> Ensuring consistent hand tracking accuracy across different users and lighting conditions.</p>
            <p><strong>Solution:</strong> Implemented adaptive calibration routines and multiple fallback interaction methods for tracking failures.</p>

            <h3>Data Collection Precision:</h3>
            <p><strong>Challenge:</strong> Capturing precise interaction timing and gesture recognition confidence scores.</p>
            <p><strong>Solution:</strong> Developed custom analytics framework with millisecond-precision logging and automated data validation.</p>

            <h3>Cross-Modal Consistency:</h3>
            <p><strong>Challenge:</strong> Ensuring equivalent task difficulty across hand tracking and controller modalities.</p>
            <p><strong>Solution:</strong> Extensive pilot testing and iterative design refinement to balance interaction complexity.</p>

            <h3>User Comfort & Fatigue:</h3>
            <p><strong>Challenge:</strong> Managing user fatigue during extended testing sessions.</p>
            <p><strong>Solution:</strong> Implemented adaptive break scheduling and comfort monitoring with session time limits.</p>
          </section>

          {/* Future Research */}
          <section className="content-section">
            <h2>Future Research Directions</h2>
            <p>This study opens several avenues for continued research in VR interaction design and user experience optimization.</p>
            
            <ul>
              <li><strong>Longitudinal Studies:</strong> Investigating long-term adaptation to hand tracking interfaces</li>
              <li><strong>Task Complexity Analysis:</strong> How interaction preferences change with task complexity</li>
              <li><strong>Age Group Differences:</strong> Comparing interaction preferences across different age demographics</li>
              <li><strong>Accessibility Research:</strong> VR interaction design for users with different motor abilities</li>
              <li><strong>Hybrid Interaction Models:</strong> Developing systems that intelligently combine both modalities</li>
              <li><strong>Cross-Platform Validation:</strong> Replicating findings across different VR hardware platforms</li>
            </ul>
          </section>

          {/* Project Links */}
          <div className="project-links">
            <a href="https://github.com/PJay1994/Dissertation-VR-Handtracking-VS-controller" className="project-btn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
              View on GitHub
            </a>
            <a href="https://github.com/PJay1994/Dissertation-VR-Handtracking-VS-controller/tree/main#readmeS" className="project-btn secondary" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-file-pdf"></i>
              Research Paper
            </a>
          </div>
        </div>
      </div>
    </>
  )
}