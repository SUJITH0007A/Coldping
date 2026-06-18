"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useReveal, useCounter } from "./hooks";

/* ═══════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 gradient-mesh dot-grid overflow-hidden">
      {/* ── Animated gradient blobs ──────────────── */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-brand/8 rounded-full blur-[80px] animate-blob1 pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-accent/6 rounded-full blur-[80px] animate-blob2 pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[30%] w-[350px] h-[350px] bg-brand/5 rounded-full blur-[60px] animate-blob3 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center px-4">
        {/* ── Badge ───────────────────────────────── */}
        <div className="animate-fade-in-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-light dark:bg-brand/15 border border-brand/10 dark:border-brand/20 text-brand text-xs font-semibold tracking-wide mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
          </span>
          Now in Beta — Join 500+ early users
        </div>

        {/* ── Headline ───────────────────────────── */}
        <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold tracking-tight text-dark leading-[1.08]">
          Cold emails that
          <br className="sm:hidden" />{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">actually get replies</span>
            <span className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-brand to-accent rounded-full animate-underline" />
          </span>
        </h1>

        {/* ── Subtext ────────────────────────────── */}
        <p className="animate-fade-in-up delay-200 mt-6 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          Stop sending generic outreach. ColdPing reads your prospect&apos;s LinkedIn
          and writes a personalized email in 3 seconds — one that sounds like you actually
          did your homework.
        </p>

        {/* ── CTA buttons ────────────────────────── */}
        <div className="animate-fade-in-up delay-300 mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#tool"
            className="btn-shimmer btn-press inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-sm
                       bg-gradient-to-r from-brand to-accent hover:from-brand-dark hover:to-brand
                       shadow-lg shadow-brand/25 hover:shadow-xl transition-all duration-300"
          >
            Try It Free
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href="#how-it-works"
            className="btn-press inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold
                       text-brand border-2 border-brand/20 hover:border-brand/40 hover:bg-brand-light dark:hover:bg-brand/10
                       transition-all duration-200"
          >
            See How It Works
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </a>
        </div>

        {/* ── Social proof ───────────────────────── */}
        <div className="animate-fade-in-up delay-400 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Avatar stack */}
          <div className="flex -space-x-2">
            {["bg-blue-500", "bg-emerald-500", "bg-purple-500", "bg-amber-500", "bg-rose-500"].map((bg, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full ${bg} ring-2 ring-white dark:ring-dark-bg flex items-center justify-center text-[10px] font-bold text-white`}
              >
                {["JR", "SM", "DK", "AL", "MN"][i]}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-semibold text-dark">4.9/5</span>
            <span className="text-xs text-muted">from early users</span>
          </div>
        </div>

        {/* ── Animated counters ──────────────────── */}
        <div className="animate-fade-in-up delay-500 mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <CounterCard target={10000} label="Emails Generated" suffix="+" />
          <CounterCard target={3} label="Sec Average" suffix=" sec" />
          <CounterCard target={68} label="Open Rate" suffix="%" />
          <CounterCard target={0} label="Cost to Start" prefix="$" suffix="" displayValue="Free" />
        </div>
      </div>
    </section>
  );
}

function CounterCard({ target, label, suffix = "", prefix = "", displayValue }) {
  const counterRef = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = counterRef.current;
    if (!el || displayValue) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const start = performance.now();
          const duration = 1800;
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);
            el.textContent = prefix + current.toLocaleString() + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix, prefix, displayValue]);

  return (
    <div className="text-center p-3 rounded-xl bg-white/60 dark:bg-white/5 backdrop-blur border border-gray-200/50 dark:border-gray-700/50">
      <div ref={counterRef} className="text-xl sm:text-2xl font-extrabold text-dark">
        {displayValue || `${prefix}0${suffix}`}
      </div>
      <div className="text-xs text-muted mt-0.5">{label}</div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   FEATURES
   ═══════════════════════════════════════════════════════ */
function Features() {
  const revealRef = useReveal(50);

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
      title: "LinkedIn-Powered Personalization",
      desc: "Paste their LinkedIn text and watch as ColdPing extracts specific hooks, interests, and pain points to personalize every line.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: "3-Second Generation",
      desc: "No waiting around. Powered by Gemini AI, your personalized email is ready before you can finish reading the prompt.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
        </svg>
      ),
      title: "Tone Control",
      desc: "Switch between friendly, professional, or bold — match the tone to your prospect and your brand voice.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      title: "Subject Line Included",
      desc: "Every generated email comes with a killer subject line designed for open rates — because the best email is useless unopened.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      ),
      title: "No Templates, Ever",
      desc: "Every email is unique — generated from scratch based on real data. No fill-in-the-blank templates that scream mass outreach.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      ),
      title: "Completely Free to Start",
      desc: "20 emails per day, all tones, subject lines — no credit card required. Upgrade only when you need unlimited volume.",
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-28 px-4">
      <div ref={revealRef} className="max-w-6xl mx-auto">
        <div className="text-center mb-14 reveal">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-brand bg-brand-light dark:bg-brand/15 mb-3">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
            Everything you need to book more meetings
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="reveal card-hover group bg-white dark:bg-dark-card rounded-2xl border border-gray-200/80 dark:border-dark-border p-6 shadow-sm"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-light dark:bg-brand/15 text-brand flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              <h3 className="text-base font-bold text-dark mb-2">{f.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   GENERATOR TOOL
   ═══════════════════════════════════════════════════════ */
function Generator() {
  const [linkedinText, setLinkedinText] = useState("");
  const [product, setProduct] = useState("");
  const [cta, setCta] = useState("");
  const [tone, setTone] = useState("friendly");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const outputRef = useRef(null);

  const handleGenerate = async () => {
    if (!linkedinText.trim() || !product.trim() || !cta.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ linkedinText, product, cta, tone }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Something went wrong."); return; }
      setResult(data);
      setTimeout(() => {
        outputRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!result) return;
    const text = `Subject: ${result.subject}\n\n${result.body}`;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="tool" className="py-14 sm:py-20 px-4 bg-card/60 dark:bg-dark-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-brand bg-brand-light dark:bg-brand/15">
            The Tool
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* ── LEFT: Inputs ─────────────────────── */}
          <div className="bg-white dark:bg-dark-card rounded-2xl border border-gray-200/80 dark:border-dark-border shadow-lg shadow-gray-100/50 dark:shadow-black/20 p-6 sm:p-8 flex flex-col gap-5">
            <h2 className="text-lg font-bold text-dark flex items-center gap-2">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-light dark:bg-brand/15 text-brand text-sm font-bold">1</span>
              Your Details
            </h2>

            <div>
              <label htmlFor="linkedin" className="block text-sm font-medium text-dark mb-1.5">LinkedIn Profile Text</label>
              <textarea
                id="linkedin"
                rows={5}
                value={linkedinText}
                onChange={(e) => setLinkedinText(e.target.value)}
                placeholder="Paste the About, Experience, or any text from their LinkedIn profile…"
                className="w-full rounded-xl border border-gray-200 dark:border-dark-border bg-card dark:bg-dark-bg px-4 py-3 text-sm text-dark placeholder:text-muted/60 resize-none transition-all duration-200"
              />
            </div>

            <div>
              <label htmlFor="product" className="block text-sm font-medium text-dark mb-1.5">Your Product or Service</label>
              <input
                id="product" type="text" value={product}
                onChange={(e) => setProduct(e.target.value)}
                placeholder='e.g. "AI-powered sales analytics platform"'
                className="w-full rounded-xl border border-gray-200 dark:border-dark-border bg-card dark:bg-dark-bg px-4 py-3 text-sm text-dark placeholder:text-muted/60 transition-all duration-200"
              />
            </div>

            <div>
              <label htmlFor="cta" className="block text-sm font-medium text-dark mb-1.5">Your CTA</label>
              <input
                id="cta" type="text" value={cta}
                onChange={(e) => setCta(e.target.value)}
                placeholder='e.g. "Open to a 15-min call this week?"'
                className="w-full rounded-xl border border-gray-200 dark:border-dark-border bg-card dark:bg-dark-bg px-4 py-3 text-sm text-dark placeholder:text-muted/60 transition-all duration-200"
              />
            </div>

            <div>
              <label htmlFor="tone" className="block text-sm font-medium text-dark mb-1.5">Tone</label>
              <select
                id="tone" value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full rounded-xl border border-gray-200 dark:border-dark-border bg-card dark:bg-dark-bg px-4 py-3 text-sm text-dark appearance-none cursor-pointer transition-all duration-200"
              >
                <option value="friendly">Friendly &amp; Casual</option>
                <option value="professional">Professional</option>
                <option value="bold">Direct &amp; Bold</option>
              </select>
            </div>

            {error && (
              <p className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 rounded-lg px-4 py-2 animate-scale-in">{error}</p>
            )}

            <button
              id="generate-btn"
              onClick={handleGenerate}
              disabled={loading}
              className="btn-shimmer btn-press mt-auto w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold
                         bg-gradient-to-r from-brand to-accent hover:from-brand-dark hover:to-brand
                         shadow-lg shadow-brand/25 hover:shadow-xl hover:shadow-brand/30
                         transition-all duration-300
                         disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <svg className="w-5 h-5 animate-spin-slow" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-25" />
                    <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                  Generating…
                </>
              ) : (
                <>
                  Generate Email
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </>
              )}
            </button>
          </div>

          {/* ── RIGHT: Output ────────────────────── */}
          <div ref={outputRef}>
            {loading ? <LoadingState /> : result ? <ResultCard result={result} copied={copied} onCopy={handleCopy} /> : <PlaceholderCard />}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlaceholderCard() {
  return (
    <div className="h-full min-h-[420px] flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 dark:border-dark-border bg-card/50 dark:bg-dark-card/50 p-8">
      <div className="w-16 h-16 rounded-2xl bg-brand-light dark:bg-brand/15 flex items-center justify-center mb-4">
        <svg className="w-7 h-7 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      </div>
      <p className="text-muted text-sm text-center font-medium">Your personalized email will appear here</p>
      <p className="text-muted/50 text-xs mt-1 text-center">Fill in the details on the left and click Generate</p>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="h-full min-h-[420px] rounded-2xl border border-gray-200/80 dark:border-dark-border bg-white dark:bg-dark-card shadow-lg p-6 sm:p-8 flex flex-col gap-4 animate-fade-in">
      <div className="flex items-center gap-3 mb-2">
        <svg className="w-5 h-5 animate-spin-slow text-brand" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-25" />
          <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <span className="text-sm font-semibold text-brand">Crafting your email…</span>
      </div>
      <div className="shimmer h-5 w-3/4" />
      <div className="shimmer h-4 w-full" />
      <div className="shimmer h-4 w-full" />
      <div className="shimmer h-4 w-5/6" />
      <div className="shimmer h-4 w-full mt-2" />
      <div className="shimmer h-4 w-2/3" />
      <div className="shimmer h-4 w-3/4 mt-2" />
    </div>
  );
}

function ResultCard({ result, copied, onCopy }) {
  const scoreColor =
    result.score >= 90 ? "text-green-600 bg-green-50 border-green-200 dark:text-green-400 dark:bg-green-900/20 dark:border-green-800" :
    result.score >= 75 ? "text-yellow-600 bg-yellow-50 border-yellow-200 dark:text-yellow-400 dark:bg-yellow-900/20 dark:border-yellow-800" :
    "text-red-600 bg-red-50 border-red-200 dark:text-red-400 dark:bg-red-900/20 dark:border-red-800";

  return (
    <div className="h-full rounded-2xl border border-gray-200/80 dark:border-dark-border bg-white dark:bg-dark-card shadow-lg p-6 sm:p-8 flex flex-col animate-scale-in">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-dark uppercase tracking-wider">Generated Email</h3>
        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold border ${scoreColor}`}>
          🎯 {result.score}/100
        </span>
      </div>

      <div className="mb-4">
        <span className="text-xs font-semibold text-muted uppercase tracking-wider">Subject</span>
        <p className="mt-1 text-sm font-semibold text-dark bg-brand-light/60 dark:bg-brand/10 rounded-lg px-3 py-2">{result.subject}</p>
      </div>

      <div className="flex-1 mb-5">
        <span className="text-xs font-semibold text-muted uppercase tracking-wider">Body</span>
        <div className="mt-1 text-sm text-dark leading-relaxed whitespace-pre-wrap bg-card dark:bg-dark-bg rounded-lg px-4 py-3 border border-gray-100 dark:border-dark-border">
          {result.body}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs text-muted">{result.wordCount} words</span>
        <button
          id="copy-btn"
          onClick={onCopy}
          className={`btn-press inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200
            ${copied
              ? "bg-green-50 text-green-700 border border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800"
              : "bg-brand text-white hover:bg-brand-dark shadow-md hover:shadow-lg"
            }`}
        >
          {copied ? (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
              </svg>
              Copy Email
            </>
          )}
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   HOW IT WORKS
   ═══════════════════════════════════════════════════════ */
function HowItWorks() {
  const revealRef = useReveal(80);

  const steps = [
    {
      num: "1",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      title: "Paste LinkedIn",
      desc: "Copy the About, Experience, or headline from their LinkedIn profile and paste it in.",
    },
    {
      num: "2",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Add Your Details",
      desc: "Tell us about your product and your ideal call-to-action.",
    },
    {
      num: "3",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
      ),
      title: "Get Your Email",
      desc: "A hyper-personalized cold email, crafted in 3 seconds flat.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 px-4">
      <div ref={revealRef} className="max-w-5xl mx-auto">
        <div className="text-center mb-14 reveal">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-brand bg-brand-light dark:bg-brand/15 mb-3">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
            Three steps. One killer email.
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="reveal card-hover group relative bg-white dark:bg-dark-card rounded-2xl border border-gray-200/80 dark:border-dark-border p-6 shadow-md"
            >
              <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center shadow-lg">
                {step.num}
              </span>
              <div className="w-12 h-12 rounded-xl bg-brand-light dark:bg-brand/15 text-brand flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   TESTIMONIALS
   ═══════════════════════════════════════════════════════ */
function Testimonials() {
  const revealRef = useReveal(60);

  const testimonials = [
    {
      name: "James R.",
      role: "Founder, B2B SaaS",
      quote: "I sent 20 emails in the time it used to take me to write one. Game changer for early-stage outreach.",
      initials: "JR",
      bg: "bg-blue-500",
    },
    {
      name: "Sofia M.",
      role: "Head of Growth",
      quote: "The hooks it pulls from LinkedIn are genuinely impressive. My prospects actually think I stalked them — in a good way.",
      initials: "SM",
      bg: "bg-emerald-500",
    },
    {
      name: "David K.",
      role: "Sales Lead",
      quote: "Our reply rate went from 3% to 19% in the first two weeks. I've never seen anything move the needle this fast.",
      initials: "DK",
      bg: "bg-purple-500",
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 bg-card/60 dark:bg-dark-card/30">
      <div ref={revealRef} className="max-w-5xl mx-auto">
        <div className="text-center mb-14 reveal">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-brand bg-brand-light dark:bg-brand/15 mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
            What early users are saying
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="reveal card-hover bg-white dark:bg-dark-card rounded-2xl border border-gray-200/80 dark:border-dark-border p-6 shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-sm text-dark leading-relaxed mb-5 italic">&ldquo;{t.quote}&rdquo;</p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-dark-border">
                <div className={`w-9 h-9 rounded-full ${t.bg} flex items-center justify-center text-[11px] font-bold text-white`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   PRICING
   ═══════════════════════════════════════════════════════ */
function Pricing() {
  const [annual, setAnnual] = useState(false);
  const revealRef = useReveal(60);

  const tiers = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      desc: "Get started with no commitment",
      features: ["20 emails / day", "All tones", "Subject line included", "Copy to clipboard"],
      cta: "Get Started Free",
      popular: false,
    },
    {
      name: "Pro",
      price: annual ? "$17" : "$29",
      period: annual ? "/mo (billed yearly)" : "/mo",
      desc: "For serious outreach",
      features: [
        "Unlimited emails",
        "LinkedIn auto-lookup*",
        "Email sequences*",
        "CSV export",
        "Priority support",
      ],
      cta: "Upgrade to Pro",
      popular: true,
    },
    {
      name: "Team",
      price: annual ? "$47" : "$79",
      period: annual ? "/mo (billed yearly)" : "/mo",
      desc: "Scale your team's outreach",
      features: [
        "Everything in Pro",
        "5 team seats",
        "API access",
        "Zapier integration*",
        "Onboarding call",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 px-4">
      <div ref={revealRef} className="max-w-5xl mx-auto">
        <div className="text-center mb-10 reveal">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-brand bg-brand-light dark:bg-brand/15 mb-3">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight mb-4">
            Simple, transparent pricing
          </h2>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-card dark:bg-dark-card rounded-full px-1.5 py-1.5 border border-gray-200 dark:border-dark-border">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                !annual ? "bg-brand text-white shadow-sm" : "text-muted hover:text-dark"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                annual ? "bg-brand text-white shadow-sm" : "text-muted hover:text-dark"
              }`}
            >
              Annual <span className="text-xs opacity-80">Save 40%</span>
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`reveal card-hover relative bg-white dark:bg-dark-card rounded-2xl border p-6 sm:p-7 flex flex-col
                ${tier.popular
                  ? "border-brand/30 pro-glow"
                  : "border-gray-200/80 dark:border-dark-border shadow-sm"
                }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-bold bg-brand text-white shadow-lg">
                  Most Popular
                </span>
              )}

              <h3 className="text-lg font-bold text-dark">{tier.name}</h3>
              <div className="mt-2 mb-1">
                <span className="text-4xl font-extrabold text-dark">{tier.price}</span>
                <span className="text-sm text-muted ml-1">{tier.period}</span>
              </div>
              <p className="text-sm text-muted mb-5">{tier.desc}</p>

              <ul className="flex-1 space-y-2.5 mb-6">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-dark">
                    <svg className="w-4 h-4 mt-0.5 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`btn-press w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  tier.popular
                    ? "bg-brand text-white hover:bg-brand-dark shadow-md hover:shadow-lg"
                    : "border-2 border-gray-200 dark:border-dark-border text-dark hover:border-brand hover:text-brand"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted mt-6">* Coming soon — included in your plan when available.</p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   ROADMAP
   ═══════════════════════════════════════════════════════ */
function Roadmap() {
  const revealRef = useReveal(80);

  const phases = [
    {
      status: "done",
      icon: "✓",
      quarter: "Q1 2026",
      title: "Core Launch",
      items: ["Email generator", "Gemini AI integration", "Waitlist", "Tone control"],
    },
    {
      status: "current",
      icon: "🔵",
      quarter: "Q2 2026",
      title: "Growth Tools",
      items: ["LinkedIn auto-lookup", "Bulk CSV import", "Chrome extension", "Analytics dashboard"],
    },
    {
      status: "upcoming",
      icon: "⚪",
      quarter: "Q3 2026",
      title: "Advanced Features",
      items: ["Email sequences", "A/B testing", "CRM integrations", "Team collaboration"],
    },
    {
      status: "upcoming",
      icon: "⚪",
      quarter: "Q4 2026",
      title: "Full Automation",
      items: ["AI reply detection", "Auto follow-ups", "API access", "Enterprise features"],
    },
  ];

  return (
    <section id="roadmap" className="py-20 sm:py-28 px-4 bg-card/60 dark:bg-dark-card/30">
      <div ref={revealRef} className="max-w-5xl mx-auto">
        <div className="text-center mb-14 reveal">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-brand bg-brand-light dark:bg-brand/15 mb-3">
            Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
            Where we&apos;re headed
          </h2>
        </div>

        {/* ── Desktop: horizontal timeline ────────── */}
        <div className="hidden sm:grid grid-cols-4 gap-6">
          {phases.map((p, i) => (
            <div key={i} className="reveal relative">
              {/* Connector line */}
              {i < phases.length - 1 && (
                <div className="absolute top-5 left-[calc(50%+16px)] right-[-24px] h-0.5 bg-gradient-to-r from-brand/30 to-gray-200 dark:to-dark-border" />
              )}

              <div className={`card-hover relative bg-white dark:bg-dark-card rounded-2xl border p-5 ${
                p.status === "current" ? "border-brand/30 pro-glow" : "border-gray-200/80 dark:border-dark-border"
              }`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-sm ${p.status === "done" ? "text-green-500" : ""}`}>{p.icon}</span>
                  <span className="text-xs font-bold text-brand">{p.quarter}</span>
                </div>
                <h3 className="text-sm font-bold text-dark mb-2">{p.title}</h3>
                <ul className="space-y-1.5">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-center gap-1.5 text-xs text-muted">
                      <span className={`w-1 h-1 rounded-full flex-shrink-0 ${
                        p.status === "done" ? "bg-green-400" : p.status === "current" ? "bg-brand" : "bg-gray-300 dark:bg-gray-600"
                      }`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* ── Mobile: vertical timeline ───────────── */}
        <div className="sm:hidden space-y-0">
          {phases.map((p, i) => (
            <div key={i} className="reveal flex gap-4">
              {/* Timeline line + dot */}
              <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full flex-shrink-0 mt-1 ${
                  p.status === "done" ? "bg-green-500" : p.status === "current" ? "bg-brand" : "bg-gray-300 dark:bg-gray-600"
                }`} />
                {i < phases.length - 1 && <div className="w-0.5 flex-1 bg-gradient-to-b from-brand/30 to-gray-200 dark:to-dark-border" />}
              </div>

              <div className={`flex-1 pb-8 card-hover bg-white dark:bg-dark-card rounded-xl border p-4 mb-3 ${
                p.status === "current" ? "border-brand/30" : "border-gray-200/80 dark:border-dark-border"
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-brand">{p.quarter}</span>
                  <span className="text-xs">{p.icon}</span>
                </div>
                <h3 className="text-sm font-bold text-dark mb-1.5">{p.title}</h3>
                <ul className="space-y-1">
                  {p.items.map((item) => (
                    <li key={item} className="text-xs text-muted flex items-center gap-1.5">
                      <span className={`w-1 h-1 rounded-full flex-shrink-0 ${
                        p.status === "done" ? "bg-green-400" : p.status === "current" ? "bg-brand" : "bg-gray-300 dark:bg-gray-600"
                      }`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   WAITLIST
   ═══════════════════════════════════════════════════════ */
function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");

    try {
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
      if (!formspreeId) {
        await new Promise((r) => setTimeout(r, 800));
        setStatus("success");
        setEmail("");
        return;
      }
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) { setStatus("success"); setEmail(""); } else { setStatus("error"); }
    } catch { setStatus("error"); }
  };

  return (
    <section id="waitlist" className="py-20 sm:py-28 gradient-mesh px-4">
      <div className="max-w-xl mx-auto text-center">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-brand bg-brand-light dark:bg-brand/15 mb-3">
          Early Access
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight mb-3">
          Get notified when we launch
        </h2>
        <p className="text-muted text-base mb-8">
          Join the waitlist for premium features — advanced personalization, team accounts, and CRM integrations.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            id="waitlist-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="flex-1 rounded-xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card px-4 py-3 text-sm text-dark placeholder:text-muted/60 transition-all duration-200"
          />
          <button
            id="waitlist-submit"
            type="submit"
            disabled={status === "loading"}
            className="btn-press px-6 py-3 rounded-xl text-white font-semibold bg-brand hover:bg-brand-dark shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-60 whitespace-nowrap"
          >
            {status === "loading" ? "Joining…" : "Join Waitlist"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-sm font-semibold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 rounded-lg px-4 py-2 inline-block animate-scale-in">
            🎉 You&apos;re on the list!
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-sm font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 rounded-lg px-4 py-2 inline-block animate-scale-in">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Generator />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Roadmap />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
