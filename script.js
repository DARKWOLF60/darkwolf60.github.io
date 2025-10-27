// ==========================================
// ARTCAPELLIOK WEBSITE JAVASCRIPT
// Handles all interactive functionality
// ==========================================

// ==========================================
// MULTI-LANGUAGE TRANSLATIONS
// Contains all text translations for IT, RU, and EN
// ==========================================
const translations = {
    // ITALIANO
    it: {
        'nav-home': 'Home',
        'nav-products': 'Prodotti',
        'nav-services': 'Servizi',
        'nav-about': 'Chi Siamo',
        'hero-title': 'ArtCapelliOK',
        'hero-subtitle': 'Biocosmetica professionale per capelli e cuoio capelluto',
        'hero-cta': 'Prenota Ora',
        'products-title': 'I Nostri Prodotti',
        'products-subtitle': 'Prodotti BIO professionali per la salute dei tuoi capelli',
        'telegram-title': 'Unisciti al nostro canale Telegram!',
        'telegram-desc': 'Offerte esclusive, nuovi prodotti e consigli per la cura dei capelli',
        'telegram-join': 'Unisciti Ora',
        'product1-name': 'Spray Volumizzante',
        'product1-desc': 'Formula professionale per volume naturale',
        'product2-name': 'Shampoo Riparatore',
        'product2-desc': 'Nutre e ripara i capelli danneggiati',
        'product3-name': 'Siero Termoprotettivo',
        'product3-desc': 'Protegge dal calore fino a 230°C',
        'product4-name': 'Maschera Idratante',
        'product4-desc': 'Trattamento intensivo per capelli setosi',
        'product-buy': 'Acquista',
        'services-title': 'I Nostri Servizi',
        'services-subtitle': 'Servizi professionali per la bellezza dei tuoi capelli',
        'service1-name': 'Taglio Donna',
        'service1-desc': 'Taglio personalizzato con consulenza stilistica',
        'service1-price': 'da €35',
        'service2-name': 'Colorazione',
        'service2-desc': 'Colore professionale con prodotti premium',
        'service2-price': 'da €60',
        'service3-name': 'Trattamenti',
        'service3-desc': 'Trattamenti ricostruttivi e idratanti',
        'service3-price': 'da €40',
        'service4-name': 'Trattamento Cheratina',
        'service4-desc': 'Lisciatura alla cheratina',
        'service4-price': 'da €150',
        'whatsapp-title': 'Prenota il Tuo Appuntamento',
        'whatsapp-text': 'Contattaci su WhatsApp per prenotare o per informazioni',
        'whatsapp-button': 'Contattaci su WhatsApp',
        'about-title': 'Chi Siamo',
        'about-subtitle': 'Nata dall\'amore per la bellezza e il desiderio di prendersi cura di te',
        'about-heading': 'La Filosofia di ArtCapelliOK',
        'about-text1': '"Io ti penso". "Voglio prendermi cura di te". "Ci tengo di sapere che ti senti bene — fuori e dentro". Così è nata questa idea, anzi, la necessità, creare ArtCapelliOK — una linea di prodotti BIO per i capelli e il cuoio capelluto.',
        'about-text2': 'Nata dall\'amore, l\'esperienza e il desiderio di offrirti qualcosa che veramente porta dei risultati evidenti, che si prenda cura della tua bellezza con pieno rispetto e delicatezza avvolgente. Sei una donna di successo — hai il diritto di avere il meglio. Vuoi catturare l\'ammirazione (e un po\' di invidia) delle tue amiche? Questa linea dei prodotti fa per te.',
        'about-text3': 'Io sono Olga Kalinina, fondatrice di Art Studio Capelli OK, colorista, specialista del biondo e tecnico del marchio Screen. Da oltre vent\'anni lavoro nel mondo della bellezza, osservando come ogni chioma "respira", reagisce, e racconta la sua storia attraverso il tocco e la cura. Ho creato ArtCapelliOK — il mio alleato di fiducia nella bellezza, nella salute e nel benessere dei capelli.',
        'feature1': 'Naturalezza e salute',
        'feature2': 'Ingredienti ipoallergenici',
        'feature3': 'Qualità professionale',
        'feature4': 'Personalizzazione',
        'about-signature': 'TU SEI UNICA. E i tuoi rituali di bellezza devono esserlo altrettanto: speciali, come te.',
        'copyright': '© 2025 ArtCapelliOK by Olga Kalinina. Tutti i diritti riservati.',
        'catalog-title': 'Scarica il Catalogo Completo',
        'catalog-desc': 'Scopri tutti i nostri prodotti professionali ArtCapelliOK nel catalogo 2025/2026',
        'catalog-button': 'Scarica Catalogo PDF'
    },
    
    // РУССКИЙ
    ru: {
        'nav-home': 'Главная',
        'nav-products': 'Продукты',
        'nav-services': 'Услуги',
        'nav-about': 'О нас',
        'hero-title': 'ArtCapelliOK',
        'hero-subtitle': 'Профессиональная биокосметика для волос и кожи головы',
        'hero-cta': 'Записаться',
        'products-title': 'Наши Продукты',
        'products-subtitle': 'Профессиональные БИО средства для здоровья ваших волос',
        'telegram-title': 'Присоединяйтесь к нашему Telegram-каналу!',
        'telegram-desc': 'Эксклюзивные предложения, новые продукты и советы по уходу за волосами',
        'telegram-join': 'Присоединиться',
        'product1-name': 'Спрей для объема',
        'product1-desc': 'Профессиональная формула для естественного объема',
        'product2-name': 'Восстанавливающий шампунь',
        'product2-desc': 'Питает и восстанавливает поврежденные волосы',
        'product3-name': 'Термозащитная сыворотка',
        'product3-desc': 'Защищает от тепла до 230°C',
        'product4-name': 'Увлажняющая маска',
        'product4-desc': 'Интенсивный уход для шелковистых волос',
        'product-buy': 'Купить',
        'services-title': 'Наши Услуги',
        'services-subtitle': 'Профессиональные услуги для красоты ваших волос',
        'service1-name': 'Женская стрижка',
        'service1-desc': 'Индивидуальная стрижка с консультацией стилиста',
        'service1-price': 'от €35',
        'service2-name': 'Окрашивание',
        'service2-desc': 'Профессиональное окрашивание премиум-продуктами',
        'service2-price': 'от €60',
        'service3-name': 'Процедуры',
        'service3-desc': 'Восстанавливающие и увлажняющие процедуры',
        'service3-price': 'от €40',
        'service4-name': 'Кератиновое выпрямление',
        'service4-desc': 'Выпрямление волос кератином',
        'service4-price': 'от €150',
        'whatsapp-title': 'Запишитесь на прием',
        'whatsapp-text': 'Свяжитесь с нами в WhatsApp для записи или информации',
        'whatsapp-button': 'Написать в WhatsApp',
        'about-title': 'О нас',
        'about-subtitle': 'Рожденная из любви к красоте и желания заботиться о тебе',
        'about-heading': 'Философия ArtCapelliOK',
        'about-text1': '"Я думаю о тебе". "Хочу заботиться о тебе". "Мне важно знать, что у тебя всё хорошо — снаружи и внутри". Так родилась идея, даже, сказала бы, необходимость, создания ArtCapelliOK — бренда биокосметики для волос и кожи головы.',
        'about-text2': 'Он появился из любви, из опыта, из желания дать тебе то, что действительно работает и бережно заботится о твоей красоте. Ты успешна! Ты можешь себе позволить лучшее! Хочешь ловить на себе восхищенные (и слегка завистливые) взгляды подруг? Эта косметика для тебя!',
        'about-text3': 'Я, Ольга Калинина, руководитель Art Studio Capelli OK, колорист, специалист по блонду, технолог бренда Screen. Уже более 20 лет я работаю парикмахером. Я создала ArtCapelliOK — своего надёжного союзника в исцелении твоих волос, элексир здоровья для ухода за волосами.',
        'feature1': 'Натуральность и здоровье',
        'feature2': 'Гипоаллергенные ингредиенты',
        'feature3': 'Профессиональное качество',
        'feature4': 'Индивидуальность',
        'about-signature': 'ТЫ — УНИКАЛЬНА. И ритуалы красоты для тебя должны быть такими же — особенными, как ты сама.',
        'copyright': '© 2025 ArtCapelliOK by Olga Kalinina. Все права защищены.',
        'catalog-title': 'Скачать Полный Каталог',
        'catalog-desc': 'Откройте для себя все наши профессиональные продукты ArtCapelliOK в каталоге 2025/2026',
        'catalog-button': 'Скачать Каталог PDF'
    },
    
    // ENGLISH
    en: {
        'nav-home': 'Home',
        'nav-products': 'Products',
        'nav-services': 'Services',
        'nav-about': 'About Us',
        'hero-title': 'ArtCapelliOK',
        'hero-subtitle': 'Professional BIO cosmetics for hair and scalp',
        'hero-cta': 'Book Now',
        'products-title': 'Our Products',
        'products-subtitle': 'Professional BIO products for the health of your hair',
        'telegram-title': 'Join our Telegram channel!',
        'telegram-desc': 'Exclusive offers, new products and hair care tips',
        'telegram-join': 'Join Now',
        'product1-name': 'Volume Spray',
        'product1-desc': 'Professional formula for natural volume',
        'product2-name': 'Repair Shampoo',
        'product2-desc': 'Nourishes and repairs damaged hair',
        'product3-name': 'Heat Protection Serum',
        'product3-desc': 'Protects from heat up to 230°C',
        'product4-name': 'Hydrating Mask',
        'product4-desc': 'Intensive treatment for silky hair',
        'product-buy': 'Buy',
        'services-title': 'Our Services',
        'services-subtitle': 'Professional services for the beauty of your hair',
        'service1-name': 'Women\'s Haircut',
        'service1-desc': 'Personalized haircut with styling consultation',
        'service1-price': 'from €35',
        'service2-name': 'Coloring',
        'service2-desc': 'Professional coloring with premium products',
        'service2-price': 'from €60',
        'service3-name': 'Treatments',
        'service3-desc': 'Reconstructive and moisturizing treatments',
        'service3-price': 'from €40',
        'service4-name': 'Keratin Treatment',
        'service4-desc': 'Keratin hair straightening',
        'service4-price': 'from €150',
        'whatsapp-title': 'Book Your Appointment',
        'whatsapp-text': 'Contact us on WhatsApp to book or for information',
        'whatsapp-button': 'Contact on WhatsApp',
        'about-title': 'About Us',
        'about-subtitle': 'Born from love for beauty and the desire to take care of you',
        'about-heading': 'The Philosophy of ArtCapelliOK',
        'about-text1': '"I think of you". "I want to take care of you". "I care that you feel good — outside and inside". This is how this idea was born, or rather, the necessity to create ArtCapelliOK — a line of BIO products for hair and scalp.',
        'about-text2': 'Born from love, experience, and the desire to offer you something that truly delivers visible results, that takes care of your beauty with full respect and enveloping delicacy. You are a successful woman — you deserve the best. Do you want to capture the admiration (and a bit of envy) of your friends? This product line is for you.',
        'about-text3': 'I am Olga Kalinina, founder of Art Studio Capelli OK, colorist, blonde specialist, and technician for the Screen brand. For over twenty years I have worked in the world of beauty, observing how each head of hair "breathes", reacts, and tells its story. I created ArtCapelliOK — my trusted ally in beauty, health, and hair wellness.',
        'feature1': 'Naturalness and health',
        'feature2': 'Hypoallergenic ingredients',
        'feature3': 'Professional quality',
        'feature4': 'Personalization',
        'about-signature': 'YOU ARE UNIQUE. And your beauty rituals must be just as special as you are.',
        'copyright': '© 2025 ArtCapelliOK by Olga Kalinina. All rights reserved.',
        'catalog-title': 'Download Complete Catalog',
        'catalog-desc': 'Discover all our professional ArtCapelliOK products in the 2025/2026 catalog',
        'catalog-button': 'Download PDF Catalog'
    }
};

// ==========================================
// LANGUAGE SWITCHING FUNCTIONALITY
// ==========================================
let currentLanguage = 'it'; // Default language is Italian

const langButton = document.getElementById('langButton');
const langDropdown = document.getElementById('langDropdown');
const currentLangDisplay = document.getElementById('currentLang');
const langOptions = document.querySelectorAll('.lang-option');

langButton.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!langButton.contains(e.target) && !langDropdown.contains(e.target)) {
        langDropdown.classList.remove('active');
    }
});

langOptions.forEach(option => {
    option.addEventListener('click', () => {
        const selectedLang = option.getAttribute('data-lang');
        changeLanguage(selectedLang);
        langDropdown.classList.remove('active');
    });
});

function changeLanguage(lang) {
    currentLanguage = lang;
    currentLangDisplay.textContent = lang.toUpperCase();
    
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    localStorage.setItem('preferredLanguage', lang);
}

const savedLanguage = localStorage.getItem('preferredLanguage');
if (savedLanguage) {
    changeLanguage(savedLanguage);
}

// ==========================================
// THEME TOGGLE FUNCTIONALITY
// ==========================================
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    }
});

// ==========================================
// MOBILE MENU FUNCTIONALITY
// ==========================================
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = mobileToggle.querySelector('i');
    
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// ==========================================
// ACTIVE NAVIGATION LINK HIGHLIGHTING
// ==========================================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==========================================
// SMOOTH SCROLL ENHANCEMENT
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card, .service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ==========================================
// CONSOLE MESSAGE
// ==========================================
console.log('%c💚 ArtCapelliOK by Olga Kalinina', 'color: #d4a574; font-size: 20px; font-weight: bold;');
console.log('%cWebsite loaded successfully!', 'color: #666; font-size: 12px;');
console.log('%c@artcapelli.ok', 'color: #d4a574; font-size: 14px; font-weight: bold;');