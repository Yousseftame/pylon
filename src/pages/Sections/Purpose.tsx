import { motion } from "framer-motion";
import { MoveRight, Target, Activity, Zap } from "lucide-react";
import SplitText from "../../components/SplitText";

const pillars = [
  {
    icon: <Target className="w-6 h-6 text-white" />,
    title: "Design",
    description: "Designing spatial intelligence and forward-planning architectures."
  },
  {
    icon: <Activity className="w-6 h-6 text-white" />,
    title: "Build",
    description: "Engineering resilient infrastructure for sustainable, long-term growth."
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Operate",
    description: "Managing ecosystems that elevate human potential and capabilities."
  }
];

export default function Purpose() {
  return (
    <section
      id="purpose"
      className="relative w-full min-h-screen flex flex-col justify-center py-32 overflow-hidden "
    >
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#111] via-transparent to-transparent opacity-50 z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-white/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-8 relative z-10 flex flex-col items-center">
        
        {/* Top Tag */}
       

        {/* Hero Text */}
        <div className="flex flex-col items-center gap-2 mb-16 text-center max-w-5xl">
          <SplitText
            text="Architects of"
            tag="h2"
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-bold text-white leading-[1.05] tracking-tighter w-full"
            delay={30} duration={1}
          />
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 justify-center w-full">
            <span className="hidden md:block w-16 lg:w-32 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
            <SplitText
              text="Tomorrow's"
              tag="h2"
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-bold text-gray-500 leading-[1.05] tracking-tighter italic"
              delay={30} duration={1}
            />
            <span className="hidden md:block w-16 lg:w-32 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
          </div>
          <SplitText
            text="Experience."
            tag="h2"
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-bold text-white leading-[1.05] tracking-tighter w-full"
            delay={30} duration={1}
          />
        </div>
        
        {/* Core Mission Statement */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl text-center font-medium mb-24"
        >
          We are driven by a singular mission: to design, build, and operate foundational elements of modern society that elevate human potential and sustainable growth.
        </motion.p>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.3 + idx * 0.15 }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col p-8 md:p-10 rounded-[2rem] bg-[#0A0A0A] border border-white/5 overflow-hidden transition-all duration-500 hover:border-white/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="mb-8 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white group-hover:border-white transition-all duration-500">
                <div className="group-hover:invert transition-all duration-500">
                  {pillar.icon}
                </div>
              </div>
              
              <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">{pillar.title}</h4>
              <p className="text-gray-500 leading-relaxed font-medium">{pillar.description}</p>
              
              <div className="mt-12 flex items-center text-xs font-bold uppercase tracking-widest text-gray-600 group-hover:text-white transition-colors duration-300 mt-auto pt-4">
                <span>Explore</span>
                <MoveRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
