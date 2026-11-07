"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { CheckCircle2, Phone, MessageSquare, ArrowLeft, Sparkles, ShieldCheck } from "lucide-react"

export default function ThankYouPage() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(6)

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("hideContactPopupOnce", "true")
    }

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          router.push("/")
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [router])

  return (
    <main className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-stone-50">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-xl border border-stone-200 p-6 sm:p-10 text-center relative overflow-hidden">
        
        {/* Decorative Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#1e3831] via-[#C9862b] to-[#1e3831]" />

        {/* Success Icon */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-50 border-4 border-emerald-100 flex items-center justify-center mx-auto mb-5 text-emerald-600">
          <CheckCircle2 size={40} className="stroke-[2.5]" />
        </div>

        {/* RERA Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9862b]/15 text-[#a86a1a] text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles size={12} className="text-[#C9862b]" />
          MAHARERA PP1190002602003 · NMRDA
        </div>

        {/* Heading */}
        <h1
          className="text-2xl sm:text-3xl font-extrabold text-[#1e3831] leading-tight mb-2"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Thank You! <span style={{ color: "#C9862b" }}>Request Received</span>
        </h1>

        <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
          We have received your inquiry for <strong>Mahalaxmi Nagar 51 (Anaya)</strong>. Our representative <strong>Nitesh P Duratkar</strong> will share the cost sheet, layout map, and schedule your free VIP site visit shortly.
        </p>

        {/* Direct Connect Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <a
            href="https://wa.me/919890072355?text=Hi%20Nitesh%20ji%2C%20I%20just%20submitted%20my%20inquiry%20for%20Mahalaxmi%20Nagar%2051.%20Please%20share%20the%20cost%20sheet%20and%20layout."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
          >
            <MessageSquare size={16} />
            Chat on WhatsApp
          </a>

          <a
            href="tel:+919890072355"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1e3831] hover:bg-[#284940] text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
          >
            <Phone size={15} />
            Call +91 9890072355
          </a>
        </div>

        {/* Countdown & Return */}
        <div className="pt-4 border-t border-stone-100 flex flex-col items-center gap-2">
          <span className="text-[11px] text-stone-400">
            Automatically redirecting to website in {countdown}s…
          </span>
          <Link
            href="/"
            onClick={() => {
              if (typeof window !== "undefined") {
                sessionStorage.setItem("hideContactPopupOnce", "true")
              }
            }}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#a86a1a] hover:text-[#1e3831] transition-colors"
          >
            <ArrowLeft size={13} />
            Return to Homepage Now
          </Link>
        </div>

      </div>
    </main>
  )
}
