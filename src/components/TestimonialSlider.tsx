import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS, PARTNERS } from '../data';

export default function TestimonialSlider() {
  const [partnerIndex, setPartnerIndex] = useState(0);

  const activeTestimonial = TESTIMONIALS[partnerIndex] || TESTIMONIALS[0];

  return (
    <div className="space-y-12">
      {/* Logos navigation row */}
      <div>
        <h4 className="text-[10px] tracking-[0.2em] font-bold font-display uppercase text-[#8e90a0] mb-8 text-center">
          TRUSTED BY INDUSTRY LEADERS
        </h4>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-14 max-w-4xl mx-auto">
          {PARTNERS.map((partner, index) => {
            const isActive = index === partnerIndex;
            return (
              <button
                id={`partner-logo-btn-${partner.id}`}
                key={partner.id}
                onClick={() => setPartnerIndex(index)}
                className={`flex flex-col items-center gap-1.5 transition-all duration-300 cursor-pointer outline-none group`}
              >
                <div 
                  className={`text-lg md:text-2xl font-bold font-display tracking-tight transition duration-200 ${
                    isActive 
                      ? 'text-white' 
                      : 'text-[#8e90a0]/42 group-hover:text-[#dee2f2]'
                  }`}
                >
                  {partner.logo}
                </div>
                {/* Active indicator dot */}
                <span 
                  className={`h-1 w-1 rounded-full bg-[#b7c4ff] transition-all duration-300 ${
                    isActive ? 'scale-100 opacity-100 w-4' : 'scale-0 opacity-0'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Testimonial card citation box */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative bg-[#121824]/30 rounded-2xl border border-white/5 p-8 md:p-12 glass-panel overflow-hidden text-center flex flex-col items-center">
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-[#b7c4ff]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-purple-500/5 rounded-full blur-3xl" />

          {/* Large Quote graphic mark */}
          <span className="text-7xl font-display font-black text-[#b7c4ff]/10 leading-none h-10 select-none">
            “
          </span>

          <div className="min-h-[140px] flex items-center justify-center relative w-full z-2">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeTestimonial.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-lg md:text-xl font-medium text-white italic leading-relaxed max-w-3xl"
              >
                {activeTestimonial.quote}
              </motion.p>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="mt-8 flex flex-col items-center gap-3 z-2"
            >
              <img
                src={activeTestimonial.avatar}
                alt={activeTestimonial.author}
                referrerPolicy="no-referrer"
                className="h-11 w-11 rounded-full object-cover border border-white/10"
              />
              <div className="text-center">
                <h5 className="text-sm font-bold font-display text-white">
                  {activeTestimonial.author}
                </h5>
                <p className="text-xs text-[#8e90a0] font-sans mt-0.5">
                  {activeTestimonial.role}, {PARTNERS[partnerIndex]?.name}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
