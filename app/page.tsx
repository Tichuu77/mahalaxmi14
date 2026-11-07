import dynamic from "next/dynamic"
import { HeroSection } from "@/components/hero-section"
import { Navigation } from "@/components/navigation"

// Above-the-fold: loaded eagerly
// Below-the-fold: code-split dynamically for maximum mobile speed
const AboutSection = dynamic(() => import("@/components/about-section").then(m => ({ default: m.AboutSection })))
const AmenitiesSection = dynamic(() => import("@/components/amenities-section").then(m => ({ default: m.AmenitiesSection })))
const ProjectsSection = dynamic(() => import("@/components/projects-section").then(m => ({ default: m.ProjectsSection })))
const GallerySection = dynamic(() => import("@/components/gallery-section").then(m => ({ default: m.GallerySection })))
const Locations = dynamic(() => import("@/components/locations").then(m => ({ default: m.LocationsSection })))
const WhyChooseUsSection = dynamic(() => import("@/components/why-choose-us-section").then(m => ({ default: m.WhyChooseUsSection })))
const UserGuideSection = dynamic(() => import("@/components/user-guide-section").then(m => ({ default: m.UserGuideSection })))
const TestimonialsSection = dynamic(() => import("@/components/testimonials-section").then(m => ({ default: m.TestimonialsSection })))
const FAQSection = dynamic(() => import("@/components/faq-section").then(m => ({ default: m.FAQSection })))
const ContactSection = dynamic(() => import("@/components/contact-section"))
const Footer = dynamic(() => import("@/components/footer").then(m => ({ default: m.Footer })))
const CallButton = dynamic(() => import("@/components/call-button"))
const WhatsappButton = dynamic(() => import("@/components/whatsapp-button"))
const MobileAppBar = dynamic(() => import("@/components/mobile-app-bar").then(m => ({ default: m.MobileAppBar })))

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-stone-900 pb-16 md:pb-0 font-sans antialiased selection:bg-[#C9862b]/20 selection:text-[#1e3831]">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <AmenitiesSection />
      <ProjectsSection />
      <GallerySection />
      <Locations />
      <WhyChooseUsSection />
      <UserGuideSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <CallButton />
      <WhatsappButton />
      <MobileAppBar />
    </main>
  )
}
