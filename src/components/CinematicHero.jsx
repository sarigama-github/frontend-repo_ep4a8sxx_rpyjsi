import { motion } from 'framer-motion'
import SpotlightLayer from './SpotlightLayer'

// Cinematic full-bleed hero with autoplaying background video and typographic overlay
export default function CinematicHero() {
  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden bg-black">
      {/* Background video */}
      <div className="absolute inset-0 -z-20">
        <video
          className="h-full w-full object-cover opacity-80"
          autoPlay
          muted
          loop
          playsInline
          poster=""
        >
          {/* Multiple sources to increase likelihood of playback */}
          <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
          <source src="https://cdn.coverr.co/videos/coverr-cyber-lights-6438/1080p.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlays for mood */}
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_40%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_60%,rgba(0,0,0,0.9)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
      </div>

      {/* Dynamic lighting layer */}
      <SpotlightLayer />

      {/* Top utility bar */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 py-4 mix-blend-screen">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/70">Campaign — AW25</span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/70">Sound On Optional</span>
      </div>

      {/* Headline and CTAs */}
      <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-7xl flex-col items-start justify-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="select-none text-[15vw] leading-[0.8] font-black tracking-tight md:text-[9vw]"
        >
          <span className="block">FLARE</span>
          <span className="block bg-clip-text text-transparent bg-[linear-gradient(110deg,#fff,rgba(255,255,255,0.4))]">ARCHIVE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-4 max-w-xl text-white/80"
        >
          Hyper-visual streetwear engineered for motion. Technical silhouettes, cinematic textures, and zero compromise.
        </motion.p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <motion.a
            href="#shop"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-white backdrop-blur-md"
          >
            <span className="relative z-10">Shop Campaign</span>
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-fuchsia-500/30 via-cyan-500/30 to-amber-400/30" />
          </motion.a>
          <motion.a
            href="#lookbook"
            whileHover={{ x: 2 }}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white"
          >
            View Lookbook <span aria-hidden>↗</span>
          </motion.a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-center">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="text-xs text-white/70"
        >
          Scroll
        </motion.div>
      </div>
    </section>
  )
}
