// Bendri (nuo kalbos nepriklausomi) duomenys: kontaktai, sertifikatai, nuorodos.

export const site = {
  url: 'https://saulius.elitecordiste.fr',
  name: 'Saulius Stankevicius',
  email: 'sallislt@gmail.com',
  phone: '+33 6 99 63 07 20',
  phoneHref: '+33699630720',
  linkedin: 'https://www.linkedin.com/in/saulius-stankevicius/',
  // GitHub profilis: įrašyti adresą, kai paskyra sukurta (null = nerodoma)
  github: 'https://github.com/Sallislt',
  cv: '/assets/Saulius_Stankevicius_CV.pdf',
  photo: '/assets/img/profile.jpg',
  ogImage: '/assets/img/og.png',
  locality: 'Orgeval',
  postalCode: '78630',
  region: 'Île-de-France',
  country: 'FR',
  updated: '2026-10-23',
};

// Kalbų sąrašas: kelias svetainėje + hreflang
export const languages = [
  { code: 'fr', label: 'FR', name: 'Français', path: '/' },
  { code: 'en', label: 'EN', name: 'English', path: '/en/' },
  { code: 'lt', label: 'LT', name: 'Lietuvių', path: '/lt/' },
];

// Sertifikatai (pavadinimai originalo kalba – angliškai, kaip išduoti)
export const certGroups = [
  {
    issuer: 'Google',
    platform: 'Coursera',
    highlight: {
      name: 'Google Cybersecurity Professional Certificate',
      date: '2025-05-19',
      url: 'https://www.coursera.org/account/accomplishments/verify/6H8UCBVZEIF4',
    },
    items: [
      { name: 'Foundations of Cybersecurity', date: '2025-03-13', url: 'https://www.coursera.org/account/accomplishments/verify/SOSHV2JVP04G' },
      { name: 'Play It Safe: Manage Security Risks', date: '2025-03-14', url: 'https://coursera.org/share/70a0cfaa15ddf36090b9dd9ef41bd398' },
      { name: 'Connect and Protect: Networks and Network Security', date: '2025-03-17', url: 'https://www.coursera.org/account/accomplishments/verify/634B5VCUW38N' },
      { name: 'Tools of the Trade: Linux and SQL', date: '2025-03-23', url: 'https://www.coursera.org/account/accomplishments/verify/5PF74ZBF06EY' },
      { name: 'Assets, Threats, and Vulnerabilities', date: '2025-03-30', url: 'https://www.coursera.org/account/accomplishments/verify/ZY1ND2897X59' },
      { name: 'Sound the Alarm: Detection and Response', date: '2025-04-09', url: 'https://www.coursera.org/account/accomplishments/verify/497B3H27YMWG' },
      { name: 'Automate Cybersecurity Tasks with Python', date: '2025-05-04', url: 'https://www.coursera.org/account/accomplishments/verify/QCG2PHGHM6LM' },
      { name: 'Put It to Work: Prepare for Cybersecurity Jobs', date: '2025-05-19', url: 'https://www.coursera.org/account/accomplishments/verify/3F00BYPQVWTH' },
    ],
  },
  {
    issuer: 'Google Cloud',
    platform: 'Coursera · Cloud Security Analyst',
    highlight: null,
    items: [
      { name: 'Introduction to Security Principles in Cloud Computing', date: '2025-08-01', url: 'https://www.coursera.org/account/accomplishments/verify/RON6L02LU402' },
      { name: 'Strategies for Cloud Security Risk Management', date: '2025-08-01', url: 'https://www.coursera.org/account/accomplishments/verify/3ESBX44IP5IU' },
      { name: 'Cloud Security Risks: Identify and Protect Against Threats', date: '2025-08-01', url: 'https://www.coursera.org/account/accomplishments/verify/UMAZBL8WOBNT' },
      { name: 'Detect, Respond, and Recover from Cloud Cybersecurity Attacks', date: '2025-12-01', url: 'https://www.coursera.org/account/accomplishments/verify/UB5UR83IHI9K' },
      { name: 'Put It All Together: Prepare for a Cloud Security Analyst Job', date: '2025-12-01', url: 'https://www.coursera.org/account/accomplishments/verify/AHGTE5DOTKXR' },
    ],
  },
  {
    issuer: 'Cisco Networking Academy',
    platform: null,
    highlight: null,
    items: [
      { name: 'Junior Cybersecurity Analyst Career Path Exam', date: '2025-03-06', url: null },
      { name: 'Ethical Hacker', date: '2025-02-11', url: null },
      { name: 'Networking Basics', date: '2025-07-20', url: null },
      { name: 'Introduction to Cybersecurity', date: '2025-01-10', url: null },
    ],
  },
  {
    issuer: 'LinkedIn Learning · IBM',
    platform: null,
    highlight: null,
    items: [
      { name: 'Cybersecurity Foundations', date: '2025-07-20', url: null },
      { name: 'IT Security Foundations: Network Security', date: '2025-08-10', url: null },
      { name: 'Cybersecurity: Key Policies and Resources', date: '2025-08-04', url: null },
      { name: 'AWS Certified Cloud Practitioner (CLF-C02) Cert Prep 1: Cloud Concepts', date: '2025-07-20', url: null },
      { name: 'Introduction to Artificial Intelligence (AI) – IBM', date: '2025-07-01', url: 'https://www.coursera.org/account/accomplishments/verify/DI4W60MUWJ6K' },
    ],
  },
];

// Laboratorijų kortelių nuorodos į GitHub saugyklas
export const repos = {
  adLab: 'homelab',
  network: 'homelab',
  siem: 'ssh-log-analyzer',
  linux: 'linux-admin-scripts',
  scripts: 'ad-user-provisioning',
  site: 'portfolio',
  netLab: 'network-segmentation-lab',
  glpi: 'glpi-incident-management',
  crypto: 'crypto-security-labs',
};

// Technologijų žymos projektams (vienodos visomis kalbomis)
export const stacks = {
  skyScrapper: ['Laravel 13', 'PHP 8.4', 'MySQL', '2FA TOTP', 'RBAC', 'Pest', 'Tailwind', 'Alpine.js'],
  skyTools: ['Laravel', 'Livewire', 'PWA', 'Offline', 'RBAC', 'MySQL'],
  netLab: ['Cisco IOS', 'Packet Tracer', 'VLAN', 'ACL', 'SSH', 'DHCP snooping'],
  adLab: ['Windows Server 2019', 'Active Directory', 'GPO', 'Hyper-V', 'VMware'],
  network: ['VLAN', 'Wi-Fi WPA2/3', 'NAS', 'DNS', 'DHCP', 'Backups'],
  siem: ['Splunk', 'Wireshark', 'Nmap', 'IDS/IPS', 'Python'],
  linux: ['Ubuntu', 'Debian', 'Apache', 'MySQL', 'Bash'],
  scripts: ['PowerShell', 'Bash', 'Python'],
  site: ['HTML', 'CSS', 'CSP', 'HSTS', 'Schema.org', 'Node.js'],
  glpi: ['GLPI', 'ITIL', 'Service Desk', 'Tickets', 'SLA'],
  crypto: ['OpenSSL', 'RSA', 'SHA-256', 'TLS', 'Nessus', 'Wireshark'],
};
