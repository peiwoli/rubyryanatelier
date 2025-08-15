import { useSearchParams } from "react-router";
import { useEffect, useState, type FormEvent } from "react";

export function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState<string>(searchParams.get("q") ?? "");

  useEffect(() => {
    setValue(searchParams.get("q") ?? "");
  }, [searchParams]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = new URLSearchParams(searchParams);
    const trimmed = value.trim();
    if (trimmed) next.set("q", trimmed);
    else next.delete("q");
    setSearchParams(next);
  }

  return (
    <section className="mx-auto max-w-7xl px-4">
      <form className="relative" onSubmit={onSubmit} role="search">
        <input
          type="search"
          aria-label="Search items and pickers"
          placeholder="Search items and pickers"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-0 placeholder:text-gray-400 focus:border-gray-400 dark:border-gray-700 dark:bg-gray-900"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-black"
        >
          Search
        </button>
      </form>
    </section>
  );
}
