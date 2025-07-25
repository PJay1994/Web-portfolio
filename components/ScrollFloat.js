// components/ScrollFloat.js
import { useEffect, useRef } from 'react'

export default function ScrollFloat({ children }) {
  const elementRef = useRef(null)

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    const element = elementRef.current
    if (!element) return

    // Simple intersection observer for fade-in effect
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div 
      ref={elementRef}
      style={{
        opacity: 0,
        transform: 'translateY(30px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        marginBottom: '80px'
      }}
    >
      {children}
    </div>
  )
}