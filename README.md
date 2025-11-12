# 🎨 ArtCapelliOK Website v2.0 - Guida Completa

## 📋 Indice
1. [Setup Iniziale](#setup-iniziale)
2. [Personalizzazione Colori](#personalizzazione-colori)
3. [Aggiungere Prodotti](#aggiungere-prodotti)
4. [Modificare Servizi](#modificare-servizi)
5. [Traduzioni](#traduzioni)
6. [Contatti Social](#contatti-social)
7. [Troubleshooting](#troubleshooting)

---

## 🚀 Setup Iniziale

### Opzione 1: Offline (Locale)
```
1. Scarica i file:
   - index.html
   - style.css
   - script.js

2. Crea una cartella "Images" nello stesso percorso
3. Aggiungi le tue immagini di prodotti in Images/
4. Double-click su index.html per aprire nel browser
5. ✅ Il sito funziona subito!
```

### Opzione 2: Online (Web Hosting)
```
1. Accedi al tuo hosting (es. Hostinger, SiteGround)
2. Upload via FTP:
   - index.html
   - style.css
   - script.js
   - Cartella Images/ con le tue immagini

3. Visita il tuo dominio
4. ✅ Il sito è live!
```

---

## 🎨 Personalizzazione Colori

### Come Cambiare il Colore Principale

Apri `style.css` e modifica le variabili CSS nella sezione `:root`:

```css
:root {
    /* CAMBIA QUESTO COLORE */
    --primary-color: #d4a574;        /* Oro attuale */
    --secondary-color: #8b6f47;
    --accent-color: #c9986a;
}
```

### Schemi Colore Suggeriti

**🌸 Rosa Elegante:**
```css
--primary-color: #e0a6a6;
--secondary-color: #c48484;
--accent-color: #f5c4c4;
```

**💜 Viola Premium:**
```css
--primary-color: #8b5cf6;
--secondary-color: #6d28d9;
--accent-color: #a78bfa;
```

**💎 Blu Lusso:**
```css
--primary-color: #3b82f6;
--secondary-color: #1d4ed8;
--accent-color: #60a5fa;
```

**🌿 Verde Naturale:**
```css
--primary-color: #10b981;
--secondary-color: #059669;
--accent-color: #34d399;
```

### Dove Trovare Colori

- **Palette Generator**: https://coolors.co
- **Color Picker**: https://imagecolorpicker.com
- **Contrast Checker**: https://webaim.org/resources/contrastchecker/

---

## ➕ Aggiungere Prodotti

### Passo 1: Prepara l'Immagine
```
✅ Formato: JPG, PNG o WEBP
✅ Dimensioni: 800x800px (quadrato)
✅ Nome: product5.jpg
✅ Posizione: Cartella Images/
```

### Passo 2: Copia Codice Prodotto

Nel file `index.html`, cerca la sezione "<!-- PRODOTTO 4 -->"

Copia l'intero blocco:
```html
<div class="product-card">
    <div class="product-image">
        <img src="Images/Pre-Shampoo.png" alt="Maschera Idratante ArtCapelliOK" loading="lazy">
    </div>
    <div class="product-info">
        <h3 class="product-name" data-translate="product4-name">Maschera Idratante</h3>
        <p class="product-description" data-translate="product4-desc">Trattamento intensivo per capelli setosi</p>
        <div class="product-footer">
            <span class="product-price">€34.90</span>
            <button class="product-button" data-translate="product-buy">Acquista</button>
        </div>
    </div>
</div>
```

### Passo 3: Incolla e Modifica

Incolla PRIMA della linea `</div>` di `.products-grid`:

```html
<!-- PRODOTTO 5 - NUOVO PRODOTTO -->
<div class="product-card">
    <div class="product-image">
        <img src="Images/product5.jpg" alt="Detox Spray ArtCapelliOK" loading="lazy">
    </div>
    <div class="product-info">
        <h3 class="product-name">Detox Spray</h3>
        <p class="product-description">Purifie il cuoio capelluto</p>
        <div class="product-footer">
            <span class="product-price">€22.50</span>
            <button class="product-button">Acquista</button>
        </div>
    </div>
</div>
```

### Passo 4: Aggiungi Traduzione (Opzionale)

Nel file `script.js`, aggiungi le chiavi di traduzione:

```javascript
it: {
    // ... altri elementi ...
    'product5-name': 'Detox Spray',
    'product5-desc': 'Purifie il cuoio capelluto'
}

ru: {
    'product5-name': 'Детокс-спрей',
    'product5-desc': 'Очищает кожу головы'
}

en: {
    'product5-name': 'Detox Spray',
    'product5-desc': 'Purifies the scalp'
}
```

Quindi usa nel codice HTML:
```html
<h3 class="product-name" data-translate="product5-name">Detox Spray</h3>
<p class="product-description" data-translate="product5-desc">Purifie il cuoio capelluto</p>
```

---

## 🔧 Modificare Servizi

Nel file `index.html`, sezione "SERVICES SECTION":

```html
<!-- SERVIZIO ESEMPIO -->
<div class="service-card">
    <i class="fas fa-cut service-icon"></i>
    <h3 class="service-name">Taglio Donna</h3>
    <p class="service-description">Taglio personalizzato con consulenza stilistica</p>
    <p class="service-price">da €35</p>
</div>
```

### Cambia Icone

Visita: https://fontawesome.com/icons

Esempi di icone utili per parrucchiera:
- `fa-cut` - Forbici (taglio)
- `fa-palette` - Tavolozza (colore)
- `fa-spa` - Meditazione (trattamenti)
- `fa-gem` - Gemma (lusso/cheratina)
- `fa-wind` - Vento (asciugatura)
- `fa-droplet` - Goccia (trattamenti liquidi)
- `fa-feather` - Piuma (capelli)

### Modifica Prezzi

```html
<p class="service-price">da €50</p>
```

---

## 🌍 Traduzioni

### Struttura Traduzioni

Nel file `script.js`:
```javascript
const translations = {
    it: {
        'chiave': 'Valore italiano'
    },
    ru: {
        'chiave': 'Значение русский'
    },
    en: {
        'chiave': 'English value'
    }
}
```

### Come Usare nel HTML

```html
<h1 data-translate="hero-title">ArtCapelliOK</h1>
<p data-translate="hero-subtitle">Biocosmetica professionale...</p>
```

### Aggiungere Nuova Lingua

1. **Nel script.js**, aggiungi nuovo oggetto:

```javascript
const translations = {
    it: { /* ... */ },
    es: {  // NUOVO: Spagnolo
        'nav-home': 'Inicio',
        'nav-products': 'Productos',
        // ... completa tutti i testi ...
    }
}
```

2. **Nel index.html**, aggiungi opzione nel dropdown:

```html
<div class="lang-dropdown" id="langDropdown">
    <div class="lang-option" data-lang="it">🇮🇹 Italiano</div>
    <div class="lang-option" data-lang="ru">🇷🇺 Русский</div>
    <div class="lang-option" data-lang="en">🇬🇧 English</div>
    <div class="lang-option" data-lang="es">🇪🇸 Español</div>
</div>
```

---

## 📞 Contatti Social

### WhatsApp

Modifica il numero nel file `index.html`:

Cerca:
```html
<a href="https://wa.me/393455431807" target="_blank" class="whatsapp-button">
```

Cambia con il TUO numero:
```html
<!-- Formato: Paese+Numero (es. Italia=39, USA=1) -->
<a href="https://wa.me/39TUONUMERO" target="_blank" class="whatsapp-button">
```

**Esempio:**
- Italia: `https://wa.me/393491234567`
- USA: `https://wa.me/13015551234`
- Spagna: `https://wa.me/34912345678`

### Telegram

Cerca:
```html
<a href="https://t.me/ArtCapelli_products" target="_blank">
```

Cambia con il TUO canale:
```html
<a href="https://t.me/tuo_canale" target="_blank">
```

### Instagram & Facebook

Nel footer, modifica i link:

```html
<!-- Sezione footer -->
<a href="https://www.instagram.com/tuoaccount" target="_blank">
    <i class="fab fa-instagram"></i>
</a>

<a href="https://www.facebook.com/tuoprofilo" target="_blank">
    <i class="fab fa-facebook-f"></i>
</a>
```

---

## 🎯 Struttura File Consigliata

```
ArtCapelliOK/
├── index.html          ← Pagina principale
├── style.css           ← Stili (colori, layout)
├── script.js           ← Interazioni (lingue, tema)
├── Images/             ← Cartella immagini
│   ├── product1.jpg
│   ├── product2.jpg
│   ├── Owner_Image.jpg
│   └── ... altre immagini ...
└── README.md           ← Questa guida
```

---

## 🔍 Commenti nel Codice

### HTML
```html
<!-- ========== TITOLO SEZIONE ==========
     Descrizione di cosa fa
     ========== -->
<section>
    <!-- Elemento singolo con descrizione -->
</section>
```

### CSS
```css
/* ========== COMPONENTE ==========
   Descrizione
   ========== */
.classe {
    /* Proprietà con commento */
    proprieta: valore; /* Spiegazione */
}
```

### JavaScript
```javascript
// ========== FUNZIONE ==========
// Descrizione di cosa fa

function myFunction() {
    // Operazione con commento esplicativo
}
```

---

## 🐛 Troubleshooting

### Problema: Le immagini non si caricano

**Soluzione:**
```
1. Verifica che la cartella si chiami "Images" (con I maiuscola)
2. Controlla che i nomi file corrispondono esattamente
   ❌ product1.JPG (maiuscolo) + src="product1.jpg" (minuscolo) = NON FUNZIONA
   ✅ product1.jpg + src="product1.jpg" = FUNZIONA
3. Prova con il percorso assoluto: ./Images/product1.jpg
```

### Problema: Le traduzioni non cambiano

**Soluzione:**
1. Apri Developer Tools (F12)
2. Controlla la console per errori
3. Verifica che i `data-translate` nel HTML corrispondono alle chiavi nel script.js

### Problema: Dark mode non funziona

**Soluzione:**
```
1. Pulisci la cache del browser (Ctrl+Shift+Del)
2. Chiudi e riapri il browser
3. Verifica che il file script.js sia caricato correttamente
```

### Problema: Menu mobile non funziona

**Soluzione:**
```
1. Verifica che gli ID siano corretti:
   - id="navMenu"
   - id="mobileToggle"
2. Controlla che il script.js sia caricato prima di </body>
3. Prova su un dispositivo mobile o riduci la finestra a < 768px
```

---

## 📊 Performance Tips

### Ottimizzare le Immagini

```bash
# Ridimensiona le immagini prima di uploadare
# Usa: https://tinyjpg.com per comprimere

# Dimensioni consigliate:
Product images: 800x800px
Owner image: 600x800px
Max file size: 200KB per immagine
```

### Velocità di Caricamento

```
✅ Salva: Immagini compresse
✅ Usa: Formati moderni (WEBP se possibile)
❌ Evita: Video auto-play
❌ Evita: Troppi font Google
```

---

## 📱 Test Responsivo

Testare il sito su vari dispositivi:

1. **Desktop**: F12 → Resize a 1920x1080
2. **Tablet**: F12 → Seleziona "iPad"
3. **Mobile**: F12 → Seleziona "iPhone 12"

Breakpoints principali:
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

---

## 🚀 Deploy Online

### Opzione 1: Vercel (Gratuito)
```
1. Vai a vercel.com
2. Conecta il tuo repository GitHub
3. Deploy automatico
4. Dominio: nomeprogetto.vercel.app
```

### Opzione 2: Hosting Tradizionale
```
1. Scegli un provider (Hostinger, SiteGround, etc)
2. Compra dominio (artcapelli.ok)
3. Upload via FTP
4. Configura il DNS
```

---

## 💡 Prossimi Passi (Upgrade Futuri)

Funzionalità che puoi aggiungere:

✨ **Newsletter** - Raccogliere email
✨ **E-commerce** - Vendere prodotti online
✨ **Booking** - Prenotare appuntamenti
✨ **Reviews** - Recensioni clienti
✨ **Blog** - Articoli sul hair care

---

## ✅ Checklist Pre-Launch

Prima di mandare online:

```
□ Controlla tutti i link (WhatsApp, Telegram, etc)
□ Testa su mobile, tablet, desktop
□ Prova tutte e 3 le lingue
□ Prova dark mode
□ Verifica immagini si carichino velocemente
□ Testa su diversi browser (Chrome, Firefox, Safari)
□ Controlla che i prezzi siano corretti
□ Aggiorna il copyright (anno attuale)
□ Prova il pulsante "Scarica Catalogo PDF"
□ Verifica i social link
```

---

**Buona fortuna con il tuo sito! 🌟**

Se hai domande, controlla i commenti nel codice - sono molto dettagliati!

*Creato con ❤️ per ArtCapelliOK*