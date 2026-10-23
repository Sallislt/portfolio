// Lietuviškas turinys

export default {
  code: 'lt',
  locale: 'lt_LT',
  dateLocale: 'lt-LT',

  meta: {
    title: 'Saulius Stankevicius — IT pagalbos, sistemų ir tinklų technikas · Kibernetinis saugumas',
    description:
      'IT pagalbos (L1/L2), sistemų ir tinklų technikas, besidomintis kibernetiniu saugumu. Kompiuterių tinklų administravimo bakalauras, Google Cybersecurity sertifikatas. Galiu pradėti iš karto, Paryžiaus regionas.',
    ogTitle: 'Saulius Stankevicius — IT pagalba, sistemos ir tinklai, kibernetinis saugumas',
    jobTitle: 'IT pagalbos technikas – sistemos ir tinklai',
    keywords: [
      'IT pagalbos specialistas',
      'sistemų administratorius',
      'tinklų administratorius',
      'kibernetinis saugumas',
      'SOC analitikas',
      'Prancūzija',
    ],
  },

  ui: {
    skip: 'Pereiti prie turinio',
    menu: 'Meniu',
    close: 'Uždaryti',
    theme: 'Keisti temą',
    lang: 'Kalba',
    downloadCv: 'Atsisiųsti CV',
    contactMe: 'Susisiekti',
    copy: 'Kopijuoti',
    copied: 'Nukopijuota!',
    verify: 'Patikrinti',
    print: 'Spausdinti / PDF',
    backTop: 'Į viršų',
    present: 'dabar',
    photoAlt: 'Sauliaus Stankevičiaus portretas',
  },

  nav: [
    { id: 'profil', label: 'Apie mane' },
    { id: 'competences', label: 'Įgūdžiai' },
    { id: 'projets', label: 'Projektai' },
    { id: 'parcours', label: 'Patirtis' },
    { id: 'certifications', label: 'Sertifikatai' },
    { id: 'contact', label: 'Kontaktai' },
  ],

  hero: {
    status: 'Galiu pradėti iš karto · Paryžiaus regionas',
    hello: 'Sveiki, aš –',
    role: 'IT pagalbos, sistemų ir tinklų technikas',
    roleAccent: 'su kibernetinio saugumo kryptimi',
    lead:
      'Trylika metų darbo aukštyje, iki 183 m, išmokė vieno: kai klaida brangiai kainuoja, nieko nepaliekama atsitiktinumui. Šį kruopštumą dabar taikau IT srityje – naudotojų aptarnavimui, Windows/Linux, Active Directory, tinklams ir saugumui.',
    lookingFor: 'Ieškau darbo',
    roles: ['IT pagalbos technikas (L1/L2)', 'Sistemų ir tinklų technikas', 'Jaunesnysis SOC analitikas'],
    terminal: [
      ['whoami', 'saulius — support · sysadmin · blue team'],
      ['cat diplomas.txt', 'Kompiuterių tinklų administravimo bakalauras'],
      ['ls sertifikatai/ | wc -l', '{certCount}'],
      ['./pasiekiamumas.sh', 'OK — iš karto, Paryžiaus regionas'],
    ],
  },

  stats: [
    { value: '13', label: 'metų pramoniniu alpinistu, 10 iš jų – komandos vadovu' },
    { value: 'BA', label: 'kompiuterių tinklų administravimas' },
    { value: '{certCount}', label: 'IT ir kibernetinio saugumo sertifikatai' },
    { value: '3', label: 'kalbos: LT gimtoji · EN C2 · FR C1' },
  ],

  story: {
    kicker: 'Apie mane',
    title: 'Nuo saugumo aukštyje iki kibernetinio saugumo',
    intro:
      'Informatika domiuosi nuo mokyklos laikų, esu baigęs kompiuterių tinklų administravimo studijas, o trylika metų Prancūzijoje dirbau pramoniniu alpinistu ir komandos vadovu. Dabar grįžtu į IT su aiškiu tikslu: prisijungti prie IT pagalbos ar infrastruktūros komandos, įgyti patirties ir augti kibernetinio saugumo link. Ką atsinešu nuo pirmos dienos:',
    cards: [
      {
        icon: 'shield',
        title: 'Saugumo kultūra',
        text: 'Rizikos vertinimas, procedūros, dviguba patikra, tikrinamos AAP: aukštyje saugumas niekada nėra pasirinkimas. Būtent tokio mąstymo reikia IT technikui.',
      },
      {
        icon: 'wrench',
        title: 'Incidentų refleksas',
        text: 'Greitai diagnozuoti, nustatyti prioritetus, išspręsti esant apribojimams ir spaudimui, o tada aiškiai paaiškinti klientui, kas padaryta.',
      },
      {
        icon: 'doc',
        title: 'Kruopštumas ir dokumentacija',
        text: 'Komandos vadovas nuo 2014 m.: darbų organizavimas objekte, komandos saugumas, atliktų darbų kontrolė ir bendravimas su klientais.',
      },
    ],
    facts: [
      ['Vieta', 'Orgeval (78), į vakarus nuo Paryžiaus'],
      ['Pasiekiamumas', 'Iš karto — nuotolinės studijos netrukdo dirbti'],
      ['Vairuotojo pažymėjimas', 'A ir B kategorijos, turiu automobilį'],
      ['Kalbos', 'Lietuvių gimtoji · Anglų C2 · Prancūzų C1'],
    ],
  },

  skills: {
    kicker: 'Įgūdžiai',
    title: 'Ką moku',
    intro: 'Įgūdžiai, įgyti studijose, per sertifikavimo programas ir nuolat tobulinamoje namų laboratorijoje.',
    groups: [
      {
        icon: 'headset',
        name: 'Naudotojų aptarnavimas',
        items: ['L1/L2 incidentų diagnostika ir sprendimas', 'Užklausų sistemos: GLPI, ServiceNow', 'Windows 10/11: diegimas, atvaizdai, gedimų šalinimas', 'Nuotolinė pagalba ir pagalba vietoje', 'Spausdintuvai, programos, periferija'],
      },
      {
        icon: 'server',
        name: 'Sistemos',
        items: ['Windows Server 2016/2019', 'Active Directory: paskyros, grupės, GPO, teisės', 'Linux Ubuntu / Debian: paslaugos, naudotojai, teisės', 'VMware vSphere, Hyper-V, momentinės kopijos', 'Atsarginės kopijos ir atkūrimas'],
      },
      {
        icon: 'network',
        name: 'Tinklai',
        items: ['TCP/IP, OSI modelis', 'LAN, VLAN, saugus Wi-Fi, VPN', 'DNS, DHCP, bazinis maršrutizavimas', 'Srauto analizė: Wireshark, Nmap', 'Kabeliai ir serverių spintos'],
      },
      {
        icon: 'lock',
        name: 'Kibernetinis saugumas',
        items: ['Žurnalų analizė ir SIEM: Splunk', 'Aptikimas ir reagavimas, IDS/IPS pagrindai', 'Darbo vietų sustiprinimas, ugniasienė, antivirusinė', 'Prieigos valdymas, MFA / 2FA, mažiausios privilegijos', 'CTF: TryHackMe, Hack The Box'],
      },
      {
        icon: 'code',
        name: 'Skriptai ir programavimas',
        items: ['PowerShell ir Bash automatizavimas', 'Python saugumo užduotims', 'PHP / Laravel, SQL (MySQL, SQLite)', 'Git, automatiniai testai', 'HTML / CSS / JavaScript'],
      },
      {
        icon: 'users',
        name: 'Asmeninės savybės',
        items: ['Aiškus bendravimas, gebu paprastai paaiškinti', 'Ramybė esant spaudimui', 'Organizuotumas, prioritetai', 'Orientacija į klientą', 'Komandinis darbas, vadovavimas'],
      },
    ],
  },

  projects: {
    kicker: 'Projektai',
    title: 'Įrodymai, ne tik žodžiai',
    intro: 'Dvi realios mano sukurtos interneto programos ir laboratorijos, kuriose praktikuojuosi administravimo ir saugumo srityse.',
    featuredLabel: 'Veikianti programa',
    shows: 'Ką tai parodo:',
    featured: [
      {
        key: 'skyScrapper',
        name: 'Sky Scrapper — AAP patikrų registras',
        tag: 'Interneto programa · baigiamasis darbas',
        text: 'Apsaugos nuo kritimo iš aukščio priemonių (III kategorijos AAP) periodinių patikrų registras alpinistinių darbų įmonei. Įdiegta bendrojo naudojimo prieglobos serveryje.',
        bullets: [
          'Dviejų veiksnių autentifikacija (TOTP) ir griežtos slaptažodžių taisyklės',
          'Vaidmenimis pagrįsta prieiga (Policy klasės), veiksmų žurnalas, patvirtintos patikros nekeičiamos',
          'HTTP saugumo antraštės, apsauga nuo robotų, BDAR (jokių tikrų duomenų Git saugykloje)',
          'Sąsaja 5 kalbomis, įskaitant arabų (RTL), PDF ataskaitos, QR kodai, Excel importas, priminimai el. paštu',
          'Automatinių testų rinkinys (Pest), apimantis saugumą ir verslo taisykles',
        ],
        shows: 'Programų saugumą, tapatybių ir prieigos valdymą, serverio diegimą ir priežiūrą.',
      },
      {
        key: 'skyTools',
        name: 'Sky Tools — įrankių inventorius',
        tag: 'Progresyvioji interneto programa (PWA)',
        text: 'Įrankių, automobilių, objektų ir eksploatacinių medžiagų apskaita valymo įmonei: kiosko režimas, objektų žemėlapis, ataskaitos, darbas be interneto.',
        bullets: [
          'Vaidmenų ir teisių valdymas',
          'Darbas be ryšio ir sinchronizavimas',
          'Daugiakalbė sąsaja (FR, EN, LT, PT, IT)',
        ],
        shows: 'Įrangos ir inventoriaus valdymą, CMDB logiką, naudotojų poreikių analizę.',
      },
    ],
    labsTitle: 'Namų laboratorija ir pratybos',
    labs: [
      { key: 'adLab', name: 'Windows Server ir Active Directory laboratorija', text: 'Virtualizuotas Windows Server 2019 domenas: naudotojai, grupės, OU, GPO, bendrinami aplankai ir NTFS teisės.' },
      { key: 'network', name: 'Segmentuotas ir apsaugotas tinklas', text: 'VLAN, saugus Wi-Fi, NAS, izoliuotos IP kameros, tinkliniai spausdintuvai, automatinės atsarginės kopijos; sukonfigūruota 50+ įrenginių.' },
      { key: 'siem', name: 'Žurnalų analizė ir aptikimas', text: 'Įvykių paieška Splunk, srauto analizė, IDS/IPS scenarijai ir CTF užduotys TryHackMe platformoje.' },
      { key: 'linux', name: 'Linux interneto ir duomenų bazių serveris', text: 'Debian/Ubuntu: naudotojai, paslaugos, teisės, Apache ir MySQL, bazinis sustiprinimas.' },
      { key: 'scripts', name: 'Administravimo skriptai', text: 'PowerShell ir Bash automatizavimas: paskyrų kūrimas, inventorius, valymas, atsarginės kopijos.' },
      { key: 'site', name: 'Ši svetainė', text: 'Statinė daugiakalbė svetainė be slapukų ir sekiklių, su CSP politika, HSTS ir struktūrizuotais duomenimis paieškos sistemoms.' },
    ],
  },

  journey: {
    kicker: 'Patirtis',
    title: 'Patirtis ir išsilavinimas',
    experienceTitle: 'Darbo patirtis',
    educationTitle: 'Išsilavinimas',
    languagesTitle: 'Kalbos',
    experience: [
      {
        role: 'Pramoninis alpinistas — komandos vadovas',
        org: 'Per įdarbinimo agentūrą Satis TT',
        place: 'Île-de-France, Prancūzija',
        start: '2018',
        end: null,
        bullets: [
          'Komandos vadovas dirbant su virvėmis, keltuvu ir pastoliais: darbų organizavimas, komandos saugumas, ryšys su klientu',
          'Darbai iki 183 m aukštyje La Défense dangoraižiuose',
        ],
        missions: [
          { org: 'Sky Scrapper', period: '2021 – 2025 · nuo 2025-03', text: 'Komandos vadovas. Langų ir fasadų valymas (Kärcher), dulkių valymas, apsauginių tinklų nuo kritimo (žmonėms ir daiktams) bei nuo paukščių montavimas, dažymas, mūro darbai, fasadų apžiūra, hidroizoliacija ir nuotėkių paieška.' },
          { org: 'Red Sky', period: '2025-01 – 2025-03', text: 'Langų ir fasadų valymas su virvėmis (Kärcher).' },
          { org: 'Vertigo', period: '2018-09 – 2021-08', text: 'Valymo darbai su virvėmis iki 183 m aukštyje: Tour CBX, Tour Europe, Opus 12 ir kiti La Défense dangoraižiai.' },
        ],
      },
      {
        role: 'Pramoninis alpinistas, vėliau komandos vadovas',
        org: 'Accessit',
        place: 'Île-de-France, Prancūzija',
        start: '2012',
        end: '2018',
        bullets: [
          'Po dvejų metų – komandos vadovas',
          'Langų, latakų ir lietvamzdžių valymas',
          'Dulkių valymas sunkiai pasiekiamose vietose',
          'Darbas su virvėmis, keltuvu ir pastoliais',
        ],
      },
      {
        role: 'Statybininkas, vėliau stalius',
        org: 'Statybų objektai',
        place: 'Anglija',
        start: '2010',
        end: '2012',
        bullets: [
          'Išvykau į Angliją ieškoti IT darbo didesnėje rinkoje',
          'Nuo pagalbinio darbininko iki staliaus',
          'Patobulinau anglų kalbą darbo aplinkoje',
        ],
      },
      {
        role: 'Interneto ir komunikacijos specialistas',
        org: 'Kauno kolegija, Viešųjų ryšių ir komunikacijos tarnyba',
        place: 'Kaunas',
        start: '2009',
        end: '2010',
        bullets: [
          'Interneto svetainės naujovių paieška ir diegimas',
          'Kauno kolegijos reprezentavimas',
        ],
      },
      {
        role: 'Studentų savanorystė: internetas, video, komunikacija',
        org: 'Kauno kolegijos studentų atstovybė (KKSA)',
        place: 'Kaunas',
        start: '2006',
        end: '2009',
        bullets: [
          'Narys, vėliau Informacijos komiteto atsakingasis: interneto svetainės priežiūra',
          'Viceprezidentas ryšiams su visuomene',
          'Asociacija „Kvadratas“: video svetainės priežiūra, filmavimas, reportažai, video montažas',
        ],
      },
      {
        role: 'Sezoninis darbininkas, vėliau komandos vadovas',
        org: 'Kauno šaldytuvai (dabar FUDO), mėlynių perdirbimas',
        place: 'Kaunas',
        period: 'Vasaros sezonai nuo 2005 m.',
        bullets: [
          'Pirmasis darbas 18 metų – pagalbinis darbininkas',
          'Kitais sezonais – 12 žmonių komandos vadovas',
        ],
      },
    ],
    education: [
      {
        degree: 'Informacinės technologijos, informatikos bakalauras (studijuoju nuotoliu)',
        school: 'VILNIUS TECH, Fundamentinių mokslų fakultetas',
        url: 'https://vilniustech.lt/stojantiesiems/studiju-programos/informacines-technologijos-549969-l-454/',
        note: 'Debesų kompiuterija, kriptografija ir informacijos sauga, duomenų bazių valdymas, interneto technologijos, IT valdymas, programų inžinerija.',
        period: '2025-09 – 2027-06 (planuojama)',
      },
      { degree: 'CQP Cordiste 2 lygis (dabar „Cordiste confirmé“)', school: 'Profesinis sertifikatas, Prancūzija', period: '2023' },
      { degree: 'CQP Cordiste 1 lygis', school: 'Profesinis sertifikatas, Prancūzija', period: '2016' },
      {
        degree: 'Informatikos inžinerijos profesinis bakalauras — kompiuterių tinklų administravimas (180 ECTS), inžinieriaus kvalifikacija',
        school: 'Kauno kolegija, Technologijų fakultetas',
        url: 'https://kaunokolegija.lt/english/',
        note: 'Kompiuterių tinklai, tinklų sauga, MS Windows ir Linux sistemos, duomenų bazės, programavimas, operacinės sistemos ir kompiuterių aparatinė įranga.',
        period: '2006 – 2009',
      },
      { degree: 'Programavimo klasė (Delphi)', school: 'Jaunųjų kompiuterininkų mokykla (JKM) prie KTU, Kaunas', url: 'https://jkm.ktu.edu/c-sharp/?mokymai-klasems=vienuoliktokams', period: '2005 – 2006' },
      { degree: 'Informatikos klasė', school: 'Moksleivių techninės kūrybos centras (MTKC), Kaunas', url: 'https://www.mtkc.lt/', period: '2003 – 2004' },
    ],
    languages: [
      { name: 'Lietuvių', level: 'Gimtoji', pct: 100 },
      { name: 'Anglų', level: 'Profesinis lygis — C2', pct: 95 },
      { name: 'Prancūzų', level: 'Laisvai — C1', pct: 85 },
    ],
  },

  certs: {
    kicker: 'Sertifikatai',
    title: '{certCount} sertifikatai, patikrinami vienu paspaudimu',
    intro: '2025 m. baigtos programos, skirtos tinklų pagrindams, grėsmių aptikimui, reagavimui į incidentus ir debesijos saugumui.',
    modules: 'moduliai',
    path: 'Programa',
  },

  contact: {
    kicker: 'Kontaktai',
    title: 'Pasikalbėkime apie jūsų komandą',
    lead: 'Ieškote IT pagalbos, sistemų ir tinklų techniko ar jaunesniojo SOC analitiko? Galiu atvykti į pokalbį iš karto – gyvai Paryžiaus regione arba nuotoliu.',
    email: 'El. paštas',
    phone: 'Telefonas',
    linkedin: 'LinkedIn',
    location: 'Vieta',
    locationValue: 'Orgeval (78630), Prancūzija',
  },

  footer: {
    note: 'Statinė svetainė be slapukų ir sekiklių.',
    updated: 'Atnaujinta',
  },
};
