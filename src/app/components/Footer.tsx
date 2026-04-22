export default function Footer() {
  return (
    <footer id="about" className="bg-safari-text px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-heading text-lg font-bold text-white">
              Torok Tours & Travel
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/50">
              Curated luxury safari experiences across Africa. Reliability,
              comfort, and satisfaction — always.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2.5">
              {["Destinations", "Experiences", "Booking", "About"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-sm text-white/60 transition-colors hover:text-safari-gold"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Contact
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              <li>info@toroktours.com</li>
              <li>+254 700 000 000</li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/30">
          © {new Date().getFullYear()} Torok Tours & Travel Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
