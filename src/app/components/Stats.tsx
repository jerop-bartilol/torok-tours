const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "5,000+", label: "Happy Travelers" },
  { value: "50+", label: "Destinations" },
  { value: "4.9", label: "Client Rating" },
];

export default function Stats() {
  return (
    <section className="bg-safari-cream-light py-16">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-heading text-3xl font-bold text-safari-brown sm:text-4xl">
              {s.value}
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-safari-dark/50">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
