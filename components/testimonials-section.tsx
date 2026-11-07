"use client"

import { Star, Sparkles, Quote } from "lucide-react"

const testimonials = [
  {
    content: "Investing in Mahalaxmi Nagar was an effortless experience. Their transparent process and clear documentation gave me complete confidence. The best decision I ever made.",
    name: "Rajkumar Gharjale",
    location: "Nagpur",
    image: "/testonomials1.webp",
  },
  {
    content: "I wanted to invest in a fast-growing growth corridor, and plots in Mouza Sumthana on Samruddhi Mahamarg are perfect. Mahalaxmi Developers exceeded my expectations.",
    name: "Priya Shah",
    location: "Mumbai",
    image: "/testonomials2.jpg",
  },
  {
    content: "Clear titles, sanctioned RL, and prompt assistance from the sales team gave me real peace of mind. Very smooth bank loan processing too.",
    name: "Karan Akojwar",
    location: "Pune",
    image: "/testonomials3.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-14 sm:py-20 bg-white border-b border-stone-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9862b]/15 text-[#a86a1a] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles size={12} className="text-[#C9862b]" />
            CLIENT EXPERIENCES
          </div>
          <h2
            className="text-2xl sm:text-4xl font-extrabold text-[#1e3831] leading-tight mb-2"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Trusted by Over <span style={{ color: "#C9862b" }}>17,000+</span> Buyers
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Real feedback from verified buyers across Nagpur, Mumbai, and Pune.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-5 sm:p-6 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-4 italic">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-stone-200/60">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-stone-300"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-stone-900 leading-tight">
                    {t.name}
                  </h4>
                  <span className="text-[11px] text-stone-500">{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
