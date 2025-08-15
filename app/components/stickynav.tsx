import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export function StickyNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-teal-200/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4">
        <nav className="flex h-14 items-center justify-between text-base">
          <Logo />
          <Menu />
          <div className="flex items-center gap-3">
            <Search />
            <SignIn />
          </div>
        </nav>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <a href="/" className="text-2xl font-semibold tracking-tight">
      Ruby Ryan Atelier
    </a>
  );
}

function Menu() {
  return (
    <ul className="hidden items-center gap-6 text-gray-700 md:flex">
      <li>
        <a className="hover:underline" href="#">
          Sewing Patterns
        </a>
      </li>
      <li>
        <a className="hover:underline" href="#">
          Single Issues & Books
        </a>
      </li>
      <li>
        <a className="hover:underline" href="#">
          Subscriptions
        </a>
      </li>
      <li>
        <a className="hover:underline" href="#">
          Videos
        </a>
      </li>
      <li>
        <a className="hover:underline" href="#">
          Blog
        </a>
      </li>
    </ul>
  );
}

function Search() {
  return (
    <a href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
      <span className="sr-only">Search</span>
      <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
    </a>
  );
}

function SignIn() {
  return (
    <a href="#" className="text-gray-700 hover:text-gray-800">
      Sign In
    </a>
  );
}
