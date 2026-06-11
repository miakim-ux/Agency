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
            className="fixed inset-0 bg-[#070a10]/92 backdrop-blur-md"
          />

          {/* Modal box */}
          <div className="flex min-h-screen items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-[#121824]/95 border border-white/10 shadow-2xl glass-panel text-white"
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-emerald-400 via-teal-500 to-indigo-600" />

              <button
                id="close-partner-modal-btn"
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 border border-white/10 text-[#c4c5d7] hover:text-white hover:bg-white/10 transition z-10 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Benefits Side */}
                <div className="md:col-span-5 bg-[#0e131e]/90 p-6 md:p-8 border-r border-white/6 space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#b7c4ff] font-bold font-display">Elite Program</span>
                    <h3 className="text-xl font-bold font-display text-white mt-1">Strategic Aligned Benefits</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="p-2 bg-emerald-500/15 rounded-lg text-emerald-400 shrink-0">
                        <Shield className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-white">Co-Engineering</h4>
                        <p className="text-[11px] text-[#c4c5d7] mt-0.5 leading-normal">Collaborative R&D with our UI core architects.</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="p-2 bg-indigo-500/15 rounded-lg text-indigo-400 shrink-0">
                        <Globe className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-white">Shared Lead Pipeline</h4>
                        <p className="text-[11px] text-[#c4c5d7] mt-0.5 leading-normal">Direct referrals on multi-layered ecosystem contracts.</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="p-2 bg-purple-500/15 rounded-lg text-purple-400 shrink-0">
                        <Award className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-white">Global Certification</h4>
                        <p className="text-[11px] text-[#c4c5d7] mt-0.5 leading-normal">Become a NEON_LABS Verified Integrator.</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5 text-[10px] text-gray-500">
                    Trusted by ACME, Globex, Soylent & Initech.
                  </div>
                </div>

                {/* Form Side */}
                <div className="md:col-span-7 p-6 md:p-8">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <h3 className="text-lg font-bold font-display text-white">Partner Application</h3>
                        <p className="text-xs text-[#c4c5d7] mt-1">Submit your parameters to connect our strategic pipelines.</p>
                      </div>

                      <div className="space-y-3.5 pt-2">
                        <div>
                          <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">Company Primary Name</label>
                          <input
                            id="partner-company-input"
                            type="text"
                            required
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="SysCore Solutions"
                            className="w-full bg-[#0c1017]/80 rounded-lg border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#b7c4ff]"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">Representative Name</label>
                            <input
                              id="partner-rep-input"
                              type="text"
                              required
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Elena Vance"
                              className="w-full bg-[#0c1017]/80 rounded-lg border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#b7c4ff]"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">Company Website</label>
                            <input
                              id="partner-website-input"
                              type="url"
                              required
                              value={website}
                              onChange={(e) => setWebsite(e.target.value)}
                              placeholder="https://syscore.io"
                              className="w-full bg-[#0c1017]/80 rounded-lg border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#b7c4ff]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">Cooperation Alignment Model</label>
                          <select
                            id="partner-model-select"
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                            className="w-full bg-[#0c1017]/80 rounded-lg border border-white/10 px-3 py-2 text-xs text-[#dee2f2] focus:outline-none focus:border-[#b7c4ff]"
                          >
                            <option value="Technology Integration">Technology Integration (SaaS/SDK)</option>
                            <option value="Agency Subcontracting">Agency Subcontracting (Development/Design)</option>
                            <option value="Branding Collaboration">Branding & Creative Studio Alliance</option>
                            <option value="Other">Custom Ecosystem Venture Model</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">Scope details / Message</label>
                          <textarea
                            id="partner-message-input"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Describe how you envision our shared integration synergy..."
                            className="w-full bg-[#0c1017]/80 rounded-lg border border-white/10 p-3 text-xs text-white focus:outline-none focus:border-[#b7c4ff] h-20 resize-none font-sans"
                          />
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/5 flex justify-end">
                        <button
                          id="partner-submit-btn"
                          type="submit"
                          className="px-5 py-2 hover:opacity-90 bg-emerald-500 text-white font-semibold text-xs rounded-full flex items-center gap-1.5 duration-200 cursor-pointer shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20"
                        >
                          <span>Apply for Program</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8 space-y-4"
                    >
                      <div className="h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold font-display text-white">Application Received</h3>
                        <p className="text-xs text-[#c4c5d7] mt-1">
                          Thank you for aligning with us, {name}. Our Network Operations Director will reach out to {company} within 48 hours.
                        </p>
                      </div>

                      {/* Summary recap */}
                      <div className="bg-[#0b0e14]/90 p-3.5 rounded-lg border border-white/5 text-left text-xs max-w-sm mx-auto space-y-1">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Target</span>
                          <span className="text-white font-semibold">{company}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Alignment</span>
                          <span className="text-white font-semibold">{model}</span>
                        </div>
                      </div>

                      <div className="pt-4">
                        <button
                          id="partner-reset-btn"
                          onClick={handleReset}
                          className="text-[#c4c5d7] hover:text-white hover:underline text-xs"
                        >
                          Submit another inquiry
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
