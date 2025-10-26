// ==========================================
// HAIRDRESSER WEBSITE JAVASCRIPT
// Handles all interactive functionality
// ==========================================

// ==========================================
// MULTI-LANGUAGE TRANSLATIONS
// Contains all text translations for IT, RU, and EN
// 
// 📝 TO ADD MORE LANGUAGES:
// 1. Copy one of the language objects below
// 2. Change the language code (e.g., 'es' for Spanish)
// 3. Translate all the text values
// 4. Add the language option to the HTML dropdown
// ==========================================
const translations = {
    // Italian translations (default language)
    it: {
        'nav-home': 'Home',
        'nav-products': 'Prodotti',
        'nav-services': 'Servizi',
        'nav-about': 'Chi Siamo',
        'hero-title': 'ArtCapelli Studio',
        'hero-subtitle': 'Trasforma il tuo look con i nostri servizi professionali di parrucchiere',
        'hero-cta': 'Prenota Ora',
        'products-title': 'I Nostri Prodotti',
        'products-subtitle': 'Prodotti professionali per capelli selezionati con cura per te',
        'telegram-title': 'Unisciti al nostro canale Telegram!',
        'telegram-desc': 'Offerte esclusive, nuovi prodotti e consigli per la cura dei capelli',
        'telegram-join': 'Unisciti Ora',
        'product1-name': 'Spray Volumizzante Premium',
        'product1-desc': 'Dona volume e corpo ai tuoi capelli con formula leggera professionale',
        'product2-name': 'Shampoo Riparatore',
        'product2-desc': 'Formula nutriente per capelli danneggiati e stressati',
        'product3-name': 'Siero Termoprotettivo',
        'product3-desc': 'Protegge i capelli dal calore di phon e piastra fino a 230°C',
        'product4-name': 'Maschera Idratante',
        'product4-desc': 'Trattamento intensivo per capelli setosi e luminosi',
        'product-buy': 'Acquista',
        'services-title': 'I Nostri Servizi',
        'services-subtitle': 'Servizi professionali per ogni esigenza di bellezza',
        'service1-name': 'Taglio Donna',
        'service1-desc': 'Taglio personalizzato con consulenza stilistica inclusa',
        'service1-price': 'da €35',
        'service2-name': 'Taglio Uomo',
        'service2-desc': 'Taglio classico o moderno, barba e rifinitura',
        'service2-price': 'da €25',
        'service3-name': 'Colore & Meches',
        'service3-desc': 'Colorazione completa o colpi di sole con prodotti premium',
        'service3-price': 'da €60',
        'service4-name': 'Trattamenti',
        'service4-desc': 'Trattamenti ricostruttivi e idratanti per capelli sani',
        'service4-price': 'da €40',
        'service5-name': 'Piega',
        'service5-desc': 'Piega professionale liscia, mossa o con volume',
        'service5-price': 'da €25',
        'service6-name': 'Trattamento Cheratina',
        'service6-desc': 'Lisciatura alla cheratina per capelli lisci e luminosi',
        'service6-price': 'da €150',
        'whatsapp-title': 'Prenota il Tuo Appuntamento',
        'whatsapp-text': 'Contattaci su WhatsApp per prenotare o per qualsiasi informazione',
        'whatsapp-button': 'Contattaci su WhatsApp',
        'about-title': 'Chi Siamo',
        'about-subtitle': 'Passione, esperienza e dedizione per la bellezza dei tuoi capelli',
        'about-heading': 'La Nostra Storia',
        'about-text1': 'ArtCapelli Studio è nato dalla passione per l\'arte della bellezza e il desiderio di offrire un\'esperienza unica ai nostri clienti. Con oltre 15 anni di esperienza nel settore, il nostro team di professionisti qualificati si dedica a creare look personalizzati che esaltano la bellezza naturale di ogni persona.',
        'about-text2': 'Utilizziamo solo prodotti professionali di alta qualità e seguiamo costantemente le ultime tendenze del mondo della moda e della bellezza. Il nostro salone è un\'oasi di relax dove cura, attenzione ai dettagli e professionalità si incontrano per garantire risultati eccellenti.',
        'feature1': 'Oltre 15 anni di esperienza',
        'feature2': 'Staff qualificato e certificato',
        'feature3': 'Prodotti premium',
        'feature4': 'Consulenza personalizzata',
        'copyright': '© 2025 ArtCapelli Studio. Tutti i diritti riservati.'
    },
    
    // Russian translations
    ru: {
        'nav-home': 'Главная',
        'nav-products': 'Продукты',
        'nav-services': 'Услуги',
        'nav-about': 'О нас',
        'hero-title': 'ArtCapelli Studio',
        'hero-subtitle': 'Преобразите свой образ с нашими профессиональными парикмахерскими услугами',
        'hero-cta': 'Записаться',
        'products-title': 'Наши Продукты',
        'products-subtitle': 'Профессиональные средства для волос, тщательно подобранные для вас',
        'telegram-title': 'Присоединяйтесь к нашему Telegram-каналу!',
        'telegram-desc': 'Эксклюзивные предложения, новые продукты и советы по уходу за волосами',
        'telegram-join': 'Присоединиться',
        'product1-name': 'Премиум-спрей для объема',
        'product1-desc': 'Придает объем и густоту волосам с профессиональной легкой формулой',
        'product2-name': 'Восстанавливающий шампунь',
        'product2-desc': 'Питательная формула для поврежденных и ослабленных волос',
        'product3-name': 'Термозащитная сыворотка',
        'product3-desc': 'Защищает волосы от тепла фена и утюжка до 230°C',
        'product4-name': 'Увлажняющая маска',
        'product4-desc': 'Интенсивный уход для шелковистых и блестящих волос',
        'product-buy': 'Купить',
        'services-title': 'Наши Услуги',
        'services-subtitle': 'Профессиональные услуги для каждой потребности красоты',
        'service1-name': 'Женская стрижка',
        'service1-desc': 'Индивидуальная стрижка с консультацией стилиста',
        'service1-price': 'от €35',
        'service2-name': 'Мужская стрижка',
        'service2-desc': 'Классическая или современная стрижка, борода и корректировка',
        'service2-price': 'от €25',
        'service3-name': 'Окрашивание и мелирование',
        'service3-desc': 'Полное окрашивание или мелирование премиум-продуктами',
        'service3-price': 'от €60',
        'service4-name': 'Процедуры',
        'service4-desc': 'Восстанавливающие и увлажняющие процедуры для здоровых волос',
        'service4-price': 'от €40',
        'service5-name': 'Укладка',
        'service5-desc': 'Профессиональная укладка прямая, волнистая или с объемом',
        'service5-price': 'от €25',
        'service6-name': 'Кератиновое выпрямление',
        'service6-desc': 'Кератиновое выпрямление для гладких и блестящих волос',
        'service6-price': 'от €150',
        'whatsapp-title': 'Запишитесь на прием',
        'whatsapp-text': 'Свяжитесь с нами в WhatsApp для записи или информации',
        'whatsapp-button': 'Написать в WhatsApp',
        'about-title': 'О нас',
        'about-subtitle': 'Страсть, опыт и преданность красоте ваших волос',
        'about-heading': 'Наша история',
        'about-text1': 'ArtCapelli Studio родился из страсти к искусству красоты и желания предложить уникальный опыт нашим клиентам. Имея более 15 лет опыта в отрасли, наша команда квалифицированных специалистов создает персонализированные образы, подчеркивающие естественную красоту каждого человека.',
        'about-text2': 'Мы используем только профессиональные продукты высшего качества и постоянно следим за последними тенденциями в мире моды и красоты. Наш салон - это оазис релаксации, где забота, внимание к деталям и профессионализм встречаются, чтобы гарантировать превосходные результаты.',
        'feature1': 'Более 15 лет опыта',
        'feature2': 'Квалифицированный персонал',
        'feature3': 'Премиум продукты',
        'feature4': 'Индивидуальная консультация',
        'copyright': '© 2025 ArtCapelli Studio. Все права защищены.'
    },
    
    // English translations
    en: {
        'nav-home': 'Home',
        'nav-products': 'Products',
        'nav-services': 'Services',
        'nav-about': 'About Us',
        'hero-title': 'ArtCapelli Studio',
        'hero-subtitle': 'Transform your look with our professional hairdressing services',
        'hero-cta': 'Book Now',
        'products-title': 'Our Products',
        'products-subtitle': 'Professional hair care products carefully selected for you',
        'telegram-title': 'Join our Telegram channel!',
        'telegram-desc': 'Exclusive offers, new products and hair care tips',
        'telegram-join': 'Join Now',
        'product1-name': 'Papera',
        'product1-desc': 'Nel forno e diventa tasty da mangiare salutare e bla bla bla',
        'product2-name': 'Repair Shampoo',
        'product2-desc': 'Nourishing formula for damaged and stressed hair',
        'product3-name': 'Heat Protection Serum',
        'product3-desc': 'Protects hair from heat of blow dryer and straightener up to 230°C',
        'product4-name': 'Hydrating Mask',
        'product4-desc': 'Intensive treatment for silky and shiny hair',
        'product-buy': 'Buy',
        'services-title': 'Our Services',
        'services-subtitle': 'Professional services for every beauty need',
        'service1-name': 'Women\'s Haircut',
        'service1-desc': 'Personalized haircut with styling consultation included',
        'service1-price': 'from €35',
        'service2-name': 'Men\'s Haircut',
        'service2-desc': 'Classic or modern cut, beard and finishing',
        'service2-price': 'from €25',
        'service3-name': 'Color & Highlights',
        'service3-desc': 'Full coloring or highlights with premium products',
        'service3-price': 'from €60',
        'service4-name': 'Treatments',
        'service4-desc': 'Reconstructive and moisturizing treatments for healthy hair',
        'service4-price': 'from €40',
        'service5-name': 'Blow Dry',
        'service5-desc': 'Professional straight, wavy or volumizing blow dry',
        'service5-price': 'from €25',
        'service6-name': 'Keratin Treatment',
        'service6-desc': 'Keratin straightening for smooth and shiny hair',
        'service6-price': 'from €150',
        'whatsapp-title': 'Book Your Appointment',
        'whatsapp-text': 'Contact us on WhatsApp to book or for any information',
        'whatsapp-button': 'Contact on WhatsApp',
        'about-title': 'About Us',
        'about-subtitle': 'Passion, experience and dedication to the beauty of your hair',
        'about-heading': 'Our Story',
        'about-text1': 'ArtCapelli Studio was born from a passion for the art of beauty and the desire to offer a unique experience to our clients. With over 15 years of experience in the industry, our team of qualified professionals is dedicated to creating personalized looks that enhance the natural beauty of each person.',
        'about-text2': 'We use only high-quality professional products and constantly follow the latest trends in fashion and beauty. Our salon is an oasis of relaxation where care, attention to detail and professionalism meet to guarantee excellent results.',
        'feature1': 'Over 15 years of experience',
        'feature2': 'Qualified and certified staff',
        'feature3': 'Premium products',
        'feature4': 'Personalized consultation',
        'copyright': '© 2025 ArtCapelli Studio. All rights reserved.'
    }
};

// ==========================================
// LANGUAGE SWITCHING FUNCTIONALITY
// Handles language selection and text updates
// ==========================================
let currentLanguage = 'it'; // Default language is Italian

// Get language dropdown elements
const langButton = document.getElementById('langButton');
const langDropdown = document.getElementById('langDropdown');
const currentLangDisplay = document.getElementById('currentLang');
const langOptions = document.querySelectorAll('.lang-option');

// Toggle language dropdown visibility when button is clicked
langButton.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click from bubbling up
    langDropdown.classList.toggle('active');
});

// Close dropdown when clicking anywhere outside of it
document.addEventListener('click', (e) => {
    if (!langButton.contains(e.target) && !langDropdown.contains(e.target)) {
        langDropdown.classList.remove('active');
    }
});

// Handle language option selection
langOptions.forEach(option => {
    option.addEventListener('click', () => {
        const selectedLang = option.getAttribute('data-lang');
        changeLanguage(selectedLang);
        langDropdown.classList.remove('active');
    });
});

// Function to change website language
// This updates all elements with the data-translate attribute
function changeLanguage(lang) {
    currentLanguage = lang;
    currentLangDisplay.textContent = lang.toUpperCase();
    
    // Find all elements with data-translate attribute and update their text
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        // Check if translation exists for this language and key
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Save language preference to browser's localStorage
    // This way the user's choice persists between page visits
    localStorage.setItem('preferredLanguage', lang);
}

// Load saved language preference when page loads
// This ensures the user sees their preferred language on return visits
const savedLanguage = localStorage.getItem('preferredLanguage');
if (savedLanguage) {
    changeLanguage(savedLanguage);
}

// ==========================================
// THEME TOGGLE FUNCTIONALITY
// Handles dark mode and light mode switching
// ==========================================
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

// Load saved theme preference from localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

// Toggle theme when button is clicked
themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        // Switch to light mode
        body.removeAttribute('data-theme');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        // Switch to dark mode
        body.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    }
});

// ==========================================
// MOBILE MENU FUNCTIONALITY
// Handles mobile navigation menu toggle
// ==========================================
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

// Toggle mobile menu when hamburger icon is clicked
mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = mobileToggle.querySelector('i');
    
    // Change icon between hamburger (☰) and close (×)
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when any navigation link is clicked
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
// Updates active link based on scroll position
// ==========================================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    // Determine which section is currently in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // If we've scrolled past the top of this section (with 150px offset)
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    // Update active class on navigation links
    navLinks.forEach(link => {
        link.classList.remove('active');
        // Check if the link's href matches the current section
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==========================================
// SMOOTH SCROLL ENHANCEMENT
// Ensures smooth scrolling works on all browsers
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default jump behavior
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Smoothly scroll to the target section
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// Adds fade-in animations when elements come into view
// ==========================================
const observerOptions = {
    threshold: 0.1, // Trigger when 10% of element is visible
    rootMargin: '0px 0px -50px 0px' // Start animation slightly before element enters view
};

// Create an intersection observer to watch for elements entering viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Element is now visible, fade it in
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe product and service cards for animation
document.querySelectorAll('.product-card, .service-card').forEach(card => {
    // Set initial state (invisible and slightly below)
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    // Start observing this element
    observer.observe(card);
});

// ==========================================
// CONSOLE MESSAGE
// Welcome message in browser console (for developers)
// ==========================================
console.log('%c🎨 ArtCapelli Studio', 'color: #d4a574; font-size: 20px; font-weight: bold;');
console.log('%cWebsite loaded successfully!', 'color: #666; font-size: 12px;');
console.log('%cLanguage: ' + currentLanguage.toUpperCase(), 'color: #666; font-size: 12px;');
console.log('%cTheme: ' + (savedTheme || 'light'), 'color: #666; font-size: 12px;');
