"use client"

import { useState } from "react"
import { Phone, ShieldCheck, CheckCircle2, Sparkles, Maximize2, ChevronDown, Building2 } from "lucide-react"

type PlotCategory = {
  id: string
  title: string
  sizeRange: string
  facing: string
  priceStarting: string
  image: string
  tag: string
  highlights: string[]
}

const PLOT_COLLECTIONS: PlotCategory[] = [
  {
    id: "executive",
    title: "Executive Villa Plots",
    sizeRange: "1,130 – 1,500 Sq.Ft",
    facing: "East / West Facing Available",
    priceStarting: "Starting ₹35.4 Lakh*",
    image: "/m51-entrance-gate.jpeg",
    tag: "Most Popular",
    highlights: ["9m & 12m Concrete Roads", "Ideal for 3-4 BHK Villas", "Up to 90% Bank Loan"],
  },
  {
    id: "boulevard",
    title: "Premium Boulevard Plots",
    sizeRange: "1,800 – 2,500 Sq.Ft",
    facing: "Central Garden & Park Facing",
    priceStarting: "Pricing on Request",
    image: "/m51-clock-tower.jpeg",
    tag: "Garden Facing",
    highlights: ["12m & 18m Tree Boulevards", "Direct Park Frontage", "Spacious Private Lawns"],
  },
  {
    id: "clubhouse",
    title: "Clubhouse Enclave Plots",
    sizeRange: "1,500 – 2,200 Sq.Ft",
    facing: "Clubhouse & Turf Facing",
    priceStarting: "Lifestyle Premium",
    image: "/m51-football-ground.jpeg",
    tag: "Amenities Enclave",
    highlights: ["30-Sec Walk to Pool", "Steps from Sports Turfs", "Children’s Creche Nearby"],
  },
  {
    id: "estate",
    title: "Royal Estate Corner Plots",
    sizeRange: "3,000 – 5,000 Sq.Ft",
    facing: "Double-Side Open Corner",
    priceStarting: "Flagship Luxury",
    image: "/m51-reception.jpeg",
    tag: "Exclusive Release",
    highlights: ["Dual Road Frontages", "Maximum Privacy", "Perfect for Private Mansions"],
  },
]

const otherProjectsList = [
  { title: "Mahalaxmi Nagar-30", location: "MOUZA - PIPLA", status: "Ongoing", img: "/project_M-30.webp" },
  { title: "Mahalaxmi Nagar-31", location: "MOUZA - PIPLA", status: "Ongoing", img: "/project_M-31.webp" },
  { title: "Mahalaxmi Nagar-38", location: "MOUZA - MHASALA", status: "Ongoing", img: "/project_M-38.webp" },
  { title: "Mahalaxmi Nagar-40", location: "MOUZA - KOTEWADA", status: "Ongoing", img: "/M-40-PROJECT.webp" },
  { title: "Mahalaxmi Nagar-45", location: "MOUZA - SUMTHANA", status: "Ongoing", img: "/project_M-45.jpg" },
  { title: "Mahalaxmi Nagar-37", location: "MOUZA - KOTEWADA", status: "Delivered", img: "/M-37-PROJECT.webp" },
  { title: "Mahalaxmi Nagar-36", location: "MOUZA - PANJARI", status: "Delivered", img: "/M-36-PROJECT.jpg" },
  { title: "Mahalaxmi Nagar-28", location: "MOUZA - SONDAPAR", status: "Delivered", img: "/M-28-PROJECT.jpg" },
]

export function ProjectsSection() {
  const [modalImage, setModalImage] = useState<string | null>(null)
  const [showOther, setShowOther] = useState(false)

  const handleInquiry = (title: string, sizeRange: string) => {
    const text = `Hi, I am interested in ${title} (${sizeRange}) at Mahalaxmi Nagar 51 Anaya. Please share layout details and price breakdown.`
    window.open(`https://wa.me/919890072355?text=${encodeURIComponent(text)}`, "_blank")
  }

  return (
    <section id="projects" className="py-14 sm:py-20 bg-white border-b border-stone-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9862b]/15 text-[#a86a1a] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles size={12} className="text-[#C9862b]" />
            MAHARERA PP1190002602003 · NMRDA
          </div>
          <h2
            className="text-2xl sm:text-4xl font-extrabold text-[#1e3831] leading-tight mb-2"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Plot Collections &amp; <span style={{ color: "#C9862b" }}>Master Plan</span>
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Choose from 1,130 sq.ft to 5,000 sq.ft RERA sanctioned residential plots at Mouza Sumthana.
          </p>
        </div>

        {/* Masterplan Preview Banner */}
        <div className="mb-10 rounded-2xl overflow-hidden bg-stone-900 border border-stone-200 relative group">
          <div className="relative h-44 sm:h-64 overflow-hidden">
            <img
              src="/m51-club-aerial.jpeg"
              alt="Mahalaxmi Nagar 51 Masterplan"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 p-5 sm:p-8 flex flex-col justify-between text-white">
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#C9862b] bg-black/40 px-3 py-1 rounded-full backdrop-blur-xs">
                  78-Acre Integrated Township
                </span>
                <button
                  onClick={() => setModalImage("/m51-club-aerial.jpeg")}
                  className="bg-white/20 hover:bg-[#C9862b] text-white px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 backdrop-blur-xs transition-colors cursor-pointer"
                >
                  <Maximize2 size={13} />
                  <span>Enlarge View</span>
                </button>
              </div>

              <div>
                <h3 className="text-lg sm:text-2xl font-bold mb-1">
                  Mahalaxmi Nagar 51 · Anaya Master Layout
                </h3>
                <p className="text-xs text-stone-300 max-w-lg hidden sm:block">
                  Low-density master plan with 524 sanctioned villa plots, wide concrete avenues, and central clubhouse amenities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Clean Plot Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {PLOT_COLLECTIONS.map((plot) => (
            <div
              key={plot.id}
              className="rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-stone-100">
                  <img
                    src={plot.image}
                    alt={plot.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-[#1e3831] text-[#C9862b] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {plot.tag}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-bold text-[#C9862b] block">{plot.sizeRange}</span>
                    <h4 className="text-base font-bold leading-tight drop-shadow-xs">{plot.title}</h4>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-stone-100 text-xs">
                    <span className="text-stone-500">Price Guide:</span>
                    <span className="font-bold text-[#1e3831]">{plot.priceStarting}</span>
                  </div>

                  <div className="space-y-1.5">
                    {plot.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-1.5 text-xs text-stone-600">
                        <CheckCircle2 size={13} className="text-[#C9862b] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-4 pt-0">
                <button
                  onClick={() => handleInquiry(plot.title, plot.sizeRange)}
                  className="w-full py-2.5 rounded-xl bg-[#1e3831] hover:bg-[#284a42] text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shadow-xs"
                >
                  <Phone size={12} className="text-[#C9862b]" />
                  <span>Inquire Price &amp; Layout</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================================
            SIDE-LINED SECTION: OTHER PROJECTS BY MAHALAXMI INFRA
            (Clean collapsible card so it stays out of the way)
           ========================================================================= */}
        <div id="other-projects" className="rounded-2xl border border-stone-200 bg-stone-50 overflow-hidden">
          <button
            onClick={() => setShowOther(!showOther)}
            className="w-full p-4 sm:p-5 flex items-center justify-between text-left cursor-pointer hover:bg-stone-100/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#30534A]/10 flex items-center justify-center shrink-0">
                <Building2 size={18} className="text-[#1e3831]" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#1e3831]">
                  Explore Other Landmark Projects by Mahalaxmi Infra
                </h4>
                <p className="text-xs text-stone-500">
                  Over 13+ years and 70+ delivered residential plotted developments across Nagpur
                </p>
              </div>
            </div>
            <div className={`w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-600 transition-transform ${showOther ? "rotate-180" : ""}`}>
              <ChevronDown size={16} />
            </div>
          </button>

          {showOther && (
            <div className="p-4 sm:p-6 border-t border-stone-200 bg-white animate-in fade-in duration-200">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {otherProjectsList.map((p) => (
                  <div key={p.title} className="rounded-xl border border-stone-200 overflow-hidden bg-stone-50 p-2.5 text-center flex flex-col justify-between">
                    <div>
                      <div className="h-24 rounded-lg overflow-hidden mb-2 bg-stone-200">
                        <img src={p.img} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <h5 className="font-bold text-xs text-stone-800 leading-snug">{p.title}</h5>
                      <p className="text-[10px] text-stone-500 mt-0.5">{p.location}</p>
                    </div>
                    <a
                      href={`https://wa.me/919890072355?text=Hi%2C%20I%20am%20interested%20in%20${encodeURIComponent(p.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 text-[10px] font-bold text-[#C9862b] hover:underline"
                    >
                      Inquire Details →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Fullscreen Masterplan Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setModalImage(null)}
        >
          <div className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden p-3" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-5 right-5 z-10 bg-black/70 hover:bg-black text-white p-2 rounded-full cursor-pointer"
            >
              ✕
            </button>
            <img
              src={modalImage}
              alt="Full Masterplan"
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            />
            <div className="p-2 text-center text-xs text-stone-600 font-semibold">
              Mahalaxmi Nagar 51 (Anaya) · RERA: PP1190002602003 · NMRDA Sanctioned
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
