import Navbar from './components/Navbar'
import CinematicHero from './components/CinematicHero'
import InteractiveLab from './components/InteractiveLab'
import Collection from './components/Collection'
import SplitReveal from './components/SplitReveal'
import Lookbook from './components/Lookbook'
import Marquee from './components/Marquee'
import Cursor from './components/Cursor'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Cursor />
      <Navbar />

      <main>
        {/* Cinematic hero with video background and dynamic lighting */}
        <CinematicHero />

        {/* Liquid-esque divider */}
        <div className="relative isolate -mt-16">
          <svg className="block w-full text-white" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden>
            <path fill="currentColor" d="M0,96L60,85.3C120,75,240,53,360,64C480,75,600,117,720,122.7C840,128,960,96,1080,74.7C1200,53,1320,43,1380,37.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
          </svg>
        </div>

        <Marquee text="FLARE // ARCHIVE // TECH MESH // WATER REPELLENT // LASER CUT // REINFORCED KNEE // REFLECTIVE PIPING // "/>

        {/* Product interaction + editorial reveals */}
        <div className="bg-white text-gray-900">
          <InteractiveLab />
          <SplitReveal />
          <Collection />

          {/* Newsletter / community */}
          <section className="py-8">
            <div className="mx-auto max-w-7xl px-6">
              <div className="rounded-3xl bg-gradient-to-r from-black to-gray-700 text-white p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <p className="text-sm uppercase tracking-widest text-white/80">Members</p>
                  <h3 className="text-2xl md:text-3xl font-extrabold mt-1">Early access and 10% off your first order</h3>
                  <p className="text-white/80 mt-2 max-w-xl">Join the list to get drop alerts, exclusive previews, and curated styling tips from our team.</p>
                </div>
                <form onSubmit={(e)=>e.preventDefault()} className="w-full md:w-auto flex items-center gap-2">
                  <input type="email" required placeholder="your@email.com" className="w-full md:w-80 rounded-full border-0 px-5 py-3 text-gray-900 focus:ring-2 focus:ring-white/60" />
                  <button className="shrink-0 inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:scale-[1.02] transition-transform">Join</button>
                </form>
              </div>
            </div>
          </section>

          <Lookbook />
        </div>
      </main>

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-3">
          <div>
            <h4 className="text-lg font-extrabold">FLARE</h4>
            <p className="text-sm text-white/70 mt-2 max-w-sm">Modern, performance-first streetwear. Designed in LA. Built for everywhere.</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-semibold mb-2">Shop</p>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#new" className="hover:text-white">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white">Tops</a></li>
                <li><a href="#" className="hover:text-white">Bottoms</a></li>
                <li><a href="#" className="hover:text-white">Outerwear</a></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold mb-2">About</p>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#lookbook" className="hover:text-white">Lookbook</a></li>
                <li><a href="#" className="hover:text-white">Sustainability</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="md:justify-self-end">
            <p className="text-sm text-white/60">© {new Date().getFullYear()} FLARE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
