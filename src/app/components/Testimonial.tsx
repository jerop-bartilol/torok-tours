export default function Testimonial() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <svg className="mx-auto h-10 w-10 text-safari-gold/40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
        </svg>
        <blockquote className="mt-8 font-heading text-2xl font-medium leading-relaxed text-safari-text sm:text-3xl">
          Torok gave us the safari of a lifetime. Every detail was
          perfect — from the lodges to the guides. We felt like royalty
          in the wild.
        </blockquote>
        <div className="mt-8">
          <p className="text-sm font-semibold text-safari-dark">
            Sarah & James Mitchell
          </p>
          <p className="mt-1 text-xs text-safari-dark/50">
            Traveled to Serengeti, 2024
          </p>
        </div>
      </div>
    </section>
  );
}
