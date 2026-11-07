"use client"

import { Check, ShieldCheck, TrendingUp, Sparkles, Phone, Award, Compass, Lightbulb, Landmark } from "lucide-react"

const reasons = [
  {
    icon: Landmark,
    title: "Samruddhi Expressway Junction",
    description: "Located at Mouza Sumthana directly on the Samruddhi Mahamarg Corridor — Nagpur's highest appreciation belt.",
    stat: "7 Mins",
    statLabel: "To MIHAN",
  },
  {
    icon: Award,
    title: "100% NMRDA & MahaRERA Sanctioned",
    description: "Approved under MahaRERA PP1190002602003 with sanctioned RL layout. Absolute safety and clear title guarantee.",
    stat: "100%",
    statLabel: "Clear Title",
  },
  {
    icon: TrendingUp,
    title: "Up to 90% Bank Finance Approved",
    description: "Pre-approved by leading nationalized and private banks (SBI, HDFC, ICICI, BoB) for quick loan processing.",
    stat: "90%",
    statLabel: "Finance",
  },
  {
    icon: Compass,
    title: "Clear RL Title & Instant Registry",
    description: "Free of encumbrances with verified RL release. Buyers receive transparent paperwork, registry support & demarcation.",
    stat: "524",
    statLabel: "Sanctioned Plots",
  },
  {
    icon: Lightbulb,
    title: "Plots Starting from ₹35.4 Lakh*",
    description: "Plot sizes from 1,130 to 5,000 sq.ft at competitive per-square-foot rates. Booking token starts from ₹51,000.",
    stat: "₹35.4L*",
    statLabel: "Starting Price",
  },
  {
    icon: ShieldCheck,
    title: "Direct Developer Booking Desk",
    description: "Direct booking with Mahalaxmi Infra — zero brokerage, transparent pricing, and complete end-to-end assistance.",
    stat: "13+",
    statLabel: "Years Trust",
  },
]

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-14 sm:py-20 bg-stone-50 border-b border-stone-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9862b]/15 text-[#a86a1a] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles size={12} className="text-[#C9862b]" />
            INVESTMENT HIGHLIGHTS
          </div>
          <h2
            className="text-2xl sm:text-4xl font-extrabold text-[#1e3831] leading-tight mb-2"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Why Invest in <span style={{ color: "#C9862b" }}>Mahalaxmi Nagar 51</span>?
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Nagpur's fastest appreciating residential belt touching the Samruddhi Mahamarg Expressway.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
          {reasons.map((r) => {
            const Icon = r.icon
            return (
              <div
                key={r.title}
                className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#30534A]/8 flex items-center justify-center">
                      <Icon size={18} className="text-[#C9862b]" />
                    </div>
                    <div className="text-right">
                      <span className="text-base sm:text-lg font-extrabold text-[#1e3831] block leading-none">
                        {r.stat}
                      </span>
                      <span className="text-[10px] text-stone-400 font-bold uppercase">{r.statLabel}</span>
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-1 leading-snug">
                    {r.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {r.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-100 flex items-center gap-1.5 text-xs font-semibold text-[#1e3831]">
                  <Check size={13} className="text-[#C9862b]" />
                  <span>100% Verified</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Quick CTA Banner */}
        <div className="p-4 sm:p-6 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-stone-900 mb-0.5">
              Looking for a specific plot orientation or corner plot?
            </h4>
            <p className="text-xs text-stone-500">
              Contact representative Nitesh P Duratkar at <strong className="text-[#1e3831]">+91 9890072355</strong> for live plot inventory.
            </p>
          </div>
          <a
            href="tel:+919890072355"
            className="px-5 py-2.5 rounded-xl bg-[#1e3831] text-white text-xs font-bold hover:bg-[#284a42] transition-colors flex items-center gap-1.5 shrink-0"
          >
            <Phone size={13} className="text-[#C9862b]" />
            Call Sales Desk
          </a>
        </div>

      </div>
    </section>
  )
}
