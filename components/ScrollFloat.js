// components/ScrollFloat.js
import { useEffect, useRef } from 'react'

export default function ScrollFloat({ 
  children, 
  animationDuration = 0.8,
  ease = "power2.out",
  scrollStart = "top 80%",
  stagger = 0.02 
}) {
  const elementRef = useRef(null)

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    // Import GSAP dynamically to avoid SSR issues
    import('gsap').then((gsap) => {
      import('gsap/ScrollTrigger').then((ScrollTrigger) => {
        gsap.default.registerPlugin(ScrollTrigger.default)

        const element = elementRef.current
        if (!element) return

        // Get the original text content
        const text = element.textContent
        
        // Split text into individual characters while preserving all styling
        element.innerHTML = text
          .split('')
          .map((char, i) => 
            char === ' ' 
              ? `<span style="display: inline-block;">&nbsp;</span>`
              : `<span style="display: inline-block; transform: translateY(60px); opacity: 0;">${char}</span>`
          )
          .join('')

        const chars = element.querySelectorAll('span')

        // Animate characters floating up
        gsap.default.fromTo(
          chars,
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: animationDuration,
            ease: ease,
            stagger: stagger,
            scrollTrigger: {
              trigger: element,
              start: scrollStart,
              toggleActions: "play none none reverse",
            },
          }
        )

        // Cleanup function
        return () => {
          ScrollTrigger.default.getAll().forEach(trigger => trigger.kill())
        }
      })
    })
  }, [animationDuration, ease, scrollStart, stagger])

  return (
    // This div inherits ALL the h2 styling from your CSS
    <h2 
      ref={elementRef} 
      style={{ 
        overflow: 'hidden',
        margin: 0, // Let CSS handle margins
        padding: 0, // Let CSS handle padding
        marginBottom: '80px', // Bigger bottom margin
      }}
    >
      {children}
    </h2>
  )
}