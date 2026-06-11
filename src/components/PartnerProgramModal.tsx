import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, Globe, Award, CheckCircle, ArrowRight } from 'lucide-react';

interface PartnerProgramModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PartnerProgramModal({ isOpen, onClose }: PartnerProgramModalProps) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [website, setWebsite] = useState('');
  const [model, setModel] = useState('Technology Integration');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !company || !website) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setCompany('');
    setWebsite('');
    setModel('Technology Integration');
    setMessage('');
    setIsSubmitted(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-55 overflow-y-auto">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#070a10]/60 backdrop-blur-md"
          />

          {/* Modal box */}
          <div className="flex min-h-screen items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative w-full max-w-3xl overflow-hidden rounded-[18px] bg-apple-pearl border border-apple-hairline shadow-2xl text-apple-ink"
            >
              <div className="h-1.5 w-full bg-apple-blue" />

              <button
                id="close-partner-modal-btn"
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-apple-parchment hover:bg-[#1a2333]/50 text-apple-ink-muted hover:text-apple-ink transition z-10 cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Benefits Side */}
                <div className="md:col-span-5 bg-apple-parchment p-6 md:p-8 border-r border-apple-hairline space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-apple-blue font-bold font-display">EPIC CONVENE</span>
                    <h3 className="text-xl font-semibold tracking-tight text-apple-ink mt-1">Strategic Aligned Benefits</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="p-2 bg-apple-blue/10 rounded-lg text-apple-blue shrink-0">
                        <Shield className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-apple-ink">Co-Engineering</h4>
                        <p className="text-[11px] text-apple-ink-muted mt-0.5 leading-relaxed">Collaborative R&D with our studio UI architects.</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="p-2 bg-apple-blue/10 rounded-lg text-apple-blue shrink-0">
                        <Globe className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-apple-ink">Shared Lead Pipeline</h4>
                        <p className="text-[11px] text-apple-ink-muted mt-0.5 leading-relaxed">Direct system referrals on ecosystem contracts.</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="p-2 bg-apple-blue/10 rounded-lg text-apple-blue shrink-0">
                        <Award className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-apple-ink font-display">Global Certification</h4>
                        <p className="text-[11px] text-apple-ink-muted mt-0.5 leading-relaxed font-sans">Become a certified premium design integrator.</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-apple-hairline text-[10px] text-gray-500 font-sans">
                    Trusted by corporate engineering offices worldwide.
                  </div>
                </div>

                {/* Form Side */}
                <div className="md:col-span-7 p-6 md:p-8 bg-apple-pearl">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-apple-ink font-display">Partner Application</h3>
                        <p className="text-xs text-apple-ink-muted mt-1">Submit your organizational coordinates to register strategic pipeline interests.</p>
                      </div>

                      <div className="space-y-3.5 pt-2">
                        <div>
                          <label className="block text-[10px] uppercase tracking-wider text-apple-ink-muted font-bold mb-1">Company Primary Name</label>
                          <input
                            id="partner-company-input"
                            type="text"
                            required
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="SysCore Solutions"
                            className="w-full bg-apple-pearl rounded-lg border border-apple-hairline px-3 py-2 text-xs text-apple-ink focus:outline-none focus:border-apple-blue transition"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[10px] uppercase tracking-wider text-apple-ink-muted font-bold mb-1">Representative Name</label>
                            <input
                              id="partner-rep-input"
                              type="text"
                              required
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Elena Vance"
                              className="w-full bg-apple-pearl rounded-lg border border-apple-hairline px-3 py-2 text-xs text-apple-ink focus:outline-none focus:border-apple-blue transition"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] uppercase tracking-wider text-apple-ink-muted font-bold mb-1">Company Website</label>
                            <input
                              id="partner-website-input"
                              type="url"
                              required
                              value={website}
                              onChange={(e) => setWebsite(e.target.value)}
                              placeholder="https://syscore.io"
                              className="w-full bg-apple-pearl rounded-lg border border-apple-hairline px-3 py-2 text-xs text-apple-ink focus:outline-none focus:border-apple-blue transition"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase tracking-wider text-apple-ink-muted font-bold mb-1">Cooperation Alignment Model</label>
                          <select
                            id="partner-model-select"
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                            className="w-full bg-apple-pearl rounded-lg border border-apple-hairline px-3 py-2 text-xs text-apple-ink focus:outline-none focus:border-apple-blue cursor-pointer"
                          >
                            <option value="Technology Integration">Technology Integration (SaaS/SDK)</option>
                            <option value="Agency Subcontracting">Agency Subcontracting (Development/Design)</option>
                            <option value="Branding Collaboration">Branding & Creative Studio Alliance</option>
                            <option value="Other">Custom Ecosystem Venture Model</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase tracking-wider text-apple-ink-muted font-bold mb-1">Brief Description / Synergy Interest</label>
                          <textarea
                            id="partner-message-input"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Describe how you envision our shared integration synergy..."
                            className="w-full bg-apple-pearl rounded-lg border border-apple-hairline p-3 text-xs text-apple-ink focus:outline-none focus:border-apple-blue h-20 resize-none font-sans transition"
                          />
                        </div>
                      </div>

                      <div className="pt-4 border-t border-apple-hairline flex justify-end">
                        <button
                          id="partner-submit-btn"
                          type="submit"
                          className="px-5 py-2.5 bg-apple-blue hover:bg-apple-blue-focus active:scale-95 text-[#0a0f1d] font-semibold text-xs rounded-full flex items-center gap-1.5 duration-200 cursor-pointer shadow-none"
                        >
                          <span>Apply for Program Alliance</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8 space-y-4 bg-apple-pearl"
                    >
                      <div className="h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight text-apple-ink font-display">Application Received</h3>
                        <p className="text-xs text-apple-ink-muted mt-1 max-w-sm mx-auto">
                          Thank you for aligning with us, {name}. Our Partner Relations Director will reach out to representatives at {company} within 48 hours.
                        </p>
                      </div>

                      {/* Summary recap */}
                      <div className="bg-apple-parchment p-4 rounded-lg border border-apple-hairline text-left text-xs max-w-sm mx-auto space-y-1.5">
                        <div className="flex justify-between">
                          <span className="text-apple-ink-muted">Target Group</span>
                          <span className="text-apple-ink font-semibold">{company}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-apple-ink-muted">Alignment Pattern</span>
                          <span className="text-apple-ink font-semibold">{model}</span>
                        </div>
                      </div>

                      <div className="pt-4">
                        <button
                          id="partner-reset-btn"
                          onClick={handleReset}
                          className="text-apple-blue hover:underline text-xs font-semibold cursor-pointer"
                        >
                          Submit another partnership inquiry
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
