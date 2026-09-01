import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook that uses IntersectionObserver to detect when an element enters the viewport.
 * @param {number} threshold - Intersection threshold (0 to 1)
 * @returns {{ ref: React.RefObject, inView: boolean }}
 */
export function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          // Once in view, unobserve for performance
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    const el = ref.current
    if (el) observer.observe(el)

    return () => {
      if (el) observer.unobserve(el)
    }
  }, [threshold])

  return { ref, inView }
}
