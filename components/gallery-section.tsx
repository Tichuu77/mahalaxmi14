"use client"

import { useEffect, useState, useCallback } from "react"
import { X, ChevronLeft, ChevronRight, Sparkles, Maximize2 } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    src: "/m51-entrance-gate.jpeg",
    title: "Grand Entrance Arch & Tree-Lined Boulevard",
    category: "Entrance",
  },
  {
    id: 2,
    src: "/m51-club-aerial.jpeg",
    title: "Signature Clubhouse & Olympic Swimming Pool",
    category: "Club & Pool",
  },
  {
    id: 3,
    src: "/m51-clock-tower.jpeg",
    title: "Iconic Clock Tower Circle & Main Avenue",
    category: "Landmark",
  },
  {
    id: 4,
    src: "/m51-football-ground.jpeg",
    title: "Football Ground & Box Cricket Sports Turfs",
    category: "Sports Enclave",
  },
  {
    id: 5,
    src: "/m51-kids-play.jpeg",
    title: "Children’s Adventure Play Wonderland",
    category: "Kids Play",
  },
  {
    id: 6,
    src: "/m51-reception.jpeg",
    title: "Township Reception & Welcome Lounge",
    category: "Reception",
  },
]

const TOTAL = galleryItems.length
const nextId = (id: number) => galleryItems[(galleryItems.findIndex(i => i.id === id) + 1) % TOTAL].id
const prevId = (id: number) => galleryItems[(galleryItems.findIndex(i => i.id === id) - 1 + TOTAL) % TOTAL].id

export function GallerySection() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const handleOpen = useCallback((id: number) => setSelectedId(id), [])
  const handleClose = useCallback(() => setSelectedId(null), [])
  const handlePrev = useCallback(() => setSelectedId(prev => prev !== null ? prevId(prev) : null), [])
  const handleNext = useCallback(() => setSelectedId(prev => prev !== null ? nextId(prev) : null), [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose()
      if (e.key === "ArrowLeft") handlePrev()
      if (e.key === "ArrowRight") handleNext()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [handleClose, handlePrev, handleNext])

  const activeItem = selectedId !== null ? galleryItems.find(i => i.id === selectedId) : null

  return (
    <section id="gallery" className="py-14 sm:py-20 bg-white border-b border-stone-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9862b]/15 text-[#a86a1a] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles size={12} className="text-[#C9862b]" />
            VISUAL SHOWCASE
          </div>
          <h2
            className="text-2xl sm:text-4xl font-extrabold text-[#1e3831] leading-tight mb-2"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Mahalaxmi Nagar 51 <span style={{ color: "#C9862b" }}>Gallery</span>
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            A visual tour through Nagpur’s premier 78-acre low-density gated enclave.
          </p>
        </div>

        {/* Clean Responsive Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpen(item.id)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-stone-900 border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 relative h-60 sm:h-72"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-3.5 left-3.5 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-white/20">
                {item.category}
              </div>

              <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/50 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={13} />
              </div>

              <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                <h3 className="text-sm sm:text-base font-bold leading-snug drop-shadow-xs">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={handleClose}
        >
          <div
            className="relative max-w-4xl w-full bg-[#1e3831] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3.5 px-5 border-b border-white/10 text-white">
              <span className="text-xs font-bold text-[#C9862b] uppercase tracking-wider">
                {activeItem.category} · Mahalaxmi Nagar 51 Anaya
              </span>
              <button
                onClick={handleClose}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Photo Container */}
            <div className="relative max-h-[70vh] flex items-center justify-center bg-black/50 overflow-hidden">
              <img
                src={activeItem.src}
                alt={activeItem.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />

              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-[#C9862b] text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
                aria-label="Previous"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-[#C9862b] text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
                aria-label="Next"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Caption */}
            <div className="p-4 px-5 bg-[#172c27] text-white">
              <h4 className="text-sm sm:text-base font-bold">{activeItem.title}</h4>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
