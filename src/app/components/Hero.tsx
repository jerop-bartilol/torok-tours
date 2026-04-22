export default function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/open-sided-lancruiser.jpg')",
        }}
      />
      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-safari-brown/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p className="animate-fade-up text-sm font-medium uppercase tracking-[0.3em] text-safari-gold">
          Luxury African Safaris
        </p>
        <h1 className="animate-fade-up-delay mt-6 font-heading text-5xl font-light leading-[1.1] text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Where the Wild
          <br />
          <span className="text-safari-gold">Meets Wonder</span>
        </h1>
        <p className="animate-fade-up-delay-2 mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
          Curated journeys through Africa&apos;s most breathtaking landscapes.
          Unforgettable. Authentic. Yours.
        </p>
        <div className="animate-fade-in mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#booking"
            className="rounded-full bg-safari-gold px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-safari-gold/80 hover:shadow-lg hover:shadow-safari-gold/20"
          >
            Plan Your Safari
          </a>
          <a
            href="#destinations"
            className="rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/60 hover:bg-white/10"
          >
            Explore Destinations
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="animate-bounce-slow flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
            Scroll
          </span>
          <svg className="h-5 w-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
