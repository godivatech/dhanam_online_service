import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Volume2,
  ArrowRight,
  Menu,
  X
} from "lucide-react";

export default function GroupPortal() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFBFC] text-[#334155] font-sans selection:bg-[#E5A019]/30 selection:text-[#102F56] flex flex-col justify-between">
      {/* ── MAIN HEADER / BRAND BAR ── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#DCE3EA] shadow-xs">
        <div className="container mx-auto px-6 lg:px-12 py-2 flex items-center justify-between">
          <Link href="/" className="flex items-center group py-0.5" aria-label="AB DHANAM GROUP">
            <img
              src="/images/Logo-2.png"
              alt="AB DHANAM GROUP"
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain group-hover:scale-105 transition-transform duration-200"
            />
          </Link>

          {/* Quick Division Direct Switcher Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/legal"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#102F56] text-white hover:bg-[#092747] text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
            >
              <Building2 className="w-4 h-4 text-[#E5A019]" />
              Legal Advisory
            </Link>
            <Link
              href="/radio-and-lightings"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#D97706] text-white hover:bg-[#B45309] text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
            >
              <Volume2 className="w-4 h-4 text-white" />
              Sound & Lights
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-2 text-[#102F56] hover:bg-[#F1F5F9] rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="sm:hidden bg-white border-t border-[#DCE3EA] px-6 py-5 overflow-hidden shadow-xl"
            >
              <div className="flex flex-col gap-3">
                <Link
                  href="/legal"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 rounded-lg bg-[#102F56] text-white font-bold text-xs uppercase tracking-wider"
                >
                  Enter A.B. Dhanam Online Services (Legal) &rarr;
                </Link>
                <Link
                  href="/radio-and-lightings"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 rounded-lg bg-[#D97706] text-white font-bold text-xs uppercase tracking-wider"
                >
                  Enter A.B Dhanam Radio & Lightings &rarr;
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── GATEWAY HERO SECTION (THE TWO ENTERPRISES SHOWCASE) ── */}
      <main className="flex-1 relative bg-gradient-to-b from-[#102F56] via-[#0D2849] to-[#092747] text-white py-14 md:py-20 overflow-hidden flex flex-col justify-center">
        {/* Subtle Decorative Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#E5A019]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* ── HERO OVERVIEW & DESTINATION SELECTOR (LEFT-ALIGNED) ── */}
          <div className="max-w-5xl mx-auto mb-8 md:mb-10 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#E5A019]/40 text-[#E5A019] text-[11px] font-bold uppercase tracking-[0.2em] mb-3">
              <span>AB DHANAM GROUP • ESTD. 1955</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                Choose Your Destination
              </h1>
              <p className="text-xs sm:text-sm text-[#E5A019] font-medium">
                Select an enterprise below to visit the official website &rarr;
              </p>
            </div>
          </div>

          {/* ── THE TWO DESTINATION BOXES (MATCHING REFERENCE SCREENSHOT) ── */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* ── BOX 1: A.B. DHANAM ONLINE SERVICES (LEGAL) ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
            >
              {/* Dark Navy Top Header Block */}
              <div className="bg-[#0B2545] p-5 sm:p-6 text-white">
                <span className="inline-block px-3 py-0.5 rounded-full bg-white/10 border border-white/20 text-white text-[11px] font-bold uppercase tracking-wider mb-2">
                  LEGAL & REGISTRATION
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  A.B. Dhanam Online Services
                </h2>
              </div>

              {/* White Content Body */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 gap-5">
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Government-approved registration consultancy, property legal documentation, trust formation, society registrations, and Sub-Registrar liaison across Tamil Nadu.
                </p>

                {/* CTA Button */}
                <Link
                  href="/legal"
                  className="w-full py-3.5 rounded-xl bg-[#0B2545] hover:bg-[#07192F] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 group"
                >
                  <span>EXPLORE LEGAL WEBSITE</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* ── BOX 2: A.B. DHANAM RADIO & LIGHTINGS (SOUND & LIGHTS) ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
            >
              {/* Dark Navy Top Header Block */}
              <div className="bg-[#0B2545] p-5 sm:p-6 text-white">
                <span className="inline-block px-3 py-0.5 rounded-full bg-white/10 border border-white/20 text-white text-[11px] font-bold uppercase tracking-wider mb-2">
                  SOUND, LIGHTS & EVENTS
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  A.B Dhanam Radio & Lightings
                </h2>
              </div>

              {/* White Content Body */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 gap-5">
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Madurai&apos;s pioneer concert line arrays, stage and festival illumination, silent generator fleets, and grand event production since 1955.
                </p>

                {/* CTA Button */}
                <Link
                  href="/radio-and-lightings"
                  className="w-full py-3.5 rounded-xl bg-[#D97706] hover:bg-[#b45309] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 group"
                >
                  <span>EXPLORE SOUND & LIGHTINGS</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* ── GROUP MASTER FOOTER ── */}
      <footer className="bg-[#102F56] text-white pt-12 pb-10 border-t-2 border-[#E5A019]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Column 1: Brand */}
            <div>
              <Link href="/" className="inline-block mb-6 group" aria-label="AB DHANAM GROUP">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-white p-3 shadow-md flex items-center justify-center border border-[#E5A019]/40 group-hover:border-[#E5A019] transition-all">
                  <img
                    src="/images/Logo-2.png"
                    alt="AB DHANAM GROUP"
                    className="w-full h-full object-contain"
                  />
                </div>
              </Link>
              <p className="text-xs sm:text-sm text-[#DCE3EA] leading-relaxed mb-3">
                Seven decades of distinction in Tamil Nadu. Preserving legacy through legal certainty and acoustic illumination mastery.
              </p>
              <p className="text-xs text-[#E5A019] font-serif italic">
                Fast • Reliable • Professional
              </p>
            </div>

            {/* Column 2: Legal Division */}
            <div>
              <h4 className="font-bold text-xs uppercase tracking-[0.15em] text-[#E5A019] mb-3 pb-1.5 border-b border-white/10">
                Legal & Registry Services
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#DCE3EA]">
                <li><Link href="/legal" className="hover:text-[#E5A019] font-bold">&rarr; Legal Division Home</Link></li>
                <li><Link href="/services/property-registration" className="hover:text-[#E5A019]">Property Registration</Link></li>
                <li><Link href="/services/marriage-registration" className="hover:text-[#E5A019]">Marriage Registration</Link></li>
                <li><Link href="/services/trust-registration" className="hover:text-[#E5A019]">Trust & NGO Formation</Link></li>
                <li><Link href="/services/society-registration" className="hover:text-[#E5A019]">Society Registration</Link></li>
                <li><Link href="/services/encumbrance-certificate" className="hover:text-[#E5A019]">Encumbrance Certificate</Link></li>
              </ul>
            </div>

            {/* Column 3: Sound & Lightings Division */}
            <div>
              <h4 className="font-bold text-xs uppercase tracking-[0.15em] text-[#E5A019] mb-3 pb-1.5 border-b border-white/10">
                Radio, Sound & Lightings
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#DCE3EA]">
                <li><Link href="/radio-and-lightings" className="hover:text-[#E5A019] font-bold">&rarr; Sound & Lightings Home</Link></li>
                <li><Link href="/radio-and-lightings#services" className="hover:text-[#E5A019]">Concert PA Systems & Line Arrays</Link></li>
                <li><Link href="/radio-and-lightings#services" className="hover:text-[#E5A019]">Stage & Festival Illumination</Link></li>
                <li><Link href="/radio-and-lightings#services" className="hover:text-[#E5A019]">Silent Generators (15–250 kVA)</Link></li>
                <li><Link href="/radio-and-lightings#services" className="hover:text-[#E5A019]">DJ & Event Management</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="font-bold text-xs uppercase tracking-[0.15em] text-[#E5A019] mb-3 pb-1.5 border-b border-white/10">
                Headquarters
              </h4>
              <p className="text-xs sm:text-sm text-[#DCE3EA] leading-relaxed mb-3">
                123, Anna Salai,<br />
                Madurai, Tamil Nadu 625001
              </p>
              <p className="text-xs sm:text-sm text-[#DCE3EA] mb-1.5">
                <strong>Phone:</strong> +91 98765 43210
              </p>
              <p className="text-xs sm:text-sm text-[#DCE3EA]">
                <strong>Email:</strong> contact@abdhanam.com
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#DCE3EA]/80">
            <p>© {new Date().getFullYear()} AB DHANAM GROUP. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-[#E5A019]">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#E5A019]">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
