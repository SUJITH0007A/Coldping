"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Roadmap", href: "/#roadmap" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  /* ── Scroll listener: shadow + active section ──── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);

      // Determine active section
      const sections = ["features", "how-it-works", "roadmap", "pricing", "tool"];
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close mobile menu on resize ───────────────── */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  const handleNavClick = () => setMobileOpen(false);

  return (
    <nav
      className={`sticky top-0 z-50 glass-card animate-nav-slide transition-shadow duration-300 ${
        scrolled ? "nav-scrolled" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* ── LEFT: Logo + Hamburger ─────────────── */}
          <div className="flex items-center gap-3">
            {/* Mobile hamburger */}
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-5 h-5 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-0 text-xl font-extrabold tracking-tight text-dark">
              ColdPing
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand ml-[1px] mb-[2px]" />
            </Link>
          </div>

          {/* ── CENTER: Desktop nav links ─────────── */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("/#", "");
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`nav-link px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-brand"
                      : "text-muted hover:text-dark dark:hover:text-dark-text"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* ── RIGHT: Theme toggle + CTA ─────────── */}
          <div className="flex items-center gap-3">
            {/* Dark/Light toggle */}
            <button
              id="theme-toggle"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {mounted && (
                isDark ? (
                  /* Sun icon */
                  <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                ) : (
                  /* Moon icon */
                  <svg className="w-5 h-5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                  </svg>
                )
              )}
            </button>

            {/* CTA button */}
            <Link
              href="/#waitlist"
              className="hidden sm:inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold text-white bg-brand
                         hover:bg-brand-dark transition-all duration-200 shadow-md hover:shadow-lg btn-hover btn-press"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ───────────────────────────── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={handleNavClick}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-muted hover:text-dark hover:bg-gray-50
                         dark:hover:bg-gray-800 dark:hover:text-dark-text transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#waitlist"
            onClick={handleNavClick}
            className="mt-2 flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-brand
                       hover:bg-brand-dark transition-all duration-200 btn-press"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </nav>
  );
}
