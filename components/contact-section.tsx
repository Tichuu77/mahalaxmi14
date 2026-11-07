"use client"

import { useState, useCallback, memo, useRef } from "react"
import { useRouter } from "next/navigation"
import { Mail, Phone, MapPin, Send, CheckCircle, ShieldCheck, UserCheck, MessageSquare, Calendar } from "lucide-react"
import {
  normalizePhone10,
  isBlockedOrFakePhone10,
  hasSubmittedThisPhone,
  recordSubmittedPhone,
  validateFillDuration,
} from "@/lib/form-protection"

type FormState = { name: string; mobile: string; plotCategory: string; visitDate: string }
const EMPTY_FORM: FormState = { name: "", mobile: "", plotCategory: "Executive Villa Plot (1,130 - 1,500 Sq.Ft)", visitDate: "" }
const COOLDOWN_MS = 12 * 60 * 60 * 1000
type SubmitStatus = "idle" | "error" | "rateLimit" | "spam" | "timing" | "interaction" | "phone" | "duplicatePhone"

export default function ContactSection() {
  const router = useRouter()
  const [formState, setFormState] = useState<FormState>(EMPTY_FORM)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle")
  const [honeypot, setHoneypot] = useState("")

  const formStartedAtRef = useRef<number | null>(null)
  const humanRef = useRef(false)

  const markFormStarted = useCallback(() => {
    if (formStartedAtRef.current === null) formStartedAtRef.current = Date.now()
  }, [])

  const markHuman = useCallback(() => {
    humanRef.current = true
  }, [])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    markFormStarted()
    markHuman()
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }, [markFormStarted, markHuman])

  const handleMobileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    markFormStarted()
    markHuman()
    const raw = e.target.value.replace(/\D/g, "").slice(0, 10)
    setFormState(prev => ({ ...prev, mobile: raw }))
  }, [markFormStarted, markHuman])

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (typeof window !== "undefined") {
      const alreadySubmitted = localStorage.getItem("formSubmitted") === "true"
      const submittedAt = parseInt(localStorage.getItem("formSubmittedAt") || "0", 10)
      if (alreadySubmitted && Date.now() - submittedAt < COOLDOWN_MS) {
        setSubmitStatus("rateLimit")
        return
      }
    }

    if (honeypot.trim() !== "") {
      setSubmitStatus("spam")
      return
    }

    if (!humanRef.current || !validateFillDuration(formStartedAtRef.current)) {
      setSubmitStatus("timing")
      return
    }

    const name = (formState.name || "").trim()
    const mobile = (formState.mobile || "").trim()
    const plotCategory = (formState.plotCategory || "").trim()
    const visitDate = (formState.visitDate || "").trim()
    const phone10 = normalizePhone10(mobile)

    if (!name || !mobile) {
      setSubmitStatus("error")
      return
    }

    if (isBlockedOrFakePhone10(phone10)) {
      setSubmitStatus("phone")
      return
    }

    if (hasSubmittedThisPhone(phone10)) {
      setSubmitStatus("duplicatePhone")
      return
    }

    if (typeof window !== "undefined") {
      localStorage.setItem("formSubmitted", "true")
      localStorage.setItem("formSubmittedAt", String(Date.now()))
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const formData = new FormData()
      formData.append("access_key", "7a6bc102-dcc3-4f79-a088-0a0f5bd21923")
      formData.append("name", name)
      formData.append("subject", `New Inquiry: Mahalaxmi Nagar 51 (${plotCategory})`)
      formData.append("message", `Project: Mahalaxmi Nagar 51 (Anaya)\nName: ${name}\nMobile: ${phone10}\nPlot Category: ${plotCategory}\nNotes/Date: ${visitDate}\nAssigned Desk: Nitesh P Duratkar (+91 9890072355)`)

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })
      const data = await res.json()

      if (res.ok && data.success) {
        recordSubmittedPhone(phone10)
        setFormState(EMPTY_FORM)
        router.push("/thank-you")
      } else {
        recordSubmittedPhone(phone10)
        router.push("/thank-you")
      }
    } catch {
      router.push("/thank-you")
    } finally {
      setIsSubmitting(false)
    }
  }, [formState, router, honeypot])

  return (
    <section id="contact" className="py-14 sm:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9862b]/15 text-[#a86a1a] text-xs font-bold uppercase tracking-wider mb-2">
            <Calendar size={12} className="text-[#C9862b]" />
            DIRECT DEVELOPER BOOKING
          </div>
          <h2
            className="text-2xl sm:text-4xl font-extrabold text-[#1e3831] leading-tight mb-2"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Schedule a Free Site Visit &amp; <span style={{ color: "#C9862b" }}>Get Cost Sheet</span>
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Direct developer sales desk with zero brokerage and transparent plot pricing.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-12 items-start">

          {/* Left: Contact Card */}
          <div className="rounded-2xl p-6 sm:p-8 bg-stone-50 border border-stone-200">
            <div className="flex items-center gap-3 pb-5 border-b border-stone-200">
              <img
                src="/Malaxmi-Final-Logo.-2png.png"
                alt="Mahalaxmi Infra Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <span className="text-[10px] font-bold text-[#C9862b] uppercase tracking-wider block">
                  OFFICIAL DEVELOPER REPRESENTATIVE
                </span>
                <h3 className="text-lg font-extrabold text-stone-900 leading-tight">
                  Nitesh P Duratkar
                </h3>
                <p className="text-xs text-stone-500">Mahalaxmi Infra Direct Desk</p>
              </div>
            </div>

            <div className="py-5 space-y-3 text-xs">
              <div className="flex justify-between pb-2 border-b border-stone-200/60">
                <span className="text-stone-500">Project MahaRERA:</span>
                <span className="font-bold text-[#1e3831]">PP1190002602003</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-stone-200/60">
                <span className="text-stone-500">Agent MahaRERA:</span>
                <span className="font-bold text-[#1e3831]">A50400041466</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-stone-200/60">
                <span className="text-stone-500">Official Phone:</span>
                <a href="tel:+919890072355" className="font-bold text-[#C9862b] hover:underline">
                  +91 9890072355
                </a>
              </div>
              <div className="flex justify-between pb-2 border-b border-stone-200/60">
                <span className="text-stone-500">Email ID:</span>
                <a href="mailto:niteshduratkar722@gmail.com" className="font-medium text-stone-800 hover:underline">
                  niteshduratkar722@gmail.com
                </a>
              </div>
              <div className="pt-1 text-stone-600 leading-relaxed text-[11px]">
                <strong>Site Location:</strong> Mouza Sumthana, Touching Samruddhi Mahamarg Corridor, Nagpur (441106)
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <a
                href="tel:+919890072355"
                className="py-2.5 rounded-xl bg-[#1e3831] text-white text-xs font-bold hover:bg-[#284a42] transition-colors flex items-center justify-center gap-1.5"
              >
                <Phone size={13} className="text-[#C9862b]" />
                Call Desk
              </a>
              <a
                href="https://wa.me/919890072355?text=Hi%20Nitesh%20ji%2C%20I%20am%20interested%20in%20Mahalaxmi%20Nagar%2051%20Anaya."
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-800 text-xs font-bold hover:bg-emerald-100 transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageSquare size={13} className="text-emerald-600" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right: Clean Inquiry Form */}
          <div className="rounded-2xl p-6 sm:p-8 bg-white border border-stone-200 shadow-sm">
            <h3 className="text-lg font-bold text-stone-900 mb-1">
              Request Anaya Layout &amp; Pricing Breakdown
            </h3>
            <p className="text-xs text-stone-500 mb-5">
              Fill in your details to receive the official masterplan PDF and price sheet.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              onPointerDownCapture={markHuman}
              onKeyDownCapture={markHuman}
              onFocusCapture={markHuman}
            >
              {/* Honeypot */}
              <input
                type="text"
                name="b_phone"
                tabIndex={-1}
                autoComplete="new-password"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
                aria-hidden="true"
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-stone-50 text-stone-900 text-sm focus:border-[#C9862b] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formState.mobile}
                    onChange={handleMobileChange}
                    required
                    placeholder="+91 9XXXXXXXXX"
                    maxLength={10}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-stone-50 text-stone-900 text-sm focus:border-[#C9862b] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="plotCategory" className="block text-xs font-bold text-stone-700 uppercase mb-1">
                  Interested Plot Size
                </label>
                <select
                  id="plotCategory"
                  name="plotCategory"
                  value={formState.plotCategory}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-stone-50 text-stone-900 text-sm focus:border-[#C9862b] focus:bg-white focus:outline-none transition-colors"
                >
                  <option value="Executive Villa Plot (1,130 - 1,500 Sq.Ft)">Executive Villa Plot (1,130 - 1,500 Sq.Ft)</option>
                  <option value="Premium Boulevard Plot (1,800 - 2,500 Sq.Ft)">Premium Boulevard Plot (1,800 - 2,500 Sq.Ft)</option>
                  <option value="Clubhouse Enclave Plot (1,500 - 2,200 Sq.Ft)">Clubhouse Enclave Plot (1,500 - 2,200 Sq.Ft)</option>
                  <option value="Royal Estate Corner Plot (3,000 - 5,000 Sq.Ft)">Royal Estate Corner Plot (3,000 - 5,000 Sq.Ft)</option>
                  <option value="Site Visit / General Consultation">General Site Visit &amp; Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="visitDate" className="block text-xs font-bold text-stone-700 uppercase mb-1">
                  Preferred Visit Date / Message (Optional)
                </label>
                <input
                  type="text"
                  id="visitDate"
                  name="visitDate"
                  value={formState.visitDate}
                  onChange={handleChange}
                  placeholder="e.g. This Sunday morning or looking for East Facing"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-stone-50 text-stone-900 text-sm focus:border-[#C9862b] focus:bg-white focus:outline-none transition-colors"
                />
              </div>

              {submitStatus === "error" && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600">
                  Please fill in your name and a valid 10-digit mobile number.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#1e3831] hover:bg-[#284a42] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95"
              >
                {isSubmitting ? "Submitting Request…" : <>Request Instant Layout &amp; Price Sheet <Send size={14} className="text-[#C9862b]" /></>}
              </button>

              <p className="text-[11px] text-stone-400 text-center">
                🔒 Direct developer agreement · Zero brokerage · Prompt response
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  )
}
