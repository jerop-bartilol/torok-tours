import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const values = [
  {
    icon: "🛡️",
    title: "Reliability",
    description: "We deliver on every promise — your trip, your way, on time.",
  },
  {
    icon: "✨",
    title: "Comfort",
    description: "Premium vehicles, handpicked lodges, and seamless logistics.",
  },
  {
    icon: "🤝",
    title: "Trust",
    description: "Transparent pricing with no hidden costs. Ever.",
  },
  {
    icon: "🌍",
    title: "Authenticity",
    description: "Real African experiences guided by local expertise.",
  },
];

const reasons = [
  "Tailored itineraries for tourists, corporates, NGOs & groups",
  "Expert local guides with deep knowledge of African wildlife",
  "Luxury open-sided landcruisers for unobstructed views",
  "24/7 support throughout your journey",
  "Partnerships with top-rated lodges and camps",
  "Commitment to sustainable and responsible tourism",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <section className="relative flex h-[50vh] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/savannah-1.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-safari-brown/50" />
        <div className="relative z-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-safari-gold">
            Our Story
          </p>
          <h1 className="mt-3 font-heading text-5xl font-light text-white sm:text-6xl md:text-7xl">
            About Torok
          </h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative h-80 overflow-hidden rounded-2xl sm:h-[26rem]">
            <Image
              src="/images/Africa-Safari-jeep-1-1024x682.jpg"
              alt="Torok Safari Vehicle"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-safari-gold">
              Who We Are
            </p>
            <h2 className="mt-3 font-heading text-3xl font-light leading-snug text-safari-text sm:text-4xl">
              Born From a Love
              <br />
              for the African Wild
            </h2>
            <p className="mt-5 leading-relaxed text-safari-dark/70">
              Torok Tours & Travel Ltd was founded with a simple belief — that
              every traveler deserves to experience Africa&apos;s beauty with
              comfort, safety, and authenticity. We serve a diverse clientele
              including tourists, corporate organizations, NGOs, and group
              travel clients.
            </p>
            <p className="mt-4 leading-relaxed text-safari-dark/70">
              In collaboration with KibandaLabs Technologies, we&apos;re on a
              mission to become a modern, digitally-enabled, and highly visible
              brand — bringing the magic of African safaris to the world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-safari-cream px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-safari-gold">
              What Drives Us
            </p>
            <h2 className="mt-3 font-heading text-3xl font-light text-safari-text sm:text-4xl">
              Our Values
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-white/70 p-8 text-center backdrop-blur-sm transition-shadow hover:shadow-lg"
              >
                <span className="text-3xl">{v.icon}</span>
                <h3 className="mt-4 font-heading text-xl font-medium text-safari-text">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-safari-dark/60">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-safari-gold">
              The Torok Difference
            </p>
            <h2 className="mt-3 font-heading text-3xl font-light leading-snug text-safari-text sm:text-4xl">
              Why Travel With Us
            </h2>
            <ul className="mt-8 space-y-4">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-safari-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm leading-relaxed text-safari-dark/70">
                    {r}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-80 overflow-hidden rounded-2xl sm:h-[26rem]">
            <Image
              src="/images/open-sided-lancruiser.jpg"
              alt="Open-sided Landcruiser Safari"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
