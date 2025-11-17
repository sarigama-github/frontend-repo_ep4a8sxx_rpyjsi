import { useEffect, useRef } from 'react'

export default function Marquee({ text = 'FLARE • NEW DROP • FLARE • ' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let start = 0
    let raf
    const step = () => {
      start -= 0.8
      el.style.transform = `translateX(${start}px)`
      if (Math.abs(start) > el.scrollWidth / 2) start = 0
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="overflow-hidden whitespace-nowrap border-y border-gray-200 bg-white py-3">
      <div className="flex gap-10" ref={ref} aria-hidden>
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="text-sm tracking-widest uppercase font-semibold text-gray-800">
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
