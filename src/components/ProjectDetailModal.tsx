import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, User, Clock, CheckCircle, ExternalLink } from 'lucide-react';
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
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#070a10]/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="flex min-h-screen items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-[18px] bg-apple-pearl border border-apple-hairline shadow-xl text-apple-ink"
            >
              <div className="h-1.5 w-full bg-apple-blue" />

              {/* Close Button */}
              <button
                id="close-modal-btn"
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-apple-parchment hover:bg-[#1a2333]/50 text-apple-ink-muted hover:text-apple-ink transition duration-200 cursor-pointer z-10"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Visual Side */}
                <div className="relative h-64 md:h-full min-h-[340px] bg-apple-parchment border-r border-apple-hairline flex flex-col justify-end p-6 md:p-8 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-1" />
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 h-full w-full object-cover transition duration-300 hover:scale-[1.02]"
                  />
                  
                  {/* Category Pill Tag */}
                  <div className="relative z-2 mb-2 self-start rounded-full px-3 py-1 text-xs font-semibold bg-apple-pearl/95 text-white border border-apple-hairline tracking-wide uppercase font-display backdrop-blur-sm">
                    {project.category}
                  </div>
                  <h3 className="relative z-2 text-2xl md:text-3xl font-semibold tracking-tight text-white mb-1 leading-tight font-display">
                    {project.title}
                  </h3>
                  <p className="relative z-2 text-xs text-slate-200 font-sans tracking-tight">
                    {project.client} &bull; {project.year}
                  </p>
                </div>

                {/* Info Details Side */}
                <div className="p-6 md:p-8 flex flex-col justify-between max-h-[80vh] overflow-y-auto">
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-apple-blue font-semibold font-display mb-1 block">Project Highlights</span>
                      <h2 className="text-2xl font-semibold tracking-tight text-apple-ink font-display">Strategic Execution</h2>
                    </div>
                    
                    {/* Narrative Description */}
                    <p className="text-[15px] leading-relaxed text-apple-ink-muted">
                      {project.fullOverview}
                    </p>

                    {/* Metadata Specs Row */}
                    <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-apple-hairline">
                      <div className="flex items-center gap-2.5">
                        <div className="bg-apple-parchment p-2 rounded-lg text-apple-blue">
                          <User className="h-4.5 w-4.5" />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Client</p>
                          <p className="text-xs font-semibold text-apple-ink">{project.client}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <div className="bg-apple-parchment p-2 rounded-lg text-apple-blue">
                          <Clock className="h-4.5 w-4.5" />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Duration</p>
                          <p className="text-xs font-semibold text-apple-ink">{project.duration}</p>
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack Bubbles */}
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-apple-ink-muted font-bold mb-2 block">System Stack</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="bg-apple-parchment text-apple-ink text-[11px] px-2.5 py-1 rounded font-mono font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Core Deliverables / Results */}
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-apple-blue font-semibold mb-2 block">Core Deliverables</h4>
                      <ul className="space-y-2">
                        {project.deliverables.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-xs text-apple-ink-muted">
                            <span className="h-1.5 w-1.5 rounded-full bg-apple-blue shrink-0 mt-1.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Measurable Impact */}
                    <div className="pt-4 border-t border-apple-hairline">
                      <h4 className="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-2 block">Measurable Impact</h4>
                      <ul className="space-y-2">
                        {project.results.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-xs text-apple-ink">
                            <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="font-semibold text-[13px]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Close dialogue trigger button */}
                  <div className="mt-8 pt-4 border-t border-apple-hairline flex items-center justify-between">
                    <span className="text-[11px] text-apple-ink-muted">© LABS. Case Study</span>
                    <button
                      id="modal-request-btn"
                      onClick={() => {
                        onClose();
                        const element = document.getElementById('project-estimate-section');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-apple-blue hover:bg-apple-blue-focus active:scale-95 text-[#0a0f1d] rounded-full cursor-pointer transition duration-150"
                    >
                      <span>Inquire Blueprint Specs</span>
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
