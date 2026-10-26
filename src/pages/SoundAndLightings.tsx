import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Volume2,
  Sparkles,
  Zap,
  Radio,
  Music,
  Award,
  Clock,
  ShieldCheck,
  Calendar,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Menu,
  X,
  Speaker,
  Flame,
  Star,
  Building2,
  Sliders,
  Camera,
  Maximize2,
  Eye
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const SERVICES_LIST = [
  {
    id: "sound",
    icon: Volume2,
    title: "Concert Sound & PA Systems",
    subtitle: "Acoustic Perfection for 100 to 50,000+ Gatherings",
    desc: "Concert-grade line array speaker systems, digital Yamaha and Soundcraft mixing consoles, wireless UHF microphone sets, and acoustic feedback suppressors tuned for speech clarity and musical punch.",
    bullets: [
      "JBL & RCF active/passive line array clusters",
      "Digital 32-channel mixing consoles with onboard DSP",
      "Sennheiser & Shure cordless dynamic & lapel mics",
      "Acoustic calibration for open grounds and enclosed auditoriums"
    ],
    idealFor: "Weddings, Music Concerts, Public Rallies, Conferences"
  },
  {
    id: "lights",
    icon: Sparkles,
    title: "Stage & Festival Illumination",
    subtitle: "Dazzling Visuals & Architectural Uplighting",
    desc: "Intelligent moving head sharpy beams, vibrant RGBW LED par cans, blinder arrays, laser projections, and traditional festive serial lighting for temples, wedding halls, and outdoor lawns.",
    bullets: [
      "Computerized DMX lighting controllers & programmed beam choreography",
      "High-power Sharpy moving beams with custom gobo patterns",
      "Waterproof architectural LED wall-washers & tree uplighting",
      "Traditional serial lighting & temple tower (Gopuram) illumination"
    ],
    idealFor: "Temple Kumbabishekam, Sangeet & Receptions, Cultural Fests"
  },
  {
    id: "radio",
    icon: Radio,
    title: "Radio & Procession Broadcast",
    subtitle: "Our Foundational Heritage Since 1955",
    desc: "Long-throw horn loudspeaker networks and multi-kilometer audio distribution for temple processions, marathon announcements, and public festival streets across Madurai.",
    bullets: [
      "High-efficiency reflex horn speakers with heavy-duty line transformers",
      "Long-distance audio cable networks with multi-zone amplification",
      "Procession mobile vehicle PA setups with built-in backup power",
      "Trusted for Chithirai Festival and temple car processions"
    ],
    idealFor: "Temple Thiruvizha, Religious Processions, Public Announcements"
  },
  {
    id: "generators",
    icon: Zap,
    title: "Silent Mobile Generators",
    subtitle: "Guaranteed 100% Uninterrupted Power Backup",
    desc: "Fleet of soundproof mobile diesel generator vans ranging from 15 kVA to 250+ kVA. Fully CPCB-compliant silent acoustics with automatic AMF changeover switches.",
    bullets: [
      "Heavy-duty mobile diesel generators: 15kVA, 30kVA, 62.5kVA, 125kVA & 250kVA",
      "Sound-attenuated acoustic canopy (zero disturbance during speeches)",
      "Dedicated on-site electrical engineer and technician throughout event",
      "Dual backup synchronization available for VIP and television broadcasts"
    ],
    idealFor: "Outdoor Lawns, VIP Conferences, Power Outage Contingencies"
  },
  {
    id: "dj-events",
    icon: Music,
    title: "DJ & Event Technical Management",
    subtitle: "High-Energy Stage Rigging & Special Effects",
    desc: "End-to-end technical production: heavy aluminum goal-post and box trussing, LED video walls, smoke/fog jets, cold fire sparkulars, bubble machines, and live DJ audio setups.",
    bullets: [
      "High-grade aluminum box trusses & heavy-duty stage towers",
      "P3 / P2.5 outdoor high-brightness LED video screen walls",
      "Cold pyro sparkular fountains (100% fire-safe and indoor compliant)",
      "CO2 cryo jets, low-lying heavy fog machines, and bubble blowers"
    ],
    idealFor: "Wedding Sangeet, College Fests, Product Launches, DJ Nights"
  }
];

const HISTORIC_MILESTONES = [
  {
    year: "1955",
    title: "Founded by Pioneer M. Alagirisamy",
    desc: "M. Alagirisamy launched A.B. Dhanam in Madurai as the city's very first dedicated radio broadcasting and stage lighting enterprise, bringing modern acoustic amplification to post-independence Tamil Nadu."
  },
  {
    year: "Historic",
    title: "Pasumpon Muthuramalingam Thevar 1st Anniversary",
    desc: "Chosen as the official sound and illumination contractor for the inaugural memorial anniversary of the revered leader Pasumpon Muthuramalingam Thevar. Our crystal-clear horn audio relayed speeches to tens of thousands across massive open grounds without a single glitch."
  },
  {
    year: "1970s - 90s",
    title: "Pillar of Tamil Nadu Temple & Political Gatherings",
    desc: "From the world-renowned Madurai Meenakshi Amman Temple festivals to historic public rallies and community weddings across Ramanathapuram, Dindigul, and Tirunelveli, A.B. Dhanam became a household name."
  },
  {
    year: "Present",
    title: "Modern Concert Audio & Digital DMX Illumination",
    desc: "Now upgraded with digital line array acoustics, computerized DMX lighting, LED video screens, and silent generator fleets, serving both sacred traditions and high-energy contemporary celebrations."
  }
];

const FAQS = [
  {
    q: "How early should we book sound and lighting services?",
    a: "For weddings and major festival seasons (especially auspicious Muhurtham dates and Chithirai festival months), we advise booking 3 to 6 weeks in advance to reserve our prime line-array systems and generator vans. However, we also cater to urgent requirements when inventory allows."
  },
  {
    q: "Do you provide generator backup along with sound and lighting?",
    a: "Yes! A.B. Dhanam operates its own fleet of silent, CPCB-compliant mobile diesel generators (15 kVA to 250+ kVA). We can power your sound, lighting, stage LED walls, and complete venue with zero reliance on local power grid fluctuations."
  },
  {
    q: "Do you take up events outside Madurai district?",
    a: "Yes. While our headquarters is located in Madurai, our logistics vans travel across all southern and central Tamil Nadu districts including Dindigul, Theni, Virudhunagar, Sivagangai, Ramanathapuram, Tirunelveli, and Trichy."
  },
  {
    q: "Can you manage indoor acoustics without feedback noise?",
    a: "Our sound technicians use 32-channel digital consoles with real-time spectrum analyzers and acoustic feedback suppressors. We tune each microphone to the room acoustics during pre-event sound checks, guaranteeing pristine vocal clarity with zero squealing feedback."
  }
];

interface GalleryItem {
  id: string;
  title: string;
  image: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "Historic Speech Address by Arignar Anna",
    image: "/images/lighitng%20website%20gallery/1.png"
  },
  {
    id: "gallery-2",
    title: "Community Felicitation & Leadership Landmark",
    image: "/images/lighitng%20website%20gallery/2.png"
  },
  {
    id: "gallery-3",
    title: "Acoustic Distinction & Stage Award Presentation",
    image: "/images/lighitng%20website%20gallery/3.png"
  },
  {
    id: "gallery-4",
    title: "Public Rally Address by Vaiko",
    image: "/images/lighitng%20website%20gallery/4.png"
  },
  {
    id: "gallery-5",
    title: "Stage Event & Acoustic Archive 05",
    image: "/images/lighitng%20website%20gallery/5.png"
  },
  {
    id: "gallery-6",
    title: "Stage Event & Acoustic Archive 06",
    image: "/images/lighitng%20website%20gallery/6.png"
  },
  {
    id: "gallery-7",
    title: "Stage Event & Acoustic Archive 07",
    image: "/images/lighitng%20website%20gallery/7.png"
  },
  {
    id: "gallery-8",
    title: "Stage Event & Acoustic Archive 08",
    image: "/images/lighitng%20website%20gallery/8.png"
  },
  {
    id: "gallery-9",
    title: "Stage Event & Acoustic Archive 09",
    image: "/images/lighitng%20website%20gallery/9.png"
  },
  {
    id: "gallery-10",
    title: "Stage Event & Acoustic Archive 10",
    image: "/images/lighitng%20website%20gallery/10.png"
  }
];

export default function SoundAndLightings() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("sound");
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  // Gallery Section State
  const [activeLightboxImage, setActiveLightboxImage] = useState<GalleryItem | null>(null);

  // Quote Generator Form State
  const [eventType, setEventType] = useState("Wedding");
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([
    "Sound System",
    "Stage Lights"
  ]);
  const [eventDate, setEventDate] = useState("");
  const [attendees, setAttendees] = useState("500 - 1,000");
  const [eventLocation, setEventLocation] = useState("Madurai");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");

  const toggleNeed = (need: string) => {
    if (selectedNeeds.includes(need)) {
      setSelectedNeeds(selectedNeeds.filter((n) => n !== need));
    } else {
      setSelectedNeeds([...selectedNeeds, need]);
    }
  };

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello A.B Dhanam Radio & Lightings!
I would like to request an event quote:
- Name: ${clientName || "Client"}
- Phone: ${clientPhone || "Provided on call"}
- Event Type: ${eventType}
- Requirements: ${selectedNeeds.join(", ")}
- Event Date: ${eventDate || "To be finalized"}
- Expected Attendees: ${attendees}
- Location: ${eventLocation}

Please share your availability and package quote. Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919876543210?text=${encoded}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#FAFBFC] text-[#334155] font-sans selection:bg-[#E5A019]/30 selection:text-[#102F56] flex flex-col">
      {/* ── TOP GROUP AFFILIATION BAR ── */}
      <div className="bg-[#092747] text-white text-xs py-2.5 px-4 border-b border-[#E5A019]/30">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E5A019] animate-pulse" />
            <span className="text-[#DCE3EA]">
              An Enterprise of <strong className="text-white">AB DHANAM GROUP</strong> • Madurai's Pioneer Sound & Lights Since 1955
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <Link
              href="/"
              className="text-[#E5A019] hover:text-white transition-colors font-bold flex items-center gap-1"
            >
              &larr; Return to AB DHANAM GROUP Portal
            </Link>
            <span className="text-white/30">|</span>
            <Link
              href="/legal"
              className="text-[#DCE3EA] hover:text-[#E5A019] transition-colors"
            >
              Need Legal Services?
            </Link>
          </div>
        </div>
      </div>

      {/* ── MAIN STICKY HEADER (Crisp White & Balanced) ── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#DCE3EA] shadow-[0_2px_10px_rgba(16,47,86,0.06)]">
        <div className="container mx-auto px-4 lg:px-8 h-24 md:h-28 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="/radio-and-lightings" className="flex items-center gap-3.5 group">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-[#D97706] to-[#B45309] p-0.5 shadow-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center p-2">
                <Volume2 className="w-8 h-8 text-[#D97706]" />
              </div>
            </div>
            <div>
              <span className="font-serif text-lg sm:text-xl md:text-2xl font-black text-[#102F56] tracking-tight group-hover:text-[#D97706] transition-colors block leading-tight">
                A.B DHANAM
              </span>
              <span className="text-xs md:text-sm font-bold text-[#D97706] tracking-wider uppercase block">
                Radio & Lightings
              </span>
            </div>
          </Link>

          {/* Desktop Nav Anchors */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-bold uppercase tracking-wider text-[#334155]">
            <a href="#services" className="hover:text-[#D97706] transition-colors">
              Services
            </a>
            <a href="#legacy" className="hover:text-[#D97706] transition-colors">
              Historic 1955 Milestone
            </a>
            <a href="#equipment" className="hover:text-[#D97706] transition-colors">
              Inventory & Specs
            </a>
            <a href="#gallery" className="hover:text-[#D97706] transition-colors flex items-center gap-1.5 font-bold text-[#D97706]">
              <Camera className="w-4 h-4" />
              <span>Gallery</span>
            </a>
            <a href="#booking" className="hover:text-[#D97706] transition-colors">
              Instant Quote
            </a>
            <a href="#faqs" className="hover:text-[#D97706] transition-colors">
              FAQs
            </a>
          </nav>

          {/* Quick Contact & Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#DCE3EA] text-[#102F56] hover:bg-[#F1F5F9] text-xs md:text-sm font-bold transition-all"
            >
              <Phone className="w-4 h-4 text-[#D97706]" />
              <span>+91 98765 43210</span>
            </a>
            <a
              href="#booking"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#D97706] hover:bg-[#B45309] text-white text-xs md:text-sm font-black uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
            >
              <span>Book Event</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#102F56] hover:bg-[#F1F5F9] rounded-lg transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
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
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-[#DCE3EA]/60 text-[#102F56]"
                >
                  Services
                </a>
                <a
                  href="#legacy"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-[#DCE3EA]/60 text-[#102F56]"
                >
                  Historic 1955 Milestone
                </a>
                <a
                  href="#equipment"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-[#DCE3EA]/60 text-[#102F56]"
                >
                  Inventory & Specs
                </a>
                <a
                  href="#gallery"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-[#DCE3EA]/60 text-[#D97706] font-bold flex items-center gap-2"
                >
                  <Camera className="w-4 h-4" />
                  <span>Gallery & Archives</span>
                </a>
                <a
                  href="#booking"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-[#DCE3EA]/60 text-[#D97706]"
                >
                  Instant Event Quote
                </a>
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-[#DCE3EA]/60 text-[#64748B]"
                >
                  &larr; Return to AB DHANAM GROUP
                </Link>

                <div className="pt-2">
                  <a
                    href="tel:+919876543210"
                    className="w-full text-center py-3.5 rounded bg-[#D97706] text-white font-black text-sm uppercase tracking-wider block"
                  >
                    Call Event Desk: +91 98765 43210
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── BALANCED HERO: CONCERT LIGHTING BACKDROP WITH LIGHT FLOATING CARD ── */}
      <section className="relative min-h-[68vh] lg:min-h-[76vh] flex items-center overflow-hidden bg-[#102F56]">
        {/* Background Concert Stage Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/images/sound-and-lightings-hero.jpg')` }}
          />
          {/* Balanced navy & amber overlay for optimum image clarity and text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#092747]/90 via-[#102F56]/80 to-[#102F56]/60 z-10 pointer-events-none" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-20 py-12 md:py-16">
          <div className="max-w-3xl">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#E5A019]/40 text-[#E5A019] text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-md"
            >
              <Award className="w-4 h-4 text-[#E5A019]" />
              <span>Madurai's First & Pioneer Sound & Lighting Service Company</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] mb-5 text-white"
            >
              Powering Celebrations.<br />
              <span className="text-[#E5A019] italic font-serif">
                Electrifying Moments Since 1955.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#DCE3EA] text-sm sm:text-base md:text-lg leading-relaxed mb-8 font-normal max-w-2xl"
            >
              Founded in 1955 by <strong>M. Alagirisamy</strong>. Legendary for powering the historic <strong>Pasumpon Muthuramalingam Thevar 1st Anniversary</strong> sound and lighting. Today providing concert-grade line arrays, computerized stage illumination, silent generators, and DJ event management across Tamil Nadu.
            </motion.p>

            {/* Hero Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <a
                href="#booking"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-sm md:text-base uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <span>Book Event Equipment</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919876543210?text=Hello%20A.B.%20Dhanam%20Radio%20and%20Lightings,%20I%20need%20sound%20and%20lighting%20services%20for%20my%20event."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/30 hover:border-white text-white hover:bg-white/10 font-bold text-sm md:text-base uppercase tracking-wider transition-all flex items-center justify-center gap-2.5"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#25D366]" size={20} />
                <span>Chat on WhatsApp</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── KEY METRICS STRIP (Crisp White Card Grid like Home.tsx) ── */}
      <section className="py-12 bg-[#FAFBFC] border-b border-[#DCE3EA]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-white border border-[#DCE3EA] rounded-2xl shadow-xs divide-y lg:divide-y-0 lg:divide-x divide-[#DCE3EA] grid grid-cols-2 lg:grid-cols-4 overflow-hidden">
            <div className="p-6 md:p-8 text-center flex flex-col justify-center items-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102F56] mb-1 font-serif">1955</div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                Founding Year
              </div>
            </div>
            <div className="p-6 md:p-8 text-center flex flex-col justify-center items-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#D97706] mb-1 font-serif">1st in Madurai</div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                Radio & Lighting Pioneer
              </div>
            </div>
            <div className="p-6 md:p-8 text-center flex flex-col justify-center items-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102F56] mb-1 font-serif">10,000+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                Events Powered
              </div>
            </div>
            <div className="p-6 md:p-8 text-center flex flex-col justify-center items-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#D97706] mb-1 font-serif">15–250 kVA</div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                Silent Generator Fleets
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HISTORIC SPOTLIGHT: PASUMPON MUTHURAMALINGAM THEVAR 1ST ANNIVERSARY (#F1F5F9) ── */}
      <section id="legacy" className="py-24 md:py-32 bg-[#F1F5F9]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto bg-white border border-[#DCE3EA] rounded-3xl p-8 md:p-14 shadow-sm relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="lg:w-7/12">
                <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#FEF3C7] text-[#92400E] text-xs font-black uppercase tracking-widest mb-4 border border-[#FDE68A]">
                  Historic Milestone • Landmark of Tamil Nadu History
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#102F56] mb-5 leading-tight">
                  Pasumpon Muthuramalingam Thevar <br />
                  <span className="text-[#D97706]">1st Anniversary Acoustics & Lights</span>
                </h2>
                <p className="text-[#334155] text-sm sm:text-base leading-relaxed mb-4 font-normal">
                  In the formative years of modern Tamil Nadu, when tens of thousands congregated to honor the revered leader <strong>Pasumpon Muthuramalingam Thevar</strong> on his 1st Anniversary, sound reinforcement and festival illumination were entrusted to <strong>M. Alagirisamy and A.B. Dhanam Radio & Lightings</strong>.
                </p>
                <p className="text-[#334155] text-sm sm:text-base leading-relaxed mb-5 font-normal">
                  Through cutting-edge horn arrays, high-power audio distribution, and grand floodlights across the solemn grounds, our team ensured every voice reached the massive multitude clearly — establishing a benchmark of technical reliability that has stood unbroken for over 70 years.
                </p>

                <div className="flex flex-wrap gap-4 pt-4 border-t border-[#DCE3EA] text-xs md:text-sm font-bold text-[#102F56]">
                  <span className="flex items-center gap-1.5 text-[#D97706]">
                    <CheckCircle2 className="w-4 h-4" /> Trusted by Great Leaders
                  </span>
                  <span className="flex items-center gap-1.5 text-[#D97706]">
                    <CheckCircle2 className="w-4 h-4" /> 7 Decades of Acoustic Fidelity
                  </span>
                  <span className="flex items-center gap-1.5 text-[#D97706]">
                    <CheckCircle2 className="w-4 h-4" /> Zero Breakdown Record
                  </span>
                </div>
              </div>

              <div className="lg:w-5/12 w-full">
                <div className="bg-[#FAFBFC] p-6 md:p-8 rounded-2xl border border-[#DCE3EA] shadow-xs space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[#FEF3C7] flex items-center justify-center text-[#D97706] shrink-0 border border-[#FDE68A]">
                      <Radio className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#102F56] text-lg">Pioneered in 1955</h4>
                      <p className="text-xs text-[#64748B]">Madurai's First Audio Company</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm text-[#334155] leading-relaxed border-t border-[#DCE3EA] pt-4">
                    <div>
                      <strong className="text-[#102F56] block mb-0.5">Founder:</strong>
                      M. Alagirisamy
                    </div>
                    <div>
                      <strong className="text-[#102F56] block mb-0.5">Historic Role:</strong>
                      Inaugural Speech Broadcast & Floodlight Illumination
                    </div>
                    <div>
                      <strong className="text-[#102F56] block mb-0.5">Continuing Excellence:</strong>
                      Under AB DHANAM GROUP leadership
                    </div>
                  </div>

                  <a
                    href="#booking"
                    className="block w-full py-3.5 text-center bg-[#102F56] text-white font-bold rounded-lg text-xs uppercase tracking-wider hover:bg-[#092747] transition-colors"
                  >
                    Hire Our Heritage & Tech For Your Event &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPREHENSIVE SERVICES SECTION (Clean White Background) ── */}
      <section id="services" className="py-24 md:py-32 bg-[#FAFBFC]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#D97706] mb-3 block">
              Concert & Event Solutions
            </span>
            <div className="w-12 h-0.5 bg-[#D97706] mx-auto mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#102F56] tracking-tight">
              End-to-End Technical Production
            </h2>
            <p className="text-[#64748B] text-sm sm:text-base leading-relaxed mt-3">
              From intimate acoustic wedding receptions to grand temple Kumbabishekam and political rallies for 50,000 people.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_LIST.map((srv) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.id}
                  className="bg-white rounded-2xl border border-[#DCE3EA] hover:border-[#D97706] p-8 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] flex items-center justify-center text-[#D97706] mb-6 group-hover:bg-[#D97706] group-hover:text-white transition-colors">
                      <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#102F56] mb-2 group-hover:text-[#D97706] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs font-bold text-[#D97706] uppercase tracking-wider mb-4">
                      {srv.subtitle}
                    </p>
                    <p className="text-[#334155] text-sm leading-relaxed mb-6 font-normal">
                      {srv.desc}
                    </p>

                    <div className="space-y-2.5 bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E8F0] mb-6">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                        Capabilities & Specs:
                      </div>
                      {srv.bullets.map((b, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#334155]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D97706] mt-0.5 shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#DCE3EA] flex items-center justify-between">
                    <span className="text-xs text-[#64748B] italic">
                      Ideal for: {srv.idealFor}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TECHNICAL EQUIPMENT & INVENTORY SPECIFICATION (#F1F5F9) ── */}
      <section id="equipment" className="py-24 bg-[#F1F5F9] border-t border-[#DCE3EA]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#D97706] mb-3 block">
              World-Class Tech Stack
            </span>
            <div className="w-12 h-0.5 bg-[#D97706] mx-auto mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#102F56] tracking-tight">
              Inventory & Hardware Specifications
            </h2>
            <p className="text-[#64748B] text-sm sm:text-base leading-relaxed mt-3">
              We never compromise on audio clarity, electrical stability, or visual power.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-7 rounded-2xl border border-[#DCE3EA] shadow-xs hover:shadow-md transition-shadow">
              <div className="text-[#D97706] font-serif text-3xl font-black mb-2">Acoustics</div>
              <h4 className="text-[#102F56] font-bold text-lg mb-3">Line Array Audio</h4>
              <ul className="text-xs text-[#334155] space-y-2 leading-relaxed">
                <li>• JBL VRX & SRX Line Arrays</li>
                <li>• RCF Active Subwoofers (18" & 21")</li>
                <li>• Yamaha QL/TF Digital Mixers</li>
                <li>• Shure Wireless Mic Systems</li>
              </ul>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#DCE3EA] shadow-xs hover:shadow-md transition-shadow">
              <div className="text-[#D97706] font-serif text-3xl font-black mb-2">Illumination</div>
              <h4 className="text-[#102F56] font-bold text-lg mb-3">Intelligent Stage Lights</h4>
              <ul className="text-xs text-[#334155] space-y-2 leading-relaxed">
                <li>• Sharpy 17R / 20R Moving Beams</li>
                <li>• 54x3W Waterproof RGBW LED Pars</li>
                <li>• Avolites DMX Computer Console</li>
                <li>• City Color Architecture Washers</li>
              </ul>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#DCE3EA] shadow-xs hover:shadow-md transition-shadow">
              <div className="text-[#D97706] font-serif text-3xl font-black mb-2">Power</div>
              <h4 className="text-[#102F56] font-bold text-lg mb-3">Silent Generators</h4>
              <ul className="text-xs text-[#334155] space-y-2 leading-relaxed">
                <li>• 15 kVA – 250 kVA Mobile Fleet</li>
                <li>• CPCB-II Acoustic Enclosure</li>
                <li>• Auto AMF Synchronization</li>
                <li>• 24/7 Mobile Diesel Support Van</li>
              </ul>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#DCE3EA] shadow-xs hover:shadow-md transition-shadow">
              <div className="text-[#D97706] font-serif text-3xl font-black mb-2">Stage FX</div>
              <h4 className="text-[#102F56] font-bold text-lg mb-3">DJ & Special Effects</h4>
              <ul className="text-xs text-[#334155] space-y-2 leading-relaxed">
                <li>• Heavy Aluminum Trussing (12"x12")</li>
                <li>• P3 High-Definition LED Video Wall</li>
                <li>• Cold Spark Firework Fountains</li>
                <li>• Dry Ice Fog & CO2 Cryo Cannons</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTO & ARCHIVAL GALLERY SECTION (#FAFBFC) ── */}
      <section id="gallery" className="py-24 md:py-32 bg-[#FAFBFC] border-t border-[#DCE3EA]">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto mb-10 md:mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D97706] mb-2 block">
              GALLERY
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#102F56] tracking-tight">
              Event & Production Gallery
            </h2>
          </div>

          {/* Gallery Showcase Content - 2-Sided Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {GALLERY_ITEMS.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setActiveLightboxImage(item)}
                  className="group relative cursor-pointer bg-white rounded-2xl sm:rounded-3xl border border-[#DCE3EA] hover:border-[#D97706] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#092747] flex items-center justify-center p-2 sm:p-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain rounded-xl sm:rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                    />

                    {/* Subtle Hover Overlay Hint */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 pointer-events-none">
                      <span className="px-5 py-2.5 rounded-xl bg-black/80 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 border border-white/20 shadow-xl">
                        <Maximize2 className="w-4 h-4 text-[#E5A019]" />
                        Click to View Full Image
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE INSTANT EVENT QUOTE & BOOKING FORM ── */}
      <section id="booking" className="py-24 md:py-32 bg-white border-t border-[#DCE3EA]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto bg-[#FAFBFC] border border-[#DCE3EA] rounded-3xl p-8 md:p-14 shadow-md">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D97706] font-black mb-2 block">
                Direct Booking Desk
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#102F56] tracking-tight">
                Get an Instant Event Package Quote
              </h2>
              <p className="text-[#64748B] text-sm md:text-base mt-3 max-w-2xl mx-auto">
                Customize your requirements below. Generate an instant pre-formatted WhatsApp quote to talk directly with our Senior Event Production Manager in Madurai.
              </p>
            </div>

            <form onSubmit={handleWhatsAppBooking} className="space-y-8">
              {/* Event Type Selector */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#102F56] mb-3">
                  1. Select Event Type:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {[
                    "Wedding",
                    "Temple Festival",
                    "Concert / DJ",
                    "Public Rally",
                    "Corporate Fest"
                  ].map((evt) => (
                    <button
                      type="button"
                      key={evt}
                      onClick={() => setEventType(evt)}
                      className={`py-3 px-3 rounded-xl text-xs font-bold transition-all text-center border ${eventType === evt
                          ? "bg-[#D97706] text-white border-[#D97706] shadow-sm font-black"
                          : "bg-white text-[#334155] border-[#DCE3EA] hover:border-[#D97706]/60"
                        }`}
                    >
                      {evt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Modules Selector */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#102F56] mb-3">
                  2. Select Required Systems (Multi-select):
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    "Sound System",
                    "Stage Lights",
                    "Silent Generator",
                    "DJ & Stage FX"
                  ].map((need) => {
                    const isChecked = selectedNeeds.includes(need);
                    return (
                      <button
                        type="button"
                        key={need}
                        onClick={() => toggleNeed(need)}
                        className={`py-3 px-3 rounded-xl text-xs font-bold transition-all text-center border flex items-center justify-center gap-2 ${isChecked
                            ? "bg-[#FEF3C7] text-[#92400E] border-[#F59E0B] font-bold"
                            : "bg-white text-[#334155] border-[#DCE3EA] hover:border-[#D97706]/60"
                          }`}
                      >
                        <CheckCircle2
                          className={`w-4 h-4 ${isChecked ? "text-[#D97706]" : "text-[#94A3B8]"
                            }`}
                        />
                        <span>{need}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Event Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#102F56] mb-2">
                    Event Date:
                  </label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full bg-white border border-[#DCE3EA] rounded-xl px-4 py-3 text-sm text-[#102F56] focus:border-[#D97706] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#102F56] mb-2">
                    Expected Attendees:
                  </label>
                  <select
                    value={attendees}
                    onChange={(e) => setAttendees(e.target.value)}
                    className="w-full bg-white border border-[#DCE3EA] rounded-xl px-4 py-3 text-sm text-[#102F56] focus:border-[#D97706] outline-none"
                  >
                    <option value="100 - 300">100 – 300 People</option>
                    <option value="500 - 1,000">500 – 1,000 People</option>
                    <option value="1,000 - 5,000">1,000 – 5,000 People</option>
                    <option value="5,000 - 25,000+">5,000 – 25,000+ People</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#102F56] mb-2">
                    Location / City:
                  </label>
                  <input
                    type="text"
                    value={eventLocation}
                    onChange={(e) => setEventLocation(e.target.value)}
                    placeholder="e.g. Madurai, Dindigul, Theni"
                    className="w-full bg-white border border-[#DCE3EA] rounded-xl px-4 py-3 text-sm text-[#102F56] focus:border-[#D97706] outline-none"
                  />
                </div>
              </div>

              {/* Client Contact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#102F56] mb-2">
                    Your Name:
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Sundararajan"
                    className="w-full bg-white border border-[#DCE3EA] rounded-xl px-4 py-3 text-sm text-[#102F56] focus:border-[#D97706] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#102F56] mb-2">
                    Phone / WhatsApp Number:
                  </label>
                  <input
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full bg-white border border-[#DCE3EA] rounded-xl px-4 py-3 text-sm text-[#102F56] focus:border-[#D97706] outline-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-sm md:text-base uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-3"
                >
                  <WhatsAppIcon className="w-6 h-6" size={24} />
                  <span>Get Instant Quote & Check Dates on WhatsApp</span>
                </button>
                <p className="text-center text-xs text-[#64748B] mt-3">
                  Instant response • No obligation • Direct technical consultation with event head
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS (Clean Light #FAFBFC) ── */}
      <section id="faqs" className="py-24 bg-[#FAFBFC] border-t border-[#DCE3EA]">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#D97706] mb-3 block">
              Clear Answers
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#102F56]">
              Event Planning FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = faqOpen === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-[#DCE3EA] overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setFaqOpen(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-[#102F56] text-base md:text-lg hover:text-[#D97706] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#D97706] shrink-0 transition-transform ${isOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-6 pb-6 text-sm text-[#334155] leading-relaxed border-t border-[#DCE3EA]/60 pt-4"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SOUND & LIGHTINGS DEDICATED FOOTER ── */}
      <footer className="bg-[#092747] text-[#DCE3EA] pt-16 pb-12 border-t-4 border-[#D97706]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Col 1: Identity */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#D97706] p-1 flex items-center justify-center text-white font-black">
                  <Volume2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-black text-white leading-tight">
                    A.B DHANAM
                  </h4>
                  <p className="text-xs text-[#E5A019] font-bold uppercase tracking-wider">
                    Radio & Lightings
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#DCE3EA]/80 leading-relaxed mb-4">
                Madurai's first radio, sound, and lighting service company. Seven decades of technical distinction across Tamil Nadu.
              </p>
              <p className="text-xs text-[#E5A019] font-serif italic">
                A Pillar Enterprise of AB DHANAM GROUP
              </p>
            </div>

            {/* Col 2: Services */}
            <div>
              <h5 className="font-bold text-xs uppercase tracking-[0.2em] text-[#E5A019] mb-4 pb-2 border-b border-white/10">
                Core Capabilities
              </h5>
              <ul className="space-y-2 text-xs">
                <li><a href="#services" className="hover:text-white transition-colors">Concert Line Array Audio</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Sharpy & DMX Stage Lights</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Temple Serial & Tower Illumination</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">CPCB Silent Generators (15–250 kVA)</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">DJ Setup, Truss & Special Effects</a></li>
              </ul>
            </div>

            {/* Col 3: Group Links */}
            <div>
              <h5 className="font-bold text-xs uppercase tracking-[0.2em] text-[#E5A019] mb-4 pb-2 border-b border-white/10">
                AB DHANAM GROUP
              </h5>
              <ul className="space-y-2 text-xs">
                <li><Link href="/" className="hover:text-white font-bold transition-colors">&rarr; AB DHANAM GROUP Master Portal</Link></li>
                <li><Link href="/legal" className="hover:text-white font-bold transition-colors">&rarr; A.B. Dhanam Online Services (Legal)</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About the Group Legacy</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Corporate Inquiries</Link></li>
              </ul>
            </div>

            {/* Col 4: Contact */}
            <div>
              <h5 className="font-bold text-xs uppercase tracking-[0.2em] text-[#E5A019] mb-4 pb-2 border-b border-white/10">
                Event Booking Office
              </h5>
              <p className="text-xs text-[#DCE3EA]/80 leading-relaxed mb-3">
                123, Anna Salai,<br />
                Madurai, Tamil Nadu 625001
              </p>
              <p className="text-xs text-[#DCE3EA]/80 mb-1">
                <strong>Hotline:</strong> +91 98765 43210
              </p>
              <p className="text-xs text-[#DCE3EA]/80">
                <strong>Email:</strong> events@abdhanam.com
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
            <p>© {new Date().getFullYear()} A.B Dhanam Radio & Lightings. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* ── LIGHTBOX MODAL FOR FULL-SIZE IMAGE VIEW ── */}
      <AnimatePresence>
        {activeLightboxImage && (() => {
          const currentIndex = GALLERY_ITEMS.findIndex((img) => img.id === activeLightboxImage.id);
          const hasMultiple = GALLERY_ITEMS.length > 1;

          const handlePrev = (e: React.MouseEvent) => {
            e.stopPropagation();
            const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
            setActiveLightboxImage(GALLERY_ITEMS[prevIndex]);
          };

          const handleNext = (e: React.MouseEvent) => {
            e.stopPropagation();
            const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
            setActiveLightboxImage(GALLERY_ITEMS[nextIndex]);
          };

          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
              onClick={() => setActiveLightboxImage(null)}
            >
              <button
                onClick={() => setActiveLightboxImage(null)}
                className="absolute top-5 right-5 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              {hasMultiple && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors flex items-center justify-center"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors flex items-center justify-center"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              <div
                className="relative max-w-6xl w-full flex flex-col items-center justify-center p-2"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  key={activeLightboxImage.id}
                  src={activeLightboxImage.image}
                  alt={activeLightboxImage.title}
                  className="max-h-[85vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
                />
                {hasMultiple && (
                  <div className="mt-3 text-xs text-white/60 tracking-wider">
                    {currentIndex + 1} / {GALLERY_ITEMS.length}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </div>
  );
}
