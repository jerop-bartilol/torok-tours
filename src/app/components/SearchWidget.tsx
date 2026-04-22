"use client";

export default function SearchWidget() {
  return (
    <section id="booking" className="relative z-20 mx-auto -mt-20 max-w-5xl px-6">
      <div className="rounded-3xl border border-white/20 bg-white/80 p-8 shadow-2xl shadow-safari-brown/10 backdrop-blur-xl sm:p-10">
        <p className="mb-6 text-center font-heading text-lg font-semibold text-safari-text">
          Find Your Perfect Safari
        </p>
        <form className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-3">
          <div className="flex-1">
            <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-safari-dark/60">
              Destination
            </label>
            <input
              type="text"
              placeholder="Serengeti, Maasai Mara..."
              className="w-full rounded-xl border-0 bg-safari-cream-light/80 px-4 py-3.5 text-sm text-safari-text placeholder:text-safari-dark/30 focus:outline-none focus:ring-2 focus:ring-safari-gold/40"
            />
          </div>
          <div className="flex-1">
            <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-safari-dark/60">
              Travel Date
            </label>
            <input
              type="date"
              className="w-full rounded-xl border-0 bg-safari-cream-light/80 px-4 py-3.5 text-sm text-safari-text focus:outline-none focus:ring-2 focus:ring-safari-gold/40"
            />
          </div>
          <div className="sm:w-40">
            <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-safari-dark/60">
              Guests
            </label>
            <select className="w-full rounded-xl border-0 bg-safari-cream-light/80 px-4 py-3.5 text-sm text-safari-text focus:outline-none focus:ring-2 focus:ring-safari-gold/40">
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
              <option>5+ Guests</option>
            </select>
          </div>
          <button
            type="submit"
            className="rounded-xl bg-safari-brown px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-safari-accent hover:shadow-lg"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
