// Prancūziškas turinys (pagrindinė kalba)

export default {
  code: 'fr',
  locale: 'fr_FR',
  dateLocale: 'fr-FR',

  meta: {
    title: 'Saulius Stankevicius — Technicien Support & Systèmes Réseaux · Cybersécurité (78)',
    description:
      'Technicien support informatique N1/N2 et systèmes & réseaux orienté cybersécurité, Bachelor Réseaux, certifié Google Cybersecurity. Disponible immédiatement en Île-de-France (Yvelines).',
    ogTitle: 'Saulius Stankevicius — Support IT, Systèmes & Réseaux, Cybersécurité',
    jobTitle: 'Technicien Support Informatique – Systèmes & Réseaux',
    keywords: [
      'technicien support informatique',
      'technicien systèmes et réseaux',
      'analyste SOC junior',
      'cybersécurité',
      'Active Directory',
      'Yvelines',
      'Île-de-France',
    ],
  },

  ui: {
    skip: 'Aller au contenu',
    menu: 'Menu',
    close: 'Fermer',
    theme: 'Changer de thème',
    lang: 'Langue',
    downloadCv: 'Télécharger le CV',
    contactMe: 'Me contacter',
    copy: 'Copier',
    copied: 'Copié !',
    verify: 'Vérifier',
    print: 'Imprimer / PDF',
    backTop: 'Haut de page',
    present: 'aujourd’hui',
    photoAlt: 'Portrait de Saulius Stankevicius',
  },

  nav: [
    { id: 'profil', label: 'Profil' },
    { id: 'competences', label: 'Compétences' },
    { id: 'projets', label: 'Projets' },
    { id: 'parcours', label: 'Parcours' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ],

  hero: {
    status: 'Disponible immédiatement · Île-de-France',
    hello: 'Bonjour, je suis',
    role: 'Technicien Support & Systèmes Réseaux',
    roleAccent: 'orienté cybersécurité',
    lead:
      'Treize ans de travaux en hauteur, jusqu’à 183 m, m’ont appris une chose : on ne laisse rien au hasard quand une erreur coûte cher. J’applique aujourd’hui cette rigueur à l’informatique — support utilisateurs, Windows/Linux, Active Directory, réseaux et sécurité.',
    lookingFor: 'Je recherche',
    roles: ['Technicien Support N1/N2', 'Technicien Systèmes & Réseaux', 'Analyste SOC junior'],
    terminal: [
      ['whoami', 'saulius — support · sysadmin · blue team'],
      ['cat diplome.txt', 'Bachelor Réseaux & Admin. Systèmes (BAC+3)'],
      ['ls certifications/ | wc -l', '{certCount}'],
      ['./disponibilite.sh', 'OK — immédiate, Île-de-France'],
    ],
  },

  stats: [
    { value: '13', label: 'ans de cordiste, dont 10 comme chef d’équipe' },
    { value: 'BAC+3', label: 'Réseaux & Administration Systèmes' },
    { value: '{certCount}', label: 'certifications IT & cybersécurité' },
    { value: '3', label: 'langues : FR C1 · EN C2 · LT natif' },
  ],

  story: {
    kicker: 'Profil',
    title: 'De la sécurité en hauteur à la cybersécurité',
    intro:
      'Passionné d’informatique depuis le collège, diplômé en réseaux et administration systèmes, j’ai passé treize ans comme cordiste et chef d’équipe en Île-de-France. Je me reconvertis vers l’IT avec un objectif clair : intégrer une équipe support / infrastructure pour gagner en expérience, puis évoluer vers la cybersécurité. Ce que j’apporte dès le premier jour :',
    cards: [
      {
        icon: 'shield',
        title: 'La culture de la sécurité',
        text: 'Analyse de risques, procédures, double vérification, EPI contrôlés : en hauteur, la sécurité n’est pas une option. C’est exactement l’état d’esprit attendu d’un technicien IT.',
      },
      {
        icon: 'wrench',
        title: 'Le réflexe incident',
        text: 'Diagnostiquer vite, prioriser, résoudre sous contrainte et sous pression, puis expliquer clairement au client ce qui a été fait.',
      },
      {
        icon: 'doc',
        title: 'Rigueur & documentation',
        text: 'Chef d’équipe depuis 2014 : organisation des chantiers, sécurité de l’équipe, contrôle du travail rendu et relation avec les clients.',
      },
    ],
    facts: [
      ['Localisation', 'Orgeval (78) — mobilité Île-de-France'],
      ['Disponibilité', 'Immédiate — études à distance compatibles avec un emploi'],
      ['Permis', 'A et B, véhiculé'],
      ['Langues', 'Français C1 · Anglais C2 · Lituanien natif'],
    ],
  },

  skills: {
    kicker: 'Compétences',
    title: 'Ce que je sais faire',
    intro: 'Compétences acquises par la formation, les certifications et un homelab que je fais évoluer en continu.',
    groups: [
      {
        icon: 'headset',
        name: 'Support & assistance',
        items: ['Diagnostic et résolution d’incidents N1/N2', 'Ticketing : GLPI, ServiceNow', 'Postes Windows 10/11 : installation, masterisation, dépannage', 'Assistance à distance et sur site', 'Imprimantes, logiciels, périphériques'],
      },
      {
        icon: 'server',
        name: 'Systèmes',
        items: ['Windows Server 2016/2019', 'Active Directory : comptes, groupes, GPO, droits', 'Linux Ubuntu / Debian : services, utilisateurs, permissions', 'VMware vSphere, Hyper-V, snapshots', 'Sauvegardes et restauration'],
      },
      {
        icon: 'network',
        name: 'Réseaux',
        items: ['TCP/IP, modèle OSI', 'LAN, VLAN, Wi-Fi sécurisé, VPN', 'DNS, DHCP, routage de base', 'Analyse de trafic : Wireshark, Nmap', 'Câblage et baies techniques'],
      },
      {
        icon: 'lock',
        name: 'Cybersécurité',
        items: ['Analyse de logs et SIEM : Splunk', 'Détection et réponse, notions IDS/IPS', 'Durcissement des postes, pare-feu, antivirus', 'Gestion des accès, MFA / 2FA, moindre privilège', 'Détection de force brute dans les journaux SSH (Python)'],
      },
      {
        icon: 'code',
        name: 'Scripts & développement',
        items: ['PowerShell et Bash : automatisation', 'Python : tâches de sécurité', 'PHP / Laravel, SQL (MySQL, SQLite)', 'Git, tests automatisés', 'HTML / CSS / JavaScript'],
      },
      {
        icon: 'users',
        name: 'Savoir-être',
        items: ['Communication claire, vulgarisation', 'Calme et gestion du stress', 'Organisation, priorisation', 'Sens du service client', 'Travail en équipe, encadrement'],
      },
    ],
  },

  projects: {
    kicker: 'Projets',
    title: 'Des preuves, pas seulement des mots',
    intro: 'Deux applications web réelles que j’ai conçues et développées, et les labs qui me servent à pratiquer l’administration et la sécurité.',
    featuredLabel: 'Application en production',
    shows: 'Ce que ça démontre :',
    featured: [
      {
        key: 'skyScrapper',
        name: 'Sky Scrapper — registre des contrôles EPI',
        tag: 'Application web · projet de fin d’études',
        text: 'Application de gestion des vérifications périodiques des équipements de protection contre les chutes (EPI catégorie III) pour une entreprise de travaux sur cordes. Déployée sur un hébergement mutualisé.',
        bullets: [
          'Authentification à deux facteurs (TOTP), règles de mots de passe robustes',
          'Contrôle d’accès par rôles (policies), journal d’activité, contrôles validés non modifiables',
          'En-têtes de sécurité HTTP, protection contre les robots, conformité RGPD (aucune donnée réelle dans Git)',
          'Interface en 5 langues dont l’arabe (RTL), rapports PDF, QR codes, import Excel, rappels e-mail',
          'Suite de tests automatisés (Pest) couvrant la sécurité et les règles métier',
        ],
        shows: 'Sécurité applicative, gestion des identités et des droits, déploiement et exploitation d’un serveur.',
      },
      {
        key: 'skyTools',
        name: 'Sky Tools — inventaire d’outillage',
        tag: 'Application web progressive (PWA)',
        text: 'Gestion de l’outillage, des véhicules, des chantiers et des consommables pour une entreprise de nettoyage : mode borne, carte des sites, rapports, fonctionnement hors ligne.',
        bullets: [
          'Gestion des rôles et permissions',
          'Mode hors ligne et synchronisation',
          'Interface multilingue (FR, EN, LT, PT, IT)',
        ],
        shows: 'Gestion de parc et d’inventaire, logique CMDB, analyse des besoins utilisateurs.',
      },
    ],
    labsTitle: 'Homelab & exercices',
    labs: [
      { key: 'adLab', name: 'Lab Windows Server & Active Directory', text: 'Domaine Windows Server 2019 virtualisé : utilisateurs, groupes, unités d’organisation, GPO, partages et droits NTFS.' },
      { key: 'network', name: 'Réseau segmenté et sécurisé', text: 'VLAN, Wi-Fi sécurisé, NAS, caméras IP isolées, imprimantes réseau, sauvegardes automatisées ; 50+ équipements configurés.' },
      { key: 'siem', name: 'Analyse de logs & détection', text: 'Recherche d’événements dans Splunk, analyse de trafic, scénarios IDS/IPS et analyseur de journaux SSH en Python.' },
      { key: 'linux', name: 'Serveur Linux web & base de données', text: 'Debian/Ubuntu : utilisateurs, services, permissions, Apache et MySQL, durcissement de base.' },
      { key: 'scripts', name: 'Scripts d’administration', text: 'Automatisation PowerShell et Bash : création de comptes, inventaire, nettoyage, sauvegardes.' },
      { key: 'site', name: 'Ce site', text: 'Site statique multilingue, sans cookies ni traceurs, avec politique CSP, HSTS et données structurées pour le référencement.' },
    ],
  },

  journey: {
    kicker: 'Parcours',
    title: 'Expérience & formation',
    experienceTitle: 'Expérience professionnelle',
    educationTitle: 'Formation',
    languagesTitle: 'Langues',
    experience: [
      {
        role: 'Cordiste — Chef d’équipe',
        org: 'Intérim via Satis TT',
        place: 'Île-de-France',
        start: '2018',
        end: null,
        bullets: [
          'Chef d’équipe sur cordes, nacelle et échafaudage : organisation du chantier, sécurité de l’équipe, relation client',
          'Travaux jusqu’à 183 m de hauteur sur les tours de La Défense',
        ],
        missions: [
          { org: 'Sky Scrapper', period: '2021 – 2025 · depuis 03/2025', text: 'Chef d’équipe. Nettoyage de vitres et de façades (Kärcher), dépoussiérage, pose de filets antichute (personnes et objets) et anti-volatiles, peinture, maçonnerie, inspection de façades, étanchéité et recherche de fuites.' },
          { org: 'Red Sky', period: '01/2025 – 03/2025', text: 'Nettoyage de vitres et de façades sur cordes (Kärcher).' },
          { org: 'Vertigo', period: '09/2018 – 08/2021', text: 'Nettoyage en grande hauteur sur cordes, jusqu’à 183 m : Tour CBX, Tour Europe, Opus 12 et autres tours de La Défense.' },
        ],
      },
      {
        role: 'Cordiste, puis chef d’équipe',
        org: 'Accessit',
        place: 'Île-de-France',
        start: '2012',
        end: '2018',
        bullets: [
          'Chef d’équipe après deux ans',
          'Nettoyage de vitres, gouttières et descentes d’eau pluviale',
          'Dépoussiérage en zones difficiles d’accès',
          'Travail sur cordes, en nacelle et sur échafaudage',
        ],
      },
      {
        role: 'Ouvrier du bâtiment, puis menuisier',
        org: 'Chantiers de construction',
        place: 'Angleterre',
        start: '2010',
        end: '2012',
        bullets: [
          'Départ en Angleterre pour chercher un poste IT sur un marché plus large',
          'Évolution de manœuvre à menuisier',
          'Perfectionnement de l’anglais en environnement professionnel',
        ],
      },
      {
        role: 'Spécialiste web & communication',
        org: 'Kauno Kolegija, service relations publiques et communication',
        place: 'Kaunas, Lituanie',
        start: '2009',
        end: '2010',
        bullets: [
          'Recherche et mise en place d’innovations pour le site web de l’établissement',
          'Représentation de Kauno Kolegija auprès du public',
        ],
      },
      {
        role: 'Bénévolat étudiant : web, vidéo et communication',
        org: 'Association des étudiants de Kauno Kolegija (KKSA)',
        place: 'Kaunas, Lituanie',
        start: '2006',
        end: '2009',
        bullets: [
          'Membre, puis responsable du comité d’information : gestion du site web',
          'Vice-président chargé des relations publiques',
          'Association vidéo « Kvadratas » : maintenance du site vidéo, tournage, reportages, montage',
        ],
      },
      {
        role: 'Ouvrier saisonnier, puis chef d’équipe',
        org: 'Kauno šaldytuvai (aujourd’hui FUDO), transformation de myrtilles',
        place: 'Kaunas, Lituanie',
        period: 'Saisons d’été, dès 2005',
        bullets: [
          'Premier emploi à 18 ans comme ouvrier auxiliaire',
          'Les saisons suivantes : chef d’une équipe de 12 personnes',
        ],
      },
    ],
    education: [
      {
        degree: 'Licence en informatique — Technologies de l’information, en cours (à distance)',
        school: 'VILNIUS TECH, Université technique Gediminas de Vilnius, Lituanie',
        url: 'https://vilniustech.lt/en/study-programme/information-technologies-549969-l-454/',
        note: 'Cloud computing, cryptographie et sécurité de l’information, gestion de bases de données, technologies Internet, gouvernance des SI, génie logiciel.',
        period: '09/2025 – 06/2027 (prévu)',
      },
      { degree: 'CQP Cordiste niveau 2 (aujourd’hui « Cordiste confirmé »)', school: 'Certification professionnelle, France', period: '2023' },
      { degree: 'CQP Cordiste niveau 1', school: 'Certification professionnelle, France', period: '2016' },
      {
        degree: 'Bachelor professionnel en ingénierie informatique — Administration des réseaux (BAC+3, 180 ECTS), qualification d’ingénieur',
        school: 'Kauno Kolegija, établissement public d’enseignement supérieur, Lituanie',
        url: 'https://kaunokolegija.lt/english/',
        note: 'Réseaux informatiques, sécurité des réseaux, systèmes Windows et Linux, bases de données, programmation, systèmes d’exploitation et matériel.',
        period: '2006 – 2009',
      },
      { degree: 'Classe de programmation (Delphi)', school: 'École des jeunes informaticiens (JKM) de l’université KTU, Kaunas', url: 'https://jkm.ktu.edu/c-sharp/?mokymai-klasems=vienuoliktokams', period: '2005 – 2006' },
      { degree: 'Classe d’informatique', school: 'Centre de création technique pour élèves (MTKC), Kaunas', url: 'https://www.mtkc.lt/', period: '2003 – 2004' },
    ],
    languages: [
      { name: 'Français', level: 'Courant — C1', pct: 85 },
      { name: 'Anglais', level: 'Professionnel — C2', pct: 95 },
      { name: 'Lituanien', level: 'Langue maternelle', pct: 100 },
    ],
  },

  certs: {
    kicker: 'Certifications',
    title: '{certCount} certifications, vérifiables en un clic',
    intro: 'Parcours suivis en 2025 pour consolider les bases réseau, la détection, la réponse aux incidents et la sécurité du cloud.',
    modules: 'modules',
    path: 'Parcours',
  },

  contact: {
    kicker: 'Contact',
    title: 'Parlons de votre équipe',
    lead: 'Vous recrutez un technicien support, systèmes & réseaux ou un profil SOC junior ? Je suis disponible immédiatement pour un entretien, en présentiel en Île-de-France ou en visio.',
    email: 'E-mail',
    phone: 'Téléphone',
    linkedin: 'LinkedIn',
    location: 'Localisation',
    locationValue: 'Orgeval (78630), Yvelines',
  },

  footer: {
    note: 'Site statique, sans cookies ni traceurs.',
    updated: 'Mis à jour le',
  },
};
