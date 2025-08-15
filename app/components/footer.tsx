export function Footer() {
  const help = [
    "Contact us",
    "FAQ",
    "Newsletter",
    "Burda Size Guide",
    "70 years of Burda Style",
  ];
  const burda = [
    "Legal Notice",
    "Burda Style Terms & Conditions",
    "Accessibility",
    "Privacy Policy",
    "Cookie Settings",
    "Site Map",
  ];
  const account = ["Sign In", "Create an Account"];
  const payments = ["applePay", "mastercard", "paypal", "visa"];
  return (
    <footer className="mt-10 border-t border-gray-300 py-12 text-sm dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div>
            <h4 className="font-semibold">Help & Information</h4>
            <ul className="mt-3 space-y-2 text-gray-600 dark:text-gray-400">
              {help.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:underline">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Burda Style</h4>
            <ul className="mt-3 space-y-2 text-gray-600 dark:text-gray-400">
              {burda.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:underline">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">My Account</h4>
            <ul className="mt-3 space-y-2 text-gray-600 dark:text-gray-400">
              {account.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:underline">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Follow us</h4>
            <div className="mt-3 flex gap-2 text-xs text-gray-600 dark:text-gray-400">
              <a
                href="#"
                className="rounded-full border border-gray-200 px-3 py-1 dark:border-gray-800"
              >
                Instagram
              </a>
              <a
                href="#"
                className="rounded-full border border-gray-200 px-3 py-1 dark:border-gray-800"
              >
                YouTube
              </a>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-gray-500">
              {payments.map((p) => (
                <span
                  key={p}
                  className="rounded border border-gray-200 px-2 py-1 dark:border-gray-800"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-500">
          © {new Date().getFullYear()} Burda Style. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
