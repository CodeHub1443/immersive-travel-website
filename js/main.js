/* global gsap, ScrollTrigger */
import '../css/styles.scss';

// ─── Hero Slider Data ─────────────────────────────────────────────
const heroData = [
    {
        image: 'assets/images/slide-1.jpg',
        place: 'Dhaka Division',
        title1: 'DHAKA',
        title2: 'BY NIGHT',
        description:
            'At the heart of Bangladesh, Dhaka comes alive after sunset — glowing bridges, restless rivers, and streets where tradition meets the relentless pulse of modern life.'
    },
    {
        image: 'assets/images/slide-2.jpg',
        place: 'Sylhet',
        title1: 'Panthumai',
        title2: 'Waterfall',
        description:
            'Hidden in the misty hills of Sylhet, Panthumai cascades across the border in a white veil. Surrounded by lush jungle, this is nature at its most theatrical.'
    },
    {
        image: 'assets/images/slide-3.jpg',
        place: 'Bandarban',
        title1: 'Sajek',
        title2: 'Valley',
        description:
            'Rise above the clouds in Sajek Valley, the roof of Bangladesh. Tribal villages, bamboo forests, and a sea of mist stretching to the horizon await you.'
    },
    {
        image: 'assets/images/slide-4.jpg',
        place: 'Sundarbans',
        title1: 'Chitran',
        title2: 'Deer',
        description:
            'In the world\'s largest mangrove delta, spotted deer roam tidal flats at dusk. The Sundarbans is a living wilderness — untamed, ancient, and utterly breathtaking.'
    },
    {
        image: 'assets/images/slide-5.jpg',
        place: "Cox's Bazar",
        title1: 'Inani',
        title2: 'Sea Beach',
        description:
            'The world\'s longest natural sea beach stretches 120 km along the Bay of Bengal. At Inani, ancient coral formations and golden sand create a scene of raw coastal beauty.'
    },
    {
        image: 'assets/images/slide-6.jpg',
        place: 'Sylhet',
        title1: 'Shada',
        title2: 'Pathor',
        description:
            'Crystal-clear water rushes over white limestone beds at Shada Pathor. This hidden gem in Sylhet is a surreal landscape unlike anywhere else on earth.'
    },
    {
        image: 'assets/images/slide-7.jpg',
        place: 'Sylhet',
        title1: 'Tea',
        title2: 'Garden',
        description:
            'Rolling waves of emerald green define the tea gardens of Sylhet. Walk between the rows at dawn, when morning fog clings to the leaves and the world is perfectly still.'
    },
    {
        image: 'assets/images/slide-8.jpg',
        place: 'Sundarbans',
        title1: 'Royal',
        title2: 'Bengal',
        description:
            'The Royal Bengal Tiger — Bangladesh\'s national symbol — rules the Sundarbans. To see one in the wild is to witness one of nature\'s most magnificent creatures in its kingdom.'
    }
];

// ─── Destinations Data (unique images, never repeats hero slides) ──
const destData = [
    { image: 'assets/images/dest-1.jpg', place: 'Dhaka',          title1: 'Old',       title2: 'Dhaka'       },
    { image: 'assets/images/dest-2.jpg', place: "Cox's Bazar",    title1: "World's",   title2: 'Longest Beach'},
    { image: 'assets/images/dest-3.jpg', place: 'Sylhet',         title1: 'Tea',       title2: 'Gardens'     },
    { image: 'assets/images/dest-4.jpg', place: 'Bandarban',      title1: 'Boga',      title2: 'Lake'        },
    { image: 'assets/images/dest-5.jpg', place: 'Sundarbans',     title1: 'Tiger',     title2: 'Reserve'     },
    { image: 'assets/images/dest-6.jpg', place: 'Rangamati',      title1: 'Kaptai',    title2: 'Lake'        },
    { image: 'assets/images/dest-7.jpg', place: "Saint Martin's", title1: 'Coral',     title2: 'Island'      },
    { image: 'assets/images/dest-8.jpg', place: 'Rajshahi',       title1: 'Paharpur',  title2: 'Monastery'   },
];

// ─── Gallery Data (unique images, never repeats hero or dest) ─────
const galleryData = [
    { image: 'assets/images/gallery-1.jpg' },
    { image: 'assets/images/gallery-2.jpg' },
    { image: 'assets/images/gallery-3.jpg' },
    { image: 'assets/images/gallery-4.jpg' },
    { image: 'assets/images/gallery-5.jpg' },
    { image: 'assets/images/gallery-6.jpg' },
    { image: 'assets/images/gallery-7.jpg' },
    { image: 'assets/images/gallery-8.jpg' },
];

// ─── Utility ──────────────────────────────────────────────────────
const _ = (id) => document.getElementById(id);

// ─── Populate Hero Slider ─────────────────────────────────────────
const cards = heroData.map((item, i) =>
    `<div class="card" id="card${i}" style="background-image:url(${item.image})"></div>`
).join('');

const cardContents = heroData.map((item, i) =>
    `<div class="card-content" id="card-content-${i}">
        <div class="content-start"></div>
        <div class="content-place">${item.place}</div>
        <div class="content-title-1">${item.title1}</div>
        <div class="content-title-2">${item.title2}</div>
    </div>`
).join('');

const slideNumbers = heroData.map((_, i) =>
    `<div class="item" id="slide-item-${i}">${i + 1}</div>`
).join('');

_('demo').innerHTML          = cards + cardContents;
_('slide-numbers').innerHTML = slideNumbers;

// ─── Populate Destinations Grid ───────────────────────────────────
const destGrid = _('destinations-grid');
destData.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'dest-card';
    card.innerHTML = `
        <div class="dest-img" style="background-image:url(${item.image})"></div>
        <div class="dest-overlay"></div>
        <div class="dest-info">
            <div class="dest-place">${item.place}</div>
            <div class="dest-title">${item.title1} ${item.title2}</div>
            <div class="dest-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                </svg>
            </div>
        </div>`;
    destGrid.appendChild(card);
});

// ─── Populate Gallery Mosaic ──────────────────────────────────────
const galleryMosaic = _('gallery-mosaic');
galleryData.forEach((item) => {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.innerHTML = `
        <div class="gallery-img" style="background-image:url(${item.image})"></div>
        <div class="gallery-hover">
            <span class="gallery-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                </svg>
            </span>
        </div>`;
    galleryMosaic.appendChild(div);
});

// ─── Assign Parallax + Booking BG Images ─────────────────────────
document.querySelectorAll('[data-img]').forEach(el => {
    el.style.backgroundImage = `url(${el.dataset.img})`;
});

// ─── GSAP Slider Core ─────────────────────────────────────────────
const range = (n) => Array(n).fill(0).map((_, j) => j);
const set   = gsap.set;

function getCard(i)        { return `#card${i}`; }
function getCardContent(i) { return `#card-content-${i}`; }
function getSliderItem(i)  { return `#slide-item-${i}`; }

function animate(target, duration, props) {
    return new Promise(resolve => {
        gsap.to(target, { ...props, duration, onComplete: resolve });
    });
}

let order       = range(heroData.length);
let detailsEven = true;

let offsetTop   = 200;
let offsetLeft  = 700;
let cardWidth   = 200;
let cardHeight  = 300;
let gap         = 40;
let numberSize  = 50;
const ease      = 'sine.inOut';

function updateSlideText(index) {
    const active = detailsEven ? '#details-even' : '#details-odd';
    document.querySelector(`${active} .place-box .text`).textContent  = heroData[index].place;
    document.querySelector(`${active} .title-1`).textContent          = heroData[index].title1;
    document.querySelector(`${active} .title-2`).textContent          = heroData[index].title2;
    document.querySelector(`${active} .desc`).textContent             = heroData[index].description;
}

function init() {
    const [active, ...rest] = order;
    const detailsActive   = detailsEven ? '#details-even' : '#details-odd';
    const detailsInactive = detailsEven ? '#details-odd'  : '#details-even';
    updateSlideText(active);

    const { innerHeight: height, innerWidth: width } = window;
    const isMobile = width < 768;

    // Mobile: compact thumbnail strip pinned near the bottom
    // Size cards to exactly fill the available width (12px side padding each side)
    if (isMobile) {
        const thumbCount = heroData.length - 1;  // 7 thumbnails (1 card is active full-screen)
        gap       = 5;
        cardWidth = Math.floor((width - 24 - gap * (thumbCount - 1)) / thumbCount);
        cardHeight = Math.round(cardWidth * 1.42); // ~1.4:1 portrait ratio
    }

    offsetTop  = isMobile ? height - cardHeight - 24 : height - 430;
    offsetLeft = isMobile ? 12                        : width  - 830;

    const paginTop  = isMobile ? height - cardHeight - 108 : offsetTop + 330;
    const paginLeft = isMobile ? 14                         : offsetLeft;
    gsap.set('#pagination',  { top: paginTop, left: paginLeft, y: 200, opacity: 0, zIndex: 60 });
    gsap.set('#navbar',      { y: -200, opacity: 0 });

    gsap.set(getCard(active),        { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight });
    gsap.set(getCardContent(active), { x: 0, y: 0, opacity: 0 });
    gsap.set(detailsActive,          { opacity: 0, zIndex: 22, x: -200 });
    gsap.set(detailsInactive,        { opacity: 0, zIndex: 12 });
    gsap.set(`${detailsInactive} .text`,   { y: 100 });
    gsap.set(`${detailsInactive} .title-1`,{ y: 100 });
    gsap.set(`${detailsInactive} .title-2`,{ y: 100 });
    gsap.set(`${detailsInactive} .desc`,   { y: 50 });
    gsap.set(`${detailsInactive} .cta`,    { y: 60 });
    gsap.set('.progress-sub-foreground',   { width: 500 * (1 / order.length) * (active + 1) });

    rest.forEach((i, index) => {
        gsap.set(getCard(i), {
            x: offsetLeft + 400 + index * (cardWidth + gap),
            y: offsetTop, width: cardWidth, height: cardHeight, zIndex: 30, borderRadius: 10
        });
        gsap.set(getCardContent(i), {
            x: offsetLeft + 400 + index * (cardWidth + gap),
            zIndex: 40, y: offsetTop + cardHeight - 100
        });
        gsap.set(getSliderItem(i), { x: (index + 1) * numberSize });
    });

    gsap.set('.indicator', { x: -window.innerWidth });

    const startDelay = 0.6;

    gsap.to('.cover', {
        x: width + 400, delay: 0.5, ease,
        onComplete: () => { setTimeout(() => loop(), 500); }
    });

    rest.forEach((i, index) => {
        gsap.to(getCard(i), {
            x: offsetLeft + index * (cardWidth + gap), zIndex: 30, ease, delay: startDelay
        });
        gsap.to(getCardContent(i), {
            x: offsetLeft + index * (cardWidth + gap), zIndex: 40, ease, delay: startDelay
        });
    });

    gsap.to('#pagination',   { y: 0, opacity: 1, ease, delay: startDelay });
    gsap.to('#navbar',       { y: 0, opacity: 1, ease, delay: startDelay });
    gsap.to(detailsActive,   { opacity: 1, x: 0, ease, delay: startDelay });

    // Show scroll hint after a moment
    gsap.to('#scroll-hint', { opacity: 1, delay: startDelay + 1.2, duration: 0.8 });
}

let clicks = 0;

function step() {
    return new Promise(resolve => {
        const tl = gsap.timeline({ onComplete: resolve });

        tl.call(() => {
            order.push(order.shift());
            detailsEven = !detailsEven;
            updateSlideText(order[0]);
        });

        tl.add(() => {
            const detailsActive   = detailsEven ? '#details-even' : '#details-odd';
            const detailsInactive = detailsEven ? '#details-odd'  : '#details-even';
            const [active, ...rest] = order;
            const prv = rest[rest.length - 1];

            const sub = gsap.timeline();

            sub.set(detailsActive, { zIndex: 22 });
            sub.to(detailsActive,              { opacity: 1, duration: 0.4, ease }, 0);
            sub.to(`${detailsActive} .text`,   { y: 0, delay: 0.1,  duration: 0.7, ease }, 0);
            sub.to(`${detailsActive} .title-1`,{ y: 0, delay: 0.15, duration: 0.7, ease }, 0);
            sub.to(`${detailsActive} .title-2`,{ y: 0, delay: 0.15, duration: 0.7, ease }, 0);
            sub.to(`${detailsActive} .desc`,   { y: 0, delay: 0.3,  duration: 0.4, ease }, 0);
            sub.to(`${detailsActive} .cta`,    { y: 0, delay: 0.35, duration: 0.4, ease }, 0);
            sub.set(detailsInactive, { zIndex: 12 }, 0);

            sub.set(getCard(prv), { zIndex: 10 }, 0);
            sub.set(getCard(active), { zIndex: 20 }, 0);
            sub.to(getCard(prv), { scale: 1.5, ease }, 0);

            sub.to(getCardContent(active), {
                y: offsetTop + cardHeight - 10, opacity: 0, duration: 0.3, ease
            }, 0);
            sub.to(getSliderItem(active), { x: 0, ease }, 0);
            sub.to(getSliderItem(prv),    { x: -numberSize, ease }, 0);
            sub.to('.progress-sub-foreground', {
                width: 500 * (1 / order.length) * (active + 1), ease
            }, 0);

            sub.to(getCard(active), {
                x: 0, y: 0, ease,
                width: window.innerWidth, height: window.innerHeight, borderRadius: 0,
                onComplete: () => {
                    const xNew = offsetLeft + (rest.length - 1) * (cardWidth + gap);
                    gsap.set(getCard(prv), {
                        x: xNew, y: offsetTop,
                        width: cardWidth, height: cardHeight,
                        zIndex: 30, borderRadius: 10, scale: 1
                    });
                    gsap.set(getCardContent(prv), {
                        x: xNew, y: offsetTop + cardHeight - 100, opacity: 1, zIndex: 40
                    });
                    gsap.set(getSliderItem(prv),          { x: rest.length * numberSize });
                    gsap.set(detailsInactive,              { opacity: 0 });
                    gsap.set(`${detailsInactive} .text`,   { y: 100 });
                    gsap.set(`${detailsInactive} .title-1`,{ y: 100 });
                    gsap.set(`${detailsInactive} .title-2`,{ y: 100 });
                    gsap.set(`${detailsInactive} .desc`,   { y: 50 });
                    gsap.set(`${detailsInactive} .cta`,    { y: 60 });
                    clicks -= 1;
                    if (clicks > 0) step();
                }
            }, 0);

            rest.forEach((i, index) => {
                if (i !== prv) {
                    const xNew = offsetLeft + index * (cardWidth + gap);
                    sub.set(getCard(i), { zIndex: 30 }, 0);
                    sub.to(getCard(i), {
                        x: xNew, y: offsetTop,
                        width: cardWidth, height: cardHeight, ease, delay: 0.1 * (index + 1)
                    }, 0);
                    sub.to(getCardContent(i), {
                        x: xNew, y: offsetTop + cardHeight - 100,
                        opacity: 1, zIndex: 40, ease, delay: 0.1 * (index + 1)
                    }, 0);
                    sub.to(getSliderItem(i), { x: (index + 1) * numberSize, ease }, 0);
                }
            });

            return sub;
        });
    });
}

async function loop() {
    await animate('.indicator', 2,   { x: 0 });
    await animate('.indicator', 0.8, { x: window.innerWidth, delay: 0.3 });
    set('.indicator', { x: -window.innerWidth });
    await step();
    loop();
}

// Arrow click handlers
document.querySelector('.arrow-right').addEventListener('click', () => {
    if (clicks >= 1) return;
    clicks += 1;
    loop();
});

document.querySelector('.arrow-left').addEventListener('click', () => {
    // Reverse: move last to front
    order.unshift(order.pop());
    order.unshift(order.pop());
    if (clicks >= 1) return;
    clicks += 1;
    loop();
});

// ─── Image Loading & Start ────────────────────────────────────────
async function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload  = () => resolve(img);
        img.onerror = reject;
        img.src     = src;
    });
}

async function start() {
    try {
        await Promise.all(heroData.map(({ image }) => loadImage(image)));
        init();
    } catch (err) {
        console.error('One or more images failed to load', err);
        init(); // init anyway so the page isn't blank
    }
}

start();

// ─── Navbar Scroll Effect ─────────────────────────────────────────
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
}, { passive: true });

// ─── Mobile Hamburger ─────────────────────────────────────────────
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open');
});

document.querySelectorAll('.mobile-link, .mobile-book-btn').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
    });
});

// ─── Smooth Scroll for Nav Links ──────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id], footer[id]');
const navLinks  = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(l => l.classList.remove('active'));
            const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
            if (active) active.classList.add('active');
        }
    });
}, { threshold: 0.3 });

sections.forEach(s => sectionObserver.observe(s));

// ─── Booking Tabs ─────────────────────────────────────────────────
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.dataset.tab;

        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(`tab-${tabId}`).classList.add('active');
    });
});

// ─── Pill Groups ──────────────────────────────────────────────────
document.querySelectorAll('.pill-group').forEach(group => {
    group.querySelectorAll('.pill').forEach(pill => {
        pill.addEventListener('click', () => {
            group.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
        });
    });
});

// ─── Counter Widgets (Booking) ────────────────────────────────────
function makeCounter(decId, incId, countId, min = 1, max = 20) {
    const decBtn  = document.getElementById(decId);
    const incBtn  = document.getElementById(incId);
    const display = document.getElementById(countId);
    if (!decBtn || !incBtn || !display) return;

    let count = parseInt(display.textContent, 10);

    decBtn.addEventListener('click', () => {
        if (count > min) { count--; display.textContent = count; }
    });
    incBtn.addEventListener('click', () => {
        if (count < max) { count++; display.textContent = count; }
    });
}

makeCounter('dec-travelers', 'inc-travelers', 'traveler-count', 1, 20);
makeCounter('dec-rooms',     'inc-rooms',     'room-count',     1, 10);

// ─── GSAP ScrollTrigger — Parallax & Animations ───────────────────
gsap.registerPlugin(ScrollTrigger);

const isMobileViewport = window.innerWidth < 768;

// Parallax backgrounds — skip on mobile (saves GPU on low-end devices;
// the effect is barely perceptible on small screens anyway)
if (!isMobileViewport) {
    document.querySelectorAll('.parallax-section .parallax-bg').forEach(bg => {
        gsap.to(bg, {
            yPercent: 25,
            ease: 'none',
            scrollTrigger: {
                trigger: bg.closest('.parallax-section'),
                start: 'top bottom',
                end:   'bottom top',
                scrub: true
            }
        });
    });

    // Experience panel parallax (desktop only)
    document.querySelectorAll('.exp-panel .exp-bg').forEach(bg => {
        gsap.to(bg, {
            yPercent: 18,
            ease: 'none',
            scrollTrigger: {
                trigger: bg.closest('.exp-panel'),
                start: 'top bottom',
                end:   'bottom top',
                scrub: true
            }
        });
    });
}

// ─── Horizontal Pin Scroll — Destinations ────────────────────────
// Must run after cards are in the DOM (destinations-grid is populated above at top)
(function initHorizontalDest() {
    const destSection   = document.getElementById('destinations');
    const destViewport  = document.querySelector('.dest-h-viewport');
    const destGrid      = document.getElementById('destinations-grid');
    const fillBar       = document.getElementById('dest-h-fill');
    const counterEl     = document.getElementById('dest-h-counter');
    if (!destSection || !destGrid) return;

    // Mobile: CSS touch-scroll handles it — skip GSAP pin
    if (window.innerWidth < 768) return;

    // Wait one rAF so the flex layout has rendered widths
    requestAnimationFrame(() => {
        const totalW    = destGrid.scrollWidth;
        const viewW     = destViewport.offsetWidth || window.innerWidth;
        const travel    = Math.max(0, totalW - viewW);
        const cardCount = destGrid.children.length;

        if (travel <= 0) return; // no scrolling needed on very wide screens

        gsap.to(destGrid, {
            x: -travel,
            ease: 'none',
            scrollTrigger: {
                trigger:       destSection,
                start:         'top top',
                end:           () => `+=${travel * 1.1}`,
                scrub:         1.4,
                pin:           true,
                anticipatePin: 1,
                onUpdate(self) {
                    const p = self.progress;
                    if (fillBar)   fillBar.style.width = `${p * 100}%`;
                    if (counterEl) {
                        const idx = Math.min(Math.floor(p * cardCount) + 1, cardCount);
                        counterEl.textContent = `${idx} / ${cardCount}`;
                    }
                }
            }
        });
    });
}());

// Shared mobile flag for tuning animation distances
const mob = isMobileViewport;

// Gallery items stagger
gsap.from('.gallery-item', {
    opacity: 0,
    scale: mob ? 0.96 : 0.92,
    stagger: mob ? 0.05 : 0.07,
    duration: mob ? 0.5 : 0.7,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.gallery-mosaic',
        start: 'top 85%'
    }
});

// Info cards stagger — clearProps ensures no residual y-transform lingers on card 4
gsap.from('.info-card', {
    opacity: 0,
    y: mob ? 24 : 40,
    stagger: mob ? 0.07 : 0.1,
    duration: mob ? 0.5 : 0.65,
    ease: 'power2.out',
    clearProps: 'transform,opacity',
    scrollTrigger: {
        trigger: '.info-cards-row',
        start: 'top 85%',
        once: true
    }
});

// Fact cards stagger
gsap.from('.fact-card', {
    opacity: 0,
    y: mob ? 24 : 50,
    stagger: mob ? 0.07 : 0.12,
    duration: mob ? 0.5 : 0.7,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.facts-grid',
        start: 'top 85%'
    }
});

// ─── Animated Counters ────────────────────────────────────────────
document.querySelectorAll('.fact-number[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => {
            gsap.fromTo(el,
                { innerText: 0 },
                {
                    innerText: target,
                    duration:  target > 1000 ? 2.5 : 1.8,
                    ease:      'power2.out',
                    snap:      { innerText: target > 100 ? 50 : 1 },
                    onUpdate() {
                        el.textContent = Math.round(parseFloat(el.innerHTML)).toLocaleString();
                    }
                }
            );
        }
    });
});

// ─── Reveal Animations ───────────────────────────────────────────
// Delay slightly for staggered groups
// On mobile, fire reveals earlier so elements aren't still hidden
// when the user can already see them (small viewport = less scroll travel)
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${i * (mob ? 0.05 : 0.08)}s`;
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

// ─── Scroll Hint Hide on Scroll ──────────────────────────────────
const scrollHint = document.getElementById('scroll-hint');
if (scrollHint) {
    gsap.set(scrollHint, { opacity: 0 });
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            gsap.to(scrollHint, { opacity: 0, duration: 0.4 });
        }
    }, { passive: true, once: true });
}

// ─── Side Navigation Dots ─────────────────────────────────────────
(function initSideNav() {
    const dots        = document.querySelectorAll('.side-dot');
    const allSections = document.querySelectorAll('section[id]');
    if (!dots.length) return;

    // Click → smooth scroll to section
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const el = document.getElementById(dot.dataset.section);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // IntersectionObserver → highlight active dot
    const dotObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                dots.forEach(d => d.classList.remove('active'));
                const active = document.querySelector(`.side-dot[data-section="${entry.target.id}"]`);
                if (active) active.classList.add('active');
            }
        });
    }, { threshold: 0.4 });

    allSections.forEach(s => dotObserver.observe(s));
}());

// ─── Marquee Strip (inject between discover & destinations) ───────
(function injectMarquee() {
    const destinations = document.getElementById('destinations');
    if (!destinations) return;

    const items = [
        'Cox\'s Bazar', 'Sundarbans', 'Sylhet Tea Gardens', 'Sajek Valley',
        'Kaptai Lake', 'Ratargul Swamp', 'Saint Martin\'s Island', 'Bandarban'
    ];

    const strip = document.createElement('div');
    strip.className = 'marquee-strip';

    // Duplicate for seamless loop
    const track1 = document.createElement('div');
    track1.className = 'marquee-track';
    const track2 = document.createElement('div');
    track2.className = 'marquee-track';

    items.forEach(name => {
        [track1, track2].forEach(t => {
            const item = document.createElement('div');
            item.className = 'marquee-item';
            item.textContent = name;
            t.appendChild(item);
        });
    });

    strip.appendChild(track1);
    strip.appendChild(track2);
    destinations.parentNode.insertBefore(strip, destinations);
}());

// ─── Phone mockup tilt on mouse move (desktop only) ──────────────
if (!isMobileViewport) {
    (function initPhoneTilt() {
        const phoneWrap = document.querySelector('.phone-float-wrap');
        if (!phoneWrap) return;

        phoneWrap.closest('.app-mockup-col').addEventListener('mousemove', e => {
            const rect   = phoneWrap.getBoundingClientRect();
            const cx     = rect.left + rect.width  / 2;
            const cy     = rect.top  + rect.height / 2;
            const rotY   = ((e.clientX - cx) / (rect.width  / 2)) * 10;
            const rotX   = -((e.clientY - cy) / (rect.height / 2)) * 8;
            gsap.to(phoneWrap, {
                rotationY: rotY,
                rotationX: rotX,
                transformPerspective: 800,
                ease: 'power1.out',
                duration: 0.5
            });
        });

        phoneWrap.closest('.app-mockup-col').addEventListener('mouseleave', () => {
            gsap.to(phoneWrap, { rotationY: 0, rotationX: 0, duration: 0.8, ease: 'elastic.out(1, 0.5)' });
        });
    }());
}

// ─── App mockup entrance scroll animation ────────────────────────
gsap.from('.phone-float-wrap', {
    y: mob ? 40 : 80,
    opacity: 0,
    duration: mob ? 0.8 : 1.2,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '#app-download',
        start: 'top 80%',
        once: true
    }
});

gsap.from('.app-text-col > *', {
    y: mob ? 20 : 40,
    opacity: 0,
    stagger: mob ? 0.08 : 0.12,
    duration: mob ? 0.55 : 0.8,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '#app-download',
        start: 'top 80%',
        once: true
    }
});

// ─── Section background colour lerp ──────────────────────────────
// Subtly shifts the body bg hue as you scroll through sections
ScrollTrigger.create({
    trigger: '#app-download',
    start: 'top 60%',
    end:   'bottom 40%',
    onToggle: self => {
        document.body.style.transition = 'background-color 1s ease';
        document.body.style.backgroundColor = self.isActive ? '#0a0d10' : '#0d0d0d';
    }
});

// ─── Dest card number badges ──────────────────────────────────────
// Add ordinal number to each generated card
document.querySelectorAll('.dest-card').forEach((card, i) => {
    const num = document.createElement('div');
    num.className = 'dest-num';
    num.textContent = String(i + 1).padStart(2, '0');
    card.appendChild(num);
});

