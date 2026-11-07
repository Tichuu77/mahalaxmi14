"use client"

import { Route, School, Building2, ShoppingBag, Hospital, Plane, Train, MapPin, Car, Phone } from "lucide-react"

const connectivityNodes = [
  {
    icon: Route,
    landmark: "Samruddhi Mahamarg",
    distance: "Direct Interchange",
    time: "2 Mins",
    detail: "Directly touching the Samruddhi Expressway interchange for rapid connectivity.",
  },
  {
    icon: ShoppingBag,
    landmark: "D-Mart & Retail Zone",
    distance: "2.5 Km",
    time: "5 Mins",
    detail: "Hypermarket, grocery essentials, restaurants, and local convenience centers.",
  },
  {
    icon: Building2,
    landmark: "MIHAN SEZ & Tech Park",
    distance: "4.8 Km",
    time: "7 Mins",
    detail: "Home to Infosys, TCS, Tech Mahindra, Boeing MRO & 50,000+ professionals.",
  },
  {
    icon: Hospital,
    landmark: "AIIMS & NCI Hospital",
    distance: "5.5 Km",
    time: "8 Mins",
    detail: "All India Institute of Medical Sciences & National Cancer Institute facilities.",
  },
  {
    icon: Train,
    landmark: "Nagpur Metro Phase 3",
    distance: "4.0 Km",
    time: "8 Mins",
    detail: "Rapid transit corridor ensuring fast, traffic-free commute to Nagpur city.",
  },
  {
    icon: Plane,
    landmark: "International Airport",
    distance: "12 Km",
    time: "15 Mins",
    detail: "Quick airport run via signal-free outer ring corridors.",
  },
]

export function LocationsSection() {
  return (
    <section id="location" className="py-14 sm:py-20 bg-stone-50 border-b border-stone-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#30534A]/8 text-[#1e3831] text-xs font-bold uppercase tracking-wider mb-2">
            <MapPin size={12} className="text-[#C9862b]" />
            MOUZA SUMTHANA, NAGPUR
          </div>
          <h2
            className="text-2xl sm:text-4xl font-extrabold text-[#1e3831] leading-tight mb-2"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Connected to Everything <span style={{ color: "#C9862b" }}>That Matters</span>
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Touching Samruddhi Mahamarg Corridor, minutes from MIHAN SEZ, AIIMS, and Wardha Road.
          </p>
        </div>

        {/* 6 Grid Nodes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {connectivityNodes.map((node) => {
            const Icon = node.icon
            return (
              <div
                key={node.landmark}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#30534A]/8 flex items-center justify-center">
                      <Icon size={18} className="text-[#C9862b]" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#1e3831] text-white text-[11px] font-bold">
                      {node.time}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-1 leading-snug">
                    {node.landmark}
                  </h3>
                  <p className="text-xs text-stone-500 leading-relaxed mb-3">
                    {node.detail}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px]">
                  <span className="text-stone-400 font-medium">Distance</span>
                  <span className="text-[#1e3831] font-bold">{node.distance}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Site Visit Cab Banner */}
        <div className="rounded-2xl bg-[#1e3831] p-5 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold mb-2">
              <Car size={13} className="text-[#C9862b]" />
              Free Site Visit Assistance
            </div>
            <h3 className="text-lg sm:text-2xl font-bold mb-1">
              Experience Mouza Sumthana in Person
            </h3>
            <p className="text-xs text-stone-300">
              Complimentary pickup and drop service across Nagpur with representative Nitesh P Duratkar.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
            <a
              href="tel:+919890072355"
              className="flex-1 sm:flex-initial px-5 py-3 rounded-xl font-bold text-xs bg-[#C9862b] hover:bg-[#b8751e] text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Phone size={14} />
              <span>Call (+91 9890072355)</span>
            </a>
            <a
              href="#contact"
              className="flex-1 sm:flex-initial px-5 py-3 rounded-xl font-semibold text-xs border border-white/25 hover:bg-white/10 text-white text-center transition-colors cursor-pointer"
            >
              Book Online
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
