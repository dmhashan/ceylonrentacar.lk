const stats = [
  { value: '500+', label: 'Vehicles' },
  { value: '10K+', label: 'Happy Customers' },
  { value: '15+', label: 'Years Experience' },
]

export default function Hero() {
  return (
    <section className="relative bg-ink text-white overflow-hidden">
      {/* Subtle diagonal gold line accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] border border-gold/10 rounded-full translate-x-1/3 -translate-y-1/4" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] border border-gold/8 rounded-full translate-x-1/4 -translate-y-1/6" />
        <div className="absolute bottom-0 left-[-200px] w-[500px] h-[500px] border border-stone-200/5 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-28 md:py-36 relative">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">
              Sri Lanka&apos;s Premium Car Rental
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight mb-8">
            Explore Sri Lanka<br />
            <span className="text-gold">in Comfort</span><br />
            <span className="text-stone-300 font-light italic text-4xl sm:text-5xl md:text-6xl">
              &amp; Style
            </span>
          </h1>

          <p className="text-stone-500 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Premium self-drive and chauffeur-driven car rentals across the island.
            From city transfers to scenic hill-country tours.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#book"
              className="bg-gold hover:bg-gold-light text-ink font-bold px-9 py-4 text-sm tracking-widest uppercase transition-colors"
            >
              Book a Vehicle
            </a>
            <a
              href="#fleet"
              className="border border-stone-300/30 hover:border-gold text-stone-300 hover:text-gold font-semibold px-9 py-4 text-sm tracking-widest uppercase transition-all duration-200"
            >
              View Fleet
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 max-w-sm">
          {stats.map((s, i) => (
            <div key={s.label} className={`${i > 0 ? 'border-l border-stone-200/10 pl-8 ml-8' : ''}`}>
              <div className="text-3xl font-black text-gold">{s.value}</div>
              <div className="text-stone-500 text-xs mt-1 tracking-widest uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
