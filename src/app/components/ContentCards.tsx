import Image from "next/image";

const experiences = [
  {
    title: "Serengeti Game Drive",
    tag: "Most Popular",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    title: "Hot Air Balloon Safari",
    tag: "Unique",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Maasai Mara Expedition",
    tag: "Adventure",
    image: "https://images.unsplash.com/photo-1535338454528-1b22dc446882?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Luxury Lodge Retreat",
    tag: "Relaxation",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ContentCards() {
  const [featured, ...rest] = experiences;

  return (
    <section id="experiences" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-safari-gold">
          Curated For You
        </p>
        <h2 className="mt-3 text-center font-heading text-3xl font-bold text-safari-text sm:text-4xl">
          Safari Experiences
        </h2>

        <div className="mt-14 grid gap-4 lg:grid-cols-2 lg:grid-rows-2">
          {/* Featured large card */}
          <div className="group relative row-span-2 overflow-hidden rounded-2xl">
            <div className="relative h-72 lg:h-full">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="rounded-full bg-safari-gold/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  {featured.tag}
                </span>
                <h3 className="mt-3 font-heading text-2xl font-bold text-white sm:text-3xl">
                  {featured.title}
                </h3>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-safari-gold"
                >
                  Discover More
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Smaller cards */}
          {rest.map((exp) => (
            <div
              key={exp.title}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="relative h-56">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                    {exp.tag}
                  </span>
                  <h3 className="mt-2 font-heading text-xl font-bold text-white">
                    {exp.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
