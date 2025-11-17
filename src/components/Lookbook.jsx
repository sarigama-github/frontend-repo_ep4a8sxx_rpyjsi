import { motion } from 'framer-motion'

export default function Lookbook() {
  const photos = [
    'https://images.unsplash.com/photo-1516822003754-cca485356ecb?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544028731-13d2f02c2b79?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542060748-10c28b62716b?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544028731-13d2f02c2b79?q=80&w=1600&auto=format&fit=crop',
  ]

  return (
    <section id="lookbook" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">Lookbook</h2>
          <a href="#" className="text-sm font-semibold text-gray-700 hover:text-black">Follow us on Instagram</a>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]"></div>
        <div className="grid md:grid-cols-3 gap-6">
          {photos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="overflow-hidden rounded-2xl"
            >
              <img src={src} alt="lookbook" className="h-full w-full object-cover hover:scale-[1.03] transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
