"use client"

import { Phone, MessageSquare, Compass, CalendarCheck } from "lucide-react"

export function MobileAppBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-stone-200/80 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-4 py-2 flex items-center justify-around pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <a
        href="tel:+919890072355"
        className="flex flex-col items-center gap-1 text-[#1e342e] active:scale-95 transition-transform px-2 py-1"
        aria-label="Call Sales Desk"
      >
        <div className="w-8 h-8 rounded-full bg-[#30534A]/8 flex items-center justify-center">
          <Phone size={15} className="text-[#C9862b]" />
        </div>
        <span className="text-[10px] font-semibold tracking-tight text-stone-700">Call</span>
      </a>

      <a
        href="https://wa.me/919890072355?text=Hi%2C%20I%20am%20interested%20in%20Mahalaxmi%20Nagar%2051%20Anaya%20plots.%20Please%20share%20layout%20and%20pricing."
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 text-[#1e342e] active:scale-95 transition-transform px-2 py-1"
        aria-label="WhatsApp Inquiry"
      >
        <div className="w-8 h-8 rounded-full bg-[#25D366]/15 flex items-center justify-center">
          <MessageSquare size={15} className="text-[#25D366]" />
        </div>
        <span className="text-[10px] font-semibold tracking-tight text-stone-700">WhatsApp</span>
      </a>

      <a
        href="#projects"
        className="flex flex-col items-center gap-1 text-[#1e342e] active:scale-95 transition-transform px-2 py-1"
        aria-label="View Plot Layouts"
      >
        <div className="w-8 h-8 rounded-full bg-[#30534A]/8 flex items-center justify-center">
          <Compass size={15} className="text-[#30534A]" />
        </div>
        <span className="text-[10px] font-semibold tracking-tight text-stone-700">Plots</span>
      </a>

      <a
        href="#contact"
        className="flex items-center gap-1.5 px-4 py-2.5 rounded-full text-white text-xs font-bold shadow-md shadow-[#C9862b]/25 active:scale-95 transition-transform"
        style={{
          background: "linear-gradient(135deg, #C9862b 0%, #b8751e 100%)",
        }}
        aria-label="Book Free Site Visit"
      >
        <CalendarCheck size={13} />
        <span>Site Visit</span>
      </a>
    </div>
  )
}
