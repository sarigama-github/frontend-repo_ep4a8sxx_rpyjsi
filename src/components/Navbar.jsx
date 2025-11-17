import { useState } from 'react'
import { Menu, X, ShoppingBag } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { label: 'New Arrivals', href: '#new' },
    { label: 'Men', href: '#men' },
    { label: 'Women', href: '#women' },
    { label: 'Lookbook', href: '#lookbook' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 to-transparent backdrop-blur-xl" />
      <nav className="relative mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-black tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-500">FLARE</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="relative inline-flex items-center justify-center rounded-full border border-gray-200/80 bg-white/70 backdrop-blur px-4 py-2 text-sm font-semibold shadow-sm hover:shadow transition-all">
            <ShoppingBag className="h-4 w-4 mr-2" />
            Cart
            <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-black text-white text-xs">2</span>
          </button>
          <button className="md:hidden inline-flex items-center justify-center rounded-full border border-gray-200/80 bg-white/70 backdrop-blur p-2 shadow-sm" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gray-200/70 bg-white/80 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 py-4 grid gap-2">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-base font-medium text-gray-800 py-2">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
