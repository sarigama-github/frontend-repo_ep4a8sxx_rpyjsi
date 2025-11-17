import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collection from './components/Collection'
import Lookbook from './components/Lookbook'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main>
        <Hero />
        <Collection />
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
      </main>

      <footer className="border-t border-gray-200/80">
        <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-3">
          <div>
            <h4 className="text-lg font-extrabold">FLARE</h4>
            <p className="text-sm text-gray-600 mt-2 max-w-sm">Modern, performance-first streetwear. Designed in LA. Built for everywhere.</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-semibold mb-2">Shop</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#new" className="hover:text-black">New Arrivals</a></li>
                <li><a href="#" className="hover:text-black">Tops</a></li>
                <li><a href="#" className="hover:text-black">Bottoms</a></li>
                <li><a href="#" className="hover:text-black">Outerwear</a></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold mb-2">About</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#lookbook" className="hover:text-black">Lookbook</a></li>
                <li><a href="#" className="hover:text-black">Sustainability</a></li>
                <li><a href="#" className="hover:text-black">Careers</a></li>
                <li><a href="#" className="hover:text-black">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="md:justify-self-end">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} FLARE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
