"use client"

import { Home, Calendar, Briefcase, CheckCircle, Sparkles } from "lucide-react"

const steps = [
  {
    step: "01",
    title: "Explore Plots & Layouts",
    desc: "Review sanctioned dimensions from 1,130 to 5,000 sq.ft tailored for modern duplex villas and grand mansions.",
    icon: Home,
  },
  {
    step: "02",
    title: "Complimentary Site Visit",
    desc: "Book a free pickup and drop site visit across Nagpur to walk the ground and inspect plot boundaries.",
    icon: Calendar,
  },
  {
    step: "03",
    title: "Bank Loan Assistance",
    desc: "Get pre-approved for up to 90% financing through leading nationalized banks (SBI, HDFC, ICICI).",
    icon: Briefcase,
  },
  {
    step: "04",
    title: "Transparent Registration",
    desc: "Complete documentation with clear RL sanctions and immediate registration support with zero brokerage.",
    icon: CheckCircle,
  },
]

export function UserGuideSection() {
  return (
    <section id="user-guide" className="py-14 sm:py-20 bg-stone-50 border-b border-stone-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9862b]/15 text-[#a86a1a] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles size={12} className="text-[#C9862b]" />
            STEP-BY-STEP PROCESS
          </div>
          <h2
            className="text-2xl sm:text-4xl font-extrabold text-[#1e3831] leading-tight mb-2"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            4 Simple Steps to <span style={{ color: "#C9862b" }}>Plot Ownership</span>
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            A transparent and seamless path from plot selection to title registration.
          </p>
        </div>

        {/* 4 Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.step}
                className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-extrabold text-[#C9862b]/40">
                      {s.step}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#30534A]/8 flex items-center justify-center">
                      <Icon size={16} className="text-[#1e3831]" />
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-1 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
