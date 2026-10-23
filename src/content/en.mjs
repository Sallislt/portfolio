// Angliškas turinys

export default {
  code: 'en',
  locale: 'en_GB',
  dateLocale: 'en-GB',

  meta: {
    title: 'Saulius Stankevicius — IT Support & Systems/Network Technician · Cybersecurity (Paris area)',
    description:
      'IT support (L1/L2) and systems & network technician with a cybersecurity focus. Bachelor in networks, Google Cybersecurity certified. Available now in the Paris region, France.',
    ogTitle: 'Saulius Stankevicius — IT Support, Systems & Networks, Cybersecurity',
    jobTitle: 'IT Support Technician – Systems & Networks',
    keywords: [
      'IT support technician',
      'systems and network technician',
      'junior SOC analyst',
      'cybersecurity',
      'Active Directory',
      'Paris',
      'France',
    ],
  },

  ui: {
    skip: 'Skip to content',
    menu: 'Menu',
    close: 'Close',
    theme: 'Toggle theme',
    lang: 'Language',
    downloadCv: 'Download CV',
    contactMe: 'Get in touch',
    copy: 'Copy',
    copied: 'Copied!',
    verify: 'Verify',
    print: 'Printable version (CV PDF)',
    backTop: 'Back to top',
    present: 'present',
    photoAlt: 'Portrait of Saulius Stankevicius',
  },

  nav: [
    { id: 'profil', label: 'Profile' },
    { id: 'competences', label: 'Skills' },
    { id: 'projets', label: 'Projects' },
    { id: 'parcours', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ],

  hero: {
    status: 'Available now · Paris region, France',
    hello: 'Hello, I’m',
    role: 'IT Support & Systems/Network Technician',
    roleAccent: 'with a cybersecurity focus',
    lead:
      'Thirteen years of working at height, up to 183 m, taught me one thing: you leave nothing to chance when a mistake is costly. I now bring that discipline to IT — user support, Windows/Linux, Active Directory, networks and security.',
    lookingFor: 'Looking for',
    roles: ['IT Support Technician (L1/L2)', 'Systems & Network Technician', 'Junior SOC Analyst'],
    terminal: [
      ['whoami', 'saulius — support · sysadmin · blue team'],
      ['cat degree.txt', 'Bachelor, Networks & Systems Administration'],
      ['ls certifications/ | wc -l', '{certCount}'],
      ['./availability.sh', 'OK — immediate, Paris region'],
    ],
  },

  stats: [
    { value: '13', label: 'years in rope access, 10 as a team lead' },
    { value: 'BSc', label: 'Networks & Systems Administration' },
    { value: '{certCount}', label: 'IT & cybersecurity certifications' },
    { value: '3', label: 'languages: EN C2 · FR C1 · LT native' },
  ],

  story: {
    kicker: 'Profile',
    title: 'From safety at height to cybersecurity',
    intro:
      'Passionate about computing since school and trained in networks and systems administration, I spent thirteen years as a rope access technician and team lead in the Paris region. I am now moving into IT with a clear goal: join a support / infrastructure team to gain experience, then grow into cybersecurity. What I bring from day one:',
    cards: [
      {
        icon: 'shield',
        title: 'A safety-first culture',
        text: 'Risk assessment, procedures, double-checks, inspected protective equipment: at height, safety is never optional. That is exactly the mindset an IT technician needs.',
      },
      {
        icon: 'wrench',
        title: 'Incident reflexes',
        text: 'Diagnose fast, prioritise, fix under constraints and pressure, then explain clearly to the customer what was done.',
      },
      {
        icon: 'doc',
        title: 'Rigour & documentation',
        text: 'Team lead since 2014: organising job sites, keeping the team safe, checking the work delivered and dealing with clients.',
      },
    ],
    facts: [
      ['Location', 'Orgeval (78), west of Paris — mobile across Île-de-France'],
      ['Availability', 'Immediate — distance-learning degree compatible with a full-time job'],
      ['Driving licence', 'A and B, own vehicle'],
      ['Languages', 'English C2 · French C1 · Lithuanian native'],
    ],
  },

  skills: {
    kicker: 'Skills',
    title: 'What I can do',
    intro: 'Skills built through formal training, certifications and a homelab I keep evolving.',
    groups: [
      {
        icon: 'headset',
        name: 'Support & service desk',
        items: ['L1/L2 incident diagnosis and resolution', 'Ticketing: GLPI, ServiceNow', 'Windows 10/11: install, imaging, troubleshooting', 'Remote and on-site support', 'Printers, software, peripherals'],
      },
      {
        icon: 'server',
        name: 'Systems',
        items: ['Windows Server 2016/2019', 'Active Directory: users, groups, GPO, permissions', 'Linux Ubuntu / Debian: services, users, permissions', 'VMware vSphere, Hyper-V, snapshots', 'Backup and restore'],
      },
      {
        icon: 'network',
        name: 'Networking',
        items: ['TCP/IP, OSI model', 'LAN, VLAN, secure Wi-Fi, VPN', 'DNS, DHCP, basic routing', 'Traffic analysis: Wireshark, Nmap', 'Cabling and racks'],
      },
      {
        icon: 'lock',
        name: 'Cybersecurity',
        items: ['Log analysis and SIEM: Splunk', 'Detection & response, IDS/IPS basics', 'Endpoint hardening, firewall, antivirus', 'Access management, MFA / 2FA, least privilege', 'Brute force detection in SSH logs (Python)'],
      },
      {
        icon: 'code',
        name: 'Scripting & development',
        items: ['PowerShell and Bash automation', 'Python for security tasks', 'PHP / Laravel, SQL (MySQL, SQLite)', 'Git, automated testing', 'HTML / CSS / JavaScript'],
      },
      {
        icon: 'users',
        name: 'Soft skills',
        items: ['Clear communication, explaining simply', 'Calm under pressure', 'Organisation, prioritisation', 'Customer-service mindset', 'Teamwork, team leadership'],
      },
    ],
  },

  projects: {
    kicker: 'Projects',
    title: 'Proof, not just words',
    intro: 'Two real web applications I designed and built, a Cisco network project, and the labs where I practise administration and security.',
    featuredLabel: 'Live application',
    shows: 'What it demonstrates:',
    featured: [
      {
        key: 'skyScrapper',
        name: 'Sky Scrapper — PPE inspection register',
        tag: 'Web application · final-year project',
        text: 'An application for managing periodic inspections of fall-protection equipment (category III PPE) for a rope access company. Deployed on shared hosting.',
        bullets: [
          'Two-factor authentication (TOTP) and strong password rules',
          'Role-based access control (policies), activity log, approved inspections are immutable',
          'HTTP security headers, bot protection, GDPR-compliant (no real data in Git)',
          'UI in 5 languages including Arabic (RTL), PDF reports, QR codes, Excel import, e-mail reminders',
          'Automated test suite (Pest) covering security and business rules',
        ],
        shows: 'Application security, identity & access management, deploying and running a server.',
      },
      {
        key: 'netLab',
        name: 'Segmented network for an exam centre',
        tag: 'Cisco Packet Tracer · semester project',
        text: 'Network architecture for an exam centre (fictional scenario): 6 VLANs, inter-VLAN routing on a Layer 3 switch, exam room isolated by ACLs, Packet Tracer model.',
        bullets: [
          'Segmentation: service desk, exams, servers, VoIP, cameras, management',
          'ACLs: exam PCs limited to the exam server and DNS, cameras limited to the NVR',
          'Review of my own configuration: 3 bugs found and fixed (Internet access, blocked DHCP, supervisor PC)',
          'Hardening: SSH v2, port security, BPDU guard, DHCP snooping, secured trunks',
        ],
        shows: 'Network design, routing and filtering, Cisco device hardening.',
      },
      {
        key: 'skyTools',
        name: 'Sky Tools — tool inventory',
        tag: 'Progressive web app (PWA)',
        text: 'Tracks tools, vehicles, job sites and consumables for a cleaning company: kiosk mode, site map, reports and offline operation.',
        bullets: [
          'Roles and permissions management',
          'Offline mode and synchronisation',
          'Multilingual interface (FR, EN, LT, PT, IT)',
        ],
        shows: 'Asset and inventory management, CMDB thinking, analysing user needs.',
      },
    ],
    labsTitle: 'Homelab & exercises',
    githubCta: 'See the code on GitHub',
    sourceCode: 'source code',
    labs: [
      { key: 'adLab', name: 'Windows Server & Active Directory lab', text: 'Virtualised Windows Server 2019 domain: users, groups, OUs, GPOs, shares and NTFS permissions.' },
      { key: 'network', name: 'Segmented, secured network', text: 'VLANs, secure Wi-Fi, NAS, isolated IP cameras, network printers, automated backups; 50+ devices configured.' },
      { key: 'siem', name: 'Log analysis & detection', text: 'Event searches in Splunk, traffic analysis, IDS/IPS scenarios and an SSH log analyzer written in Python.' },
      { key: 'linux', name: 'Linux web & database server', text: 'Debian/Ubuntu: users, services, permissions, Apache and MySQL, basic hardening.' },
      { key: 'scripts', name: 'Admin scripts', text: 'PowerShell and Bash automation: account creation, inventory, clean-up, backups.' },
      { key: 'glpi', name: 'ITIL incident management with GLPI', text: 'A 6-step incident-management process, multi-tier support (L1 to L4) and hands-on testing in GLPI: profiles, tickets, priority = urgency × impact, dashboard.' },
      { key: 'crypto', name: 'Cryptography & information security', text: 'Eight labs: classical ciphers, RSA and digital signatures, hash functions, steganography, robots.txt, vulnerability scanners (Qualys SSL Labs, Nessus).' },
      { key: 'site', name: 'This website', text: 'A static multilingual site with no cookies or trackers, a CSP policy, HSTS and structured data for search engines.' },
    ],
  },

  journey: {
    kicker: 'Experience',
    title: 'Experience & education',
    experienceTitle: 'Work experience',
    educationTitle: 'Education',
    languagesTitle: 'Languages',
    experience: [
      {
        role: 'Rope access technician — Team lead',
        org: 'Temporary assignments via Satis TT',
        place: 'Île-de-France',
        start: '2018',
        end: null,
        bullets: [
          'Team lead on ropes, aerial work platforms and scaffolding: job-site organisation, team safety, client relations',
          'Work up to 183 m high on the towers of La Défense, Paris',
        ],
        missions: [
          { org: 'Sky Scrapper', period: '2021 – 2025 · since 03/2025', text: 'Team lead. Window cleaning, high-pressure façade cleaning (Kärcher), dust removal, installing fall-protection nets (people and objects) and bird nets, painting, masonry, façade inspection, waterproofing and leak detection.' },
          { org: 'Red Sky', period: '01/2025 – 03/2025', text: 'Rope access window cleaning and high-pressure façade cleaning (Kärcher).' },
          { org: 'Vertigo', period: '09/2018 – 08/2021', text: 'High-rise rope access cleaning up to 183 m: Tour CBX, Tour Europe, Opus 12 and other towers at La Défense.' },
        ],
      },
      {
        role: 'Rope access technician, then team lead',
        org: 'Accessit',
        place: 'Île-de-France',
        start: '2012',
        end: '2018',
        bullets: [
          'Promoted to team lead after two years',
          'Cleaning windows, gutters and downpipes',
          'Dust removal in hard-to-reach areas',
          'Working on ropes, aerial work platforms and scaffolding',
        ],
      },
      {
        role: 'Construction worker, then carpenter',
        org: 'Construction sites',
        place: 'England',
        start: '2010',
        end: '2012',
        bullets: [
          'Moved to England to look for an IT job in a larger market',
          'Progressed from labourer to carpenter',
          'Improved my English in a professional environment',
        ],
      },
      {
        role: 'Web & communication specialist',
        org: 'Kauno kolegija Higher Education Institution, Public Relations and Communication Office',
        place: 'Kaunas, Lithuania',
        start: '2009',
        end: '2010',
        bullets: [
          'Researching and introducing innovations for the college website',
          'Representing Kauno kolegija to the public',
        ],
      },
      {
        role: 'Student volunteering: web, video and communication',
        org: 'Kauno kolegija Students’ Association (KKSA)',
        place: 'Kaunas, Lithuania',
        start: '2006',
        end: '2009',
        bullets: [
          'Member, then head of the information committee: running the website',
          'Vice-president for public relations',
          '“Kvadratas” video association: video website maintenance, filming, reports, video editing',
        ],
      },
      {
        role: 'Seasonal worker, then team lead',
        org: 'Kauno šaldytuvai (now FUDO), blueberry processing',
        place: 'Kaunas, Lithuania',
        period: 'Summer seasons, from 2005',
        bullets: [
          'First job at 18 as an auxiliary worker',
          'In the following seasons: leading a team of 12 people',
        ],
      },
    ],
    education: [
      {
        degree: 'Bachelor of Informatics — Information Technologies, in progress (part-time, distance learning)',
        school: 'VILNIUS TECH, Vilnius Gediminas Technical University, Lithuania',
        url: 'https://vilniustech.lt/en/study-programme/information-technologies-549969-l-454/',
        note: 'Cloud computing, cryptography and information security, database management, Internet technologies, IT governance, software engineering.',
        period: '09/2025 – 06/2027 (expected)',
      },
      { degree: 'CQP Rope Access Technician level 2 (now “Cordiste confirmé”)', school: 'French professional certification', period: '2023' },
      { degree: 'CQP Rope Access Technician level 1', school: 'French professional certification', period: '2016' },
      {
        degree: 'Professional Bachelor in Informatics Engineering — Computer Network Administration (180 ECTS), qualification of Engineer',
        school: 'Kauno kolegija Higher Education Institution, Lithuania',
        url: 'https://kaunokolegija.lt/english/',
        note: 'Computer networks, network security, Windows and Linux systems, databases, programming, operating systems and hardware.',
        period: '2006 – 2009',
      },
      { degree: 'Programming class (Delphi)', school: 'Young Programmers’ School (JKM) at KTU, Kaunas', url: 'https://jkm.ktu.edu/c-sharp/?mokymai-klasems=vienuoliktokams', period: '2005 – 2006' },
      { degree: 'Computer science class', school: 'Pupils’ Technical Creativity Centre (MTKC), Kaunas', url: 'https://www.mtkc.lt/', period: '2003 – 2004' },
    ],
    languages: [
      { name: 'English', level: 'Professional — C2', pct: 95 },
      { name: 'French', level: 'Fluent — C1', pct: 85 },
      { name: 'Lithuanian', level: 'Native', pct: 100 },
    ],
  },

  certs: {
    kicker: 'Certifications',
    title: '{certCount} certifications, verifiable in one click',
    intro: 'Learning paths completed in 2025 to strengthen networking fundamentals, detection, incident response and cloud security.',
    modules: 'modules',
    path: 'Path',
  },

  contact: {
    kicker: 'Contact',
    title: 'Let’s talk about your team',
    lead: 'Hiring an IT support, systems & network or junior SOC profile? I am available immediately for an interview — in person in the Paris region or by video call.',
    email: 'E-mail',
    phone: 'Phone',
    linkedin: 'LinkedIn',
    location: 'Location',
    locationValue: 'Orgeval (78630), west of Paris',
  },

  footer: {
    note: 'Static site, no cookies, no trackers.',
    updated: 'Updated',
  },
};
