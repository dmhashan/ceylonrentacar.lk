const destinations = [
  { name: 'Colombo',       sub: 'Commercial Capital' },
  { name: 'Kandy',         sub: 'Cultural Capital' },
  { name: 'Galle',         sub: 'Southern Coast' },
  { name: 'Sigiriya',      sub: 'Ancient Fortress' },
  { name: 'Nuwara Eliya',  sub: 'Hill Country' },
  { name: 'Pinnawala',     sub: 'Elephant Sanctuary' },
  { name: 'Mirissa',       sub: 'Whale Watching' },
  { name: 'Tangalle',      sub: 'Pristine Beaches' },
]

export default function Destinations() {
  return (
    <section id="destinations" className="bg-stone py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-gold" />
          <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">Popular Destinations</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-ink tracking-tight mb-3">
          Wherever You Want to Go
        </h2>
        <p className="text-stone-600 text-lg mb-14 max-w-xl">
          We cover every corner of the island — from the ancient capitals to pristine coastal shores.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-stone-300">
          {destinations.map((d) => (
            <div
              key={d.name}
              className="group bg-white hover:bg-ink transition-colors duration-300 p-8 cursor-pointer"
            >
              <div className="h-px w-8 bg-gold mb-5 group-hover:w-full transition-all duration-300" />
              <h3 className="text-ink group-hover:text-white font-black text-lg tracking-tight transition-colors duration-300">
                {d.name}
              </h3>
              <p className="text-stone-500 group-hover:text-stone-400 text-xs uppercase tracking-widest mt-1 transition-colors duration-300">
                {d.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
