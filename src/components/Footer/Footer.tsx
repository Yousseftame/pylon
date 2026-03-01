import { MoveRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" w-full">
      <div className=" mx-auto px-4 sm:px-8 md:px-12">
        {/* Realistic Silver Glass Box Container */}
        <div
          className="relative rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 overflow-hidden"
          style={{
            background:
              "linear-gradient(to right, rgba(229, 231, 235, 0.4), rgba(229, 231, 235, 0.4), rgba(229, 231, 235, 0.4))",
            backdropFilter: "blur(20px)",
            boxShadow: `
              inset 0 1px 0 rgba(255, 255, 255, 0.5),
              inset 0 -1px 0 rgba(0, 0, 0, 0.1),
              0 10px 40px rgba(0, 0, 0, 0.2),
              0 2px 8px rgba(0, 0, 0, 0.1)
            `,
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          {/* Metallic texture overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 2px,
                  rgba(255, 255, 255, 0.1) 2px,
                  rgba(255, 255, 255, 0.1) 4px
                ),
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 2px,
                  rgba(0, 0, 0, 0.05) 2px,
                  rgba(0, 0, 0, 0.05) 4px
                )
              `,
            }}
          />

          {/* Shine effect */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              background:
                "linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)",
            }}
          />

          {/* Content wrapper with z-index */}
          <div className="relative z-10">
            {/* Full Width Horizontal Line */}
            <div className="w-full h-[1.5px] sm:h-[2px] bg-black mb-6 sm:mb-8"></div>

            {/* Top Section - Left and Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-14 md:mb-16">
              {/* Left Side - Our Links */}
              <div className="space-y-6 sm:space-y-8">
                {/* Our Links Section - Taking Full Left Side on Desktop */}
                <div>
                  <h2 className="text-base sm:text-xl md:text-2xl font-medium text-black mb-6 sm:mb-8">
                    OUR LINKS
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-4 sm:gap-y-5 md:gap-y-6 lg:gap-y-8 sm:gap-x-8">
                    <a
                      href="https://digitalstudioeg.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/70 hover:text-black transition-colors font-light tracking-wide"
                    >
                      DS+
                    </a>
                    <a
                      href="https://thinkstudio.ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/70 hover:text-black transition-colors font-light tracking-wide"
                    >
                      THINK
                    </a>
                    <a
                      href="https://insightify-eg.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/70 hover:text-black transition-colors font-light tracking-wide"
                    >
                      INSIGHTIFY
                    </a>
                    <a
                      href="http://mediamagneteg.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/70 hover:text-black transition-colors font-light tracking-wide"
                    >
                      MEDIA MAGNET
                    </a>
                    <a
                      href="https://tradeontut.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/70 hover:text-black transition-colors font-light tracking-wide"
                    >
                      TUT GROUP
                    </a>
                    <a
                      href="https://tactinnovations.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/70 hover:text-black transition-colors font-light tracking-wide"
                    >
                      TACT CONSTRUCTION
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Side - Text Content (hidden on mobile, aligned to the right on desktop) */}
              <div className="hidden lg:flex lg:justify-end">
                {/* Text Content - Narrow columns, 6-7 lines each */}
                <div className="grid grid-cols-1 gap-y-6 max-w-[200px]">
                  <p className="text-[10px] text-black/80 leading-relaxed">
                    Pylon Holding is more than a name — it's a symbol of
                    purpose, power, and progress. Inspired by the towering
                    gateways of ancient Egypt, the word "Pylon" represents our
                    deep cultural roots and monumental vision. Just as the
                    ancient pylons once marked the entrance to sacred spaces, we
                    stand at the intersection of tradition and innovation —
                    bridging heritage with modern cultures, and cutting-edge
                    technology to shape what's next.
                  </p>

                  <p className="text-[10px] text-black/80 leading-relaxed">
                    The word "Holding" reflects the very core of our identity: a
                    unified force of specialized talent spanning culture, public
                    policy, immersive technologies, commerce, and strategic
                    communications. Each pillar represents a distinct
                    capability, but they form a cohesive ecosystem that thrives
                    on collaboration, synergy, and innovation.
                  </p>

                  <p className="text-[10px] text-black/80 leading-relaxed">
                    Pylon Holding is a beacon of cultural and technological
                    strength — empowering ideas, elevating brands, and
                    envisioning the future through shared vision and
                    interconnected capabilities.
                  </p>

                  <p className="text-[10px] text-black/80 leading-relaxed">
                    With one foot grounded in heritage and the other reaching
                    toward progress, we are not just building businesses. We are
                    building the next generation of experiences, narratives, and
                    destinations.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="space-y-6 sm:space-y-8">
              {/* Buttons */}
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
                <button
                  onClick={() => {
                    const el = document.getElementById("services");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-black text-white text-[10px] sm:text-xs font-medium tracking-wider uppercase transition-all duration-300 hover:bg-black/80 flex items-center gap-2"
                >
                  EXPLORE NOW
                  <MoveRight />
                </button>

                <button className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-transparent border-2 border-black text-black text-[10px] sm:text-xs font-medium tracking-wider uppercase transition-all duration-300 hover:bg-black hover:text-white flex items-center gap-2">
                  READ DOCS
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 sm:h-4 w-3 sm:w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </button>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
                <a
                  href="#"
                  className="text-[10px] sm:text-xs font-medium text-black/80 hover:text-black transition-colors underline"
                >
                  BEHANCE
                </a>
                <a
                  href="#"
                  className="text-[10px] sm:text-xs font-medium text-black/80 hover:text-black transition-colors underline"
                >
                  DRIBBBLE
                </a>
                <a
                  href="#"
                  className="text-[10px] sm:text-xs font-medium text-black/80 hover:text-black transition-colors underline"
                >
                  INSTAGRAM
                </a>
                <a
                  href="#"
                  className="text-[10px] sm:text-xs font-medium text-black/80 hover:text-black transition-colors underline"
                >
                  TWITTER
                </a>
              </div>

              {/* Large Pylon Holding Text */}
              <div className="pt-6 sm:pt-8">
                <h1 className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] 2xl:text-[140px] text-black/[0.3] tracking-tight leading-none">
                  Pylon Holding
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
