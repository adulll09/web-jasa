// ==========================================
// KONFIGURASI ADMIN & DEFAULT SEED DATA
// ==========================================
const WHATSAPP_NUMBER = "628814553545";
const DB_STORAGE_KEY = "overheating_club_db_v1";
const SESSION_KEY = "overheating_club_session_v1";

// Data Awal Katalog Layanan (Tabel B: services)
const initialServicesData = [
    {
        id: "s1", categoryId: "paket", categoryName: "Paket Hemat", name: "Paket Reborn",
        price: 90000, oldPrice: 100000, pointsReward: 90, isActive: true,
        desc: "Deep cleaning total + Repasting Arctic MX-4 + Instal ulang Windows & Driver + Software standar.",
        badge: "BEST VALUE", icon: "zap",
        details: ["Deep Cleaning (Fan & Heatsink)", "Repaste Arctic MX-4", "Instal Windows 10/11", "Instal Driver Lengkap", "Aplikasi Esensial Standar"]
    },
    {
        id: "s2", categoryId: "paket", categoryName: "Paket Hemat", name: "Paket Complete Care",
        price: 110000, oldPrice: null, pointsReward: 110, isActive: true,
        desc: "Semua isi Paket Reborn + Backup data penting (Desktop, Dokumen, Download) sebelum diformat.",
        badge: "MOST COMPLETE", icon: "shield-check",
        details: ["Semua fitur Paket Reborn", "Backup Data Penting", "Pembersihan Luar & Dalam", "Cek Suhu Before-After"]
    },
    {
        id: "s3", categoryId: "hardware", categoryName: "Hardware", name: "Deep Clean & Repaste",
        price: 50000, oldPrice: null, pointsReward: 50, isActive: true,
        desc: "Bongkar bodi, bersihkan debu kipas & kisi heatsink, bersihkan kerak pasta lama, oles Arctic MX-4.",
        badge: null, icon: "cpu",
        details: ["Bongkar Total Bodi", "Pembersihan Kipas & Heatsink", "Pembersihan Kerak Pasta Lama", "Aplikasi Arctic MX-4", "Test Suhu"]
    },
    {
        id: "s4", categoryId: "hardware", categoryName: "Hardware", name: "Light Clean",
        price: 15000, oldPrice: null, pointsReward: 15, isActive: true,
        desc: "Pembersihan detail bagian luar (layar, sela keyboard, port USB) tanpa bongkar unit.",
        badge: null, icon: "sparkles",
        details: ["Pembersihan Layar", "Pembersihan Sela Keyboard", "Pembersihan Port (USB, HDMI, dll)", "Pembersihan Bodi Luar"]
    },
    {
        id: "s5", categoryId: "software", categoryName: "Software", name: "Instal Ulang Windows 10/11",
        price: 50000, oldPrice: null, pointsReward: 50, isActive: true,
        desc: "Fresh install + Driver lengkap + Aplikasi esensial (Browser, PDF Reader, Media Player, WinRAR).",
        badge: null, icon: "monitor",
        details: ["Fresh Install OS", "Instal Driver Sesuai Tipe", "Browser (Chrome/Edge)", "PDF Reader & Media Player", "WinRAR / 7Zip"]
    },
    {
        id: "s6", categoryId: "software", categoryName: "Software", name: "Instal Distro Linux",
        price: 50000, oldPrice: null, pointsReward: 50, isActive: true,
        desc: "Bikin laptop lemot jadi lebih enteng dan gesit. Pilihan: Linux Mint, Ubuntu, Debian, dll.",
        badge: null, icon: "terminal-square",
        details: ["Instal Linux Mint / Ubuntu / Debian", "Setup Partisi", "Update System Core", "Aplikasi Open Source Bawaan"]
    },
    {
        id: "s7", categoryId: "software", categoryName: "Software", name: "Instal Dual Boot",
        price: 75000, oldPrice: null, pointsReward: 75, isActive: true,
        desc: "Windows + Linux dalam satu laptop. Partisi aman tanpa menghapus data lama.",
        badge: null, icon: "layout-template",
        details: ["Setup GRUB Bootloader", "Partisi Aman", "Instalasi Dual OS", "Testing Boot Switching"]
    },
    {
        id: "s8", categoryId: "software", categoryName: "Software", name: "Paket Aplikasi Kuliah / Kerja",
        price: 25000, oldPrice: null, pointsReward: 25, isActive: true,
        desc: "Office Suite, PDF Editor, Zoom / Meet, dan Tools harian lainnya.",
        badge: "FREE DGN INSTAL ULANG", icon: "briefcase",
        details: ["Office Suite", "PDF Editor Pro", "Zoom / Google Meet", "WhatsApp Desktop"]
    },
    {
        id: "s9", categoryId: "addon", categoryName: "Add-On", name: "Pasang / Upgrade RAM & SSD",
        price: 30000, oldPrice: null, pointsReward: 30, isActive: true,
        desc: "Jasa pasang komponen RAM atau SSD baru. (Harga komponen belum termasuk).",
        badge: null, icon: "hard-drive",
        details: ["Bongkar Pasang Hardware", "Deteksi & Kalibrasi BIOS", "Optimalisasi Sistem"],
        needsExtraInput: "upgradeType"
    },
    {
        id: "s10", categoryId: "addon", categoryName: "Add-On", name: "Backup Data Ekstra",
        price: 25000, oldPrice: null, pointsReward: 25, isActive: true,
        desc: "Backup data 30GB – 100GB sebelum eksekusi servis.",
        badge: null, icon: "database-backup",
        details: ["Copy data ke HDD Eksternal kami", "Restore ke laptop setelah selesai"]
    },
    {
        id: "s11", categoryId: "addon", categoryName: "Add-On", name: "Home Service / Antar-Jemput",
        price: 15000, priceText: "Mulai Rp15.000", isRangePrice: true, oldPrice: null, pointsReward: 15, isActive: true,
        desc: "Area terdekat. Harga menyesuaikan jarak (Rp15K - Rp20K).",
        badge: null, icon: "map-pin",
        details: ["Jemput laptop ke lokasi", "Antar kembali setelah selesai", "Atau pengerjaan ringan di tempat"],
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
    { q: "Bagaimana cara memantau status pengerjaan laptop saya?", a: "Cukup daftar/login ke akun Member kamu. Saat melakukan booking, pesananmu otomatis masuk ke menu Dashboard di mana kamu bisa memantau status Pending, Proses, hingga Done beserta catatan dari teknisi." },
    { q: "Bagaimana cara mendapatkan dan menukar Poin Member?", a: "Setiap transaksi servis sebesar Rp1.000 yang berstatus Selesai (Done), kamu otomatis mendapatkan 1 Poin. Poin yang terkumpul bisa ditukar dengan Voucher Diskon atau Merchandise di dalam Dashboard Member." },
    { q: "Apakah data saya aman?", a: "Tentu. Backup tersedia sesuai paket/layanan yang dipilih, namun user tetap disarankan memiliki backup pribadi untuk data yang sangat krusial." },
    { q: "Apakah bisa instal Linux atau Dual Boot?", a: "Sangat bisa! Tersedia Linux Mint, Ubuntu, Debian, dan distro lainnya. Cocok untuk mahasiswa IT/programmer atau untuk menyegarkan laptop lama." },
    { q: "Apakah tersedia home service?", a: "Ya, khusus untuk area Cirebon dan sekitarnya. Biaya tambahan antar-jemput berkisar Rp15.000 - Rp20.000 tergantung jarak." }
];

// ==========================================
// DATABASE ENGINE (6 TABEL UTAMA: A - F)
// ==========================================
const OverheatingDB = {
    init() {
        if (!localStorage.getItem(DB_STORAGE_KEY)) {
            const seedData = {
                // TABEL A: users
                users: [
                    {
                        id: "u_admin",
                        username: "admin",
                        password_hash: "admin123",
                        full_name: "Admin Overheating Club",
                        whatsapp: "08814553545",
                        role: "admin",
                        points: 999,
                        created_at: "2026-10-01T08:00:00.000Z"
                    },
                    {
                        id: "u_client1",
                        username: "abdan",
                        password_hash: "123456",
                        full_name: "Abdan Fatih",
                        whatsapp: "081234567890",
                        role: "client",
                        points: 120,
                        created_at: "2026-10-10T10:00:00.000Z"
                    }
                ],
                // TABEL B: services
                services: initialServicesData,
                // TABEL C: bookings
                bookings: [
                    {
                        booking_code: "BK-20261016-501",
                        user_id: "u_client1",
                        customer_name: "Abdan Fatih",
                        whatsapp: "081234567890",
                        laptop_model: "Lenovo V14 G5",
                        service_name: "Paket Reborn",
                        addons: [{ id: "s9", name: "Pasang / Upgrade RAM & SSD", priceDisplay: "Rp 30.000", extraLabel: "Komponen", extraValue: "SSD" }],
                        voucher_code: null,
                        discount_amount: 0,
                        total_price: 120000,
                        total_price_display: "Rp 120.000",
                        points_earned: 120,
                        status: "proses", // 'pending', 'proses', 'done', 'cancelled'
                        payment_status: "unpaid", // 'unpaid', 'paid'
                        customer_notes: "Sekalian pasang SSD NVMe 512GB bawa sendiri, kipas agak berisik.",
                        admin_notes: "Fan & heatsink sudah dibersihkan, pasta Arctic MX-4 sudah terpasang. Sedang lanjut instalasi Windows 11.",
                        created_at: "2026-10-16T09:30:00.000Z"
                    }
                ],
                // TABEL D: vouchers_rewards
                vouchers_rewards: [
                    { id: "vr1", title: "Voucher Diskon Servis Rp15.000", points_cost: 50, type: "discount", discount_value: 15000, stock: 25 },
                    { id: "vr2", title: "Voucher Gratis Light Clean", points_cost: 40, type: "discount", discount_value: 15000, stock: 30 },
                    { id: "vr3", title: "Voucher Diskon Servis Rp30.000", points_cost: 90, type: "discount", discount_value: 30000, stock: 15 },
                    { id: "vr4", title: "Stiker Eksklusif Overheating Club", points_cost: 25, type: "merchandise", discount_value: 0, stock: 50 },
                    { id: "vr5", title: "Mousepad Gaming Minimalist Dark", points_cost: 200, type: "merchandise", discount_value: 0, stock: 5 }
                ],
                // TABEL E: user_redemptions
                user_redemptions: [
                    {
                        id: "red_1",
                        user_id: "u_client1",
                        reward_id: "vr1",
                        reward_title: "Voucher Diskon Servis Rp15.000",
                        reward_type: "discount",
                        discount_value: 15000,
                        unique_code: "OHC-15K-992",
                        is_used: false,
                        redeemed_at: "2026-10-15T14:20:00.000Z"
                    }
                ],
                // TABEL F: finances
                finances: [
                    {
                        id: "fin_1",
                        type: "expense",
                        amount: 135000,
                        description: "Beli Stok 2 Tube Thermal Paste Arctic MX-4",
                        booking_code: null,
                        transaction_date: "2026-10-12T11:00:00.000Z"
                    },
                    {
                        id: "fin_2",
                        type: "income",
                        amount: 90000,
                        description: "Servis Paket Reborn (ThinkPad X280)",
                        booking_code: "BK-20261014-112",
                        transaction_date: "2026-10-14T16:45:00.000Z"
                    }
                ]
            };
            localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(seedData));
        }
    },

    getDB() {
        this.init();
        return JSON.parse(localStorage.getItem(DB_STORAGE_KEY));
    },

    saveDB(data) {
        localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(data));
    },

    getCurrentUser() {
        const userId = localStorage.getItem(SESSION_KEY);
        if (!userId) return null;
        const db = this.getDB();
        return db.users.find(u => u.id === userId) || null;
    },

    setCurrentUser(userId) {
        if (userId) localStorage.setItem(SESSION_KEY, userId);
        else localStorage.removeItem(SESSION_KEY);
    }
};

// ==========================================
// STATE & HELPERS
// ==========================================
let currentFilter = "all";
let currentSearch = "";
let selectedServiceId = null;
let currentBookingState = null;

const formatRp = (num) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(num);
};

const getDisplayPrice = (service) => {
    return service.priceText || formatRp(service.price);
};

const escapeHTML = (str) => {
    if (!str) return "";
    return String(str).replace(/[&<>'"]/g, (tag) => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
    }[tag]));
};

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    OverheatingDB.init();
    renderNavbarAuth();
    renderFilters();
    renderServices();
    renderFAQ();
    checkExistingBooking();
    setupNavbarScroll();
    setupSearch();
});

function setupNavbarScroll() {
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.remove("bg-transparent", "border-transparent");
            navbar.classList.add("bg-bgDark/90", "backdrop-blur-md", "border-borderWhite");
        } else {
            navbar.classList.add("bg-transparent", "border-transparent");
            navbar.classList.remove("bg-bgDark/90", "backdrop-blur-md", "border-borderWhite");
        }
    });
}

// ==========================================
// AUTHENTICATION LOGIC (LOGIN / REGISTER / SESSION)
// ==========================================
function renderNavbarAuth() {
    const user = OverheatingDB.getCurrentUser();
    const navArea = document.getElementById("navAuthArea");
    const heroBtn = document.getElementById("heroAuthBtn");

    if (!user) {
        navArea.innerHTML = `
            <button onclick="openAuthModal('login')" class="text-sm text-textSecondary hover:text-textPrimary px-3 py-2 transition-colors">
                Login
            </button>
            <a href="#katalog" class="flex items-center gap-2 text-sm bg-transparent border border-borderWhite px-4 py-2 hover:border-accentRed hover:text-accentRed transition-all rounded">
                Booking <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
        `;
        if (heroBtn) {
            heroBtn.innerHTML = `<i data-lucide="user-check" class="w-4 h-4 text-accentRed"></i> Cek Status Servis / Login`;
            heroBtn.setAttribute("onclick", "openAuthModal('login')");
        }
    } else if (user.role === "admin") {
        navArea.innerHTML = `
            <span class="hidden sm:inline-flex items-center gap-1.5 text-xs bg-accentRed/20 border border-accentRed text-accentRed px-2.5 py-1 rounded font-semibold">
                <i data-lucide="shield" class="w-3.5 h-3.5"></i> ADMIN MODE
            </span>
            <button onclick="openDashboard()" class="flex items-center gap-2 text-sm bg-accentRed text-white px-4 py-2 hover:bg-darkRed transition-all rounded font-medium">
                <i data-lucide="layout-dashboard" class="w-4 h-4"></i> Panel Admin
            </button>
            <button onclick="handleLogout()" title="Keluar" class="p-2 text-textSecondary hover:text-accentRed border border-borderWhite rounded">
                <i data-lucide="log-out" class="w-4 h-4"></i>
            </button>
        `;
        if (heroBtn) {
            heroBtn.innerHTML = `<i data-lucide="layout-dashboard" class="w-4 h-4 text-accentRed"></i> Buka Panel Admin`;
            heroBtn.setAttribute("onclick", "openDashboard()");
        }
    } else {
        navArea.innerHTML = `
            <div class="hidden sm:flex items-center gap-1.5 text-xs bg-secondary border border-gold/40 text-gold px-3 py-1.5 rounded-full font-semibold">
                <i data-lucide="coins" class="w-3.5 h-3.5"></i> ${user.points} Poin
            </div>
            <button onclick="openDashboard()" class="flex items-center gap-2 text-sm bg-secondary border border-borderWhite px-3.5 py-2 hover:border-accentRed transition-all rounded font-medium">
                <i data-lucide="user" class="w-4 h-4 text-accentRed"></i>
                <span>${escapeHTML(user.full_name.split(" ")[0])}</span>
            </button>
            <button onclick="handleLogout()" title="Keluar" class="p-2 text-textSecondary hover:text-accentRed border border-borderWhite rounded">
                <i data-lucide="log-out" class="w-4 h-4"></i>
            </button>
        `;
        if (heroBtn) {
            heroBtn.innerHTML = `<i data-lucide="activity" class="w-4 h-4 text-accentRed"></i> Dashboard & Status Laptopmu`;
            heroBtn.setAttribute("onclick", "openDashboard()");
        }
    }
    lucide.createIcons();
}

function openAuthModal(tab = 'login') {
    switchAuthTab(tab);
    const overlay = document.getElementById("authModalOverlay");
    const modal = document.getElementById("authModal");
    
    overlay.classList.remove("hidden-safely");
    void overlay.offsetWidth;
    overlay.classList.add("opacity-100");
    overlay.classList.remove("opacity-0");
    modal.classList.add("modal-open");
}

function closeAuthModal() {
    const overlay = document.getElementById("authModalOverlay");
    const modal = document.getElementById("authModal");
    
    overlay.classList.remove("opacity-100");
    overlay.classList.add("opacity-0");
    modal.classList.remove("modal-open");
    setTimeout(() => overlay.classList.add("hidden-safely"), 300);
}

function switchAuthTab(tab) {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const tabLoginBtn = document.getElementById("tabLoginBtn");
    const tabRegisterBtn = document.getElementById("tabRegisterBtn");
    const alertBox = document.getElementById("authAlert");
    alertBox.classList.add("hidden-safely");

    if (tab === 'login') {
        loginForm.classList.remove("hidden-safely");
        registerForm.classList.add("hidden-safely");
        tabLoginBtn.className = "flex-1 pb-3 text-sm font-bold border-b-2 border-accentRed text-textPrimary transition-all";
        tabRegisterBtn.className = "flex-1 pb-3 text-sm font-medium border-b-2 border-transparent text-textSecondary hover:text-textPrimary transition-all";
    } else {
        loginForm.classList.add("hidden-safely");
        registerForm.classList.remove("hidden-safely");
        tabRegisterBtn.className = "flex-1 pb-3 text-sm font-bold border-b-2 border-accentRed text-textPrimary transition-all";
        tabLoginBtn.className = "flex-1 pb-3 text-sm font-medium border-b-2 border-transparent text-textSecondary hover:text-textPrimary transition-all";
    }
}

function showAuthAlert(msg, isError = true) {
    const alertBox = document.getElementById("authAlert");
    alertBox.innerText = msg;
    alertBox.className = `mb-4 p-3 rounded text-xs border ${
        isError ? 'bg-accentRed/10 border-accentRed text-accentRed' : 'bg-emerald-500/10 border-emerald-500 text-emerald-400'
    }`;
    alertBox.classList.remove("hidden-safely");
}

function fillDemoAuth(username, password) {
    document.getElementById("l_username").value = username;
    document.getElementById("l_password").value = password;
}

function handleLogin(e) {
    e.preventDefault();
    const uname = document.getElementById("l_username").value.trim().toLowerCase();
    const pass = document.getElementById("l_password").value;

    const db = OverheatingDB.getDB();
    const user = db.users.find(u => u.username.toLowerCase() === uname && u.password_hash === pass);

    if (!user) {
        showAuthAlert("Username atau password salah! Silakan cek kembali.");
        return;
    }

    OverheatingDB.setCurrentUser(user.id);
    document.getElementById("loginForm").reset();
    closeAuthModal();
    renderNavbarAuth();
    showToast(`Selamat datang, ${user.full_name}!`, user.role === 'admin' ? "Anda masuk sebagai Administrator." : `Saldo poin kamu: ${user.points} Poin.`);
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById("r_name").value.trim();
    const uname = document.getElementById("r_username").value.trim().toLowerCase();
    const wa = document.getElementById("r_wa").value.trim();
    const pass = document.getElementById("r_password").value;

    if (/\s/.test(uname)) {
        showAuthAlert("Username tidak boleh mengandung spasi.");
        return;
    }
    if (pass.length < 6) {
        showAuthAlert("Password minimal 6 karakter.");
        return;
    }

    const db = OverheatingDB.getDB();
    if (db.users.some(u => u.username.toLowerCase() === uname)) {
        showAuthAlert("Username sudah dipakai, silakan pilih username lain.");
        return;
    }

    const newUser = {
        id: "u_" + Date.now(),
        username: uname,
        password_hash: pass,
        full_name: name,
        whatsapp: wa,
        role: "client",
        points: 20, // Bonus daftar baru 20 poin
        created_at: new Date().toISOString()
    };

    db.users.push(newUser);
    OverheatingDB.saveDB(db);
    OverheatingDB.setCurrentUser(newUser.id);

    document.getElementById("registerForm").reset();
    closeAuthModal();
    renderNavbarAuth();
    showToast("Pendaftaran Berhasil!", "Selamat! Kamu mendapat bonus 20 Poin Member baru.");
}

function handleLogout() {
    OverheatingDB.setCurrentUser(null);
    renderNavbarAuth();
    showToast("Berhasil Keluar", "Sampai jumpa kembali!");
}

// Placeholder untuk Step 2 & Step 3
function openDashboard() {
    const user = OverheatingDB.getCurrentUser();
    if (!user) {
        openAuthModal('login');
        return;
    }
    showToast(
        user.role === 'admin' ? "Panel Admin Siap Dibangun!" : "Dashboard Member Siap Dibangun!",
        "Lanjut ke Step 2 untuk membuka tampilan Dashboard penuh."
    );
}

// ==========================================
// KATALOG & FAQ RENDER (MENGAMBIL DARI TABEL B: services)
// ==========================================
function renderFilters() {
    const container = document.getElementById("categoryFilters");
    container.innerHTML = categories.map(cat => `
        <button onclick="setFilter('${cat.id}')" 
            class="px-4 py-2 rounded-full border transition-all whitespace-nowrap 
            ${currentFilter === cat.id ? 'bg-textPrimary text-bgDark border-textPrimary font-medium' : 'border-borderWhite text-textSecondary hover:border-accentRed'}">
            ${cat.name}
        </button>
    `).join("");
}

function setFilter(id) {
    currentFilter = id;
    renderFilters();
    renderServices();
}

function setupSearch() {
    document.getElementById("searchInput").addEventListener("input", (e) => {
        currentSearch = e.target.value.toLowerCase();
        renderServices();
    });
}

function renderServices() {
    const container = document.getElementById("servicesGrid");
    const db = OverheatingDB.getDB();
    
    const filtered = db.services.filter(s => {
        if (s.isActive === false) return false;
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
            ${s.badge ? `<div class="absolute -top-3 right-4 bg-accentRed text-white text-[10px] font-bold px-3 py-1 rounded shadow-lg uppercase tracking-wider">${escapeHTML(s.badge)}</div>` : ''}
            
            <div class="flex justify-between items-start mb-4">
                <div class="w-10 h-10 rounded-full bg-secondary border border-borderWhite flex items-center justify-center group-hover:border-accentRed group-hover:text-accentRed transition-colors">
                    <i data-lucide="${s.icon || 'wrench'}" class="w-5 h-5"></i>
                </div>
                <span class="text-[11px] text-gold bg-gold/10 border border-gold/20 px-2 py-0.5 rounded-full font-medium">
                    +${s.pointsReward || Math.floor(s.price / 1000)} Poin
                </span>
            </div>
            
            <div class="text-xs text-textSecondary mb-1 uppercase tracking-widest">${escapeHTML(s.categoryName)}</div>
            <h4 class="text-lg font-bold mb-2">${escapeHTML(s.name)}</h4>
            
            <div class="flex items-end gap-2 mb-4">
                <div class="text-xl font-bold text-textPrimary">${getDisplayPrice(s)}</div>
                ${s.oldPrice ? `<div class="text-xs text-textSecondary line-through mb-1">${formatRp(s.oldPrice)}</div>` : ''}
            </div>
            
            <p class="text-sm text-textSecondary mb-6 flex-grow leading-relaxed">${escapeHTML(s.desc)}</p>
            
            <button onclick="openDetailModal('${s.id}')" class="w-full py-2 rounded border border-borderWhite text-sm font-medium hover:bg-white hover:text-black hover:border-white transition-all group-hover:bg-textPrimary group-hover:text-bgDark group-hover:border-textPrimary">
                Lihat Detail &rarr;
            </button>
        </div>
    `).join("");
    
    lucide.createIcons();
}

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
// MODAL & BOOKING LOGIC (TERINTEGRASI TABEL C & E)
// ==========================================
function openDetailModal(id) {
    selectedServiceId = id;
    const db = OverheatingDB.getDB();
    const s = db.services.find(x => x.id === id);
    if (!s) return;
    
    const content = `
        <div class="flex items-start justify-between mb-4">
            <div>
                <div class="text-xs text-accentRed tracking-widest uppercase mb-1">${escapeHTML(s.categoryName)}</div>
                <h3 class="text-2xl font-bold">${escapeHTML(s.name)}</h3>
            </div>
        </div>
        
        <div class="flex items-center justify-between mb-4 border-b border-borderWhite pb-4">
            <div class="text-xl font-bold">${getDisplayPrice(s)}</div>
            <div class="text-xs text-gold bg-gold/10 border border-gold/30 px-2.5 py-1 rounded">
                Reward Member: +${s.pointsReward || Math.floor(s.price / 1000)} Poin
            </div>
        </div>
        
        <p class="text-sm text-textSecondary mb-6 leading-relaxed">${escapeHTML(s.desc)}</p>
        
        <div class="mb-8">
            <h5 class="text-sm font-semibold mb-3">Yang Didapat:</h5>
            <ul class="space-y-2 text-sm text-textSecondary">
                ${(s.details || []).map(d => `<li class="flex gap-2 items-start"><i data-lucide="check" class="w-4 h-4 text-accentRed shrink-0 mt-0.5"></i> ${escapeHTML(d)}</li>`).join("")}
            </ul>
        </div>
        
        <button onclick="proceedToBooking()" class="w-full bg-textPrimary text-bgDark py-3 rounded font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
            Booking Layanan <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </button>
    `;

    document.getElementById("detailModalContent").innerHTML = content;
    
    const overlay = document.getElementById("detailModalOverlay");
    const modal = document.getElementById("detailModal");
    
    overlay.classList.remove("hidden-safely");
    void overlay.offsetWidth; 
    overlay.classList.add("opacity-100");
    overlay.classList.remove("opacity-0");
    modal.classList.add("modal-open");
    
    lucide.createIcons();
}

function closeDetailModal() {
    const overlay = document.getElementById("detailModalOverlay");
    const modal = document.getElementById("detailModal");
    
    overlay.classList.remove("opacity-100");
    overlay.classList.add("opacity-0");
    modal.classList.remove("modal-open");
    setTimeout(() => overlay.classList.add("hidden-safely"), 300);
}

function proceedToBooking() {
    closeDetailModal();
    setTimeout(() => openBookingForm(), 300);
}

function openBookingForm() {
    const db = OverheatingDB.getDB();
    const user = OverheatingDB.getCurrentUser();
    const s = db.services.find(x => x.id === selectedServiceId);
    if (!s) return;

    document.getElementById("formServiceName").innerText = `${s.name} (${getDisplayPrice(s)})`;
    hideErrors();

    // Auto-fill & Notice jika sudah login
    const noticeEl = document.getElementById("bookingMemberNotice");
    const voucherContainer = document.getElementById("voucherSelectionContainer");
    const voucherSelect = document.getElementById("b_voucher");

    if (user) {
        document.getElementById("b_name").value = user.full_name;
        document.getElementById("b_wa").value = user.whatsapp;
        noticeEl.innerHTML = `
            <div class="flex items-center justify-between">
                <span class="text-emerald-400 font-medium">✓ Login sebagai <b>${escapeHTML(user.full_name)}</b></span>
                <span class="text-gold font-semibold">${user.points} Poin</span>
            </div>
            <div class="text-textSecondary mt-0.5">Pesanan ini otomatis masuk ke Live Tracker akunmu.</div>
        `;

        // Cek Voucher Diskon milik user di Tabel E (user_redemptions)
        const myVouchers = db.user_redemptions.filter(r => r.user_id === user.id && !r.is_used && r.reward_type === "discount");
        if (myVouchers.length > 0) {
            voucherSelect.innerHTML = `<option value="">-- Tidak Pakai Voucher --</option>` + myVouchers.map(v => `
                <option value="${v.unique_code}" data-discount="${v.discount_value}">
                    ${escapeHTML(v.reward_title)} (${v.unique_code}) - Potongan ${formatRp(v.discount_value)}
                </option>
            `).join("");
            voucherContainer.classList.remove("hidden-safely");
        } else {
            voucherSelect.innerHTML = `<option value="">-- Tidak Pakai Voucher --</option>`;
            voucherContainer.classList.add("hidden-safely");
        }
    } else {
        noticeEl.innerHTML = `
            <div class="flex items-center justify-between gap-2">
                <span class="text-textSecondary">Ingin dapat Poin & pantau servis real-time?</span>
                <button type="button" onclick="closeFormModal(); setTimeout(() => openAuthModal('login'), 300);" class="text-accentRed font-semibold underline whitespace-nowrap">Login dulu</button>
            </div>
        `;
        voucherSelect.innerHTML = `<option value="">-- Tidak Pakai Voucher --</option>`;
        voucherContainer.classList.add("hidden-safely");
    }

    // Dynamic Fields
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
            <label class="block text-xs text-textSecondary mb-1">Area / Alamat Lengkap *</label>
            <input type="text" id="b_dynamic" placeholder="Contoh: Jl. Perjuangan, Cirebon" class="w-full bg-secondary border border-borderWhite rounded px-3 py-2 text-sm outline-none text-white focus:border-accentRed">
            <p id="err_dynamic" class="text-accentRed text-xs mt-1 hidden-safely">Lokasi wajib diisi.</p>
        `;
        dynContainer.classList.remove("hidden-safely");
    }

    // Multi-Select Add-Ons
    const addonsContainer = document.getElementById("addonsSelectionContainer");
    const addonsList = document.getElementById("addonsList");
    addonsList.innerHTML = "";

    if (s.categoryId !== "addon") {
        const addonServices = db.services.filter(item => item.categoryId === "addon" && item.isActive !== false);
        addonsList.innerHTML = addonServices.map(addon => `
            <div class="bg-secondary/60 border border-borderWhite rounded p-3 transition-colors hover:border-borderWhite/30">
                <label class="flex items-start gap-3 cursor-pointer select-none">
                    <input type="checkbox" value="${addon.id}" onchange="toggleAddon('${addon.id}')" class="addon-checkbox mt-1 accent-accentRed w-4 h-4 rounded cursor-pointer">
                    <div class="flex-1">
                        <div class="flex justify-between items-center gap-2">
                            <span class="text-sm font-medium text-textPrimary">${escapeHTML(addon.name)}</span>
                            <span class="text-xs text-accentRed font-semibold whitespace-nowrap">+${getDisplayPrice(addon)}</span>
                        </div>
                        <p class="text-xs text-textSecondary mt-0.5">${escapeHTML(addon.desc)}</p>
                    </div>
                </label>
                <div id="addon_extra_${addon.id}" class="hidden-safely mt-3 pl-7">
                    ${addon.needsExtraInput === "upgradeType" ? `
                        <select id="addon_input_${addon.id}" class="w-full bg-bgDark border border-borderWhite rounded px-3 py-1.5 text-xs outline-none text-white focus:border-accentRed">
                            <option value="">-- Pilih Komponen Upgrade --</option>
                            <option value="RAM">RAM</option>
                            <option value="SSD">SSD</option>
                            <option value="RAM + SSD">RAM + SSD</option>
                        </select>
                        <p id="err_addon_${addon.id}" class="text-accentRed text-[11px] mt-1 hidden-safely">Pilih jenis komponen.</p>
                    ` : ''}
                    ${addon.needsExtraInput === "location" ? `
                        <input type="text" id="addon_input_${addon.id}" placeholder="Masukkan alamat / patokan lokasi..." class="w-full bg-bgDark border border-borderWhite rounded px-3 py-1.5 text-xs outline-none text-white focus:border-accentRed">
                        <p id="err_addon_${addon.id}" class="text-accentRed text-[11px] mt-1 hidden-safely">Alamat antar-jemput wajib diisi.</p>
                    ` : ''}
                </div>
            </div>
        `).join("");
        addonsContainer.classList.remove("hidden-safely");
    } else {
        addonsContainer.classList.add("hidden-safely");
    }

    updateTotalPrice();
    lucide.createIcons();

    const overlay = document.getElementById("formModalOverlay");
    const modal = document.getElementById("formModal");
    
    overlay.classList.remove("hidden-safely");
    void overlay.offsetWidth;
    overlay.classList.add("opacity-100");
    overlay.classList.remove("opacity-0");
    modal.classList.add("modal-open");
}

function toggleAddon(addonId) {
    const checkbox = document.querySelector(`.addon-checkbox[value="${addonId}"]`);
    const extraDiv = document.getElementById(`addon_extra_${addonId}`);
    if (extraDiv) {
        if (checkbox.checked) {
            extraDiv.classList.remove("hidden-safely");
        } else {
            extraDiv.classList.add("hidden-safely");
            const errEl = document.getElementById(`err_addon_${addonId}`);
            if (errEl) errEl.classList.add("hidden-safely");
        }
    }
    updateTotalPrice();
}

function updateTotalPrice() {
    const db = OverheatingDB.getDB();
    const mainService = db.services.find(x => x.id === selectedServiceId);
    if (!mainService) return;

    let subtotal = mainService.price;
    let hasRangePrice = !!mainService.isRangePrice;

    const checkedBoxes = document.querySelectorAll(".addon-checkbox:checked");
    checkedBoxes.forEach(cb => {
        const addon = db.services.find(x => x.id === cb.value);
        if (addon) {
            subtotal += addon.price;
            if (addon.isRangePrice) hasRangePrice = true;
        }
    });

    // Cek Potongan Voucher
    const voucherSelect = document.getElementById("b_voucher");
    let discountAmount = 0;
    if (voucherSelect && voucherSelect.value) {
        const selectedOption = voucherSelect.options[voucherSelect.selectedIndex];
        discountAmount = parseInt(selectedOption.getAttribute("data-discount") || "0", 10);
    }

    const discountRow = document.getElementById("discountRow");
    if (discountAmount > 0) {
        discountRow.classList.remove("hidden-safely");
        document.getElementById("formDiscountAmount").innerText = `-${formatRp(discountAmount)}`;
    } else {
        discountRow.classList.add("hidden-safely");
    }

    const finalTotal = Math.max(0, subtotal - discountAmount);
    const priceDisplay = hasRangePrice ? `Mulai ${formatRp(finalTotal)}` : formatRp(finalTotal);
    const pointsEarned = Math.floor(finalTotal / 1000);

    document.getElementById("formTotalPrice").innerText = priceDisplay;
    document.getElementById("formPointsEarned").innerText = `+${pointsEarned} Poin`;

    return { subtotal, discountAmount, finalTotal, priceDisplay, pointsEarned };
}

function closeFormModal() {
    const overlay = document.getElementById("formModalOverlay");
    const modal = document.getElementById("formModal");
    
    overlay.classList.remove("opacity-100");
    overlay.classList.add("opacity-0");
    modal.classList.remove("modal-open");
    setTimeout(() => overlay.classList.add("hidden-safely"), 300);
}

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
    const voucherCode = document.getElementById("b_voucher")?.value || null;
    
    let isValid = true;
    if(!name) { document.getElementById("err_name").classList.remove("hidden-safely"); isValid = false; }
    if(!wa || !/^[0-9+\-\s]{9,16}$/.test(wa)) { document.getElementById("err_wa").classList.remove("hidden-safely"); isValid = false; }
    if(!laptop) { document.getElementById("err_laptop").classList.remove("hidden-safely"); isValid = false; }
    
    const db = OverheatingDB.getDB();
    const s = db.services.find(x => x.id === selectedServiceId);
    let dynamicVal = "";
    if(s.needsExtraInput) {
        dynamicVal = document.getElementById("b_dynamic").value.trim();
        if(!dynamicVal) { document.getElementById("err_dynamic").classList.remove("hidden-safely"); isValid = false; }
    }

    const selectedAddons = [];
    const checkedBoxes = document.querySelectorAll(".addon-checkbox:checked");
    checkedBoxes.forEach(cb => {
        const addon = db.services.find(x => x.id === cb.value);
        if (addon) {
            let extraVal = null;
            if (addon.needsExtraInput) {
                const inputEl = document.getElementById(`addon_input_${addon.id}`);
                extraVal = inputEl ? inputEl.value.trim() : "";
                if (!extraVal) {
                    const errEl = document.getElementById(`err_addon_${addon.id}`);
                    if (errEl) errEl.classList.remove("hidden-safely");
                    isValid = false;
                }
            }
            selectedAddons.push({
                id: addon.id,
                name: addon.name,
                priceDisplay: getDisplayPrice(addon),
                extraLabel: addon.needsExtraInput === 'upgradeType' ? 'Komponen' : (addon.needsExtraInput === 'location' ? 'Lokasi' : null),
                extraValue: extraVal
            });
        }
    });

    if(!isValid) return;

    const { discountAmount, finalTotal, priceDisplay, pointsEarned } = updateTotalPrice();
    const user = OverheatingDB.getCurrentUser();

    // Generate Booking Code
    const d = new Date();
    const dateStr = d.getFullYear().toString() + (d.getMonth()+1).toString().padStart(2,'0') + d.getDate().toString().padStart(2,'0');
    const rnd = Math.floor(Math.random() * 900) + 100;
    const bookingId = `BK-${dateStr}-${rnd}`;

    // 1. Buat Record Baru untuk Tabel C (bookings)
    const newBookingRecord = {
        booking_code: bookingId,
        user_id: user ? user.id : null,
        customer_name: name,
        whatsapp: wa,
        laptop_model: laptop,
        service_name: s.name,
        dynamic_label: s.needsExtraInput === 'upgradeType' ? 'Jenis Upgrade' : (s.needsExtraInput === 'location' ? 'Area/Lokasi' : null),
        dynamic_value: dynamicVal,
        addons: selectedAddons,
        voucher_code: voucherCode,
        discount_amount: discountAmount,
        total_price: finalTotal,
        total_price_display: priceDisplay,
        points_earned: pointsEarned,
        status: "pending",
        payment_status: "unpaid",
        customer_notes: notes || "-",
        admin_notes: "Pesanan diterima. Menunggu penyerahan unit laptop.",
        created_at: new Date().toISOString()
    };

    db.bookings.unshift(newBookingRecord);

    // 2. Tandai Voucher sebagai Terpakai di Tabel E (user_redemptions) jika dipakai
    if (voucherCode && user) {
        const redemption = db.user_redemptions.find(r => r.unique_code === voucherCode && r.user_id === user.id);
        if (redemption) redemption.is_used = true;
    }

    OverheatingDB.saveDB(db);

    // Simpan ke tampilan tiket aktif
    currentBookingState = newBookingRecord;
    localStorage.setItem("overheating_booking", JSON.stringify(currentBookingState));

    document.getElementById("bookingForm").reset();
    closeFormModal();
    showToast("Booking Berhasil Dibuat!", `Kode Tiket: ${bookingId} telah masuk ke database.`);
    renderTicket();
    
    setTimeout(() => {
        document.getElementById("ticketSection").scrollIntoView({ behavior: 'smooth' });
    }, 400);
}

// ==========================================
// TICKET RENDER & WHATSAPP
// ==========================================
function checkExistingBooking() {
    const saved = localStorage.getItem("overheating_booking");
    if(saved) {
        try {
            currentBookingState = JSON.parse(saved);
            renderTicket();
        } catch(e) {
            localStorage.removeItem("overheating_booking");
        }
    }
}

function renderTicket() {
    if(!currentBookingState) return;
    const t = currentBookingState;
    const container = document.getElementById("ticketContainer");
    
    const bookingCode = t.booking_code || t.id;
    const customerName = t.customer_name || t.name;
    const laptopModel = t.laptop_model || t.laptop;
    const serviceName = t.service_name || t.serviceName;
    const dynLabel = t.dynamic_label || t.dynamicLabel;
    const dynValue = t.dynamic_value || t.dynamicValue;
    const displayTotal = t.total_price_display || t.totalPriceDisplay || t.price;
    const notes = t.customer_notes || t.notes;

    const addonsHTML = (t.addons && t.addons.length > 0) ? `
        <div class="mt-3 pt-3 border-t border-borderWhite/60">
            <div class="text-xs text-textSecondary mb-1.5">Add-On Tambahan:</div>
            <ul class="space-y-1.5">
                ${t.addons.map(a => `
                    <li class="text-xs flex flex-col">
                        <div class="flex justify-between font-medium text-textPrimary">
                            <span>+ ${escapeHTML(a.name)}</span>
                            <span class="text-textSecondary">${escapeHTML(a.priceDisplay)}</span>
                        </div>
                        ${a.extraValue ? `<span class="text-[11px] text-accentRed">${escapeHTML(a.extraLabel)}: ${escapeHTML(a.extraValue)}</span>` : ''}
                    </li>
                `).join("")}
            </ul>
        </div>
    ` : '';

    const voucherHTML = t.voucher_code ? `
        <div class="mt-2 pt-2 border-t border-borderWhite/60 flex justify-between text-xs text-gold">
            <span>Voucher (${escapeHTML(t.voucher_code)}):</span>
            <span>-${formatRp(t.discount_amount || 0)}</span>
        </div>
    ` : '';
    
    container.innerHTML = `
        <div class="absolute inset-0 bg-ink-wash opacity-50 z-0"></div>
        <div class="relative z-10">
            <div class="flex justify-between items-start mb-8 pb-6 border-b border-borderWhite border-dashed">
                <div>
                    <div class="text-sm font-bold tracking-widest text-textSecondary mb-1">INVOICE & TICKET</div>
                    <div class="text-2xl font-bold text-accentRed">${escapeHTML(bookingCode)}</div>
                </div>
                <div class="seal text-xl px-2">修</div>
            </div>
            
            <div class="space-y-4 mb-8">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <div class="text-xs text-textSecondary mb-1">Atas Nama</div>
                        <div class="font-semibold text-sm">${escapeHTML(customerName)}</div>
                    </div>
                    <div>
                        <div class="text-xs text-textSecondary mb-1">Jenis Laptop</div>
                        <div class="font-semibold text-sm">${escapeHTML(laptopModel)}</div>
                    </div>
                </div>
                
                <div class="bg-secondary p-3 rounded border border-borderWhite">
                    <div class="text-xs text-textSecondary mb-1">Layanan Utama</div>
                    <div class="font-bold text-base text-textPrimary">${escapeHTML(serviceName)}</div>
                    ${dynLabel ? `<div class="text-xs mt-1 font-medium text-accentRed">${escapeHTML(dynLabel)}:${escapeHTML(dynValue)}</div>` : ''}
                    ${addonsHTML}
                    ${voucherHTML}
                </div>
                
                <div class="grid grid-cols-2 gap-4 items-center">
                    <div>
                        <div class="text-xs text-textSecondary mb-1">Estimasi Total</div>
                        <div class="font-bold text-lg text-textPrimary">${escapeHTML(displayTotal)}</div>
                    </div>
                    <div>
                        <div class="text-xs text-textSecondary mb-1">Status Database</div>
                        <div class="inline-flex items-center gap-1 text-[10px] font-bold bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded border border-yellow-500/20 uppercase">
                            <span class="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span> ${escapeHTML(t.status || 'PENDING')}
                        </div>
                    </div>
                </div>
                
                <div>
                    <div class="text-xs text-textSecondary mb-1">Catatan Keluhan</div>
                    <div class="text-sm p-2 bg-black rounded border border-borderWhite italic text-gray-400">"${escapeHTML(notes)}"</div>
                </div>
            </div>
            
            <div class="text-center text-[10px] text-textSecondary border-t border-borderWhite pt-4 uppercase tracking-widest">
                Overheating Club.id by adn store
            </div>
        </div>
    `;

    document.getElementById("ticketSection").classList.remove("hidden-safely");
}

function clearTicket() {
    localStorage.removeItem("overheating_booking");
    currentBookingState = null;
    document.getElementById("ticketSection").classList.add("hidden-safely");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function sendToWhatsApp() {
    if(!currentBookingState) return;
    const t = currentBookingState;
    
    const bookingCode = t.booking_code || t.id;
    const customerName = t.customer_name || t.name;
    const laptopModel = t.laptop_model || t.laptop;
    const serviceName = t.service_name || t.serviceName;
    const dynLabel = t.dynamic_label || t.dynamicLabel;
    const dynValue = t.dynamic_value || t.dynamicValue;
    const displayTotal = t.total_price_display || t.totalPriceDisplay || t.price;
    const notes = t.customer_notes || t.notes;

    let dynText = dynLabel ? `\n  (${dynLabel}: ${dynValue})` : "";
    let addonsText = "";
    if (t.addons && t.addons.length > 0) {
        addonsText = "\n\n*Add-On Tambahan:*\n" + t.addons.map(a => {
            let extra = a.extraValue ? ` (${a.extraLabel}: ${a.extraValue})` : "";
            return `- ${a.name}${extra}`;
        }).join("\n");
    }
    let voucherText = t.voucher_code ? `\nVoucher Dipakai: ${t.voucher_code} (-${formatRp(t.discount_amount)})` : "";

    const msg = `Halo Admin Overheating Club, saya ingin konfirmasi booking servis laptop.

*INVOICE BOOKING*
No. Booking: *${bookingCode}*
Nama: ${customerName}
No. WhatsApp: ${t.whatsapp}
Unit Laptop: ${laptopModel}

*Layanan Utama:*
- ${serviceName}${dynText}${addonsText}${voucherText}

*Estimasi Total Biaya:*
${displayTotal}

*Catatan / Keluhan:*
"${notes}"

Mohon konfirmasi jadwal untuk penyerahan unit. Terima kasih!`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ==========================================
// TOAST NOTIFICATION
// ==========================================
function showToast(title = "Berhasil", desc = "Data telah disimpan.") {
    document.getElementById("toastTitle").innerText = title;
    document.getElementById("toastDesc").innerText = desc;
    const toast = document.getElementById("toast");
    toast.classList.remove("opacity-0", "translate-y-20");
    
    setTimeout(() => {
        toast.classList.add("opacity-0", "translate-y-20");
    }, 4000);
}

// ==========================================
// CLIENT DASHBOARD LOGIC (STEP 2)
// ==========================================
let activeClientTab = "status";

function openDashboard() {
    const user = OverheatingDB.getCurrentUser();
    if (!user) {
        openAuthModal('login');
        return;
    }

    if (user.role === "admin") {
        // Akan kita isi di Step 3 (Panel Admin)
        if (typeof openAdminDashboard === "function") {
            openAdminDashboard();
        } else {
            showToast("Mode Admin Aktif", "Ketik 'Lanjut Step 3' untuk memasang Panel Admin lengkap!");
        }
        return;
    }

    // Buka Dashboard Client
    renderClientDashboard();
    const overlay = document.getElementById("clientDashboardOverlay");
    overlay.classList.remove("hidden-safely");
    document.body.style.overflow = "hidden"; // Kunci scroll halaman belakang
}

function closeClientDashboard() {
    const overlay = document.getElementById("clientDashboardOverlay");
    overlay.classList.add("hidden-safely");
    document.body.style.overflow = ""; // Kembalikan scroll
    renderNavbarAuth();
}

function switchClientTab(tabName) {
    activeClientTab = tabName;
    const tabs = ["status", "rewards", "katalog", "settings"];
    
    tabs.forEach(t => {
        const btn = document.getElementById(`cTabBtn_${t}`);
        const content = document.getElementById(`cTabContent_${t}`);
        if (t === tabName) {
            btn.className = "px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 bg-accentRed text-white transition-all whitespace-nowrap";
            content.classList.remove("hidden-safely");
        } else {
            btn.className = "px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 bg-cardDark text-textSecondary border border-borderWhite hover:text-textPrimary transition-all whitespace-nowrap";
            content.classList.add("hidden-safely");
        }
    });

    renderClientDashboard();
}

function renderClientDashboard() {
    const user = OverheatingDB.getCurrentUser();
    if (!user) return;

    document.getElementById("cd_welcomeName").innerText = `Halo, ${user.full_name}`;
    document.getElementById("cd_userPoints").innerText = `${user.points} Poin`;

    if (activeClientTab === "status") renderClientBookings(user);
    if (activeClientTab === "rewards") renderClientRewards(user);
    if (activeClientTab === "katalog") renderClientQuickCatalog();
    if (activeClientTab === "settings") populateClientSettings(user);

    lucide.createIcons();
}

// 1. Render Status Pengerjaan Laptop (Pending -> Proses -> Done)
function renderClientBookings(user) {
    const db = OverheatingDB.getDB();
    const container = document.getElementById("cd_bookingsList");
    const myBookings = db.bookings.filter(b => b.user_id === user.id || b.whatsapp === user.whatsapp);

    if (myBookings.length === 0) {
        container.innerHTML = `
            <div class="bg-cardDark border border-borderWhite rounded-xl p-10 text-center">
                <i data-lucide="laptop" class="w-10 h-10 text-textSecondary mx-auto mb-3"></i>
                <div class="font-bold text-base mb-1">Belum Ada Riwayat Servis</div>
                <p class="text-xs text-textSecondary mb-4">Kamu belum memiliki antrean atau riwayat servis laptop.</p>
                <button onclick="switchClientTab('katalog')" class="bg-accentRed text-white px-4 py-2 rounded text-xs font-semibold hover:bg-darkRed transition-colors">
                    Lihat Layanan & Booking
                </button>
            </div>
        `;
        return;
    }

    container.innerHTML = myBookings.map(b => {
        const st = (b.status || "pending").toLowerCase();
        
        // Stepper Progress Calculation
        const step1Active = true; // Pending selalu dilewati
        const step2Active = st === "proses" || st === "done";
        const step3Active = st === "done";

        const badgeStyle = {
            pending: "bg-yellow-500/10 text-yellow-500 border-yellow-500/30",
            proses: "bg-blue-500/10 text-blue-400 border-blue-500/30",
            done: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
            cancelled: "bg-red-500/10 text-red-400 border-red-500/30"
        }[st] || "bg-yellow-500/10 text-yellow-500 border-yellow-500/30";

        const statusLabel = {
            pending: "PENDING (Menunggu Antrean / Unit)",
            proses: "PROSES (Sedang Dikerjakan Teknisi)",
            done: "DONE (Selesai & Siap Diambil)",
            cancelled: "DIBATALKAN"
        }[st] || st.toUpperCase();

        const addonsList = (b.addons && b.addons.length > 0)
            ? b.addons.map(a => `<span class="inline-block bg-secondary border border-borderWhite px-2 py-0.5 rounded text-[11px] text-textSecondary">+ ${escapeHTML(a.name)} ${a.extraValue ? `(${escapeHTML(a.extraValue)})` : ''}</span>`).join(" ")
            : "";

        const dateFormatted = new Date(b.created_at).toLocaleDateString("id-ID", {
            day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit"
        });

        return `
            <div class="bg-cardDark border border-borderWhite rounded-xl p-6 space-y-5 hover:border-borderWhite/30 transition-all">
                <!-- Top Info -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-borderWhite">
                    <div>
                        <div class="flex items-center gap-2">
                            <span class="text-lg font-bold text-accentRed">${escapeHTML(b.booking_code)}</span>
                            <span class="text-xs text-textSecondary">• ${dateFormatted}</span>
                        </div>
                        <div class="text-base font-bold text-textPrimary mt-0.5">${escapeHTML(b.laptop_model)} — ${escapeHTML(b.service_name)}</div>
                    </div>
                    <div class="flex items-center gap-2 self-start sm:self-auto">
                        <span class="text-[11px] font-bold px-3 py-1 rounded-full border ${badgeStyle}">
                            ${statusLabel}
                        </span>
                        <span class="text-[11px] font-semibold px-2.5 py-1 rounded border ${b.payment_status === 'paid' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-secondary text-textSecondary border-borderWhite'}">
                            ${b.payment_status === 'paid' ? 'LUNAS' : 'BELUM BAYAR'}
                        </span>
                    </div>
                </div>

                <!-- Visual Stepper (Pending -> Proses -> Done) -->
                ${st !== 'cancelled' ? `
                <div class="grid grid-cols-3 gap-2 pt-1">
                    <div class="flex flex-col">
                        <div class="h-1.5 rounded-full ${step1Active ? 'bg-yellow-500' : 'bg-secondary'} mb-2"></div>
                        <span class="text-xs font-bold ${step1Active ? 'text-yellow-500' : 'text-textSecondary'}">1. Pending</span>
                        <span class="text-[11px] text-textSecondary">Pesanan tercatat</span>
                    </div>
                    <div class="flex flex-col">
                        <div class="h-1.5 rounded-full ${step2Active ? 'bg-blue-400' : 'bg-secondary'} mb-2"></div>
                        <span class="text-xs font-bold ${step2Active ? 'text-blue-400' : 'text-textSecondary'}">2. Proses Pengerjaan</span>
                        <span class="text-[11px] text-textSecondary">Ditangani teknisi</span>
                    </div>
                    <div class="flex flex-col">
                        <div class="h-1.5 rounded-full ${step3Active ? 'bg-emerald-400' : 'bg-secondary'} mb-2"></div>
                        <span class="text-xs font-bold ${step3Active ? 'text-emerald-400' : 'text-textSecondary'}">3. Selesai (Done)</span>
                        <span class="text-[11px] text-textSecondary">Unit siap diambil</span>
                    </div>
                </div>
                ` : ''}

                <!-- Detail Addons & Catatan Teknisi -->
                <div class="space-y-3">
                    ${addonsList ? `<div class="flex flex-wrap gap-1.5">${addonsList}</div>` : ''}
                    
                    <div class="bg-secondary/80 border-l-2 border-accentRed p-3.5 rounded-r-lg">
                        <div class="text-[11px] uppercase tracking-wider text-accentRed font-bold mb-1 flex items-center gap-1.5">
                            <i data-lucide="wrench" class="w-3.5 h-3.5"></i> Laporan / Catatan Teknisi:
                        </div>
                        <p class="text-xs text-textPrimary leading-relaxed">${escapeHTML(b.admin_notes || "Menunggu konfirmasi penyerahan unit.")}</p>
                    </div>
                </div>

                <!-- Bottom Action & Price -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-borderWhite/60">
                    <div>
                        <span class="text-xs text-textSecondary">Total Estimasi: </span>
                        <span class="text-base font-bold text-textPrimary">${escapeHTML(b.total_price_display)}</span>
                        ${b.voucher_code ? `<span class="text-xs text-gold ml-2">(Voucher ${escapeHTML(b.voucher_code)})</span>` : ''}
                    </div>
                    <div class="flex gap-2">
                        <button onclick="viewInvoiceFromDashboard('${b.booking_code}')" class="px-3 py-1.5 rounded border border-borderWhite hover:border-textPrimary text-xs font-medium transition-colors">
                            Lihat Tiket Invoice
                        </button>
                        <button onclick="askAdminBookingWA('${b.booking_code}')" class="px-3 py-1.5 rounded bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-bgDark text-xs font-semibold transition-colors flex items-center gap-1.5">
                            <i data-lucide="message-circle" class="w-3.5 h-3.5"></i> Tanya Admin
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

function viewInvoiceFromDashboard(bookingCode) {
    const db = OverheatingDB.getDB();
    const found = db.bookings.find(b => b.booking_code === bookingCode);
    if (!found) return;

    currentBookingState = found;
    localStorage.setItem("overheating_booking", JSON.stringify(found));
    renderTicket();
    closeClientDashboard();
    setTimeout(() => {
        document.getElementById("ticketSection").scrollIntoView({ behavior: "smooth" });
    }, 250);
}

function askAdminBookingWA(bookingCode) {
    const db = OverheatingDB.getDB();
    const b = db.bookings.find(x => x.booking_code === bookingCode);
    if (!b) return;
    const msg = `Halo Admin Overheating Club, saya *${b.customer_name}* ingin menanyakan perkembangan servis laptop *${b.laptop_model}* dengan Kode Booking *${b.booking_code}* (Status saat ini: *${b.status.toUpperCase()}*). Terima kasih!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
}

// 2. Render Katalog Tukar Poin & Dompet Voucher (Tabel D & E)
function renderClientRewards(user) {
    const db = OverheatingDB.getDB();
    
    // Render Dompet Voucher milik User
    const myVouchersContainer = document.getElementById("cd_myVouchersList");
    const myRedemptions = db.user_redemptions.filter(r => r.user_id === user.id);

    if (myRedemptions.length === 0) {
        myVouchersContainer.innerHTML = `
            <div class="col-span-full bg-cardDark border border-borderWhite rounded-lg p-6 text-center text-xs text-textSecondary">
                Kamu belum memiliki voucher atau hadiah. Yuk tukarkan poinmu di bawah!
            </div>
        `;
    } else {
        myVouchersContainer.innerHTML = myRedemptions.map(r => `
            <div class="bg-cardDark border ${r.is_used ? 'border-borderWhite opacity-60' : 'border-gold/40'} rounded-lg p-4 flex items-center justify-between gap-4">
                <div>
                    <div class="flex items-center gap-2 mb-1">
                        <span class="text-[10px] font-bold uppercase px-2 py-0.5 rounded ${r.reward_type === 'discount' ? 'bg-accentRed/20 text-accentRed' : 'bg-gold/20 text-gold'}">
                            ${r.reward_type === 'discount' ? 'Voucher Diskon' : 'Hadiah Fisik'}
                        </span>
                        <span class="text-[10px] font-semibold ${r.is_used ? 'text-textSecondary' : 'text-emerald-400'}">
                            • ${r.is_used ? 'Sudah Terpakai' : 'Tersedia'}
                        </span>
                    </div>
                    <h4 class="font-bold text-sm text-textPrimary">${escapeHTML(r.reward_title)}</h4>
                    <div class="text-xs font-mono text-gold mt-1">Kode: <b>${escapeHTML(r.unique_code)}</b></div>
                </div>
                ${!r.is_used ? `
                    <button onclick="navigator.clipboard.writeText('${r.unique_code}'); showToast('Kode Disalin!', 'Kode${r.unique_code} siap digunakan.');" class="shrink-0 bg-secondary border border-borderWhite hover:border-gold text-xs px-3 py-1.5 rounded font-medium transition-colors">
                        Salin Kode
                    </button>
                ` : ''}
            </div>
        `).join("");
    }

    // Render Katalog Penukaran Poin
    const catalogContainer = document.getElementById("cd_rewardsCatalog");
    catalogContainer.innerHTML = db.vouchers_rewards.map(vr => {
        const enoughPoints = user.points >= vr.points_cost;
        const available = vr.stock > 0;
        const canRedeem = enoughPoints && available;

        return `
            <div class="bg-cardDark border border-borderWhite rounded-xl p-5 flex flex-col justify-between hover:border-gold/40 transition-all">
                <div>
                    <div class="flex justify-between items-start gap-2 mb-3">
                        <span class="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded ${vr.type === 'discount' ? 'bg-accentRed/15 text-accentRed' : 'bg-blue-500/15 text-blue-400'}">
                            ${vr.type === 'discount' ? 'Potongan Servis' : 'Merchandise'}
                        </span>
                        <span class="text-xs text-textSecondary">Stok: <b>${vr.stock}</b></span>
                    </div>
                    <h4 class="font-bold text-base mb-2">${escapeHTML(vr.title)}</h4>
                    <div class="text-lg font-bold text-gold mb-4 flex items-center gap-1.5">
                        <i data-lucide="coins" class="w-4 h-4"></i> ${vr.points_cost} Poin
                    </div>
                </div>
                <button 
                    onclick="handleRedeemReward('${vr.id}')" 
                    ${!canRedeem ? 'disabled' : ''} 
                    class="w-full py-2 rounded text-xs font-semibold transition-all ${
                        canRedeem 
                        ? 'bg-gold text-bgDark hover:bg-yellow-500 cursor-pointer' 
                        : 'bg-secondary text-textSecondary border border-borderWhite cursor-not-allowed'
                    }">
                    ${!available ? 'Stok Habis' : (!enoughPoints ? `Kurang ${vr.points_cost - user.points} Poin` : 'Tukar Poin Sekarang')}
                </button>
            </div>
        `;
    }).join("");
}

function handleRedeemReward(rewardId) {
    const db = OverheatingDB.getDB();
    const currentUser = OverheatingDB.getCurrentUser();
    if (!currentUser) return;

    const userIdx = db.users.findIndex(u => u.id === currentUser.id);
    const rewardIdx = db.vouchers_rewards.findIndex(r => r.id === rewardId);

    if (userIdx === -1 || rewardIdx === -1) return;

    const user = db.users[userIdx];
    const reward = db.vouchers_rewards[rewardIdx];

    if (reward.stock <= 0) {
        showToast("Gagal Menukar", "Maaf, stok reward ini sudah habis.");
        return;
    }
    if (user.points < reward.points_cost) {
        showToast("Poin Belum Cukup", `Kamu membutuhkan ${reward.points_cost} poin untuk menukar item ini.`);
        return;
    }

    // Potong poin & kurangi stok
    user.points -= reward.points_cost;
    reward.stock -= 1;

    // Generate Kode Unik Voucher/Klaim
    const prefix = reward.type === "discount" ? "DISC" : "GIFT";
    const rnd = Math.floor(Math.random() * 9000) + 1000;
    const uniqueCode = `OHC-${prefix}-${rnd}`;

    // Simpan ke Tabel E (user_redemptions)
    db.user_redemptions.unshift({
        id: "red_" + Date.now(),
        user_id: user.id,
        reward_id: reward.id,
        reward_title: reward.title,
        reward_type: reward.type,
        discount_value: reward.discount_value || 0,
        unique_code: uniqueCode,
        is_used: false,
        redeemed_at: new Date().toISOString()
    });

    OverheatingDB.saveDB(db);
    renderClientDashboard();
    showToast("Penukaran Berhasil!", `${reward.title} berhasil diklaim dengan kode: ${uniqueCode}`);
}

// 3. Render Katalog Cepat di dalam Dashboard
function renderClientQuickCatalog() {
    const db = OverheatingDB.getDB();
    const container = document.getElementById("cd_quickCatalog");
    const activeServices = db.services.filter(s => s.isActive !== false);

    container.innerHTML = activeServices.map(s => `
        <div class="bg-cardDark border border-borderWhite rounded-lg p-4 flex flex-col justify-between hover:border-accentRed transition-all">
            <div>
                <div class="flex justify-between items-center text-[11px] text-textSecondary mb-1">
                    <span class="uppercase tracking-wider">${escapeHTML(s.categoryName)}</span>
                    <span class="text-gold font-semibold">+${s.pointsReward || Math.floor(s.price / 1000)} Poin</span>
                </div>
                <h4 class="font-bold text-base mb-1">${escapeHTML(s.name)}</h4>
                <div class="text-accentRed font-bold text-sm mb-2">${getDisplayPrice(s)}</div>
                <p class="text-xs text-textSecondary mb-4">${escapeHTML(s.desc)}</p>
            </div>
            <button onclick="selectedServiceId='${s.id}'; closeClientDashboard(); setTimeout(() => openBookingForm(), 250);" class="w-full bg-secondary border border-borderWhite hover:border-textPrimary hover:bg-textPrimary hover:text-bgDark py-2 rounded text-xs font-semibold transition-colors">
                Pilih & Booking Layanan Ini &rarr;
            </button>
        </div>
    `).join("");
}

// 4. Pengaturan Akun Member
function populateClientSettings(user) {
    document.getElementById("cs_username").value = user.username;
    document.getElementById("cs_name").value = user.full_name;
    document.getElementById("cs_wa").value = user.whatsapp;
    document.getElementById("cs_password").value = "";
}

function handleUpdateProfile(e) {
    e.preventDefault();
    const currentUser = OverheatingDB.getCurrentUser();
    if (!currentUser) return;

    const newName = document.getElementById("cs_name").value.trim();
    const newWa = document.getElementById("cs_wa").value.trim();
    const newPass = document.getElementById("cs_password").value;

    if (!newName || !newWa) {
        showToast("Validasi Gagal", "Nama lengkap dan nomor WhatsApp tidak boleh kosong.");
        return;
    }
    if (newPass && newPass.length < 6) {
        showToast("Validasi Gagal", "Password baru minimal harus 6 karakter.");
        return;
    }

    const db = OverheatingDB.getDB();
    const idx = db.users.findIndex(u => u.id === currentUser.id);
    if (idx === -1) return;

    db.users[idx].full_name = newName;
    db.users[idx].whatsapp = newWa;
    if (newPass) {
        db.users[idx].password_hash = newPass;
    }

    OverheatingDB.saveDB(db);
    renderClientDashboard();
    showToast("Profil Diperbarui!", "Data akun member kamu berhasil disimpan.");
}

// ==========================================
// ADMIN DASHBOARD ERP LOGIC (STEP 3)
// ==========================================
let activeAdminTab = "bookings";
let adminBookingFilter = "all";

function openAdminDashboard() {
    const user = OverheatingDB.getCurrentUser();
    if (!user || user.role !== "admin") {
        showToast("Akses Ditolak", "Halaman ini khusus untuk Administrator.");
        return;
    }

    renderAdminDashboard();
    const overlay = document.getElementById("adminDashboardOverlay");
    overlay.classList.remove("hidden-safely");
    document.body.style.overflow = "hidden";
}

function closeAdminDashboard() {
    const overlay = document.getElementById("adminDashboardOverlay");
    overlay.classList.add("hidden-safely");
    document.body.style.overflow = "";
    renderNavbarAuth();
    renderServices(); // Refresh katalog halaman depan jika ada perubahan dari Admin
}

function switchAdminTab(tabName) {
    activeAdminTab = tabName;
    const tabs = ["bookings", "catalog", "users", "finances"];
    
    tabs.forEach(t => {
        const btn = document.getElementById(`aTabBtn_${t}`);
        const content = document.getElementById(`aTabContent_${t}`);
        if (t === tabName) {
            btn.className = "px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 bg-accentRed text-white transition-all whitespace-nowrap";
            content.classList.remove("hidden-safely");
        } else {
            btn.className = "px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 bg-cardDark text-textSecondary border border-borderWhite hover:text-textPrimary transition-all whitespace-nowrap";
            content.classList.add("hidden-safely");
        }
    });

    renderAdminDashboard();
}

function renderAdminDashboard() {
    const db = OverheatingDB.getDB();

    // Update Top Quick Stats
    const activeCount = db.bookings.filter(b => b.status === "pending" || b.status === "proses").length;
    const doneCount = db.bookings.filter(b => b.status === "done").length;
    const memberCount = db.users.filter(u => u.role === "client").length;
    
    const totalIncome = db.finances.filter(f => f.type === "income").reduce((sum, f) => sum + Number(f.amount), 0);
    const totalExpense = db.finances.filter(f => f.type === "expense").reduce((sum, f) => sum + Number(f.amount), 0);
    const netProfit = totalIncome - totalExpense;

    document.getElementById("adm_statActiveBookings").innerText = `${activeCount} Unit`;
    document.getElementById("adm_statDoneBookings").innerText = `${doneCount} Unit`;
    document.getElementById("adm_statTotalUsers").innerText = `${memberCount} Member`;
    document.getElementById("adm_statNetProfit").innerText = formatRp(netProfit);

    if (activeAdminTab === "bookings") renderAdminBookings(db);
    if (activeAdminTab === "catalog") renderAdminCatalog(db);
    if (activeAdminTab === "users") renderAdminUsers(db);
    if (activeAdminTab === "finances") renderAdminFinances(db, totalIncome, totalExpense, netProfit);

    lucide.createIcons();
}

// ------------------------------------------
// TAB 1: KELOLA PESANAN & STATUS SERVIS
// ------------------------------------------
function setAdminBookingFilter(filter) {
    adminBookingFilter = filter;
    ["all", "pending", "proses", "done"].forEach(f => {
        const btn = document.getElementById(`admFilter_${f}`);
        if (f === filter) {
            btn.className = "px-3 py-1.5 rounded bg-textPrimary text-bgDark font-semibold";
        } else {
            btn.className = "px-3 py-1.5 rounded bg-cardDark border border-borderWhite text-textSecondary hover:text-textPrimary";
        }
    });
    renderAdminDashboard();
}

function renderAdminBookings(db) {
    const container = document.getElementById("adm_bookingsContainer");
    const filtered = db.bookings.filter(b => adminBookingFilter === "all" || b.status === adminBookingFilter);

    if (filtered.length === 0) {
        container.innerHTML = `<div class="bg-cardDark border border-borderWhite rounded-xl p-8 text-center text-sm text-textSecondary">Tidak ada pesanan dengan status ini.</div>`;
        return;
    }

    container.innerHTML = filtered.map(b => {
        const addonsText = (b.addons && b.addons.length > 0)
            ? b.addons.map(a => `+ ${escapeHTML(a.name)} ${a.extraValue ? `(${escapeHTML(a.extraValue)})` : ''}`).join(", ")
            : "Tidak ada Add-On";

        const dateStr = new Date(b.created_at).toLocaleDateString("id-ID", {
            day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit"
        });

        return `
            <div class="bg-cardDark border border-borderWhite rounded-xl p-5 space-y-4">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-3 border-b border-borderWhite">
                    <div>
                        <div class="flex items-center gap-2">
                            <span class="font-bold text-base text-accentRed">${escapeHTML(b.booking_code)}</span>
                            <span class="text-xs text-textSecondary">• ${dateStr}</span>
                            ${b.user_id ? `<span class="text-[10px] bg-gold/15 text-gold px-2 py-0.5 rounded font-semibold">Member (+${b.points_earned || 0} Poin)</span>` : `<span class="text-[10px] bg-secondary text-textSecondary px-2 py-0.5 rounded">Tamu Non-Login</span>`}
                        </div>
                        <div class="text-sm font-bold mt-1">${escapeHTML(b.customer_name)} (${escapeHTML(b.whatsapp)}) — <span class="text-emerald-400">${escapeHTML(b.laptop_model)}</span></div>
                    </div>
                    <div class="text-right">
                        <div class="text-xs text-textSecondary">Total Tagihan:</div>
                        <div class="text-lg font-bold text-textPrimary">${formatRp(b.total_price)}</div>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div class="bg-secondary/60 p-3 rounded border border-borderWhite space-y-1">
                        <div><span class="text-textSecondary">Layanan Utama:</span> <b class="text-textPrimary">${escapeHTML(b.service_name)}</b> ${b.dynamic_value ? `(${escapeHTML(b.dynamic_value)})` : ''}</div>
                        <div><span class="text-textSecondary">Add-On:</span> ${addonsText}</div>
                        ${b.voucher_code ? `<div class="text-gold">Voucher: <b>${escapeHTML(b.voucher_code)}</b> (-${formatRp(b.discount_amount)})</div>` : ''}
                        <div class="pt-1 text-gray-400 italic">Keluhan Client: "${escapeHTML(b.customer_notes)}"</div>
                    </div>

                    <!-- Kontrol Update Status & Catatan Teknisi -->
                    <div class="space-y-2.5">
                        <div class="grid grid-cols-2 gap-2">
                            <div>
                                <label class="block text-[11px] text-textSecondary mb-1">Status Pengerjaan</label>
                                <select id="adm_status_${b.booking_code}" class="w-full bg-secondary border border-borderWhite rounded px-2.5 py-1.5 text-xs text-white focus:border-accentRed outline-none">
                                    <option value="pending" ${b.status === 'pending' ? 'selected' : ''}>🟡 PENDING (Antrean)</option>
                                    <option value="proses" ${b.status === 'proses' ? 'selected' : ''}>🔵 PROSES (Dikerjakan)</option>
                                    <option value="done" ${b.status === 'done' ? 'selected' : ''}>🟢 DONE (Selesai)</option>
                                    <option value="cancelled" ${b.status === 'cancelled' ? 'selected' : ''}>🔴 BATAL</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-[11px] text-textSecondary mb-1">Status Pembayaran</label>
                                <select id="adm_pay_${b.booking_code}" class="w-full bg-secondary border border-borderWhite rounded px-2.5 py-1.5 text-xs text-white focus:border-accentRed outline-none">
                                    <option value="unpaid" ${b.payment_status === 'unpaid' ? 'selected' : ''}>BELUM BAYAR</option>
                                    <option value="paid" ${b.payment_status === 'paid' ? 'selected' : ''}>💵 LUNAS (Paid)</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label class="block text-[11px] text-textSecondary mb-1">Catatan Teknisi (Tampil di Live Tracker Client)</label>
                            <input type="text" id="adm_notes_${b.booking_code}" value="${escapeHTML(b.admin_notes || '')}" placeholder="Tulis progres pengerjaan..." class="w-full bg-secondary border border-borderWhite rounded px-2.5 py-1.5 text-xs text-white focus:border-accentRed outline-none">
                        </div>
                    </div>
                </div>

                <div class="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-borderWhite/50">
                    <button onclick="notifyCustomerWA('${b.booking_code}')" class="text-xs bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-bgDark px-3 py-1.5 rounded font-semibold flex items-center gap-1.5 transition-colors">
                        <i data-lucide="send" class="w-3.5 h-3.5"></i> Kirim Update ke WA Client
                    </button>
                    <div class="flex gap-2">
                        <button onclick="deleteBookingRecord('${b.booking_code}')" class="text-xs bg-secondary border border-borderWhite hover:border-red-500 text-textSecondary hover:text-red-400 px-3 py-1.5 rounded transition-colors">
                            Hapus
                        </button>
                        <button onclick="saveAdminBookingUpdate('${b.booking_code}')" class="text-xs bg-accentRed hover:bg-darkRed text-white px-4 py-1.5 rounded font-semibold transition-colors">
                            Simpan Perubahan Status
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

function saveAdminBookingUpdate(bookingCode) {
    const db = OverheatingDB.getDB();
    const idx = db.bookings.findIndex(b => b.booking_code === bookingCode);
    if (idx === -1) return;

    const booking = db.bookings[idx];
    const prevPayStatus = booking.payment_status;

    const newStatus = document.getElementById(`adm_status_${bookingCode}`).value;
    const newPayStatus = document.getElementById(`adm_pay_${bookingCode}`).value;
    const newNotes = document.getElementById(`adm_notes_${bookingCode}`).value.trim();

    booking.status = newStatus;
    booking.payment_status = newPayStatus;
    booking.admin_notes = newNotes || "Status diperbarui oleh Admin.";

    let extraMsg = "";

    // OTOMATISASI: Jika berubah dari UNPAID menjadi PAID (Lunas)
    if (prevPayStatus !== "paid" && newPayStatus === "paid") {
        // 1. Catat ke Tabel F (finances) jika belum tercatat sebelumnya
        const alreadyInFinance = db.finances.some(f => f.booking_code === bookingCode);
        if (!alreadyInFinance) {
            db.finances.unshift({
                id: "fin_" + Date.now(),
                type: "income",
                amount: Number(booking.total_price),
                description: `Pelunasan ${booking.service_name} (${booking.laptop_model} - ${booking.customer_name})`,
                booking_code: bookingCode,
                transaction_date: new Date().toISOString()
            });
            extraMsg += " Kas Pemasukan bertambah.";
        }

        // 2. Tambahkan Poin ke Member di Tabel A (users) jika pesanan milik member
        if (booking.user_id && !booking.points_awarded) {
            const uIdx = db.users.findIndex(u => u.id === booking.user_id);
            if (uIdx !== -1) {
                const earned = Number(booking.points_earned) || Math.floor(booking.total_price / 1000);
                db.users[uIdx].points += earned;
                booking.points_awarded = true;
                extraMsg += ` Member mendapat +${earned} Poin!`;
            }
        }
    }

    OverheatingDB.saveDB(db);
    renderAdminDashboard();
    showToast("Status Diperbarui!", `Booking ${bookingCode} disimpan.${extraMsg}`);
}

function notifyCustomerWA(bookingCode) {
    const db = OverheatingDB.getDB();
    const b = db.bookings.find(x => x.booking_code === bookingCode);
    if (!b) return;

    let cleanWa = b.whatsapp.replace(/[^0-9]/g, "");
    if (cleanWa.startsWith("0")) cleanWa = "62" + cleanWa.slice(1);

    const statusText = {
        pending: "PENDING (Menunggu Antrean)",
        proses: "SEDANG DIPROSES TEKNISI",
        done: "SELESAI (SIAP DIAMBIL)",
        cancelled: "DIBATALKAN"
    }[b.status] || b.status.toUpperCase();

    const msg = `Halo Kak *${b.customer_name}*, berikut update terbaru untuk servis laptop *${b.laptop_model}* di *Overheating Club.id*:

No. Booking: *${b.booking_code}*
Status Saat Ini: *${statusText}*
Status Pembayaran: *${b.payment_status === 'paid' ? 'LUNAS' : 'BELUM BAYAR'}* (${formatRp(b.total_price)})

*Laporan Teknisi:*
"${b.admin_notes}"

Kamu juga bisa memantau status ini langsung dan mengecek Poin Member kamu di website kami. Terima kasih!`;

    window.open(`https://wa.me/${cleanWa}?text=${encodeURIComponent(msg)}`, "_blank");
}

function deleteBookingRecord(bookingCode) {
    if (!confirm(`Hapus pesanan ${bookingCode} dari database?`)) return;
    const db = OverheatingDB.getDB();
    db.bookings = db.bookings.filter(b => b.booking_code !== bookingCode);
    OverheatingDB.saveDB(db);
    renderAdminDashboard();
    showToast("Pesanan Dihapus", `Tiket ${bookingCode} telah dihapus.`);
}

// ------------------------------------------
// TAB 2: KELOLA MENU KATALOG (TABEL B: services)
// ------------------------------------------
function renderAdminCatalog(db) {
    const container = document.getElementById("adm_catalogList");
    container.innerHTML = db.services.map(s => `
        <div class="bg-cardDark border ${s.isActive === false ? 'border-borderWhite opacity-50' : 'border-borderWhite'} rounded-xl p-4 flex flex-col justify-between">
            <div>
                <div class="flex justify-between items-start gap-2 mb-1">
                    <span class="text-[10px] uppercase tracking-widest text-accentRed font-semibold">${escapeHTML(s.categoryName)}</span>
                    <span class="text-[10px] px-2 py-0.5 rounded ${s.isActive === false ? 'bg-red-500/20 text-red-400' : 'bg-emerald-500/20 text-emerald-400'}">
                        ${s.isActive === false ? 'Nonaktif' : 'Aktif'}
                    </span>
                </div>
                <h4 class="font-bold text-base">${escapeHTML(s.name)}</h4>
                <div class="text-sm font-bold text-textPrimary mt-0.5 mb-2">${getDisplayPrice(s)} <span class="text-xs text-gold font-normal">(+${s.pointsReward || Math.floor(s.price/1000)} Poin)</span></div>
                <p class="text-xs text-textSecondary mb-3">${escapeHTML(s.desc)}</p>
            </div>
            <div class="flex gap-2 pt-3 border-t border-borderWhite/60">
                <button onclick="toggleServiceActive('${s.id}')" class="flex-1 bg-secondary border border-borderWhite hover:border-textPrimary py-1.5 rounded text-xs font-medium transition-colors">
                    ${s.isActive === false ? 'Tampilkan' : 'Sembunyikan'}
                </button>
                <button onclick="deleteServiceItem('${s.id}')" class="px-3 py-1.5 bg-secondary border border-borderWhite hover:border-red-500 text-textSecondary hover:text-red-400 rounded text-xs transition-colors">
                    Hapus
                </button>
            </div>
        </div>
    `).join("");
}

function handleAdminAddService(e) {
    e.preventDefault();
    const name = document.getElementById("as_name").value.trim();
    const catId = document.getElementById("as_category").value;
    const price = parseInt(document.getElementById("as_price").value, 10) || 0;
    const pointsInput = document.getElementById("as_points").value;
    const badge = document.getElementById("as_badge").value.trim() || null;
    const desc = document.getElementById("as_desc").value.trim();
    const detailsRaw = document.getElementById("as_details").value;

    const catNames = { paket: "Paket Hemat", hardware: "Hardware", software: "Software", addon: "Add-On" };
    const detailsArr = detailsRaw.split(",").map(d => d.trim()).filter(Boolean);

    const newService = {
        id: "s_" + Date.now(),
        categoryId: catId,
        categoryName: catNames[catId] || "Layanan",
        name: name,
        price: price,
        oldPrice: null,
        pointsReward: pointsInput ? parseInt(pointsInput, 10) : Math.floor(price / 1000),
        isActive: true,
        desc: desc,
        badge: badge,
        icon: "wrench",
        details: detailsArr.length > 0 ? detailsArr : ["Pengerjaan rapi & bergaransi"]
    };

    const db = OverheatingDB.getDB();
    db.services.push(newService);
    OverheatingDB.saveDB(db);

    document.getElementById("admAddServiceForm").reset();
    renderAdminDashboard();
    showToast("Layanan Ditambahkan!", `Menu "${name}" kini tampil di katalog.`);
}

function toggleServiceActive(serviceId) {
    const db = OverheatingDB.getDB();
    const s = db.services.find(x => x.id === serviceId);
    if (!s) return;
    s.isActive = s.isActive === false ? true : false;
    OverheatingDB.saveDB(db);
    renderAdminDashboard();
}

function deleteServiceItem(serviceId) {
    if (!confirm("Hapus menu layanan ini secara permanen?")) return;
    const db = OverheatingDB.getDB();
    db.services = db.services.filter(x => x.id !== serviceId);
    OverheatingDB.saveDB(db);
    renderAdminDashboard();
    showToast("Menu Dihapus", "Layanan telah dihapus dari katalog.");
}

// ------------------------------------------
// TAB 3: DATA MEMBER, POIN & KLAIM VOUCHER
// ------------------------------------------
function renderAdminUsers(db) {
    const tbody = document.getElementById("adm_usersTableBody");
    const clients = db.users.filter(u => u.role === "client");

    tbody.innerHTML = clients.map(u => {
        const orderCount = db.bookings.filter(b => b.user_id === u.id || b.whatsapp === u.whatsapp).length;
        return `
            <tr class="hover:bg-secondary/40">
                <td class="py-3 px-4">
                    <div class="font-bold text-textPrimary">${escapeHTML(u.full_name)}</div>
                    <div class="text-xs text-textSecondary">@${escapeHTML(u.username)}</div>
                </td>
                <td class="py-3 px-4 text-xs">${escapeHTML(u.whatsapp)}</td>
                <td class="py-3 px-4 text-xs">${orderCount}x Transaksi</td>
                <td class="py-3 px-4">
                    <span class="font-bold text-gold">${u.points} Poin</span>
                </td>
                <td class="py-3 px-4 text-right">
                    <div class="inline-flex items-center gap-1.5">
                        <input type="number" id="adm_pt_${u.id}" placeholder="+/- poin" class="w-24 bg-secondary border border-borderWhite rounded px-2 py-1 text-xs text-white outline-none focus:border-gold">
                        <button onclick="adjustUserPoints('${u.id}')" class="bg-gold text-bgDark hover:bg-yellow-500 px-2.5 py-1 rounded text-xs font-semibold transition-colors">
                            Update
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join("");

    // Render Klaim Voucher / Hadiah
    const redContainer = document.getElementById("adm_redemptionsList");
    if (db.user_redemptions.length === 0) {
        redContainer.innerHTML = `<div class="col-span-full text-xs text-textSecondary">Belum ada riwayat klaim voucher dari member.</div>`;
        return;
    }

    redContainer.innerHTML = db.user_redemptions.map(r => {
        const owner = db.users.find(u => u.id === r.user_id);
        return `
            <div class="bg-cardDark border border-borderWhite rounded-lg p-4 flex flex-col justify-between gap-3">
                <div>
                    <div class="flex justify-between items-center text-[10px] mb-1">
                        <span class="font-mono text-gold font-bold">${escapeHTML(r.unique_code)}</span>
                        <span class="px-2 py-0.5 rounded font-semibold ${r.is_used ? 'bg-secondary text-textSecondary' : 'bg-emerald-500/20 text-emerald-400'}">
                            ${r.is_used ? 'Sudah Terpakai/Diambil' : 'Belum Dipakai'}
                        </span>
                    </div>
                    <div class="font-bold text-sm">${escapeHTML(r.reward_title)}</div>
                    <div class="text-xs text-textSecondary mt-1">Milik: <b>${escapeHTML(owner ? owner.full_name : 'Member')}</b></div>
                </div>
                <button onclick="toggleRedemptionUsed('${r.id}')" class="w-full bg-secondary border border-borderWhite hover:border-gold py-1.5 rounded text-xs font-medium transition-colors">
                    Tandai ${r.is_used ? 'Belum Dipakai' : 'Sudah Dipakai / Diambil'}
                </button>
            </div>
        `;
    }).join("");
}

function adjustUserPoints(userId) {
    const inputEl = document.getElementById(`adm_pt_${userId}`);
    const delta = parseInt(inputEl.value, 10);
    if (isNaN(delta) || delta === 0) {
        showToast("Input Kosong", "Masukkan angka poin (contoh: 50 atau -20).");
        return;
    }

    const db = OverheatingDB.getDB();
    const user = db.users.find(u => u.id === userId);
    if (!user) return;

    user.points = Math.max(0, user.points + delta);
    OverheatingDB.saveDB(db);
    renderAdminDashboard();
    showToast("Poin Diperbarui!", `Saldo poin ${user.full_name} sekarang: ${user.points} Poin.`);
}

function toggleRedemptionUsed(redId) {
    const db = OverheatingDB.getDB();
    const r = db.user_redemptions.find(x => x.id === redId);
    if (!r) return;
    r.is_used = !r.is_used;
    OverheatingDB.saveDB(db);
    renderAdminDashboard();
}

// ------------------------------------------
// TAB 4: LAPORAN KEUANGAN (TABEL F: finances)
// ------------------------------------------
function renderAdminFinances(db, totalIncome, totalExpense, netProfit) {
    document.getElementById("adm_finIncome").innerText = formatRp(totalIncome);
    document.getElementById("adm_finExpense").innerText = formatRp(totalExpense);
    document.getElementById("adm_finBalance").innerText = formatRp(netProfit);

    const tbody = document.getElementById("adm_financesTableBody");
    if (db.finances.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="py-6 text-center text-xs text-textSecondary">Belum ada catatan keuangan.</td></tr>`;
        return;
    }

    tbody.innerHTML = db.finances.map(f => {
        const dateStr = new Date(f.transaction_date).toLocaleDateString("id-ID", {
            day: "numeric", month: "short", year: "numeric"
        });
        const isInc = f.type === "income";
        return `
            <tr class="hover:bg-secondary/40">
                <td class="py-3 px-4 text-xs text-textSecondary whitespace-nowrap">${dateStr}</td>
                <td class="py-3 px-4 text-xs">
                    <div class="font-medium text-textPrimary">${escapeHTML(f.description)}</div>
                    ${f.booking_code ? `<span class="text-[10px] text-accentRed">Ref: ${escapeHTML(f.booking_code)}</span>` : ''}
                </td>
                <td class="py-3 px-4">
                    <span class="text-[10px] font-bold uppercase px-2 py-0.5 rounded ${isInc ? 'bg-emerald-500/15 text-emerald-400' : 'bg-red-500/15 text-red-400'}">
                        ${isInc ? 'Pemasukan' : 'Pengeluaran'}
                    </span>
                </td>
                <td class="py-3 px-4 text-right font-bold text-xs ${isInc ? 'text-emerald-400' : 'text-red-400'}">
                    ${isInc ? '+' : '-'}${formatRp(f.amount)}
                </td>
                <td class="py-3 px-4 text-right">
                    <button onclick="deleteFinanceRecord('${f.id}')" class="text-xs text-textSecondary hover:text-red-400">Hapus</button>
                </td>
            </tr>
        `;
    }).join("");
}

function handleAdminAddFinance(e) {
    e.preventDefault();
    const type = document.getElementById("af_type").value;
    const amount = parseInt(document.getElementById("af_amount").value, 10) || 0;
    const desc = document.getElementById("af_desc").value.trim();

    if (amount <= 0 || !desc) return;

    const db = OverheatingDB.getDB();
    db.finances.unshift({
        id: "fin_" + Date.now(),
        type: type,
        amount: amount,
        description: desc,
        booking_code: null,
        transaction_date: new Date().toISOString()
    });

    OverheatingDB.saveDB(db);
    document.getElementById("admFinanceForm").reset();
    renderAdminDashboard();
    showToast("Catatan Kas Disimpan!", `${type === 'income' ? 'Pemasukan' : 'Pengeluaran'} sebesar ${formatRp(amount)} tercatat.`);
}

function deleteFinanceRecord(finId) {
    const db = OverheatingDB.getDB();
    db.finances = db.finances.filter(f => f.id !== finId);
    OverheatingDB.saveDB(db);
    renderAdminDashboard();
}

function resetDatabaseToDefault() {
    if (!confirm("Reset seluruh database simulasi ke kondisi awal?")) return;
    localStorage.removeItem(DB_STORAGE_KEY);
    OverheatingDB.init();
    renderAdminDashboard();
    renderServices();
    showToast("Database Direset", "Seluruh data kembali ke pengaturan awal.");
}