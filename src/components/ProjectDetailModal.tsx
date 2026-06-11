import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, User, Clock, CheckCircle, Flame, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-55 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#070a10]/92 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="flex min-h-screen items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-[#121824]/95 border border-white/10 shadow-2xl glass-panel text-white"
            >
              {/* Top ambient color bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600" />

              {/* Close Button */}
              <button
                id="close-modal-btn"
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 border border-white/10 text-[#c4c5d7] hover:text-white hover:bg-white/10 transition duration-200 cursor-pointer z-10"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Main Content Scrollable Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Visual Side */}
                <div className="relative h-64 md:h-full min-h-[300px] bg-[#0c1017] border-r border-white/6 flex flex-col justify-end p-6 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121824] via-transparent to-transparent z-1" />
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-500 hover:scale-105"
                  />
                  
                  {/* Floating neon badge */}
                  <div className="relative z-2 mb-2 self-start rounded-full px-3 py-1 text-xs font-semibold bg-[#b7c4ff]/10 text-[#b7c4ff] border border-[#b7c4ff]/30 tracking-wide uppercase font-display backdrop-blur-md">
                    {project.category}
                  </div>
                  <h3 className="relative z-2 text-2xl font-bold tracking-tight font-display text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="relative z-2 text-sm text-[#c4c5d7] font-sans pb-1">
                    {project.client} &bull; {project.year}
                  </p>
                </div>

                {/* Info Details Side */}
                <div className="p-6 md:p-8 flex flex-col justify-between max-h-[80vh] overflow-y-auto">
                  <div>
                    {/* Headings */}
                    <span className="text-xs uppercase tracking-widest text-[#b7c4ff] font-semibold font-display mb-1 block">Project Highlights</span>
                    <h2 className="text-2xl font-bold font-display text-white mb-4">Strategic Execution</h2>
                    
                    {/* Narrative Description */}
                    <p className="text-sm text-[#c4c5d7] leading-relaxed mb-6 font-sans">
                      {project.fullOverview}
                    </p>

                    {/* Metadata Specs Row */}
                    <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-white/6 mb-6">
                      <div className="flex items-center gap-2.5">
                        <User className="h-4.5 w-4.5 text-[#b7c4ff]/80" />
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase tracking-widest">Client</p>
                          <p className="text-xs font-semibold">{project.client}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Clock className="h-4.5 w-4.5 text-[#b7c4ff]/80" />
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase tracking-widest">Duration</p>
                          <p className="text-xs font-semibold">{project.duration}</p>
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack Bubbles */}
                    <div className="mb-6">
                      <h4 className="text-xs uppercase tracking-widest text-[#b7c4ff] font-semibold mb-2 block">System Stack</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="bg-white/4 border border-white/6 text-[#dee2f2] text-[11px] px-2.5 py-1 rounded-sm font-mono">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Core Deliverables / Results */}
                    <div className="mb-4">
                      <h4 className="text-xs uppercase tracking-widest text-[#b7c4ff] font-semibold mb-2 block">Core Deliverables</h4>
                      <ul className="space-y-2">
                        {project.deliverables.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-xs text-[#c4c5d7]">
                            <Flame className="h-3.5 w-3.5 mt-0.5 text-orange-400 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Measurable Impact */}
                    <div className="mt-6 pt-4 border-t border-white/6">
                      <h4 className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2 block">Measurable Impact</h4>
                      <ul className="space-y-2">
                        {project.results.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-xs text-[#dee2f2]">
                            <CheckCircle className="h-3.5 w-3.5 mt-0.5 text-emerald-400 shrink-0" />
                            <span className="font-semibold">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Close dialogue trigger button */}
                  <div className="mt-8 pt-4 border-t border-white/6 flex items-center justify-between">
                    <span className="text-xs text-[#8e90a0]">© NEON_LABS Case Study</span>
                    <button
                      id="modal-request-btn"
                      onClick={() => {
                        onClose();
                        // Trigger custom planner scroll
                        const element = document.getElementById('project-estimate-section');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-full cursor-pointer shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 duration-300"
                    >
                      <span>Consult on similar system</span>
                      <ExternalLink className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
