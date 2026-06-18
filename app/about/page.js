"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useReveal } from "../hooks";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════
   ABOUT — HERO
   ═══════════════════════════════════════════════════════ */
function AboutHero() {
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 gradient-mesh dot-grid overflow-hidden">
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-brand/6 rounded-full blur-[80px] animate-blob1 pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-10%] w-[350px] h-[350px] bg-accent/5 rounded-full blur-[60px] animate-blob2 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center px-4">
        <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light dark:bg-brand/15 border border-brand/10 text-brand text-xs font-semibold tracking-wide mb-6">
          Our Story
        </div>
        <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-dark leading-[1.08]">
          Built by builders,{" "}
          <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">for builders</span>
        </h1>
        <p className="animate-fade-in-up delay-200 mt-5 text-base sm:text-lg text-muted max-w-xl mx-auto leading-relaxed">
          We were tired of generic cold emails getting ignored. So we built something better.
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   OUR STORY
   ═══════════════════════════════════════════════════════ */
function OurStory() {
  const revealRef = useReveal(60);

  return (
    <section className="py-20 sm:py-28 px-4">
      <div ref={revealRef} className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="reveal">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-brand bg-brand-light dark:bg-brand/15 mb-4">
              The Backstory
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-dark tracking-tight mb-4">
              From frustration to a product
            </h2>
            <div className="space-y-4 text-sm text-muted leading-relaxed">
              <p>
                It started with a simple realization: the average sales rep spends 40 minutes crafting a single cold email.
                Most of those emails get deleted without being read. The ones that don&apos;t? They all have one thing in common —
                <span className="text-dark font-medium"> genuine personalization</span>.
              </p>
              <p>
                We built ColdPing to bridge that gap. By combining the deep context from a prospect&apos;s LinkedIn profile with
                Gemini AI&apos;s language capabilities, we generate emails that sound like they were written by someone who actually
                did their homework — because the AI did.
              </p>
              <p>
                No templates. No merge fields. No &ldquo;I hope this email finds you well.&rdquo;
                Just sharp, specific outreach that gets replies.
              </p>
            </div>
          </div>

          {/* Illustration placeholder — abstract SVG */}
          <div className="reveal flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square">
              {/* Abstract circles / shapes */}
              <div className="absolute inset-0 rounded-3xl bg-brand-light dark:bg-brand/10 border border-brand/10 dark:border-brand/20" />
              <div className="absolute top-8 left-8 w-32 h-32 rounded-2xl bg-brand/10 dark:bg-brand/20 animate-float" />
              <div className="absolute bottom-12 right-8 w-24 h-24 rounded-full bg-accent/15 dark:bg-accent/20 animate-float delay-300" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-xl bg-brand/20 dark:bg-brand/30 animate-float delay-500" />

              {/* Central icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-white dark:bg-dark-card shadow-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   VALUES
   ═══════════════════════════════════════════════════════ */
function Values() {
  const revealRef = useReveal(60);

  const values = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
      title: "Humans First",
      desc: "AI is the engine, but the goal is always to help real people connect. Every email should feel like it came from a thoughtful human.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: "Radical Simplicity",
      desc: "Paste, click, done. No onboarding flows, no complex dashboards, no learning curve. The tool should be instantly obvious.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: "Privacy by Default",
      desc: "Your API key stays on the server. Your data isn't stored. We don't train on your emails. Period.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 bg-card/60 dark:bg-dark-card/30">
      <div ref={revealRef} className="max-w-5xl mx-auto">
        <div className="text-center mb-14 reveal">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-brand bg-brand-light dark:bg-brand/15 mb-3">
            Our Values
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
            What we stand for
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="reveal card-hover bg-white dark:bg-dark-card rounded-2xl border border-gray-200/80 dark:border-dark-border p-6 shadow-sm text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-light dark:bg-brand/15 text-brand flex items-center justify-center mx-auto mb-4">
                {v.icon}
              </div>
              <h3 className="text-base font-bold text-dark mb-2">{v.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   TEAM
   ═══════════════════════════════════════════════════════ */
function Team() {
  const revealRef = useReveal(60);

  const members = [
    { name: "Alex Kim", role: "Product", initials: "AK", bg: "bg-blue-500" },
    { name: "Nina Rao", role: "Engineering", initials: "NR", bg: "bg-purple-500" },
  ];

  return (
    <section className="py-20 sm:py-28 px-4">
      <div ref={revealRef} className="max-w-3xl mx-auto">
        <div className="text-center mb-14 reveal">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-brand bg-brand-light dark:bg-brand/15 mb-3">
            The Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
            Small team, big ambitions
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-lg mx-auto">
          {members.map((m, i) => (
            <div
              key={i}
              className="reveal card-hover bg-white dark:bg-dark-card rounded-2xl border border-gray-200/80 dark:border-dark-border p-6 shadow-sm text-center"
            >
              <div className={`w-16 h-16 rounded-2xl ${m.bg} flex items-center justify-center text-xl font-bold text-white mx-auto mb-4`}>
                {m.initials}
              </div>
              <h3 className="text-base font-bold text-dark">{m.name}</h3>
              <p className="text-sm text-muted">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   MISSION BANNER
   ═══════════════════════════════════════════════════════ */
function MissionBanner() {
  return (
    <section className="py-20 sm:py-28 px-4" style={{ background: "#0F172A" }}>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-2xl sm:text-3xl font-extrabold text-white leading-snug mb-6">
          &ldquo;Cold outreach shouldn&apos;t feel cold. It should feel like the start of a real conversation.&rdquo;
        </p>
        <p className="text-sm text-gray-400 mb-8">— The ColdPing Team</p>
        <Link
          href="/"
          className="btn-shimmer btn-press inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-sm
                     bg-brand hover:bg-brand-dark shadow-lg transition-all duration-300"
        >
          Try ColdPing Free
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   ABOUT PAGE
   ═══════════════════════════════════════════════════════ */
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <AboutHero />
        <OurStory />
        <Values />
        <Team />
        <MissionBanner />
      </main>
      <Footer />
    </>
  );
}
