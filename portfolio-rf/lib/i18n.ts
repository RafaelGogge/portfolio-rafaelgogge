export const languages = {
  "pt-BR": {
    name: "Português (Brasil)",
    flag: "🇧🇷",
  },
  "pt-PT": {
    name: "Português (Portugal)",
    flag: "🇵🇹",
  },
  en: {
    name: "English",
    flag: "🇺🇸",
  },
  es: {
    name: "Español",
    flag: "🇪🇸",
  },
} as const;

export type Language = keyof typeof languages;

export const translations = {
  "pt-BR": {
    // Navigation
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.skills": "Habilidades",
    "nav.education": "Formação",
    "nav.courses": "Cursos",
    "nav.projects": "Projetos",
    "nav.experience": "Experiência",
    "nav.contact": "Contato",

    // Hero Section
    "hero.role": "Desenvolvedor Frontend",
    "hero.greeting": "Olá, eu sou",
    "hero.description":
      "Desenvolvedor Front-End iniciante na SESA, criando soluções digitais inovadoras para a saúde pública com foco em acessibilidade, usabilidade e impacto social.",
    "hero.viewProjects": "Ver Projetos",
    "hero.contact": "Contato",

    // About Section
    "about.title": "Sobre Mim",
    "about.subtitle": "Minha trajetória e experiência",
    "about.description1":
      "Olá! Sou Rafael Vieira Gogge, desenvolvedor front-end em formação e apaixonado por criar soluções digitais com propósito. Atualmente atuo na Secretaria de Estado da Saúde do Espírito Santo (SESA), onde contribuo para o desenvolvimento de sistemas voltados à comunicação institucional, visualização de dados públicos e à transformação digital de serviços.",
    "about.description2":
      "Também atuo como desenvolvedor freelancer, criando projetos personalizados com foco em usabilidade, acessibilidade e automação — desde bots e quizzes até sistemas web completos. Sou graduando em Análise e Desenvolvimento de Sistemas pelo Centro Universitário Salesiano – UniSales e também curso Gestão da Tecnologia da Informação pela Multivix, o que me permite unir visão estratégica de TI com prática técnica no desenvolvimento.",
    "about.description3":
      "Minha trajetória começou na área administrativa, em ambientes públicos e privados, o que me proporcionou uma visão sistêmica, foco em processos e habilidade de comunicação — competências que hoje aplico diretamente na tecnologia. Tenho experiência com JavaScript, HTML, CSS, Bootstrap, Tailwind e Git, além de familiaridade com Python, Django e ferramentas de inteligência artificial. Nos meus projetos pessoais e profissionais, procuro sempre unir tecnologia, acessibilidade e impacto social. Estou em constante evolução, com o objetivo de me consolidar como desenvolvedor front-end e explorar ainda mais o potencial da IA aplicada ao desenvolvimento.",
    "about.name": "Nome",
    "about.birth": "Nascimento",
    "about.location": "Localização",
    "about.linkedin": "LinkedIn",

    // Skills Section
    "skills.title": "Áreas de Atuação Técnica",
    "skills.subtitle": "Minhas competências organizadas por especialidade",
    "skills.frontend": "Front-End",
    "skills.backend": "Back-End",
    "skills.database": "Banco de Dados",
    "skills.automation": "Automação & Cloud",
    "skills.frontend.description":
      "Interfaces modernas, acessíveis e responsivas",
    "skills.backend.description":
      "APIs, regras de negócio e sistemas dinâmicos",
    "skills.database.description": "Modelagem relacional e integração de dados",
    "skills.automation.description": "Automação de processos e infraestrutura",

    // Education Section
    "education.title": "Formação Acadêmica",
    "education.subtitle": "Minha jornada de aprendizado acadêmica",
    "education.ads": "Análise e Desenvolvimento de Sistemas",
    "education.admin": "Administração",
    "education.institution": "Centro Universitário Salesiano (UniSales)",
    "education.completed": "Concluído",
    "education.inProgress": "Em andamento",
    "education.suspended": "Trancado",
    "education.subjects": "Disciplinas:",
    "education.learnings": "Principais Aprendizados:",

    // Complementary Courses Section
    "courses.title": "Cursos Complementares",
    "courses.subtitle": "Aperfeiçoamento técnico e profissional",
    "courses.duration": "Duração",
    "courses.certificate": "Certificado",
    "courses.status": "Status",
    "courses.completed": "Concluído",
    "courses.inProgress": "Em andamento",
    "courses.hours": "horas",

    // Projects Section
    "projects.title": "Projetos em Destaque",
    "projects.subtitle": "Alguns dos meus trabalhos recentes",
    "projects.liveDemo": "Demo ao Vivo",
    "projects.code": "Código",
    "projects.securitypass.title": "SecurityPass Pro",
    "projects.securitypass.description":
      "Sistema avançado para geração e análise de senhas seguras com interface moderna e suporte a PWA.",
    "projects.events.title": "Painel de Eventos SSVS",
    "projects.events.description":
      "Painel institucional dinâmico para exibição de eventos da Subsecretaria de Vigilância em Saúde.",
    "projects.wiki.title": "Wiki Institucional SESA",
    "projects.wiki.description":
      "Plataforma colaborativa de gestão do conhecimento com perfis de acesso público e privado.",
    "projects.unilab.title":
      "UniLab - Sistema Automatizado de Gerenciamento de Horários para Agendamento de Laboratórios",
    "projects.unilab.description":
      "Plataforma educacional completa com sistema de agendamento, gestão de recursos e automação de processos para laboratório universitário, desenvolvida para professores, funcionários e estudantes. Login de administrador: admin | Senha: admin",
    "projects.quiz1.title": "Super Quiz Interativo",
    "projects.quiz1.description":
      "Quiz gamificado voltado para revisão da disciplina de Qualidade de Software.",
    "projects.quiz2.title": "Quiz Master Web Service",
    "projects.quiz2.description":
      "Quiz temático focado em conceitos de Web Services e APIs (REST, SOAP, HTTP).",

    // Experience Section
    "experience.title": "Experiência Profissional",
    "experience.subtitle": "Minha trajetória profissional",
    "experience.current": "Presente",
    "experience.freelancer.title": "Desenvolvedor Freelancer",
    "experience.freelancer.company": "Desenvolvedor Front-end Remoto – Brasil",
    "experience.freelancer.period": "Ago 2024 - Presente",
    "experience.freelancer.description":
      "Desenvolvimento de soluções web autorais com foco em acessibilidade, usabilidade e impacto real, utilizando JavaScript, Python, HTML5, CSS3, Bootstrap, Tailwind CSS, N8N, Github Copilot e ferramentas de IA. Desenvolvi quizzes interativos, como o Super Quiz de Qualidade de Software e o Quiz Master Web Service, com lógica condicional, controle de pontuação e feedback visual. Criação do UniLab, sistema acadêmico completo para agendamento de laboratórios e envio de justificativas, com autenticação, formulários dinâmicos e interface administrativa intuitiva. Desenvolvimento inicial do UniChat com N8N, bot no Telegram integrado ao UniLab, permitindo aos usuários consultar reservas, prazos e informações diretamente pelo aplicativo, ampliando o acesso e a eficiência do sistema.",
    "experience.sesa.title": "Desenvolvedor Front-end",
    "experience.sesa.company":
      "Secretaria de Estado da Saúde do Espírito Santo - SESA (terceirizado via MGS)",
    "experience.sesa.period": "Fev 2025 - Presente",
    "experience.sesa.description":
      "Desenvolvimento Front-end de sistemas internos voltados à comunicação institucional da Secretaria de Estado da Saúde do Espírito Santo (SESA) e da Subsecretaria de Vigilância em Saúde (SSVS), utilizando JavaScript, HTML5, CSS3, Bootstrap, Tailwind, Python, PostgreSQL, Django, Git, Gitlab e Github. Criação do Painel de Eventos da Subsecretaria de Vigilância em Saúde, plataforma dinâmica de exibição de eventos institucionais com filtros interativos, personalização visual e geração de relatórios em tempo real. Modernização da Wiki Institucional da SESA, com foco em usabilidade, acessibilidade e organização de conteúdo colaborativo, facilitando o compartilhamento de documentos, tutoriais e processos internos entre servidores.",
    "experience.alliance.title": "Supervisor de Manutenção Condominial",
    "experience.alliance.company": "Alliance Gestão e Tecnologia LTDA",
    "experience.alliance.period": "Abr 2023 - Abr 2025",
    "experience.alliance.description":
      "Gestão operacional de condomínios, controle financeiro, atendimento ao cliente e coordenação de serviços programados utilizando Excel e plataformas especializadas.",

    // Contact Section
    "contact.title": "Entre em Contato",
    "contact.subtitle": "Vamos trabalhar juntos",
    "contact.info": "Informações de Contato",
    "contact.email": "rafa.gogge@gmail.com",
    "contact.location": "Vitória, ES - Brasil",
    "contact.form.title": "Envie uma mensagem",
    "contact.form.namePlaceholder": "SEU NOME",
    "contact.form.emailPlaceholder": "SEU E-MAIL",
    "contact.form.subjectPlaceholder": "ASSUNTO",
    "contact.form.messagePlaceholder": "DIGITE SUA MENSAGEM",
    "contact.form.submit": "Enviar Mensagem",
    "contact.form.sending": "Enviando...",
    "contact.form.successMessage":
      "Mensagem enviada com sucesso! Entrarei em contato em breve.",
    "contact.form.errorMessage":
      "Houve um problema. Tente novamente mais tarde.",
    "contact.form.validation.nameRequired": "O nome é obrigatório.",
    "contact.form.validation.emailRequired": "O email é obrigatório.",
    "contact.form.validation.emailInvalid": "Formato de email inválido.",
    "contact.form.validation.subjectRequired": "O assunto é obrigatório.",
    "contact.form.validation.messageRequired": "A mensagem é obrigatória.",

    // Accessibility
    "accessibility.title": "Acessibilidade",
    "accessibility.increaseFontSize": "Aumentar fonte",
    "accessibility.decreaseFontSize": "Diminuir fonte",
    "accessibility.toggleContrast": "Alto contraste",
    "accessibility.reduceMotion": "Reduzir animações",
    "accessibility.screenReader": "Leitor de tela",
    "accessibility.fontSize": "Tamanho da fonte:",
    "accessibility.active": "Ativo",
    "accessibility.inactive": "Inativo",
    "accessibility.reset": "Restaurar padrão",

    // Theme
    "theme.light": "Modo claro",
    "theme.dark": "Modo escuro",
    "theme.system": "Seguir sistema",

    // Footer
    "footer.rights": "Todos os direitos reservados.",
    "footer.madeWith": "Feito com",
    "footer.by": "por",

    // Common
    "common.email": "Email",
    "common.github": "GitHub",
    "common.linkedin": "LinkedIn",
    "common.location": "Localização",
    "common.period": "Período",
    "common.technologies": "Tecnologias",
    "common.loading": "Carregando...",
    "common.error": "Erro",
    "common.success": "Sucesso",
    "common.current": "Atual",
    "common.code": "Código",
    "common.liveDemo": "Demo ao Vivo",
    "common.webDevelopment": "Desenvolvimento Web",
    "common.noExperienceAvailable": "Nenhuma experiência disponível.",
    "footer.tagline": "Criando soluções digitais inovadoras",
    "hero.scrollDown": "scroll --down",

    // Terminal
    "terminal.help":
      "Comandos disponíveis: help, clear, whoami, skills, projects, contact, matrix, hack, exit",
    "terminal.whoami": "Rafael Vieira Gogge - Desenvolvedor Frontend",
    "terminal.skills":
      "Habilidades: React, TypeScript, Next.js, Node.js, Python, HTML5, CSS3, JavaScript",
    "terminal.projects":
      "Projetos: UniLab, SecurityPass Pro, Wiki SESA, Quiz Master, e mais...",
    "terminal.contact":
      "Email: rafaelgogge@gmail.com | LinkedIn: linkedin.com/in/rafaelgogge",
    "terminal.matrix": "Entrando na Matrix... 🔴💊",
    "terminal.hack": "Hackeando o mainframe... Acesso autorizado! 🔓",
    "terminal.exit": "Sessão do terminal encerrada.",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.courses": "Courses",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    // Hero Section
    "hero.role": "Frontend Developer",
    "hero.greeting": "Hello, I am",
    "hero.description":
      "Junior Front-End Developer at SESA, creating innovative digital solutions for public health with focus on accessibility, usability and social impact.",
    "hero.viewProjects": "View Projects",
    "hero.contact": "Contact",

    // About Section
    "about.title": "About Me",
    "about.subtitle": "My journey and experience",
    "about.description1":
      "Hello! I am Rafael Vieira Gogge, a front-end developer in training and passionate about creating digital solutions with purpose. Currently I work at the State Health Department of Espírito Santo (SESA), where I contribute to the development of systems focused on institutional communication, public data visualization and digital transformation of services.",
    "about.description2":
      "I also work as a freelance developer, creating customized projects focused on usability, accessibility and automation — from bots and quizzes to complete web systems. I am studying Systems Analysis and Development at Centro Universitário Salesiano – UniSales and also studying Information Technology Management at Multivix, which allows me to combine strategic IT vision with technical practice in development.",
    "about.description3":
      "My journey began in the administrative area, in public and private environments, which provided me with a systemic vision, focus on processes and communication skills — competencies that I now apply directly in technology. I have experience with JavaScript, HTML, CSS, Bootstrap, Tailwind and Git, as well as familiarity with Python, Django and artificial intelligence tools. In my personal and professional projects, I always seek to unite technology, accessibility and social impact. I am constantly evolving, with the goal of consolidating myself as a front-end developer and exploring even more the potential of AI applied to development.",
    "about.name": "Name",
    "about.birth": "Birth",
    "about.location": "Location",
    "about.linkedin": "LinkedIn",

    // Skills Section
    "skills.title": "Technical Areas of Expertise",
    "skills.subtitle": "My competencies organized by specialty",
    "skills.frontend": "Front-End",
    "skills.backend": "Back-End",
    "skills.database": "Database",
    "skills.automation": "Automation & Cloud",
    "skills.frontend.description":
      "Modern, accessible and responsive interfaces",
    "skills.backend.description": "APIs, business rules and dynamic systems",
    "skills.database.description": "Relational modeling and data integration",
    "skills.automation.description": "Process automation and infrastructure",

    // Education Section
    "education.title": "Academic Background",
    "education.subtitle": "My learning journey",
    "education.ads": "Systems Analysis and Development",
    "education.admin": "Administration",
    "education.institution": "Centro Universitário Salesiano (UniSales)",
    "education.completed": "Completed",
    "education.inProgress": "In Progress",
    "education.suspended": "Suspended",
    "education.subjects": "Subjects:",
    "education.learnings": "Key Learnings:",

    // Complementary Courses Section
    "courses.title": "Complementary Courses",
    "courses.subtitle": "Technical and professional development",
    "courses.duration": "Duration",
    "courses.certificate": "Certificate",
    "courses.status": "Status",
    "courses.completed": "Completed",
    "courses.inProgress": "In Progress",
    "courses.hours": "hours",

    // Projects Section
    "projects.title": "Featured Projects",
    "projects.subtitle": "Some of my recent work",
    "projects.liveDemo": "Live Demo",
    "projects.code": "Code",
    "projects.securitypass.title": "SecurityPass Pro",
    "projects.securitypass.description":
      "Advanced system for generating and analyzing secure passwords with modern interface and PWA support.",
    "projects.events.title": "SSVS Events Panel",
    "projects.events.description":
      "Dynamic institutional panel for displaying events from the Health Surveillance Subsecretariat.",
    "projects.wiki.title": "SESA Institutional Wiki",
    "projects.wiki.description":
      "Collaborative knowledge management platform with public and private access profiles.",
    "projects.unilab.title":
      "UniLab - Automated Schedule Management System for Laboratory Booking",
    "projects.unilab.description":
      "Complete educational platform with scheduling system, resource management and process automation for university laboratory, developed for teachers, staff and students. Admin login: admin | Password: admin",
    "projects.quiz1.title": "Interactive Super Quiz",
    "projects.quiz1.description":
      "Gamified quiz for reviewing Software Quality discipline.",
    "projects.quiz2.title": "Quiz Master Web Service",
    "projects.quiz2.description":
      "Thematic quiz focused on Web Services and APIs concepts (REST, SOAP, HTTP).",

    // Experience Section
    "experience.title": "Professional Experience",
    "experience.subtitle": "My professional journey",
    "experience.current": "Present",
    "experience.freelancer.title": "Freelance Developer",
    "experience.freelancer.company": "Remote Front-end Developer – Brazil",
    "experience.freelancer.period": "Aug 2024 - Present",
    "experience.freelancer.description":
      "Development of original web solutions with focus on accessibility, usability and real impact, using JavaScript, Python, HTML5, CSS3, Bootstrap, Tailwind CSS, N8N, Github Copilot and AI tools. Developed interactive quizzes, such as Software Quality Super Quiz and Quiz Master Web Service, with conditional logic, scoring control and visual feedback. Created UniLab, complete academic system for laboratory scheduling and justification submission, with authentication, dynamic forms and intuitive administrative interface. Initial development of UniChat with N8N, Telegram bot integrated with UniLab, allowing users to check reservations, deadlines and information directly through the app, expanding system access and efficiency.",
    "experience.sesa.title": "Front-end Developer",
    "experience.sesa.company":
      "State Health Department of Espírito Santo - SESA (outsourced via MGS)",
    "experience.sesa.period": "Feb 2025 - Present",
    "experience.sesa.description":
      "Front-end development of internal systems focused on institutional communication of State Health Department of Espírito Santo (SESA) and Health Surveillance Sub-secretariat (SSVS), using JavaScript, HTML5, CSS3, Bootstrap, Tailwind, Python, PostgreSQL, Django, Git, Gitlab and Github. Creation of Health Surveillance Sub-secretariat Events Panel, dynamic platform for displaying institutional events with interactive filters, visual customization and real-time report generation. Modernization of SESA Institutional Wiki, focused on usability, accessibility and collaborative content organization, facilitating document, tutorial and internal process sharing among civil servants.",
    "experience.alliance.title": "Condominium Maintenance Supervisor",
    "experience.alliance.company": "Alliance Management and Technology LTDA",
    "experience.alliance.period": "Apr 2023 - Apr 2025",
    "experience.alliance.description":
      "Operational management of condominiums, financial control, customer service and coordination of scheduled services using Excel and specialized platforms.",

    // Contact Section
    "contact.title": "Get In Touch",
    "contact.subtitle": "Let's work together",
    "contact.info": "Contact Information",
    "contact.email": "rafa.gogge@gmail.com",
    "contact.location": "Vitória, ES - Brazil",
    "contact.form.title": "Send a message",
    "contact.form.namePlaceholder": "YOUR NAME",
    "contact.form.emailPlaceholder": "YOUR EMAIL",
    "contact.form.subjectPlaceholder": "SUBJECT",
    "contact.form.messagePlaceholder": "TYPE YOUR MESSAGE",
    "contact.form.submit": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.form.successMessage":
      "Message sent successfully! I will get back to you soon.",
    "contact.form.errorMessage": "There was a problem. Please try again later.",
    "contact.form.validation.nameRequired": "Name is required.",
    "contact.form.validation.emailRequired": "Email is required.",
    "contact.form.validation.emailInvalid": "Invalid email format.",
    "contact.form.validation.subjectRequired": "Subject is required.",
    "contact.form.validation.messageRequired": "Message is required.",

    // Accessibility
    "accessibility.title": "Accessibility",
    "accessibility.increaseFontSize": "Increase font size",
    "accessibility.decreaseFontSize": "Decrease font size",
    "accessibility.toggleContrast": "High contrast",
    "accessibility.reduceMotion": "Reduce animations",
    "accessibility.screenReader": "Screen reader",
    "accessibility.fontSize": "Font size:",
    "accessibility.active": "Active",
    "accessibility.inactive": "Inactive",
    "accessibility.reset": "Reset to default",

    // Theme
    "theme.light": "Light mode",
    "theme.dark": "Dark mode",
    "theme.system": "Follow system",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.madeWith": "Made with",
    "footer.by": "by",

    // Common
    "common.email": "Email",
    "common.github": "GitHub",
    "common.linkedin": "LinkedIn",
    "common.location": "Location",
    "common.period": "Period",
    "common.technologies": "Technologies",
    "common.loading": "Loading...",
    "common.error": "Error",
    "common.success": "Success",
    "common.current": "Current",
    "common.code": "Code",
    "common.liveDemo": "Live Demo",
    "common.webDevelopment": "Web Development",
    "common.noExperienceAvailable": "No experience available.",
    "footer.tagline": "Creating innovative digital solutions",
    "hero.scrollDown": "scroll --down",

    // Terminal
    "terminal.help":
      "Available commands: help, clear, whoami, skills, projects, contact, matrix, hack, exit",
    "terminal.whoami": "Rafael Vieira Gogge - Frontend Developer",
    "terminal.skills":
      "Skills: React, TypeScript, Next.js, Node.js, Python, HTML5, CSS3, JavaScript",
    "terminal.projects":
      "Projects: UniLab, SecurityPass Pro, Wiki SESA, Quiz Master, and more...",
    "terminal.contact":
      "Email: rafaelgogge@gmail.com | LinkedIn: linkedin.com/in/rafaelgogge",
    "terminal.matrix": "Entering the Matrix... 🔴💊",
    "terminal.hack": "Hacking the mainframe... Access granted! 🔓",
    "terminal.exit": "Terminal session ended.",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Acerca",
    "nav.skills": "Habilidades",
    "nav.education": "Formação",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.contact": "Contacto",
    "nav.resume": "Currículum",

    // Hero Section
    "hero.role": "Desarrollador Front-End & Fullstack Júnior",
    "hero.greeting": "Hola, soy",
    "hero.description":
      "Desarrollador Front-End júnior en SESA, creando soluciones digitales innovadoras para la salud pública con enfoque en accesibilidad, usabilidad e impacto social.",
    "hero.viewProjects": "Ver Proyectos",
    "hero.contact": "Contacto",

    // About Section
    "about.title": "Sobre Mí",
    "about.subtitle": "Mi trayectoria y experiencia",
    "about.available": "Disponible para oportunidades",
    "about.downloadResume": "Descargar Currículum",
    "about.description1":
      "¡Hola! Soy Rafael Vieira Gogge, desarrollador front-end en formación y apasionado por crear soluciones digitales con propósito. Actualmente trabajo en la Secretaría de Estado de Salud de Espírito Santo (SESA), donde contribuyo al desarrollo de sistemas enfocados en comunicación institucional, visualización de datos públicos y transformación digital de servicios.",
    "about.description2":
      "También trabajo como desarrollador freelancer, creando proyectos personalizados con enfoque en usabilidad, accesibilidad y automatización — desde bots y quizzes hasta sistemas web completos. Soy estudiante de Análisis y Desarrollo de Sistemas en el Centro Universitário Salesiano – UniSales y también curso Gestión de Tecnología de la Información en Multivix, lo que me permite unir visión estratégica de TI con práctica técnica en desarrollo.",
    "about.description3":
      "Mi trayectoria comenzó en el área administrativa, en ambientes públicos y privados, lo que me proporcionó una visión sistémica, enfoque en procesos e habilidad de comunicación — competencias que ahora aplico directamente en tecnología. Tengo experiencia com
