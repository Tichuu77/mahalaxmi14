'use client'

import { Mail, Phone, MapPin, Facebook, Instagram, ShieldCheck, Globe } from "lucide-react"
import { memo } from "react"

const navLinks = [
  { href: "#about",          label: "About Anaya"       },
  { href: "#projects",       label: "Plot Layouts"      },
  { href: "#amenities",      label: "30+ Amenities"     },
  { href: "#location",       label: "Location & Transit"},
  { href: "#other-projects", label: "Other Projects"    },
]

const resourceLinks = [
  { href: "#gallery",      label: "Township Gallery" },
  { href: "#why-choose-us",label: "Why Invest"       },
  { href: "#faq",          label: "Township FAQs"    },
  { href: "#contact",      label: "Contact Executive"},
]

const CURRENT_YEAR = new Date().getFullYear()

export const Footer = memo(function Footer() {
  return (
    <footer className="bg-[#12221d] text-white pt-12 pb-24 md:pb-12 border-t border-stone-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr] gap-8 mb-10">

          {/* Brand & Project Info */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/Malaxmi-Final-Logo.-2png.png"
                alt="Mahalaxmi Infra Logo"
                className="w-11 h-11 object-contain"
                width={44}
                height={44}
              />
              <div>
                <span className="block text-base font-extrabold text-white tracking-tight">
                  MAHALAXMI INFRA
                </span>
                <span className="block text-[9px] font-bold text-[#C9862b] uppercase tracking-wider">
                  A TRADITION OF TRUST
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed mb-4 max-w-sm">
              Developing <strong>Mahalaxmi Nagar 51 (Anaya)</strong> — premier 78-acre residential plotted township at Mouza Sumthana, touching Samruddhi Mahamarg Corridor, Nagpur.
            </p>

            <div className="space-y-1.5 text-[11px] text-stone-300">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <ShieldCheck size={12} className="text-[#C9862b]" />
                <span>Project MahaRERA: <strong>PP1190002602003</strong></span>
              </div>
              <br />
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <ShieldCheck size={12} className="text-[#C9862b]" />
                <span>Agent MahaRERA: <strong>A50400041466</strong></span>
              </div>
            </div>
          </div>

          {/* Township Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9862b] mb-3">
              Township
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-[#C9862b] transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9862b] mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              {resourceLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-[#C9862b] transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9862b] mb-2">
              Sales Desk
            </h4>
            <p className="text-sm font-bold text-white mb-0.5">Nitesh P Duratkar</p>
            <p className="text-[11px] text-[#C9862b] mb-3">Representative · MahaRERA: A50400041466</p>

            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <a href="tel:+919890072355" className="flex items-center gap-2 hover:text-[#C9862b] transition-colors">
                  <Phone size={13} className="text-[#C9862b]" />
                  <span>+91 9890072355</span>
                </a>
              </li>
              <li>
                <a href="mailto:niteshduratkar722@gmail.com" className="flex items-center gap-2 hover:text-[#C9862b] transition-colors truncate">
                  <Mail size={13} className="text-[#C9862b]" />
                  <span className="truncate">niteshduratkar722@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={13} className="text-[#C9862b] mt-0.5 shrink-0" />
                <span className="leading-snug">Nagpur, Maharashtra 441106</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400">
          <p>© {CURRENT_YEAR} Mahalaxmi Infra. Mahalaxmi Nagar 51 (Anaya). All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/share/18PdfPMute/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={14} />
            </a>
            <a
              href="https://www.instagram.com/mahalaxmiinfra_ak"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={14} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
})
Footer.displayName = "Footer"
