export function HeroBanners() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-8 md:py-10">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900">
            <img
              src="https://images.unsplash.com/photo-1520975895090-6c2b3a6b2d94?q=80&w=1800&auto=format&fit=crop"
              alt="Burda Style August 2025"
              className="h-64 w-full object-cover md:h-80"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <h2 className="text-2xl font-semibold">
                Burda Style August 2025
              </h2>
              <a
                href="#"
                className="mt-2 inline-block text-sm text-white/90 underline"
              >
                Discover
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900">
            <img
              src="https://images.unsplash.com/photo-1517676109075-9a94d242f11b?q=80&w=1800&auto=format&fit=crop"
              alt="My Sewing Companion E-book"
              className="h-64 w-full object-cover md:h-80"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <h2 className="text-2xl font-semibold">
                My Sewing Companion — New E-book
              </h2>
              <a
                href="#"
                className="mt-2 inline-block text-sm text-white/90 underline"
              >
                Discover
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
