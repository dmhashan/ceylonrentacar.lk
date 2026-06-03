const steps = [
  {
    num: '01',
    title: 'Choose Your Vehicle',
    desc: 'Browse our fleet and select the vehicle that suits your journey, group size, and budget.',
  },
  {
    num: '02',
    title: 'Make a Reservation',
    desc: 'Select your dates and pickup location. Receive instant confirmation by email and WhatsApp.',
  },
  {
    num: '03',
    title: 'Enjoy the Journey',
    desc: 'We deliver the vehicle to your door or you can collect from our Tangalle office.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-ink py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-gold" />
          <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">How It Works</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-16">
          Three Simple Steps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-stone-200/10">
          {steps.map((s) => (
            <div key={s.num} className="px-0 md:px-10 first:pl-0 last:pr-0 py-8 md:py-0">
              <div className="text-6xl font-black text-gold/20 mb-4 leading-none">{s.num}</div>
              <h3 className="text-white font-bold text-lg mb-3 tracking-tight">{s.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-stone-200/10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <a
            href="#book"
            className="bg-gold hover:bg-gold-light text-ink font-black px-10 py-4 text-xs tracking-widest uppercase transition-colors"
          >
            Reserve Now
          </a>
          <p className="text-stone-500 text-sm">
            Or call us at&nbsp;
            <a href="tel:+94771234567" className="text-gold hover:underline font-semibold">
              +94 77 123 4567
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
