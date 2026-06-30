// ===== TRANSLATIONS =====
const i18n = {
  es: {
    nav_about:'Sobre mí',nav_exp:'Experiencia',nav_skills:'Habilidades',nav_edu:'Formación',nav_contact:'Contacto',
    hero_title:'Ingeniero Electrónico · Especialista en Manufactura Aditiva',
    hero_desc:'Ingeniero Electrónico (B.Sc., ZAB-anerkannt) con más de 5 años de experiencia en sistemas embebidos, automatización industrial y fabricación aditiva. Disponible de inmediato en Frankfurt am Main.',
    hero_cta1:'Ver experiencia',hero_cta2:'Contactar',
    hero_badge:'📍 Frankfurt am Main, Alemania',
    fc1:'Manufactura Aditiva',fc2:'Ingeniería Electrónica',fc3:'Escaneo 3D',
    about_title:'Sobre <span class="accent">mí</span>',
    about_p1:'Ingeniero Electrónico (B.Sc.) con reconocimiento ZAB alemán (Ref. LN2024/45743-1, Bonn, 10.2024) y más de 5 años de experiencia profesional continua en Arrow Technology Information S.A.S., donde progresé de Especialista en Soporte Técnico a Senior Application Engineer &amp; AM Engineer.',
    about_p2:'Mi experiencia abarca sistemas embebidos, automatización industrial (SPS/PLC, TIA Portal, CODESYS), programación en C/C++ y Python, y manufactura aditiva avanzada — incluyendo FDM, SLA, SLS y extrusión de pellets (FGF).',
    about_p3:'Actualmente vivo en Frankfurt am Main, con disponibilidad inmediata. Alemán B1 en activa formación (ZDSK Frankfurt), Inglés B2, Español C2 nativo.',
    stat1:'Años de experiencia',stat2:'Título reconocido en Alemania',stat3:'Idiomas (ES · EN · DE)',stat4:'Alemán — en formación',
    exp_title:'Experiencia <span class="accent">Profesional</span>',exp_sub:'Arrow Technology Information S.A.S. · Bogotá, Colombia',
    job3_title:'Senior AM Engineer &amp; Application Engineer',
    job3_b1:'Liderazgo técnico en implementación de sistemas de manufactura aditiva industriales (FDM, SLA, SLS, FGF) para clientes corporativos e institucionales en Colombia.',
    job3_b2:'Consultoría técnica y application engineering en procesos pre-venta y post-venta (B2B/B2C).',
    job3_b3:'Escaneo 3D avanzado e ingeniería inversa para documentación, control de calidad y rediseño de piezas.',
    job3_b4:'I+D con materiales avanzados: polímeros reciclados, biopolímeros y materiales compuestos.',
    job3_b5:'Representación de la empresa en ferias tecnológicas y demostraciones educativas.',
    job2_title:'Chief Application Engineer',
    job2_b1:'Integración de sistemas e puesta en marcha: despliegue y calibración de sistemas de control electrónico — verificación de controladores embebidos, integración de sensores y validación de procesos en sitio.',
    job2_b2:'Programación en C/C++ y Python para adquisición de datos, reportes automáticos y monitoreo de procesos; MATLAB/Simulink para modelado y simulación de control.',
    job2_b3:'Estandarización de protocolos multi-vendor: reducción de fallos críticos en un 35%, aumento de eficiencia de soporte en un 40%.',
    job2_b4:'Diseño e impartición de programas de formación técnica para ingenieros y técnicos.',
    job2_b5:'Implementación de sistema de monitoreo remoto IoT con backend Python, integración LAN/WLAN y panel de control en tiempo real.',
    job1_title:'Especialista en Soporte Técnico',
    job1_b1:'Diagnóstico y reparación a nivel de placa de unidades de control industriales; interacción con firmware en C para calibración de sensores y control de actuadores.',
    job1_b2:'Soporte técnico de 1er/2do nivel: configuración de equipos, diagnóstico de fallos y formación a usuarios finales en sitio y de forma remota.',
    job1_b3:'Coordinación de logística de repuestos para despliegues críticos en campo; implementación de sistemas de monitoreo remoto con hardware embebido e IoT.',
    skills_title:'Habilidades &amp; <span class="accent">Tecnologías</span>',
    sk1_title:'Programación',sk2_title:'Ingeniería &amp; Control',sk3_title:'Manufactura Aditiva',sk4_title:'Digitalización 3D',sk5_title:'IT &amp; Redes',sk6_title:'Idiomas',
    sk1_li1:'C / C++ (POO, estructuras de datos)',sk1_li2:'Python · Automatización',sk1_li4:'LabVIEW · Adquisición de datos',sk1_li5:'Git · Control de versiones',
    sk2_li1:'SPS / TIA Portal / CODESYS',
    sk2_li2:'Sistemas embebidos (C/C++)',sk2_li3:'Procesamiento digital de señales',sk2_li4:'Control PID · Automatización',
    sk3_li2:'SLS · FGF (extrusión de pellets)',sk3_li3:'Slicing y optimización de parámetros',sk3_li4:'Post-procesado y acabados',sk3_li5:'Polímeros, biopolímeros, composites',
    sk4_li1:'Escaneo 3D industrial',sk4_li2:'Ingeniería inversa',sk4_li3:'Fotogrametría',sk4_li4:'Control de calidad dimensional',sk4_li5:'Procesado de nube de puntos',
    sk5_li2:'Redes: TCP/IP, LAN/WLAN',sk5_li3:'Administración Windows',sk5_li4:'Diagnóstico y reparación de hardware',
    sk6_li1:'Español — C2 Nativo',sk6_li2:'Inglés — B2 CEFR (profesional)',sk6_li3:'Alemán — B1 CEFR (en formación)',sk6_li4:'ZDSK Frankfurt · 2025–presente',
    edu_tag_emb:'Sistemas Embebidos',
    edu_title:'Formación &amp; <span class="accent">Certificaciones</span>',
    edu1_degree:'B.Sc. Ingeniería Electrónica',edu1_school:'Colombia · 2023',edu1_note:'Reconocimiento ZAB — Bonn, 10.2024 · Ref: LN2024/45743-1',
    proj_title:'Proyecto Destacado: Automatización de Proceso Industrial',proj_sub:'Planta de Biodiesel · Trabajo de Grado B.Sc. 2022–2023',
    proj_note:'Implementación de algoritmos PID vía SPS (ABB AC1131) en Texto Estructurado (IEC 61131-3). Panel HMI en tiempo real en LabVIEW y CODESYS. Simulación y validación del lazo de control completo en MATLAB/Simulink antes de la puesta en marcha del hardware.',
    cert1:'Certificado: Diseño e Impresión 3D',cert2:'Curso de Alemán B1+',cert2_sub:'ZDSK Frankfurt · 2025–presente',cert2_note:'Formación diaria activa en Frankfurt am Main',
    proj_gh_title:'Proyectos en <span class="accent">GitHub</span>',proj_gh_sub:'Repositorios públicos — cargados en tiempo real desde la API de GitHub.',proj_gh_btn:'Ver todos en GitHub →',
    contact_title:'¡Hablemos! <span class="accent">Contacto</span>',contact_sub:'¿Tienes un proyecto o una oportunidad? Estoy disponible de inmediato en Frankfurt am Main.',
    c_location:'Ubicación',c_phone:'Teléfono',avail:'Disponible inmediatamente',
    f_name:'Nombre',f_msg:'Mensaje',f_send:'Enviar mensaje',f_note:'* Abrirá tu cliente de correo.',
    email_ph:'tu@email.com',
    footer_hosted:'Alojado gratuitamente en',no_desc:'Sin descripción disponible.',
    page_title:'Edwin Rincón Aldana — Ingeniero Electrónico',
  },
  en: {
    nav_about:'About',nav_exp:'Experience',nav_skills:'Skills',nav_edu:'Education',nav_contact:'Contact',
    hero_title:'Electronic Engineer · Additive Manufacturing Specialist',
    hero_desc:'Electronic Engineer (B.Sc., ZAB-recognized, Ref. LN2024/45743-1) with 5+ years of experience in embedded systems, industrial automation and additive manufacturing. Immediately available in Frankfurt am Main.',
    hero_cta1:'View experience',hero_cta2:'Contact me',
    hero_badge:'📍 Frankfurt am Main, Germany',
    fc1:'Additive Manufacturing',fc2:'Electronics Engineering',fc3:'3D Scanning',
    about_title:'About <span class="accent">me</span>',
    about_p1:'Electronic Engineer (B.Sc.) with German ZAB recognition (Ref. LN2024/45743-1, Bonn, 10.2024) and 5+ years of continuous professional experience at Arrow Technology Information S.A.S., progressing from Technical Support Specialist to Senior Application Engineer &amp; AM Engineer.',
    about_p2:'My expertise spans embedded systems, industrial automation (PLC/TIA Portal/CODESYS), C/C++ and Python programming, and advanced additive manufacturing — including FDM, SLA, SLS and pellet extrusion (FGF).',
    about_p3:'Currently based in Frankfurt am Main, immediately available. German B1 actively in training (ZDSK Frankfurt), English B2, Spanish C2 native.',
    stat1:'Years of experience',stat2:'Degree recognized in Germany',stat3:'Languages (ES · EN · DE)',stat4:'German — in training',
    exp_title:'Professional <span class="accent">Experience</span>',exp_sub:'Arrow Technology Information S.A.S. · Bogotá, Colombia',
    job3_title:'Senior AM Engineer &amp; Application Engineer',
    job3_b1:'Technical leadership in full-cycle implementation of industrial additive manufacturing systems (FDM, SLA, SLS, FGF) for corporate and institutional clients across Colombia.',
    job3_b2:'Technical consulting and application engineering for pre-sales and post-sales processes (B2B/B2C).',
    job3_b3:'Advanced 3D scanning and reverse engineering for component documentation, quality control and redesign.',
    job3_b4:'R&amp;D with advanced materials: recycled polymers, biopolymers and composite materials.',
    job3_b5:'Represented the company at trade events, public demonstrations and educational initiatives.',
    job2_title:'Chief Application Engineer',
    job2_b1:'System integration &amp; commissioning: deployment and calibration of electronic control systems — embedded controller verification, sensor integration and on-site process validation.',
    job2_b2:'C/C++ and Python scripting for data acquisition, automated reports and process monitoring; MATLAB/Simulink for control modeling and simulation.',
    job2_b3:'Protocol standardization for multi-vendor machinery: critical failures reduced by 35%, support efficiency increased by 40%.',
    job2_b4:'Design and delivery of structured technical training programs for engineers and technicians.',
    job2_b5:'Implementation of IoT-based remote monitoring system with Python backend, LAN/WLAN integration and real-time status dashboard.',
    job1_title:'Technical Support Specialist',
    job1_b1:'Board-level diagnosis and repair of industrial control units; C-level firmware interaction for sensor calibration and actuator control.',
    job1_b2:'1st/2nd level technical support: equipment setup, fault diagnosis and user training on-site and remotely.',
    job1_b3:'Spare-parts logistics coordination for critical field deployments; implementation of remote monitoring systems with embedded hardware and IoT.',
    skills_title:'Skills &amp; <span class="accent">Technologies</span>',
    sk1_title:'Programming',sk2_title:'Engineering &amp; Control',sk3_title:'Additive Manufacturing',sk4_title:'3D Digitalization',sk5_title:'IT &amp; Networks',sk6_title:'Languages',
    sk1_li1:'C / C++ (OOP, data structures)',sk1_li2:'Python · Automation',sk1_li4:'LabVIEW · Data acquisition',sk1_li5:'Git · Version control',
    sk2_li1:'PLC / TIA Portal / CODESYS',
    sk2_li2:'Embedded systems (C/C++)',sk2_li3:'Digital signal processing',sk2_li4:'PID control · Automation',
    sk3_li2:'SLS · FGF (pellet extrusion)',sk3_li3:'Slicing &amp; parameter optimization',sk3_li4:'Post-processing and finishing',sk3_li5:'Polymers, biopolymers, composites',
    sk4_li1:'Industrial 3D scanning',sk4_li2:'Reverse engineering',sk4_li3:'Photogrammetry',sk4_li4:'Dimensional quality control',sk4_li5:'Point cloud processing',
    sk5_li2:'Networks: TCP/IP, LAN/WLAN',sk5_li3:'Windows administration',sk5_li4:'Hardware diagnosis &amp; repair',
    sk6_li1:'Spanish — C2 Native',sk6_li2:'English — B2 CEFR (professional)',sk6_li3:'German — B1 CEFR (in training)',sk6_li4:'ZDSK Frankfurt · 2025–present',
    edu_tag_emb:'Embedded Systems',
    edu_title:'Education &amp; <span class="accent">Certifications</span>',
    edu1_degree:'B.Sc. Electronic Engineering',edu1_school:'Colombia · 2023',edu1_note:'ZAB Recognition — Bonn, 10.2024 · Ref: LN2024/45743-1',
    proj_title:'Key Project: Industrial Process Automation',proj_sub:'Biodiesel Plant · B.Sc. Thesis 2022–2023',
    proj_note:'PID algorithms implemented via PLC (ABB AC1131) in Structured Text (IEC 61131-3). Real-time HMI dashboard in LabVIEW and CODESYS. Full control loop simulation and validation in MATLAB/Simulink prior to hardware commissioning.',
    cert1:'Certificate: 3D Design &amp; Printing',cert2:'German Language Course B1+',cert2_sub:'ZDSK Frankfurt · 2025–present',cert2_note:'Daily active training in Frankfurt am Main',
    proj_gh_title:'Projects on <span class="accent">GitHub</span>',proj_gh_sub:'Public repositories — loaded in real-time from the GitHub API.',proj_gh_btn:'View all on GitHub →',
    contact_title:"Let's talk! <span class=\"accent\">Contact</span>",contact_sub:'Have a project or opportunity? I am immediately available in Frankfurt am Main.',
    c_location:'Location',c_phone:'Phone',avail:'Immediately available',
    f_name:'Name',f_msg:'Message',f_send:'Send message',f_note:'* Will open your email client.',
    email_ph:'your@email.com',
    footer_hosted:'Hosted for free on',no_desc:'No description available.',
    page_title:'Edwin Rincón Aldana — Electronic Engineer',
  },
  de: {
    nav_about:'Über mich',nav_exp:'Erfahrung',nav_skills:'Fähigkeiten',nav_edu:'Ausbildung',nav_contact:'Kontakt',
    hero_title:'Elektronikingenieur · Spezialist für Additive Fertigung',
    hero_desc:'Elektronikingenieur (B.Sc., ZAB-anerkannt, Ref. LN2024/45743-1) mit über 5 Jahren Erfahrung in eingebetteten Systemen, Steuerungstechnik und Additiver Fertigung. Sofort verfügbar in Frankfurt am Main.',
    hero_cta1:'Erfahrung ansehen',hero_cta2:'Kontakt aufnehmen',
    hero_badge:'📍 Frankfurt am Main, Deutschland',
    fc1:'Additive Fertigung',fc2:'Elektrotechnik',fc3:'3D-Scanning',
    about_title:'Über <span class="accent">mich</span>',
    about_p1:'Elektronikingenieur (B.Sc., ZAB-anerkannt, Ref. LN2024/45743-1, Bonn, 10.2024) mit über 5 Jahren kontinuierlicher Berufserfahrung bei Arrow Technology Information S.A.S., wo ich vom Technischen Support-Spezialisten zum Senior Application Engineer &amp; AM Engineer aufgestiegen bin.',
    about_p2:'Meine Erfahrung umfasst eingebettete Systeme, Industrieautomation (SPS/TIA Portal/CODESYS), C/C++- und Python-Programmierung sowie fortgeschrittene Additive Fertigung — einschließlich FDM, SLA, SLS und Granulatextrusion (FGF).',
    about_p3:'Aktuell in Frankfurt am Main wohnhaft — sofort verfügbar. Deutsch B1 aktiv in Weiterbildung (ZDSK Frankfurt), Englisch B2, Spanisch C2 Muttersprache.',
    stat1:'Jahre Berufserfahrung',stat2:'ZAB-anerkannter Abschluss',stat3:'Sprachen (ES · EN · DE)',stat4:'Deutsch — in Weiterbildung',
    exp_title:'Berufliche <span class="accent">Erfahrung</span>',exp_sub:'Arrow Technology Information S.A.S. · Bogotá, Kolumbien',
    job3_title:'Senior AM Engineer &amp; Application Engineer',
    job3_b1:'Technische Leitung bei der vollständigen Implementierung industrieller Additiver-Fertigungs-Systeme (FDM, SLA, SLS, FGF) für Unternehmens- und Institutionskunden in Kolumbien.',
    job3_b2:'Technische Beratung und Application Engineering für Vor- und Nachverkaufsprozesse (B2B/B2C).',
    job3_b3:'Fortgeschrittenes 3D-Scanning und Reverse Engineering für Bauteil-Dokumentation, Qualitätssicherung und Redesign.',
    job3_b4:'F&amp;E mit innovativen Werkstoffen: Recyclingpolymere, Biopolymere und Verbundwerkstoffe.',
    job3_b5:'Repräsentation des Unternehmens auf Fachmessen, Produktdemonstrationen und Bildungsveranstaltungen.',
    job2_title:'Chief Application Engineer',
    job2_b1:'Systemintegration &amp; Inbetriebnahme: Deployment und Kalibrierung elektronischer Steuerungssysteme — Steuerungsverifikation, Sensorintegration und Prozessvalidierung vor Ort.',
    job2_b2:'C/C++- und Python-Skripte für Datenerfassung, automatisierte Berichte und Prozessüberwachung; MATLAB/Simulink für Steuerungsmodellierung und Simulation.',
    job2_b3:'Protokollstandardisierung für Multi-Vendor-Maschinenpark: kritische Ausfälle –35 %, Support-Effizienz +40 %.',
    job2_b4:'Entwicklung und Durchführung strukturierter Schulungsprogramme für Ingenieure und Techniker.',
    job2_b5:'Implementierung eines IoT-basierten Fernüberwachungssystems mit Python-Backend, LAN/WLAN-Integration und Echtzeit-Dashboard.',
    job1_title:'Technischer Support-Spezialist',
    job1_b1:'Board-Level-Diagnose und Reparatur industrieller Steuereinheiten; Firmware-Interaktion auf C-Ebene für Sensorkalibrierung und Aktorsteuerung.',
    job1_b2:'Technischer Support der 1. und 2. Ebene: Geräteeinrichtung, Fehlerdiagnose und Anwenderschulung vor Ort und remote.',
    job1_b3:'Koordination der Ersatzteillogistik für kritische Feldeinsätze; Implementierung von Fernüberwachungssystemen mit Embedded-Hardware und IoT.',
    skills_title:'Fähigkeiten &amp; <span class="accent">Technologien</span>',
    sk1_title:'Programmierung',sk2_title:'Engineering &amp; Steuerung',sk3_title:'Additive Fertigung',sk4_title:'3D-Digitalisierung',sk5_title:'IT &amp; Netzwerk',sk6_title:'Sprachen',
    sk1_li1:'C / C++ (OOP, Datenstrukturen)',sk1_li2:'Python · Automatisierung',sk1_li4:'LabVIEW · Datenerfassung',sk1_li5:'Git · Versionskontrolle',
    sk2_li1:'SPS / TIA Portal / CODESYS',
    sk2_li2:'Eingebettete Systeme (C/C++)',sk2_li3:'Digitale Signalverarbeitung',sk2_li4:'PID-Regelung · Automatisierung',
    sk3_li2:'SLS · FGF (Granulatextrusion)',sk3_li3:'Slicing &amp; Parameteroptimierung',sk3_li4:'Nachbearbeitung und Oberflächenveredelung',sk3_li5:'Polymere, Biopolymere, Verbundwerkstoffe',
    sk4_li1:'Industrielles 3D-Scanning',sk4_li2:'Reverse Engineering',sk4_li3:'Photogrammetrie',sk4_li4:'Dimensionale Qualitätssicherung',sk4_li5:'Punktwolkenverarbeitung',
    sk5_li2:'Netzwerke: TCP/IP, LAN/WLAN',sk5_li3:'Windows-Administration',sk5_li4:'Hardware-Diagnose &amp; -Reparatur',
    sk6_li1:'Spanisch — C2 Muttersprache',sk6_li2:'Englisch — B2 CEFR (professionell)',sk6_li3:'Deutsch — B1 CEFR (in Weiterbildung)',sk6_li4:'ZDSK Frankfurt · 2025–heute',
    edu_tag_emb:'Eingebettete Systeme',
    edu_title:'Ausbildung &amp; <span class="accent">Zertifikate</span>',
    edu1_degree:'B.Sc. Elektrotechnik',edu1_school:'Kolumbien · 2023',edu1_note:'ZAB-Anerkennung bestätigt — Bonn, 10.2024 · Ref: LN2024/45743-1',
    proj_title:'Schlüsselprojekt: Industrielle Prozessautomatisierung',proj_sub:'Biodieselanlage · B.Sc. Abschlussarbeit 2022–2023',
    proj_note:'PID-Algorithmen via SPS (ABB AC1131) in Strukturiertem Text (IEC 61131-3) implementiert. Echtzeit-HMI-Dashboard in LabVIEW und CODESYS. Vollständiger Regelkreis in MATLAB/Simulink modelliert und validiert vor der Hardware-Inbetriebnahme.',
    cert1:'Zertifikat: 3D-Design &amp; 3D-Druck',cert2:'Deutschkurs B1+',cert2_sub:'ZDSK Frankfurt · 2025–heute',cert2_note:'Tägliche aktive Weiterbildung in Frankfurt am Main',
    proj_gh_title:'Projekte auf <span class="accent">GitHub</span>',proj_gh_sub:'Öffentliche Repositories — in Echtzeit von der GitHub-API geladen.',proj_gh_btn:'Alle auf GitHub ansehen →',
    contact_title:'Kontakt <span class="accent">aufnehmen</span>',contact_sub:'Haben Sie ein Projekt oder ein Stellenangebot? Ich bin sofort verfügbar in Frankfurt am Main.',
    c_location:'Adresse',c_phone:'Telefon',avail:'Sofort verfügbar',
    f_name:'Name',f_msg:'Nachricht',f_send:'Nachricht senden',f_note:'* Öffnet Ihren E-Mail-Client.',
    email_ph:'ihre@email.de',
    footer_hosted:'Kostenlos gehostet auf',no_desc:'Keine Beschreibung vorhanden.',
    page_title:'Edwin Rincón Aldana — Elektronikingenieur',
  }
};

// ===== LANGUAGE ENGINE =====
let currentLang = localStorage.getItem('lang') || 'es';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  const t = i18n[lang];
  if (t.page_title) document.title = t.page_title;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.lang === lang)
  );
}

document.querySelectorAll('.lang-btn').forEach(btn =>
  btn.addEventListener('click', () => applyLang(btn.dataset.lang))
);

// ===== NAV =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.background = window.scrollY > 50
    ? 'rgba(10,10,15,0.97)' : 'rgba(10,10,15,0.88)';
});

const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// ===== GITHUB PROJECTS =====
const LANG_COLORS = {
  JavaScript:'#f1e05a',Python:'#3572A5',HTML:'#e34c26',CSS:'#563d7c',
  TypeScript:'#2b7489','C++':'#f34b7d',C:'#555555',Java:'#b07219',
  Go:'#00ADD8',Rust:'#dea584',default:'#6c63ff'
};
const ICONS = ['📦','🔧','⚙️','🚀','💡','🔬','🛠️','✨'];

async function loadProjects() {
  const grid = document.getElementById('projects-grid');
  try {
    const res = await fetch('https://api.github.com/users/Eerincona/repos?sort=updated&per_page=9');
    const repos = await res.json();
    if (!Array.isArray(repos) || repos.length === 0) throw new Error('none');
    grid.innerHTML = repos.map((repo, i) => {
      const c = LANG_COLORS[repo.language] || LANG_COLORS.default;
      const desc = repo.description || i18n[currentLang].no_desc;
      return `<a class="project-card" href="${repo.html_url}" target="_blank" rel="noopener">
        <div class="project-icon">${ICONS[i % ICONS.length]}</div>
        <div class="project-name">${repo.name}</div>
        <div class="project-desc">${desc}</div>
        <div class="project-meta">
          ${repo.language ? `<span><i style="background:${c};width:10px;height:10px;border-radius:50%;display:inline-block;margin-right:4px"></i>${repo.language}</span>` : ''}
          <span>⭐ ${repo.stargazers_count}</span>
          <span>🍴 ${repo.forks_count}</span>
        </div>
      </a>`;
    }).join('');
  } catch {
    const msgs = {es:'Ver proyectos en GitHub',en:'View projects on GitHub',de:'Projekte auf GitHub'};
    grid.innerHTML = `<div class="project-card" style="grid-column:1/-1;text-align:center;opacity:0.6">
      <div class="project-icon">🐙</div>
      <div class="project-name">${msgs[currentLang]}</div>
    </div>`;
  }
}
loadProjects();

// ===== CONTACT FORM =====
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const msg = document.getElementById('message').value;
  const subjects = {
    es:`Contacto desde portfolio — ${name}`,
    en:`Portfolio contact — ${name}`,
    de:`Kontakt über Portfolio — ${name}`
  };
  const subject = encodeURIComponent(subjects[currentLang]);
  const body = encodeURIComponent(`${name} <${email}>\n\n${msg}`);
  window.location.href = `mailto:eerincona@gmail.com?subject=${subject}&body=${body}`;
});

// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.skill-category,.stat-card,.edu-card,.timeline-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// ===== INIT =====
applyLang(currentLang);
