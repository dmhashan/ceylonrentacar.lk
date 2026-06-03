export default function BookingBar() {
  return (
    <section id="book" className="bg-ink-800 border-b border-ink-700 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-gold" />
          <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">Quick Reservation</span>
        </div>
        <form
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-stone-500 uppercase tracking-widest">
              Pickup Location
            </label>
            <select className="bg-ink border border-ink-600 text-white rounded-none px-3 py-3 text-sm focus:outline-none focus:border-gold transition-colors">
              <option value="">Select city</option>
              <option>Colombo</option>
              <option>Kandy</option>
              <option>Galle</option>
              <option>Tangalle</option>
              <option>Negombo</option>
              <option>Jaffna</option>
              <option>BIA Airport</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-stone-500 uppercase tracking-widest">
              Pickup Date
            </label>
            <input
              type="date"
              className="bg-ink border border-ink-600 text-white rounded-none px-3 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-stone-500 uppercase tracking-widest">
              Return Date
            </label>
            <input
              type="date"
              className="bg-ink border border-ink-600 text-white rounded-none px-3 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-stone-500 uppercase tracking-widest">
              Vehicle Type
            </label>
            <select className="bg-ink border border-ink-600 text-white rounded-none px-3 py-3 text-sm focus:outline-none focus:border-gold transition-colors">
              <option value="">Any type</option>
              <option>Economy</option>
              <option>Sedan</option>
              <option>SUV</option>
              <option>Van / Minibus</option>
              <option>Luxury</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-gold hover:bg-gold-light text-ink font-bold py-3 px-6 text-xs tracking-widest uppercase transition-colors"
          >
            Search Vehicles
          </button>
        </form>
      </div>
    </section>
  )
}
