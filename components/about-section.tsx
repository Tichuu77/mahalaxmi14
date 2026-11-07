"use client"

import { useEffect, useState, useRef, useCallback, useMemo } from "react"
import { Users, Building2, CheckCircle2, TrendingUp, ShieldCheck, Sparkles, Phone, Award } from "lucide-react"

const TARGETS = { acres: 78, plots: 524, amenities: 30, finance: 90 } as const
const DURATION = 1800
const STEPS = 40

export function AboutSection() {
  const [counters, setCounters] = useState({ acres: 0, plots: 0, amenities: 0, finance: 0 })
  const sectionRef = useRef<HTMLElement>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const animatedRef = useRef(false)

  const animateCounters = useCallback(() => {
    if (animatedRef.current) return
    animatedRef.current = true
    const interval = DURATION / STEPS
    let cur = { acres: 0, plots: 0, amenities: 0, finance: 0 }
    timerRef.current = setInterval(() => {
      cur.acres     = Math.min(cur.acres + TARGETS.acres / STEPS, TARGETS.acres)
      cur.plots     = Math.min(cur.plots + TARGETS.plots / STEPS, TARGETS.plots)
      cur.amenities = Math.min(cur.amenities + TARGETS.amenities / STEPS, TARGETS.amenities)
      cur.finance   = Math.min(cur.finance + TARGETS.finance / STEPS, TARGETS.finance)
      setCounters({
        acres: Math.floor(cur.acres),
        plots: Math.floor(cur.plots),
        amenities: Math.floor(cur.amenities),
        finance: Math.floor(cur.finance),
      })
      if (cur.acres >= TARGETS.acres && cur.plots >= TARGETS.plots && cur.amenities >= TARGETS.amenities && cur.finance >= TARGETS.finance) {
        clearInterval(timerRef.current!)
        setCounters(TARGETS)
      }
    }, interval)
  }, [])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) animateCounters() },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => { observer.disconnect(); if (timerRef.current) clearInterval(timerRef.current) }
  }, [animateCounters])

  const pillars = useMemo(() => [
    { text: "MahaRERA: PP1190002602003" },
    { text: "NMRDA Sanctioned Layout" },
    { text: "100% Clear RL Legal Title" },
    { text: "Bank Loans Up to 90% (SBI/HDFC)" },
  ], [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-14 sm:py-20 bg-white border-b border-stone-100"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left Column: Visual Showcase */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-stone-200">
            <img
              src="/m51-reception.jpeg"
              alt="Mahalaxmi Nagar 51 Anaya Community"
              className="w-full h-64 sm:h-[400px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold tracking-wider uppercase bg-[#C9862b] text-white mb-1">
                Developer Showcase
              </span>
              <h3 className="text-base sm:text-lg font-bold">
                Grand Reception &amp; Welcome Lounge
              </h3>
              <p className="text-xs text-stone-200">
                Direct booking with Mahalaxmi Infra · Zero Brokerage
              </p>
            </div>
          </div>

          {/* Right Column: Vision & Trust */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9862b]/15 text-[#a86a1a] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles size={13} className="text-[#C9862b]" />
              THE VISION BEHIND ANAYA
            </div>

            <h2
              className="text-2xl sm:text-4xl font-extrabold text-[#1e3831] leading-tight mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Nagpur’s Premier <span style={{ color: "#C9862b" }}>Gated Plotted</span> Township
            </h2>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
              <strong>Mahalaxmi Nagar 51 — Anaya</strong> is an exclusive 78-acre residential plotted development situated at <strong className="text-stone-800">Mouza Sumthana</strong>, directly on the fast-growing Samruddhi Mahamarg Corridor.
            </p>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
              Planned with an emphasis on low-density living, lush green open spaces, wide concrete avenues, and active sports recreation including box cricket &amp; football turfs, a clubhouse, swimming pool, and child daycare. Every plot carries 100% legal compliance with <strong>NMRDA Sanction</strong>, <strong>Clear RL Title</strong>, and <strong>MahaRERA: PP1190002602003</strong>.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6">
              {pillars.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs font-semibold text-stone-800"
                >
                  <CheckCircle2 size={14} className="text-[#C9862b] shrink-0" />
                  <span className="truncate">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Counters */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 pt-2">
              <div className="p-3 rounded-xl bg-[#30534A]/5 text-center">
                <div className="text-lg sm:text-2xl font-extrabold text-[#1e3831]">{counters.acres}+</div>
                <div className="text-[9px] sm:text-[10px] text-stone-600 font-bold uppercase mt-0.5">Acres</div>
              </div>
              <div className="p-3 rounded-xl bg-[#30534A]/5 text-center">
                <div className="text-lg sm:text-2xl font-extrabold text-[#1e3831]">{counters.plots}+</div>
                <div className="text-[9px] sm:text-[10px] text-stone-600 font-bold uppercase mt-0.5">Plots</div>
              </div>
              <div className="p-3 rounded-xl bg-[#30534A]/5 text-center">
                <div className="text-lg sm:text-2xl font-extrabold text-[#1e3831]">{counters.amenities}+</div>
                <div className="text-[9px] sm:text-[10px] text-stone-600 font-bold uppercase mt-0.5">Amenities</div>
              </div>
              <div className="p-3 rounded-xl bg-[#30534A]/5 text-center">
                <div className="text-lg sm:text-2xl font-extrabold text-[#1e3831]">{counters.finance}%</div>
                <div className="text-[9px] sm:text-[10px] text-stone-600 font-bold uppercase mt-0.5">Bank Loan</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
