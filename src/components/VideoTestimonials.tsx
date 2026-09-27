import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  CheckCircle,
  Star,
  X,
  Sparkles,
  Video,
  Phone,
  ArrowRight,
  Quote,
  ShieldCheck,
} from "lucide-react";

export interface VideoTestimonialItem {
  id: string;
  videoSrc: string;
  name: string;
  role: string;
  location: string;
  service: string;
  duration: string;
  rating: number;
  highlight: string;
  fullQuote: string;
  avatar: string;
}

export const VIDEO_TESTIMONIALS: VideoTestimonialItem[] = [
  {
    id: "video-1",
    videoSrc: "/videos/testimonials/testimonial-1.mp4",
    name: "Karthik Subramanian",
    role: "Property Owner & Investor",
    location: "Madurai, Tamil Nadu",
    service: "Property Registration",
    duration: "0:20",
    rating: 5,
    highlight: "Zero Errors & Complete Title Scrutiny",
    fullQuote:
      "A.B. Dhanam handled our entire property registration with extreme precision. Their deep familiarity with the Sub-Registrar guidelines and thorough title deed verification gave us complete confidence.",
    avatar: "KS",
  },
  {
    id: "video-2",
    videoSrc: "/videos/testimonials/testimonial-2.mp4",
    name: "Meenakshi Sundaram",
    role: "Educational Trust Founder",
    location: "Coimbatore, Tamil Nadu",
    service: "Trust Registration",
    duration: "0:30",
    rating: 5,
    highlight: "Smooth Charitable Trust Registration",
    fullQuote:
      "Establishing our educational trust felt daunting until Mr. Alagiri Rajan guided us. Every compliance requirement and trust deed clause was drafted and approved without any delays.",
    avatar: "MS",
  },
  {
    id: "video-3",
    videoSrc: "/videos/testimonials/testimonial-3.mp4",
    name: "Rajesh & Priya Kumar",
    role: "Newlywed Clients",
    location: "Chennai, Tamil Nadu",
    service: "Marriage Registration",
    duration: "0:46",
    rating: 5,
    highlight: "Fast Special Marriage Act Processing",
    fullQuote:
      "We needed urgent Special Marriage Act documentation for visa submission. The team took care of all paperwork, scheduling, and accompanied us seamlessly throughout the registration day.",
    avatar: "RK",
  },
  {
    id: "video-4",
    videoSrc: "/videos/testimonials/testimonial-4.mp4",
    name: "V. Raghunathan",
    role: "Welfare Society Chairman",
    location: "Tirunelveli, Tamil Nadu",
    service: "Society Registration",
    duration: "0:53",
    rating: 5,
    highlight: "Complex Society Approval Expedited",
    fullQuote:
      "Our community welfare society registration was stalled for months. A.B. Dhanam quickly identified the missing filings, revised the bylaws, and successfully completed the official registration.",
    avatar: "VR",
  },
];

interface VideoTestimonialsProps {
  writtenTestimonials?: Array<{
    name: string;
    role: string;
    service: string;
    stars: number;
    avatar: string;
    content: string;
  }>;
}

export default function VideoTestimonials({ writtenTestimonials = [] }: VideoTestimonialsProps) {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [activeModalItem, setActiveModalItem] = useState<VideoTestimonialItem | null>(null);
  const [progressMap, setProgressMap] = useState<Record<string, number>>({});
  const [activeTab, setActiveTab] = useState<"all" | "videos" | "written">("videos");

  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  // Toggle play/pause for a specific card
  const handleTogglePlay = (id: string) => {
    // If clicking currently playing, pause it
    if (playingId === id) {
      const current = videoRefs.current[id];
      if (current) current.pause();
      setPlayingId(null);
      return;
    }

    // Pause all other videos
    Object.entries(videoRefs.current).forEach(([key, videoEl]) => {
      if (videoEl && key !== id) {
        videoEl.pause();
      }
    });

    const target = videoRefs.current[id];
    if (target) {
      target.muted = isMuted;
      target
        .play()
        .then(() => {
          setPlayingId(id);
        })
        .catch((err) => {
          console.warn("Autoplay error or gesture required:", err);
          // Retry muted if browser blocked audio autoplay
          target.muted = true;
          setIsMuted(true);
          target.play().then(() => setPlayingId(id));
        });
    }
  };

  const handleToggleMute = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    Object.values(videoRefs.current).forEach((videoEl) => {
      if (videoEl) videoEl.muted = newMuted;
    });
  };

  const handleTimeUpdate = (id: string) => {
    const el = videoRefs.current[id];
    if (el && el.duration) {
      const pct = (el.currentTime / el.duration) * 100;
      setProgressMap((prev) => ({ ...prev, [id]: pct }));
    }
  };

  const handleEnded = (id: string) => {
    setPlayingId(null);
    setProgressMap((prev) => ({ ...prev, [id]: 0 }));
    const el = videoRefs.current[id];
    if (el) el.currentTime = 0;
  };

  // Open Fullscreen Theater Modal
  const openModal = (item: VideoTestimonialItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    // Pause all inline cards
    Object.values(videoRefs.current).forEach((v) => v && v.pause());
    setPlayingId(null);
    setActiveModalItem(item);
  };

  const closeModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setActiveModalItem(null);
  };

  // Handle ESC key for modal
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeModalItem) {
        closeModal();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeModalItem]);

  return (
    <section className="py-24 md:py-28 bg-[#102F56] text-white relative overflow-hidden border-t border-[#123E73]/60">
      {/* Subtle background mesh grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative ambient glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#123E73]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#E5A019]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A019]/10 border border-[#E5A019]/30 text-[#E5A019] text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real Client Stories</span>
            </div>

            <div className="w-12 h-0.5 bg-[#E5A019] mx-auto mb-5" />

            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Watch Real Experiences Across Tamil Nadu
            </h2>

            <p className="text-[#DCE3EA]/85 text-sm md:text-base leading-relaxed">
              Listen directly to genuine video reviews from property buyers, trust founders, and families who trusted A.B. Dhanam for seamless registrations.
            </p>
          </motion.div>

          {/* Interactive Navigation Filter Pills */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            <button
              onClick={() => setActiveTab("videos")}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeTab === "videos"
                  ? "bg-[#E5A019] text-[#102F56] shadow-lg shadow-[#E5A019]/20"
                  : "bg-white/5 text-[#DCE3EA] hover:bg-white/10 border border-white/10"
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>Video Reviews ({VIDEO_TESTIMONIALS.length})</span>
            </button>

            {writtenTestimonials.length > 0 && (
              <button
                onClick={() => setActiveTab("all")}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  activeTab === "all"
                    ? "bg-[#E5A019] text-[#102F56] shadow-lg shadow-[#E5A019]/20"
                    : "bg-white/5 text-[#DCE3EA] hover:bg-white/10 border border-white/10"
                }`}
              >
                <Quote className="w-3.5 h-3.5" />
                <span>All Testimonials ({VIDEO_TESTIMONIALS.length + writtenTestimonials.length})</span>
              </button>
            )}

            {writtenTestimonials.length > 0 && (
              <button
                onClick={() => setActiveTab("written")}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  activeTab === "written"
                    ? "bg-[#E5A019] text-[#102F56] shadow-lg shadow-[#E5A019]/20"
                    : "bg-white/5 text-[#DCE3EA] hover:bg-white/10 border border-white/10"
                }`}
              >
                <span>Written Reviews ({writtenTestimonials.length})</span>
              </button>
            )}
          </div>
        </div>

        {/* ── VIDEO TESTIMONIAL CARDS GRID ─────────────────────────────────── */}
        {(activeTab === "videos" || activeTab === "all") && (
          <div className="mb-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
              {VIDEO_TESTIMONIALS.map((item, idx) => {
                const isPlaying = playingId === item.id;
                const progress = progressMap[item.id] || 0;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group relative flex flex-col rounded-2xl overflow-hidden bg-[#092747] border border-white/15 hover:border-[#E5A019]/70 shadow-xl hover:shadow-[0_20px_45px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1.5"
                  >
                    {/* Video Player Container (9:16 Aspect Ratio Frame) */}
                    <div
                      className="relative aspect-[9/15] w-full bg-black cursor-pointer overflow-hidden"
                      onClick={() => handleTogglePlay(item.id)}
                    >
                      <video
                        ref={(el) => {
                          videoRefs.current[item.id] = el;
                        }}
                        src={`${item.videoSrc}#t=0.001`}
                        playsInline
                        preload="metadata"
                        muted={isMuted}
                        onTimeUpdate={() => handleTimeUpdate(item.id)}
                        onEnded={() => handleEnded(item.id)}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Top Badges & Control Bar */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-auto">
                        {/* Duration Pill */}
                        <span className="bg-black/65 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-white/15 shadow-sm">
                          <Video className="w-3 h-3 text-[#E5A019]" />
                          {item.duration}
                        </span>

                        <div className="flex items-center gap-1.5">
                          {/* Audio Mute/Unmute Toggle */}
                          <button
                            onClick={(e) => handleToggleMute(e, item.id)}
                            className="w-8 h-8 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-white flex items-center justify-center hover:bg-[#E5A019] hover:text-[#102F56] transition-all"
                            title={isMuted ? "Unmute" : "Mute"}
                            aria-label={isMuted ? "Unmute video" : "Mute video"}
                          >
                            {isMuted ? (
                              <VolumeX className="w-3.5 h-3.5" />
                            ) : (
                              <Volume2 className="w-3.5 h-3.5 text-[#E5A019]" />
                            )}
                          </button>

                          {/* Expand to Theater Modal */}
                          <button
                            onClick={(e) => openModal(item, e)}
                            className="w-8 h-8 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-white flex items-center justify-center hover:bg-[#E5A019] hover:text-[#102F56] transition-all"
                            title="Watch in Theater mode"
                            aria-label="Expand video modal"
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>



                      {/* Centered Play / Pause Action Button */}
                      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleTogglePlay(item.id);
                          }}
                          data-testid={`button-play-video-${item.id}`}
                          className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl backdrop-blur-md border border-white/30 pointer-events-auto cursor-pointer ${
                            isPlaying
                              ? "bg-black/50 text-white opacity-0 group-hover:opacity-100 scale-95"
                              : "bg-[#E5A019] text-[#102F56] scale-100 group-hover:scale-110 shadow-[0_0_30px_rgba(229,160,25,0.45)]"
                          }`}
                          aria-label={isPlaying ? "Pause video" : "Play video"}
                        >
                          {isPlaying ? (
                            <Pause className="w-6 h-6 fill-current" />
                          ) : (
                            <Play className="w-6 h-6 fill-current ml-0.5" />
                          )}
                        </button>
                      </div>

                      {/* Bottom Scrim & Content Overlay */}
                      <div className="absolute inset-x-0 bottom-0 pt-20 pb-4 px-4 bg-gradient-to-t from-black/95 via-black/75 to-transparent z-10 flex flex-col justify-end pointer-events-auto">
                        {/* Playback Progress Indicator */}
                        <div className="w-full bg-white/20 h-1 rounded-full mb-3 overflow-hidden">
                          <div
                            className="bg-[#E5A019] h-full transition-all duration-150 rounded-full"
                            style={{ width: `${progress}%` }}
                          />
                        </div>

                        {/* Star Rating & Verified Pill */}
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex gap-0.5">
                            {Array.from({ length: item.rating }).map((_, i) => (
                              <Star
                                key={i}
                                className="w-3.5 h-3.5 fill-[#E5A019] text-[#E5A019]"
                              />
                            ))}
                          </div>
                          <span className="text-[10px] font-bold text-[#E5A019] flex items-center gap-1 bg-[#E5A019]/15 border border-[#E5A019]/30 px-2 py-0.5 rounded-full">
                            <CheckCircle className="w-2.5 h-2.5" /> Verified
                          </span>
                        </div>

                        {/* Client Name & Role */}
                        <h3 className="font-serif font-bold text-base text-white leading-tight">
                          {item.name}
                        </h3>
                        <p className="text-[11px] text-[#E5A019] font-medium mb-2">
                          {item.role} • {item.location.split(",")[0]}
                        </p>

                        {/* Service Tag */}
                        <div className="mb-2">
                          <span className="inline-block text-[10px] font-semibold text-white/90 bg-white/10 border border-white/15 px-2 py-0.5 rounded">
                            {item.service}
                          </span>
                        </div>

                        {/* Highlight Quote Snippet */}
                        <p className="text-white/80 text-xs italic leading-snug line-clamp-2 mb-3">
                          "{item.highlight}"
                        </p>

                        {/* Watch Story CTA button */}
                        <button
                          onClick={(e) => openModal(item, e)}
                          className="w-full py-2 px-3 rounded-lg bg-white/10 hover:bg-[#E5A019] text-white hover:text-[#102F56] text-[11px] font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 border border-white/15 hover:border-[#E5A019]"
                        >
                          <span>Full Story & Details</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── WRITTEN REVIEWS AUTO-SCROLL MARQUEE ────────────────────────────── */}
        {(activeTab === "written" || activeTab === "all") && writtenTestimonials.length > 0 && (
          <div className="mt-8 mb-12">
            {activeTab === "all" && (
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px bg-white/15 flex-1" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#E5A019] font-bold flex items-center gap-2">
                  <Quote className="w-3.5 h-3.5" /> More Verified Client Reviews
                </span>
                <div className="h-px bg-white/15 flex-1" />
              </div>
            )}

            <div className="relative w-full overflow-hidden py-2">
              <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#102F56] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#102F56] to-transparent z-10 pointer-events-none" />

              <div className="animate-testimonials-track flex gap-6 px-4">
                {[...writtenTestimonials, ...writtenTestimonials].map((t, idx) => (
                  <div
                    key={`${t.name}-${idx}`}
                    className="w-[320px] sm:w-[380px] md:w-[420px] flex-shrink-0 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#E5A019]/60 hover:bg-white/[0.09] transition-all duration-300 flex flex-col justify-between shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="flex gap-1">
                          {Array.from({ length: t.stars }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#E5A019] text-[#E5A019]" />
                          ))}
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#E5A019] bg-[#E5A019]/10 border border-[#E5A019]/30 px-3 py-1 rounded-full">
                          {t.service}
                        </span>
                      </div>

                      <p className="text-[#DCE3EA] text-sm leading-relaxed mb-6 italic">
                        "{t.content}"
                      </p>
                    </div>

                    <div className="border-t border-white/10 pt-4 flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#123E73] to-[#092747] border border-[#E5A019]/50 flex items-center justify-center font-bold text-white text-xs shrink-0 shadow-sm">
                        {t.avatar}
                      </div>
                      <div>
                        <div className="font-serif font-bold text-sm text-white">{t.name}</div>
                        <div className="text-[#E5A019] text-[11px] font-semibold uppercase tracking-wider mt-0.5">
                          {t.role}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── CLIENT RATING & TRUST PROOF FOOTER BAR ───────────────────────── */}
        <div className="text-center mt-10">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 md:gap-4 px-6 md:px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-[#DCE3EA] shadow-lg backdrop-blur-md">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#E5A019] text-[#E5A019]" />
              ))}
            </div>
            <span className="font-bold text-white">4.9 / 5.0 Rating</span>
            <span className="text-white/40 hidden sm:inline">•</span>
            <span>Over 5,000+ satisfied clients across Tamil Nadu</span>
            <span className="text-white/40 hidden sm:inline">•</span>
            <span className="text-[#E5A019] font-medium flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> 100% Verified Reviews
            </span>
          </div>
        </div>
      </div>

      {/* ── THEATER MODAL (EXPANDED HD VIEW WITH FULL STORY) ─────────────── */}
      <AnimatePresence>
        {activeModalItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-lg"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-4xl bg-[#102F56] border border-[#E5A019]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-black/60 hover:bg-[#E5A019] text-white hover:text-[#102F56] flex items-center justify-center border border-white/20 transition-all duration-200"
                aria-label="Close video player modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Full Video Player */}
              <div className="md:w-1/2 bg-black flex items-center justify-center relative min-h-[360px] md:min-h-[500px]">
                <video
                  ref={modalVideoRef}
                  src={activeModalItem.videoSrc}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain max-h-[75vh]"
                />
              </div>

              {/* Right Column: Client Details, Review Transcript & CTA */}
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto bg-gradient-to-b from-[#102F56] to-[#092747]">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-[#E5A019]/15 text-[#E5A019] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#E5A019]/30">
                      {activeModalItem.service}
                    </span>
                    <span className="text-white/40 text-xs">•</span>
                    <span className="text-xs text-[#DCE3EA]">{activeModalItem.duration} Video</span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">
                    {activeModalItem.name}
                  </h3>
                  <p className="text-sm text-[#E5A019] font-medium mb-4">
                    {activeModalItem.role} • {activeModalItem.location}
                  </p>

                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: activeModalItem.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E5A019] text-[#E5A019]" />
                    ))}
                    <span className="text-xs text-[#DCE3EA] font-semibold ml-2">
                      5.0 Verified Experience
                    </span>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
                    <Quote className="w-6 h-6 text-[#E5A019]/40 mb-2" />
                    <p className="text-[#DCE3EA] text-sm md:text-base leading-relaxed italic">
                      "{activeModalItem.fullQuote}"
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#DCE3EA]/80 mb-6">
                    <CheckCircle className="w-4 h-4 text-[#E5A019]" />
                    <span>Registered under Sub-Registrar Office, Tamil Nadu</span>
                  </div>
                </div>

                {/* Modal CTA actions */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <Link
                    href="/book-consultation"
                    onClick={closeModal}
                    className="w-full inline-flex items-center justify-center bg-[#123E73] hover:bg-[#092747] text-white px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-all border border-[#E5A019]/40 gap-2 shadow-md"
                  >
                    <span>Consult for {activeModalItem.service}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="tel:+919876543210"
                    className="w-full inline-flex items-center justify-center bg-white/5 hover:bg-white/10 text-[#DCE3EA] hover:text-white px-6 py-2.5 rounded-lg font-semibold text-xs transition-all border border-white/10 gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#E5A019]" />
                    <span>Call Advisory Helpline (+91 98765 43210)</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
