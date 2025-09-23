/* script.js - tabs, cards, modal, bilingual toggle, form submit (WA + mailto) */
const programs = [
  // WHV Offline
  { id:1, title_id:"Writing Task 1 — General Training (Fast-Track)", title_en:"Writing Task 1 — General Training (Fast-Track)", category:["whv","offline","fasttrack"], subtitle_id:"Persiapan surat/penulisan cepat untuk WHV", subtitle_en:"Letter/task writing for WHV general training", price:"IDR 500,000", tags:["offline"] },
  { id:2, title_id:"Writing Task 2 (Fast-Track)", title_en:"Writing Task 2 (Fast-Track)", category:["whv","offline","fasttrack"], subtitle_id:"Latihan esai terfokus untuk kebutuhan General Training", subtitle_en:"Focused essay practice for General Training", price:"IDR 450,000", tags:["offline"] },
  { id:3, title_id:"Reading & Listening (Fast-Track)", title_en:"Reading & Listening (Fast-Track)", category:["whv","offline","fasttrack"], subtitle_id:"Meningkatkan skor pemahaman teks & audio", subtitle_en:"Improve reading & listening comprehension scores", price:"IDR 400,000", tags:["offline"] },
  { id:4, title_id:"Practice Speaking", title_en:"Practice Speaking", category:["whv","offline"], subtitle_id:"Sesi praktik berbicara intensif", subtitle_en:"Intensive speaking practice sessions", price:"IDR 200,000", tags:["offline"] },
  { id:5, title_id:"IELTS Basic", title_en:"IELTS Basic", category:["whv","offline"], subtitle_id:"Program dasar untuk pemula", subtitle_en:"Basic IELTS program for beginners", price:"IDR 500,000", tags:["offline"] },
  { id:6, title_id:"Private Class (Online/Offline)", title_en:"Private Class (Online/Offline)", category:["whv","hybrid"], subtitle_id:"Sesi privat sesuai kebutuhan (koreksi + fokus topik)", subtitle_en:"1:1 sessions tailored to needs", price:"+IDR 100,000 / jam", tags:["hybrid"] },

  // Akademis
  { id:11, title_id:"Writing Task 1 — Academic (Fast-Track)", title_en:"Writing Task 1 — Academic (Fast-Track)", category:["akademis","fasttrack","offline"], subtitle_id:"Grafik, tabel, diagram — fokus analisis data", subtitle_en:"Graphs, tables, diagrams — data analysis focus", price:"IDR 400,000", tags:["offline","online"] },
  { id:12, title_id:"Writing Task 2 — Academic (Intensif)", title_en:"Writing Task 2 — Academic (Intensive)", category:["akademis","intensif","offline"], subtitle_id:"Pendalaman esai akademik & argumen", subtitle_en:"Deep academic essay & argument training", price:"IDR 700,000", tags:["offline"] },
  { id:13, title_id:"Reading & Listening (Intensif)", title_en:"Reading & Listening (Intensive)", category:["akademis","intensif","offline"], subtitle_id:"Pendalaman teknik soal-soal akademik", subtitle_en:"Deep technique training for academic questions", price:"IDR 650,000", tags:["offline"] },
  { id:14, title_id:"Writing Task 1 Academic (Intensif)", title_en:"Writing Task 1 Academic (Intensive)", category:["akademis","intensif","offline"], subtitle_id:"Pendalaman struktur & vocabulary akademik", subtitle_en:"Intensive structure & academic vocabulary", price:"IDR 650,000", tags:["offline"] },
  { id:15, title_id:"Reading & Listening (Fast-Track) — Academic", title_en:"Reading & Listening (Fast-Track) — Academic", category:["akademis","fasttrack","offline"], subtitle_id:"Kelas cepat untuk bagian bacaan & audio", subtitle_en:"Quick class for reading & audio sections", price:"IDR 400,000", tags:["offline"] },

  // Online programs
  { id:21, title_id:"Writing Task 1 General Training (Online)", title_en:"Writing Task 1 General Training (Online)", category:["online","fasttrack"], subtitle_id:"Versi online — Fast-Track", subtitle_en:"Online version — Fast-Track", price:"IDR 600,000", tags:["online"] },
  { id:22, title_id:"Writing Task 2 — Fast-Track (Online)", title_en:"Writing Task 2 — Fast-Track (Online)", category:["online","fasttrack"], subtitle_id:"Versi online, kursus singkat", subtitle_en:"Online version, short course", price:"IDR 675,000", tags:["online"] },
  { id:23, title_id:"Writing Task 1 Academic (Intensif — Online)", title_en:"Writing Task 1 Academic (Intensive — Online)", category:["online","intensif"], subtitle_id:"Program intensif versi online", subtitle_en:"Intensive online program", price:"IDR 1,000,001", tags:["online"] },
  { id:24, title_id:"Writing Task 2 Academic (Intensif — Online)", title_en:"Writing Task 2 Academic (Intensive — Online)", category:["online","intensif"], subtitle_id:"Pendalaman esai akademik secara online", subtitle_en:"Deep essay training online", price:"IDR 1,000,002", tags:["online"] },
  { id:25, title_id:"Reading & Listening (Intensif — Online)", title_en:"Reading & Listening (Intensive — Online)", category:["online","intensif"], subtitle_id:"Versi online: kedalaman latihan & simulasi", subtitle_en:"Online depth practice & simulation", price:"IDR 1,000,003", tags:["online"] },
  { id:26, title_id:"Practice Speaking (Online)", title_en:"Practice Speaking (Online)", category:["online"], subtitle_id:"Sesi online — fokus speaking & feedback", subtitle_en:"Online speaking sessions with feedback", price:"IDR 200,000", tags:["online"] },
  { id:27, title_id:"IELTS Basic (Online)", title_en:"IELTS Basic (Online)", category:["online"], subtitle_id:"Dasar-dasar IELTS dalam format online", subtitle_en:"IELTS basics in online format", price:"IDR 600,000", tags:["online"] },

  // Fast-Track combined
  { id:31, title_id:"Fast-Track Writing Task 1 (Academic)", title_en:"Fast-Track Writing Task 1 (Academic)", category:["fasttrack"], subtitle_id:"Offline & Online opsi", subtitle_en:"Offline & Online options", price:"Offline: IDR 400,000 • Online: IDR 600,000", tags:["offline","online"] },
  { id:32, title_id:"Fast-Track Writing Task 2 (Academic)", title_en:"Fast-Track Writing Task 2 (Academic)", category:["fasttrack"], subtitle_id:"Offline: IDR 450K / Online: IDR 675K", subtitle_en:"Offline: IDR 450K / Online: IDR 675K", price:"Offline: 450K • Online: 675K", tags:["offline","online"] },
  { id:33, title_id:"Fast-Track Reading & Listening", title_en:"Fast-Track Reading & Listening", category:["fasttrack"], subtitle_id:"Offline: IDR 400K / Online: IDR 600K", subtitle_en:"Offline: IDR 400K / Online: IDR 600K", price:"Offline: 400K • Online: 600K", tags:["offline","online"] },

  // Intensif offline
  { id:41, title_id:"Writing Task 2 — Intensif (Offline)", title_en:"Writing Task 2 — Intensive (Offline)", category:["intensif","offline"], subtitle_id:"Pendalaman esai akademik — Offline IDR 700,000", subtitle_en:"Deep academic essay training — Offline IDR 700,000", price:"IDR 700,000", tags:["offline"] },
  { id:42, title_id:"Writing Task 1 — Intensif (Offline)", title_en:"Writing Task 1 — Intensive (Offline)", category:["intensif","offline"], subtitle_id:"IDR 650,000 — pelatihan mendalam", subtitle_en:"IDR 650,000 — deep training", price:"IDR 650,000", tags:["offline"] },
  { id:43, title_id:"Reading & Listening — Intensif (Offline)", title_en:"Reading & Listening — Intensive (Offline)", category:["intensif","offline"], subtitle_id:"IDR 650,000", subtitle_en:"IDR 650,000", price:"IDR 650,000", tags:["offline"] },

  // Simulation tests
  { id:51, title_id:"Academic IELTS Simulation (Online)", title_en:"Academic IELTS Simulation (Online)", category:["simulation","online"], subtitle_id:"Kuota simulasi online", subtitle_en:"Online simulation quota", price:"IDR 150,000", tags:["online"] },
  { id:52, title_id:"Academic IELTS Simulation (Offline)", title_en:"Academic IELTS Simulation (Offline)", category:["simulation","offline"], subtitle_id:"Kuota terbatas — Tatap muka", subtitle_en:"Limited quota — In-person", price:"IDR 150,000", tags:["offline"] },
  { id:53, title_id:"General Training IELTS Simulation (Offline)", title_en:"General Training IELTS Simulation (Offline)", category:["simulation","offline"], subtitle_id:"Kuota — tatap muka", subtitle_en:"Quota — in-person", price:"IDR 150,000", tags:["offline"] },
  { id:54, title_id:"General Training IELTS Simulation (Online)", title_en:"General Training IELTS Simulation (Online)", category:["simulation","online"], subtitle_id:"Versi online — fleksibel", subtitle_en:"Online version — flexible", price:"IDR 150,000", tags:["online"] }
];

// translations object
const i18n = {
  id: {
    title: "Program Persiapan IELTS & WHV",
    subtitle: "Lengkap — Online / Offline / Hybrid. Raih skormu dengan bimbingan terbaik.",
    tab_all: "Semua", tab_whv:"WHV", tab_akademis:"Akademis", tab_fasttrack:"Fast-Track",
    tab_intensif:"Intensif", tab_simulation:"Simulation Test", tab_online:"Online",
    form_title:"Form Pendaftaran", form_name:"Nama", form_program:"Program", form_date:"Tanggal pilihan", form_contact:"Kontak (Email atau WA)",
    btn_register: "Daftar",
    btn_details: "Detail",
    form_intro: "Halo, saya ingin mendaftar program",
    form_subject: "Pendaftaran Program IELTS",
    form_alert_incomplete: "Lengkapi semua field.",
    page_title_id: "Program Persiapan IELTS & WHV — Warung GPT4",
    nav_programs: "Program",
    nav_testimonials: "Testimoni",
    nav_contact: "Kontak",
    hero_cta: "Lihat Program",
    advantages_title: "Keunggulan Kami",
    advantage1_title: "Tutor Berpengalaman",
    advantage1_desc: "Belajar langsung dari para ahli di bidangnya.",
    advantage2_title: "Kurikulum Terstruktur",
    advantage2_desc: "Materi disusun sistematis untuk hasil maksimal.",
    advantage3_title: "Kelas Fleksibel",
    advantage3_desc: "Pilihan kelas online, offline, dan hybrid.",
    programs_title: "Program Unggulan",
    testimonials_title: "Apa Kata Mereka?",
    testimonial1_text: "\"Materinya sangat membantu dan tutornya sabar banget. Skor IELTS saya naik signifikan!\"",
    testimonial1_program: "Program Akademis Intensif",
    testimonial2_text: "\"Kelas WHV-nya to the point, sangat berguna untuk persiapan dokumen dan wawancara.\"",
    testimonial2_program: "Program WHV Fast-Track",
    footer_about_title: "Tentang Kami",
    footer_about_text: "Kami adalah lembaga persiapan tes bahasa Inggris yang fokus membantu Anda mencapai target skor IELTS dan persiapan WHV.",
    footer_contact_title: "Hubungi Kami",
    footer_social_title: "Ikuti Kami"
  },
  en: {
    title: "IELTS & WHV Preparation Programs",
    subtitle: "Complete — Online / Offline / Hybrid. Achieve your score with the best guidance.",
    tab_all:"All", tab_whv:"WHV", tab_akademis:"Academic", tab_fasttrack:"Fast-Track",
    tab_intensif:"Intensive", tab_simulation:"Simulation Test", tab_online:"Online",
    form_title:"Registration Form", form_name:"Full name", form_program:"Program", form_date:"Preferred date", form_contact:"Contact (Email or WA)",
    btn_register: "Register",
    btn_details: "Details",
    form_intro: "Hello, I want to register for the program",
    form_subject: "Program Registration — IELTS",
    form_alert_incomplete: "Please complete all fields.",
    page_title_en: "IELTS & WHV Preparation Programs — Warung GPT4",
    nav_programs: "Programs",
    nav_testimonials: "Testimonials",
    nav_contact: "Contact",
    hero_cta: "View Programs",
    advantages_title: "Our Advantages",
    advantage1_title: "Experienced Tutors",
    advantage1_desc: "Learn directly from experts in their fields.",
    advantage2_title: "Structured Curriculum",
    advantage2_desc: "Systematically arranged material for maximum results.",
    advantage3_title: "Flexible Classes",
    advantage3_desc: "Online, offline, and hybrid class options.",
    programs_title: "Featured Programs",
    testimonials_title: "What They Say",
    testimonial1_text: "\"The material was very helpful and the tutors were very patient. My IELTS score increased significantly!\"",
    testimonial1_program: "Intensive Academic Program",
    testimonial2_text: "\"The WHV class was to the point, very useful for document and interview preparation.\"",
    testimonial2_program: "WHV Fast-Track Program",
    footer_about_title: "About Us",
    footer_about_text: "We are an English test preparation institution focused on helping you achieve your IELTS score targets and WHV preparation.",
    footer_contact_title: "Contact Us",
    footer_social_title: "Follow Us"
  }
};

let currentLang = 'id';

// Build cards into DOM
function buildCards(){
    const grid = document.getElementById('grid');
    grid.innerHTML = '';

    const getIcon = (p) => {
        if(p.category.includes('whv')) return 'icons/whv.svg';
        if(p.category.includes('akademis')) return 'icons/academic.svg';
        if(p.category.includes('fasttrack')) return 'icons/fasttrack.svg';
        if(p.category.includes('intensif')) return 'icons/intensive.svg';
        if(p.category.includes('simulation')) return 'icons/simulation.svg';
        if(p.category.includes('online')) return 'icons/online.svg';
        return 'icons/offline.svg';
    };

    programs.forEach(p => {
        const cardHTML = `
            <article class="card ${p.category.join(' ')} all" data-program-id="${p.id}">
                <div class="card-head">
                    <div class="icon"><img src="${getIcon(p)}" alt=""></div>
                    <div>
                        <div class="title" data-translatable="title">${currentLang === 'id' ? p.title_id : p.title_en}</div>
                        <div class="subtitle" data-translatable="subtitle">${currentLang === 'id' ? p.subtitle_id : p.subtitle_en}</div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="price">${p.price}</div>
                    <div class="desc" data-translatable="desc">${currentLang === 'id' ? p.subtitle_id : p.subtitle_en}</div>
                </div>
                <div class="card-foot">
                    <button class="btn btn-secondary" data-translatable="btn_details">${i18n[currentLang].btn_details}</button>
                    <button class="btn btn-primary btn-register">${i18n[currentLang].btn_register}</button>
                </div>
            </article>
        `;
        grid.insertAdjacentHTML('beforeend', cardHTML);
    });

    // Re-attach event listeners for the new register buttons
    document.querySelectorAll('.btn-register').forEach((btn, index) => {
        btn.addEventListener('click', () => openModal(programs[index]));
    });

  // after inserting, show animation
  requestAnimationFrame(()=> {
    document.querySelectorAll('.card').forEach((c, i)=> {
      setTimeout(()=> c.classList.add('show'), i*40);
    });
  });
}

// Tabs
const tabBtns = () => Array.from(document.querySelectorAll('.tab-btn'));
function activateTab(tabName, btnEl){
  tabBtns().forEach(b => b.classList.toggle('active', b===btnEl));
  const cards = Array.from(document.querySelectorAll('.card'));
  cards.forEach(c=>{
    if(tabName==='all') {
      c.style.display='flex';
      c.classList.add('show');
    } else {
      if(c.classList.contains(tabName)) {
        c.style.display='flex'; c.classList.add('show');
      } else {
        c.classList.remove('show'); c.style.display='none';
      }
    }
  });
}

// Modal handling
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const form = document.getElementById('regForm');
const fieldName = document.getElementById('fieldName');
const fieldProgram = document.getElementById('fieldProgram');
const fieldDate = document.getElementById('fieldDate');
const fieldContact = document.getElementById('fieldContact');
const submitEmail = document.getElementById('submitEmail');

function openModal(program){
  // fill program
  fieldProgram.value = currentLang === 'id' ? program.title_id : program.title_en;
  // show modal
  modal.setAttribute('aria-hidden','false');
  // focus name
  setTimeout(()=> fieldName.focus(), 120);
}
modalClose.addEventListener('click', ()=> modal.setAttribute('aria-hidden','true'));
modal.addEventListener('click', (e)=> { if(e.target===modal) modal.setAttribute('aria-hidden','true'); });

// Form: WhatsApp submit
// --- Refactored Form Logic ---
function getFormData() {
  const name = fieldName.value.trim();
  const program = fieldProgram.value.trim();
  const date = fieldDate.value;
  const contact = fieldContact.value.trim();
  const isValid = name && program && date && contact;
  return { name, program, date, contact, isValid };
}

function createMessageBody({ name, program, date, contact }) {
  const intro = i18n[currentLang].form_intro;
  return `${intro}%0A` +
         `Name: ${encodeURIComponent(name)}%0A` +
         `Program: ${encodeURIComponent(program)}%0A` +
         `Preferred date: ${encodeURIComponent(date)}%0A` +
         `Contact: ${encodeURIComponent(contact)}`;
}

// Form: WhatsApp submit
form.addEventListener('submit', (e)=> {
  e.preventDefault();
  const formData = getFormData();
  if (!formData.isValid) {
    alert(i18n[currentLang].form_alert_incomplete);
    return;
  }
  const msg = createMessageBody(formData);
  // WhatsApp API link (number without +)
  const wa = `https://wa.me/6281775123999?text=${msg}`;
  window.open(wa, '_blank');
});

// Email button
submitEmail.addEventListener('click', ()=> {
  const formData = getFormData();
  if (!formData.isValid) {
    alert(i18n[currentLang].form_alert_incomplete);
    return;
  }
  const subject = i18n[currentLang].form_subject;
  const body = createMessageBody(formData);
  const mailto = `mailto:?subject=${encodeURIComponent(subject)}&body=${body}`;
  window.location.href = mailto;
});

// Language toggle
const langToggleBtn = document.getElementById('langToggle');

function updateText(){
  Object.keys(i18n[currentLang]).forEach(key=>{
    document.querySelectorAll('[data-i18n="'+key+'"]').forEach(el=>{
      el.textContent = i18n[currentLang][key];
    });
  });

  // Update page title
  const pageTitleKey = `page_title_${currentLang}`;
  document.title = i18n[currentLang][pageTitleKey] || "IELTS & WHV Programs";

  // Update dynamic card text
  document.querySelectorAll('.card[data-program-id]').forEach(card => {
    const programId = parseInt(card.dataset.programId, 10);
    const program = programs.find(p => p.id === programId);
    if (!program) return;

    const langKey = currentLang;
    card.querySelector('[data-translatable="title"]').textContent = program[`title_${langKey}`];
    card.querySelector('[data-translatable="subtitle"]').textContent = program[`subtitle_${langKey}`];
    card.querySelector('[data-translatable="desc"]').textContent = program[`subtitle_${langKey}`];
    card.querySelector('[data-translatable="btn_register"]').textContent = i18n[langKey].btn_register;
    card.querySelector('[data-translatable="btn_details"]').textContent = i18n[langKey].btn_details;
  });

  // Update form program title if modal is open
  if (modal.getAttribute('aria-hidden') === 'false' && fieldProgram.value) {
      const programTitleEn = fieldProgram.value;
      const program = programs.find(p => p.title_en === programTitleEn || p.title_id === programTitleEn);
      if(program) {
          fieldProgram.value = currentLang === 'id' ? program.title_id : program.title_en;
      }
  }
}

langToggleBtn.addEventListener('click', ()=> {
  currentLang = currentLang === 'id' ? 'en' : 'id';
  updateText();
  // buildCards(); // No longer needed to rebuild everything
  langToggleBtn.textContent = currentLang === 'id' ? 'EN' : 'ID';
});

// Tab events attach after DOM ready
document.addEventListener('DOMContentLoaded', ()=>{
  buildCards();
  updateText();
  // attach tab events
  tabBtns().forEach(btn=>{
    btn.addEventListener('click', ()=> {
      const tab = btn.getAttribute('data-tab');
      // remove show for all
      document.querySelectorAll('.card').forEach(c=> c.classList.remove('show'));
      setTimeout(()=> activateTab(tab, btn), 80);
    });
  });

  // Smooth scroll for nav links
  document.querySelectorAll('.nav-link, .btn-hero').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
