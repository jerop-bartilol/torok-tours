import Image from "next/image";

export default function FeaturedDestination() {
  return (
    <section id="destinations" className="bg-safari-cream px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Image */}
        <div className="relative h-80 overflow-hidden rounded-2xl sm:h-[28rem]">
          <Image
            src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1200&q=80"
            alt="African Savannah"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Text */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-safari-gold">
            Featured Destination
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold leading-snug text-safari-text sm:text-4xl">
            The Serengeti —<br />
            Africa&apos;s Timeless Wilderness
          </h2>
          <p className="mt-5 leading-relaxed text-safari-dark/70">
            Witness the Great Migration, where millions of wildebeest and zebra
            traverse the endless plains. Stay in luxury tented camps under
            star-filled skies and wake to the sounds of the wild.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#booking"
              className="rounded-full bg-safari-brown px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-safari-accent"
            >
              Book This Trip
            </a>
            <a
              href="#"
              className="rounded-full border border-safari-brown/30 px-7 py-3 text-sm font-semibold text-safari-brown transition-all duration-300 hover:border-safari-brown"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
