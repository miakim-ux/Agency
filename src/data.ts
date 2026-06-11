import { Project, Service, Partner, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-design',
    title: 'Web Design',
    koreanTitle: '웹 디자인',
    description: '사용자 중심의 미학적 설계와 최신 트렌드를 반영한 반응형 웹 디자인.',
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
    description: '직관적인 인터페이스와 매끄러운 사용자 경험을 통해 전환율을 극대화합니다.',
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
    description: '확장 가능하고 안전한 맞춤형 웹 애플리케이션 및 플랫폼 개발.',
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
    description: '차세대 이커머스를 선도하는 초고속 몰입형 리테일 쇼핑 플랫폼 개발.',
    fullOverview: 'NexGen Retail Platform은 고성능 정적 웹 아키텍처와 Framer Motion 기반의 3D 제품 뷰어를 탑재하여, 고객들이 전통적인 쇼핑 환경을 초월하는 가상 피팅 및 실시간 멀티채널 결제를 지원하는 럭셔리 이커머스 솔루션입니다. 초기 로딩 성능을 400% 단축하고, 직관적으로 설계된 카바스(Canvas) 제어 시스템을 통해 전환율을 대폭 상승시켰습니다.',
    techStack: ['React 19', 'Tailwind CSS v4', 'Vite', 'Three.js / WebGL', 'Framer Motion', 'Node.js'],
    deliverables: [
      'Immersive 3D Product Configurator',
      'Ultra-low Latency Search & Cart',
      'Micro-animation UX Framework',
      'Global CDN & API Optimizations'
    ],
    results: [
      '전체 구매 전환율 +42% 향상',
      '페이지 로드 속도 0.8초 미만 달성',
      '장바구니 이탈률 28% 감소'
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
    description: '초자산가 대상 모바일 및 웹 기반 최고가 자산 관리 솔루션의 브랜딩 및 디자인.',
    fullOverview: 'Aura FinTech App은 실시간 글로벌 자산 포트폴리오를 우아하게 시각화하는 프리미엄 핀테크 인터페이스 프로젝트입니다. 사이버 임장감과 신뢰의 조화를 추구하는 럭셔리 슬레이트 네온 룩앤필을 구축하고, 대화형 재무 시뮬레이션 위젯을 디자인하여 자산가들에게 완벽한 자산 통제 도구를 제공했습니다.',
    techStack: ['Figma UX Architecture', 'Framer Prototyping', 'React Native', 'Recharts / D3.js', 'Tailwind CSS'],
    deliverables: [
      'Comprehensive Luxury Design System',
      'Real-Time Portfolio Interactive Charting',
      'Biometric Secure UX Flows',
      'Interactive Investment Forecasting Tool'
    ],
    results: [
      '실사용자 평균 체류시간 +60% 증가',
      'Net Promoter Score (NPS) 87점 달성',
      '앱 출시 1달 내 자산 수탁액 $1.2B 초과'
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
    description: '탈중앙화 하이브리드 금융 생태계를 위한 차세대 유동성 집계 오라클 레이어.',
    fullOverview: 'Vortex Protocol은 복잡한 탈중앙화 데이터를 직관적으로 렌더링하는 Web 3.0 어플리케이션입니다. 3D 인터랙티브 토크노믹스 다이어그램 및 체인 간 유동성 매핑 대시보드를 구축하여 분산 프로토콜 사용의 인지 부하를 줄이고, 트랜잭션 전송 시 시각적 오차 제로 보장 릴레이를 시각화했습니다.',
    techStack: ['React', 'TypeScript', 'Ethers.js / Web3', 'D3.js Visualization', 'Framer Motion', 'Solidity UI Integration'],
    deliverables: [
      'Cross-Chain Liquidity Dashboard',
      'Interactive 3D Tokenomics Canvas',
      'Hardware Wallet Auth Flow Design',
      'Real-Time Event stream visualizer'
    ],
    results: [
      '트랜잭션 지출 가스 피드백 만족도 98%',
      '새 거래 계정 온보딩 이탈 -35% 감소',
      '토크노믹스 설명 자료 상호작용 지수 최고치'
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
    description: '엔터프라이즈 하이퍼 오토메이션 분야를 리드하는 글로벌 소프트웨어 그룹.'
  },
  {
    id: 'globex',
    name: 'GLOBEX',
    logo: 'GLOBEX',
    industry: 'Digital Commerce & FinTech',
    founded: '2019',
    description: '차세대 결제 인프라와 탈중앙화 핀테크 비즈니스 플랫폼의 주축 기업.'
  },
  {
    id: 'soylent',
    name: 'Soylent',
    logo: 'Soylent',
    industry: 'BioTech & Wellness Tech',
    founded: '2017',
    description: '디지털 헬스 및 첨단 스마트 생명공학 기술의 개척자.'
  },
  {
    id: 'initech',
    name: 'Initech',
    logo: 'Initech',
    industry: 'Cybersecurity & Scale',
    founded: '2015',
    description: '글로벌 보안 관제 및 고안정 클라우드 연동 가상 프레임워크 전문 기업.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-acme',
    companyId: 'acme',
    quote: 'NEON_LABS는 우리의 상상을 초월하는 속도로 아이디어를 구체화했습니다. 엔터프라이즈 규모에서 이정도로 화려하면서도 완벽하게 최적화된 성능을 발휘하는 대시보드는 처음 접해봅니다. 고객들의 피드백도 압도적입니다.',
    author: 'Alex Mercer',
    role: 'CTO',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    id: 't-globex',
    companyId: 'globex',
    quote: '우리의 자산 관리 앱 비전을 전율이 일 정도로 현대적이면서도 직관적인 UX로 진화시켰습니다. 트랜잭션 수수료의 복잡성이 시각적으로 정돈되면서 전환율이 급격히 늘었습니다. 그들은 단순한 외주업체가 아닌 진정한 든든한 파트너입니다.',
    author: 'Elena Rostova',
    role: 'VP of Design',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    id: 't-soylent',
    companyId: 'soylent',
    quote: '생명공학 데이터를 시각적으로 이해하기란 결코 쉽지 않습니다. NEON_LABS의 WebGL 3D 시뮬레이션 덕분에 투자자들과 고객들에게 우리의 스마트 뉴트리션 구조를 클릭 단 세 번만에 이해시킬 수 있게 되었습니다. 걸작입니다.',
    author: 'Dr. Marcus Vance',
    role: 'Chief Scientific Officer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    id: 't-initech',
    companyId: 'initech',
    quote: '해킹 위협에 안전한 Web3 보안 전면 레이아웃에 관해 그들이 제안한 하드웨어 월렛 암호화 플로우는 완벽했습니다. 까다로운 프론트 사양과 가혹한 로딩 주기를 완전히 기정 사실로 극복해 버리더군요. 디테일을 사랑하는 멋진 개발팀입니다.',
    author: 'Sarah Jenkins',
    role: 'Principal Security Architect',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&h=120&q=80'
  }
];
