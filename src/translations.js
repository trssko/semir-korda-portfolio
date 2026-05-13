export const translations = {
  en: {
    nav: {
      links: ['About', 'Experience', 'Skills', 'Projects', 'Contact'],
      openToWork: 'Open to work',
    },
    hero: {
      greeting: "Hello, world. I'm",
      roles: ['Software Engineer', 'Full-Stack Developer', 'Open to Full-Time Roles'],
      bio: 'Software engineering student from Sarajevo with hands-on experience in full-stack development, space-grade infrastructure, and CI/CD pipelines.',
      viewWork: 'View My Work',
      downloadCv: 'Download CV',
    },
    about: {
      label: '01. About',
      heading: 'About Me',
      quickFacts: 'Quick Facts',
      facts: [
        'Sarajevo, Bosnia & Herzegovina',
        'Faculty of Information Technologies, Univ. of Mostar',
        'Zoran Djindjic Programme Alumni',
        'Jericho Foundation Scholarship Holder',
        'Bosnian (native), English (B2), German (A1)',
        'Calisthenics, Hiking, Photography, Football',
      ],
      p1: "I'm a 4th-year Software Engineering student at the Faculty of Information Technologies, University \"Džemal Bijedić\" of Mostar. Over the past years I've gone from writing my first lines of Java to shipping production-grade software for satellite mission control systems — and I'm just getting started.",
      p2: {
        t1: 'In 2025 I had the privilege of interning at ',
        t2: ' in Darmstadt, Germany, as part of the prestigious ',
        t3: ' — one of up to 65 recipients annually from the Western Balkans. There I worked on SCOS 2000 mission control systems supporting ESA missions including Cryosat, Galileo, Sentinel, and Biomass, containerising components with Docker and building CI/CD pipelines on GitLab.',
      },
      p3: {
        t1: 'Most recently, I built full-stack features end-to-end at ',
        t2: " in Sarajevo — working across Angular, Spring Boot, and PostgreSQL on a roguelike game platform. I'm drawn to full-stack development, and have picked up hands-on QA and DevOps experience across my past two internships. I'm curious, adaptable, and always looking for the next problem worth solving.",
      },
    },
    experience: {
      label: '02. Experience',
      heading: 'Work Experience',
      entries: [
        {
          type: 'work',
          role: 'Software Development Intern',
          company: 'ZIRA Group',
          location: 'Sarajevo, Bosnia & Herzegovina',
          period: 'Feb 2026 – Apr 2026',
          bullets: [
            'Built full-stack features for a roguelike game platform (Angular + Spring Boot + PostgreSQL)',
            'Developed management interfaces (CRUD, charts), inventory systems, and level rendering',
            'Authored and maintained test cases as part of a structured QA workflow; collaborated via Git with branching, merge conflict resolution, and code reviews',
          ],
        },
        {
          type: 'work',
          role: 'Software Engineer Intern',
          company: 'GMV GmbH',
          location: 'Darmstadt, Germany',
          period: 'Jul 2025 – Dec 2025',
          bullets: [
            'Worked on Mission Control Systems (SCOS 2000) supporting ESA/ESOC missions: Cryosat, Galileo, Sentinel, Biomass',
            'Containerised S2K components with Docker and built GitLab CI/CD pipelines for automated deployments',
            'Java programming and testing of satellite mission UI software',
          ],
        },
        {
          type: 'award',
          role: 'Scholarship Holder',
          company: 'Zoran Djindjic Internship Programme of German Business',
          location: '',
          period: 'Jun 2025 – Present',
          bullets: [
            'One of up to 65 annual recipients from the Western Balkans for this prestigious German business scholarship programme',
          ],
        },
        {
          type: 'award',
          role: 'Scholarship Holder',
          company: 'Jericho Foundation',
          location: '',
          period: 'Oct 2022 – Present',
          bullets: [
            'Holistic scholarship programme providing financial support, seminars, emotional support, and in-country & US internship opportunities to students in Bosnia & Herzegovina',
            'Completed multiple certificates across areas including leadership, peacebuilding, business skills, and professional development',
            'Recurring invited speaker at Jericho Foundation events, including evenings of philanthropy co-organised with USAID and the Tuzla Community Foundation',
          ],
        },
        {
          type: 'edu',
          role: 'B.Sc. Software Engineering',
          company: 'Faculty of Information Technologies, University of Mostar',
          location: 'Mostar, Bosnia & Herzegovina',
          period: 'Oct 2022 – Present (4th year)',
          bullets: [],
        },
      ],
    },
    skills: {
      label: '03. Skills',
      heading: 'Tech Stack',
      groups: [
        { label: 'Frontend', color: '#4f9eff', skills: ['JavaScript', 'TypeScript', 'Angular', 'HTML', 'CSS', 'Tailwind'] },
        { label: 'Backend', color: '#7c3aed', skills: ['Spring Boot', 'C#', 'ASP.NET Core'] },
        { label: 'Databases', color: '#22c55e', skills: ['PostgreSQL', 'SQLite'] },
        { label: 'DevOps & Tools', color: '#f59e0b', skills: ['Docker', 'GitLab CI/CD', 'Git', 'Kubernetes'] },
        { label: 'Other', color: '#64748b', skills: ['Java', 'Python', 'C++'] },
      ],
    },
    projects: {
      label: '04. Projects',
      heading: 'Projects',
      items: [
        {
          title: 'AI Real Estate Valuation Agent',
          description: 'Estimates property values from user-defined parameters like size, location, and features — built as part of my 4th-year Artificial Intelligence course.',
          tags: ['Python', 'AI', 'Machine Learning'],
          github: 'https://github.com/trssko/agent-za-procjenu-nekretnina',
          demo: null,
        },
        {
          title: 'Angular + ASP.NET Learning App',
          description: 'A full-stack web application connecting an Angular frontend to an ASP.NET Core backend — built as a personal deep-dive into end-to-end development outside of university.',
          tags: ['Angular', 'TypeScript', 'C#', 'ASP.NET Core'],
          github: 'https://github.com/trssko/my-first-angular-app',
          demo: null,
        },
      ],
    },
    contact: {
      label: '05. Contact',
      heading: "Let's Connect",
      subtext: "I'm actively looking for full-time software engineering roles. If you think I'd be a good fit for your team, I'd love to hear from you.",
      items: [
        { label: 'Email', value: 'semirkorda9@gmail.com', href: 'mailto:semirkorda9@gmail.com' },
        { label: 'LinkedIn', value: 'linkedin.com/in/semir-korda', href: 'https://www.linkedin.com/in/semir-korda/' },
        { label: 'GitHub', value: 'github.com/trssko', href: 'https://github.com/trssko' },
      ],
    },
    footer: {
      built: 'Built with React + Vite',
    },
  },

  bs: {
    nav: {
      links: ['O meni', 'Iskustvo', 'Vještine', 'Projekti', 'Kontakt'],
      openToWork: 'Otvoren za posao',
    },
    hero: {
      greeting: 'Zdravo, svijete. Ja sam',
      roles: ['Software Engineer', 'Full-Stack Developer', 'Otvoren za zaposlenje'],
      bio: 'Student softverskog inženjerstva iz Sarajeva s praktičnim iskustvom u full-stack razvoju, infrastrukturi svemirskih misija i CI/CD pipelineima.',
      viewWork: 'Pogledaj moj rad',
      downloadCv: 'Preuzmi CV',
    },
    about: {
      label: '01. O meni',
      heading: 'O meni',
      quickFacts: 'Kratke informacije',
      facts: [
        'Sarajevo, Bosna i Hercegovina',
        'Fakultet informacijskih tehnologija, Univ. u Mostaru',
        'Alumni programa Zorana Đinđića',
        'Stipendist Jericho fondacije',
        'Bosanski (maternji), engleski (B2), njemački (A1)',
        'Kalistenika, planinarenje, fotografija, fudbal',
      ],
      p1: 'Student sam četvrte godine Softverskog inženjerstva na Fakultetu informacijskih tehnologija na Univerzitetu "Džemal Bijedić". Tokom proteklih godina prešao sam put od prvih linija Java koda do isporuke softvera za upravljanje satelitskim misijama — i tek sam počeo.',
      p2: {
        t1: 'U 2025. godini imao sam privilegij stažiranja u ',
        t2: ' u Darmstadtu, Njemačka, u sklopu prestižnog ',
        t3: ' — jednog od 65 godišnjih dobitnika s Zapadnog Balkana. Tamo sam radio na sistemima za upravljanje misijama (SCOS 2000) koji podržavaju ESA misije uključujući Cryosat, Galileo, Sentinel i Biomass, kontejnerizirao komponente uz Docker i izgradio CI/CD pipeline na GitLabu.',
      },
      p3: {
        t1: 'Najskorije sam razvijao full-stack funkcionalnosti u ',
        t2: ' u Sarajevu — radeći s Angularom, Spring Bootom i PostgreSQL-om na platformi za roguelike igru. Privlači me full-stack razvoj, a kroz posljednje dvije stažiranja stekao sam i praktično iskustvo u QA-u i DevOpsu. Radoznao sam, prilagodljiv i uvijek tražim sljedeći problem vrijedan rješavanja.',
      },
    },
    experience: {
      label: '02. Iskustvo',
      heading: 'Radno iskustvo',
      entries: [
        {
          type: 'work',
          role: 'Intern u razvoju softvera',
          company: 'ZIRA Group',
          location: 'Sarajevo, Bosna i Hercegovina',
          period: 'Feb 2026 – Apr 2026',
          bullets: [
            'Razvijao full-stack funkcionalnosti za platformu roguelike igre (Angular + Spring Boot + PostgreSQL)',
            'Razvijao upravljačke interfejse (CRUD, grafikoni), sisteme inventara i renderovanje nivoa',
            'Pisao i održavao test case-ove u sklopu strukturiranog QA procesa; sarađivao putem Gita uz grananje, rješavanje merge konflikata i code review',
          ],
        },
        {
          type: 'work',
          role: 'Intern softverskog inženjeringa',
          company: 'GMV GmbH',
          location: 'Darmstadt, Njemačka',
          period: 'Jul 2025 – Dec 2025',
          bullets: [
            'Radio na sistemima upravljanja misijama (SCOS 2000) koji podržavaju ESA/ESOC misije: Cryosat, Galileo, Sentinel, Biomass',
            'Kontejnerizirao S2K komponente uz Docker i izgradio GitLab CI/CD pipeline za automatizovana deployanja',
            'Java programiranje i testiranje UI softvera za satelitske misije',
          ],
        },
        {
          type: 'award',
          role: 'Stipendist',
          company: 'Program stažiranja Zorana Đinđića njemačkog biznisa',
          location: '',
          period: 'Jun 2025 – Sadašnjost',
          bullets: [
            'Jedan od 65 godišnjih dobitnika s Zapadnog Balkana za ovaj prestižni njemački poslovni stipendijski program',
          ],
        },
        {
          type: 'award',
          role: 'Stipendist',
          company: 'Jericho Foundation',
          location: '',
          period: 'Okt 2022 – Sadašnjost',
          bullets: [
            'Holistički stipendijski program koji pruža finansijsku podršku, seminare, emocionalnu podršku i stažiranja u zemlji i SAD-u studentima u Bosni i Hercegovini',
            'Stekao više certifikata iz oblasti liderstva, izgradnje mira, poslovnih vještina i profesionalnog razvoja',
            'Višestruki pozvani govornik na događajima Jericho fondacije, uključujući večeri filantropije suorganizirane s USAID-om i Tuzlanskom zajednicom fondacija',
          ],
        },
        {
          type: 'edu',
          role: 'Bachelor Softverskog inženjerstva',
          company: 'Fakultet informacijskih tehnologija, Univerzitet u Mostaru',
          location: 'Mostar, Bosna i Hercegovina',
          period: 'Okt 2022 – Sadašnjost (4. godina)',
          bullets: [],
        },
      ],
    },
    skills: {
      label: '03. Vještine',
      heading: 'Tehnologije',
      groups: [
        { label: 'Frontend', color: '#4f9eff', skills: ['JavaScript', 'TypeScript', 'Angular', 'HTML', 'CSS', 'Tailwind'] },
        { label: 'Backend', color: '#7c3aed', skills: ['Spring Boot', 'C#', 'ASP.NET Core'] },
        { label: 'Baze podataka', color: '#22c55e', skills: ['PostgreSQL', 'SQLite'] },
        { label: 'DevOps i alati', color: '#f59e0b', skills: ['Docker', 'GitLab CI/CD', 'Git', 'Kubernetes'] },
        { label: 'Ostalo', color: '#64748b', skills: ['Java', 'Python', 'C++'] },
      ],
    },
    projects: {
      label: '04. Projekti',
      heading: 'Projekti',
      items: [
        {
          title: 'AI agent za procjenu nekretnina',
          description: 'Procjenjuje vrijednost nekretnina na osnovu parametara koje unosi korisnik, poput veličine, lokacije i karakteristika — izrađeno u sklopu predmeta Artificijalna inteligencija u četvrtoj godini studija.',
          tags: ['Python', 'AI', 'Machine Learning'],
          github: 'https://github.com/trssko/agent-za-procjenu-nekretnina',
          demo: null,
        },
        {
          title: 'Angular + ASP.NET aplikacija',
          description: 'Full-stack web aplikacija koja spaja Angular frontend s ASP.NET Core backendom — izrađena kao osobno istraživanje end-to-end razvoja izvan fakulteta.',
          tags: ['Angular', 'TypeScript', 'C#', 'ASP.NET Core'],
          github: 'https://github.com/trssko/my-first-angular-app',
          demo: null,
        },
      ],
    },
    contact: {
      label: '05. Kontakt',
      heading: 'Povežimo se',
      subtext: 'Aktivno tražim stalno zaposlenje u oblasti softverskog inženjerstva. Ako smatrate da bih bio dobar dodatak vašem timu, volio bih čuti od vas.',
      items: [
        { label: 'Email', value: 'semirkorda9@gmail.com', href: 'mailto:semirkorda9@gmail.com' },
        { label: 'LinkedIn', value: 'linkedin.com/in/semir-korda', href: 'https://www.linkedin.com/in/semir-korda/' },
        { label: 'GitHub', value: 'github.com/trssko', href: 'https://github.com/trssko' },
      ],
    },
    footer: {
      built: 'Izrađeno s React + Vite',
    },
  },
}
