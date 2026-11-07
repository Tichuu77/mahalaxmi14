"use client"

import { Award, Trees, Zap, Shield, Sparkles } from "lucide-react"

const visualAmenities = [
  {
    title: "Signature Clubhouse & Swimming Pool",
    desc: "Luxury community lifestyle hub with Olympic-length pool, indoor games, and banquet lounge.",
    img: "/m51-club-aerial.jpeg",
    tag: "Club & Pool",
  },
  {
    title: "Football Ground & Box Cricket Turfs",
    desc: "Dedicated floodlit artificial turfs for competitive matches and everyday sports drills.",
    img: "/m51-football-ground.jpeg",
    tag: "Sports Enclave",
  },
  {
    title: "Children’s Adventure Wonderland",
    desc: "Safe rubberized play park with swings, slides, obstacle towers, and shaded benches.",
    img: "/m51-kids-play.jpeg",
    tag: "Kids & Family",
  },
  {
    title: "Signature Clock Tower & Boulevards",
    desc: "Iconic European-inspired clock tower circle, 18m tree-lined main avenues, and LED streetlights.",
    img: "/m51-clock-tower.jpeg",
    tag: "Architecture",
  },
]

const infraPills = [
  { icon: Zap, label: "Underground Electrification" },
  { icon: Shield, label: "24/7 Gated Security & CCTV" },
  { icon: Trees, label: "Central Green Parks & Gardens" },
  { icon: Award, label: "Modern Fitness Gymnasium" },
]

export function AmenitiesSection() {
  return (
    <section id="amenities" className="py-14 sm:py-20 bg-stone-50 border-b border-stone-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9862b]/15 text-[#a86a1a] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles size={12} className="text-[#C9862b]" />
            RESORT LIVING EVERY DAY
          </div>
          <h2
            className="text-2xl sm:text-4xl font-extrabold text-[#1e3831] leading-tight mb-2"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Over 30+ Curated <span style={{ color: "#C9862b" }}>Lifestyle</span> Amenities
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Thoughtfully planned for active recreation, children's safety, and resort-style relaxation.
          </p>
        </div>

        {/* 4 Feature Visual Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {visualAmenities.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200 flex flex-col"
            >
              <div className="relative h-48 sm:h-52 overflow-hidden bg-stone-900">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3 bg-[#1e3831]/90 backdrop-blur-xs text-[#C9862b] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  {item.tag}
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-sm sm:text-base font-bold leading-snug drop-shadow-xs">
                    {item.title}
                  </h3>
                </div>
              </div>
              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Infrastructure Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 pt-2">
          {infraPills.map((pill) => {
            const Icon = pill.icon
            return (
              <div
                key={pill.label}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-xs font-semibold text-stone-700 shadow-xs"
              >
                <Icon size={14} className="text-[#C9862b]" />
                <span>{pill.label}</span>
              </div>
            )
          })}
          <div className="inline-flex items-center px-3.5 py-2 rounded-xl bg-[#1e3831] text-white text-xs font-semibold">
            <span>+25 More Amenities</span>
          </div>
        </div>

      </div>
    </section>
  )
}
