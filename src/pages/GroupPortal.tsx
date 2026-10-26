import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Radio,
  Volume2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  Clock,
  Users,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  ChevronLeft,
  ExternalLink,
  Zap,
  CheckCircle2,
  Menu,
  X,
  Globe
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const ENTERPRISES = [
  {
    id: "legal",
    title: "A.B. Dhanam Online Services",
    subtitle: "Premier Legal & Registration Advisory",
    est: "Expanded & Digitalized 2015",
    tagline: "Government Approved Registration Consultancy in Madurai & Tamil Nadu",
    desc: "Comprehensive legal documentation, property sale deeds, trust formation, society registrations, marriage certificates, and Sub-Registrar liaison with 100% error-free precision.",
    highlights: [
      "Property Registration & Title Verification",
      "Marriage, Trust & Society Registration",
      "Encumbrance Certificate & Certified Copies",
      "5,000+ Satisfied Clients Across Tamil Nadu"
    ],
    primaryAction: {
      label: "Explore Legal Website",
      href: "/legal"
    },
    badge: "Legal & Documentation",
    accentColor: "#123E73",
    goldAccent: "#E5A019",
    image: "/images/services/Property Registration.png",
    stat: "5,000+ Clients"
  },
  {
    id: "radio-lightings",
    title: "A.B. Dhanam Radio & Lightings",
    subtitle: "Pioneer in Sound, Stage Illumination & Events",
    est: "Founded in 1955 by M. Alagirisamy",
    tagline: "Madurai's First & Pioneer Sound & Lighting Service Company",
    desc: "Legendary acoustic systems, concert-grade sound services, grand stage and festival illuminations, high-capacity silent generators, and DJ event management. Proudly serving iconic Tamil Nadu events since 1955.",
    highlights: [
      "Madurai's 1st Radio & Lighting Service Company",
      "Pasumpon Muthuramalingam Thevar 1st Anniversary Audio & Lighting",
      "Concert Line Arrays, DJ & Stage Illumination",
      "Mobile Silent Generators (15 kVA – 250 kVA)"
    ],
    primaryAction: {
      label: "Explore Sound & Lightings",
      href: "/radio-and-lightings"
    },
    badge: "Sound, Lights & Events",
    accentColor: "#D97706",
    goldAccent: "#F59E0B",
    image: "/images/hero section/1.png",
    stat: "70+ Years Legacy"
  }
];

const TIMELINE = [
  {
    id: "1955",
    year: "1955",
    displayYear: "1955",
    eraBadge: "The Genesis",
    category: "Sound & Illumination Pioneer",
    title: "The Pioneer Origin in Madurai",
    leader: "Founded by M. Alagirisamy",
    desc: "M. Alagirisamy established 'A.B. Dhanam Radio & Lightings' in the cultural heart of Madurai. Operating as the region's first specialized sound reinforcement and lighting enterprise, it introduced vacuum-tube public acoustics, horn loudspeaker arrays, and landmark temple illuminations across Southern Tamil Nadu.",
    tags: [
      "Madurai's 1st Radio Service Company",
      "Tube Audio & Horn Acoustics",
      "Grand Temple & Civic Illuminations"
    ],
    divisionLink: {
      label: "Explore Sound & Lightings Division",
      href: "/sound-and-lightings"
    },
    icon: Radio,
    watermark: "1955"
  },
  {
    id: "1964",
    year: "1964",
    displayYear: "1964",
    eraBadge: "State Historic Landmark",
    category: "Monumental Public Acoustics",
    title: "Pasumpon Muthuramalingam Thevar 1st Anniversary",
    leader: "Official Sound & Illumination Partner",
    desc: "Entrusted with the historic broadcasting, speech acoustics, and grand illumination for the 1st Anniversary commemoration of revered national leader Pasumpon Muthuramalingam Thevar. This monumental state gathering solidified A.B. Dhanam as Tamil Nadu's foremost acoustics authority.",
    tags: [
      "Official State Gathering Partner",
      "Mass Gathering Audio Engineering",
      "Etched in Tamil Nadu History"
    ],
    divisionLink: {
      label: "View Historic Sound Lineage",
      href: "/sound-and-lightings#heritage"
    },
    icon: Award,
    watermark: "1964"
  },
  {
    id: "2015",
    year: "2015",
    displayYear: "2015",
    eraBadge: "Digital Renaissance",
    category: "Legal & Documentation Advisory",
    title: "Legal Consultancy Expansion",
    leader: "Founded & Directed by A.B. Alagiri Rajan",
    desc: "Building upon six decades of unbroken community trust, A.B. Alagiri Rajan established A.B. Dhanam Online Services. Modernizing property legalities, deeds drafting, society registrations, and Sub-Registrar liaison, the consultancy brought digital clarity to thousands across Tamil Nadu.",
    tags: [
      "5,000+ Registered Property Deeds",
      "Sub-Registrar Liaison & Advisory",
      "100% Legal Scrutiny & Accuracy"
    ],
    divisionLink: {
      label: "Explore Legal & Registration Services",
      href: "/legal"
    },
    icon: ShieldCheck,
    watermark: "2015"
  },
  {
    id: "present",
    year: "Present",
    displayYear: "2025+",
    eraBadge: "Unified Conglomerate",
    category: "Dual-Pillar Parent Enterprise",
    title: "The Unified AB DHANAM GROUP",
    leader: "Generational Synergy & Trust",
    desc: "Today, the AB DHANAM GROUP stands as a distinguished emblem of heritage and modern excellence — uniquely harmonizing cutting-edge legal advisory with premier sound, lighting, generator power, and high-impact event production under one parent identity.",
    tags: [
      "Dual Enterprise Synergy",
      "70 Years of Public Trust",
      "Single-Source Multi-Service"
    ],
    divisionLink: {
      label: "Inquire with AB DHANAM GROUP",
      href: "#contact"
    },
    icon: Sparkles,
    watermark: "70YRS"
  }
];

export default function GroupPortal() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [inquiryDivision, setInquiryDivision] = useState("both");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeTimelineIdx, setActiveTimelineIdx] = useState(0);

  return (
    <div className="min-h-screen bg-[#FAFBFC] text-[#334155] font-sans selection:bg-[#E5A019]/30 selection:text-[#102F56] flex flex-col">
      {/* ── TOP UTILITY NOTIFICATION BAR ── */}
      <div className="bg-[#092747] text-white text-xs md:text-sm py-2.5 px-4 border-b border-[#E5A019]/30">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E5A019] animate-pulse" />
            <span className="font-medium text-[#DCE3EA]">
              <strong>AB DHANAM GROUP</strong> • Celebrating 70 Years of Service in Tamil Nadu (Est. 1955)
            </span>
          </div>
          <div className="flex items-center gap-6 text-xs text-[#DCE3EA]">
            <a href="tel:+919876543210" className="hover:text-[#E5A019] transition-colors flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-[#E5A019]" /> +91 98765 43210
            </a>
            <span className="hidden md:inline text-white/30">|</span>
            <span className="hidden md:inline text-[#DCE3EA]">Madurai, Tamil Nadu</span>
          </div>
        </div>
      </div>

      {/* ── GROUP MASTER HEADER ── */}
      <header className="sticky top-0 z-50 bg-[#FAFBFC]/95 backdrop-blur-md border-b border-[#DCE3EA] shadow-[0_2px_10px_rgba(16,47,86,0.06)]">
        <div className="container mx-auto px-4 lg:px-8 h-24 md:h-28 flex items-center justify-between">
          {/* Logo & Group Identity */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white p-1 border border-[#DCE3EA] shadow-xs flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <img
                src="/images/Logo-2.png"
                alt="AB DHANAM GROUP"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl md:text-2xl font-extrabold text-[#102F56] tracking-tight group-hover:text-[#123E73] transition-colors">
                  AB DHANAM GROUP
                </span>
              </div>
              <p className="text-xs md:text-sm text-[#E5A019] font-bold uppercase tracking-[0.2em]">
                Est. 1955 • Madurai
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#enterprises"
              className="text-base font-semibold text-[#334155] hover:text-[#102F56] transition-colors"
            >
              Our Enterprises
            </a>
            <a
              href="#legacy"
              className="text-base font-semibold text-[#334155] hover:text-[#102F56] transition-colors"
            >
              Heritage & History
            </a>
            <a
              href="#leadership"
              className="text-base font-semibold text-[#334155] hover:text-[#102F56] transition-colors"
            >
              Leadership
            </a>
            <a
              href="#contact"
              className="text-base font-semibold text-[#334155] hover:text-[#102F56] transition-colors"
            >
              Contact Group
            </a>
          </nav>

          {/* Quick Division Direct Switcher Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/legal"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded bg-[#102F56] text-white hover:bg-[#092747] text-xs md:text-sm font-bold tracking-wide transition-all shadow-xs"
            >
              <Building2 className="w-4 h-4 text-[#E5A019]" />
              Legal Advisory
            </Link>
            <Link
              href="/radio-and-lightings"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded bg-[#D97706] text-white hover:bg-[#B45309] text-xs md:text-sm font-bold tracking-wide transition-all shadow-xs"
            >
              <Volume2 className="w-4 h-4 text-white" />
              Sound & Lights
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#102F56] hover:bg-[#F1F5F9] rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white border-t border-[#DCE3EA] px-6 py-6 overflow-hidden shadow-xl"
            >
              <div className="flex flex-col gap-4 text-base font-semibold">
                <a
                  href="#enterprises"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-[#DCE3EA]/60 text-[#102F56]"
                >
                  Our Enterprises
                </a>
                <a
                  href="#legacy"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-[#DCE3EA]/60 text-[#102F56]"
                >
                  Heritage & History
                </a>
                <a
                  href="#leadership"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-[#DCE3EA]/60 text-[#102F56]"
                >
                  Leadership
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-[#DCE3EA]/60 text-[#102F56]"
                >
                  Contact Group
                </a>

                <div className="pt-4 flex flex-col gap-3">
                  <Link
                    href="/legal"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center py-3.5 rounded bg-[#102F56] text-white font-bold text-sm"
                  >
                    Enter A.B. Dhanam Online Services (Legal) &rarr;
                  </Link>
                  <Link
                    href="/radio-and-lightings"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center py-3.5 rounded bg-[#D97706] text-white font-bold text-sm"
                  >
                    Enter A.B. Dhanam Radio & Lightings &rarr;
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── GRAND HERO SECTION ── */}
      <section className="relative bg-[#102F56] text-white py-24 md:py-36 overflow-hidden">
        {/* Decorative Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />

        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E5A019]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#123E73]/40 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl text-left">
            {/* Heritage Kicker Badge - Left Aligned */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#E5A019]/40 backdrop-blur-md text-[#E5A019] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-6 shadow-sm"
            >
              <Award className="w-4 h-4 text-[#E5A019]" />
              <span>Seven Decades of Trust • Madurai Legacy Since 1955</span>
            </motion.div>

            {/* Headline - Left Aligned */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] mb-5"
            >
              One Heritage. Two Pillars.<br />
              <span className="text-[#E5A019] italic font-serif">Enduring Excellence.</span>
            </motion.h1>

            {/* Simplified Subtitle - Left Aligned */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#DCE3EA] text-sm sm:text-base md:text-lg font-normal leading-relaxed mb-8 max-w-2xl"
            >
              Serving Tamil Nadu since 1955 — bridging Madurai's pioneer sound, stage & lighting engineering with premier government-approved legal consultancy.
            </motion.p>

            {/* Simplified Dual Division Gateway Cards - Left Aligned */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid sm:grid-cols-2 gap-4 max-w-3xl mb-10"
            >
              <Link
                href="/legal"
                className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white/[0.06] border border-white/10 hover:border-[#E5A019] hover:bg-white/[0.1] transition-all group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[#123E73] flex items-center justify-center shrink-0 border border-[#E5A019]/40 group-hover:scale-105 transition-transform">
                  <Building2 className="w-6 h-6 text-[#E5A019]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-white text-base group-hover:text-[#E5A019] transition-colors truncate">
                      Legal Advisory
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#E5A019] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                  <div className="text-xs text-[#DCE3EA]/80 mt-0.5 truncate">
                    Property Deeds, Trust & Sub-Registrar Advisory
                  </div>
                </div>
              </Link>

              <Link
                href="/radio-and-lightings"
                className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white/[0.06] border border-white/10 hover:border-[#D97706] hover:bg-white/[0.1] transition-all group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D97706] flex items-center justify-center shrink-0 border border-white/20 group-hover:scale-105 transition-transform">
                  <Volume2 className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-white text-base group-hover:text-[#F59E0B] transition-colors truncate">
                      Sound & Lightings
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#F59E0B] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                  <div className="text-xs text-[#DCE3EA]/80 mt-0.5 truncate">
                    Madurai's 1st Pioneer (1955) • Sound & DG Sets
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Direct Gateway Buttons - Left Aligned */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <a
                href="#enterprises"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#123E73] text-white hover:bg-[#092747] font-bold text-sm md:text-base uppercase tracking-wider transition-all shadow-lg border border-[#E5A019]/40 hover:border-[#E5A019] text-center"
              >
                Explore Both Enterprises &darr;
              </a>
              <a
                href="#legacy"
                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/30 hover:border-white text-white hover:bg-white/10 font-bold text-sm md:text-base uppercase tracking-wider transition-all text-center"
              >
                Read 70-Year History
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-white border-b border-[#DCE3EA] py-8">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-[#DCE3EA]/60">
            <div className="p-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102F56] mb-1">1955</div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                Year Established
              </div>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102F56] mb-1">70+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                Years Madurai Legacy
              </div>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102F56] mb-1">5,000+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                Legal Clients Served
              </div>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102F56] mb-1">1st</div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                Radio & Lights Pioneer
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR TWO ENTERPRISES (GATEWAY SHOWCASE) ── */}
      <section id="enterprises" className="py-20 md:py-28 bg-[#FAFBFC]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5A019] mb-2.5">
              The Flagship Divisions
            </p>
            <div className="w-10 h-0.5 bg-[#E5A019] mx-auto mb-5" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#102F56] tracking-tight">
              Choose Your Destination
            </h2>
            <p className="text-[#64748B] text-sm sm:text-base leading-relaxed mt-3">
              Two distinct institutions united by an uncompromising ethos of reliability, integrity, and punctuality across Tamil Nadu.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {ENTERPRISES.map((ent, idx) => (
              <motion.div
                key={ent.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group flex flex-col justify-between bg-white rounded-2xl border border-[#DCE3EA] hover:border-[#102F56] shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div>
                  {/* Visual Header Banner */}
                  <div className="relative h-60 w-full overflow-hidden bg-[#102F56]">
                    <img
                      src={ent.image}
                      alt={ent.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102F56] via-[#102F56]/40 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-[#102F56]/90 border border-white/20 backdrop-blur-md">
                        {ent.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-6 right-6">
                      <span className="text-xs uppercase tracking-widest text-[#E5A019] font-bold block mb-1">
                        {ent.est}
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight">
                        {ent.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-8">
                    <p className="text-sm font-bold text-[#102F56] mb-3">
                      {ent.tagline}
                    </p>
                    <p className="text-[#334155] text-base leading-relaxed mb-6 font-normal">
                      {ent.desc}
                    </p>

                    {/* Feature Highlights */}
                    <div className="space-y-3 mb-8 bg-[#F1F5F9] p-5 rounded-xl border border-[#DCE3EA]/60">
                      <div className="text-xs uppercase font-bold tracking-wider text-[#64748B] mb-2">
                        Key Capabilities:
                      </div>
                      {ent.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-sm text-[#334155]">
                          <CheckCircle2 className="w-4 h-4 text-[#E5A019] mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 md:p-8 pt-0 border-t border-[#DCE3EA]/40">
                  <Link
                    href={ent.primaryAction.href}
                    className={`w-full py-4 rounded text-center font-bold text-sm md:text-base uppercase tracking-wider text-white transition-all shadow-md flex items-center justify-center gap-2 group-hover:gap-3 ${ent.id === "legal"
                        ? "bg-[#123E73] hover:bg-[#092747]"
                        : "bg-[#D97706] hover:bg-[#B45309]"
                      }`}
                  >
                    <span>{ent.primaryAction.label}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HERITAGE & HISTORIC MILESTONES (1955 TO TODAY) ── */}
      <section id="legacy" className="py-24 md:py-32 bg-[#092747] text-white relative overflow-hidden">
        {/* Subtle decorative background pattern & glowing ambient orbs */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#E5A019]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#102F56] rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Header & Milestone Navigation */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-8 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A019]/15 border border-[#E5A019]/30 text-[#E5A019] text-xs font-bold uppercase tracking-widest mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5A019] animate-pulse" />
                Seven Decades of Distinction • 1955 – 2025+
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                70 Years of Service to Tamil Nadu
              </h2>
              <p className="text-[#DCE3EA] text-sm sm:text-base leading-relaxed mt-2.5 max-w-2xl">
                From pioneering audio broadcasting in post-independence Madurai to modern digitalized legal advisory, explore how our multi-generational legacy took shape.
              </p>
            </div>

            {/* Stepper controls */}
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs uppercase tracking-widest text-[#DCE3EA]/60 font-medium">
                Milestone <span className="text-[#E5A019] font-bold text-sm">0{activeTimelineIdx + 1}</span> / 0{TIMELINE.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTimelineIdx((prev) => (prev > 0 ? prev - 1 : TIMELINE.length - 1))}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#E5A019] hover:text-[#092747] text-white border border-white/10 transition-all flex items-center justify-center cursor-pointer"
                  aria-label="Previous milestone"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTimelineIdx((prev) => (prev < TIMELINE.length - 1 ? prev + 1 : 0))}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#E5A019] hover:text-[#092747] text-white border border-white/10 transition-all flex items-center justify-center cursor-pointer"
                  aria-label="Next milestone"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* ── INTERACTIVE ERA RAIL / SCRUBBER TRACK ── */}
          <div className="mb-10">
            <div className="relative">
              {/* Connecting background line (desktop) */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 -translate-y-1/2 h-1 bg-white/10 rounded-full" />
              {/* Progress active line (desktop) */}
              <div
                className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 h-1 bg-gradient-to-r from-[#E5A019] to-[#F59E0B] rounded-full transition-all duration-500"
                style={{
                  width: `${(activeTimelineIdx / (TIMELINE.length - 1)) * 100}%`
                }}
              />

              {/* 4 Interactive Milestone Tabs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 relative z-10">
                {TIMELINE.map((item, idx) => {
                  const isActive = idx === activeTimelineIdx;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveTimelineIdx(idx)}
                      className={`text-left p-4 md:p-5 rounded-2xl border transition-all duration-300 relative group cursor-pointer ${
                        isActive
                          ? "bg-[#102F56] border-[#E5A019] shadow-lg shadow-[#E5A019]/10"
                          : "bg-[#092747]/80 hover:bg-[#102F56]/60 border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`text-xl md:text-2xl font-serif font-bold tracking-tight transition-colors ${
                            isActive ? "text-[#E5A019]" : "text-white/70 group-hover:text-white"
                          }`}
                        >
                          {item.year}
                        </span>
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                            isActive
                              ? "bg-[#E5A019] text-[#092747]"
                              : "bg-white/5 text-[#DCE3EA]/60 group-hover:text-[#E5A019] group-hover:bg-[#E5A019]/10"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="text-xs uppercase tracking-wider font-semibold text-[#DCE3EA]/80 truncate">
                        {item.eraBadge}
                      </div>
                      <div className="text-xs text-[#DCE3EA]/50 truncate mt-0.5">
                        {item.category}
                      </div>
                      {/* Bottom active accent bar */}
                      {isActive && (
                        <motion.div
                          layoutId="activeTimelineGlow"
                          className="absolute -bottom-px left-4 right-4 h-0.5 bg-[#E5A019]"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── GRAND EXHIBITION SPOTLIGHT STAGE ── */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {(() => {
                const current = TIMELINE[activeTimelineIdx];
                const Icon = current.icon;
                return (
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative bg-gradient-to-br from-[#102F56] via-[#0D2849] to-[#081F38] border border-white/15 rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl overflow-hidden"
                  >
                    {/* Big architectural watermark year */}
                    <div className="absolute right-4 md:right-8 -bottom-4 font-serif font-extrabold text-5xl sm:text-6xl md:text-7xl leading-none text-white/[0.04] select-none pointer-events-none">
                      {current.watermark}
                    </div>

                    <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                      {/* Left: Narrative & Credentials (8 cols) */}
                      <div className="lg:col-span-8 space-y-5">
                        {/* Meta badge strip */}
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="px-3 py-1 rounded-full bg-[#E5A019] text-[#092747] text-xs font-bold uppercase tracking-wider">
                            Era: {current.year}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium border border-white/10">
                            {current.category}
                          </span>
                          <span className="text-xs text-[#E5A019] font-medium flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E5A019]" />
                            {current.leader}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                          {current.title}
                        </h3>

                        {/* Story Paragraph */}
                        <p className="text-[#DCE3EA] text-sm sm:text-base leading-relaxed">
                          {current.desc}
                        </p>

                        {/* Capability / Historical Impact Tags */}
                        <div className="pt-2">
                          <div className="text-xs uppercase tracking-wider text-[#DCE3EA]/60 font-semibold mb-3">
                            Milestone Significance & Impact
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {current.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm text-white/90"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A019] shrink-0" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: Generational Archive Card & Action Link (4 cols) */}
                      <div className="lg:col-span-4">
                        <div className="bg-[#092747]/90 backdrop-blur-md rounded-2xl border border-white/10 p-6 sm:p-7 flex flex-col justify-between space-y-6">
                          <div className="space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-[#E5A019]/20 border border-[#E5A019]/30 flex items-center justify-center text-[#E5A019]">
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <div className="text-xs uppercase tracking-wider text-[#E5A019] font-bold">
                                Generational Archive
                              </div>
                              <div className="text-sm font-semibold text-white mt-1">
                                {current.eraBadge}
                              </div>
                              <p className="text-xs text-[#DCE3EA]/70 mt-2 leading-relaxed">
                                Preserved in the living lineage of the AB DHANAM GROUP enterprise.
                              </p>
                            </div>
                          </div>

                          <div className="pt-4 border-t border-white/10">
                            {current.divisionLink.href.startsWith("#") ? (
                              <a
                                href={current.divisionLink.href}
                                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#E5A019] hover:bg-[#d69213] text-[#092747] font-bold text-sm transition-all shadow-md group"
                              >
                                <span>{current.divisionLink.label}</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </a>
                            ) : (
                              <Link
                                href={current.divisionLink.href}
                                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#E5A019] hover:bg-[#d69213] text-[#092747] font-bold text-sm transition-all shadow-md group"
                              >
                                <span>{current.divisionLink.label}</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>

          {/* ── ALL 4 ERAS AT-A-GLANCE SUMMARY CARDS ── */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="text-center md:text-left mb-6">
              <span className="text-xs uppercase tracking-widest text-[#E5A019] font-semibold">
                Chronological Continuity
              </span>
              <p className="text-sm text-[#DCE3EA]/70">
                Click any milestone above or below to inspect its historical records.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {TIMELINE.map((item, idx) => {
                const isActive = idx === activeTimelineIdx;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveTimelineIdx(idx)}
                    className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                      isActive
                        ? "bg-[#102F56] border-[#E5A019]/80 shadow-md"
                        : "bg-white/[0.03] hover:bg-white/[0.07] border-white/5"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-[#E5A019] uppercase tracking-wider">
                        {item.year}
                      </span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#E5A019] animate-pulse" />
                      )}
                    </div>
                    <div className="text-sm font-semibold text-white line-clamp-1">
                      {item.title}
                    </div>
                    <div className="text-xs text-[#DCE3EA]/60 line-clamp-2 mt-1">
                      {item.leader}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP SPOTLIGHT ── */}
      <section id="leadership" className="py-24 md:py-32 bg-[#F1F5F9]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5A019] mb-2.5">
              Visionary Leadership
            </p>
            <div className="w-10 h-0.5 bg-[#E5A019] mx-auto mb-5" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#102F56] tracking-tight">
              Guided by Heritage, Driven by Purpose
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Founder Profile */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#DCE3EA] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#E5A019] font-bold block mb-2">
                  The Founding Pioneer
                </span>
                <h3 className="font-serif text-3xl font-bold text-[#102F56] mb-1">
                  M. Alagirisamy
                </h3>
                <p className="text-sm font-semibold text-[#64748B] mb-6">
                  Founder — A.B. Dhanam Radio & Lightings (1955)
                </p>
                <p className="text-[#334155] leading-relaxed mb-4">
                  A pioneering visionary who introduced professional acoustics, broadcast radio setups, and festival stage illuminations to Madurai in 1955. His relentless dedication to sound fidelity made A.B. Dhanam the historic choice for landmark cultural, political, and temple milestones in Tamil Nadu.
                </p>
              </div>
              <div className="pt-6 border-t border-[#DCE3EA] text-xs font-bold uppercase tracking-wider text-[#102F56] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E5A019]" />
                Pioneered Madurai's Event Tech in 1955
              </div>
            </div>

            {/* Current Managing Director Profile */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#DCE3EA] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#E5A019] font-bold block mb-2">
                  Managing Director
                </span>
                <h3 className="font-serif text-3xl font-bold text-[#102F56] mb-1">
                  A.B. Alagiri Rajan
                </h3>
                <p className="text-sm font-semibold text-[#64748B] mb-6">
                  Managing Director — AB DHANAM GROUP
                </p>
                <p className="text-[#334155] leading-relaxed mb-4">
                  Carrying forward the esteemed 70-year family legacy, A.B. Alagiri Rajan expanded the group into legal documentation and registration consultancy in 2015. Under his direct stewardship, over 5,000 clients have secured clean land titles, marriage registrations, and statutory compliance with zero disputes.
                </p>
              </div>
              <div className="pt-6 border-t border-[#DCE3EA] text-xs font-bold uppercase tracking-wider text-[#102F56] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E5A019]" />
                Guided 5,000+ Legal Registrations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMBINED INQUIRY & CONTACT FORM ── */}
      <section id="contact" className="py-24 md:py-32 bg-[#FAFBFC] border-t border-[#DCE3EA]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
            {/* Left Contact Info */}
            <div className="lg:col-span-5">
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#E5A019] mb-3 block">
                Direct Assistance
              </span>
              <div className="w-12 h-0.5 bg-[#E5A019] mb-6" />
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#102F56] mb-6">
                Connect with AB DHANAM GROUP
              </h2>
              <p className="text-[#334155] text-base md:text-lg leading-relaxed mb-8">
                Whether you need legal documentation guidance or concert-grade sound & lighting services for your upcoming event, our dedicated teams in Madurai are ready to assist.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#DCE3EA] flex items-center justify-center shrink-0 text-[#102F56]">
                    <MapPin className="w-6 h-6 text-[#E5A019]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#102F56] text-base">Headquarters</h4>
                    <p className="text-[#334155] text-sm leading-relaxed">
                      123, Anna Salai, Madurai, Tamil Nadu 625001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#DCE3EA] flex items-center justify-center shrink-0 text-[#102F56]">
                    <Phone className="w-6 h-6 text-[#E5A019]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#102F56] text-base">Central Hotline</h4>
                    <p className="text-[#334155] text-sm">
                      <a href="tel:+919876543210" className="hover:text-[#123E73] font-semibold">
                        +91 98765 43210
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#DCE3EA] flex items-center justify-center shrink-0 text-[#102F56]">
                    <Mail className="w-6 h-6 text-[#E5A019]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#102F56] text-base">Official Email</h4>
                    <p className="text-[#334155] text-sm">
                      <a href="mailto:contact@abdhanam.com" className="hover:text-[#123E73] font-semibold">
                        contact@abdhanam.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="mt-10">
                <a
                  href="https://wa.me/919876543210?text=Hello%20AB%20DHANAM%20GROUP,%20I%20would%20like%20to%20enquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all shadow-md"
                >
                  <WhatsAppIcon className="w-5 h-5" size={20} />
                  Chat on WhatsApp Directly
                </a>
              </div>
            </div>

            {/* Right Quick Inquiry Form */}
            <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl border border-[#DCE3EA] shadow-xl">
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#E5A019]/20 text-[#E5A019] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#102F56] mb-3">
                    Thank You for Contacting AB DHANAM GROUP
                  </h3>
                  <p className="text-[#334155] leading-relaxed mb-6">
                    Your inquiry has been routed to the appropriate department. Our team will contact you within one business hour.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded bg-[#102F56] text-white font-bold text-xs uppercase tracking-wider"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSubmitted(true);
                  }}
                  className="space-y-6"
                >
                  <h3 className="font-serif text-2xl font-bold text-[#102F56] mb-2">
                    Send a Message to the Group
                  </h3>
                  <p className="text-sm text-[#64748B] mb-6">
                    Select which service department you are inquiring about:
                  </p>

                  {/* Division Selection Pills */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: "legal", label: "Legal & Registry" },
                      { id: "sound", label: "Sound & Lightings" },
                      { id: "both", label: "General / Both" }
                    ].map((tab) => (
                      <button
                        type="button"
                        key={tab.id}
                        onClick={() => setInquiryDivision(tab.id)}
                        className={`py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all text-center ${inquiryDivision === tab.id
                            ? "bg-[#102F56] text-white border-[#102F56] shadow-sm"
                            : "bg-white text-[#334155] border-[#DCE3EA] hover:bg-[#F1F5F9]"
                          }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#334155] mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-4 py-3 rounded-lg border border-[#DCE3EA] focus:border-[#123E73] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#334155] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-lg border border-[#DCE3EA] focus:border-[#123E73] text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#334155] mb-2">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-[#DCE3EA] focus:border-[#123E73] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#334155] mb-2">
                      Your Requirements / Event Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your legal registration query or event date, sound/light requirements..."
                      className="w-full px-4 py-3 rounded-lg border border-[#DCE3EA] focus:border-[#123E73] text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded bg-[#123E73] hover:bg-[#092747] text-white font-bold text-sm uppercase tracking-wider transition-all shadow-md"
                  >
                    Submit Group Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── GROUP MASTER FOOTER ── */}
      <footer className="bg-[#102F56] text-white pt-16 pb-12 border-t-2 border-[#E5A019]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Column 1: Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-xl bg-white p-1 border border-[#E5A019]/40 flex items-center justify-center shrink-0">
                  <img
                    src="/images/Logo-2.png"
                    alt="AB DHANAM GROUP"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-white leading-tight">
                    AB DHANAM GROUP
                  </h3>
                  <p className="text-xs text-[#E5A019] font-bold uppercase tracking-widest">
                    Est. 1955 • Madurai
                  </p>
                </div>
              </div>
              <p className="text-sm text-[#DCE3EA] leading-relaxed mb-4">
                Seven decades of distinction in Tamil Nadu. Preserving legacy through legal certainty and acoustic illumination mastery.
              </p>
              <p className="text-xs text-[#E5A019] font-serif italic">
                Fast • Reliable • Professional
              </p>
            </div>

            {/* Column 2: Legal Division */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-[0.15em] text-[#E5A019] mb-4 pb-2 border-b border-white/10">
                Legal & Registry Services
              </h4>
              <ul className="space-y-2.5 text-sm text-[#DCE3EA]">
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
              <h4 className="font-bold text-sm uppercase tracking-[0.15em] text-[#E5A019] mb-4 pb-2 border-b border-white/10">
                Radio, Sound & Lightings
              </h4>
              <ul className="space-y-2.5 text-sm text-[#DCE3EA]">
                <li><Link href="/radio-and-lightings" className="hover:text-[#E5A019] font-bold">&rarr; Sound & Lightings Home</Link></li>
                <li><Link href="/radio-and-lightings#services" className="hover:text-[#E5A019]">Concert PA Systems & Line Arrays</Link></li>
                <li><Link href="/radio-and-lightings#services" className="hover:text-[#E5A019]">Stage & Festival Illumination</Link></li>
                <li><Link href="/radio-and-lightings#services" className="hover:text-[#E5A019]">Silent Generators (15–250 kVA)</Link></li>
                <li><Link href="/radio-and-lightings#services" className="hover:text-[#E5A019]">DJ & Event Management</Link></li>
                <li><Link href="/radio-and-lightings#legacy" className="hover:text-[#E5A019]">Historic 1955 Milestone</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-[0.15em] text-[#E5A019] mb-4 pb-2 border-b border-white/10">
                Headquarters
              </h4>
              <p className="text-sm text-[#DCE3EA] leading-relaxed mb-4">
                123, Anna Salai,<br />
                Madurai, Tamil Nadu 625001
              </p>
              <p className="text-sm text-[#DCE3EA] mb-2">
                <strong>Phone:</strong> +91 98765 43210
              </p>
              <p className="text-sm text-[#DCE3EA]">
                <strong>Email:</strong> contact@abdhanam.com
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#DCE3EA]/80">
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
