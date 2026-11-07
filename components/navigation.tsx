"use client"

import { useState, useCallback, memo } from "react"
import { Menu, X, Phone, ShieldCheck, Calendar } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { href: "#about",         label: "About"         },
  { href: "#projects",      label: "Plots"         },
  { href: "#amenities",     label: "Amenities"     },
  { href: "#location",      label: "Location"      },
  { href: "#gallery",       label: "Gallery"       },
  { href: "#why-choose-us", label: "Why Invest"    },
  { href: "#contact",       label: "Contact"       },
]

const DesktopLinks = memo(() => (
  <div className="hidden lg:flex items-center gap-6">
    {navLinks.map((link) => (
      <a
        key={link.href}
        href={link.href}
        className="text-stone-700 hover:text-[#C9862b] transition-colors text-xs font-semibold tracking-wider uppercase whitespace-nowrap py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C9862b] hover:after:w-full after:transition-all after:duration-200"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {link.label}
      </a>
    ))}
  </div>
))
DesktopLinks.displayName = "DesktopLinks"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle    = useCallback(() => setIsOpen(p => !p), [])
  const closeMenu = useCallback(() => setIsOpen(false), [])

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-40 border-b border-stone-200/80 transition-all">
      {/* Sleek top micro bar */}
      <div className="bg-[#1e3831] text-white text-[11px] py-1.5 px-4 sm:px-8 flex justify-between items-center border-b border-[#C9862b]/20">
        <div className="flex items-center gap-2 truncate">
          <ShieldCheck size={13} className="text-[#C9862b] shrink-0" />
          <span className="font-medium tracking-wide truncate">
            Mahalaxmi Nagar 51 · Mouza Sumthana
          </span>
          <span className="hidden sm:inline text-white/40">|</span>
          <span className="hidden sm:inline text-[#C9862b] font-semibold whitespace-nowrap">
            MahaRERA: PP1190002602003
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-[10px] text-white/70 hidden md:inline">Sales: Nitesh P Duratkar</span>
          <a
            href="tel:+919890072355"
            className="flex items-center gap-1 font-bold text-[#C9862b] hover:text-white transition-colors whitespace-nowrap"
          >
            <Phone size={11} />
            +91 9890072355
          </a>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18">

          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <img
              src="/Mahalaxmi Infra new Logo.png"
              alt="Mahalaxmi Infra Logo"
              className="w-9 h-9 sm:w-11 sm:h-11 object-contain transition-transform group-hover:scale-105"
              fetchPriority="high"
              decoding="sync"
              width={44}
              height={44}
            />
            <div className="flex flex-col">
              <span
                style={{ fontFamily: "'Poppins', sans-serif" }}
                className="font-extrabold text-[#1e3831] text-sm sm:text-base tracking-tight leading-tight group-hover:text-[#C9862b] transition-colors whitespace-nowrap"
              >
                MAHALAXMI NAGAR 51
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[9px] font-bold tracking-widest text-[#C9862b] uppercase">
                  ANAYA TOWNSHIP
                </span>
                <span className="text-[8px] bg-[#30534A]/10 text-[#30534A] px-1.5 py-0.5 rounded font-semibold">
                  78 Acres
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <DesktopLinks />

          {/* Desktop Right Action */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-2 bg-[#1e3831] hover:bg-[#284a42] text-white rounded-xl transition-all font-semibold text-xs shadow-sm hover:scale-[1.02] active:scale-95"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <Calendar size={13} className="text-[#C9862b]" />
              <span>Book Site Visit</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:+919890072355"
              aria-label="Call Direct Desk"
              className="p-2 text-[#1e3831] bg-stone-100 rounded-xl flex items-center justify-center active:scale-95"
            >
              <Phone size={17} className="text-[#C9862b]" />
            </a>
            <button
              onClick={toggle}
              className="p-2 text-stone-700 hover:text-[#C9862b] rounded-xl active:scale-95"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 pt-2 border-t border-stone-200/80 animate-in fade-in duration-200">
            <div className="grid grid-cols-2 gap-2 mb-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="px-3 py-2 text-stone-700 hover:text-[#C9862b] bg-stone-50 hover:bg-stone-100 rounded-xl text-xs font-semibold text-center transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex gap-2">
              <a
                href="tel:+919890072355"
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 border border-stone-200 text-[#1e3831] rounded-xl font-bold text-xs bg-white"
              >
                <Phone size={13} className="text-[#C9862b]" />
                Call Desk
              </a>
              <Link
                href="#contact"
                className="flex-1 bg-[#1e3831] text-white py-2.5 rounded-xl font-bold text-center text-xs flex items-center justify-center gap-1.5"
                onClick={closeMenu}
              >
                <Calendar size={13} className="text-[#C9862b]" />
                Book Site Visit
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
