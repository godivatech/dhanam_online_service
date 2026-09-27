import { motion } from "framer-motion";

export const TESTIMONIAL_VIDEOS = [
  { id: "1", src: "/videos/testimonials/testimonial-1.mp4" },
  { id: "2", src: "/videos/testimonials/testimonial-2.mp4" },
  { id: "3", src: "/videos/testimonials/testimonial-3.mp4" },
  { id: "4", src: "/videos/testimonials/testimonial-4.mp4" },
];

export default function VideoTestimonials() {
  const handlePlay = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const currentVideo = e.currentTarget;
    currentVideo.muted = false;
    currentVideo.volume = 1.0;

    // Pause any other playing video so sounds don't overlap
    const allVideos = document.querySelectorAll<HTMLVideoElement>("video[data-testid^='video-testimonial-']");
    allVideos.forEach((v) => {
      if (v !== currentVideo && !v.paused) {
        v.pause();
      }
    });
  };

  return (
    <section className="py-20 md:py-24 bg-[#102F56] text-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Clean Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#E5A019] font-bold mb-3">
            Client Testimonials
          </p>
          <div className="w-12 h-0.5 bg-[#E5A019] mx-auto mb-4" />
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-3">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* 4 Clean Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {TESTIMONIAL_VIDEOS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-black border border-white/10 hover:border-[#E5A019]/60 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <video
                src={`${item.src}#t=0.001`}
                controls
                playsInline
                preload="metadata"
                muted={false}
                onLoadedMetadata={(e) => {
                  e.currentTarget.muted = false;
                  e.currentTarget.volume = 1.0;
                }}
                onPlay={handlePlay}
                className="w-full h-full object-cover"
                data-testid={`video-testimonial-${item.id}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
