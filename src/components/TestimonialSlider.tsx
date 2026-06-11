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
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-14 max-w-4xl mx-auto px-4">
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
                  className={`text-[17px] md:text-2xl font-semibold font-display tracking-tight transition duration-200 ${
                    isActive 
                      ? 'text-apple-blue font-bold' 
                      : 'text-apple-ink-muted/50 group-hover:text-apple-ink'
                  }`}
                >
                  {partner.logo}
                </div>
                {/* Active indicator dot */}
                <span 
                  className={`h-1 rounded-full bg-apple-blue transition-all duration-300 ${
                    isActive ? 'scale-100 opacity-100 w-4' : 'scale-0 opacity-0 w-0'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Testimonial card citation box */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative bg-apple-pearl rounded-[18px] border border-apple-hairline p-8 md:p-12 text-center flex flex-col items-center shadow-sm">
          {/* Large Quote graphic mark */}
          <span className="text-7xl font-display font-black text-apple-blue/10 leading-none h-10 select-none">
            “
          </span>

          <div className="min-h-[140px] flex items-center justify-center relative w-full z-2">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeTestimonial.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="text-lg md:text-xl font-normal text-apple-ink italic leading-relaxed max-w-3xl"
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
              transition={{ duration: 0.25 }}
              className="mt-8 flex flex-col items-center gap-3 z-2"
            >
              <img
                src={activeTestimonial.avatar}
                alt={activeTestimonial.author}
                referrerPolicy="no-referrer"
                className="h-11 w-11 rounded-full object-cover border border-apple-hairline"
              />
              <div className="text-center">
                <h5 className="text-sm font-bold font-display text-apple-ink">
                  {activeTestimonial.author}
                </h5>
                <p className="text-xs text-apple-ink-muted font-sans mt-0.5">
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
