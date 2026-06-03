const reviews = [
  {
    initials: 'JM',
    name: 'James Mitchell',
    location: 'London, United Kingdom',
    rating: 5,
    text: 'Fantastic service. The vehicle was immaculate and the driver had exceptional knowledge of every destination along the hill country route. Will certainly book again.',
  },
  {
    initials: 'PR',
    name: 'Priya Ratnayake',
    location: 'Melbourne, Australia',
    rating: 5,
    text: 'Booked a KDH van for our family of eight. Seamless airport pickup, very competitive pricing, and the driver was professional and attentive throughout our trip.',
  },
  {
    initials: 'SK',
    name: 'Stefan Kühn',
    location: 'Berlin, Germany',
    rating: 4,
    text: 'Excellent selection of vehicles and a very straightforward booking process. The Prius was fuel-efficient and comfortable for a ten-day self-drive island tour.',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-gold" />
          <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">Testimonials</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-ink tracking-tight mb-14">
          What Our Guests Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="border border-stone-200 p-8 hover:border-gold/40 hover:shadow-md transition-all duration-200 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" className={`w-4 h-4 ${i < r.rating ? 'fill-gold' : 'fill-stone-200'}`}>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-stone-600 text-sm leading-relaxed mb-8 flex-1 italic">
                &ldquo;{r.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-6 border-t border-stone-100">
                <div className="w-10 h-10 bg-ink text-white flex items-center justify-center text-xs font-bold flex-shrink-0 tracking-wider">
                  {r.initials}
                </div>
                <div>
                  <div className="font-bold text-ink text-sm">{r.name}</div>
                  <div className="text-stone-500 text-xs mt-0.5">{r.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
