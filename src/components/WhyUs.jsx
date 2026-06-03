// Simple SVG icons as React components
const icons = {
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  tag: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
    </svg>
  ),
  plane: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  ),
  map: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
    </svg>
  ),
  user: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  ),
}

const features = [
  { icon: 'shield', title: 'Fully Insured Vehicles',    desc: 'Every vehicle carries comprehensive insurance for your complete peace of mind.' },
  { icon: 'clock',  title: '24 / 7 Roadside Support',  desc: 'Our support team is available around the clock wherever you are on the island.' },
  { icon: 'tag',    title: 'No Hidden Charges',         desc: 'Transparent pricing with no surprise fees. What you see is exactly what you pay.' },
  { icon: 'plane',  title: 'Airport Pickup & Drop',     desc: 'Convenient BIA Airport transfers — we track your flight so we are always on time.' },
  { icon: 'map',    title: 'Island-Wide Coverage',      desc: 'Pick up and drop off at any major city or tourist destination in Sri Lanka.' },
  { icon: 'user',   title: 'Experienced Drivers',       desc: 'English-speaking chauffeurs with expert knowledge of every road on the island.' },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left heading */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-ink tracking-tight leading-tight">
              Trusted by Thousands<br />Across Sri Lanka
            </h2>
            <p className="text-stone-600 mt-4 text-lg leading-relaxed max-w-md">
              From the moment you book to the moment you arrive, we ensure every
              aspect of your journey is handled with professionalism and care.
            </p>
            <a
              href="#contact"
              className="inline-block mt-8 bg-ink hover:bg-gold text-white hover:text-ink font-semibold px-8 py-3.5 text-xs tracking-widest uppercase transition-all duration-200"
            >
              Talk to Us
            </a>
          </div>

          {/* Right grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-6 border border-stone-200 hover:border-gold/40 hover:bg-stone transition-all duration-200"
              >
                <div className="text-gold mb-4 group-hover:scale-110 transition-transform duration-200 inline-block">
                  {icons[f.icon]}
                </div>
                <h3 className="font-bold text-ink mb-2 text-sm tracking-wide">{f.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
