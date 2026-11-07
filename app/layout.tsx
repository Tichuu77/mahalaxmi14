import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import "@/styles/components.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Mahalaxmi Nagar 51 Anaya Nagpur | NMRDA & RERA Approved Villa Plots | Mahalaxmi Infra",
  description: "Explore Mahalaxmi Nagar 51 (Anaya) by Mahalaxmi Infra — a 78-acre master-planned residential plotted township at Mouza Sumthana, touching Samruddhi Mahamarg & MIHAN Nagpur. MahaRERA: PP1190002602003. Contact Nitesh P Duratkar (+91 9890072355).",
  generator: "v0.app",
  icons: "/Mahalaxmi Infra new Logo.png",
  metadataBase: new URL('https://www.mahalaxmiinfra.in'),
  openGraph: {
    title: "Mahalaxmi Nagar 51 Anaya | 78-Acre Villa Plotted Township Nagpur",
    description: "Premium NMRDA sanctioned & MahaRERA approved (PP1190002602003) villa plots at Mouza Sumthana, Samruddhi Corridor, Nagpur. Contact Nitesh P Duratkar (+91 9890072355).",
    url: "https://www.mahalaxmiinfra.in",
    siteName: "Mahalaxmi Nagar 51 Anaya",
    type: "website",
    images: [
      {
        url: "/m51-entrance-gate.jpeg",
        width: 1200,
        height: 630,
        alt: "Mahalaxmi Nagar 51 Anaya Grand Entrance Gate"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahalaxmi Nagar 51 Anaya | Villa Plots Nagpur",
    description: "78-Acre master-planned residential plotted township at Mouza Sumthana, Nagpur. MahaRERA: PP1190002602003.",
    images: ["/m51-entrance-gate.jpeg"]
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Mahalaxmi Nagar 51",
    "Mahalaxmi Nagar 51 Anaya",
    "Mahalaxmi Nagar 51 Nagpur",
    "Mahalaxmi Nagar 51 Sumthana",
    "Anaya Mahalaxmi Nagar 51",
    "Anaya plots Nagpur",
    "Mahalaxmi Infra",
    "Mahalaxmi Infra Nagpur",
    "Nitesh P Duratkar",
    "plots in Mouza Sumthana Nagpur",
    "Samruddhi Mahamarg plots Nagpur",
    "plots near MIHAN Nagpur",
    "plots near AIIMS Nagpur",
    "PP1190002602003",
    "A50400041466",
    "NMRDA approved plots in Nagpur",
    "villa plots in Nagpur"
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) - GTM-T49L4QC5 */}
        <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-T49L4QC5" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            `,
          }}
        />

        {/* Local Business / Real Estate Project Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          "name": "Mahalaxmi Nagar 51 - Anaya (Mahalaxmi Infra)",
          "url": "https://www.mahalaxmiinfra.in",
          "logo": "https://www.mahalaxmiinfra.in/Malaxmi-Final-Logo.-2png.png",
          "image": "https://www.mahalaxmiinfra.in/m51-entrance-gate.jpeg",
          "description": "Mahalaxmi Nagar 51 Anaya is a 78-acre premier master-planned residential plotted development with NMRDA sanction and MahaRERA approval (PP1190002602003) at Mouza Sumthana, Nagpur.",
          "areaServed": "Nagpur, Maharashtra, India",
          "telephone": "+91-9890072355",
          "email": "niteshduratkar722@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Nagpur",
            "addressLocality": "Nagpur",
            "addressRegion": "Maharashtra",
            "postalCode": "441106",
            "addressCountry": "IN"
          },
          "employee": {
            "@type": "Person",
            "name": "Nitesh P Duratkar",
            "jobTitle": "Direct Representative",
            "telephone": "+91-9890072355",
            "email": "niteshduratkar722@gmail.com"
          }
        }) }} />
      </head>
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
