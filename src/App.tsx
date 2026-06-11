import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Monitor, 
  Layers, 
  Code, 
  ArrowUpRight, 
  ArrowRight, 
  Mail, 
  Copy, 
  Check, 
  CheckCircle,
  Sparkles,
  TrendingUp,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

import { SERVICES, PROJECTS, PARTNERS } from './data';
import { Project, Service } from './types';

// Modular UI components
import ProjectDetailModal from './components/ProjectDetailModal';
import ProjectPlannerWizard from './components/ProjectPlannerWizard';
import PartnerProgramModal from './components/PartnerProgramModal';
import TestimonialSlider from './components/TestimonialSlider';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  
  // Showcase project list filtering
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'E-Commerce', 'Branding & UI', 'Web 3.0'];

  // Clipboard copy feedback state
  const [copiedEmail, setCopiedEmail] = useState(false);

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.tag === activeFilter);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@neonlabs.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const handleScrollToPlanner = () => {
    const element = document.getElementById('project-estimate-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0e131e] text-[#dee2f2] relative overflow-hidden font-sans selection:bg-[#b7c4ff]/30 selection:text-white">
      
      {/* Background glow meshes */}
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-indigo-900/10 glow-blur" />
      <div className="absolute top-[30%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-900/8 glow-blur" />
      <div className="absolute bottom-[10%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-cyan-900/10 glow-blur" />

      {/* --- HEADER NAVIGATION --- */}
      <header className="sticky top-0 z-50 bg-[#0e131e]/75 backdrop-blur-md border-b border-white/6 px-4 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-xl font-black tracking-[0.14em] font-display text-white group-hover:text-[#b7c4ff] transition duration-200">
              NEON_LABS
            </span>
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-[#8e90a0]">
            <a href="#selected-works" className="hover:text-white transition duration-200">Work</a>
            <a href="#our-expertise" className="hover:text-white transition duration-200">Services</a>
            <a href="#strategic-partnerships" className="hover:text-white transition duration-200">Studio</a>
            <a href="#testimonials" className="hover:text-white transition duration-200">Insights</a>
          </nav>

          {/* CTA */}
          <button
            id="start-project-header-btn"
            onClick={handleScrollToPlanner}
            className="px-5 py-2.5 text-xs font-bold font-display uppercase tracking-wider rounded-lg border border-[#b7c4ff]/35 bg-[#b7c4ff]/6 hover:bg-[#b7c4ff]/15 text-[#b7c4ff] hover:text-white transition duration-300 shadow-[0_0_15px_-4px_rgba(183,196,255,0.2)] hover:shadow-[#b7c4ff]/15 cursor-pointer"
          >
            Start Project
          </button>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-16 md:pt-28 pb-20 px-4 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-2">
          {/* Status Capsule */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#b7c4ff]/8 border border-[#b7c4ff]/20 text-xs font-medium text-[#b7c4ff] backdrop-blur-sm shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#b7c4ff] animate-pulse" />
            <span className="font-display font-semibold uppercase tracking-wider text-[10px]">Pioneering Creative Digital Systems</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black font-display text-white leading-[1.1] tracking-tight"
          >
            Digital Experiences <br />
            That <span className="bg-gradient-to-r from-cyan-400 via-[#b7c4ff] to-purple-400 bg-clip-text text-transparent">Define Future</span>
          </motion.h1>

          {/* Subheading text (Matching korean exactly) */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-[#c4c5d7] leading-relaxed max-w-2xl mx-auto font-sans"
          >
            혁신적인 웹 개발과 브랜딩으로 귀하의 비즈니스를 다음 단계로 끌어올립니다. 우리는 단순한 웹사이트가 아닌, 디지털 자산을 구축합니다.
          </motion.p>

          {/* CTA Action buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              id="hero-planner-scroll-btn"
              onClick={handleScrollToPlanner}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#b7c4ff] to-indigo-300 text-[#002683] hover:text-white font-bold text-sm tracking-wide rounded-full hover:shadow-[0_0_25px_-5px_rgba(183,196,255,0.4)] transition-all duration-300 cursor-pointer hover:scale-102"
            >
              <span>Start a Project</span>
              <ArrowRight className="h-4.5 w-4.5" />
            </button>
            <a 
              href="#selected-works" 
              className="px-6 py-3.5 font-bold text-sm tracking-wide text-[#8e90a0] hover:text-white transition duration-200"
            >
              Explore Works &darr;
            </a>
          </motion.div>
        </div>

        {/* Big subtle wireframe graphic background */}
        <div className="absolute left-1/2 bottom-[-60px] -translate-x-1/2 w-full max-w-5xl h-[300px] bg-[radial-gradient(ellipse_200%_100%_at_bottom,#1a2235,transparent)] opacity-40 rounded-full blur-2xl -z-1" />
      </section>

      {/* --- EXPERTISE SECTION --- */}
      <section id="our-expertise" className="py-24 px-4 md:px-12 border-t border-white/4 relative bg-[#0c1017]/40">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-black font-display text-white tracking-tight">
              Our Expertise
            </h2>
            <p className="text-xs text-[#b7c4ff] uppercase tracking-widest font-bold font-display">
              경계를 허무는 기술과 디자인의 결합
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((srv) => {
              const matchesSelected = selectedService?.id === srv.id;
              return (
                <div 
                  id={`expertise-card-${srv.id}`}
                  key={srv.id}
                  onClick={() => setSelectedService(matchesSelected ? null : srv)}
                  className={`p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between min-h-[220px] transition-all duration-300 cursor-pointer select-none group relative overflow-hidden ${
                    matchesSelected ? 'bg-indigo-950/20 border-indigo-500/30' : ''
                  }`}
                >
                  <div>
                    {/* Glowing background highlights */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/2 rounded-full blur-xl group-hover:bg-indigo-500/8 transition" />
                    
                    {/* Icon wrapper */}
                    <div className="p-2 w-max rounded-lg bg-white/5 border border-white/6 text-[#b7c4ff] group-hover:bg-[#b7c4ff]/10 group-hover:scale-110 duration-300">
                      {srv.icon === 'Monitor' && <Monitor className="h-5 w-5" />}
                      {srv.icon === 'Layers' && <Layers className="h-5 w-5" />}
                      {srv.icon === 'Code' && <Code className="h-5 w-5" />}
                    </div>

                    <h3 className="text-lg font-bold font-display text-white mt-5 group-hover:text-[#b7c4ff] transition">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-[#c4c5d7]/85 mt-2.5 leading-relaxed font-sans font-light">
                      {srv.description}
                    </p>
                  </div>

                  {/* Interactive detail toggle text */}
                  <div className="pt-6 border-t border-white/4 mt-6 flex items-center justify-between">
                    <span className="text-[11px] text-[#8e90a0] font-mono uppercase tracking-wider">
                      {matchesSelected ? 'Hide Parameters' : 'Explore systems & stack'}
                    </span>
                    <ArrowRight className={`h-4 w-4 text-[#8e90a0] group-hover:translate-x-1 duration-200 ${matchesSelected ? 'rotate-90 text-indigo-400' : ''}`} />
                  </div>

                  {/* Accordion detail pane */}
                  <AnimatePresence>
                    {matchesSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden pt-4 mt-2 border-t border-indigo-500/10"
                      >
                        <div className="space-y-4">
                          <div>
                            <span className="text-[10px] text-indigo-300 font-bold uppercase tracking-wider block mb-1.5">Capabilities</span>
                            <ul className="space-y-1.5 list-none">
                              {srv.details.map((detail, idx) => (
                                <li key={idx} className="text-xs text-[#c4c5d7]/90 flex items-start gap-1.5 font-sans leading-normal">
                                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 shrink-0 mt-1.5" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <span className="text-[10px] text-indigo-300 font-bold uppercase tracking-wider block mb-1.5">Framework stack</span>
                            <div className="flex flex-wrap gap-1">
                              {srv.techStack.map((tech) => (
                                <span key={tech} className="px-2 py-0.5 bg-white/4 border border-white/6 rounded-sm text-[10px] font-mono text-white">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- SELECTED WORKS SECTION --- */}
      <section id="selected-works" className="py-24 px-4 md:px-12 border-t border-white/4">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Header Block with in-line filter switcher */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-white/5 pb-6">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-black font-display text-white tracking-tight">
                Selected Works
              </h2>
              <p className="text-xs text-[#8e90a0] uppercase tracking-widest font-bold tracking-[0.15em]">
                최근 프로젝트 쇼케이스
              </p>
            </div>

            {/* Filter buttons inline with head */}
            <div className="flex flex-wrap items-center gap-1.5">
              {filters.map((filter) => {
                const isActive = activeFilter === filter;
                return (
                  <button
                    id={`filter-btn-${filter.replace(/\s+/g, '-').toLowerCase()}`}
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? 'bg-[#b7c4ff] text-[#002683] shadow-md shadow-[#b7c4ff]/10' 
                        : 'bg-white/4 hover:bg-white/8 text-[#c4c5d7]'
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid Layout of Featured Projects (Mirroring the layout of screenshot) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {/* NexGen Retail Platform (Large card on Left - taking 7 span columns) */}
            <motion.div 
              layoutId="project-card-nexgen-retail"
              onClick={() => setSelectedProject(PROJECTS[0])}
              className="md:col-span-7 rounded-2xl overflow-hidden glass-panel border border-white/8 group relative min-h-[460px] flex flex-col justify-end p-6 md:p-8 cursor-pointer shadow-lg hover:shadow-cyan-400/5 duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e131e]/95 via-[#0e131e]/25 to-transparent z-1" />
              <img
                src={PROJECTS[0].imageUrl}
                alt={PROJECTS[0].title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-103 duration-500 ease-out transition z-0 opacity-75"
              />

              {/* Float specs container */}
              <div className="relative z-2 space-y-3 max-w-xl">
                <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold bg-[#b7c4ff]/10 text-[#b7c4ff] border border-[#b7c4ff]/20 backdrop-blur-md">
                  {PROJECTS[0].category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold font-display text-white tracking-tight group-hover:text-cyan-300 duration-200">
                  {PROJECTS[0].title}
                </h3>
              </div>
            </motion.div>

            {/* Right stack (taking 5 span columns) */}
            <div className="md:col-span-5 flex flex-col gap-6">
              {/* Aura FinTech App (Top right card) */}
              <motion.div
                layoutId="project-card-aura-fintech"
                onClick={() => setSelectedProject(PROJECTS[1])}
                className="rounded-2xl overflow-hidden glass-panel border border-white/8 group relative h-[217px] flex flex-col justify-end p-6 cursor-pointer hover:shadow-indigo-500/5 duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e131e]/90 via-[#0e131e]/15 to-transparent z-1" />
                <img
                  src={PROJECTS[1].imageUrl}
                  alt={PROJECTS[1].title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-103 duration-500 ease-out transition z-0 opacity-75"
                />

                <div className="relative z-2 space-y-2">
                  <span className="inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold bg-[#b7c4ff]/10 text-[#b7c4ff] border border-[#b7c4ff]/20 backdrop-blur-sm">
                    {PROJECTS[1].category}
                  </span>
                  <h3 className="text-xl font-bold font-display text-white tracking-tight group-hover:text-indigo-300 duration-200">
                    {PROJECTS[1].title}
                  </h3>
                </div>
              </motion.div>

              {/* Vortex Protocol and View All grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch flex-1">
                {/* Vortex Protocol Card */}
                <motion.div
                  layoutId="project-card-vortex-protocol"
                  onClick={() => setSelectedProject(PROJECTS[2])}
                  className="rounded-2xl overflow-hidden glass-panel border border-white/8 group relative min-h-[217px] flex flex-col justify-end p-5 cursor-pointer hover:shadow-emerald-500/5 duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e131e]/95 via-[#0e131e]/30 to-transparent z-1" />
                  <img
                    src={PROJECTS[2].imageUrl}
                    alt={PROJECTS[2].title}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-103 duration-500 ease-out transition z-0 opacity-70"
                  />

                  <div className="relative z-2 space-y-2">
                    <span className="inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold bg-[#b7c4ff]/10 text-[#b7c4ff] border border-[#b7c4ff]/20 backdrop-blur-sm">
                      {PROJECTS[2].category}
                    </span>
                    <h3 className="text-base font-bold font-display text-white tracking-tight group-hover:text-teal-300 duration-200">
                      {PROJECTS[2].title}
                    </h3>
                  </div>
                </motion.div>

                {/* View All Projects Card (Reflecting the grey blank grid box with arrow circle) */}
                <div 
                  id="view-all-projects-grid-btn"
                  onClick={handleScrollToPlanner}
                  className="rounded-2xl bg-white/4 border border-white/6 group flex flex-col items-center justify-center p-5 text-center cursor-pointer hover:bg-white/6 hover:border-white/12 transition duration-300 relative min-h-[217px]"
                >
                  <div className="h-11 w-11 rounded-full border border-white/12 flex items-center justify-center text-[#c4c5d7] group-hover:bg-[#b7c4ff] group-hover:text-[#002683] group-hover:border-[#b7c4ff] transition duration-300 mb-3 ml-2">
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-0.5 transition" />
                  </div>
                  <h4 className="text-xs font-bold font-display text-[#c4c5d7] group-hover:text-white uppercase tracking-widest leading-none">
                    View All Projects
                  </h4>
                  <p className="text-[10px] text-gray-500 mt-1 pb-1">Or plan custom setup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STRATEGIC PARTNERSHIPS SECTION --- */}
      <section id="strategic-partnerships" className="py-24 px-4 md:px-12 bg-[#0c1017]/50 border-t border-white/4 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <span className="text-[10px] tracking-[0.2em] font-bold font-display uppercase text-[#b7c4ff]">OUR NETWORK</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white tracking-tight">
              Strategic Partnerships
            </h2>
            <p className="text-xs text-[#c4c5d7] max-w-xl mx-auto font-sans">
              We collaborate with global technology leaders to deliver cutting-edge digital solutions.
            </p>
          </div>

          {/* Grids with logo boxes matching mockup */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {PARTNERS.map((pt) => {
              return (
                <div 
                  id={`partner-card-${pt.id}`}
                  key={pt.id}
                  className="p-8 rounded-2xl glass-panel text-center flex flex-col justify-center items-center group cursor-help transition transform hover:scale-102 hover:border-[#b7c4ff]/20 duration-300 relative overflow-hidden"
                >
                  {/* Backdrop subtle overlay detail */}
                  <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500/0 group-hover:bg-indigo-500/20 transition duration-300" />
                  
                  <span className="text-2xl font-black tracking-tight text-[#8e90a0] group-hover:text-white transition duration-300 block">
                    {pt.logo}
                  </span>
                  
                  {/* Hover parameters overlay bubble / details */}
                  <div className="mt-3.5 space-y-1 block max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-300 ease-out overflow-hidden border-t border-white/5 pt-0 group-hover:pt-3">
                    <p className="text-[10px] text-[#b7c4ff] font-bold uppercase">{pt.industry}</p>
                    <p className="text-[10px] text-gray-400 font-sans leading-relaxed">{pt.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              id="become-partner-btn"
              onClick={() => setIsPartnerModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-[#c4c5d7] hover:text-white bg-white/3 hover:bg-white/6 rounded-full cursor-pointer text-xs font-semibold tracking-wider uppercase transition duration-200"
            >
              <span>Become a Partner &bull;</span>
              <span className="text-indigo-300 lowercase text-[11px]">inquire program</span>
            </button>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section id="testimonials" className="py-24 px-4 md:px-12 border-t border-white/4">
        <TestimonialSlider />
      </section>

      {/* --- CALL TO ACTION (INTERACTIVE BLUEPRINT FORM) --- */}
      <section id="project-estimate-section" className="py-24 px-4 md:px-12 bg-gradient-to-b from-transparent to-[#0a0d15] border-t border-white/4 font-sans border-b border-white/4 relative z-2">
        <div className="max-w-7xl mx-auto space-y-14">
          
          <div className="text-center space-y-3.5 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
              Let's Build <br className="sm:hidden" />
              <span className="bg-gradient-to-r from-orange-300 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Something Great</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#c4c5d7] leading-relaxed">
              새로운 프로젝트를 구상 중이신가요? 저희 팀이 귀하의 아이디어를 현실로 만들어 드릴 준비가 되어 있습니다.
            </p>
          </div>

          <ProjectPlannerWizard onInquirySubmitted={() => {}} />

          {/* Core Support Email copy utility banner */}
          <div className="pt-8 border-t border-white/5 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl glass-panel bg-[#121824]/20 text-center sm:text-left z-2">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#b7c4ff]/8 text-[#b7c4ff]">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold font-display">Direct Communications</p>
                <code className="text-sm font-semibold text-white font-mono">hello@neonlabs.com</code>
              </div>
            </div>

            <button
              id="copy-email-bottom-btn"
              onClick={handleCopyEmail}
              className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold cursor-pointer duration-200 ${
                copiedEmail 
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                  : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
              }`}
            >
              {copiedEmail ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              <span>{copiedEmail ? 'Copied Securely' : 'Copy Address'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-16 md:py-20 px-4 md:px-12 bg-[#070a10] text-[#c4c5d7] relative z-2 text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-start border-b border-white/5 pb-10">
          
          <div className="md:col-span-6 space-y-4">
            <span className="text-xl font-black tracking-[0.14em] font-display text-white">
              NEON_LABS
            </span>
            <p className="text-xs text-gray-500 max-w-sm font-sans">
              Crafting digital futures. High-end user journeys, bespoke interactive modules, custom design systems, and fast scalable codebases built with elite precision.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-wrap gap-x-12 gap-y-6 md:justify-end text-[#8e90a0] font-semibold text-xs tracking-wide">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Careers</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-600 text-[10.5px]">
          <span>© 2024 NEON_LABS Creative. All rights reserved.</span>
          <div className="flex items-center gap-1">
            <div className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span>Cyber-Premium Node Online (UTC-0)</span>
          </div>
        </div>
      </footer>

      {/* --- MODALS CONTROLLER SECTION --- */}
      <ProjectDetailModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <PartnerProgramModal 
        isOpen={isPartnerModalOpen} 
        onClose={() => setIsPartnerModalOpen(false)} 
      />
    </div>
  );
}
