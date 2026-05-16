'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type Language = 'en' | 'pt' | 'es';

type Dictionary = {
  [key: string]: string;
};

const dictionaries: Record<Language, Dictionary> = {
  en: {
    // Home
    "worldwide": "Worldwide",
    "available": "Available for work",
    "hello": "Hello, everyone! ",
    "welcome": "Welcome to my website. ",
    "contactMe": "Contact me ",
    "inquiries": "for any inquiries or to discuss potential opportunities.",
    "aboutLink": "About",
    "projectsLink": "Projects",
    "skillsLink": "Skills",
    "downloadResume": "Download Resume",
    
    // Global
    "backHome": "Back to Home",
    "projects": "Projects",
    
    // Skills
    "skillsTitle": "Skills & Expertise",
    "growthAnalytics": "Growth & Analytics",
    "growthAnalyticsText": "Growth Engineering, Process Automation, Conversion Rate Optimization (CRO), Technical SEO, Data Extraction (Web Scraping), Metrics Analysis.",
    "documentationProcesses": "Documentation & Processes",
    "documentationProcessesText": "Organization of Corporate Wikis, Development of Operational Playbooks, Business Process Mapping, API Documentation.",
    "technologiesFrameworks": "Technologies & Frameworks",
    "technologiesFrameworksText": "Python (Selenium, PyAutoGUI), React.js, Next.js, TypeScript, Node.js, RESTful APIs, SQL/NoSQL.",
    "managementTools": "Management Tools",
    "managementToolsText": "Notion, ClickUp, Trello, Jira, Google Workspace, GitHub.",
    "businessSystems": "Business Systems",
    "businessSystemsText": "Fundamentals of CRM (Customer Relationship Management) and ERP (Enterprise Resource Planning).",
    
    // About
    "aboutMe": "About me",
    "aboutText": "Hello, my name is Vinicius. I'm an enthusiast of the technology advancements that the world is experiencing. So, I'm looking for a way to understand why this happens and how to create it. I'm a person who likes to learn new things and I'm always looking for new challenges.",
    "education": "Education",
    "educationText": "Student of System Analysis and Development at Cesar School.",
    "educationDate": "Recife, 2024-2026.",
    "experiences": "Experiences",
    "freelancer": "Freelancer Developer",
    "freelancerDesc1": "Developed and maintained web applications using React and Node.js.",
    "freelancerDesc2": "Collaborated with a team of designers and developers to create innovative and user-friendly web applications.",
    "freelancerDesc3": "Tested and debugged web applications to ensure they were free of errors and met the highest standards of quality.",
    "freelancerDate": "Anywhere, 2025 - Present",
    
    "itAssistant": "IT Assistant Systems Support and Integration",
    "itAssistantDesc1": "Provided first-level technical support via Chat/WhatsApp, email, and phone, focusing on accounting systems and government platforms (e-CAC, NFe, SCI).",
    "itAssistantDesc2": "Developed internal process documentation, standardizing service flows and operational routines aligned with compliance and accountability.",
    "itAssistantDesc3": "Developed automations in Python for repetitive administrative tasks, increasing team efficiency.",
    "itAssistantDate": "Consultivos Assessores e Contadores, 2024",
    
    "fullStack": "Full Stack Developer",
    "fullStackDesc1": "Developed and maintained web applications using Dart and Flutter.",
    "fullStackDate": "Quiz10 Entretenimento LTDA, 2023-2024",
    
    "techResidency": "Technological Residency",
    "techResidencyDesc1": "Built features using Nextjs, Tailwind, ensuring responsive and intuitive interfaces.",
    "techResidencyDesc2": "Partnered with resident companies (Pague Bem Brasil and Mesa Mobile Thinking) to solve core business challenges within the Tech Park ecosystem.",
    "techResidencyDesc3": "Actively participated in high-performance teams using Scrum/Kanban to ensure continuous and efficient delivery.",
    "techResidencyDate": "Digital Port, 2024-2026",

    // Work
    "viewGithub": "View on GitHub",
    "website": "Website",
    "privateCode": "🔒 Private Code",
  },
  pt: {
    // Home
    "worldwide": "Mundial",
    "available": "Disponível para trabalho",
    "hello": "Olá, pessoal! ",
    "welcome": "Bem-vindo ao meu site. ",
    "contactMe": "Contate-me ",
    "inquiries": "para qualquer dúvida ou para discutir possíveis oportunidades.",
    "aboutLink": "Sobre",
    "projectsLink": "Projetos",
    "skillsLink": "Habilidades",
    "downloadResume": "Baixar Currículo",
    
    // Global
    "backHome": "Voltar para o Início",
    "projects": "Projetos",
    
    // Skills
    "skillsTitle": "Habilidades & Expertise",
    "growthAnalytics": "Crescimento & Análise",
    "growthAnalyticsText": "Engenharia de Crescimento, Automação de Processos, Otimização de Taxa de Conversão (CRO), SEO Técnico, Extração de Dados (Web Scraping), Análise de Métricas.",
    "documentationProcesses": "Documentação & Processos",
    "documentationProcessesText": "Organização de Wikis Corporativas, Desenvolvimento de Manuais Operacionais, Mapeamento de Processos de Negócio, Documentação de APIs.",
    "technologiesFrameworks": "Tecnologias & Frameworks",
    "technologiesFrameworksText": "Python (Selenium, PyAutoGUI), React.js, Next.js, TypeScript, Node.js, APIs RESTful, SQL/NoSQL.",
    "managementTools": "Ferramentas de Gestão",
    "managementToolsText": "Notion, ClickUp, Trello, Jira, Google Workspace, GitHub.",
    "businessSystems": "Sistemas de Negócio",
    "businessSystemsText": "Fundamentos de CRM (Customer Relationship Management) e ERP (Enterprise Resource Planning).",
    
    // About
    "aboutMe": "Sobre mim",
    "aboutText": "Olá, meu nome é Vinicius. Sou um entusiasta dos avanços tecnológicos que o mundo está vivenciando. Portanto, procuro uma maneira de entender por que isso acontece e como criá-lo. Sou uma pessoa que gosta de aprender coisas novas e estou sempre em busca de novos desafios.",
    "education": "Educação",
    "educationText": "Estudante de Análise e Desenvolvimento de Sistemas na Cesar School.",
    "educationDate": "Recife, 2024-2026.",
    "experiences": "Experiências",
    "freelancer": "Desenvolvedor Freelancer",
    "freelancerDesc1": "Desenvolvimento e manutenção de aplicações web utilizando React e Node.js.",
    "freelancerDesc2": "Colaboração com uma equipe de designers e desenvolvedores para criar aplicações web inovadoras e amigáveis.",
    "freelancerDesc3": "Testes e depuração de aplicações web para garantir que estivessem livres de erros e atendessem aos mais altos padrões de qualidade.",
    "freelancerDate": "Qualquer lugar, 2025 - Presente",
    
    "itAssistant": "Assistente de TI - Suporte e Integração de Sistemas",
    "itAssistantDesc1": "Suporte técnico de primeiro nível via Chat/WhatsApp, e-mail e telefone, com foco em sistemas contábeis e plataformas governamentais (e-CAC, NFe, SCI).",
    "itAssistantDesc2": "Desenvolvimento de documentação de processos internos, padronizando fluxos de serviço e rotinas operacionais alinhadas com conformidade e responsabilidade.",
    "itAssistantDesc3": "Desenvolvimento de automações em Python para tarefas administrativas repetitivas, aumentando a eficiência da equipe.",
    "itAssistantDate": "Consultivos Assessores e Contadores, 2024",
    
    "fullStack": "Desenvolvedor Full Stack",
    "fullStackDesc1": "Desenvolvimento e manutenção de aplicações web e mobile utilizando Dart e Flutter.",
    "fullStackDate": "Quiz10 Entretenimento LTDA, 2023-2024",
    
    "techResidency": "Residência Tecnológica",
    "techResidencyDesc1": "Construção de recursos usando Nextjs, Tailwind, garantindo interfaces responsivas e intuitivas.",
    "techResidencyDesc2": "Parceria com empresas residentes (Pague Bem Brasil e Mesa Mobile Thinking) para resolver desafios de negócios dentro do ecossistema do Porto Digital.",
    "techResidencyDesc3": "Participação ativa em equipes de alto desempenho usando Scrum/Kanban para garantir entrega contínua e eficiente.",
    "techResidencyDate": "Porto Digital, 2024-2026",

    // Work
    "viewGithub": "Ver no GitHub",
    "website": "Site",
    "privateCode": "🔒 Código Privado",
  },
  es: {
    // Home
    "worldwide": "Mundial",
    "available": "Disponible para trabajar",
    "hello": "¡Hola a todos! ",
    "welcome": "Bienvenido a mi sitio web. ",
    "contactMe": "Contáctame ",
    "inquiries": "para cualquier consulta o para discutir posibles oportunidades.",
    "aboutLink": "Sobre mí",
    "projectsLink": "Proyectos",
    "skillsLink": "Habilidades",
    "downloadResume": "Descargar Currículum",
    
    // Global
    "backHome": "Volver al Inicio",
    "projects": "Proyectos",
    
    // Skills
    "skillsTitle": "Habilidades & Experiencia",
    "growthAnalytics": "Crecimiento & Análisis",
    "growthAnalyticsText": "Ingeniería de Crecimiento, Automatización de Procesos, Optimización de Tasa de Conversión (CRO), SEO Técnico, Extracción de Datos (Web Scraping), Análisis de Métricas.",
    "documentationProcesses": "Documentación & Procesos",
    "documentationProcessesText": "Organización de Wikis Corporativas, Desarrollo de Manuales Operativos, Mapeo de Procesos de Negocio, Documentación de APIs.",
    "technologiesFrameworks": "Tecnologías & Frameworks",
    "technologiesFrameworksText": "Python (Selenium, PyAutoGUI), React.js, Next.js, TypeScript, Node.js, APIs RESTful, SQL/NoSQL.",
    "managementTools": "Herramientas de Gestión",
    "managementToolsText": "Notion, Trello, Jira, Google Workspace, GitHub.",
    "businessSystems": "Sistemas de Negocio",
    "businessSystemsText": "Fundamentos de CRM (Customer Relationship Management) y ERP (Enterprise Resource Planning).",
    
    // About
    "aboutMe": "Sobre mí",
    "aboutText": "Hola, mi nombre es Vinicius. Soy un entusiasta de los avances tecnológicos que está experimentando el mundo. Por lo tanto, busco una manera de entender por qué sucede esto y cómo crearlo. Soy una persona a la que le gusta aprender cosas nuevas y siempre estoy buscando nuevos desafíos.",
    "education": "Educación",
    "educationText": "Estudiante de Análisis y Desarrollo de Sistemas en Cesar School.",
    "educationDate": "Recife, 2024-2026.",
    "experiences": "Experiencias",
    "freelancer": "Desarrollador Freelancer",
    "freelancerDesc1": "Desarrollo y mantenimiento de aplicaciones web usando React y Node.js.",
    "freelancerDesc2": "Colaboración con un equipo de diseñadores y desarrolladores para crear aplicaciones web innovadoras y fáciles de usar.",
    "freelancerDesc3": "Pruebas y depuración de aplicaciones web para garantizar que estén libres de errores y cumplan con los más altos estándares de calidad.",
    "freelancerDate": "Cualquier lugar, 2025 - Presente",
    
    "itAssistant": "Asistente de TI - Soporte e Integración de Sistemas",
    "itAssistantDesc1": "Brindé soporte técnico de primer nivel a través de Chat/WhatsApp, correo electrónico y teléfono, centrándome en sistemas contables y plataformas gubernamentales (e-CAC, NFe, SCI).",
    "itAssistantDesc2": "Desarrollo de documentación de procesos internos, estandarizando flujos de servicio y rutinas operativas alineadas con el cumplimiento y la responsabilidad.",
    "itAssistantDesc3": "Desarrollo de automatizaciones en Python para tareas administrativas repetitivas, incrementando la eficiencia del equipo.",
    "itAssistantDate": "Consultivos Assessores e Contadores, 2024",
    
    "fullStack": "Desarrollador Full Stack",
    "fullStackDesc1": "Desarrollo y mantenimiento de aplicaciones web y móviles utilizando Dart y Flutter.",
    "fullStackDate": "Quiz10 Entretenimento LTDA, 2023-2024",
    
    "techResidency": "Residencia Tecnológica",
    "techResidencyDesc1": "Construcción de funciones usando Nextjs, Tailwind, garantizando interfaces receptivas e intuitivas.",
    "techResidencyDesc2": "Asociación con empresas residentes (Pague Bem Brasil y Mesa Mobile Thinking) para resolver desafíos comerciales centrales dentro del ecosistema del Parque Tecnológico.",
    "techResidencyDesc3": "Participación activa en equipos de alto rendimiento utilizando Scrum/Kanban para asegurar una entrega continua y eficiente.",
    "techResidencyDate": "Digital Port, 2024-2026",

    // Work
    "viewGithub": "Ver en GitHub",
    "website": "Sitio Web",
    "privateCode": "🔒 Código Privado",
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load saved language from localStorage if it exists
    const savedLang = localStorage.getItem('portfolio-language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'pt' || savedLang === 'es')) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('portfolio-language', lang);
  };

  const t = (key: string): string => {
    if (!mounted) return dictionaries['en'][key] || key; // Prevent hydration mismatch by defaulting to English initially on server
    return dictionaries[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
