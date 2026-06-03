const cars = [
  {
    name: 'Toyota KDH Van',
    category: 'Passenger Van',
    image: '/images/KDH.png',
    desc: 'Spacious and comfortable — ideal for family trips, group tours, and airport transfers island-wide.',
    specs: [['Seats', '10'], ['Transmission', 'Manual'], ['A/C', 'Yes'], ['Luggage', '6 bags']],
    price: 'LKR 12,000',
    tag: 'Group Choice',
  },
  {
    name: 'Toyota Prius',
    category: 'Hybrid Sedan',
    image: '/images/PRIUS.png',
    desc: 'Fuel-efficient hybrid perfect for city drives, long-distance tours, and corporate transfers.',
    specs: [['Seats', '5'], ['Transmission', 'Automatic'], ['A/C', 'Yes'], ['Luggage', '2 bags']],
    price: 'LKR 8,000',
    tag: 'Most Popular',
  },
  {
    name: 'Suzuki Spacia',
    category: 'Compact Wagon',
    image: '/images/SPACIA.png',
    desc: 'Comfortable compact wagon — great for couples and small families exploring the island.',
    specs: [['Seats', '5'], ['Transmission', 'Automatic'], ['A/C', 'Yes'], ['Luggage', '2 bags']],
    price: 'LKR 7,000',
    tag: 'Great Value',
  },
  {
    name: 'Suzuki Wagon R',
    category: 'Economy Car',
    image: '/images/WAGONR.png',
    desc: 'Budget-friendly and easy to drive — ideal for solo travellers and short city trips.',
    specs: [['Seats', '5'], ['Transmission', 'Automatic'], ['A/C', 'Yes'], ['Luggage', '1 bag']],
    price: 'LKR 6,500',
    tag: 'Budget',
  },
]

export default function Fleet() {
  return (
    <section id="fleet" className="bg-stone py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">Our Fleet</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-ink tracking-tight">
            Vehicles for Every Journey
          </h2>
          <p className="text-stone-600 mt-3 text-lg max-w-xl">
            Well-maintained, fully-insured vehicles to suit every trip and budget across Sri Lanka.
          </p>
        </div>

        {/* Pricing policy notice */}
        <div className="border border-gold/40 bg-gold/5 px-6 py-4 mb-12 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
          <div className="flex items-start gap-3">
            <div className="h-4 w-1 bg-gold mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-ink uppercase tracking-widest mb-0.5">Daily Allowance</p>
              <p className="text-sm text-stone-600">150 km &amp; 24 hours included per day</p>
            </div>
          </div>
          <div className="hidden sm:block h-8 w-px bg-gold/25" />
          <div className="flex items-start gap-3">
            <div className="h-4 w-1 bg-gold mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-ink uppercase tracking-widest mb-0.5">Extra Charges</p>
              <p className="text-sm text-stone-600">Additional mileage &amp; overtime hours are billed separately</p>
            </div>
          </div>
        </div>

        {/* Car grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car) => (
            <div
              key={car.name}
              className="bg-white border border-stone-200 hover:border-gold/60 hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              {/* Top accent bar */}
              <div className="bg-ink h-0.5 w-full group-hover:bg-gold transition-colors duration-300" />

              {/* Vehicle image */}
              <div className="bg-stone-100 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-44 object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs text-stone-500 uppercase tracking-widest">{car.category}</span>
                  <span className="text-xs font-semibold text-gold border border-gold/30 bg-gold/5 px-2 py-0.5 tracking-wide whitespace-nowrap">
                    {car.tag}
                  </span>
                </div>

                <h3 className="text-lg font-black text-ink mt-1 mb-2">{car.name}</h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-5 flex-1">{car.desc}</p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-y-3 border-t border-stone-100 pt-4 mb-5">
                  {car.specs.map(([k, v]) => (
                    <div key={k} className="flex flex-col">
                      <span className="text-[10px] text-stone-400 uppercase tracking-wider">{k}</span>
                      <span className="text-xs text-ink font-bold">{v}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                  <div>
                    <span className="text-xl font-black text-ink">{car.price}</span>
                    <span className="text-stone-400 text-xs ml-1">/ day</span>
                  </div>
                  <a
                    href="#book"
                    className="border border-gold text-gold hover:bg-gold hover:text-ink font-semibold px-4 py-2 text-xs tracking-widest uppercase transition-all duration-200"
                  >
                    Reserve
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom pricing footnote */}
        <p className="text-center text-stone-500 text-xs mt-8 tracking-wide">
          All rates include 150 km &amp; 24 hrs per day &middot; Extra mileage and additional hours charged separately &middot; Prices subject to availability
        </p>

      </div>
    </section>
  )
}
