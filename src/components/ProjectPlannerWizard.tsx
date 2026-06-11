import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Monitor, Code, ChevronRight, ChevronLeft, Send, Check, Calculator, Clock, Trash2 } from 'lucide-react';
import { Inquiry } from '../types';

interface ProjectPlannerWizardProps {
  onInquirySubmitted: () => void;
}

export default function ProjectPlannerWizard({ onInquirySubmitted }: ProjectPlannerWizardProps) {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [techStack, setTechStack] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [submittedInquiry, setSubmittedInquiry] = useState<Inquiry | null>(null);
  const [savedInquiries, setSavedInquiries] = useState<Inquiry[]>([]);

  useEffect(() => {
    // Load existing history
    const stored = localStorage.getItem('neon_labs_inquiries');
    if (stored) {
      try {
        setSavedInquiries(JSON.parse(stored));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleServiceToggle = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter(s => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleTechToggle = (tech: string) => {
    if (techStack.includes(tech)) {
      setTechStack(techStack.filter(t => t !== tech));
    } else {
      setTechStack([...techStack, tech]);
    }
  };

  const validateStep = () => {
    if (step === 1) return selectedServices.length > 0;
    if (step === 2) return budget !== '';
    if (step === 3) return description.trim().length > 10;
    if (step === 4) return name.trim().length > 1 && email.includes('@');
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;

    const newInquiry: Inquiry = {
      id: 'NL-' + Math.floor(100000 + Math.random() * 900000),
      services: selectedServices,
      budget,
      description: `${description} | Tech preference: ${techStack.join(', ') || 'None'} | Company: ${company || 'N/A'}`,
      name,
      email,
      date: new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' }),
      status: 'Received'
    };

    const updated = [newInquiry, ...savedInquiries];
    setSavedInquiries(updated);
    localStorage.setItem('neon_labs_inquiries', JSON.stringify(updated));
    setSubmittedInquiry(newInquiry);
    onInquirySubmitted();
    setStep(5);
  };

  const resetForm = () => {
    setSelectedServices([]);
    setBudget('');
    setDescription('');
    setTechStack([]);
    setName('');
    setEmail('');
    setCompany('');
    setSubmittedInquiry(null);
    setStep(1);
  };

  const deleteInquiry = (id: string) => {
    const updated = savedInquiries.filter(i => i.id !== id);
    setSavedInquiries(updated);
    localStorage.setItem('neon_labs_inquiries', JSON.stringify(updated));
  };

  const SERVICES_LIST = [
    { id: 'Web Design', desc: 'Aesthetic responsive branding & layout patterns', icon: Monitor },
    { id: 'UI/UX Design', desc: 'Intuitive micro-interactions, journeys & flow systems', icon: Layers },
    { id: 'Custom Dev', desc: 'Secure APIs, high-throughput cloud run & multi-tier system', icon: Code }
  ];

  const BUDGETS_LIST = [
    { value: '$5,000 - $15,000', range: 'Bronze Range', desc: 'Best for standard landings, high-fidelity prototypes or visual concept apps.' },
    { value: '$15,000 - $40,000', range: 'Silver Portfolio', desc: 'Suited for comprehensive e-commerce systems, high scalability backends.' },
    { value: '$40,000 - $100,000+', range: 'Obsidian Suite', desc: 'Highly custom real-time environments, customized enterprise automations, or Web3 protocol.' }
  ];

  const TECHS_LIST = [
    'React', 'Vite', 'TypeScript', 'Node.js', 'Go', 'Python / AI Frameworks', 'Three.js / WebGL', 'Figma system'
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Real-time Project Estimator Wizard Card */}
      <div className="lg:col-span-8 bg-[#121824]/60 rounded-2xl border border-white/6 glass-panel overflow-hidden">
        {/* Wizard Header bar */}
        <div className="bg-[#121824]/90 px-6 py-4 border-b border-white/6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calculator className="h-4.5 w-4.5 text-[#b7c4ff]" />
            <span className="text-xs uppercase tracking-widest text-white font-semibold font-display">Project Architecture Planner</span>
          </div>
          <span className="text-xs font-mono text-[#8e90a0]">Step {step}/5</span>
        </div>

        {/* Wizard Progress bar */}
        <div className="h-0.5 bg-white/4 w-full relative">
          <motion.div 
            initial={{ width: '0%' }}
            animate={{ width: `${(step / 5) * 100}%` }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500"
          />
        </div>

        {/* Action Window */}
        <div className="p-6 md:p-8 min-h-[360px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-5"
              >
                <div>
                  <h3 className="text-lg font-bold font-display text-white">1. Select Target Digital Capabilities</h3>
                  <p className="text-xs text-[#c4c5d7] mt-1">Select one or more services you want us to coordinate for your production app.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {SERVICES_LIST.map((srv) => {
                    const IconComp = srv.icon;
                    const selected = selectedServices.includes(srv.id);
                    return (
                      <button
                        id={`srv-btn-${srv.id.replace(/\s+/g, '-').toLowerCase()}`}
                        type="button"
                        key={srv.id}
                        onClick={() => handleServiceToggle(srv.id)}
                        className={`text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                          selected 
                            ? 'bg-[#b7c4ff]/8 border-[#b7c4ff] shadow-[0_0_15px_-3px_rgba(183,196,255,0.15)]' 
                            : 'bg-white/3 border-white/6 hover:bg-white/5 hover:border-white/10'
                        }`}
                      >
                        <div className={`p-2 rounded-lg inline-block mb-3 ${selected ? 'bg-[#b7c4ff]/15 text-[#b7c4ff]' : 'bg-white/5 text-[#8e90a0]'}`}>
                          <IconComp className="h-4.5 w-4.5" />
                        </div>
                        <h4 className="text-sm font-semibold text-white font-display mb-1">{srv.id}</h4>
                        <p className="text-[11px] text-[#c4c5d7] font-sans leading-normal">{srv.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-5"
              >
                <div>
                  <h3 className="text-lg font-bold font-display text-white">2. Establish Budget Alignment</h3>
                  <p className="text-xs text-[#c4c5d7] mt-1">Provide an approximate scope budget to help us recommend the best tech strategies.</p>
                </div>
                <div className="space-y-3">
                  {BUDGETS_LIST.map((bg) => {
                    const active = budget === bg.value;
                    return (
                      <button
                        id={`budget-btn-${bg.range.replace(/\s+/g, '-').toLowerCase()}`}
                        type="button"
                        key={bg.value}
                        onClick={() => setBudget(bg.value)}
                        className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                          active 
                            ? 'bg-[#b7c4ff]/8 border-[#b7c4ff] shadow-md' 
                            : 'bg-white/3 border-white/6 hover:bg-white/5 hover:border-white/10'
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-white font-display">{bg.value}</span>
                            <span className="text-[10px] px-2 py-0.5 bg-white/5 border border-white/8 text-indigo-300 font-mono rounded-full uppercase">{bg.range}</span>
                          </div>
                          <p className="text-xs text-[#c4c5d7] font-sans">{bg.desc}</p>
                        </div>
                        <div className={`h-5 w-5 rounded-full border flex items-center justify-center ${active ? 'border-[#b7c4ff] bg-[#b7c4ff]/10 text-[#b7c4ff]' : 'border-white/20'}`}>
                          {active && <Check className="h-3 w-3" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-5"
              >
                <div>
                  <h3 className="text-lg font-bold font-display text-white">3. System Goals & Tech Preferences</h3>
                  <p className="text-xs text-[#c4c5d7] mt-1">Briefly outline what you are building and optionally tag preferred core framework assets.</p>
                </div>
                <div className="space-y-4">
                  <textarea
                    id="system-description-input"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="We want to create a high-performance cross-chain dashboard with complex charts and interactive custom 3D elements..."
                    className="w-full bg-[#0c1017]/80 rounded-xl border border-white/10 p-4 text-sm font-sans text-white focus:outline-none focus:border-[#b7c4ff] focus:ring-1 focus:ring-[#b7c4ff]/20 placeholder-gray-500 h-28 resize-none"
                  />
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-[#b7c4ff]">Preferred System Stack Integration (Optional)</span>
                    <div className="flex flex-wrap gap-1.5">
                      {TECHS_LIST.map((tech) => {
                        const active = techStack.includes(tech);
                        return (
                          <button
                            id={`tech-tag-${tech.replace(/\s+/g, '-').replace('/', '').toLowerCase()}`}
                            type="button"
                            key={tech}
                            onClick={() => handleTechToggle(tech)}
                            className={`px-3 py-1.5 rounded-sm text-xs font-mono border transition-all duration-200 cursor-pointer ${
                              active 
                                ? 'bg-[#b7c4ff]/15 border-[#b7c4ff] text-white' 
                                : 'bg-white/3 border-white/6 text-[#c4c5d7] hover:bg-white/5'
                            }`}
                          >
                            {tech}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-5"
              >
                <div>
                  <h3 className="text-lg font-bold font-display text-white">4. Secure Client Contact</h3>
                  <p className="text-xs text-[#c4c5d7] mt-1">Our engineering office will compile initial suggestions and reach out.</p>
                </div>
                <div className="space-y-3.5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-1">Full Name</label>
                      <input
                        id="client-name-input"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Alex Mercer"
                        className="w-full bg-[#0c1017]/80 rounded-lg border border-white/15 px-3.5 py-2.5 text-sm font-sans text-white focus:outline-none focus:border-[#b7c4ff]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-1">Company / Organization</label>
                      <input
                        id="client-company-input"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="TechNova (Optional)"
                        className="w-full bg-[#0c1017]/80 rounded-lg border border-white/15 px-3.5 py-2.5 text-sm font-sans text-white focus:outline-none focus:border-[#b7c4ff]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-1">Business Email Address</label>
                    <input
                      id="client-email-input"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@technova.com"
                      className="w-full bg-[#0c1017]/80 rounded-lg border border-white/15 px-3.5 py-2.5 text-sm font-sans text-white focus:outline-none focus:border-[#b7c4ff]"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 5 && submittedInquiry && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 space-y-4"
              >
                <div className="h-14 w-14 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 mx-auto flex items-center justify-center text-white shadow-xl shadow-cyan-400/10">
                  <Check className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-white">Project Blueprint Submitted!</h3>
                  <p className="text-xs text-[#c4c5d7] mt-1.5 max-w-md mx-auto">
                    Thank you, {submittedInquiry.name}. We have logged your request. Our executive engineering desk is assembling recommendations.
                  </p>
                </div>

                {/* Voucher summary details */}
                <div className="bg-[#0b0e14]/90 p-4 rounded-xl border border-white/5 max-w-md mx-auto text-left space-y-2">
                  <div className="flex justify-between text-xs border-b border-white/5 pb-2">
                    <span className="text-[#8e90a0]">Ticket ID</span>
                    <code className="text-[#b7c4ff] font-mono">{submittedInquiry.id}</code>
                  </div>
                  <div className="flex justify-between text-xs border-b border-white/5 pb-2">
                    <span className="text-[#8e90a0]">Selected Goal(s)</span>
                    <span className="font-semibold text-white">{submittedInquiry.services.join(', ')}</span>
                  </div>
                  <div className="flex justify-between text-xs border-b border-white/5 pb-2">
                    <span className="text-[#8e90a0]">Aligned Budget</span>
                    <span className="font-mono text-white text-xs">{submittedInquiry.budget}</span>
                  </div>
                  <div className="flex justify-between text-xs pt-1">
                    <span className="text-[#8e90a0]">Log Date</span>
                    <span className="text-xs text-[#c4c5d7]">{submittedInquiry.date}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    id="reset-form-btn"
                    onClick={resetForm}
                    className="px-5 py-2 text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-[#c4c5d7] hover:text-white rounded-full cursor-pointer transition"
                  >
                    Draft another blueprint
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Stepper Controls */}
          {step < 5 && (
            <div className="flex items-center justify-between border-t border-white/6 pt-6 mt-8">
              <button
                id="wizard-back-btn"
                type="button"
                onClick={() => setStep(s => Math.max(1, s - 1))}
                disabled={step === 1}
                className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full cursor-pointer transition ${
                  step === 1 
                    ? 'text-[#8e90a0] opacity-40 cursor-not-allowed' 
                    : 'bg-white/5 hover:bg-white/10 text-white'
                }`}
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Back</span>
              </button>

              {step < 4 ? (
                <button
                  id="wizard-next-btn"
                  type="button"
                  onClick={() => setStep(s => Math.min(4, s + 1))}
                  disabled={!validateStep()}
                  className={`flex items-center gap-1.5 px-5 py-2 text-xs font-semibold rounded-full duration-200 cursor-pointer ${
                    validateStep() 
                      ? 'bg-[#b7c4ff] text-[#002683] hover:bg-[#a2b4ff] active:scale-95 shadow-md shadow-indigo-500/10' 
                      : 'bg-white/5 text-[#8e90a0] cursor-not-allowed'
                  }`}
                >
                  <span>Continue</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  id="wizard-submit-btn"
                  type="submit"
                  onClick={handleSubmit}
                  disabled={!validateStep()}
                  className={`flex items-center gap-1.5 px-5 py-2 text-xs font-semibold rounded-full duration-200 cursor-pointer ${
                    validateStep() 
                      ? 'bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 text-white hover:opacity-90 active:scale-95 shadow-lg shadow-indigo-500/15' 
                      : 'bg-white/5 text-[#8e90a0] cursor-not-allowed'
                  }`}
                >
                  <span>Submit Blueprint</span>
                  <Send className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Cyber Ledger Dashboard Widget (History) */}
      <div className="lg:col-span-4 space-y-4">
        <div className="bg-[#121824]/60 rounded-2xl border border-white/6 p-5 glass-panel">
          <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
            <h4 className="text-xs font-bold font-display uppercase tracking-widest text-[#b7c4ff] flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#b7c4ff]" />
              <span>Cyber Inquiries ({savedInquiries.length})</span>
            </h4>
            {savedInquiries.length > 0 && <span className="text-[10px] px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded-full font-semibold">Active Vault</span>}
          </div>

          <p className="text-[11px] text-[#c4c5d7] leading-relaxed mb-4">
            Blueprints submitted are locally encrypted. You can review and clear them safely here.
          </p>

          <AnimatePresence>
            {savedInquiries.length === 0 ? (
              <div className="py-8 text-center bg-white/3 border border-dashed border-white/6 rounded-xl flex flex-col items-center justify-center p-4">
                <Clock className="h-7 w-7 text-gray-500 mb-2 animate-pulse" />
                <span className="text-xs font-semibold text-[#8e90a0] font-sans">No Submissions Detected</span>
                <span className="text-[10px] text-gray-500 mt-1">Design a plan to view live telemetry</span>
              </div>
            ) : (
              <div className="space-y-3 max-h-[280px] overflow-y-auto pr-1">
                {savedInquiries.map((inq) => (
                  <motion.div
                    key={inq.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-[#0b0e14]/90 p-3 rounded-lg border border-white/6 flex items-start justify-between gap-3 relative overflow-hidden"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <code className="text-[10px] font-mono font-bold text-[#b7c4ff]">{inq.id}</code>
                        <span className="text-[9px] px-1.5 py-0.5 bg-indigo-500/10 text-indigo-300 rounded font-bold uppercase">{inq.status}</span>
                      </div>
                      <p className="text-xs font-semibold text-white">{inq.services.join(' & ')}</p>
                      <p className="text-[10px] text-[#8e90a0]">{inq.date}</p>
                    </div>
                    <button
                      id={`delete-inquiry-btn-${inq.id}`}
                      onClick={() => deleteInquiry(inq.id)}
                      className="text-gray-500 hover:text-red-400 p-1 rounded hover:bg-white/5 duration-150 cursor-pointer"
                      title="Delete inquiry record"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
