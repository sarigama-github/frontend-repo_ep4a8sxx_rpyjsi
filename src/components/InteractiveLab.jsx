import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const pieces = [
  { id: 'jacket', name: 'Velocity Jacket', color: '#0a0a0a', img: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1600&auto=format&fit=crop' },
  { id: 'tee', name: 'Night Runner Tee', color: '#111827', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop' },
  { id: 'pants', name: 'City Tech Pants', color: '#1f2937', img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop' },
]

export default function InteractiveLab() {
  const [active, setActive] = useState(pieces[0])
  const [rotate, setRotate] = useState(0)
  const [zoom, setZoom] = useState(1)

  return (
    <section id="lab" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">FLARE Lab</h2>
          <p className="text-sm text-gray-600">Drag to rotate • Scroll to zoom • Click swatches</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-video rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 overflow-hidden">
            <motion.div
              drag
              dragConstraints={{ left: -80, right: 80, top: -40, bottom: 40 }}
              onDrag={(e, info) => setRotate(info.point.x / 25)}
              onWheel={(e) => {
                const next = Math.min(1.4, Math.max(0.8, zoom + (e.deltaY > 0 ? -0.05 : 0.05)))
                setZoom(next)
              }}
              className="absolute inset-0 grid place-items-center"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.id}
                  src={active.img}
                  alt={active.name}
                  className="w-[70%] rounded-2xl shadow-2xl"
                  style={{ rotate, scale: zoom }}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: zoom }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                />
              </AnimatePresence>
            </motion.div>
            <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between">
              <div className="flex gap-2">
                {pieces.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setActive(p)}
                    className={`h-8 w-8 rounded-full ring-2 ${active.id === p.id ? 'ring-black' : 'ring-transparent'} ring-offset-2`}
                    style={{ background: p.color }}
                    aria-label={p.name}
                  />
                ))}
              </div>
              <div className="text-xs text-gray-600 bg-white/80 backdrop-blur px-3 py-1 rounded-full border">{active.name}</div>
            </div>
          </div>

          <div className="space-y-5">
            <p className="text-lg text-gray-700">
              Experiment with silhouettes in real-time. Our interactive lab lets you feel the motion before it ships.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Drag the product to shift perspective</li>
              <li>• Scroll to zoom in/out and examine details</li>
              <li>• Tap swatches to toggle between hero pieces</li>
            </ul>
            <div className="flex gap-3 pt-2">
              <button className="rounded-full bg-black text-white px-6 py-3 text-sm font-semibold">Add to Cart</button>
              <button className="rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold">Save for later</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
