export type Locale = 'pt' | 'en';

export const dictionaries = {
	pt: {
		nav: {
			about: "Sobre",
			skills: "Competências",
			projects: "Projetos",
			contact: "Contacto",
		},
		hero: {
			greeting: "Olá, eu sou",
			role: "Desenvolvedor Full Stack & Mobile",
			cta: "Ver Projetos",
			github: "GitHub",
		},
		about: {
			title: "Sobre Mim",
			description: "Sou um desenvolvedor apaixonado por criar sistemas robustos que resolvem problemas reais. Com forte base em Java/Spring e ecossistema Node.js, foco em arquitetura escalável e experiências mobile fluidas.",
		},
		skills: {
			soft: "Soft Skills",
			hard: "Hard Skills",
		},
		contact: {
			title: "Contato",
			email: "domingosifafe@gmail.com",
			emailLabel: "Enviar e-mail",
			linkedin: "LinkedIn",
			github: "GitHub",
		},
		footer: {
			text: "Construído com React, Tailwind & amor pelo código.",
		},
		aboutCards: {
			backend: {
				title: "Backend & Arquitetura",
				desc: "Especialista em construir sistemas robustos e escaláveis usando Java, Spring Boot e Microsserviços. Experiência com modelagem de dados complexa (SQL/NoSQL) e APIs de alta performance.",
			},
			mobile: {
				title: "Mobile & Frontend",
				desc: "Criação de experiências fluidas e nativas com Flutter e tecnologias Web modernas. Foco em implementações pixel-perfect e animações suaves.",
			},
		},
		softSkills: {
			mentorship: "Mentoria",
			communication: "Comunicação",
			leadership: "Liderança",
			adaptability: "Adaptabilidade",
		},
		projects: {
			title: "Projetos em Destaque",
			viewCode: "Ver Código",
			viewLive: "website",
			details: "Detalhes Técnicos",
			list: [
				{
					title: "Omuenho - Portal Editorial",
					description: "Plataforma full stack para gestão de conteúdo editorial. Inclui CMS customizado, sistema de campanhas, analytics e automação de newsletters.",
					tags: ["Node.js", "React", "Prisma", "PostgreSQL", "Typescript/Javascript"],
					link: "https://omuenho.com",
					github: "#",
					image: "/images/omuenho-preview.png",
					techDetails: "Arquitetura monolítica modularizada com Prisma ORM, gestão de mídia binária e sistema de estatísticas de visitantes integrado."
				},
				{
					title: "SGEIKamba - Gestão Escolar",
					description: "Plataforma SaaS multi-tenant completa para gestão escolar com dashboard analítico, automação financeira e audit logging.",
					tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "SaaS"],
					link: "https://sgeikamba.vercel.app/pt",
					github: "https://github.com/Ifafe/SGEIkamba",
					image: "/images/sgeikamba-preview.png",
					techDetails: "Implementação de multi-tenancy a nível de banco de dados, internacionalização dinâmica e sistema de permissões RBAC."
				},
				{
					title: "BiometricoMovel",
					description: "Solução híbrida para autenticação biométrica com integração Supabase e controle de acesso via dispositivos mobile.",
					tags: ["Flutter", "Dart", "Supabase", "Material 3"],
					link: "#",
					github: "https://github.com/Ifafe/biometricoMovel",
					image: "/images/biometrico-preview.png",
					techDetails: "Sincronização em tempo real com Supabase, autenticação JWT e interface adaptativa seguindo os padrões Material Design 3."
				}
			]
		}
	},
	en: {
		nav: {
			about: "About",
			skills: "Skills",
			projects: "Projects",
			contact: "Contact",
		},
		hero: {
			greeting: "Hello, I am",
			role: "Full Stack & Mobile Developer",
			cta: "View Projects",
			github: "GitHub",
		},
		about: {
			title: "About Me",
			description: "I am a developer passionate about building robust systems that solve real problems. With a strong foundation in Java/Spring and the Node.js ecosystem, I focus on scalable architecture.",
		},
		skills: {
			soft: "Soft Skills",
			hard: "Hard Skills",
		},
		contact: {
			title: "Contact",
			email: "domingosifafe@gmail.com",
			emailLabel: "Send an email",
			linkedin: "LinkedIn",
			github: "GitHub",
		},
		footer: {
			text: "Built with React, Tailwind & code love.",
		},
		aboutCards: {
			backend: {
				title: "Backend & Architecture",
				desc: "Specialized in building robust, scalable systems using Java, Spring Boot, and Microservices. Experience with complex data modeling (SQL/NoSQL) and high-performance APIs.",
			},
			mobile: {
				title: "Mobile & Frontend",
				desc: "Creating fluid, native-like experiences with Flutter and modern Web technologies. Focus on pixel-perfect implementations and smooth animations.",
			},
		},
		softSkills: {
			mentorship: "Mentorship",
			communication: "Communication",
			leadership: "Leadership",
			adaptability: "Adaptability",
		},
		projects: {
			title: "Featured Projects",
			viewCode: "View Code",
			viewLive: "Live Website",
			details: "Technical Details",
			list: [
				{
					title: "Omuenho - Editorial Portal",
					description: "Full-stack platform for editorial content management. Includes customized CMS, campaign system, analytics, and automated newsletter delivery.",
					tags: ["Node.js", "React", "Prisma", "PostgreSQL", "Typescript/Javascript"],
					link: "https://omuenho.com",
					github: "#",
					image: "/images/omuenho-preview.png",
					techDetails: "Modularized monolithic architecture with Prisma ORM, binary media management, and integrated visitor statistics system."
				},
				{
					title: "SGEIKamba - School Management",
					description: "Complete multi-tenant SaaS platform for school management with analytical dashboard, financial automation, and audit logging.",
					tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "SaaS"],
					link: "https://sgeikamba.vercel.app/pt",
					github: "https://github.com/Ifafe/SGEIkamba",
					image: "/images/sgeikamba-preview.png",
					techDetails: "Database-level multi-tenancy implementation, dynamic internationalization, and RBAC permission system."
				},
				{
					title: "BiometricoMovel",
					description: "Hybrid solution for biometric authentication with Supabase integration and mobile device access control.",
					tags: ["Flutter", "Dart", "Supabase", "Material 3"],
					link: "#",
					github: "https://github.com/Ifafe/biometricoMovel",
					image: "/images/biometrico-preview.png",
					techDetails: "Real-time synchronization with Supabase, JWT authentication, and adaptive interface following Material Design 3 standards."
				}
			]
		}
	}
} as const;

