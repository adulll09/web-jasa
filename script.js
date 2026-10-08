// ==========================================
// KONFIGURASI ADMIN & DATA
// ==========================================
// Ganti nomor WA di bawah ini. Pastikan format 62 tanpa spasi atau +.
const WHATSAPP_NUMBER = "628814553545"; 

// Data Katalog Layanan
const servicesData = [
    // Kategori: Paket Hemat
    {
        id: "s1",
        categoryId: "paket",
        categoryName: "Paket Hemat",
        name: "Paket Reborn",
        price: 90000,
        oldPrice: 100000,
        desc: "Deep cleaning total + Repasting Arctic MX-4 + Instal ulang Windows & Driver + Software standar.",
        badge: "BEST VALUE",
        icon: "zap",
        details: [
            "Deep Cleaning (Fan & Heatsink)",
            "Repaste Arctic MX-4",
            "Instal Windows 10/11",
            "Instal Driver Lengkap",
            "Aplikasi Esensial Standar"
        ]
    },
    {
        id: "s2",
        categoryId: "paket",
        categoryName: "Paket Hemat",
        name: "Paket Complete Care",
        price: 110000,
        oldPrice: null,
        desc: "Semua isi Paket Reborn + Backup data penting (Desktop, Dokumen, Download) sebelum diformat.",
        badge: "MOST COMPLETE",
        icon: "shield-check",
        details: [
            "Semua fitur Paket Reborn",
            "Backup Data Penting",
            "Pembersihan Luar & Dalam",
            "Cek Suhu Before-After"
        ]
    },
    // Kategori: Hardware & Perawatan Fisik
    {
        id: "s3",
        categoryId: "hardware",
        categoryName: "Hardware",
        name: "Deep Clean & Repaste",
        price: 50000,
        oldPrice: null,
        desc: "Bongkar bodi, bersihkan debu kipas & kisi heatsink, bersihkan kerak pasta lama, oles Arctic MX-4.",
        badge: null,
        icon: "cpu",
        details: [
            "Bongkar Total Bodi",
            "Pembersihan Kipas & Heatsink",
            "Pembersihan Kerak Pasta Lama",
            "Aplikasi Arctic MX-4",
            "Test Suhu"
        ]
    },
    {
        id: "s4",
        categoryId: "hardware",
        categoryName: "Hardware",
        name: "Light Clean",
        price: 15000,
        oldPrice: null,
        desc: "Pembersihan detail bagian luar (layar, sela keyboard, port USB) tanpa bongkar unit.",
        badge: null,
        icon: "sparkles",
        details: [
            "Pembersihan Layar",
            "Pembersihan Sela Keyboard",
            "Pembersihan Port (USB, HDMI, dll)",
            "Pembersihan Bodi Luar"
        ]
    },
    // Kategori: Software
    {
        id: "s5",
        categoryId: "software",
        categoryName: "Software",
        name: "Instal Ulang Windows 10/11",
        price: 50000,
        oldPrice: null,
        desc: "Fresh install + Driver lengkap + Aplikasi esensial (Browser, PDF Reader, Media Player, WinRAR).",
        badge: null,
        icon: "monitor",
        details: [
            "Fresh Install OS",
            "Instal Driver Sesuai Tipe",
            "Browser (Chrome/Edge)",
            "PDF Reader & Media Player",
            "WinRAR / 7Zip"
        ]
    },
    {
        id: "s6",
        categoryId: "software",
        categoryName: "Software",
        name: "Instal Distro Linux",
        price: 50000,
        oldPrice: null,
        desc: "Bikin laptop lemot jadi lebih enteng dan gesit. Pilihan: Linux Mint, Ubuntu, dll.",
        badge: null,
        icon: "terminal-square",
        details: [
            "Instal Linux Mint / Ubuntu / Debian",
            "Setup Partisi",
            "Update System Core",
            "Aplikasi Open Source Bawaan"
        ]
    },
    {
        id: "s7",
        categoryId: "software",
        categoryName: "Software",
        name: "Instal Dual Boot",
        price: 75000,
        oldPrice: null,
        desc: "Windows + Linux dalam satu laptop. Partisi aman tanpa menghapus data lama.",
        badge: null,
        icon: "layout-template",
        details: [
            "Setup GRUB Bootloader",
            "Partisi Aman",
            "Instalasi Dual OS",
            "Testing Boot Switching"
        ]
    },
    {
        id: "s8",
        categoryId: "software",
        categoryName: "Software",
        name: "Paket Aplikasi Kuliah / Kerja",
        price: 25000,
        oldPrice: null,
        desc: "Office Suite, PDF Editor, Zoom / Meet, dan Tools harian lainnya.",
        badge: "FREE DGN INSTAL ULANG",
        icon: "briefcase",
        details: [
            "Office Suite",
            "PDF Editor Pro",
            "Zoom / Google Meet",
            "WhatsApp Desktop"
        ]
    },
    // Kategori: Add-on
    {
        id: "s9",
        categoryId: "addon",
        categoryName: "Add-On",
        name: "Pasang / Upgrade RAM & SSD",
        price: 30000,
        oldPrice: null,
        desc: "Jasa pasang komponen RAM atau SSD baru. (Harga komponen belum termasuk).",
        badge: null,
        icon: "hard-drive",
        details: [
            "Bongkar Pasang Hardware",
            "Deteksi & Kalibrasi BIOS",
            "Optimalisasi Sistem"
        ],
        needsExtraInput: "upgradeType"
    },
    {
        id: "s10",
        categoryId: "addon",
        categoryName: "Add-On",
        name: "Backup Data Ekstra",
        price: 25000,
        oldPrice: null,
        desc: "Backup data 30GB – 100GB sebelum eksekusi servis.",
        badge: null,
        icon: "database-backup",
        details: [
            "Copy data ke HDD Eksternal kami",
            "Restore ke laptop setelah selesai"
        ]
    },
    {
        id: "s11",
        categoryId: "addon",
        categoryName: "Add-On",
        name: "Home Service / Antar-Jemput",
        price: 20000, // Range handled in display
        oldPrice: null,
        desc: "Area terdekat. Harga menyesuaikan jarak (Rp15K - Rp20K).",
        badge: null,
        icon: "map-pin",
        details: [
            "Jemput laptop ke lokasi",
            "Antar kembali setelah selesai",
            "Atau pengerjaan ringan di tempat"
        ],
        needsExtraInput: "location"
    }
];

const categories = [
    { id: "all", name: "Semua" },
    { id: "paket", name: "Paket Hemat" },
    { id: "hardware", name: "Hardware" },
    { id: "software", name: "Software" },
    { id: "addon", name: "Add-On" }
];

const faqData = [
    { q: "Apakah data saya aman?", a: "Tentu. Backup tersedia sesuai paket/layanan yang dipilih, namun user tetap disarankan memiliki backup pribadi untuk data yang sangat krusial." },
    { q: "Apakah bisa Windows 11?", a: "Ya, kami melayani instalasi Windows 10 maupun Windows 11 beserta lisensi trial/aktivasi standar." },
    { q: "Apakah bisa Linux?", a: "Sangat bisa! Tersedia Linux Mint, Ubuntu, Debian, dan distro lainnya. Cocok untuk programmer atau untuk menyegarkan laptop lama." },
    { q: "Apakah bisa upgrade RAM dan SSD?", a: "Ya, tersedia jasa pasang. Anda bisa membawa *part* sendiri atau memesan dari kami sebelumnya." },
    { q: "Apakah tersedia home service?", a: "Ya, khusus untuk area terdekat. Biaya tambahan antar-jemput berkisar Rp15.000 - Rp20.000 tergantung jarak." }
];

// ==========================================
// STATE MANAGEMENT
// ==========================================
let currentFilter = "all";
let currentSearch = "";
let selectedServiceId = null;
let currentBookingState = null; // Menampung hasil booking

// Formatter Rupiah
const formatRp = (num) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(num);
};

// ==========================================
// INITIALIZATION & RENDER
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    renderFilters();
    renderServices();
    renderFAQ();
    checkExistingBooking();
    setupNavbarScroll();
    setupSearch();
});

// Navbar Scroll Effect
function setupNavbarScroll() {
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.remove("bg-transparent", "border-transparent");
            navbar.classList.add("bg-bgDark/80", "backdrop-blur-md", "border-borderWhite");
        } else {
            navbar.classList.add("bg-transparent", "border-transparent");
            navbar.classList.remove("bg-bgDark/80", "backdrop-blur-md", "border-borderWhite");
        }
    });
}

// Render Filters
function renderFilters() {
    const container = document.getElementById("categoryFilters");
    container.innerHTML = categories.map(cat => `
        <button onclick="setFilter('${cat.id}')" 
            class="px-4 py-2 rounded-full border transition-all whitespace-nowrap 
            ${currentFilter === cat.id ? 'bg-textPrimary text-bgDark border-textPrimary' : 'border-borderWhite text-textSecondary hover:border-accentRed'}">
            ${cat.name}
        </button>
    `).join("");
}

// Set Filter
function setFilter(id) {
    currentFilter = id;
    renderFilters();
    renderServices();
}

// Search Logic
function setupSearch() {
    document.getElementById("searchInput").addEventListener("input", (e) => {
        currentSearch = e.target.value.toLowerCase();
        renderServices();
    });
}

// Render Services Grid
function renderServices() {
    const container = document.getElementById("servicesGrid");
    
    const filtered = servicesData.filter(s => {
        const matchCategory = currentFilter === "all" || s.categoryId === currentFilter;
        const matchSearch = s.name.toLowerCase().includes(currentSearch) || s.desc.toLowerCase().includes(currentSearch) || s.categoryName.toLowerCase().includes(currentSearch);
        return matchCategory && matchSearch;
    });

    if(filtered.length === 0) {
        container.innerHTML = `<div class="col-span-full text-center py-10 text-textSecondary">Layanan tidak ditemukan.</div>`;
        return;
    }

    container.innerHTML = filtered.map(s => `
        <div class="group bg-cardDark border border-borderWhite rounded-lg p-6 hover:border-accentRed hover:-translate-y-1 transition-all duration-300 relative flex flex-col h-full fade-in">
            ${s.badge ? `<div class="absolute -top-3 right-4 bg-accentRed text-white text-[10px] font-bold px-3 py-1 rounded shadow-lg uppercase tracking-wider">${s.badge}</div>` : ''}
            
            <div class="w-10 h-10 rounded-full bg-secondary border border-borderWhite flex items-center justify-center mb-4 group-hover:border-accentRed group-hover:text-accentRed transition-colors">
                <i data-lucide="${s.icon}" class="w-5 h-5"></i>
            </div>
            
            <div class="text-xs text-textSecondary mb-1 uppercase tracking-widest">${s.categoryName}</div>
            <h4 class="text-lg font-bold mb-2">${s.name}</h4>
            
            <div class="flex items-end gap-2 mb-4">
                <div class="text-xl font-bold text-textPrimary">${s.price === 20000 ? 'Mulai Rp15.000' : formatRp(s.price)}</div>
                ${s.oldPrice ? `<div class="text-xs text-textSecondary line-through mb-1">${formatRp(s.oldPrice)}</div>` : ''}
            </div>
            
            <p class="text-sm text-textSecondary mb-6 flex-grow leading-relaxed">${s.desc}</p>
            
            <button onclick="openDetailModal('${s.id}')" class="w-full py-2 rounded border border-borderWhite text-sm font-medium hover:bg-white hover:text-black hover:border-white transition-all group-hover:bg-textPrimary group-hover:text-bgDark group-hover:border-textPrimary">
                Lihat Detail &rarr;
            </button>
        </div>
    `).join("");
    
    lucide.createIcons();
}

// Render FAQ
function renderFAQ() {
    const container = document.getElementById("faqContainer");
    container.innerHTML = faqData.map((faq, i) => `
        <div class="border border-borderWhite bg-cardDark rounded-lg overflow-hidden transition-all duration-300" id="faq-${i}">
            <button class="w-full text-left px-6 py-4 font-semibold flex justify-between items-center hover:text-accentRed transition-colors" onclick="toggleFaq(${i})">
                ${faq.q}
                <i data-lucide="chevron-down" class="w-4 h-4 transition-transform duration-300" id="faq-icon-${i}"></i>
            </button>
            <div class="px-6 pb-4 text-sm text-textSecondary hidden-safely" id="faq-body-${i}">
                ${faq.a}
            </div>
        </div>
    `).join("");
    lucide.createIcons();
}

function toggleFaq(index) {
    const body = document.getElementById(`faq-body-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);
    if(body.classList.contains('hidden-safely')) {
        body.classList.remove('hidden-safely');
        icon.style.transform = 'rotate(180deg)';
    } else {
        body.classList.add('hidden-safely');
        icon.style.transform = 'rotate(0deg)';
    }
}

// ==========================================
// MODAL LOGIC
// ==========================================
function openDetailModal(id) {
    selectedServiceId = id;
    const s = servicesData.find(x => x.id === id);
    
    const content = `
        <div class="flex items-start justify-between mb-4">
            <div>
                <div class="text-xs text-accentRed tracking-widest uppercase mb-1">${s.categoryName}</div>
                <h3 class="text-2xl font-bold">${s.name}</h3>
            </div>
        </div>
        
        <div class="text-xl font-bold mb-4 border-b border-borderWhite pb-4">${s.price === 20000 ? 'Mulai Rp15.000' : formatRp(s.price)}</div>
        
        <p class="text-sm text-textSecondary mb-6 leading-relaxed">${s.desc}</p>
        
        <div class="mb-8">
            <h5 class="text-sm font-semibold mb-3">Yang Didapat:</h5>
            <ul class="space-y-2 text-sm text-textSecondary">
                ${s.details.map(d => `<li class="flex gap-2 items-start"><i data-lucide="check" class="w-4 h-4 text-accentRed shrink-0 mt-0.5"></i> ${d}</li>`).join("")}
            </ul>
        </div>
        
        <button onclick="proceedToBooking()" class="w-full bg-textPrimary text-bgDark py-3 rounded font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
            Booking Layanan <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </button>
    `;

    document.getElementById("detailModalContent").innerHTML = content;
    
    // Show Modal
    const overlay = document.getElementById("detailModalOverlay");
    const modal = document.getElementById("detailModal");
    
    overlay.classList.remove("hidden-safely");
    // Trigger reflow
    void overlay.offsetWidth; 
    
    overlay.classList.add("opacity-100");
    overlay.classList.remove("opacity-0");
    modal.classList.add("md:modal-enter-active", "bottom-sheet-active");
    
    lucide.createIcons();
}

function closeDetailModal() {
    const overlay = document.getElementById("detailModalOverlay");
    const modal = document.getElementById("detailModal");
    
    overlay.classList.remove("opacity-100");
    overlay.classList.add("opacity-0");
    modal.classList.remove("md:modal-enter-active", "bottom-sheet-active");
    
    setTimeout(() => {
        overlay.classList.add("hidden-safely");
    }, 300); // match transition duration
}

function proceedToBooking() {
    closeDetailModal();
    setTimeout(() => {
        openBookingForm();
    }, 300);
}

function openBookingForm() {
    const s = servicesData.find(x => x.id === selectedServiceId);
    document.getElementById("formServiceName").innerText = `Layanan: ${s.name} (${s.price === 20000 ? 'Mulai Rp15.000' : formatRp(s.price)})`;
    
    // Handle Dynamic Fields
    const dynContainer = document.getElementById("dynamicFieldsContainer");
    dynContainer.innerHTML = "";
    dynContainer.classList.add("hidden-safely");
    
    if(s.needsExtraInput === "upgradeType") {
        dynContainer.innerHTML = `
            <label class="block text-xs text-textSecondary mb-1">Jenis Upgrade *</label>
            <select id="b_dynamic" class="w-full bg-secondary border border-borderWhite rounded px-3 py-2 text-sm outline-none text-white focus:border-accentRed">
                <option value="">-- Pilih Jenis --</option>
                <option value="RAM">RAM</option>
                <option value="SSD">SSD</option>
                <option value="RAM + SSD">RAM + SSD</option>
            </select>
            <p id="err_dynamic" class="text-accentRed text-xs mt-1 hidden-safely">Pilihan wajib diisi.</p>
        `;
        dynContainer.classList.remove("hidden-safely");
    } else if (s.needsExtraInput === "location") {
        dynContainer.innerHTML = `
            <label class="block text-xs text-textSecondary mb-1">Area / Alamat *</label>
            <input type="text" id="b_dynamic" placeholder="Contoh: Jl. Perjuangan, Cirebon" class="w-full bg-secondary border border-borderWhite rounded px-3 py-2 text-sm outline-none text-white focus:border-accentRed">
            <p id="err_dynamic" class="text-accentRed text-xs mt-1 hidden-safely">Lokasi wajib diisi.</p>
        `;
        dynContainer.classList.remove("hidden-safely");
    }

    const overlay = document.getElementById("formModalOverlay");
    const modal = document.getElementById("formModal");
    
    overlay.classList.remove("hidden-safely");
    void overlay.offsetWidth;
    
    overlay.classList.add("opacity-100");
    overlay.classList.remove("opacity-0");
    modal.classList.add("md:modal-enter-active", "bottom-sheet-active");
}

function closeFormModal() {
    const overlay = document.getElementById("formModalOverlay");
    const modal = document.getElementById("formModal");
    
    overlay.classList.remove("opacity-100");
    overlay.classList.add("opacity-0");
    modal.classList.remove("md:modal-enter-active", "bottom-sheet-active");
    
    setTimeout(() => {
        overlay.classList.add("hidden-safely");
    }, 300);
}

// ==========================================
// FORM VALIDATION & BOOKING LOGIC
// ==========================================
function hideErrors() {
    document.querySelectorAll('[id^="err_"]').forEach(el => el.classList.add("hidden-safely"));
}

function handleBookingSubmit(e) {
    e.preventDefault();
    hideErrors();
    
    const name = document.getElementById("b_name").value.trim();
    const wa = document.getElementById("b_wa").value.trim();
    const laptop = document.getElementById("b_laptop").value.trim();
    const notes = document.getElementById("b_notes").value.trim();
    
    let isValid = true;
    
    if(!name) { document.getElementById("err_name").classList.remove("hidden-safely"); isValid = false; }
    if(!wa || wa.length < 9) { document.getElementById("err_wa").classList.remove("hidden-safely"); isValid = false; }
    if(!laptop) { document.getElementById("err_laptop").classList.remove("hidden-safely"); isValid = false; }
    
    const s = servicesData.find(x => x.id === selectedServiceId);
    let dynamicVal = "";
    if(s.needsExtraInput) {
        dynamicVal = document.getElementById("b_dynamic").value.trim();
        if(!dynamicVal) { document.getElementById("err_dynamic").classList.remove("hidden-safely"); isValid = false; }
    }

    if(!isValid) return;

    // Generate Booking ID (BK-YYYYMMDD-RND)
    const d = new Date();
    const dateStr = d.getFullYear().toString() + (d.getMonth()+1).toString().padStart(2,'0') + d.getDate().toString().padStart(2,'0');
    const rnd = Math.floor(Math.random() * 900) + 100;
    const bookingId = `BK-${dateStr}-${rnd}`;

    // Save state
    currentBookingState = {
        id: bookingId,
        name: name,
        whatsapp: wa,
        laptop: laptop,
        serviceName: s.name,
        price: s.price === 20000 ? 'Mulai Rp15.000' : formatRp(s.price),
        dynamicLabel: s.needsExtraInput === 'upgradeType' ? 'Jenis Upgrade' : (s.needsExtraInput === 'location' ? 'Area/Lokasi' : null),
        dynamicValue: dynamicVal,
        notes: notes || '-',
        createdAt: new Date().toISOString()
    };

    localStorage.setItem("overheating_booking", JSON.stringify(currentBookingState));

    closeFormModal();
    showToast();
    renderTicket();
    
    // Scroll to ticket
    setTimeout(() => {
        document.getElementById("ticketSection").scrollIntoView({ behavior: 'smooth' });
    }, 400);
}

// ==========================================
// TICKET LOGIC
// ==========================================
function checkExistingBooking() {
    const saved = localStorage.getItem("overheating_booking");
    if(saved) {
        currentBookingState = JSON.parse(saved);
        renderTicket();
    }
}

function renderTicket() {
    if(!currentBookingState) return;

    const t = currentBookingState;
    const container = document.getElementById("ticketContainer");
    
    // Chinese Seal & Ink Pattern applied to ticket design
    const ticketHTML = `
        <div class="absolute inset-0 bg-ink-wash opacity-50 z-0"></div>
        <div class="relative z-10">
            <div class="flex justify-between items-start mb-8 pb-6 border-b border-borderWhite border-dashed">
                <div>
                    <div class="text-sm font-bold tracking-widest text-textSecondary mb-1">BOOKING TICKET</div>
                    <div class="text-2xl font-bold text-accentRed">${t.id}</div>
                </div>
                <div class="seal text-xl px-2">修</div>
            </div>
            
            <div class="space-y-4 mb-8">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <div class="text-xs text-textSecondary mb-1">Atas Nama</div>
                        <div class="font-semibold text-sm">${t.name}</div>
                    </div>
                    <div>
                        <div class="text-xs text-textSecondary mb-1">Jenis Laptop</div>
                        <div class="font-semibold text-sm">${t.laptop}</div>
                    </div>
                </div>
                
                <div class="bg-secondary p-3 rounded border border-borderWhite">
                    <div class="text-xs text-textSecondary mb-1">Layanan</div>
                    <div class="font-bold text-base text-textPrimary">${t.serviceName}</div>
                    ${t.dynamicLabel ? `<div class="text-xs mt-1 font-medium text-accentRed">${t.dynamicLabel}:${t.dynamicValue}</div>` : ''}
                </div>
                
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <div class="text-xs text-textSecondary mb-1">Estimasi Harga</div>
                        <div class="font-bold text-lg">${t.price}</div>
                    </div>
                    <div>
                        <div class="text-xs text-textSecondary mb-1">Status</div>
                        <div class="inline-flex items-center gap-1 text-[10px] font-bold bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded border border-yellow-500/20">
                            <span class="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span> MENUNGGU KONFIRMASI
                        </div>
                    </div>
                </div>
                
                <div>
                    <div class="text-xs text-textSecondary mb-1">Catatan Keluhan</div>
                    <div class="text-sm p-2 bg-black rounded border border-borderWhite italic text-gray-400">"${t.notes}"</div>
                </div>
            </div>
            
            <div class="text-center text-[10px] text-textSecondary border-t border-borderWhite pt-4 uppercase tracking-widest">
                Overheating Club.id by adn store
            </div>
        </div>
    `;

    container.innerHTML = ticketHTML;
    document.getElementById("ticketSection").classList.remove("hidden-safely");
}

function clearTicket() {
    localStorage.removeItem("overheating_booking");
    currentBookingState = null;
    document.getElementById("ticketSection").classList.add("hidden-safely");
    window.scrollTo(0,0);
}

function sendToWhatsApp() {
    if(!currentBookingState) return;
    const t = currentBookingState;
    
    let dynText = t.dynamicLabel ? `\n${t.dynamicLabel}: ${t.dynamicValue}` : "";

    const msg = `Halo, saya ingin melakukan booking jasa servis laptop.

*DETAIL BOOKING*
No. Booking: ${t.id}
Nama: ${t.name}
No. WhatsApp: ${t.whatsapp}

Laptop:
${t.laptop}

Layanan:
${t.serviceName}${dynText}

Harga:
${t.price}

Catatan:
${t.notes}

Mohon konfirmasi untuk booking saya. Terima kasih.`;

    const encodedMsg = encodeURIComponent(msg);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;
    
    window.open(waUrl, '_blank');
}

// ==========================================
// TOAST NOTIFICATION
// ==========================================
function showToast() {
    const toast = document.getElementById("toast");
    toast.classList.remove("opacity-0", "translate-y-20");
    
    setTimeout(() => {
        toast.classList.add("opacity-0", "translate-y-20");
    }, 4000);
}