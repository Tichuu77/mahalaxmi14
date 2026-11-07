"use client"

import { useState, useCallback, memo } from "react"
import { ChevronDown, Sparkles, Phone, MessageSquare } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "Where is Mahalaxmi Nagar 51 (Anaya) located?",
    answer: "Mahalaxmi Nagar 51 Anaya is located at Mouza Sumthana, Nagpur. It directly touches the Samruddhi Mahamarg Expressway Interchange, just 7 minutes from MIHAN SEZ (Infosys, TCS, Tech Mahindra), 8 minutes from AIIMS & NCI Nagpur, and 5 minutes from D-Mart.",
  },
  {
    id: 2,
    question: "What is the RERA and NMRDA approval status?",
    answer: "The project is 100% legally approved and sanctioned by NMRDA (Nagpur Metropolitan Region Development Authority) with clear RL sanctions. Registered under MahaRERA with Project Registration No: PP1190002602003.",
  },
  {
    id: 3,
    question: "What plot sizes are available in Mahalaxmi Nagar 51?",
    answer: "Anaya offers plot sizes from 1,130 sq.ft. up to 5,000 sq.ft. (including 1,130, 1,250, 1,500, 1,800, 2,400, and 5,000 sq.ft). Options include Executive Villa Plots, Central Park-Facing Boulevard Plots, and Dual-Frontage Royal Estate Corner Plots.",
  },
  {
    id: 4,
    question: "What is the price range and booking token amount?",
    answer: "Residential plots start from ₹35.4 Lakh* onwards, depending on plot size, location, and facing. Booking tokens start from ₹51,000, with structured payment stages linked to bank loan disbursements.",
  },
  {
    id: 5,
    question: "Is bank loan finance available?",
    answer: "Yes, up to 85% to 90% bank loan financing is sanctioned and available from leading nationalized and private banks including SBI, HDFC, ICICI, Bank of Baroda, and Axis Bank.",
  },
  {
    id: 6,
    question: "What amenities are provided in the township?",
    answer: "Anaya features 30+ modern lifestyle amenities including a Grand Clubhouse, Olympic-length Swimming Pool, Floodlit Football & Box Cricket Sports Turfs, Gymnasium, Children's Play Area, Daycare Crèche, Cement Concrete Roads (9m, 12m, 18m), Underground Electrification, and 24/7 Gated Security.",
  },
  {
    id: 7,
    question: "How can I book a free site visit?",
    answer: "You can connect directly with representative Nitesh P Duratkar by calling +91 9890072355 or messaging on WhatsApp. Complimentary pickup and drop site visits are arranged 7 days a week across Nagpur.",
  },
]

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1)

  const toggle = useCallback((id: number) => {
    setOpenId((prev) => (prev === id ? null : id))
  }, [])

  return (
    <section id="faq" className="py-14 sm:py-20 bg-stone-50 border-b border-stone-100">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9862b]/15 text-[#a86a1a] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles size={12} className="text-[#C9862b]" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2
            className="text-2xl sm:text-4xl font-extrabold text-[#1e3831] leading-tight mb-2"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Clear Answers &amp; <span style={{ color: "#C9862b" }}>Transparency</span>
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Verified information on project approvals, plot sizes, pricing, and bank financing.
          </p>
        </div>

        {/* Clean Accordion List */}
        <div className="space-y-3 mb-10">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div
                key={faq.id}
                className="rounded-2xl overflow-hidden bg-white border border-stone-200 transition-all duration-200"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className={`font-bold text-xs sm:text-sm leading-snug transition-colors ${isOpen ? "text-[#C9862b]" : "text-stone-800"}`}>
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform ${isOpen ? "rotate-180 bg-[#1e3831] text-white" : "text-stone-600"}`}>
                    <ChevronDown size={14} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Assistance Card */}
        <div className="p-4 sm:p-6 rounded-2xl bg-white border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-stone-900 mb-0.5">
              Still have questions about Mahalaxmi Nagar 51?
            </h4>
            <p className="text-xs text-stone-500">
              Speak directly with representative Nitesh P Duratkar (+91 9890072355).
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="tel:+919890072355"
              className="px-4 py-2.5 rounded-xl bg-[#1e3831] hover:bg-[#284a42] text-white text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <Phone size={13} className="text-[#C9862b]" />
              Call Direct
            </a>
            <a
              href="https://wa.me/919890072355?text=Hi%20Nitesh%20ji%2C%20I%20have%20questions%20about%20Mahalaxmi%20Nagar%2051%20Anaya."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <MessageSquare size={13} className="text-emerald-600" />
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
