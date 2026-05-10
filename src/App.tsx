/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ChevronRight, 
  Target, 
  Zap, 
  Maximize, 
  MapPin, 
  Instagram, 
  Mail, 
  Phone,
  ArrowDown
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md px-6 py-6 md:px-16 flex justify-between items-baseline border-b border-white/10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-6"
        >
          <img 
            src="https://lh3.googleusercontent.com/d/1AInKu5xtj12dR40_0OpzBaGZbMCHnPG4" 
            alt="TB Soccer Logo" 
            className="h-10 w-auto brightness-0 invert" 
          />
          <span className="text-[10px] tracking-[0.3em] uppercase opacity-40 hidden sm:block">Private Elite Training</span>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex gap-8 text-[11px] uppercase tracking-widest font-medium"
        >
          <a href="#approach" className="hover:opacity-50 transition-opacity">Approach</a>
          <a href="#training" className="hover:opacity-50 transition-opacity">Training</a>
          <a href="#contact" className="hover:opacity-50 transition-opacity">Contact</a>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center px-6 md:px-16 overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[30vw] font-black leading-none tracking-tighter opacity-[0.03] select-none whitespace-nowrap pointer-events-none">
          ELITE TRAINING
        </div>
        
        <div className="relative z-10 max-w-5xl pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-[14vw] md:text-[9vw] leading-[0.82] font-black tracking-tight uppercase mb-8">
              PRECISION<br />
              <span className="text-outline">EXECUTION.</span>
            </h1>
          </motion.div>
          
          <motion.div 
            {...fadeInUp}
            className="max-w-md border-l border-white/20 pl-8 mb-12"
          >
            <p className="text-neutral-400 text-lg font-light leading-relaxed">
              Specialized private development for high-performance athletes focused on the clinical technicality of the modern game.
            </p>
          </motion.div>

          <motion.div {...fadeInUp}>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-6 bg-white text-black px-12 py-5 rounded-full font-black uppercase text-[11px] tracking-widest hover:bg-neutral-200 transition-colors"
            >
              Request Assessment <ChevronRight size={16} />
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-16 right-6 md:right-16 text-right hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 mb-2 font-bold">Base of Operations</div>
          <div className="text-sm font-medium italic tracking-tight">LONG ISLAND, NEW YORK — 2024</div>
        </motion.div>

        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
          <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section id="approach" className="py-40 px-6 md:px-16 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <header className="flex flex-col md:flex-row justify-between items-baseline border-b border-black/10 pb-12 mb-24">
            <h2 className="text-[10vw] md:text-[5vw] leading-[0.8] font-black tracking-tighter uppercase">
              The <br />Pillars.
            </h2>
            <div className="max-w-xs mt-8 md:mt-0">
               <div className="text-[10px] tracking-widest uppercase opacity-40 mb-4 font-bold">Methodology</div>
               <p className="text-xl text-neutral-800 leading-tight italic">
                Our methodology transcends traditional coaching. We focus on the granular details that define technical dominance.
              </p>
            </div>
          </header>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-16"
          >
            {[
              {
                title: "Technical",
                subtitle: "Development",
                desc: "Hyper-focused ball mastery and body mechanics designed to eliminate technical margins of error.",
                icon: <Target className="mb-8" size={32} />
              },
              {
                title: "Performance",
                subtitle: "Execution",
                desc: "Translating technique into high-speed execution under metabolic fatigue and competitive pressure.",
                icon: <Zap className="mb-8" size={32} />
              },
              {
                title: "Intelligence",
                subtitle: "Scenarios",
                desc: "Position-specific drill architecture that replicates high-stakes match-day decision making.",
                icon: <Maximize className="mb-8" size={32} />
              }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="flex flex-col group border-t border-black/10 pt-12"
              >
                <div className="text-xs tracking-widest text-neutral-400 mb-6 font-medium uppercase">0{i + 1} — {pillar.subtitle}</div>
                <h3 className="text-3xl font-extrabold tracking-tighter uppercase italic mb-6">{pillar.title}</h3>
                <p className="text-neutral-500 leading-relaxed max-w-xs">{pillar.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Action Section */}
      <section id="training" className="relative py-64 bg-black overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 z-0 opacity-40 grayscale pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1510567153183-497bc3c0ff4e?auto=format&fit=crop&q=80&w=2000" 
            alt="Soccer Action"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 px-6 md:px-16 text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[12vw] md:text-[7vw] leading-[0.8] font-black tracking-tighter uppercase mb-16">
              Train Like <br /><span className="text-outline">Professional.</span>
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 text-sm uppercase tracking-widest text-neutral-400 font-medium">
              <div className="flex items-center gap-4"><div className="w-2 h-2 bg-white rounded-full" /> 1-on-1 Clinical Mastery</div>
              <div className="flex items-center gap-4"><div className="w-2 h-2 bg-white rounded-full" /> Small Group Scenarios</div>
              <div className="flex items-center gap-4"><div className="w-2 h-2 bg-white rounded-full" /> Elite Performance Labs</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 px-6 md:px-16 border-t border-white/20 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
            <div className="sticky top-40">
              <div className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 mb-6 font-bold">Inquiries</div>
              <h2 className="text-[8vw] md:text-[5vw] leading-[0.9] font-black tracking-tighter uppercase mb-16">
                Request <br />Assessment.
              </h2>
              <div className="space-y-12">
                <div className="group cursor-pointer">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-2">Location</div>
                  <div className="text-xl font-light italic">Nassau County / Suffolk County, NY</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-2">Direct Contact</div>
                  <div className="text-xl font-medium tracking-tight">train@tbsoccer.pro</div>
                  <div className="text-sm text-neutral-500 mt-1">Response within 24 hours</div>
                </div>
                <div className="group">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-2">Availability</div>
                  <div className="text-sm italic text-white/60">Currently accepting limited openings for Q4 2024</div>
                </div>
              </div>
            </div>

            <div className="bg-black p-8 md:p-16 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-[60px] font-black text-white/5 select-none leading-none">TB</div>
              <form className="space-y-10 relative z-10">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-black text-neutral-400">Athlete Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 pb-4 outline-none focus:border-white transition-colors text-lg" placeholder="John Doe" />
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest font-black text-neutral-400">Age / Grad Year</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/20 pb-4 outline-none focus:border-white transition-colors" placeholder="2027" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest font-black text-neutral-400">Primary Position</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/20 pb-4 outline-none focus:border-white transition-colors" placeholder="CM / ST" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-black text-neutral-400">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/20 pb-4 outline-none focus:border-white transition-colors text-lg" placeholder="athlete@email.com" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-black text-neutral-400">Current Level & Goals</label>
                  <textarea rows={3} className="w-full bg-transparent border-b border-white/20 pb-4 outline-none focus:border-white transition-colors resize-none" placeholder="ECNL / MLS Next..."></textarea>
                </div>
                <button className="bg-white text-black px-12 py-6 rounded-full font-black uppercase text-[11px] tracking-widest hover:scale-[0.98] transition-transform w-full md:w-auto">
                  Submit Assessment Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center border-t border-white/20 gap-12">
        <div className="flex flex-col gap-6">
          <img 
            src="https://drive.google.com/uc?id=1AInKu5xtj12dR40_0OpzBaGZbMCHnPG4" 
            alt="TB Soccer Logo" 
            className="h-12 w-auto brightness-0 invert" 
          />
          <div className="text-[10px] text-neutral-500 font-bold tracking-widest uppercase">
            © 2024 TB SOCCER TRAINING — NEW YORK. ALL RIGHTS RESERVED.
          </div>
        </div>
        <div className="flex gap-12 text-[11px] uppercase tracking-widest font-bold">
          <a href="#" className="hover:opacity-50 transition-opacity">Instagram</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Youtube</a>
        </div>
      </footer>
    </div>
  );
}
