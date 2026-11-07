"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { X, Sparkles, Phone, User, Home, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react"
import { normalizePhone10, isBlockedOrFakePhone10, recordSubmittedPhone } from "@/lib/form-protection"

export function ContactPopup() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState("")
  const [mobile, setMobile] = useState("")
  const [plotCategory, setPlotCategory] = useState("Executive Villa Plot (1,130 – 1,500 Sq.Ft)")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  useEffect(() => {
    // Show on first-time open unless already dismissed or submitted in this session
    if (typeof window !== "undefined") {
      const hideOnce = sessionStorage.getItem("hideContactPopupOnce")
      const submitted = localStorage.getItem("formSubmitted")

      if (!hideOnce && !submitted) {
        // Smooth 600ms entrance on page load
        const timer = setTimeout(() => {
          setIsOpen(true)
        }, 600)
        return () => clearTimeout(timer)
      }
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    if (typeof window !== "undefined") {
      sessionStorage.setItem("hideContactPopupOnce", "true")
    }
  }

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "").slice(0, 10)
    setMobile(raw)
    if (errorMsg) setErrorMsg("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg("")

    const trimmedName = name.trim()
    const phone10 = normalizePhone10(mobile.trim())

    if (!trimmedName) {
      setErrorMsg("Please enter your full name.")
      return
    }

    if (isBlockedOrFakePhone10(phone10)) {
      setErrorMsg("Please enter a valid 10-digit mobile number.")
      return
    }

    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append("access_key", "7a6bc102-dcc3-4f79-a088-0a0f5bd21923")
      formData.append("name", trimmedName)
      formData.append("subject", `New Inquiry: Mahalaxmi Nagar 51 (${plotCategory}) - Quick Popup`)
      formData.append(
        "message",
        `Project: Mahalaxmi Nagar 51 (Anaya Township)\nName: ${trimmedName}\nMobile: ${phone10}\nInterested Plot: ${plotCategory}\nLead Type: First-Time Website Popup\nAssigned Desk: Nitesh P Duratkar (+91 9890072355)`
      )

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })
      const data = await res.json()

      if (typeof window !== "undefined") {
        sessionStorage.setItem("hideContactPopupOnce", "true")
        localStorage.setItem("formSubmitted", "true")
        localStorage.setItem("formSubmittedAt", String(Date.now()))
        recordSubmittedPhone(phone10)
      }

      setIsOpen(false)
      router.push("/thank-you")
    } catch {
      // In case of network error, still route to thank-you and store state
      if (typeof window !== "undefined") {
        sessionStorage.setItem("hideContactPopupOnce", "true")
        localStorage.setItem("formSubmitted", "true")
        recordSubmittedPhone(phone10)
      }
      setIsOpen(false)
      router.push("/thank-you")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose()
      }}
    >
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden transform transition-all animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          type="button"
          aria-label="Close dialog"
          className="absolute top-3.5 right-3.5 z-10 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition-all active:scale-95"
        >
          <X size={18} />
        </button>

        {/* Modal Top Header */}
        <div className="bg-[#1e3831] text-white p-5 sm:p-6 pb-6 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#C9862b]/20 rounded-full blur-2xl pointer-events-none" />
          
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C9862b]/20 text-[#f5caa0] text-[10px] font-bold uppercase tracking-wider mb-2">
            <Sparkles size={11} className="text-[#C9862b]" />
            MAHARERA PP1190002602003 · NMRDA
          </div>

          <h3
            className="text-xl sm:text-2xl font-extrabold leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Mahalaxmi Nagar 51 <span className="text-[#C9862b]">Anaya</span>
          </h3>
          <p className="text-xs sm:text-[13px] text-stone-200 mt-1 leading-snug">
            Get instant plot price breakdown, sanctioned layout PDF &amp; schedule your free VIP cab site visit.
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-3.5">
          {errorMsg && (
            <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
              {errorMsg}
            </div>
          )}

          {/* Full Name */}
          <div>
            <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wide mb-1">
              Your Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                  if (errorMsg) setErrorMsg("")
                }}
                placeholder="Enter your full name"
                className="w-full pl-10 pr-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#C9862b] focus:ring-2 focus:ring-[#C9862b]/15 transition-all"
              />
            </div>
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wide mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <div className="relative flex">
              <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-stone-300 bg-stone-100 text-stone-700 text-xs sm:text-sm font-semibold">
                +91
              </span>
              <input
                type="tel"
                required
                inputMode="numeric"
                maxLength={10}
                value={mobile}
                onChange={handleMobileChange}
                placeholder="10-digit mobile number"
                className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-r-xl text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#C9862b] focus:ring-2 focus:ring-[#C9862b]/15 transition-all"
              />
            </div>
          </div>

          {/* Plot Collection Interest */}
          <div>
            <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wide mb-1">
              Interested Plot Size
            </label>
            <div className="relative">
              <Home size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
              <select
                value={plotCategory}
                onChange={(e) => setPlotCategory(e.target.value)}
                className="w-full pl-10 pr-8 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-[#C9862b] focus:ring-2 focus:ring-[#C9862b]/15 transition-all appearance-none cursor-pointer"
              >
                <option value="Executive Villa Plot (1,130 – 1,500 Sq.Ft)">
                  Executive Villa Plot (1,130 – 1,500 Sq.Ft)
                </option>
                <option value="Premium Boulevard Plot (1,800 – 2,500 Sq.Ft)">
                  Premium Boulevard Plot (1,800 – 2,500 Sq.Ft)
                </option>
                <option value="Clubhouse Enclave Plot (1,500 – 2,200 Sq.Ft)">
                  Clubhouse Enclave Plot (1,500 – 2,200 Sq.Ft)
                </option>
                <option value="Royal Estate Corner Plot (3,000+ Sq.Ft)">
                  Royal Estate Corner Plot (3,000+ Sq.Ft)
                </option>
                <option value="Need Consultation / Any Size">
                  Need Consultation / Any Size
                </option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white shadow-lg shadow-[#C9862b]/25 transition-all active:scale-[0.99] flex items-center justify-center gap-2 mt-2 disabled:opacity-75 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #d38b28 0%, #b3731c 100%)",
            }}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                <span>Submitting Your Request...</span>
              </>
            ) : (
              <>
                <span>Get Cost Sheet &amp; Free Site Visit</span>
                <ArrowRight size={15} />
              </>
            )}
          </button>

          {/* Trust Micro-Badges */}
          <div className="pt-2 flex flex-col items-center gap-1 text-[11px] text-stone-500 text-center">
            <div className="flex items-center gap-1.5 font-medium text-stone-700">
              <ShieldCheck size={13} className="text-[#C9862b]" />
              <span>Direct Developer Sales Desk · Zero Brokerage</span>
            </div>
            <span className="text-[10px] text-stone-400">
              Assigned: Nitesh P Duratkar (+91 9890072355)
            </span>
          </div>

        </form>
      </div>
    </div>
  )
}

