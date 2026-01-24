export type Locale = 'pt' | 'en';

export const dictionaries = {
      pt: {
            hero: {
                  greeting: "Olá, eu sou",
                  role: "Desenvolvedor Full Stack & Mobile",
                  cta: "Ver Projetos",
                  github: "GitHub",
            },
            about: {
                  title: "Sobre Mim",
                  description: "Sou um desenvolvedor apaixonado por criar soluções que impactam pessoas. Com forte base em Java e Spring, expandi meus horizontes para o desenvolvimento Mobile com Flutter, sempre focando em performance e UX.",
            },
            skills: {
                  soft: "Soft Skills",
                  hard: "Hard Skills",
            },
            contact: {
                  title: "Contato",
                  email: "Email",
                  linkedin: "LinkedIn",
                  github: "GitHub",
            },
            footer: {
                  text: "Construído com React, Tailwind & amor por Flutter.",
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
                  title: "Projetos",
                  viewCode: "Ver Código",
                  viewLive: "Demo",
                  list: [
                        {
                              title: "SGEIKamba - Sistema de Gestão Escolar",
                              description: "Plataforma SaaS multi-tenant completa para gestão escolar com dashboard analítico, automação financeira, audit logging e internacionalização PT/EN.",
                              tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "SaaS"],
                              link: "https://sgeikamba.vercel.app/pt",
                              github: "https://github.com/Ifafe/SGEIkamba",
                              image: "/images/sgeikamba-preview.png"
                        }
                  ]
            }
      },
      en: {
            hero: {
                  greeting: "Hello, I am",
                  role: "Full Stack & Mobile Developer",
                  cta: "View Projects",
                  github: "GitHub",
            },
            about: {
                  title: "About Me",
                  description: "I am a developer passionate about creating solutions that impact people. With a strong background in Java and Spring, I expanded my horizons to Mobile development with Flutter, always focusing on performance and UX.",
            },
            skills: {
                  soft: "Soft Skills",
                  hard: "Hard Skills",
            },
            contact: {
                  title: "Contact",
                  email: "Email",
                  linkedin: "LinkedIn",
                  github: "GitHub",
            },
            footer: {
                  text: "Built with React, Tailwind & Flutter Love.",
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
                  title: "Projects",
                  viewCode: "View Code",
                  viewLive: "Live Demo",
                  list: [
                        {
                              title: "SGEIKamba - School Management System",
                              description: "Complete multi-tenant SaaS platform for school management with analytical dashboard, financial automation, audit logging, and PT/EN internationalization.",
                              tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "SaaS"],
                              link: "https://sgeikamba.vercel.app/pt",
                              github: "https://github.com/Ifafe/SGEIkamba",
                              image: "/images/sgeikamba-preview.png"
                        }
                  ]
            }
      }
} as const;
