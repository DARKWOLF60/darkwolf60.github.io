// ==========================================
// ARTCAPELLIOK - JAVASCRIPT COMPLETO
// Gestisce: Traduzioni, Dark Mode, Menu Mobile
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
        'service1-desc': 'Personalized cut with style consultation',
        'service1-price': 'from €35',
        'service2-name': 'Coloring',
        'service2-desc': 'Professional coloring with premium products',
        'service2-price': 'from €60',
        'service3-name': 'Treatments',
        'service3-desc': 'Reconstructive and hydrating treatments',
        'service3-price': 'from €40',
        'service4-name': 'Keratin Treatment',
        'service4-desc': 'Keratin hair straightening',
        'service4-price': 'from €150',
        'whatsapp-title': 'Book Your Appointment',
        'whatsapp-text': 'Contact us on WhatsApp to book or for information',
        'whatsapp-button': 'Contact Us on WhatsApp',
        'about-title': 'About Us',
        'about-subtitle': 'Born from the love of beauty and the desire to care for you',
        'about-heading': 'The Philosophy of ArtCapelliOK',
        'about-text1': '"I think of you". "I want to care for you". "I care to know that you feel good — inside and out". This is how the idea was born, indeed, the need, to create ArtCapelliOK — a line of BIO products for hair and scalp.',
        'about-text2': 'Born from love, experience and the desire to give you something that truly delivers visible results, that cares for your beauty with full respect and enveloping delicacy. You are a successful woman — you have the right to have the best. Do you want to catch the admiration of your friends? This product line is for you.',
        'about-text3': 'I am Olga Kalinina, founder of Art Studio Capelli OK, colorist, blonde specialist and technical expert of the Screen brand. For over twenty years I have worked in the world of beauty. I created ArtCapelliOK — my trusted ally in the beauty, health and well-being of your hair.',
        'feature1': 'Natural and healthy',
        'feature2': 'Hypoallergenic ingredients',
        'feature3': 'Professional quality',
        'feature4': 'Personalization',
        'about-signature': 'YOU ARE UNIQUE. And your beauty rituals must be just as special — special, like you.',
        'copyright': '© 2025 ArtCapelliOK by Olga Kalinina. All rights reserved.',
        'catalog-title': 'Download Complete Catalog',
        'catalog-desc': 'Discover all our professional ArtCapelliOK products in the 2025/2026 catalog',
        'catalog-button': 'Download PDF Catalog'
    }
};

// INIZIALIZZAZIONE
document.addEventListener('DOMContentLoaded', function() {
    console.log('✨ ArtCapelliOK Website Loaded');
    initTheme();
    initLanguage();
    setupEventListeners();
    updateActiveNavLink();
});

// THEME MANAGEMENT
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    console.log(`🌙 Theme changed to: ${newTheme}`);
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// LANGUAGE MANAGEMENT
function initLanguage() {
    const savedLanguage = localStorage.getItem('language') || 'it';
    setLanguage(savedLanguage);
}

function setLanguage(lang) {
    if (!translations[lang]) {
        console.warn(`⚠️ Language ${lang} not found. Using Italian instead.`);
        lang = 'it';
    }
    
    localStorage.setItem('language', lang);
    
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[lang][key] || key;
    });
    
    const langDisplay = document.getElementById('currentLang');
    if (langDisplay) {
        langDisplay.textContent = lang.toUpperCase();
    }
    
    closeLangDropdown();
    console.log(`🌍 Language changed to: ${lang}`);
}

// LANGUAGE DROPDOWN
function toggleLangDropdown() {
    const dropdown = document.getElementById('langDropdown');
    dropdown.classList.toggle('active');
}

function closeLangDropdown() {
    const dropdown = document.getElementById('langDropdown');
    dropdown.classList.remove('active');
}

document.addEventListener('click', function(event) {
    const langSelector = document.querySelector('.language-selector');
    if (!langSelector.contains(event.target)) {
        closeLangDropdown();
    }
});

// EVENT LISTENERS
function setupEventListeners() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    const langButton = document.getElementById('langButton');
    if (langButton) {
        langButton.addEventListener('click', toggleLangDropdown);
    }

    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        });
    });

    document.querySelectorAll('.product-button').forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.closest('.product-card').querySelector('.product-name').textContent;
            alert(`🛒 ${productName} aggiunto al carrello!`);
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                // Lo scroll smooth è gestito dal CSS
            }
        });
    });
}

// ACTIVE NAV LINK
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (window.pageYOffset >= top - 200 && window.pageYOffset < top + height - 200) {
            navLinks.forEach(link => link.classList.remove('active'));

            const activeLink = document.querySelector(`a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

console.log('%c🎨 ArtCapelliOK Website', 'color: #d4926d; font-size: 20px; font-weight: bold;');
console.log('%cVersion: 3.0 - DELUXE Edition', 'color: #c17d5b; font-size: 12px;');
console.log('%cDeveloped with ❤️ for beautiful hair', 'color: #e8b4a0; font-size: 12px;');

// UTILITY FUNCTIONS
function logBrowserSupport() {
    if (typeof(Storage) !== "undefined") {
        console.log('✅ localStorage supportato');
    } else {
        console.warn('⚠️ localStorage non supportato');
    }
}

function animateCountUp(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);

    const updateCount = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCount);
        } else {
            element.textContent = target;
        }
    };

    updateCount();
}

// MOBILE TOGGLE BUTTON
const mobileToggle = document.getElementById('mobileToggle');
if (mobileToggle) {
    // Show on mobile is handled by CSS media queries in style.css
    // This is just for reference
    console.log('✅ Mobile toggle button initialized');
}

// SMOOTH SCROLL ENHANCEMENT
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

// INTERSECTION OBSERVER FOR ANIMATIONS
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
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
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// KEYBOARD NAVIGATION
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLangDropdown();
        const navMenu = document.getElementById('navMenu');
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    }
});

// PERFORMANCE OPTIMIZATION
if ('loading' in HTMLImageElement.prototype) {
    // Browser supports lazy loading
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
    });
} else {
    // Fallback for older browsers
    const images = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('loading');
                imageObserver.unobserve(img);
            }
        });
    });
    images.forEach(img => imageObserver.observe(img));
}

// ANALYTICS PLACEHOLDER
function trackEvent(eventName, eventData) {
    if (window.gtag) {
        gtag('event', eventName, eventData);
    }
    console.log(`📊 Event tracked: ${eventName}`, eventData);
}

// TRACK BUTTON CLICKS
document.querySelectorAll('.cta-button, .product-button, .whatsapp-button, .catalog-button').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent.trim();
        trackEvent('button_click', {
            button_name: buttonText,
            timestamp: new Date().toISOString()
        });
    });
});

// TRACK LANGUAGE CHANGES
document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        trackEvent('language_change', {
            language: lang,
            timestamp: new Date().toISOString()
        });
    });
});

// TRACK THEME CHANGES
const originalToggleTheme = toggleTheme;
toggleTheme = function() {
    originalToggleTheme();
    const newTheme = document.documentElement.getAttribute('data-theme');
    trackEvent('theme_change', {
        theme: newTheme,
        timestamp: new Date().toISOString()
    });
};

// FORM VALIDATION HELPER
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
    return phoneRegex.test(phone);
}

// SCROLL TO TOP BUTTON (Hidden but functional)
const scrollTopButton = document.createElement('button');
scrollTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopButton.className = 'scroll-to-top';
scrollTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #d4926d, #c17d5b);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    z-index: 999;
    box-shadow: 0 5px 20px rgba(212, 146, 109, 0.3);
    transition: all 0.3s ease;
`;

document.body.appendChild(scrollTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopButton.style.display = 'flex';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopButton.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
});

scrollTopButton.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});

// NETWORK STATUS CHECK
function checkNetworkStatus() {
    if (!navigator.onLine) {
        console.warn('⚠️ No internet connection detected');
        return false;
    }
    return true;
}

window.addEventListener('online', () => {
    console.log('✅ Connection restored');
    trackEvent('connection_restored', {
        timestamp: new Date().toISOString()
    });
});

window.addEventListener('offline', () => {
    console.warn('⚠️ Connection lost');
    trackEvent('connection_lost', {
        timestamp: new Date().toISOString()
    });
});

// DEVICE DETECTION
function getDeviceType() {
    const ua = navigator.userAgent;
    if (/mobile/i.test(ua)) return 'mobile';
    if (/tablet/i.test(ua)) return 'tablet';
    return 'desktop';
}

console.log(`📱 Device Type: ${getDeviceType()}`);

// BROWSER DETECTION
function getBrowserInfo() {
    const ua = navigator.userAgent;
    let browser = 'Unknown';
    
    if (ua.indexOf('Firefox') > -1) browser = 'Firefox';
    else if (ua.indexOf('Chrome') > -1) browser = 'Chrome';
    else if (ua.indexOf('Safari') > -1) browser = 'Safari';
    else if (ua.indexOf('Edge') > -1) browser = 'Edge';
    
    return browser;
}

console.log(`🌐 Browser: ${getBrowserInfo()}`);

// PRELOAD NEXT SECTION IMAGES
function preloadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    const imageArray = Array.from(images);
    
    imageArray.forEach((img, index) => {
        setTimeout(() => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = img.src;
            document.head.appendChild(link);
        }, index * 100);
    });
}

// CALL PRELOAD AFTER DELAY
setTimeout(preloadImages, 3000);

// COOKIE CONSENT (Simple implementation)
function initCookieConsent() {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
        console.log('🍪 Cookie consent not set. Please implement cookie consent banner.');
    }
}

initCookieConsent();

// ACCESSIBILITY - FOCUS MANAGEMENT
let focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
let focusableContent = document.querySelectorAll(focusableElements);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        if (e.shiftKey) {
            if (document.activeElement === focusableContent[0]) {
                focusableContent[focusableContent.length - 1].focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === focusableContent[focusableContent.length - 1]) {
                focusableContent[0].focus();
                e.preventDefault();
            }
        }
    }
});

// DARK MODE PREFERENCE
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
darkModeMediaQuery.addListener((e) => {
    if (e.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});

// PRINT STYLES SETUP
window.addEventListener('beforeprint', function() {
    console.log('🖨️ Preparing for print...');
    document.documentElement.setAttribute('data-print', 'true');
});

window.addEventListener('afterprint', function() {
    console.log('✅ Print finished');
    document.documentElement.removeAttribute('data-print');
});

// PERFORMANCE MONITORING
if (window.performance && window.performance.timing) {
    window.addEventListener('load', function() {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ Page load time: ${pageLoadTime}ms`);
        
        trackEvent('page_load', {
            load_time: pageLoadTime,
            timestamp: new Date().toISOString()
        });
    });
}

// MUTATION OBSERVER FOR DYNAMIC CONTENT
const mutationConfig = { attributes: true, childList: true, subtree: true };
const mutationObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.type === 'childList') {
            // Reinitialize event listeners for new elements if needed
            console.log('🔄 DOM changed, reinitializing...');
        }
    });
});

// Optional: Observe specific elements for changes
// mutationObserver.observe(document.body, mutationConfig);

// FINAL INITIALIZATION LOG
console.log('%c✅ All systems ready!', 'color: #d4926d; font-size: 14px; font-weight: bold;');
console.log('%cArtCapelliOK v3.0 - Deluxe Edition', 'color: #c17d5b; font-size: 12px;');
console.log('%cFor support visit: https://www.instagram.com/artcapelli.ok', 'color: #e8b4a0; font-size: 11px;');