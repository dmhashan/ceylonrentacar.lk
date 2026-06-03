const contactItems = [
  {
    label: 'Address',
    lines: ['No. 42, Galle Road, Tangalle,', 'Southern Province, Sri Lanka'],
  },
  {
    label: 'Phone',
    lines: ['+94 11 234 5678', '+94 77 123 4567'],
  },
  {
    label: 'Email',
    lines: ['reservations@ceylonrentacar.lk', 'info@ceylonrentacar.lk'],
  },
  {
    label: 'Hours',
    lines: ['Mon – Sat: 7:00 AM – 9:00 PM', 'Sun & Holidays: 8:00 AM – 6:00 PM'],
  },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-ink text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-gold" />
          <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">Contact</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16">
          Plan Your Journey
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <p className="text-stone-500 text-lg leading-relaxed mb-10 max-w-sm">
              Speak with our team to plan the perfect Sri Lanka road trip, tailored to your preferences.
            </p>
            <div className="space-y-8">
              {contactItems.map((item) => (
                <div key={item.label} className="flex gap-8">
                  <div className="text-xs text-gold uppercase tracking-[0.2em] font-semibold w-16 pt-0.5 flex-shrink-0">
                    {item.label}
                  </div>
                  <div className="text-stone-300 text-sm leading-relaxed">
                    {item.lines.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="bg-ink-800 border border-ink-600 text-white placeholder-stone-600 px-4 py-3.5 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="bg-ink-800 border border-ink-600 text-white placeholder-stone-600 px-4 py-3.5 text-sm focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-ink-800 border border-ink-600 text-white placeholder-stone-600 px-4 py-3.5 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <textarea
              placeholder="How can we assist you?"
              rows={5}
              className="w-full bg-ink-800 border border-ink-600 text-white placeholder-stone-600 px-4 py-3.5 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full bg-gold hover:bg-gold-light text-ink font-bold py-4 text-xs tracking-widest uppercase transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
