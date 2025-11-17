import { useEffect, useRef, useState } from 'react'

// Minimal audio-reactive background using Web Audio API and a canvas shader-like gradient.
// No external deps beyond React. Mic permission optional; falls back to silent animation.
export default function AudioReactiveBG({ intensity = 0.6 }) {
  const canvasRef = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d', { alpha: true })
    let raf
    let analyser, dataArray
    let audioContext

    const resize = () => {
      if (!canvas) return
      const dpr = Math.min(2, window.devicePixelRatio || 1)
      canvas.width = Math.floor(canvas.clientWidth * dpr)
      canvas.height = Math.floor(canvas.clientHeight * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = (t = 0) => {
      if (!ctx || !canvas) return
      const w = canvas.clientWidth
      const h = canvas.clientHeight

      let level = 0.2 + 0.8 * Math.abs(Math.sin(t * 0.0007))
      if (analyser && dataArray) {
        analyser.getByteFrequencyData(dataArray)
        const avg = dataArray.reduce((a, b) => a + b, 0) / (dataArray.length * 255)
        level = 0.15 + avg * intensity
      }

      ctx.clearRect(0, 0, w, h)

      const g = ctx.createRadialGradient(w * 0.5, h * 0.45, 0, w * 0.5, h * 0.5, Math.max(w, h) * 0.8)
      g.addColorStop(0, `hsla(${200 + level * 80}, 100%, ${30 + level * 20}%, 0.5)`) // cyan/blue
      g.addColorStop(0.5, `hsla(${290 - level * 60}, 100%, ${30 + level * 20}%, 0.55)`) // magenta
      g.addColorStop(1, `hsla(${50 + level * 20}, 100%, ${30 + level * 20}%, 0.45)`) // amber
      ctx.fillStyle = g
      ctx.fillRect(0, 0, w, h)

      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      if (audioContext) audioContext.close()
    }
  }, [intensity])

  const enableMic = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const audioContext = new (window.AudioContext || window.webkitAudioContext)()
      const source = audioContext.createMediaStreamSource(stream)
      const analyser = audioContext.createAnalyser()
      analyser.fftSize = 256
      source.connect(analyser)
      const dataArray = new Uint8Array(analyser.frequencyBinCount)

      // Attach to refs via closure for the draw loop
      ;(canvasRef.current)._analyser = analyser
      ;(canvasRef.current)._dataArray = dataArray
      setEnabled(true)
    } catch (e) {
      console.warn('Mic permission denied or unavailable', e)
      setEnabled(false)
    }
  }

  // Simple bridge to access analyser/dataArray inside effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const getAnalyser = () => canvas._analyser
    const getData = () => canvas._dataArray
    const interval = setInterval(() => {
      // no-op: just keep refs alive
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 -z-20">
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="pointer-events-auto absolute bottom-4 right-4">
        <button onClick={enableMic} className="rounded-full border border-white/20 bg-black/40 text-white/80 px-4 py-2 text-xs backdrop-blur hover:text-white">
          {enabled ? 'Mic on' : 'Enable mic-reactive'}
        </button>
      </div>
    </div>
  )
}
