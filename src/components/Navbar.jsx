import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Fleet', href: '#fleet' },
    { label: 'Services', href: '#why-us' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Ceylon Rent a Car & Tours"
            className="h-14 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-ink-600 hover:text-gold transition-colors text-sm font-medium tracking-widest uppercase"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#book"
          className="hidden md:inline-block border border-gold text-gold hover:bg-gold hover:text-white font-semibold px-6 py-2.5 text-xs tracking-widest uppercase transition-all duration-200"
        >
          Book Now
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-ink-600 hover:text-ink p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-stone-200 px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-ink-600 hover:text-gold py-2 border-b border-stone-200 text-sm tracking-widest uppercase transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            className="mt-2 border border-gold text-gold font-semibold py-3 text-center text-xs tracking-widest uppercase transition-all"
            onClick={() => setOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  )
}
