import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Monitor, 
  Layers, 
  Code, 
  ArrowRight, 
  Mail, 
  Copy, 
  Check, 
  CheckCircle,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

import { SERVICES, PROJECTS, PARTNERS } from './data';
import { Project, Service } from './types';

// Modular UI components
import ProjectDetailModal from './components/ProjectDetailModal';
import PartnerProgramModal from './components/PartnerProgramModal';
import TestimonialSlider from './components/TestimonialSlider';

function ProjectVectorShowcase({ projectId }: { projectId: string }) {
  if (projectId === 'nexgen-retail') {
    return (
      <div className="w-full h-full bg-[#0b0f19] relative flex items-center justify-center p-6 select-none overflow-hidden text-white">
        {/* Background mesh grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:20px_20px]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
        
        <svg viewBox="0 0 400 225" className="w-full h-full relative z-10 drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)]" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Volumetric / wireframe container cube represent luxury product configurations */}
          <g transform="translate(200, 112)">
            {/* Holographic outer lines */}
            <path d="M 0,-56 L 64,-24 L 64,32 L 0,64 L -64,32 L -64,-24 Z" stroke="#ffffff" strokeWidth="1" strokeDasharray="3 3" opacity="0.8" />
            <path d="M 0,-56 L 0,64" stroke="#1e293b" strokeWidth="1" />
            <path d="M -64,-24 L 64,32" stroke="#1e293b" strokeWidth="1" />
            <path d="M -64,32 L 64,-24" stroke="#1e293b" strokeWidth="1" />
            
            {/* Interactive orbit spheres */}
            <circle cx="0" cy="4" r="28" stroke="#ffffff" strokeWidth="1.2" />
            <circle cx="-45" cy="5" r="3" fill="#10b981" />
            <line x1="-45" y1="5" x2="45" y2="5" stroke="#334155" strokeWidth="1" />
            <circle cx="45" cy="5" r="3" fill="#ffffff" />
            
            {/* Dimension HUD tags */}
            <line x1="64" y1="-24" x2="100" y2="-45" stroke="#ffffff" strokeWidth="1" />
            <rect x="100" y="-55" width="54" height="15" rx="3.5" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />
            <text x="105" y="-45" fill="#ffffff" style={{ fontSize: '5px' }} className="font-mono font-bold">R_Z: 42.8°</text>
          </g>

          {/* Sourcing widgets / Stats inside mock design canvas */}
          <rect x="20" y="20" width="104" height="38" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
          <circle cx="32" cy="38" r="3" fill="#10b981" />
          <text x="44" y="34" fill="#ffffff" style={{ fontSize: '6px' }} className="font-bold font-sans">Multi-Region Sourcing</text>
          <text x="44" y="42" fill="#94a3b8" style={{ fontSize: '5px' }} className="font-sans">99.98% Transaction accuracy</text>

          {/* Right Floating Cart Stat Widget */}
          <rect x="276" y="148" width="104" height="56" rx="8" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />
          <text x="286" y="162" fill="#10b981" style={{ fontSize: '5.5px' }} className="font-mono font-bold uppercase tracking-wider">SALES INTENSITY</text>
          <text x="286" y="178" fill="#ffffff" style={{ fontSize: '10px' }} className="font-mono font-bold">$14,845.20</text>
          <text x="286" y="188" fill="#94a3b8" style={{ fontSize: '5px' }} className="font-sans">Completed transactions</text>
          
          <path d="M 286,196 L 310,190 L 330,195 L 350,188 L 370,192" stroke="#10b981" strokeWidth="1" fill="none" />
        </svg>
      </div>
    );
  }
  
  if (projectId === 'aura-fintech') {
    return (
      <div className="w-full h-full bg-[#0a0e1a] relative flex items-center justify-center p-6 select-none overflow-hidden text-white">
        {/* Background mesh grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:20px_20px]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#10b981]/10 via-transparent to-transparent pointer-events-none" />
        
        <svg viewBox="0 0 400 225" className="w-full h-full relative z-10 drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)]" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Abstract radar circles */}
          <circle cx="200" cy="112" r="130" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="5 5" fill="none" opacity="0.45" />
          <circle cx="200" cy="112" r="80" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3 3" fill="none" opacity="0.45" />

          {/* Main Financial Analytics curve */}
          <path d="M 30,150 Q 110,170 160,105 T 260,82 T 370,45" stroke="#ffffff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          
          {/* Glowing node points */}
          <circle cx="160" cy="105" r="4.5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          <circle cx="260" cy="82" r="4.5" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
          
          {/* Floating Asset Allocation Bubbles with indicators */}
          <g transform="translate(85, 65)">
            <circle cx="0" cy="0" r="23" fill="rgba(255,255,255,0.08)" stroke="#ffffff" strokeWidth="1" />
            <text x="0" y="2" fill="#ffffff" textAnchor="middle" style={{ fontSize: '6px' }} className="font-bold font-mono">EQUITIES</text>
            <text x="0" y="9" fill="#94a3b8" textAnchor="middle" style={{ fontSize: '5px' }} className="font-sans">48.2%</text>
          </g>

          <g transform="translate(315, 135)">
            <circle cx="0" cy="0" r="26" fill="rgba(16,185,129,0.12)" stroke="#10b981" strokeWidth="1" />
            <text x="0" y="2" fill="#10b981" textAnchor="middle" style={{ fontSize: '6px' }} className="font-bold font-mono">ASSETS</text>
            <text x="0" y="9" fill="#94a3b8" textAnchor="middle" style={{ fontSize: '5px' }} className="font-sans">32.6%</text>
          </g>

          {/* Interactive Financial HUD parameters */}
          <rect x="24" y="160" width="134" height="42" rx="6" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />
          <text x="32" y="174" fill="#cbd5e1" style={{ fontSize: '5.5px' }} className="font-semibold tracking-wider">AUM PORTFOLIO INDEX</text>
          <text x="32" y="190" fill="#ffffff" style={{ fontSize: '11px' }} className="font-bold font-mono">$1,248,390.00</text>

          {/* Risk Level Badge */}
          <g transform="translate(260, 24)">
            <rect x="0" y="0" width="114" height="22" rx="11" fill="#10b981" />
            <text x="57" y="14" fill="#064e3b" textAnchor="middle" style={{ fontSize: '7.5px' }} className="font-bold tracking-wider font-mono">SYS_RISK: OPTIMAL</text>
          </g>
        </svg>
      </div>
    );
  }

  // default/vortex-protocol
  return (
    <div className="w-full h-full bg-[#080c16] relative flex items-center justify-center p-6 select-none overflow-hidden text-white">
      {/* Background mesh grid */}      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:20px_20px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none" />
      
      <svg viewBox="0 0 400 225" className="w-full h-full relative z-10 drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)]" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Node interconnect cluster network */}
        <g stroke="#2d3748" strokeWidth="0.8">
          <line x1="80" y1="55" x2="180" y2="35" />
          <line x1="180" y1="35" x2="280" y2="75" />
          <line x1="280" y1="75" x2="310" y2="155" />
          <line x1="310" y1="155" x2="220" y2="175" />
          <line x1="220" y1="175" x2="100" y2="135" />
          <line x1="100" y1="135" x2="80" y2="55" />
          <line x1="180" y1="35" x2="220" y2="175" stroke="#ffffff" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="100" y1="135" x2="280" y2="75" stroke="#10b981" strokeWidth="0.8" strokeDasharray="3 3" />
        </g>
 
        {/* Nodes */}
        <circle cx="80" cy="55" r="5.5" fill="#1e293b" stroke="#334155" strokeWidth="1" />
        <circle cx="180" cy="35" r="7.5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" />
        <circle cx="280" cy="75" r="5.5" fill="#1e293b" stroke="#334155" strokeWidth="1" />
        <circle cx="310" cy="155" r="6.5" fill="#10b981" stroke="#ffffff" strokeWidth="1.2" />
        <circle cx="220" cy="175" r="5.5" fill="#1e293b" stroke="#334155" strokeWidth="1" />
        <circle cx="100" cy="135" r="6.5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" />

        {/* Floating blockchain ledger transactions block stack */}
        <g transform="translate(30, 85)">
          <rect x="0" y="0" width="112" height="60" rx="8" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />
          <text x="10" y="15" fill="#94a3b8" style={{ fontSize: '5.5px' }} className="font-mono tracking-wider font-bold">MUTABLE LEDGER</text>
          
          <rect x="10" y="22" width="92" height="13" rx="3.5" fill="#1e293b" />
          <text x="14" y="31" fill="#10b981" style={{ fontSize: '5px' }} className="font-mono font-bold">0x4df2...9b01</text>
          <text x="76" y="30" fill="#ffffff" style={{ fontSize: '4.5px' }} className="font-sans">SUCCEED</text>

          <rect x="10" y="39" width="92" height="13" rx="3.5" fill="#1e293b" />
          <text x="14" y="48" fill="#38bdf8" style={{ fontSize: '5px' }} className="font-mono font-bold">0x7a2d...38ac</text>
          <text x="76" y="47" fill="#ffffff" style={{ fontSize: '4.5px' }} className="font-sans">CONFIRMED</text>
        </g>

        {/* Cryptographic Depth Meter */}
        <g transform="translate(254, 105)">
          <rect x="0" y="0" width="116" height="42" rx="6" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />
          <text x="8" y="14" fill="#94a3b8" style={{ fontSize: '5.5px' }} className="font-mono font-bold">AGGREGATION POOL</text>
          <path d="M 8,34 Q 28,32 50,21 T 90,30 T 110,16" stroke="#10b981" strokeWidth="1.5" fill="none" />
          <circle cx="50" cy="21" r="3" fill="#10b981" stroke="#0f172a" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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
    setIsPartnerModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-apple-ink relative font-sans selection:bg-apple-blue/20 selection:text-apple-ink overflow-x-hidden">
      
      {/* --- Sticky Unified Dark Header (Solid/Frosted Slate-Dark, matching reference design) --- */}
      <header className="sticky top-0 z-50 bg-[#0a0f1d] border-b border-white/10 px-6 md:px-12 py-3.5">
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="font-bold text-white text-[19px] tracking-[0.015em] font-display hover:opacity-90 transition">
              LABS.
            </a>
          </div>

          {/* Center-Right Nav Links & CTA button */}
          <div className="flex items-center gap-10">
            <nav className="hidden md:flex items-center gap-7 text-[13px] font-semibold text-gray-300">
              <a href="#selected-works" className="hover:text-white transition duration-150">Work</a>
              <a href="#our-expertise" className="hover:text-white transition duration-150">Services</a>
              <a href="#strategic-partnerships" className="hover:text-white transition duration-150">Studio</a>
              <a href="#testimonials" className="hover:text-white transition duration-150">Insights</a>
            </nav>

            <button
              id="header-start-project-btn"
              onClick={handleScrollToPlanner}
              className="px-5 py-2 text-[13px] font-semibold rounded-full bg-apple-blue hover:bg-apple-blue-focus text-[#0a0f1d] transition-all duration-200 cursor-pointer shadow-sm shadow-white/5 active:scale-95"
            >
              Start Project
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              id="mobile-nav-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white focus:outline-none cursor-pointer p-1"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0f1d] border-b border-white/10 text-gray-250 text-sm py-4 px-6 space-y-4 absolute w-full left-0 z-40 overflow-hidden"
          >
            <a href="#selected-works" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-white transition py-1 font-medium">Work</a>
            <a href="#our-expertise" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-white transition py-1 font-medium">Services</a>
            <a href="#strategic-partnerships" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-white transition py-1 font-medium">Studio</a>
            <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-white transition py-1 font-medium">Insights</a>
            <button 
              id="mobile-nav-start-btn"
              onClick={() => { setIsMobileMenuOpen(false); handleScrollToPlanner(); }} 
              className="w-full text-center py-2 bg-apple-blue hover:bg-apple-blue-focus text-[#0a0f1d] rounded-full font-semibold text-xs cursor-pointer transition"
            >
              Start Project
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION (High-fidelity custom visual showcase, matching reference style) --- */}
      <section className="relative bg-[#0a0f1d] pt-20 pb-24 px-4 md:px-8 flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Large display (56px-72px, weight 600, negative tracking-[-0.28px]) */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.025em] text-white leading-[1.08] font-display">
            Digital Interfaces <br />
            That <span className="text-apple-blue">Define Future.</span>
          </h1>

          {/* Editorial Paragraph (17px, line height 1.47, text leading-relaxed) */}
          <p className="text-[17px] leading-[1.47] text-apple-ink-muted max-w-2xl mx-auto font-sans font-normal tracking-[-0.012em]">
            Elevating your business with premium digital assets, meticulous aesthetic design, and seamless user experiences.
          </p>

          {/* Compact Pill actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              id="hero-planner-start-btn"
              onClick={handleScrollToPlanner}
              className="inline-flex items-center justify-center gap-1.5 w-[240px] h-[56px] bg-white hover:bg-[#e2e8f0] active:scale-95 text-black text-[15px] font-semibold tracking-wide rounded-full transition-all duration-200 cursor-pointer shadow-sm shadow-white/5"
            >
              <span>Design your Blueprint</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <a 
              href="#selected-works" 
              className="inline-flex items-center justify-center w-[240px] h-[56px] font-semibold text-[15px] text-white border border-white/20 hover:border-white/40 hover:bg-white/10 rounded-full transition-all duration-200 cursor-pointer active:scale-95"
            >
              Explore products &darr;
            </a>
          </div>
        </div>

        {/* --- MAIN SHOWCASE MODULE (Mimics the high-end reference style) --- */}
        <div className="w-full max-w-5xl mt-16 space-y-12 text-left">
          
          {/* 1. Upper Showcase Banner */}
          <div className="bg-apple-pearl rounded-[2rem] p-6 sm:p-12 border border-apple-hairline shadow-md relative overflow-hidden">
              
              {/* Inside Mock Navbar */}
              <div className="flex items-center justify-between border-b border-apple-hairline pb-5 mb-8 text-xs text-apple-ink-muted font-medium">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-apple-blue" />
                  <span className="font-bold text-white tracking-wider">LABS.</span>
                </div>
                <div className="hidden sm:flex items-center gap-6 text-[10px] uppercase tracking-widest font-bold text-gray-500">
                  <span className="hover:text-white cursor-pointer transition">Technology</span>
                  <span className="hover:text-white cursor-pointer transition">Pricing</span>
                </div>
                <div className="flex items-center gap-5">
                  <span className="hidden md:inline hover:text-white cursor-pointer transition">Blog</span>
                  <button className="bg-apple-blue hover:bg-apple-blue-focus text-[#0a0f1d] font-bold text-[10.5px] px-3.5 py-1.5 rounded-full transition cursor-pointer">
                    View Demo
                  </button>
                </div>
              </div>

              {/* Showcase Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Left Text */}
                <div className="md:col-span-5 space-y-6 pr-4">
                  <div className="space-y-1">
                    <p className="text-[11px] font-bold text-apple-blue uppercase tracking-widest">Save time and money.</p>
                    <p className="text-[11px] font-semibold text-apple-ink-muted">Automated Inventory Management</p>
                  </div>
                  <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05] font-display">
                    Optimize, <br />
                    Outperform
                  </h2>
                </div>

                {/* Right Illustration Area (Hand holding phone, clean minimalist line art style) */}
                <div className="md:col-span-7 flex justify-center items-center relative min-h-[280px]">
                  {/* Fluid decorative backgrounds */}
                  <div className="absolute w-56 h-56 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                  
                  {/* Clean SVG Artwork */}
                  <svg
                    viewBox="0 0 420 380"
                    className="w-full max-w-[360px] h-auto relative z-10 drop-shadow-lg"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Dotted target lines */}
                    <path d="M 60,180 L 360,180" stroke="#1e293b" strokeDasharray="4 4" strokeWidth="1" />
                    <path d="M 210,40 L 210,340" stroke="#1e293b" strokeDasharray="4 4" strokeWidth="1" />
                    <circle cx="210" cy="180" r="100" stroke="#1f2937" strokeWidth="1" />

                    {/* Paper plane vector in bg */}
                    <g transform="translate(140, 50) rotate(-15) scale(0.7)">
                      <path d="M0,15 L32,0 L18,36 Z" fill="#1e293b" />
                      <path d="M18,36 L12,24 L0,15 L18,18 Z" fill="#0f172a" />
                      <path d="M12,24 L18,18 L18,36 Z" fill="#475569" />
                    </g>
                    {/* Dotted path trail to paper plane */}
                    <path d="M 80,140 Q 110,80 150,60" stroke="#475569" strokeWidth="1.5" strokeDasharray="3 3" />

                    {/* Sleek smartphone silhouette shadow */}
                    <rect x="156" y="76" width="128" height="248" rx="20" fill="rgba(255,255,255,0.02)" />

                    {/* Arm / Hand coming from bottom-right (Minimal ink vector) */}
                    <path
                      d="M 390,380 C 340,310 290,266 260,250 C 235,236 215,236 200,244 M 200,244 C 185,250 170,256 160,240 C 152,228 162,216 172,204 C 178,198 174,188 166,186 C 158,184 150,192 144,184 C 138,176 148,164 158,156 C 164,152 165,142 158,138 Q 146,132 152,120 C 158,108 174,116 182,126 C 190,136 206,140 220,132 L 236,124 M 200,244 L 230,230 L 250,210"
                      stroke="#f5f5f7"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Smartphone silhouette frame */}
                    <rect
                      x="150"
                      y="70"
                      width="128"
                      height="248"
                      rx="22"
                      fill="#090d16"
                      stroke="#222d44"
                      strokeWidth="3.5"
                    />

                    {/* Inside Smartphone UI layout elements */}
                    {/* Top capsule notches */}
                    <rect x="204" y="78" width="20" height="5" rx="2.5" fill="#f5f5f7" />
                    
                    {/* Inside Dashboard curves */}
                    <rect x="162" y="94" width="104" height="26" rx="4" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />
                    <text x="168" y="106" fill="#94a3b8" className="text-[5.5px] font-bold font-sans">Automated sourcing</text>
                    <text x="168" y="113" fill="#cbd5e1" className="text-[4.5px] font-sans">Upload, receive global quotes.</text>

                    {/* Simulated live chart */}
                    <rect x="162" y="128" width="104" height="114" rx="8" fill="#0d111a" />
                    
                    <path
                      d="M 166,220 Q 180,150 200,200 T 235,140 T 262,180"
                      stroke="#2997ff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <circle cx="200" cy="200" r="3.5" fill="#2997ff" stroke="#0d111a" strokeWidth="1" />
                    <circle cx="235" cy="140" r="3.5" fill="#10b981" stroke="#0d111a" strokeWidth="1" />
                    
                    {/* Tiny grid segments */}
                    <line x1="162" y1="150" x2="266" y2="150" stroke="#1e293b" strokeWidth="0.5" />
                    <line x1="162" y1="180" x2="266" y2="180" stroke="#1e293b" strokeWidth="0.5" />
                    <line x1="162" y1="210" x2="266" y2="210" stroke="#1e293b" strokeWidth="0.5" />

                    {/* Dynamic widget capsule inside the phone */}
                    <rect x="162" y="250" width="104" height="25" rx="6" fill="#1e293b" />
                    <rect x="168" y="256" width="36" height="13" rx="3" fill="#10b981" />
                    <text x="174" y="264" fill="#ffffff" className="text-[5px] font-bold font-mono">ACTIVE</text>
                    
                    <circle cx="225" cy="262" r="3" fill="#475569" />
                    <circle cx="235" cy="262" r="3" fill="#475569" />
                    <circle cx="245" cy="262" r="3" fill="#475569" />
                    <circle cx="255" cy="262" r="3" fill="#475569" />

                    {/* Smartphone physical buttons */}
                    <rect x="148" y="120" width="2" height="14" rx="1" fill="#334155" />
                    <rect x="148" y="140" width="2" height="14" rx="1" fill="#334155" />
                    <rect x="278" y="130" width="2" height="20" rx="1" fill="#334155" />
                  </svg>
                </div>
              </div>

          </div>

        </div>
      </section>


      {/* --- SELECTED WORKS SECTION (Alternating tiles pulse stack) --- */}
      <section id="selected-works" className="border-t border-apple-hairline">
        
        {/* Alternating Edge-to-Edge Product Tiles list (zero rounding, touching borders) */}
        <div className="divide-y divide-apple-hairline">
          {PROJECTS.map((project, idx) => {
            const isEven = idx % 2 === 0;
            // Alternate tile background: Premium Dark 1 ↔ Premium Dark 2
            let bgClass = "bg-[#0a0f1d] text-white";
            let subtitleClass = "text-apple-ink-muted text-[17px]";
            let linkClass = "text-apple-blue hover:underline text-[15px] font-semibold flex items-center gap-1 cursor-pointer";
            
            if (!isEven) {
              bgClass = "bg-[#111726] text-white";
              subtitleClass = "text-[#94a3b8] text-[17px]";
              linkClass = "text-apple-blue hover:underline text-[15px] font-semibold flex items-center gap-1 cursor-pointer";
            }

            return (
              <div 
                id={`project-tile-${project.id}`}
                key={project.id}
                className={`py-20 md:py-28 px-4 md:px-8 ${bgClass} transition-colors duration-400`}
              >
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left info stack (Column span taking 5) */}
                  <div className="lg:col-span-5 space-y-6">
                    <h3 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight text-white">
                      {project.title}
                    </h3>
                    <p className={subtitleClass}>
                      {project.description}
                    </p>
                    
                    {/* Tiny specs pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span 
                          key={tech} 
                          className="bg-white/5 px-2.5 py-1 rounded text-xs font-mono tracking-tight text-[#94a3b8]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4">
                      <button
                        id={`project-detail-trigger-${project.id}`}
                        onClick={() => setSelectedProject(project)}
                        className={linkClass}
                      >
                        <span>Examine technical parameters</span>
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Right product graphics with Single drop shadow (Column span taking 7) */}
                  <div className="lg:col-span-7 flex justify-center w-full">
                    <div 
                      onClick={() => setSelectedProject(project)}
                      className="relative w-full max-w-2xl aspect-video overflow-hidden rounded-[2rem] border border-apple-hairline/25 shadow-xl cursor-pointer hover:scale-[1.015] transition duration-300 group"
                    >
                      <ProjectVectorShowcase projectId={project.id} />
                      <div className="absolute inset-0 bg-transparent group-hover:bg-black/5 duration-300 pointer-events-none" />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- OUR EXPERTISE SECTION (Styled as White Store-Utility-Cards) --- */}
      <section id="our-expertise" className="py-24 px-4 md:px-8 border-t border-apple-hairline bg-apple-parchment">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-apple-ink font-display">
              System Engineering & Design
            </h2>
            <p className="text-[17px] text-apple-ink-muted max-w-2xl mx-auto font-sans leading-relaxed">
              We focus purely on crafting high-fidelity design layouts coupled with ultra-scalable architectures.
            </p>
          </div>

          {/* Cards grid (White Store-Utility Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {SERVICES.map((srv) => {
              const isSelected = selectedService?.id === srv.id;
              return (
                <div 
                  id={`expertise-card-${srv.id}`}
                  key={srv.id}
                  onClick={() => setSelectedService(isSelected ? null : srv)}
                  className={`bg-apple-pearl border text-left p-6 rounded-[18px] transition-all duration-300 cursor-pointer relative overflow-hidden select-none flex flex-col justify-between min-h-[260px] ${
                    isSelected ? 'border-apple-blue ring-1 ring-apple-blue/20' : 'border-apple-hairline hover:border-apple-blue/30'
                  }`}
                >
                  <div>
                    {/* Header icons */}
                    <div className="p-2 w-max rounded-lg bg-apple-parchment text-apple-blue">
                      {srv.icon === 'Monitor' && <Monitor className="h-5 w-5" />}
                      {srv.icon === 'Layers' && <Layers className="h-5 w-5" />}
                      {srv.icon === 'Code' && <Code className="h-5 w-5" />}
                    </div>

                    <h3 className="text-lg font-semibold text-apple-ink mt-5 leading-tight font-display">
                      {srv.title}
                    </h3>
                    <p className="text-[14px] text-apple-ink-muted mt-2.5 leading-normal font-sans">
                      {srv.description}
                    </p>
                  </div>

                  {/* Option toggle specs */}
                  <div className="pt-4 border-t border-apple-hairline mt-6 flex items-center justify-between text-xs text-apple-blue font-semibold">
                    <span>{isSelected ? "Hide parameters" : "Read options & stack"}</span>
                    <ChevronRight className={`h-3 w-3 transform duration-200 ${isSelected ? 'rotate-90' : ''}`} />
                  </div>

                  {/* Accordion list */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden pt-4 mt-2 border-t border-apple-hairline/60"
                      >
                        <div className="space-y-4 text-xs font-sans">
                          <div>
                            <span className="text-[10px] text-apple-blue font-bold uppercase tracking-wider block mb-1">CAPABILITIES</span>
                            <ul className="space-y-1 list-none text-apple-ink">
                              {srv.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-1.5 text-xs text-apple-ink-muted">
                                  <span className="h-1 w-1 rounded-full bg-apple-blue shrink-0 mt-1.5" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <span className="text-[10px] text-apple-blue font-bold uppercase tracking-wider block mb-1">SYSTEM STACK</span>
                            <div className="flex flex-wrap gap-1">
                              {srv.techStack.map((tech) => (
                                <span key={tech} className="px-2 py-0.5 bg-apple-parchment text-[10px] rounded font-mono font-medium text-apple-ink">
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

      {/* --- STRATEGIC PARTNERSHIPS SECTION (Museum glass grids, no shadows) --- */}
      <section id="strategic-partnerships" className="py-24 px-4 md:px-8 border-t border-apple-hairline bg-[#0a0f1d]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white font-display">
              Strategic Partnerships
            </h2>
            <p className="text-[17px] text-apple-ink-muted max-w-xl mx-auto font-sans leading-relaxed">
              We collaborate with enterprise engineering platforms to assemble pristine web nodes.
            </p>
          </div>

          {/* Infinite Auto-Scrolling Logo Marquee with pause on hover */}
          <div className="relative w-full overflow-hidden py-4 select-none">
            {/* Elegant transparency fade mask on sides matching natural elite brand looks */}
            <div className="absolute inset-y-0 left-0 w-12 md:w-36 bg-gradient-to-r from-[#0a0f1d] via-[#0a0f1d]/85 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 md:w-36 bg-gradient-to-l from-[#0a0f1d] via-[#0a0f1d]/85 to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee animate-marquee-paused-hover flex gap-6">
              {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((pt, idx) => {
                return (
                  <div 
                    id={`partner-card-${pt.id}-${idx}`}
                    key={`${pt.id}-${idx}`}
                    className="w-[200px] sm:w-[260px] p-8 rounded-[11px] border border-apple-hairline bg-apple-pearl text-center flex flex-col justify-center items-center group cursor-help transition transform hover:scale-102 hover:border-gray-500 duration-250 relative overflow-hidden shrink-0"
                  >
                    <span className="text-2xl font-semibold tracking-tight text-white group-hover:text-apple-blue transition duration-250">
                      {pt.logo}
                    </span>
                    
                    <div className="mt-3 block max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-300 ease-out overflow-hidden border-t border-apple-hairline pt-0 group-hover:pt-3">
                      <p className="text-[10px] text-apple-blue font-bold uppercase">{pt.industry}</p>
                      <p className="text-[10px] text-apple-ink-muted font-sans leading-relaxed">{pt.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center">
            <button
              id="become-partner-btn"
              onClick={() => setIsPartnerModalOpen(true)}
              className="inline-flex items-center gap-1 w-max px-5 py-2.5 bg-apple-pearl border border-apple-hairline hover:bg-apple-parchment text-white text-xs font-semibold rounded-full duration-250 cursor-pointer"
            >
              <span>Apply for Partner Alliance</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section id="testimonials" className="py-24 px-4 md:px-8 border-t border-apple-hairline bg-apple-parchment">
        <TestimonialSlider />
      </section>

      {/* --- FOOTER (Parchment, scannable dense links) --- */}
      <footer className="py-16 md:py-24 px-6 md:px-12 bg-[#0a0f1d] text-[#94a3b8] border-t border-apple-hairline text-xs font-sans">
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-10 items-start border-b border-apple-hairline/80 pb-12">
          
          <div className="md:col-span-6 space-y-4">
            <span className="text-xl font-bold tracking-[0.14em] font-display text-white">
              LABS.
            </span>
            <p className="text-xs text-[#94a3b8] max-w-sm leading-relaxed">
              Crafting photography-first, high-fidelity premium user interfaces framed by beautiful typography and robust technical client-cloud pipelines.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-wrap gap-x-12 gap-y-4 md:justify-end text-[#94a3b8] font-normal text-[13px]">
            <a href="#" className="hover:text-apple-blue hover:underline transition">Privacy Policy</a>
            <a href="#" className="hover:text-apple-blue hover:underline transition">Terms of Service</a>
            <a href="#" className="hover:text-apple-blue hover:underline transition">Careers</a>
            <a href="#" className="hover:text-apple-blue hover:underline transition">Contact Studio</a>
          </div>

        </div>

        <div className="w-full pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-[11px]">
          <span>© 2026 LABS. Creative Inc. All rights reserved.</span>
          <div className="flex items-center gap-1 text-[10px] text-gray-500">
            <div className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span>Apple Design Compliant Node Online (UTC-0)</span>
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
