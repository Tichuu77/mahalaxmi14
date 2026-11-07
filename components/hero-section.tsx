"use client"

import { useEffect, useState, useCallback } from "react"
import { ArrowRight, MapPin, ShieldCheck, Sparkles, Compass, Phone, MessageSquare, CheckCircle2, Calendar } from "lucide-react"

const TOWNSHIP_SPECS = [
  { value: "78+",  unit: "Acres",  label: "Township" },
  { value: "524",  unit: "Plots",  label: "RERA Plots" },
  { value: "30+",  unit: "Luxury", label: "Amenities" },
  { value: "90%",  unit: "Loan",   label: "Financing" },
]

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setIsLoaded(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }, [])

  const scrollToContact  = useCallback(() => scrollTo("contact"),  [scrollTo])
  const scrollToProjects = useCallback(() => scrollTo("projects"), [scrollTo])

  return (
    <section className="relative min-h-[88vh] sm:min-h-[92vh] flex items-center pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden bg-[#0c1a15]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/m51-entrance-gate.jpeg"
          alt="Mahalaxmi Nagar 51 Anaya Township Entrance"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 opacity-50"
          fetchPriority="high"
          decoding="sync"
          width={1440}
          height={900}
        />
      </div>

      {/* Modern Directional Lighting Overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(110deg, rgba(12,26,21,0.96) 0%, rgba(12,26,21,0.88) 50%, rgba(12,26,21,0.65) 85%, rgba(12,26,21,0.45) 100%)",
        }}
      />

      {/* Main Content Grid */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] items-center gap-8 lg:gap-12">

          {/* LEFT: Project Headline & Story */}
          <div className="flex flex-col justify-center">

            {/* Badges */}
            <div className={`transition-all duration-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase text-white shadow-xs"
                  style={{
                    background: "linear-gradient(135deg, #C9862b, #a86a1a)",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  <Sparkles size={12} className="text-white" />
                  FLAGSHIP TOWNSHIP
                </span>

                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold text-white/90 bg-white/10 border border-white/15 backdrop-blur-xs">
                  <ShieldCheck size={13} className="text-[#C9862b]" />
                  MahaRERA: PP1190002602003 · NMRDA
                </span>
              </div>
            </div>

            {/* Headline */}
            <div
              className={`transition-all duration-600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "60ms" }}
            >
              <h1
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 3.8rem)",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  color: "#ffffff",
                }}
                className="mb-3 text-balance"
              >
                Mahalaxmi Nagar 51
                <br />
                <span style={{ color: "#C9862b" }}>Anaya Township</span>
              </h1>

              <p className="text-sm sm:text-base text-stone-200/90 leading-relaxed max-w-xl mb-5 font-normal">
                Nagpur's premier 78-acre low-density gated plotted enclave at <strong className="text-white font-semibold">Mouza Sumthana</strong>, directly touching the <strong className="text-[#C9862b] font-semibold">Samruddhi Mahamarg Corridor</strong>, just 7 mins from MIHAN SEZ &amp; AIIMS.
              </p>
            </div>

            {/* Quick Location & Pricing Chips */}
            <div
              className={`flex flex-wrap items-center gap-2.5 mb-6 transition-all duration-600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "120ms" }}
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-white/90 bg-white/10 border border-white/10">
                <MapPin size={13} className="text-[#C9862b]" />
                <span>Mouza Sumthana, Nagpur</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#C9862b]/20 border border-[#C9862b]/40">
                <span>Plots from</span>
                <span className="text-[#C9862b] font-extrabold">₹35.4 Lakh*</span>
                <span className="text-white/60">|</span>
                <span className="text-white/80">Token ₹51,000</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              className={`flex flex-wrap items-center gap-3 mb-8 transition-all duration-600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "180ms" }}
            >
              <button
                onClick={scrollToContact}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-xs sm:text-sm shadow-md hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #C9862b 0%, #b8751e 100%)",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                <Calendar size={15} />
                Book Free Site Visit
                <ArrowRight size={15} />
              </button>

              <button
                onClick={scrollToProjects}
                className="flex items-center gap-1.5 px-5 py-3 rounded-xl text-white font-semibold text-xs sm:text-sm border border-white/20 hover:border-[#C9862b] hover:bg-white/5 active:scale-95 transition-all cursor-pointer"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <Compass size={15} className="text-[#C9862b]" />
                View Plot Layouts
              </button>

              <a
                href="tel:+919890072355"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-white/90 font-medium text-xs sm:text-sm border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
              >
                <Phone size={14} className="text-[#C9862b]" />
                +91 9890072355
              </a>
            </div>

            {/* Horizontal Specs Bar */}
            <div
              className={`grid grid-cols-4 gap-2 sm:gap-3 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "240ms" }}
            >
              {TOWNSHIP_SPECS.map((spec) => (
                <div
                  key={spec.label}
                  className="p-2 sm:p-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xs text-center"
                >
                  <div className="flex items-baseline justify-center gap-0.5">
                    <span
                      className="text-base sm:text-2xl font-extrabold text-[#C9862b]"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {spec.value}
                    </span>
                    <span className="text-[10px] sm:text-xs text-white/70 font-semibold">{spec.unit}</span>
                  </div>
                  <div className="text-[10px] sm:text-xs text-stone-300 font-medium mt-0.5 truncate">{spec.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT: Desktop Highlights Card (Hidden on Mobile to remove clutter) */}
          <div className="hidden lg:flex flex-col items-end justify-center">
            <div className="w-full max-w-[370px] rounded-2xl overflow-hidden bg-white shadow-2xl border border-stone-200">
              {/* Header */}
              <div className="p-4 bg-stone-50 border-b border-stone-200 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/Malaxmi-Final-Logo.-2png.png"
                    alt="Mahalaxmi Infra Logo"
                    className="w-9 h-9 object-contain"
                  />
                  <div>
                    <span className="block text-xs font-extrabold text-[#1e3831] tracking-tight">
                      MAHALAXMI NAGAR 51
                    </span>
                    <span className="block text-[9px] font-bold text-[#C9862b] uppercase tracking-wider">
                      DIRECT SALES DESK
                    </span>
                  </div>
                </div>
                <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  RERA APPROVED
                </span>
              </div>

              {/* Specs List */}
              <div className="p-4 space-y-2 text-xs">
                <div className="flex justify-between p-2 rounded-lg bg-stone-50 text-stone-700">
                  <span className="text-stone-500">Project RERA:</span>
                  <span className="font-bold text-[#1e3831]">PP1190002602003</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-stone-50 text-stone-700">
                  <span className="text-stone-500">Sanction:</span>
                  <span className="font-bold text-[#C9862b]">NMRDA Sanctioned RL</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-stone-50 text-stone-700">
                  <span className="text-stone-500">Plot Sizes:</span>
                  <span className="font-bold text-stone-800">1,130 to 5,000 Sq.Ft</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-stone-50 text-stone-700">
                  <span className="text-stone-500">Starting Price:</span>
                  <span className="font-extrabold text-[#C9862b]">₹35.40 Lakh*</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-stone-50 text-stone-700">
                  <span className="text-stone-500">Bank Loan:</span>
                  <span className="font-bold text-[#1e3831]">Up to 90% (SBI/HDFC)</span>
                </div>

                {/* CTAs */}
                <div className="pt-2 space-y-2">
                  <button
                    onClick={scrollToContact}
                    className="w-full py-2.5 rounded-xl text-white font-bold text-xs bg-[#1e3831] hover:bg-[#284a42] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Calendar size={13} className="text-[#C9862b]" />
                    Book Free Site Visit
                  </button>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="tel:+919890072355"
                      className="py-2 text-center rounded-xl border border-stone-300 hover:border-[#C9862b] text-stone-800 font-bold text-xs transition-colors flex items-center justify-center gap-1"
                    >
                      <Phone size={12} className="text-[#C9862b]" />
                      Call Direct
                    </a>
                    <a
                      href="https://wa.me/919890072355?text=Hi%2C%20I%20am%20interested%20in%20Mahalaxmi%20Nagar%2051%20Anaya%20plots."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 text-center rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-800 font-bold text-xs hover:bg-emerald-100 transition-colors flex items-center justify-center gap-1"
                    >
                      <MessageSquare size={12} className="text-emerald-600" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="py-2 px-3 bg-stone-100 text-center text-[10px] text-stone-600 font-medium">
                Representative: Nitesh P Duratkar · Agent RERA: A50400041466
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
