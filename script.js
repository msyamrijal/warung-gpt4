/* script.js - tabs, cards, modal, bilingual toggle, form submit (WA + mailto) */

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
let programs = []; // This will hold our programs, loaded from localStorage

// Build cards into DOM
function buildCards(){
    const grid = document.getElementById('grid');
    grid.innerHTML = '';

    programs.forEach((p, index) => {
        const cardHTML = `
            <article class="card ${p.category.join(' ')} all" data-program-id="${p.id}">
                <div class="card-head">
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
  
  document.querySelectorAll('.card').forEach(card => {
    const isVisible = tabName === 'all' || card.classList.contains(tabName);
    
    // First, handle visibility for animations
    card.classList.toggle('show', isVisible);

    // Then, use 'card-hidden' for layout collapsing after animation
    // The timeout should match the CSS transition duration
    setTimeout(() => card.classList.toggle('card-hidden', !isVisible), 300); // 300ms matches CSS transition
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

// --- ADMIN PANEL LOGIC ---

let defaultPrograms = [];

async function loadPrograms() {
    try {
        const response = await fetch('programs.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        defaultPrograms = await response.json();

        const storedPrograms = localStorage.getItem('warungGptPrograms');
        if (storedPrograms) {
            programs = JSON.parse(storedPrograms);
        } else {
            programs = defaultPrograms;
            savePrograms();
        }
    } catch (error) {
        console.error("Could not load programs:", error);
        programs = [];
        defaultPrograms = [];
    }
}

function savePrograms() {
    localStorage.setItem('warungGptPrograms', JSON.stringify(programs));
}

function refreshUI() {
    buildCards();
    updateText();
    if (document.getElementById('admin-modal').getAttribute('aria-hidden') === 'false') {
        renderAdminList();
    }
}

function renderAdminList() {
    const listContainer = document.getElementById('admin-program-list');
    listContainer.innerHTML = '';
    programs.forEach(p => {
        const itemHTML = `
            <div class="admin-program-item" data-program-id="${p.id}">
                <p>${p.title_id}</p>
                <div class="controls">
                    <button class="btn btn-secondary edit-btn">Edit</button>
                    <button class="btn delete-btn">Hapus</button>
                </div>
            </div>
        `;
        listContainer.insertAdjacentHTML('beforeend', itemHTML);
    });
}

function setupAdminPanel() {
    const adminModal = document.getElementById('admin-modal');
    const adminLink = document.getElementById('admin-link');
    const adminCloseBtn = document.getElementById('admin-modal-close');
    const adminList = document.getElementById('admin-program-list');
    const addNewBtn = document.getElementById('add-new-program-btn');
    const resetBtn = document.getElementById('reset-programs-btn');
    const adminForm = document.getElementById('admin-form');
    const exportBtn = document.getElementById('export-programs-btn');
    const exportContainer = document.getElementById('export-output-container');
    const exportOutput = document.getElementById('export-output');
    const adminFormTitle = document.getElementById('admin-form-title');
    const cancelBtn = document.getElementById('admin-cancel-btn');

    const fieldId = document.getElementById('admin-program-id');
    const fieldTitleId = document.getElementById('admin-title-id');
    const fieldTitleEn = document.getElementById('admin-title-en');
    const fieldSubtitleId = document.getElementById('admin-subtitle-id');
    const fieldSubtitleEn = document.getElementById('admin-subtitle-en');
    const fieldPrice = document.getElementById('admin-price');
    const fieldCategories = document.getElementById('admin-categories');

    const showForm = (program = null) => {
        adminForm.classList.remove('hidden');
        if (program) {
            adminFormTitle.textContent = 'Edit Program';
            fieldId.value = program.id;
            fieldTitleId.value = program.title_id;
            fieldTitleEn.value = program.title_en;
            fieldSubtitleId.value = program.subtitle_id;
            fieldSubtitleEn.value = program.subtitle_en;
            fieldPrice.value = program.price;
            fieldCategories.value = program.category.join(',');
        } else {
            adminFormTitle.textContent = 'Tambah Program Baru';
            adminForm.reset();
            fieldId.value = '';
        }
    };

    const hideForm = () => {
        adminForm.classList.add('hidden');
        exportContainer.classList.add('hidden'); // Sembunyikan juga area export
    };

    adminLink.addEventListener('click', (e) => { e.preventDefault(); renderAdminList(); adminModal.setAttribute('aria-hidden', 'false'); });
    adminCloseBtn.addEventListener('click', () => adminModal.setAttribute('aria-hidden', 'true'));
    addNewBtn.addEventListener('click', () => { hideForm(); showForm(); });
    cancelBtn.addEventListener('click', hideForm);

    resetBtn.addEventListener('click', () => {
        if (confirm('Yakin ingin mengembalikan semua program ke default? Perubahan lokal Anda akan hilang.')) {
            programs = defaultPrograms;
            savePrograms();
            refreshUI();
        }
    });

    exportBtn.addEventListener('click', () => {
        adminForm.classList.add('hidden'); // Sembunyikan form jika terbuka
        exportContainer.classList.remove('hidden');
        // Tampilkan JSON yang sudah diformat rapi
        exportOutput.value = JSON.stringify(programs, null, 2);
        exportOutput.select(); // Langsung pilih semua teks agar mudah disalin
    });

    adminList.addEventListener('click', (e) => {
        const programItem = e.target.closest('.admin-program-item');
        if (!programItem) return;
        const programId = parseInt(programItem.dataset.programId, 10);
        if (e.target.classList.contains('edit-btn')) { showForm(programs.find(p => p.id === programId)); }
        if (e.target.classList.contains('delete-btn')) { if (confirm('Yakin ingin menghapus program ini?')) { programs = programs.filter(p => p.id !== programId); savePrograms(); refreshUI(); } }
    });

    adminForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = parseInt(fieldId.value, 10);
        const data = { title_id: fieldTitleId.value, title_en: fieldTitleEn.value, subtitle_id: fieldSubtitleId.value, subtitle_en: fieldSubtitleEn.value, price: fieldPrice.value, category: fieldCategories.value.split(',').map(c => c.trim()), tags: fieldCategories.value.split(',').map(c => c.trim()).filter(c => ['online', 'offline', 'hybrid'].includes(c)) };
        if (id) { const index = programs.findIndex(p => p.id === id); programs[index] = { ...programs[index], ...data }; } 
        else { data.id = Date.now(); programs.push(data); }
        savePrograms(); refreshUI(); hideForm();
    });
}

// Tab events attach after DOM ready
document.addEventListener('DOMContentLoaded', async ()=>{
  const grid = document.getElementById('grid');

  // Event Delegation for Register buttons
  // This is more efficient than adding a listener to every button.
  grid.addEventListener('click', (e) => {
    const registerButton = e.target.closest('.btn-register');
    if (registerButton) {
      const card = registerButton.closest('.card');
      const programId = parseInt(card.dataset.programId, 10);
      const program = programs.find(p => p.id === programId);
      if (program) openModal(program);
    }
  });

  // Load data first, then build the UI
  await loadPrograms();
  buildCards();
  updateText();
  setupAdminPanel();

  // attach tab events
  tabBtns().forEach(btn=>{
    btn.addEventListener('click', ()=> {
      const tab = btn.getAttribute('data-tab');
      activateTab(tab, btn);
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
