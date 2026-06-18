"use client";

import Link from "next/link";

const footerCols = [
  {
    title: "Product",
    links: [
      { label: "Generator", href: "/#tool" },
      { label: "Features", href: "/#features" },
      { label: "Roadmap", href: "/#roadmap" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark mt-auto" style={{ background: "#0F172A" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
          {/* ── Brand column ───────────────────────── */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-0 text-xl font-extrabold tracking-tight text-white mb-3">
              ColdPing
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand ml-[1px] mb-[2px]" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Hyper-personalized cold emails powered by AI. Stop guessing, start connecting.
            </p>

            {/* Stay Updated — inline form */}
            <p className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Stay Updated</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="you@email.com"
                className="flex-1 min-w-0 rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-xs text-gray-200
                           placeholder:text-gray-500 focus:border-brand focus:ring-0 transition-colors"
              />
              <button
                type="submit"
                className="px-3 py-2 rounded-lg text-xs font-semibold text-white bg-brand hover:bg-brand-dark transition-colors btn-press"
              >
                →
              </button>
            </form>
          </div>

          {/* ── Link columns ───────────────────────── */}
          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ───────────────────────────── */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>ColdPing © {new Date().getFullYear()}</p>
          <p>
            Made with <span className="text-red-400">❤️</span> and{" "}
            <span className="text-gray-400 font-medium">Gemini AI</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
