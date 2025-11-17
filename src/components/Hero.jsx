import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-black to-gray-600 opacity-[0.08] blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-gray-600 to-black opacity-[0.08] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-800 backdrop-blur">
              New Drop Live Now
            </span>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.05]">
              Streetwear made for motion
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Minimal silhouettes. Premium fabrics. Designed for the city and built to move. Explore the latest collection inspired by nighttime energy.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#new" className="inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-3 text-sm font-semibold shadow-sm hover:scale-[1.02] transition-transform">
                Shop the Drop
              </a>
              <a href="#lookbook" className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold hover:bg-gray-50">
                View Lookbook
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div>
                <p className="text-2xl font-extrabold">50k+</p>
                <p className="text-sm text-gray-500">Customers</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold">4.8</p>
                <p className="text-sm text-gray-500">Average rating</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold">24hr</p>
                <p className="text-sm text-gray-500">Fast shipping</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1548883354-2d7fdbb82a4b?q=80&w=1600&auto=format&fit=crop"
                alt="Model wearing streetwear"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-3xl bg-white shadow-xl p-4">
              <p className="text-xs text-gray-500">Featured Fabric</p>
              <p className="text-base font-semibold">AeroFlex™ Nylon</p>
              <p className="text-xs text-gray-500 mt-1">Breathable • Durable • Stretch</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
