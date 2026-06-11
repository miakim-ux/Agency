import { Project, Service, Partner, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-design',
    title: 'Web Design',
    koreanTitle: '웹 디자인',
    description: 'User-oriented aesthetic planning and responsive web design reflecting the latest trends.',
    details: [
      'Responsive Web Architecture & Grid design',
      'Interactive micro-animations (Framer Motion / WebGL)',
      'High-fidelity wireframes & Design system creation',
      'Creative direction & Conceptual storytelling'
    ],
    techStack: ['Figma', 'Principle', 'Spline 3D', 'Adobe Suite', 'TailwindCSS'],
    icon: 'Monitor'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    koreanTitle: 'UI/UX',
    description: 'Maximizing user engagement and conversion rates through intuitive, seamless journey flows.',
    details: [
      'Behavioral pattern analysis & User personas',
      'Intuitive navigation structure & Information architecture',
      'Usability testing & Data-driven optimization',
      'Conversion rate optimization (CRO) UI models'
    ],
    techStack: ['Figma', 'Framer', 'Prototyping', 'Hotjar', 'UserZoom'],
    icon: 'Layers'
  },
  {
    id: 'custom-dev',
    title: 'Custom Dev',
    koreanTitle: '맞춤형 개발',
    description: 'Development of scalable, robust, and custom-tailored web applications and modular systems.',
    details: [
      'Full-stack architecture scaling millions of sessions',
      'Real-time features with WebSockets / WebRTC',
      'High security Web3 or core payment service integration',
      'Custom CRM, CMS and Admin Panel creation'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Go', 'GraphQL', 'Next.js'],
    icon: 'Code'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'nexgen-retail',
    title: 'NexGen Retail Platform',
    category: 'E-Commerce',
    tag: 'E-Commerce',
    imageUrl: '/src/assets/images/nexgen_retail_platform_1781156585702.png',
    client: 'NexGen Retail Inc.',
    duration: '12 Weeks',
    year: '2024',
    description: 'High-speed, immersive retail e-commerce shopping platform tailored for luxury brands.',
    fullOverview: 'NexGen Retail Platform is a luxury e-commerce solution featuring high-performance static web architecture and a Framer Motion-based 3D product viewer. It supports virtual fitting and real-time multi-channel checkout, transcending traditional shopping limits. It reduced initial load times by 400% and substantially increased conversion rates via an intuitively designed Canvas control system.',
    techStack: ['React 19', 'Tailwind CSS v4', 'Vite', 'Three.js / WebGL', 'Framer Motion', 'Node.js'],
    deliverables: [
      'Immersive 3D Product Configurator',
      'Ultra-low Latency Search & Cart',
      'Micro-animation UX Framework',
      'Global CDN & API Optimizations'
    ],
    results: [
      'Overall purchase conversion rate increased by +42%',
      'Accomplished sub-0.8s page load speed',
      'Cart abandonment rate decreased by 28%'
    ]
  },
  {
    id: 'aura-fintech',
    title: 'Aura FinTech App',
    category: 'Branding & UI',
    tag: 'Branding & UI',
    imageUrl: '/src/assets/images/aura_fintech_app_1781156608354.png',
    client: 'Aura Capital Ltd.',
    duration: '8 Weeks',
    year: '2024',
    description: 'Premium branding and user interface design for ultra-high-net-worth portfolio management.',
    fullOverview: 'Aura FinTech App is a premium wealth management interface project that elegantly visualizes real-world global assets and portfolios. We established a luxury slate-neon look-and-feel balancing digital immersion with trust, and engineered interactive financial simulation widgets to give asset holders complete control over their parameters.',
    techStack: ['Figma UX Architecture', 'Framer Prototyping', 'React Native', 'Recharts / D3.js', 'Tailwind CSS'],
    deliverables: [
      'Comprehensive Luxury Design System',
      'Real-Time Portfolio Interactive Charting',
      'Biometric Secure UX Flows',
      'Interactive Investment Forecasting Tool'
    ],
    results: [
      'Average active user session length increased by +60%',
      'Achieved a Net Promoter Score (NPS) of 87',
      'Assets under management exceeded $1.2B within one month of launch'
    ]
  },
  {
    id: 'vortex-protocol',
    title: 'Vortex Protocol',
    category: 'Web 3.0',
    tag: 'Web 3.0',
    imageUrl: '/src/assets/images/vortex_protocol_1781156627136.png',
    client: 'Vortex Labs',
    duration: '10 Weeks',
    year: '2024',
    description: 'Next-generation decentralized liquidity aggregation and oracle framework for hybrid DeFi.',
    fullOverview: 'Vortex Protocol is a high-fidelity Web 3.0 application that intuitively renders complex decentralized datasets. We built a 3D interactive tokenomics explorer and cross-chain liquidity mapping dashboard, reducing cognitive overload for protocol users and offering real-time zero-error transaction tracing.',
    techStack: ['React', 'TypeScript', 'Ethers.js / Web3', 'D3.js Visualization', 'Framer Motion', 'Solidity UI Integration'],
    deliverables: [
      'Cross-Chain Liquidity Dashboard',
      'Interactive 3D Tokenomics Canvas',
      'Hardware Wallet Auth Flow Design',
      'Real-Time Event stream visualizer'
    ],
    results: [
      '98% user satisfaction feedback on transaction gas fee estimation',
      'Onboarding abandonment rate for new accounts decreased by 35%',
      'Record-high interactive engagement score on educational tokenomics visualization'
    ]
  }
];

export const PARTNERS: Partner[] = [
  {
    id: 'acme',
    name: 'ACME.',
    logo: 'ACME.',
    industry: 'Enterprise Software',
    founded: '2016',
    description: 'A global software group leading the industry in enterprise hyper-automation and cloud tools.'
  },
  {
    id: 'globex',
    name: 'GLOBEX',
    logo: 'GLOBEX',
    industry: 'Digital Commerce & FinTech',
    founded: '2019',
    description: 'A core platform enabling next-generation payment infrastructure and decentralized finance.'
  },
  {
    id: 'soylent',
    name: 'Soylent',
    logo: 'Soylent',
    industry: 'BioTech & Wellness Tech',
    founded: '2017',
    description: 'A pioneering enterprise in digital wellness and advanced smart biotech frameworks.'
  },
  {
    id: 'initech',
    name: 'Initech',
    logo: 'Initech',
    industry: 'Cybersecurity & Scale',
    founded: '2015',
    description: 'A global cybersecurity provider specializing in high-reliability cloud virtual networks.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-acme',
    companyId: 'acme',
    quote: 'LABS. turned our ideas into high-fidelity assets faster than we ever imagined. Working with a dashboard that operates seamlessly at an enterprise scale while remaining incredibly polished has transformed our operations. The user feedback is outstanding.',
    author: 'Alex Mercer',
    role: 'CTO',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    id: 't-globex',
    companyId: 'globex',
    quote: 'They transformed our vision of a custom wealth management suite into a thrillingly modern, intuitive UX. Streamlining complex transaction patterns visually led to a direct increase in conversion rates. They are a true partner, not just a service provider.',
    author: 'Elena Rostova',
    role: 'VP of Design',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    id: 't-soylent',
    companyId: 'soylent',
    quote: 'Rendering complex biotechnology insights visually is notoriously difficult. Thanks to LABS. and their WebGL 3D simulation tools, investors and clients can comprehend our smart-nutrition layers in just three clicks. A true masterpiece of engineering.',
    author: 'Dr. Marcus Vance',
    role: 'Chief Scientific Officer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    id: 't-initech',
    companyId: 'initech',
    quote: 'The hardware wallet authentication flows design they provided for our web-facing interface was brilliant. They successfully overcame complex frontend requirements and intensive load-cycling stress tests. A phenomenal development team with an extreme love for details.',
    author: 'Sarah Jenkins',
    role: 'Principal Security Architect',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&h=120&q=80'
  }
];
