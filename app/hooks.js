"use client";

import { useEffect, useRef } from "react";

/**
 * Hook: IntersectionObserver for reveal-on-scroll.
 * Adds .visible to children with .reveal class.
 * staggerMs: delay between each child (default 50ms).
 */
export function useReveal(staggerMs = 50) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.querySelectorAll(".reveal");
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((e) => e.isIntersecting);
        intersecting.forEach((entry, i) => {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, i * staggerMs);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [staggerMs]);

  return ref;
}

/**
 * Animated counter hook.
 * Counts from 0 to target over duration ms.
 */
export function useCounter(target, duration = 1800, startOnMount = false) {
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const startCount = () => {
      if (counted.current) return;
      counted.current = true;

      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        const current = Math.floor(eased * target);
        el.textContent = current.toLocaleString() + (target >= 1000 ? "+" : target === 68 ? "%" : "");
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (startOnMount) {
      startCount();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCount();
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, startOnMount]);

  return ref;
}
