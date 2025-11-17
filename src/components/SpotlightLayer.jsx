import { useEffect, useRef } from 'react'

// Dynamic lighting: a soft spotlight that follows the cursor, with additive blending
export default function SpotlightLayer() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const move = (e) => {
      const x = e.clientX
      const y = e.clientY
      el.style.setProperty('--x', `${x}px`)
      el.style.setProperty('--y', `${y}px`)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        background:
          'radial-gradient(400px 400px at var(--x,50%) var(--y,50%), rgba(255,255,255,0.18), rgba(255,255,255,0.06) 40%, rgba(255,255,255,0) 60%)',
        mixBlendMode: 'screen',
      }}
    />
  )
}
