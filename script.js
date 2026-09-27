// ============================
// TRADUCCIÓN ES / EN
// ============================
const TRANSLATIONS = {
  es: {
    'nav.menu': 'Menu',
    'nav.diseno': 'Diseño',
    'nav.animacion': 'Animación',
    'nav.modelado': 'Modelado y Render 3D',
    'nav.sobremi': 'SobreMi',
    'nav.branding': '- Branding',
    'nav.estampas': '- Estampas',
    'nav.posters': '- Posters',
    'contact.button': 'CONTACTO',
    'estampa.hint': 'Click para ver en detalle',
    'diseno.placeholder': 'Sección Diseño — contenido próximamente.',
    'diseno.branding.placeholder': 'Branding — contenido próximamente.',
    'branding.hint': 'Arrastrá las tarjetas y hacé click para darlas vuelta',
    'branding.view': 'VER',
    'branding.hint.mobile': 'Tocá una tarjeta para darla vuelta',
    'nav.open': 'Abrir menú',
    'nav.close': 'Cerrar menú',
    'nav.top': 'Volver arriba',
    'branding.obsolet.desc': 'Mi marca de ropa independiente. Me encargo de todo: identidad, diseño de prendas y estampas, producción, logística y redes.',
    'branding.benzaiten.desc': 'Identidad visual para un spa y centro de bienestar. [Reemplazá este texto con la descripción del proyecto.]',
    'branding.karamelo.desc': 'Trabajo freelance para una marca de ropa: diseño de estampas, packaging, redes sociales y branding.',
    'animacion.placeholder': 'Sección Animación — contenido próximamente.',
    'modelado.placeholder': 'Sección Modelado y Render — contenido próximamente.',
    'contacto.placeholder': 'Formulario de contacto — próximamente.',
    'sobremi.title': 'SobreMi',
    'sobremi.p1': 'Soy Lautaro Saez, diseñador gráfico, animador y artista 3D. Formé mi mirada a través del estudio formal del diseño, pero encontré mi voz en el cruce entre lo prolijo y lo experimental: un balance entre composiciones limpias y texturas crudas que rompen la perfección. Cada proyecto es una excusa para probar algo nuevo, ya sea en una pieza gráfica, una animación o una escena 3D.',
    'sobremi.p2': 'Trabajo principalmente con Illustrator, Blender y After Effects, moviéndome libremente entre el diseño 2D y el 3D según lo que pida cada idea.',
    'sobremi.cv': 'CV',
    'modal.title': 'Contacto',
    'modal.name': 'Nombre',
    'modal.email': 'Email',
    'modal.message': 'Mensaje',
    'modal.submit': 'Enviar',
    'modal.sending': 'Enviando...',
    'modal.success': '¡Gracias! Tu mensaje fue enviado.',
    'modal.error': 'Hubo un error. Probá de nuevo o escribime directamente por email.'
  },
  en: {
    'nav.menu': 'Menu',
    'nav.diseno': 'Design',
    'nav.animacion': 'Animation',
    'nav.modelado': '3D Modeling & Render',
    'nav.sobremi': 'AboutMe',
    'nav.branding': '- Branding',
    'nav.estampas': '- Prints',
    'nav.posters': '- Posters',
    'contact.button': 'CONTACT',
    'estampa.hint': 'Click to see in detail',
    'diseno.placeholder': 'Design section — content coming soon.',
    'diseno.branding.placeholder': 'Branding — content coming soon.',
    'branding.hint': 'Drag the cards around and click to flip them',
    'branding.view': 'VIEW',
    'branding.hint.mobile': 'Tap a card to flip it',
    'nav.open': 'Open menu',
    'nav.close': 'Close menu',
    'nav.top': 'Back to top',
    'branding.obsolet.desc': 'My independent clothing brand. I handle everything: identity, garment and print design, production, logistics and social media.',
    'branding.benzaiten.desc': 'Visual identity for a spa and wellness center. [Replace this text with the project description.]',
    'branding.karamelo.desc': 'Freelance work for a clothing brand: print design, packaging, social media and branding.',
    'animacion.placeholder': 'Animation section — content coming soon.',
    'modelado.placeholder': '3D Modeling & Render section — content coming soon.',
    'contacto.placeholder': 'Contact form — coming soon.',
    'sobremi.title': 'About Me',
    'sobremi.p1': "I'm Lautaro Saez, a graphic designer, animator and 3D artist. I built my eye through formal design training, but found my voice at the crossroads between polished and experimental: a balance between clean compositions and raw textures that break the perfection. Every project is a chance to try something new, whether it's a graphic piece, an animation, or a 3D scene.",
    'sobremi.p2': 'I mainly work with Illustrator, Blender and After Effects, moving freely between 2D and 3D design depending on what each idea calls for.',
    'sobremi.cv': 'CV',
    'modal.title': 'Contact',
    'modal.name': 'Name',
    'modal.email': 'Email',
    'modal.message': 'Message',
    'modal.submit': 'Send',
    'modal.sending': 'Sending...',
    'modal.success': 'Thanks! Your message was sent.',
    'modal.error': 'Something went wrong. Try again or email me directly.'
  }
};

let currentLang = localStorage.getItem('lang') || 'es';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (TRANSLATIONS[lang][key] !== undefined) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });

  // textos que no se ven pero lee el lector de pantalla (ej: botón hamburguesa)
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.dataset.i18nAria;
    if (TRANSLATIONS[lang][key] !== undefined) {
      el.setAttribute('aria-label', TRANSLATIONS[lang][key]);
    }
  });

  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.textContent = lang === 'es' ? 'EN' : 'ES';
  }
}

// ---- Submenu de Diseño: si venís de otra página de Diseño (ej: Branding → Estampas),
//      el submenu ya estaba desplegado, así que aparece directo, sin volver a animarse.
//      Corre antes de DOMContentLoaded para que la animación no llegue a arrancar. ----
const esPaginaDiseno = /\/diseno-[\w-]+\.html$/.test(location.pathname);
try {
  if (esPaginaDiseno && sessionStorage.getItem('veniaDeDiseno') === '1') {
    document.documentElement.classList.add('submenu-sin-animacion');
  }
  window.addEventListener('pagehide', () => {
    sessionStorage.setItem('veniaDeDiseno', esPaginaDiseno ? '1' : '0');
  });
} catch (e) {
  // sin sessionStorage (modo privado estricto): simplemente se anima siempre, como antes
}

document.addEventListener('DOMContentLoaded', () => {

  // ---- Botón de idioma (fixed, arriba a la derecha) ----
  const langToggle = document.createElement('button');
  langToggle.type = 'button';
  langToggle.id = 'lang-toggle';
  langToggle.className = 'lang-toggle';
  langToggle.setAttribute('aria-label', 'Cambiar idioma / Change language');
  document.body.appendChild(langToggle);

  langToggle.addEventListener('click', () => {
    applyLanguage(currentLang === 'es' ? 'en' : 'es');
  });

  // ---- Fundido suave: cada imagen aparece cuando termina de cargar ----
  function fadeWhenLoaded(el) {
    const isVideo = el.tagName === 'VIDEO';
    const ready = isVideo ? el.readyState >= 2 : (el.complete && el.naturalWidth > 0);
    if (ready || !el.getAttribute('src')) return; // ya está (caché) o no tiene imagen todavía
    el.classList.add('img-pending');
    const reveal = () => {
      el.classList.remove('img-pending');
      el.classList.add('img-appear');
      el.addEventListener('animationend', () => el.classList.remove('img-appear'), { once: true });
    };
    el.addEventListener(isVideo ? 'loadeddata' : 'load', reveal, { once: true });
    el.addEventListener('error', () => el.classList.remove('img-pending'), { once: true });
  }
  window.fadeWhenLoaded = fadeWhenLoaded;
  document
    .querySelectorAll('.moodboard img, #poster-img-a')
    .forEach(fadeWhenLoaded);

  // ---- Teléfono: barra de arriba + menú hamburguesa que abre el menú a pantalla completa ----
  const mobileBar = document.createElement('div');
  mobileBar.className = 'mobile-bar';
  document.body.appendChild(mobileBar);

  // el degradé de abajo de la barra solo aparece cuando ya bajaste un poco
  function updateBarFade() {
    mobileBar.classList.toggle('is-scrolled', window.scrollY > 4);
  }
  updateBarFade();
  window.addEventListener('scroll', updateBarFade, { passive: true });

  const menuToggle = document.createElement('button');
  menuToggle.type = 'button';
  menuToggle.className = 'menu-toggle';
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.dataset.i18nAria = 'nav.open';
  menuToggle.innerHTML = '<span></span><span></span><span></span>'; // las 3 rayitas
  document.body.appendChild(menuToggle);

  // ---- Home: modelo 3D como una pieza más del collage (se arrastra como las demás y
  //      gira solo). Usa <model-viewer> de Google; solo se descarga en la home.
  //      Para cambiar el modelo: exportá un .glb desde Blender y cambiá esta ruta
  //      (y también la del <link rel="preload"> en el <head> de index.html). ----
  const MODELO_3D = 'assets/modelos/prueba.glb';
  const MODEL_VIEWER_JS = 'https://cdn.jsdelivr.net/npm/@google/model-viewer@4.0.0/dist/model-viewer.min.js';
  const piezaModelo = document.querySelector('.moodboard .modelo-3d');
  if (piezaModelo) {
    const lib = document.createElement('script');
    lib.type = 'module';
    lib.src = MODEL_VIEWER_JS;
    document.head.appendChild(lib);

    const viewer = document.createElement('model-viewer');
    viewer.setAttribute('src', MODELO_3D);
    viewer.setAttribute('alt', 'Modelo 3D');
    viewer.setAttribute('loading', 'eager'); // no espera a "verlo en pantalla" para cargarlo
    viewer.setAttribute('interaction-prompt', 'none');
    viewer.setAttribute('rotation-per-second', '40deg');
    viewer.setAttribute('shadow-intensity', '0');
    // sin camera-controls: arrastrar mueve la pieza por el collage, como las demás
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      viewer.setAttribute('auto-rotate', '');
      viewer.setAttribute('auto-rotate-delay', '0');
    }
    // sin la barra de carga gris que trae por defecto (el modelo aparece con un fundido)
    viewer.innerHTML = '<div slot="progress-bar"></div>';
    piezaModelo.appendChild(viewer);
  }

  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.dataset.i18nAria = open ? 'nav.close' : 'nav.open';
    menuToggle.setAttribute('aria-label', TRANSLATIONS[currentLang][menuToggle.dataset.i18nAria]);
  }

  menuToggle.addEventListener('click', () => {
    setMenu(!document.body.classList.contains('menu-open'));
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('menu-open')) setMenu(false);
  });
  // si se agranda la ventana a desktop con el menú abierto, lo cerramos
  window.matchMedia('(max-width: 768px)').addEventListener('change', (e) => {
    if (!e.matches) setMenu(false);
  });
  const contactTriggerMobile = document.getElementById('contact-trigger');
  if (contactTriggerMobile) {
    contactTriggerMobile.addEventListener('click', () => setMenu(false));
  }

  // ---- Teléfono: "Diseño" no navega, despliega sus subcategorías para elegir a cuál entrar ----
  const disenoLink = document.querySelector('.menu-item[data-i18n="nav.diseno"]');
  if (disenoLink) {
    const disenoLi = disenoLink.parentElement;
    let submenu = disenoLi.querySelector('.submenu');
    const isDisenoPage = !!submenu; // en Branding / Estampas / Posters ya viene en el HTML

    // en las demás páginas no existe: lo armamos (en desktop queda oculto)
    if (!submenu) {
      submenu = document.createElement('ul');
      submenu.className = 'submenu submenu--mobile-only';
      submenu.innerHTML = `
        <li><a href="diseno-branding.html" class="submenu-item submenu-branding" data-i18n="nav.branding">- Branding</a></li>
        <li><a href="diseno-estampas.html" class="submenu-item submenu-estampas" data-i18n="nav.estampas">- Estampas</a></li>
        <li><a href="diseno-posters.html" class="submenu-item submenu-posters" data-i18n="nav.posters">- Posters</a></li>
      `;
      disenoLi.appendChild(submenu);
    }

    // si estás dentro de Diseño, arranca abierto (es tu sección actual)
    disenoLi.classList.toggle('submenu-open', isDisenoPage);
    disenoLink.setAttribute('aria-expanded', String(isDisenoPage));

    // al cerrar: la misma cascada pero al revés (sube Posters, después Estampas,
    // después Branding) y recién cuando termina se oculta el submenu
    const CIERRE_MS = 680; // último delay (0.28s) + duración (0.4s), igual que en el CSS
    let alturaTimer = null;
    const sinMovimiento = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // el alto del submenu también se anima (a la par de la cascada), así Animación,
    // 3D y SobreMi se deslizan en vez de saltar cuando aparece/desaparece el espacio
    // (sin overflow: hidden a propósito: los ítems se desvanecen solos al entrar/salir;
    //  si se recortaran, se vería un corte en seco, como un rectángulo blanco)
    // curvas: al abrir el espacio se hace rápido (y después caen los ítems);
    // al cerrar se achica lento al principio (mientras los ítems se van) y acelera al final,
    // así los botones de abajo nunca se pisan con un ítem que todavía se ve
    const CURVA_ABRIR = 'cubic-bezier(0.22, 1, 0.36, 1)';
    const CURVA_CERRAR = 'cubic-bezier(0.64, 0, 0.78, 0)';

    function animarAltura(desde, hasta, curva, alTerminar) {
      clearTimeout(alturaTimer);
      submenu.style.transition = 'none';
      submenu.style.height = desde + 'px';
      void submenu.offsetHeight; // fija el alto inicial antes de arrancar la transición
      submenu.style.transition = `height ${CIERRE_MS}ms ${curva}`;
      submenu.style.height = hasta + 'px';
      alturaTimer = setTimeout(() => {
        submenu.style.removeProperty('transition');
        submenu.style.removeProperty('height');
        if (alTerminar) alTerminar();
      }, CIERRE_MS);
    }

    function abrirSubmenu() {
      const altoActual = submenu.offsetHeight; // 0 si estaba cerrado, o lo que quedaba si se estaba cerrando
      disenoLi.classList.remove('submenu-closing');
      disenoLi.classList.add('submenu-open');
      disenoLink.setAttribute('aria-expanded', 'true');
      if (sinMovimiento()) return;
      animarAltura(altoActual, submenu.scrollHeight, CURVA_ABRIR);
    }

    function cerrarSubmenu() {
      disenoLink.setAttribute('aria-expanded', 'false');
      if (sinMovimiento()) {
        disenoLi.classList.remove('submenu-open');
        return;
      }
      disenoLi.classList.add('submenu-closing');
      animarAltura(submenu.offsetHeight, 0, CURVA_CERRAR, () => {
        disenoLi.classList.remove('submenu-closing', 'submenu-open');
      });
    }

    disenoLink.addEventListener('click', (e) => {
      if (!window.matchMedia('(max-width: 768px)').matches) return; // en desktop sigue siendo un link
      e.preventDefault();
      // si lo cerrás y lo volvés a abrir a mano, ahí sí queremos la cascada
      document.documentElement.classList.remove('submenu-sin-animacion');
      const abierto = disenoLi.classList.contains('submenu-open') && !disenoLi.classList.contains('submenu-closing');
      if (abierto) cerrarSubmenu();
      else abrirSubmenu();
    });
  }

  applyLanguage(currentLang);

  // ---- Armamos el popup una sola vez y lo insertamos en el body ----
  const overlay = document.createElement('div');
  overlay.className = 'contact-overlay';
  overlay.id = 'contact-overlay';
  overlay.innerHTML = `
    <div class="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-title">
      <button type="button" class="contact-close" aria-label="Cerrar">&times;</button>
      <h2 id="contact-title" data-i18n="modal.title">Contacto</h2>
      <form class="contact-form" id="contact-form">
        <div>
          <label for="contact-name" data-i18n="modal.name">Nombre</label>
          <input type="text" id="contact-name" name="name" required>
        </div>
        <div>
          <label for="contact-email" data-i18n="modal.email">Email</label>
          <input type="email" id="contact-email" name="email" required>
        </div>
        <div>
          <label for="contact-message" data-i18n="modal.message">Mensaje</label>
          <textarea id="contact-message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit" class="contact-submit" data-i18n="modal.submit">Enviar</button>
        <p class="contact-success" id="contact-success" data-i18n="modal.success">¡Gracias! Tu mensaje fue enviado.</p>
      </form>
    </div>
  `;
  document.body.appendChild(overlay);

  // aplicamos el idioma actual también a lo que acabamos de insertar (el modal)
  applyLanguage(currentLang);

  // ---- Sobre mí: el título entra con efecto "scramble" (caracteres al azar que se
  //      acomodan en la palabra). Solo visual: el lector de pantalla lee el título real
  //      por el aria-label. La cascada de los párrafos está en el CSS. ----
  const sobremiTitle = document.querySelector('.sobremi-text h1');
  if (sobremiTitle && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const GLIFOS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#/%&*<>_';
    const DURACION = 600; // ms hasta que se acomoda la última letra
    const INICIO = 100;   // arranca junto con el fundido del título (animation-delay del CSS)
    const PASO = 45;      // cada cuánto cambian los caracteres (más bajo = más frenético)

    // el texto final se lee en cada cuadro: si cambiás de idioma en el medio, termina en el nuevo
    const textoFinal = () => TRANSLATIONS[currentLang]['sobremi.title'];
    const final = textoFinal();
    // cada letra se acomoda en su momento: de izquierda a derecha, con un poco de azar
    const momentos = [...final].map((_, i) => (i / final.length) * DURACION * 0.65 + Math.random() * DURACION * 0.35);
    const azar = () => GLIFOS[Math.floor(Math.random() * GLIFOS.length)];

    sobremiTitle.setAttribute('aria-label', final);
    let comienzo = null;
    let ultimoPaso = -Infinity;

    function cuadro(ts) {
      if (comienzo === null) comienzo = ts + INICIO;
      const t = ts - comienzo;
      const objetivo = textoFinal();
      if (t >= DURACION) {
        sobremiTitle.textContent = objetivo;
        sobremiTitle.removeAttribute('aria-label');
        return;
      }
      if (ts - ultimoPaso >= PASO) {
        ultimoPaso = ts;
        sobremiTitle.textContent = [...objetivo]
          .map((letra, i) => (letra === ' ' || t >= (momentos[i] ?? DURACION) ? letra : azar()))
          .join('');
      }
      requestAnimationFrame(cuadro);
    }
    requestAnimationFrame(cuadro);
  }

  const modal = overlay.querySelector('.contact-modal');
  const closeBtn = overlay.querySelector('.contact-close');
  const form = overlay.querySelector('#contact-form');
  const successMsg = overlay.querySelector('#contact-success');
  const trigger = document.getElementById('contact-trigger');

  function openModal() {
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    overlay.querySelector('#contact-name').focus();
  }

  function closeModal() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  // Abrir al tocar el botón CONTACTO
  if (trigger) {
    trigger.addEventListener('click', openModal);
  }

  // Cerrar con la X
  closeBtn.addEventListener('click', closeModal);

  // Cerrar tocando afuera del formulario
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  // Cerrar con la tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
      closeModal();
    }
  });

  // Envío del formulario
  // Conectado a Formspree: reemplazá TU_ENDPOINT por el que te da formspree.io
  // (Form → Settings → Endpoint), algo tipo "https://formspree.io/f/xxxxxxx"
  const FORM_ENDPOINT = 'https://formspree.io/f/xwvgjbrw';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('.contact-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = TRANSLATIONS[currentLang]['modal.sending'];

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        successMsg.textContent = TRANSLATIONS[currentLang]['modal.success'];
        successMsg.style.color = '#1a7a1a';
        successMsg.classList.add('is-visible');
        form.reset();
        setTimeout(() => {
          closeModal();
          successMsg.classList.remove('is-visible');
        }, 1800);
      } else {
        throw new Error('Respuesta no OK');
      }
    } catch (err) {
      successMsg.textContent = TRANSLATIONS[currentLang]['modal.error'];
      successMsg.style.color = '#c0392b';
      successMsg.classList.add('is-visible');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = TRANSLATIONS[currentLang]['modal.submit'];
    }
  });

  // ---- Moodboard: imágenes drageables dentro del contenedor (solo existe en la home) ----
  const moodboard = document.getElementById('moodboard');

  if (moodboard) {
    const items = moodboard.querySelectorAll('.draggable-img');

    // Posición inicial de cada imagen, usando los % guardados en data-x / data-y
    // + su rotación base (si tiene una, como el faro)
    // En el teléfono cada imagen puede tener su propia posición y tamaño
    // (data-mx, data-my, data-mw), porque el tablero es alto y angosto.
    const mobileQuery = window.matchMedia('(max-width: 768px)');
    function placeItems() {
      items.forEach((img) => {
        if (!img.dataset.dw) img.dataset.dw = img.style.width; // ancho de desktop, para poder volver
        const m = mobileQuery.matches && img.dataset.mx !== undefined;
        img.style.left = (m ? img.dataset.mx : img.dataset.x) + '%';
        img.style.top = (m ? img.dataset.my : img.dataset.y) + '%';
        img.style.width = m && img.dataset.mw ? img.dataset.mw + '%' : img.dataset.dw;
      });
    }
    placeItems();
    mobileQuery.addEventListener('change', placeItems);

    items.forEach((img) => {
      const baseRotation = parseFloat(img.dataset.rotation) || 0;
      img.style.transform = `rotate(${baseRotation}deg)`;
      img.style.setProperty('--base-rot', baseRotation + 'deg');

      if (img.classList.contains('idle-wiggle')) {
        startIdleWiggle(img);
      }
    });

    // ---- Wiggle idle: una inclinación sutil y constante, para darle vida
    //      a las imágenes aunque nadie las esté arrastrando ----
    function startIdleWiggle(img) {
      const base = parseFloat(img.dataset.rotation) || 0;
      const amplitude = parseFloat(img.dataset.wiggleAmplitude) || 2; // grados de inclinación máxima hacia cada lado
      const speed = 0.5 + Math.random() * 0.25; // variación por imagen, para que no laten sincronizadas
      const phase = Math.random() * Math.PI * 2;

      function loop(ts) {
        const suspendedUntil = img._idleSuspendUntil || 0;
        if (!img.classList.contains('is-dragging') && ts > suspendedUntil) {
          const offset = Math.sin((ts / 1000) * speed + phase) * amplitude;
          img.style.transform = `rotate(${base + offset}deg)`;
        }
        requestAnimationFrame(loop);
      }
      requestAnimationFrame(loop);
    }

    let activeImg = null;
    let startX = 0, startY = 0;
    let startLeftPx = 0, startTopPx = 0;
    let dragMoved = false;
    let lastMoveX = 0;

    const TILT_SENSIBILIDAD = 0.5; // qué tan fuerte se inclina por cada px de movimiento
    const TILT_MAX = 6; // grados máximos de inclinación

    function onPointerDown(e) {
      activeImg = e.currentTarget;
      dragMoved = false;
      lastMoveX = e.clientX;
      currentTilt = 0;
      activeImg.classList.add('is-dragging');
      activeImg.setPointerCapture(e.pointerId);

      const boardRect = moodboard.getBoundingClientRect();
      const imgRect = activeImg.getBoundingClientRect();

      startX = e.clientX;
      startY = e.clientY;
      startLeftPx = imgRect.left - boardRect.left;
      startTopPx = imgRect.top - boardRect.top;
    }

    let currentTilt = 0;

    function onPointerMove(e) {
      if (!activeImg) return;

      // si se movió más de unos pocos px, cuenta como arrastre (no como toque/click)
      if (Math.abs(e.clientX - startX) > 5 || Math.abs(e.clientY - startY) > 5) {
        dragMoved = true;
      }

      // wiggle: inclina la imagen según hacia qué lado se está moviendo el puntero,
      // sumado a su rotación base (si tiene una), suavizado con interpolación
      const baseRotation = parseFloat(activeImg.dataset.rotation) || 0;
      const deltaX = e.clientX - lastMoveX;
      lastMoveX = e.clientX;
      const targetTilt = Math.max(-TILT_MAX, Math.min(TILT_MAX, deltaX * TILT_SENSIBILIDAD));
      currentTilt += (targetTilt - currentTilt) * 0.15;
      activeImg.style.transform = `rotate(${baseRotation + currentTilt}deg)`;

      const boardRect = moodboard.getBoundingClientRect();
      const imgRect = activeImg.getBoundingClientRect();

      let newLeft = startLeftPx + (e.clientX - startX);
      let newTop = startTopPx + (e.clientY - startY);

      // límites: no dejar que la imagen salga del contenedor
      const maxLeft = boardRect.width - imgRect.width;
      const maxTop = boardRect.height - imgRect.height;

      newLeft = Math.max(0, Math.min(newLeft, maxLeft));
      newTop = Math.max(0, Math.min(newTop, maxTop));

      // guardamos en % para que se mantenga proporcional si cambia el tamaño de pantalla
      activeImg.style.left = (newLeft / boardRect.width) * 100 + '%';
      activeImg.style.top = (newTop / boardRect.height) * 100 + '%';
    }

    function onPointerUp() {
      if (activeImg) {
        activeImg.classList.remove('is-dragging');
        activeImg._idleSuspendUntil = performance.now() + 650; // deja que termine el transition de vuelta antes de que el wiggle idle retome
        const baseRotation = parseFloat(activeImg.dataset.rotation) || 0;
        activeImg.style.transform = `rotate(${baseRotation}deg)`; // vuelve a su inclinación base, con el transition suave del CSS
        // si NO se arrastró, fue un toque/click
        if (!dragMoved) {
          if (activeImg.classList.contains('flip-postcard')) {
            // el faro: da vuelta como una postal (eje Y), en vez de girar 360
            activeImg.classList.toggle('is-flipped');
          } else if (activeImg.classList.contains('opens-carousel')) {
            // las estampas: abre el carrusel de detalle en vez de girar
            openEstampaCarousel();
          } else if (!activeImg.classList.contains('no-spin')) {
            triggerSpin(activeImg);
          }
        }
      }
      activeImg = null;
    }

    function triggerSpin(img) {
      img.classList.remove('is-spinning');
      void img.offsetWidth; // fuerza reflow para poder reiniciar la animación
      img.classList.add('is-spinning');
    }

    // ---- Carrusel de detalle de Estampas: se abre al tocar cualquiera de las remeras ----
    // Un solo set de imágenes compartido entre todos los diseños (no uno por remera).
    const ESTAMPA_DETAIL_IMAGES = [
      'assets/estampas/detalle/detalle-1.webp',
      'assets/estampas/detalle/detalle-2.webp',
      'assets/estampas/detalle/detalle-3.webp',
      'assets/estampas/detalle/detalle-4.webp',
      'assets/estampas/detalle/detalle-5.webp',
      'assets/estampas/detalle/detalle-6.webp',
      'assets/estampas/detalle/detalle-7.webp',
      'assets/estampas/detalle/detalle-8.webp',
      'assets/estampas/detalle/detalle-9.webp',
      'assets/estampas/detalle/detalle-10.webp',
      'assets/estampas/detalle/detalle-11.webp',
      'assets/estampas/detalle/detalle-12.webp',
      'assets/estampas/detalle/detalle-13.webp',
      'assets/estampas/detalle/detalle-14.webp',
      'assets/estampas/detalle/detalle-15.webp',
      'assets/estampas/detalle/detalle-16.webp',
      'assets/estampas/detalle/detalle-17.webp',
      'assets/estampas/detalle/detalle-18.webp',
      'assets/estampas/detalle/detalle-19.webp'
    ];

    let estampaCarousel = null;

    function buildEstampaCarousel() {
      if (estampaCarousel) return; // se arma una sola vez

      let detailIndex = 0;
      let activeIdx = 0; // cuál de las dos imágenes está mostrando la actual
      let isAnimating = false;

      const el = document.createElement('div');
      el.className = 'poster-lightbox estampa-detail-lightbox';
      el.innerHTML = `
        <button type="button" class="poster-lightbox-close" aria-label="Cerrar">&times;</button>
        <div class="poster-lightbox-body">
          <button type="button" class="poster-lightbox-arrow estampa-detail-prev" aria-label="Anterior">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <div class="estampa-detail-frame">
            <img src="" alt="" class="estampa-detail-img" id="estampa-detail-img-a">
            <img src="" alt="" class="estampa-detail-img" id="estampa-detail-img-b">
          </div>
          <button type="button" class="poster-lightbox-arrow estampa-detail-next" aria-label="Siguiente">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      `;
      document.body.appendChild(el);

      const imgA = el.querySelector('#estampa-detail-img-a');
      const imgB = el.querySelector('#estampa-detail-img-b');
      const images = [imgA, imgB];
      const closeBtn = el.querySelector('.poster-lightbox-close');
      const prevBtn = el.querySelector('.estampa-detail-prev');
      const nextBtn = el.querySelector('.estampa-detail-next');

      // ---- Crossfade real: las dos imágenes quedan en el mismo lugar exacto,
      //      una se apaga mientras la otra aparece — sin ningún movimiento,
      //      así no se nota el cambio de tamaño entre mockups de proporción distinta ----
      function goTo(newIndex) {
        if (isAnimating) return;
        isAnimating = true;

        const current = images[activeIdx];
        const incoming = images[1 - activeIdx];

        incoming.style.transition = 'none';
        incoming.style.opacity = '0';
        incoming.src = ESTAMPA_DETAIL_IMAGES[newIndex];
        void incoming.offsetWidth; // fuerza reflow para que no se anime el estado inicial

        requestAnimationFrame(() => {
          current.style.transition = 'opacity 0.55s ease';
          incoming.style.transition = 'opacity 0.55s ease';
          current.style.opacity = '0';
          incoming.style.opacity = '1';
        });

        detailIndex = newIndex;
        activeIdx = 1 - activeIdx;

        setTimeout(() => { isAnimating = false; }, 550);
      }

      function open(startIndex) {
        detailIndex = startIndex || 0;
        activeIdx = 0;
        imgA.style.transition = 'none';
        imgB.style.transition = 'none';
        imgA.src = ESTAMPA_DETAIL_IMAGES[detailIndex];
        imgA.style.opacity = '1';
        imgB.src = '';
        imgB.style.opacity = '0';
        el.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      }

      function close() {
        el.classList.remove('is-open');
        document.body.style.overflow = '';
      }

      function next() {
        goTo((detailIndex + 1) % ESTAMPA_DETAIL_IMAGES.length);
      }

      function prev() {
        goTo((detailIndex - 1 + ESTAMPA_DETAIL_IMAGES.length) % ESTAMPA_DETAIL_IMAGES.length);
      }

      closeBtn.addEventListener('click', close);
      prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prev(); });
      nextBtn.addEventListener('click', (e) => { e.stopPropagation(); next(); });
      el.addEventListener('click', (e) => { if (e.target === el) close(); });

      document.addEventListener('keydown', (e) => {
        if (!el.classList.contains('is-open')) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowRight') next();
        if (e.key === 'ArrowLeft') prev();
      });

      // swipe táctil
      let touchStartX = 0;
      el.querySelector('.estampa-detail-frame').addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].clientX;
      }, { passive: true });
      el.querySelector('.estampa-detail-frame').addEventListener('touchend', (e) => {
        const deltaX = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(deltaX) < 50) return;
        deltaX < 0 ? next() : prev();
      }, { passive: true });

      estampaCarousel = { open };
    }

    function openEstampaCarousel() {
      buildEstampaCarousel();
      const randomIndex = Math.floor(Math.random() * ESTAMPA_DETAIL_IMAGES.length);
      estampaCarousel.open(randomIndex);
    }

    items.forEach((img) => {
      img.addEventListener('pointerdown', onPointerDown);
      img.addEventListener('animationend', () => img.classList.remove('is-spinning'));
    });
    moodboard.addEventListener('pointermove', onPointerMove);
    document.addEventListener('pointerup', onPointerUp);
  }

  // ---- Función genérica: arma un carrusel (2 imágenes + flechas) con lightbox ----
  // Se usa tanto para Posters como para Estampas (y cualquier galería futura del mismo tipo)
  function initCarouselGallery(idPrefix, total, folder, autoplayMs) {
    const imgA = document.getElementById(idPrefix + '-img-a');
    const imgB = document.getElementById(idPrefix + '-img-b');
    if (!imgA) return; // esta página no tiene esta galería

    let index = 1;
    const images = [imgA, imgB];
    let activeIdx = 0;
    let isAnimating = false;

    // Original en alta (para el zoom del lightbox)
    function srcOf(i) {
      return `assets/${folder}/${idPrefix}-${i}.jpg`;
    }

    // Versión liviana para el carrusel (assets/<carpeta>/chicos/<nombre>.webp).
    // Si un poster no tiene versión liviana, usa el original: con subir el .jpg alcanza.
    function smallSrcOf(i) {
      return `assets/${folder}/chicos/${idPrefix}-${i}.webp`;
    }

    function setCarouselSrc(img, i) {
      img.onerror = () => {
        img.onerror = null;
        img.src = srcOf(i);
      };
      img.src = smallSrcOf(i);
    }

    // Precarga el anterior y el siguiente, así al pasar ya están listos
    const preloaded = {};
    function preloadAround(i) {
      [i === total ? 1 : i + 1, i === 1 ? total : i - 1].forEach((n) => {
        if (preloaded[n]) return;
        preloaded[n] = true;
        const pre = new Image();
        pre.onerror = () => { pre.onerror = null; pre.src = srcOf(n); };
        pre.src = smallSrcOf(n);
      });
    }

    function goTo(newIndex, direction) {
      if (isAnimating) return;
      isAnimating = true;

      const current = images[activeIdx];
      const incoming = images[1 - activeIdx];
      const sign = direction === 'next' ? 1 : -1;

      incoming.style.transition = 'none';
      incoming.style.transform = `translateX(${sign * 100}%)`;
      setCarouselSrc(incoming, newIndex);
      incoming.alt = idPrefix + ' ' + newIndex;
      void incoming.offsetWidth;

      requestAnimationFrame(() => {
        current.style.transition = 'transform 0.4s ease';
        incoming.style.transition = 'transform 0.4s ease';
        current.style.transform = `translateX(${-sign * 100}%)`;
        incoming.style.transform = 'translateX(0)';
      });

      index = newIndex;
      activeIdx = 1 - activeIdx;
      preloadAround(index);

      if (lightboxImg && lightbox.classList.contains('is-open')) {
        setLightboxSrc(index);
        resetZoom();
      }

      setTimeout(() => { isAnimating = false; }, 400);
    }

    setCarouselSrc(imgA, 1);
    preloadAround(1);

    const prevBtn = document.getElementById(idPrefix + '-prev');
    const nextBtn = document.getElementById(idPrefix + '-next');
    const frame = imgA.closest('.poster-frame');

    // ---- Teléfono: en vez del carrusel, todos los pósters en una galería de scroll vertical.
    //      Se arma igual en desktop pero ahí el CSS la oculta. Son solo para ver: tocarlos no abre nada. ----
    const isMobile = () => window.matchMedia('(max-width: 768px)').matches;
    const mobileGallery = document.createElement('div');
    mobileGallery.className = 'poster-mobile-gallery';
    for (let i = 1; i <= total; i++) {
      const item = document.createElement('img');
      item.className = 'poster-mobile-item';
      item.alt = idPrefix + ' ' + i;
      item.loading = 'lazy'; // cargan a medida que bajás (antes del src, si no no aplica)
      item.decoding = 'async';
      setCarouselSrc(item, i);
      fadeWhenLoaded(item);
      mobileGallery.appendChild(item);
    }
    frame.parentElement.appendChild(mobileGallery);

    // ---- Teléfono: flechita "volver arriba", aparece cuando ya bajaste ~una pantalla ----
    const toTopBtn = document.createElement('button');
    toTopBtn.type = 'button';
    toTopBtn.className = 'to-top-button';
    toTopBtn.dataset.i18nAria = 'nav.top';
    toTopBtn.setAttribute('aria-label', TRANSLATIONS[currentLang]['nav.top']);
    toTopBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>';
    document.body.appendChild(toTopBtn);

    function updateToTop() {
      toTopBtn.classList.toggle('is-visible', isMobile() && window.scrollY > window.innerHeight * 0.8);
    }
    window.addEventListener('scroll', updateToTop, { passive: true });
    window.addEventListener('resize', updateToTop);

    toTopBtn.addEventListener('click', () => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
      goTo(index === 1 ? total : index - 1, 'prev');
      restartAutoplay();
    });

    nextBtn.addEventListener('click', () => {
      goTo(index === total ? 1 : index + 1, 'next');
      restartAutoplay();
    });

    // ---- Autoplay: avanza solo cada tantos ms, se pausa al pasar el mouse ----
    let autoplayTimer = null;
    let autoplayDisabled = false; // una vez que se abre el lightbox, se apaga para siempre

    function startAutoplay() {
      if (!autoplayMs || autoplayDisabled || isMobile()) return; // en el teléfono no hay carrusel
      stopAutoplay();
      autoplayTimer = setInterval(() => {
        goTo(index === total ? 1 : index + 1, 'next');
      }, autoplayMs);
    }

    function stopAutoplay() {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    }

    function restartAutoplay() {
      if (!autoplayMs) return;
      startAutoplay();
    }

    if (autoplayMs) {
      startAutoplay();
      if (frame) {
        frame.addEventListener('mouseenter', stopAutoplay);
        frame.addEventListener('mouseleave', startAutoplay);
      }
    }

    // ---- Lightbox propio de esta galería ----
    const lightbox = document.createElement('div');
    lightbox.className = 'poster-lightbox';
    lightbox.innerHTML = `
      <button type="button" class="poster-lightbox-close" aria-label="Cerrar">&times;</button>
      <div class="poster-lightbox-body">
        <button type="button" class="poster-lightbox-arrow poster-lightbox-arrow-prev" aria-label="Anterior">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <div class="poster-lightbox-scroll">
          <img src="" alt="" class="poster-lightbox-img" id="${idPrefix}-lightbox-img">
          <div class="poster-zoom-indicator" id="${idPrefix}-zoom-indicator">
            <span class="poster-zoom-level">100%</span>
            <button type="button" class="poster-zoom-reset" aria-label="Restablecer zoom">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
            </button>
          </div>
        </div>
        <button type="button" class="poster-lightbox-arrow poster-lightbox-arrow-next" aria-label="Siguiente">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('#' + idPrefix + '-lightbox-img');
    const lightboxScroll = lightbox.querySelector('.poster-lightbox-scroll');
    const lightboxClose = lightbox.querySelector('.poster-lightbox-close');
    const lightboxPrev = lightbox.querySelector('.poster-lightbox-arrow-prev');
    const lightboxNext = lightbox.querySelector('.poster-lightbox-arrow-next');
    const zoomIndicator = lightbox.querySelector('#' + idPrefix + '-zoom-indicator');
    const zoomLevelLabel = lightbox.querySelector('#' + idPrefix + '-zoom-indicator .poster-zoom-level');
    const zoomResetBtn = lightbox.querySelector('#' + idPrefix + '-zoom-indicator .poster-zoom-reset');

    // Muestra al instante la versión liviana (ya cargada en el carrusel/galería)
    // y la reemplaza por el original en alta apenas termina de bajar
    function setLightboxSrc(i) {
      setCarouselSrc(lightboxImg, i);
      const full = new Image();
      full.onload = () => {
        if (index === i) {
          lightboxImg.onerror = null;
          lightboxImg.src = full.src;
        }
      };
      full.src = srcOf(i);
    }

    lightboxPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      goTo(index === 1 ? total : index - 1, 'prev');
    });

    lightboxNext.addEventListener('click', (e) => {
      e.stopPropagation();
      goTo(index === total ? 1 : index + 1, 'next');
    });

    // ---- Zoom tipo "magnifier": escala la imagen con transform y el punto de anclaje
    //      sigue al cursor, así siempre ves ampliada la zona exacta donde apuntás ----
    const SCALE_MIN = 1;
    const SCALE_MAX = 4.5;
    const SCALE_STEP = 0.35;
    let scale = 1;

    function updateOrigin(e) {
      const rect = lightboxImg.getBoundingClientRect();
      const relX = Math.min(Math.max(((e.clientX - rect.left) / rect.width) * 100, 0), 100);
      const relY = Math.min(Math.max(((e.clientY - rect.top) / rect.height) * 100, 0), 100);
      lightboxImg.style.transformOrigin = `${relX}% ${relY}%`;
    }

    function applyScale() {
      lightboxImg.style.transform = scale > 1 ? `scale(${scale})` : '';
      lightboxImg.classList.toggle('is-zoomed', scale > 1);
      zoomIndicator.classList.toggle('is-visible', scale > 1);
      zoomLevelLabel.textContent = Math.round(scale * 100) + '%';
    }

    zoomResetBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      resetZoom();
    });

    function resetZoom() {
      scale = 1;
      lightboxImg.style.transformOrigin = 'center center';
      applyScale();
    }

    lightboxScroll.addEventListener('mousemove', updateOrigin);

    lightboxScroll.addEventListener('wheel', (e) => {
      if (!lightbox.classList.contains('is-open')) return;
      e.preventDefault();
      updateOrigin(e);
      scale += e.deltaY < 0 ? SCALE_STEP : -SCALE_STEP;
      scale = Math.max(SCALE_MIN, Math.min(SCALE_MAX, scale));
      applyScale();
    }, { passive: false });

    // clic sobre la imagen: si está zoomeada, reinicia; si no, hace un zoom rápido al punto tocado
    lightboxImg.addEventListener('click', (e) => {
      if (scale > 1) {
        resetZoom();
      } else {
        updateOrigin(e);
        scale = 2.5;
        applyScale();
      }
    });

    function openLightbox() {
      setLightboxSrc(index);
      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      autoplayDisabled = true; // se abrió el lightbox: el autoplay no vuelve a andar
      stopAutoplay();
      resetZoom();
    }

    function closeLightbox() {
      lightbox.classList.remove('is-open');
      document.body.style.overflow = '';
      resetZoom();
    }

    imgA.addEventListener('click', openLightbox);
    imgB.addEventListener('click', openLightbox);
    lightboxClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goTo(index === total ? 1 : index + 1, 'next');
      if (e.key === 'ArrowLeft') goTo(index === 1 ? total : index - 1, 'prev');
    });

    // ---- Swipe táctil: deslizar el dedo sobre la imagen del lightbox cambia de póster ----
    let touchStartX = 0;


    lightboxImg.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });

    lightboxImg.addEventListener('touchend', (e) => {
      const deltaX = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(deltaX) < 50) return; // swipe muy corto, lo ignoramos
      if (deltaX < 0) {
        goTo(index === total ? 1 : index + 1, 'next');
      } else {
        goTo(index === 1 ? total : index - 1, 'prev');
      }
    }, { passive: true });
  }

  initCarouselGallery('poster', 9, 'posters', 4000);

  // ============================
  // BRANDING: tarjetas drageables que se dan vuelta + visor de proyecto
  // ============================
  // Cuántas imágenes tiene cada proyecto. Las imágenes van en
  // assets/branding/<proyecto>/<proyecto>-1.jpg, -2.jpg, etc.
  // Para agregar una imagen: subila con el número siguiente y sumá 1 acá.
  const BRANDING_PROJECTS = {
    obsolet: 3,
    benzaiten: 3,
    karamelo: 3,
  };

  const brandingBoard = document.getElementById('branding-board');

  if (brandingBoard) {
    const cards = brandingBoard.querySelectorAll('.brand-card');
    const isMobile = () => window.matchMedia('(max-width: 768px)').matches;
    let topZ = 10;

    cards.forEach((card) => {
      const rot = parseFloat(card.dataset.rotation) || 0;
      card.style.left = card.dataset.x + '%';
      card.style.top = card.dataset.y + '%';
      card.style.transform = `rotate(${rot}deg)`;
    });

    // ---- Máquina de escribir: al dar vuelta una tarjeta, la descripción del dorso
    //      se escribe letra por letra (cada vez que la das vuelta) ----
    const TIPEO_ESPERA = 320;   // ms: arranca cuando el dorso ya se ve (el giro dura 0.7s, a la mitad ya se ve)
    const TIPEO_TOTAL = 1300;   // ms aprox. que tarda en escribirse una descripción entera
    const tipeos = new WeakMap(); // timer en curso de cada tarjeta

    function textoDescripcion(desc) {
      return TRANSLATIONS[currentLang][desc.dataset.i18n] || '';
    }

    function cancelarTipeo(card) {
      const desc = card.querySelector('.brand-card-desc');
      if (!desc) return;
      clearTimeout(tipeos.get(card));
      desc.classList.remove('is-typing');
      desc.textContent = textoDescripcion(desc); // queda completa (por si cambió el idioma)
    }

    function escribirDescripcion(card) {
      const desc = card.querySelector('.brand-card-desc');
      if (!desc) return;
      cancelarTipeo(card);
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return; // aparece directo

      const msPorLetra = Math.min(30, Math.max(10, TIPEO_TOTAL / textoDescripcion(desc).length));
      let n = 0;
      desc.textContent = '';
      desc.classList.add('is-typing'); // muestra el cursor parpadeando

      const tecla = () => {
        const texto = textoDescripcion(desc); // se lee cada vez: si cambiás de idioma, sigue en el nuevo
        n++;
        desc.textContent = texto.slice(0, n);
        if (n >= texto.length) {
          // el cursor parpadea un ratito más y se va
          tipeos.set(card, setTimeout(() => desc.classList.remove('is-typing'), 900));
          return;
        }
        // ritmo irregular, como una máquina real, y una pausa después de cada puntuación
        const pausa = /[.,:;]/.test(texto[n - 1]) ? msPorLetra * 6 : msPorLetra * (0.6 + Math.random() * 0.8);
        tipeos.set(card, setTimeout(tecla, pausa));
      };
      tipeos.set(card, setTimeout(tecla, TIPEO_ESPERA));
    }

    function flip(card) {
      card.classList.toggle('is-flipped');
      const flipped = card.classList.contains('is-flipped');
      // solo el botón VIEW de la cara visible queda accesible con Tab
      card.querySelector('.brand-card-front .brand-card-view').tabIndex = flipped ? -1 : 0;
      card.querySelector('.brand-card-back .brand-card-view').tabIndex = flipped ? 0 : -1;
      if (flipped) escribirDescripcion(card);
      else cancelarTipeo(card);
    }

    let active = null;
    let startX = 0, startY = 0, startLeft = 0, startTop = 0;
    let moved = false, lastX = 0, tilt = 0;

    cards.forEach((card) => {
      card.addEventListener('pointerdown', (e) => {
        if (e.target.closest('.brand-card-view')) return; // el botón VIEW no arrastra
        if (e.button !== 0) return;
        active = card;
        moved = false;
        tilt = 0;
        startX = lastX = e.clientX;
        startY = e.clientY;

        if (!isMobile()) {
          // offsetLeft/Top ignoran la rotación, así la tarjeta no "salta" al agarrarla
          startLeft = card.offsetLeft;
          startTop = card.offsetTop;
          card.setPointerCapture(e.pointerId);
          card.classList.add('is-dragging');
          card.style.zIndex = ++topZ; // la que agarrás queda arriba de las demás
        }
      });

      card.addEventListener('pointermove', (e) => {
        if (active !== card) return;
        if (Math.abs(e.clientX - startX) > 5 || Math.abs(e.clientY - startY) > 5) moved = true;
        if (isMobile() || !moved) return;

        const rot = parseFloat(card.dataset.rotation) || 0;
        const dx = e.clientX - lastX;
        lastX = e.clientX;
        tilt += (Math.max(-6, Math.min(6, dx * 0.5)) - tilt) * 0.15;
        card.style.transform = `rotate(${rot + tilt}deg)`;

        const boardW = brandingBoard.clientWidth;
        const boardH = brandingBoard.clientHeight;
        let left = startLeft + (e.clientX - startX);
        let top = startTop + (e.clientY - startY);
        left = Math.max(0, Math.min(left, boardW - card.offsetWidth));
        top = Math.max(0, Math.min(top, boardH - card.offsetHeight));
        card.style.left = (left / boardW) * 100 + '%';
        card.style.top = (top / boardH) * 100 + '%';
      });

      const end = () => {
        if (active !== card) return;
        card.classList.remove('is-dragging');
        card.style.transform = `rotate(${parseFloat(card.dataset.rotation) || 0}deg)`;
        if (!moved) flip(card); // fue un click, no un arrastre
        active = null;
      };
      card.addEventListener('pointerup', end);
      card.addEventListener('pointercancel', () => { moved = true; end(); });

      // teclado: Enter o Espacio sobre la tarjeta la da vuelta
      card.addEventListener('keydown', (e) => {
        if (e.target !== card) return;
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          flip(card);
        }
      });
    });

    // ---- Visor: pantalla completa con las imágenes del proyecto una debajo de otra ----
    const viewer = document.createElement('div');
    viewer.className = 'brand-viewer';
    viewer.setAttribute('role', 'dialog');
    viewer.setAttribute('aria-modal', 'true');
    viewer.innerHTML = `
      <button type="button" class="brand-viewer-close" aria-label="Cerrar">&times;</button>
      <div class="brand-viewer-scroll"></div>
    `;
    document.body.appendChild(viewer);

    const viewerScroll = viewer.querySelector('.brand-viewer-scroll');
    const viewerClose = viewer.querySelector('.brand-viewer-close');
    let lastFocus = null;

    function openViewer(project) {
      const total = BRANDING_PROJECTS[project] || 0;
      viewerScroll.innerHTML = '';
      for (let i = 1; i <= total; i++) {
        const img = document.createElement('img');
        img.src = `assets/branding/${project}/${project}-${i}.jpg`;
        img.alt = `${project} ${i}`;
        img.loading = i === 1 ? 'eager' : 'lazy';
        viewerScroll.appendChild(img);
        fadeWhenLoaded(img);
      }
      viewerScroll.scrollTop = 0;
      lastFocus = document.activeElement;
      viewer.classList.add('is-open');
      document.body.classList.add('viewer-open');
      viewerClose.focus();
    }

    function closeViewer() {
      viewer.classList.remove('is-open');
      document.body.classList.remove('viewer-open');
      if (lastFocus) lastFocus.focus();
    }

    brandingBoard.querySelectorAll('.brand-card-view').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openViewer(btn.dataset.project);
      });
    });

    viewerClose.addEventListener('click', closeViewer);
    // click en el fondo oscuro (fuera de las imágenes) cierra
    viewer.addEventListener('click', (e) => {
      if (e.target === viewer) closeViewer();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && viewer.classList.contains('is-open')) closeViewer();
    });
  }

});
