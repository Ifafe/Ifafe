export type Locale = 'pt' | 'en';

export const dictionaries = {
	pt: {
		nav: {
			about: "Sobre",
			skills: "Competências",
			projects: "Projetos",
			experience: "Experiência",
			contact: "Contacto",
		},
		hero: {
			greeting: "Olá, eu sou",
			role: "Desenvolvedor Full Stack & Mobile",
			cta: "Ver Projetos",
			github: "GitHub",
			availableBadge: "Disponível para oportunidades",
			tagline: "Construo sistemas que escalam. De APIs robustas a apps mobile fluídas.",
		},
		stats: [
			{ value: '3+', label: 'Anos de Exp.' },
			{ value: '5+', label: 'Projetos' },
			{ value: '100+', label: 'Alunos' },
			{ value: '2', label: 'Países' },
		],
		about: {
			title: "Sobre Mim",
			description: "Especialista em desenvolvimento de software, atualmente a cursar Desenvolvimento de Software no IPB (Portugal). Com uma formação sólida em Gestão de Redes e Sistemas Informáticos pelo ITLS (Angola), foco-me em criar soluções digitais robustas, escaláveis e com arquitetura de alta performance.",
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
			education: {
				title: "Educação & Mentoria",
				desc: "Professor e mentor com experiência em ensinar programação a mais de 100 alunos. Crença no impacto social do ensino de tecnologia.",
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
					tags: ["Flutter", "Dart", "Supabase", "Material 3", "Em desenvolvimento"],
					link: "#",
					github: "https://github.com/Ifafe/biometricoMovel",
					image: "/images/biometrico-preview.png",
					techDetails: "Sincronização em tempo real com Supabase, autenticação JWT e interface adaptativa seguindo os padrões Material Design 3."
				},
				{
					title: "CvnetTec - Loja Tecnológica",
					description: "Plataforma de e-commerce especializada em componentes e acessórios mobile. Loja completa com catálogo de produtos, categorias por marca e sistema de carrinho.",
					tags: ["Next.js", "TypeScript", "E-commerce", "TailwindCSS"],
					link: "http://cvnettec.co.ao/",
					github: "#",
					image: "/images/cvnettec-preview.png",
					techDetails: "Loja online com catálogo dinâmico de produtos, filtros por categoria e marca, sistema de carrinho e modo claro/escuro."
				}
			]
		},
		experience: {
			title: "Experiência & Educação",
			items: [
				{
					role: "Desenvolvimento de Software (CTeSP)",
					company: "Instituto Politécnico de Bragança (IPB) — Portugal",
					period: "2025 — Presente",
					description: "Focado em aprofundar conhecimentos em engenharia de software, algoritmos avançados e tecnologias emergentes no contexto europeu.",
					type: "education" as const,
				},
				{
					role: "Desenvolvedor Full Stack",
					company: "Freelance & Projetos Próprios",
					period: "2020 — Presente",
					description: "Desenvolvimento de plataformas SaaS, portais editoriais e apps mobile para clientes em Angola e Portugal. Stack principal: Java/Spring, Node.js, React.",
					type: "work" as const,
				},
				{
					role: "Técnico de Informática",
					company: "Colégio Angolano de Talatona — Angola",
					period: "2021 — 2025",
					description: "Responsável pelo suporte técnico, administração de servidores e manutenção da infraestrutura de rede da instituição.",
					type: "work" as const,
				},
				{
					role: "Gestão de Redes e Sistemas Informáticos",
					company: "Instituto Técnico Legislativo de Saúde (ITLS) — Angola",
					period: "2018 — 2021",
					description: "Formação técnica especializada em administração de sistemas, segurança de redes e configuração de infraestruturas enterprise.",
					type: "education" as const,
				},
				{
					role: "Professor de Informática",
					company: "Escola Técnica — Angola",
					period: "2021 — 2023",
					description: "Ensino de programação e redes a turmas de ensino técnico. Mais de 100 alunos formados em projetos educacionais.",
					type: "education" as const,
				},
			]
		},
	},
	en: {
		nav: {
			about: "About",
			skills: "Skills",
			projects: "Projects",
			experience: "Experience",
			contact: "Contact",
		},
		hero: {
			greeting: "Hello, I am",
			role: "Full Stack & Mobile Developer",
			cta: "View Projects",
			github: "GitHub",
			availableBadge: "Open to opportunities",
			tagline: "I build systems that scale. From robust APIs to fluid mobile apps.",
		},
		stats: [
			{ value: '3+', label: 'Years Exp.' },
			{ value: '5+', label: 'Projects' },
			{ value: '100+', label: 'Students' },
			{ value: '2', label: 'Countries' },
		],
		about: {
			title: "About Me",
			description: "Software development specialist, currently studying Software Development at IPB (Portugal). With a strong background in Network Management and IT Systems from ITLS (Angola), I focus on creating robust, scalable digital solutions with high-performance architecture.",
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
			education: {
				title: "Education & Mentorship",
				desc: "Teacher and mentor with experience teaching programming to 100+ students. Strong belief in the social impact of technology education.",
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
					tags: ["Flutter", "Dart", "Supabase", "Material 3", "In Development"],
					link: "#",
					github: "https://github.com/Ifafe/biometricoMovel",
					image: "/images/biometrico-preview.png",
					techDetails: "Real-time synchronization with Supabase, JWT authentication, and adaptive interface following Material Design 3 standards."
				},
				{
					title: "CvnetTec - Tech Store",
					description: "E-commerce platform specialized in mobile components and accessories. Full store with product catalogue, brand-based categories and shopping cart.",
					tags: ["Next.js", "TypeScript", "E-commerce", "TailwindCSS"],
					link: "https://cvnet-tec.vercel.app/",
					github: "#",
					image: "/images/cvnettec-preview.png",
					techDetails: "Online store with dynamic product catalogue, category and brand filters, shopping cart system and light/dark mode."
				}
			]
		},
		experience: {
			title: "Experience & Education",
			items: [
				{
					role: "Software Development Course",
					company: "Polytechnic Institute of Bragança (IPB) — Portugal",
					period: "2025 — Present",
					description: "Focused on deepening software engineering knowledge, advanced algorithms, and emerging technologies in the European context.",
					type: "education" as const,
				},
				{
					role: "Full Stack Developer",
					company: "Freelance & Personal Projects",
					period: "2020 — Present",
					description: "Development of SaaS platforms, editorial portals and mobile apps for clients in Angola and Portugal. Main stack: Java/Spring, Node.js, React.",
					type: "work" as const,
				},
				{
					role: "Computer Technician",
					company: "Colégio Angolano de Talatona — Angola",
					period: "2021 — 2025",
					description: "Responsible for technical support, server administration, and maintenance of the institution's network infrastructure.",
					type: "work" as const,
				},
				{
					role: "Network & IT Systems Management",
					company: "Technical Institute (ITLS) — Angola",
					period: "2018 — 2021",
					description: "Specialized technical training in systems administration, network security, and enterprise infrastructure configuration.",
					type: "education" as const,
				},
				{
					role: "Computer Science Teacher",
					company: "Technical School — Angola",
					period: "2021 — 2023",
					description: "Teaching programming and networking to technical students. Over 100 students trained in educational projects.",
					type: "education" as const,
				},
			]
		},
	}
} as const;
