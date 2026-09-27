// ============================
// TRADUCCIÓN ES / EN
// ============================
const TRANSLATIONS = {
  es: {
    'nav.skip': 'Saltar al contenido',
    'nav.volver': '← Volver',
    'titulo.inicio': 'Lautaro Saez — Portfolio',
    'titulo.diseno': 'Diseño',
    'titulo.estampas': 'Estampas',
    'titulo.posters': 'Posters',
    'titulo.branding': 'Branding',
    'titulo.modelado': '3D + Motion Graphics',
    'home.postal': 'Postal del faro: dar vuelta',
    'estampas.ver': 'Ver las estampas en detalle',
    'posters.ver': 'Ver el póster en grande',
    'posters.pausar': 'Pausar el carrusel',
    'posters.reanudar': 'Reanudar el carrusel',
    'branding.obsolet.aria': 'Obsolet: dar vuelta para ver la descripción',
    'branding.benzaiten.aria': 'Benzaiten: dar vuelta para ver la descripción',
    'branding.karamelo.aria': 'Karamelo: dar vuelta para ver la descripción',

    'nav.menu': 'Menu',
    'nav.diseno': 'Diseño',
    'nav.modelado': '3D + Motion Graphics',
    'nav.sobremi': 'SobreMi',
    'nav.branding': '- Branding',
    'nav.estampas': '- Estampas',
    'nav.posters': '- Posters',
    'hub.branding': 'BRANDING',
    'hub.estampas': 'ESTAMPAS',
    'hub.posters': 'POSTERS',
    'hub.enter': '> ENTRAR',
    'hub.hint': 'Elegí una categoría',
    'contact.button': 'CONTACTO',
    'estampa.hint': 'Click para ver en detalle',
    'piezas.reacomodar': '↺ Reacomodar',
    'pieza.para': 'Para',
    'pieza.personal': 'Proyecto personal',
    'pieza.personales': 'Proyectos personales',
    'pieza.verMarca': 'Ver la marca (se abre en otra pestaña)',
    'branding.hint': 'Arrastrá las tarjetas y hacé click para darlas vuelta',
    'branding.view': 'VER',
    'branding.hint.mobile': 'Tocá una tarjeta para darla vuelta',
    'nav.open': 'Abrir menú',
    'nav.close': 'Cerrar menú',
    'nav.top': 'Volver arriba',
    'branding.obsolet.desc': 'Mi marca de ropa independiente. Me encargo de todo: identidad, diseño de prendas y estampas, producción, logística y redes.',
    'branding.benzaiten.desc': 'Identidad visual para un spa y centro de bienestar. [Reemplazá este texto con la descripción del proyecto.]',
    'branding.karamelo.desc': 'Trabajo freelance para una marca de ropa: diseño de estampas, packaging, redes sociales y branding.',
    'reels.anterior': 'Reel anterior',
    'reels.siguiente': 'Reel siguiente',
    'sobremi.title': 'SobreMi',
    'sobremi.p1': 'Soy Lautaro Saez, diseñador gráfico, animador y artista 3D. Formé mi mirada a través del estudio formal del diseño, pero encontré mi voz en el cruce entre lo prolijo y lo experimental: un balance entre composiciones limpias y texturas crudas que rompen la perfección. Cada proyecto es una excusa para probar algo nuevo, ya sea en una pieza gráfica, una animación o una escena 3D.',
    'sobremi.p2': 'Trabajo principalmente con Illustrator, Blender y After Effects, moviéndome libremente entre el diseño 2D y el 3D según lo que pida cada idea.',
    'modal.title': 'Contacto',
    'modal.name': 'Nombre',
    'modal.email': 'Email',
    'modal.message': 'Mensaje',
    'modal.submit': 'Enviar',
    'modal.sending': 'Enviando…',
    'modal.success': '¡Gracias! Tu mensaje fue enviado.',
    'modal.error': 'Hubo un error. Probá de nuevo o escribime directamente por email.'
  },
  en: {
    'nav.skip': 'Skip to content',
    'nav.volver': '← Back',
    'titulo.inicio': 'Lautaro Saez — Portfolio',
    'titulo.diseno': 'Design',
    'titulo.estampas': 'Prints',
    'titulo.posters': 'Posters',
    'titulo.branding': 'Branding',
    'titulo.modelado': '3D + Motion Graphics',
    'home.postal': 'Lighthouse postcard: flip it',
    'estampas.ver': 'See the prints in detail',
    'posters.ver': 'See the poster full size',
    'posters.pausar': 'Pause the slideshow',
    'posters.reanudar': 'Resume the slideshow',
    'branding.obsolet.aria': 'Obsolet: flip to see the description',
    'branding.benzaiten.aria': 'Benzaiten: flip to see the description',
    'branding.karamelo.aria': 'Karamelo: flip to see the description',

    'nav.menu': 'Menu',
    'nav.diseno': 'Design',
    'nav.modelado': '3D + Motion Graphics',
    'nav.sobremi': 'AboutMe',
    'nav.branding': '- Branding',
    'nav.estampas': '- Prints',
    'nav.posters': '- Posters',
    'hub.branding': 'BRANDING',
    'hub.estampas': 'PRINTS',
    'hub.posters': 'POSTERS',
    'hub.enter': '> ENTER',
    'hub.hint': 'Pick a category',
    'contact.button': 'CONTACT',
    'estampa.hint': 'Click to see in detail',
    'piezas.reacomodar': '↺ Reset',
    'pieza.para': 'For',
    'pieza.personal': 'Personal project',
    'pieza.personales': 'Personal projects',
    'pieza.verMarca': 'See the brand (opens in a new tab)',
    'branding.hint': 'Drag the cards around and click to flip them',
    'branding.view': 'VIEW',
    'branding.hint.mobile': 'Tap a card to flip it',
    'nav.open': 'Open menu',
    'nav.close': 'Close menu',
    'nav.top': 'Back to top',
    'branding.obsolet.desc': 'My independent clothing brand. I handle everything: identity, garment and print design, production, logistics and social media.',
    'branding.benzaiten.desc': 'Visual identity for a spa and wellness center. [Replace this text with the project description.]',
    'branding.karamelo.desc': 'Freelance work for a clothing brand: print design, packaging, social media and branding.',
    'reels.anterior': 'Previous reel',
    'reels.siguiente': 'Next reel',
    'sobremi.title': 'About Me',
    'sobremi.p1': "I'm Lautaro Saez, a graphic designer, animator and 3D artist. I built my eye through formal design training, but found my voice at the crossroads between polished and experimental: a balance between clean compositions and raw textures that break the perfection. Every project is a chance to try something new, whether it's a graphic piece, an animation, or a 3D scene.",
    'sobremi.p2': 'I mainly work with Illustrator, Blender and After Effects, moving freely between 2D and 3D design depending on what each idea calls for.',
    'modal.title': 'Contact',
    'modal.name': 'Name',
    'modal.email': 'Email',
    'modal.message': 'Message',
    'modal.submit': 'Send',
    'modal.sending': 'Sending…',
    'modal.success': 'Thanks! Your message was sent.',
    'modal.error': 'Something went wrong. Try again or email me directly.'
  }
};

// idioma: el que elegiste con el botón; si nunca lo tocaste, el primero de tu navegador
// que sea español o inglés (si no es ninguno de los dos, español)
function idiomaDelNavegador() {
  const idiomas = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'es'];
  const encontrado = idiomas.map((l) => l.slice(0, 2).toLowerCase()).find((l) => l === 'es' || l === 'en');
  return encontrado || 'es';
}

let currentLang = localStorage.getItem('lang') || idiomaDelNavegador();

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
    // "ES / EN": el actual en negro, el otro en gris (como el ítem activo del menú)
    toggleBtn.innerHTML = ['es', 'en']
      .map((l) => `<span${l === lang ? ' class="is-active"' : ''}>${l.toUpperCase()}</span>`)
      .join(' / ');
  }

  // textos armados por script.js (ej: el contexto de cada pieza): se vuelven a pintar
  document.querySelectorAll('.pieza-contexto').forEach((el) => pintarContexto(el, el._pieza));
}

// ============================
// CONTEXTO DE CADA PIEZA (Estampas y Posters)
// Una línea debajo de la imagen: en el visor de la computadora y en la galería del celular.
// El orden es el de los archivos: estampas → detalle-1, detalle-2…; posters → poster-1, poster-2…
// Cada pieza puede ser:
//   { tipo: 'marca', nombre: 'KRML', url: 'https://instagram.com/...' }  → "Para KRML ↗" (link a la marca)
//   { tipo: 'marca', nombre: 'KRML' }                                     → "Para KRML" (sin link)
//   { tipo: 'personal' }                                                  → "Proyecto personal"
//   { tipo: 'personal', nota: { es: 'Marca ficticia', en: 'Fictional brand' } }
//                                                                         → "Proyecto personal · Marca ficticia"
//   null                                                                  → no muestra nada
// La nota también sirve en las piezas de marca (ej: { es: 'Colección 2024', en: '2024 collection' }).
// ============================
// Marcas y tipos que se repiten
const OBSOLET = { tipo: 'marca', nombre: 'Obsolet', url: 'https://www.instagram.com/oobsolet' };
const KARAMELO = { tipo: 'marca', nombre: 'Karamelo', url: 'https://www.instagram.com/elsimbolodekaramelo/' };
const FICTICIA = { tipo: 'personal', nota: { es: 'Marca ficticia', en: 'Fictional brand' } };
const PERSONAL = { tipo: 'personal' };

const CONTEXTO_PIEZAS = {
  estampas: [
    /* detalle-1  */ OBSOLET,
    /* detalle-2  */ OBSOLET,
    /* detalle-3  */ FICTICIA,
    /* detalle-4  */ OBSOLET,
    /* detalle-5  */ OBSOLET,
    /* detalle-6  */ OBSOLET,
    /* detalle-7  */ FICTICIA,
    /* detalle-8  */ FICTICIA,
    /* detalle-9  */ FICTICIA,
    /* detalle-10 */ FICTICIA,
    /* detalle-11 */ OBSOLET,
    /* detalle-12 */ OBSOLET,
    /* detalle-13 */ OBSOLET,
    /* detalle-14 */ KARAMELO,
    /* detalle-15 */ OBSOLET,
    /* detalle-16 */ KARAMELO,
    /* detalle-17 */ OBSOLET,
    /* detalle-18 */ FICTICIA,
    /* detalle-19 */ OBSOLET,
  ],
  posters: [
    /* poster-1 */ PERSONAL,
    /* poster-2 */ PERSONAL,
    /* poster-3 */ PERSONAL,
    /* poster-4 */ PERSONAL,
    /* poster-5 */ PERSONAL,
    /* poster-6 */ PERSONAL,
    /* poster-7 */ PERSONAL,
    /* poster-8 */ PERSONAL,
    /* poster-9 */ PERSONAL,
  ],
};

// Escribe en `el` la línea de contexto de una pieza (o la deja vacía si no tiene datos)
//   plural: true → para el encabezado que resume a toda una galería ("Proyectos personales")
// En los visores, la leyenda aparece con un fundido corto al cambiar de pieza, a la par de la imagen
// (solo opacidad: el texto se lee enseguida, y sirve igual con "reducir movimiento")
function aparecerLeyenda(el) {
  el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 150, easing: 'cubic-bezier(0.23, 1, 0.32, 1)' });
}

function pintarContexto(el, pieza, plural = el._plural) {
  el._pieza = pieza; // se guarda para volver a pintarla si cambia el idioma
  el._plural = plural;
  el.textContent = '';
  if (!pieza) return;
  const t = TRANSLATIONS[currentLang];

  if (pieza.tipo === 'marca') {
    el.append(t['pieza.para'] + ' ');
    if (pieza.url) {
      const link = document.createElement('a');
      link.href = pieza.url;
      link.target = '_blank';
      link.rel = 'noopener';
      link.title = t['pieza.verMarca'];
      link.setAttribute('translate', 'no'); // el traductor del navegador no cambia el nombre de la marca
      link.textContent = pieza.nombre + ' ↗';
      el.append(link);
    } else {
      const nombre = document.createElement('strong');
      nombre.setAttribute('translate', 'no');
      nombre.textContent = pieza.nombre;
      el.append(nombre);
    }
  } else {
    el.append(t[plural ? 'pieza.personales' : 'pieza.personal']);
  }

  if (pieza.nota) {
    const nota = typeof pieza.nota === 'string' ? pieza.nota : pieza.nota[currentLang] || pieza.nota.es;
    el.append(' · ' + nota);
  }
}

// ---- Submenu de Diseño: si venís de otra página de Diseño (ej: Branding → Estampas),
//      el submenu ya estaba desplegado, así que aparece directo, sin volver a animarse.
//      Corre antes de DOMContentLoaded para que la animación no llegue a arrancar. ----
const esPaginaDiseno = /\/diseno(-[\w-]+)?\.html$/.test(location.pathname); // hub (diseno.html) + categorías
try {
  // primero leemos cuál fue la página anterior y enseguida anotamos esta.
  // (no se usa 'pagehide': con la transición entre páginas, Chrome lo dispara
  //  después de que la página nueva ya leyó el dato, y llegaba tarde)
  const veniaDeDiseno = sessionStorage.getItem('veniaDeDiseno') === '1';
  sessionStorage.setItem('veniaDeDiseno', esPaginaDiseno ? '1' : '0');
  if (esPaginaDiseno && veniaDeDiseno) {
    document.documentElement.classList.add('submenu-sin-animacion');
  }
} catch (e) {
  // sin sessionStorage (modo privado estricto): simplemente se anima siempre, como antes
}

// ============================
// FÍSICA DE GESTOS (a la Apple): lo que agarrás sigue al dedo 1:1, al soltarlo
// conserva la velocidad que traía, sigue de largo por inercia, los bordes
// ceden como una goma en vez de frenar en seco, y se puede volver a agarrar
// en pleno movimiento. Lo usan el tablero (home y Estampas), las tarjetas de
// Branding y el swipe de los visores de imágenes.
// ============================
function isMobile() {
  return window.matchMedia('(max-width: 768px)').matches;
}

function prefiereMenosMovimiento() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Resorte en una dimensión, con los dos parámetros que usa Apple:
//   respuesta     → cuánto tarda (aprox.) en llegar, en segundos. Más bajo = más ágil
//   amortiguacion → 1 = llega sin pasarse; menos de 1 = se pasa un poco y rebota
// No tiene duración fija: arranca desde donde está y con la velocidad que traía,
// por eso se puede interrumpir en cualquier momento sin saltos.
//   terminarEn → opcional: corta apenas pasa ese valor, sin esperar a que se asiente
//                (para lo que sale de pantalla: no tiene sentido frenarlo donde nadie lo ve)
function resorte({ desde, hasta, velocidad = 0, respuesta = 0.4, amortiguacion = 1, precision = 0.5, terminarEn, alCambiar, alTerminar }) {
  const rigidez = Math.pow((2 * Math.PI) / respuesta, 2);
  const friccion = (4 * Math.PI * amortiguacion) / respuesta;
  let x = desde;
  let v = velocidad;
  let anterior = null;
  let id = requestAnimationFrame(paso);

  function paso(ts) {
    const dt = anterior === null ? 0 : Math.min((ts - anterior) / 1000, 0.064);
    anterior = ts;
    const pasos = Math.ceil(dt / 0.004); // pasitos de 4ms: estable aunque un cuadro llegue tarde
    for (let i = 0; i < pasos; i++) {
      const h = dt / pasos;
      v += (-rigidez * (x - hasta) - friccion * v) * h;
      x += v * h;
    }
    const cruzo = terminarEn !== undefined && (hasta > desde ? x >= terminarEn : x <= terminarEn);
    if (cruzo || (Math.abs(x - hasta) < precision && Math.abs(v) < 20)) {
      alCambiar(cruzo ? x : hasta);
      if (alTerminar) alTerminar(v);
      return;
    }
    alCambiar(x);
    id = requestAnimationFrame(paso);
  }

  return {
    parar() {
      cancelAnimationFrame(id);
      return x;
    },
  };
}

// Velocidad del dedo (px/s), medida sobre los últimos ~100ms del gesto
function crearRastreador() {
  let muestras = [];
  return {
    reiniciar() {
      muestras = [];
    },
    agregar(x, y) {
      const t = performance.now();
      muestras.push({ x, y, t });
      while (muestras.length > 2 && t - muestras[0].t > 100) muestras.shift();
    },
    velocidad() {
      const ahora = performance.now();
      if (muestras.length < 2 || ahora - muestras[muestras.length - 1].t > 80) return { x: 0, y: 0 }; // el dedo ya estaba quieto
      const a = muestras[0];
      const b = muestras[muestras.length - 1];
      const dt = (b.t - a.t) / 1000;
      if (dt <= 0) return { x: 0, y: 0 };
      const tope = (n) => Math.max(-4000, Math.min(4000, n));
      return { x: tope((b.x - a.x) / dt), y: tope((b.y - a.y) / dt) };
    },
  };
}

// Hasta dónde llegaría algo lanzado a esa velocidad (la misma cuenta que usa iOS
// para el scroll). 0.99 frena antes que un scroll normal: las piezas pesan más
function proyectar(velocidad, desaceleracion = 0.99) {
  return ((velocidad / 1000) * desaceleracion) / (1 - desaceleracion);
}

// Goma: cuanto más te pasás del borde, menos te sigue
function gomaElastica(exceso, dimension, constante = 0.55) {
  return (exceso * dimension * constante) / (dimension + constante * Math.abs(exceso));
}

function limitar(valor, min, max) {
  return Math.max(min, Math.min(max, valor));
}

function conBordeElastico(valor, min, max, dimension) {
  if (prefiereMenosMovimiento()) return limitar(valor, min, max);
  if (valor < min) return min - gomaElastica(min - valor, dimension);
  if (valor > max) return max + gomaElastica(valor - max, dimension);
  return valor;
}

// ---- Piezas arrastrables dentro de un tablero ----
// Mientras arrastrás se mueve con `translate` (no toca el layout); al terminar,
// la posición se guarda en left/top en %, así sigue siendo proporcional si cambia la pantalla.
//   contenedor : el tablero (define los bordes)
//   habilitado : () => false para no arrastrar (ej: en el teléfono), pero seguir detectando toques
//   ignorar    : (evento) => true para no agarrar (ej: tocaste un botón adentro)
//   alAgarrar / alInclinar(grados) / alSoltar({ movio }) : lo propio de cada tablero
// ---- Botón "reacomodar": devuelve las piezas arrastradas a su lugar original, deslizándose.
//      Aparece recién cuando moviste alguna. `restaurar` vuelve a poner sus left/top originales.
//      Devuelve una función para avisar "se movió una pieza" (la llama cada tablero al soltar) ----
function crearBotonReacomodar(piezas, restaurar) {
  const boton = document.createElement('button');
  boton.type = 'button';
  boton.className = 'reacomodar';
  boton.dataset.i18n = 'piezas.reacomodar';
  boton.textContent = TRANSLATIONS[currentLang]['piezas.reacomodar'];
  document.body.appendChild(boton);

  boton.addEventListener('click', () => {
    const antes = piezas.map((p) => p.getBoundingClientRect());
    restaurar();
    if (!prefiereMenosMovimiento()) {
      // cada pieza sale de donde estaba y viaja a su lugar (el cambio real ya está hecho)
      piezas.forEach((p, i) => {
        const r = p.getBoundingClientRect();
        const dx = antes[i].left - r.left;
        const dy = antes[i].top - r.top;
        if (!dx && !dy) return;
        p.animate([{ translate: `${dx}px ${dy}px` }, { translate: '0 0' }], {
          duration: 500,
          easing: 'cubic-bezier(0.77, 0, 0.175, 1)', // --ease-in-out: movimiento en pantalla
        });
      });
    }
    boton.classList.remove('is-visible');
  });

  return () => boton.classList.add('is-visible');
}

function seguirYSoltar(el, { contenedor, habilitado = () => true, ignorar = () => false, alAgarrar, alInclinar, alSoltar }) {
  const rastreador = crearRastreador();
  let activo = false;
  let arrastra = false;
  let movio = false;
  let inicioX = 0, inicioY = 0, ultimoX = 0;
  let baseLeft = 0, baseTop = 0;
  let tx = 0, ty = 0; // corrimiento actual respecto de left/top
  let inclinacion = 0;
  let inercia = null;

  const limites = () => ({
    maxX: contenedor.clientWidth - el.offsetWidth,
    maxY: contenedor.clientHeight - el.offsetHeight,
  });

  function pintar() {
    el.style.translate = `${tx}px ${ty}px`;
  }

  function fijar() {
    el.style.left = ((baseLeft + tx) / contenedor.clientWidth) * 100 + '%';
    el.style.top = ((baseTop + ty) / contenedor.clientHeight) * 100 + '%';
    tx = ty = 0;
    el.style.translate = '';
  }

  function frenarInercia() {
    if (!inercia) return;
    inercia.forEach((r) => r.parar());
    inercia = null;
    fijar();
  }

  el.addEventListener('pointerdown', (e) => {
    if (e.button !== 0 || ignorar(e)) return;
    const atrapada = !!inercia;
    frenarInercia(); // la agarraste en pleno vuelo: queda donde está y sigue al dedo
    activo = true;
    movio = atrapada; // atraparla no cuenta como toque (no la da vuelta ni la hace girar)
    arrastra = habilitado();
    inclinacion = 0;
    inicioX = ultimoX = e.clientX;
    inicioY = e.clientY;
    baseLeft = el.offsetLeft; // offsetLeft/Top ignoran la rotación: la pieza no salta al agarrarla
    baseTop = el.offsetTop;
    rastreador.reiniciar();
    rastreador.agregar(e.clientX, e.clientY);
    if (arrastra) {
      el.setPointerCapture(e.pointerId);
      if (alAgarrar) alAgarrar();
    }
  });

  el.addEventListener('pointermove', (e) => {
    if (!activo) return;
    // si se movió más de unos pocos px, cuenta como arrastre (no como toque/click)
    if (Math.abs(e.clientX - inicioX) > 5 || Math.abs(e.clientY - inicioY) > 5) movio = true;
    if (!arrastra || !movio) return;
    rastreador.agregar(e.clientX, e.clientY);

    // se inclina hacia el lado al que la llevás, suavizado
    const dx = e.clientX - ultimoX;
    ultimoX = e.clientX;
    inclinacion += (limitar(dx * 0.5, -6, 6) - inclinacion) * 0.15;
    if (alInclinar) alInclinar(inclinacion);

    const { maxX, maxY } = limites();
    tx = conBordeElastico(baseLeft + e.clientX - inicioX, 0, maxX, contenedor.clientWidth) - baseLeft;
    ty = conBordeElastico(baseTop + e.clientY - inicioY, 0, maxY, contenedor.clientHeight) - baseTop;
    pintar();
  });

  function soltar(cancelado) {
    if (!activo) return;
    activo = false;
    if (cancelado) movio = true;
    if (alSoltar) alSoltar({ movio });
    if (!arrastra || !movio) return;

    const { maxX, maxY } = limites();
    const x = baseLeft + tx;
    const y = baseTop + ty;

    if (prefiereMenosMovimiento()) {
      tx = limitar(x, 0, maxX) - baseLeft;
      ty = limitar(y, 0, maxY) - baseTop;
      fijar();
      return;
    }

    // sigue de largo según la velocidad del dedo y se asienta con un rebote
    // chiquito (lo lanzaste: ahí el rebote se siente natural)
    const v = rastreador.velocidad();
    const destinoX = limitar(x + proyectar(v.x), 0, maxX);
    const destinoY = limitar(y + proyectar(v.y), 0, maxY);
    let pendientes = 2;
    const terminar = () => {
      if (--pendientes === 0) {
        inercia = null;
        fijar();
      }
    };
    inercia = [
      resorte({ desde: x, hasta: destinoX, velocidad: v.x, respuesta: 0.45, amortiguacion: 0.8, alCambiar: (p) => { tx = p - baseLeft; pintar(); }, alTerminar: terminar }),
      resorte({ desde: y, hasta: destinoY, velocidad: v.y, respuesta: 0.45, amortiguacion: 0.8, alCambiar: (p) => { ty = p - baseTop; pintar(); }, alTerminar: terminar }),
    ];
  }

  el.addEventListener('pointerup', () => soltar(false));
  el.addEventListener('pointercancel', () => soltar(true));
}

// ---- Swipe para pasar de imagen en los visores (solo táctil) ----
// La imagen sigue al dedo; al soltar decide la velocidad (un golpecito rápido
// alcanza), sale por el costado, cambia y la nueva entra desde el otro lado
// con el mismo envión. Si no alcanza, vuelve a su lugar.
//   puedeEmpezar : () => false para ignorar el gesto (ej: con zoom)
//   siguiente / anterior : cambian la imagen (se llaman cuando ya está fuera de pantalla)
function deslizarParaCambiar(el, { puedeEmpezar = () => true, siguiente, anterior }) {
  const rastreador = crearRastreador();
  let activo = false;
  let horizontal = null; // null = todavía no se sabe hacia dónde va el gesto
  let inicioX = 0, inicioY = 0;
  let base = 0;
  let desplazamiento = 0;
  let animacion = null;
  let recienDeslizo = false;

  function pintar() {
    el.style.translate = desplazamiento ? `${desplazamiento}px 0` : '';
  }

  function animarA(hasta, velocidad, opciones, alTerminar) {
    animacion = resorte({
      desde: desplazamiento,
      hasta,
      velocidad,
      ...opciones,
      alCambiar: (x) => { desplazamiento = x; pintar(); },
      alTerminar: (v) => { animacion = null; if (alTerminar) alTerminar(v); },
    });
  }

  el.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse' || !puedeEmpezar()) return;
    if (animacion) desplazamiento = animacion.parar(); // la agarraste en movimiento: sigue desde ahí
    animacion = null;
    activo = true;
    horizontal = null;
    inicioX = e.clientX;
    inicioY = e.clientY;
    base = desplazamiento;
    rastreador.reiniciar();
    rastreador.agregar(e.clientX, 0);
  });

  el.addEventListener('pointermove', (e) => {
    if (!activo) return;
    const dx = e.clientX - inicioX;
    const dy = e.clientY - inicioY;
    if (horizontal === null) {
      if (Math.abs(dx) < 10 && Math.abs(dy) < 10) return; // todavía no se decidió
      horizontal = Math.abs(dx) > Math.abs(dy);
      if (!horizontal) { soltar(e); return; } // gesto vertical: no es para nosotros
      el.setPointerCapture(e.pointerId);
    }
    rastreador.agregar(e.clientX, 0);
    if (prefiereMenosMovimiento()) return; // con menos movimiento no se desplaza: cambia al soltar
    desplazamiento = base + dx;
    pintar();
  });

  function soltar(e) {
    if (!activo) return;
    activo = false;
    if (!horizontal) {
      // fue un toque o un gesto vertical: si la agarraste mientras se acomodaba, que termine de acomodarse
      if (desplazamiento) animarA(0, 0, { respuesta: 0.35, amortiguacion: 1 });
      return;
    }
    recienDeslizo = true;
    setTimeout(() => { recienDeslizo = false; }, 350);

    const v = rastreador.velocidad().x;
    const recorrido = desplazamiento || e.clientX - inicioX;
    // decide adónde iría con ese envión, no solo dónde soltaste
    const proyectado = recorrido + proyectar(v, 0.998);
    const ancho = el.offsetWidth;
    const direccion = Math.abs(proyectado) > ancho * 0.4 ? Math.sign(proyectado) : 0;

    if (prefiereMenosMovimiento()) {
      desplazamiento = 0;
      pintar();
      if (direccion < 0) siguiente();
      else if (direccion > 0) anterior();
      return;
    }

    if (!direccion) {
      animarA(0, v, { respuesta: 0.35, amortiguacion: 1 });
      return;
    }

    // sale del todo por el costado hacia donde iba, cambia, y la nueva entra desde el otro lado
    // apunta más allá del borde y corta apenas sale del todo (sin frenar fuera de vista)
    const fuera = (window.innerWidth + ancho) / 2;
    animarA(direccion * fuera * 1.5, v, { respuesta: 0.3, amortiguacion: 1, terminarEn: direccion * fuera }, (vSalida) => {
      if (direccion < 0) siguiente();
      else anterior();
      desplazamiento = -direccion * fuera;
      pintar();
      animarA(0, vSalida, { respuesta: 0.35, amortiguacion: 1 });
    });
  }

  el.addEventListener('pointerup', soltar);
  el.addEventListener('pointercancel', soltar);

  // después de deslizar, el navegador puede mandar un "click": no tiene que abrir el zoom
  el.addEventListener('click', (e) => {
    if (!recienDeslizo) return;
    recienDeslizo = false;
    e.stopPropagation();
    e.preventDefault();
  }, true);
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

  // iOS Safari solo aplica :active a los links si la página escucha touchstart
  // (lo usan el feedback al tocar los teléfonos del hub y los botones)
  document.addEventListener('touchstart', () => {}, { passive: true });

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
    if (!prefiereMenosMovimiento()) {
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

  // "← Volver" (Branding, Estampas, Posters): en la compu lleva al hub de Diseño;
  // en el celular abre el menú (con Diseño ya desplegado) para elegir a dónde ir
  const volverHub = document.querySelector('.volver-hub');
  if (volverHub) {
    volverHub.addEventListener('click', (e) => {
      if (!isMobile()) return;
      e.preventDefault();
      setMenu(true);
    });
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

    // al abrir: el espacio se hace rápido y los ítems caen escalonados (ver CSS).
    // al cerrar: los ítems se desvanecen juntos y el espacio se cierra con un
    // ease-in-out corto, así los botones de abajo no pisan un ítem que todavía se ve
    const ABRIR_MS = 250;
    const CERRAR_MS = 200;
    const CURVA_ABRIR = 'cubic-bezier(0.23, 1, 0.32, 1)';
    const CURVA_CERRAR = 'cubic-bezier(0.77, 0, 0.175, 1)';
    let alturaTimer = null;

    // el alto del submenu también se anima, así 3D y SobreMi se deslizan
    // en vez de saltar (sin overflow: hidden a propósito: si se recortaran los ítems,
    // se vería un corte en seco)
    function animarAltura(desde, hasta, ms, curva, alTerminar) {
      clearTimeout(alturaTimer);
      submenu.style.transition = 'none';
      submenu.style.height = desde + 'px';
      void submenu.offsetHeight; // fija el alto inicial antes de arrancar la transición
      submenu.style.transition = `height ${ms}ms ${curva}`;
      submenu.style.height = hasta + 'px';
      alturaTimer = setTimeout(() => {
        submenu.style.removeProperty('transition');
        submenu.style.removeProperty('height');
        if (alTerminar) alTerminar();
      }, ms);
    }

    function abrirSubmenu() {
      const altoActual = submenu.offsetHeight; // 0 si estaba cerrado, o lo que quedaba si se estaba cerrando
      disenoLi.classList.remove('submenu-closing');
      disenoLi.classList.add('submenu-open');
      disenoLink.setAttribute('aria-expanded', 'true');
      if (prefiereMenosMovimiento()) return;
      animarAltura(altoActual, submenu.scrollHeight, ABRIR_MS, CURVA_ABRIR);
    }

    function cerrarSubmenu() {
      disenoLink.setAttribute('aria-expanded', 'false');
      if (prefiereMenosMovimiento()) {
        disenoLi.classList.remove('submenu-open');
        return;
      }
      disenoLi.classList.add('submenu-closing');
      animarAltura(submenu.offsetHeight, 0, CERRAR_MS, CURVA_CERRAR, () => {
        disenoLi.classList.remove('submenu-closing', 'submenu-open');
      });
    }

    // ---- Compu: el submenu se abre y se cierra con la misma animación que en el celular,
    //      en vez de aparecer/desaparecer de golpe al cambiar de página ----
    // llegaste a Diseño desde otra sección: el espacio crece (los ítems aparecen con su fundido)
    if (isDisenoPage && !isMobile() && !prefiereMenosMovimiento()
        && !document.documentElement.classList.contains('submenu-sin-animacion')) {
      animarAltura(0, submenu.scrollHeight, ABRIR_MS, CURVA_ABRIR);
    }
    // salís de Diseño hacia otra sección: primero se cierra, después cambia la página
    if (isDisenoPage) {
      document.querySelectorAll('.menu-list > li > .menu-item, .logo-wrap a').forEach((link) => {
        if (link === disenoLink) return;
        link.addEventListener('click', (e) => {
          if (isMobile() || prefiereMenosMovimiento() || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
          e.preventDefault();
          cerrarSubmenu();
          setTimeout(() => { location.href = link.href; }, CERRAR_MS);
        });
      });
    }

    disenoLink.addEventListener('click', (e) => {
      if (!isMobile()) return; // en desktop sigue siendo un link
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
          <input type="text" id="contact-name" name="name" autocomplete="name" required>
        </div>
        <div>
          <label for="contact-email" data-i18n="modal.email">Email</label>
          <input type="email" id="contact-email" name="email" autocomplete="email" spellcheck="false" required>
        </div>
        <div>
          <label for="contact-message" data-i18n="modal.message">Mensaje</label>
          <textarea id="contact-message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit" class="contact-submit" data-i18n="modal.submit">Enviar</button>
        <p class="contact-success" id="contact-success" role="status" aria-live="polite" data-i18n="modal.success">¡Gracias! Tu mensaje fue enviado.</p>
      </form>
    </div>
  `;
  document.body.appendChild(overlay);

  // aplicamos el idioma actual también a lo que acabamos de insertar (el modal)
  applyLanguage(currentLang);

  // ---- Sobre mí: el título entra con efecto "scramble" (caracteres al azar que se
  //      acomodan en la palabra). Solo visual: el lector de pantalla lee el título real
  //      por el aria-label. La cascada de los párrafos está en el CSS. ----
  // ---- Videos en bucle (Sobre mí, reels de 3D): con "reducir movimiento" no corren; queda el primer cuadro ----
  if (prefiereMenosMovimiento()) {
    document.querySelectorAll('video[autoplay]').forEach((v) => {
      v.removeAttribute('autoplay');
      v.pause();
    });
  }

  const sobremiTitle = document.querySelector('.sobremi-text h1');
  if (sobremiTitle && !prefiereMenosMovimiento()) {
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

  let focoAntesDelModal = null;

  function openModal() {
    focoAntesDelModal = document.activeElement;
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    // en la compu el foco va directo al nombre; en el celular a la X,
    // así no se abre el teclado de golpe tapando medio formulario
    const conMouse = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    (conMouse ? overlay.querySelector('#contact-name') : closeBtn).focus();
  }

  function closeModal() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    // el foco vuelve a donde estaba (el botón CONTACTO)
    if (focoAntesDelModal) focoAntesDelModal.focus({ preventScroll: true });
    focoAntesDelModal = null;
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
        // inclinación: data-mrot (si existe) en el celular, data-rotation en la compu
        if (img.dataset.drot === undefined) img.dataset.drot = img.dataset.rotation || '0';
        img.dataset.rotation = m && img.dataset.mrot !== undefined ? img.dataset.mrot : img.dataset.drot;
        img.style.transform = `rotate(${img.dataset.rotation}deg)`;
        img.style.setProperty('--base-rot', img.dataset.rotation + 'deg');
      });
    }
    placeItems();
    mobileQuery.addEventListener('change', placeItems);

    items.forEach((img) => {
      // balanceo en reposo: lo anima el CSS (wiggle-reposo); acá solo se le da a cada
      // pieza su amplitud, su ritmo y su fase, así no se mueven sincronizadas
      if (img.classList.contains('idle-wiggle')) {
        const duracion = 4.2 + Math.random() * 2.1; // segundos por sentido
        img.style.setProperty('--wiggle-amp', (parseFloat(img.dataset.wiggleAmplitude) || 2) + 'deg');
        img.style.setProperty('--wiggle-dur', duracion + 's');
        img.style.setProperty('--wiggle-delay', -(Math.random() * duracion * 2) + 's');
      }
    });

    // ---- Arrastre: sigue al dedo, se inclina hacia donde la llevás, y al soltarla
    //      sigue de largo con el envión (ver seguirYSoltar, arriba de todo) ----
    const avisarMovido = crearBotonReacomodar([...items], placeItems);
    items.forEach((img) => {
      const baseRotation = () => parseFloat(img.dataset.rotation) || 0;
      seguirYSoltar(img, {
        contenedor: moodboard,
        alAgarrar: () => img.classList.add('is-dragging'),
        alInclinar: (grados) => {
          img.style.transform = `rotate(${baseRotation() + grados}deg)`;
        },
        alSoltar: ({ movio }) => {
          img.classList.remove('is-dragging');
          img.style.transform = `rotate(${baseRotation()}deg)`; // vuelve a su inclinación base, con el transition suave del CSS
          if (movio) {
            avisarMovido();
            return;
          }
          // no se arrastró: fue un toque/click
          if (img.classList.contains('flip-postcard')) {
            // el faro: da vuelta como una postal (eje Y), en vez de girar 360
            img.classList.toggle('is-flipped');
          } else if (img.classList.contains('opens-carousel')) {
            // las estampas: abre el carrusel de detalle en vez de girar
            openEstampaCarousel();
          } else if (img.classList.contains('sella-al-tocar')) {
            // GRAPHIC DESIGN: se aplasta y rebota, como un sticker que pegás con la palma
            sellar(img);
          } else if (img.classList.contains('sacude-al-tocar')) {
            // las etiquetas (PORTFOLIO / GRAPHIC DESIGN): tiemblan en vez de girar
            sacudir(img);
          } else if (!img.classList.contains('no-spin')) {
            triggerSpin(img);
          }
        },
      });
    });

    // ---- Sacudida: tiembla de lado a lado y se va frenando, como un sticker que agitás.
    //      Anima la propiedad `rotate` (aparte del transform con la inclinación base),
    //      así no pisa la inclinación ni el arrastre. Tocarla de nuevo la reinicia ----
    function sacudir(img) {
      if (prefiereMenosMovimiento()) return;
      img.getAnimations().forEach((a) => { if (a.id === 'sacudida') a.cancel(); });
      const vaiven = { easing: 'ease-in-out' }; // cada ida y vuelta es suave, como un péndulo
      const a = img.animate(
        [
          { rotate: '0deg', ...vaiven },
          { rotate: '-8deg', ...vaiven },
          { rotate: '6deg', ...vaiven },
          { rotate: '-4deg', ...vaiven },
          { rotate: '2deg', ...vaiven },
          { rotate: '0deg' },
        ],
        { duration: 480 }
      );
      a.id = 'sacudida';
    }

    // ---- Sello: se aplasta (más ancha, más baja) y rebota hasta quedar quieta.
    //      Anima la propiedad `scale`, aparte de la inclinación; tocarla de nuevo la reinicia ----
    function sellar(img) {
      if (prefiereMenosMovimiento()) return;
      img.getAnimations().forEach((a) => { if (a.id === 'sello') a.cancel(); });
      const a = img.animate(
        [
          { scale: '1', easing: 'cubic-bezier(0.23, 1, 0.32, 1)' },
          { scale: '1.1 0.86', offset: 0.22, easing: 'ease-in-out' },
          { scale: '0.96 1.05', offset: 0.5, easing: 'ease-in-out' },
          { scale: '1.02 0.98', offset: 0.75, easing: 'ease-in-out' },
          { scale: '1' },
        ],
        { duration: 440 }
      );
      a.id = 'sello';
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
        <p class="pieza-contexto" aria-live="polite"></p>
      `;
      document.body.appendChild(el);

      const imgA = el.querySelector('#estampa-detail-img-a');
      const imgB = el.querySelector('#estampa-detail-img-b');
      const images = [imgA, imgB];
      const closeBtn = el.querySelector('.poster-lightbox-close');
      const prevBtn = el.querySelector('.estampa-detail-prev');
      const nextBtn = el.querySelector('.estampa-detail-next');
      const contexto = el.querySelector('.pieza-contexto');
      const mostrarContexto = () => {
        pintarContexto(contexto, CONTEXTO_PIEZAS.estampas[detailIndex]);
        aparecerLeyenda(contexto);
      };

      // ---- Cambio de mockup con dirección: el actual se corre un poco hacia el lado
      //      contrario y se apaga, el nuevo entra desde el lado hacia el que vas.
      //      Un desenfoque mínimo durante el cruce une las dos imágenes, así no se nota
      //      el cambio de tamaño entre mockups de proporción distinta.
      //      Con "reducir movimiento" queda solo el fundido ----
      const DESPLAZAMIENTO = 6; // % del ancho del visor que se corre cada mockup
      const CURVA = 'cubic-bezier(0.23, 1, 0.32, 1)'; // --ease-out
      const ENTRA_MS = 300;
      const SALE_MS = 200; // el que se va, más rápido: deja lugar al nuevo

      const transicion = (ms) => `opacity ${ms}ms ${CURVA}, transform ${ms}ms ${CURVA}, filter ${ms}ms ${CURVA}`;

      function reposo(img, visible) {
        img.style.transition = 'none';
        img.style.opacity = visible ? '1' : '0';
        img.style.transform = '';
        img.style.filter = '';
      }

      // deja listas las prendas de al lado, así la nueva nunca entra a medio cargar
      function precargarVecinos(i) {
        const total = ESTAMPA_DETAIL_IMAGES.length;
        [(i + 1) % total, (i - 1 + total) % total].forEach((n) => {
          new Image().src = ESTAMPA_DETAIL_IMAGES[n];
        });
      }

      function goTo(newIndex, direccion) {
        if (isAnimating) return;
        isAnimating = true;

        const sign = direccion === 'prev' ? -1 : 1;
        const moverse = !prefiereMenosMovimiento();
        const current = images[activeIdx];
        const incoming = images[1 - activeIdx];

        // punto de partida del nuevo: del lado hacia el que vas, invisible y desenfocado
        incoming.style.transition = 'none';
        incoming.style.opacity = '0';
        incoming.style.transform = moverse ? `translateX(${sign * DESPLAZAMIENTO}%)` : '';
        incoming.style.filter = moverse ? 'blur(2px)' : '';
        incoming.src = ESTAMPA_DETAIL_IMAGES[newIndex];
        void incoming.offsetWidth; // fija el punto de partida antes de arrancar la transición

        detailIndex = newIndex;
        activeIdx = 1 - activeIdx;
        precargarVecinos(newIndex);
        mostrarContexto();

        // arranca cuando la imagen nueva ya está decodificada (si no, entraría vacía),
        // pero nunca espera más de 150ms: el clic no puede quedar sin respuesta
        const lista = Promise.race([
          incoming.decode().catch(() => {}),
          new Promise((resolve) => setTimeout(resolve, 150)),
        ]);
        lista.then(() => {
          requestAnimationFrame(() => {
            current.style.transition = transicion(SALE_MS);
            current.style.opacity = '0';
            current.style.transform = moverse ? `translateX(${-sign * DESPLAZAMIENTO}%)` : '';
            current.style.filter = moverse ? 'blur(2px)' : '';

            incoming.style.transition = transicion(ENTRA_MS);
            incoming.style.opacity = '1';
            incoming.style.transform = '';
            incoming.style.filter = '';

            setTimeout(() => { isAnimating = false; }, ENTRA_MS);
          });
        });
      }

      function open(startIndex) {
        detailIndex = startIndex || 0;
        activeIdx = 0;
        isAnimating = false;
        reposo(imgA, true);
        reposo(imgB, false);
        imgA.src = ESTAMPA_DETAIL_IMAGES[detailIndex];
        imgB.src = '';
        precargarVecinos(detailIndex);
        mostrarContexto();
        focoAntes = document.activeElement;
        el.classList.add('is-open');
        document.body.style.overflow = 'hidden';
        closeBtn.focus({ preventScroll: true }); // con teclado, el foco entra al visor (no queda tapado atrás)
      }

      let focoAntes = null;

      function close() {
        el.classList.remove('is-open');
        document.body.style.overflow = '';
        if (focoAntes) focoAntes.focus({ preventScroll: true }); // y al cerrar vuelve a la pila
        focoAntes = null;
      }

      function next() {
        goTo((detailIndex + 1) % ESTAMPA_DETAIL_IMAGES.length, 'next');
      }

      function prev() {
        goTo((detailIndex - 1 + ESTAMPA_DETAIL_IMAGES.length) % ESTAMPA_DETAIL_IMAGES.length, 'prev');
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

      // swipe táctil: el mockup sigue al dedo y sale por el costado. Como la imagen
      // cambia cuando ya está fuera de pantalla, ahí no hace falta el crossfade
      function mostrarDirecto(newIndex) {
        const current = images[activeIdx];
        reposo(current, true);
        reposo(images[1 - activeIdx], false);
        current.src = ESTAMPA_DETAIL_IMAGES[newIndex];
        detailIndex = newIndex;
        precargarVecinos(newIndex);
        mostrarContexto();
        isAnimating = false;
      }

      const total = ESTAMPA_DETAIL_IMAGES.length;
      deslizarParaCambiar(el.querySelector('.estampa-detail-frame'), {
        siguiente: () => mostrarDirecto((detailIndex + 1) % total),
        anterior: () => mostrarDirecto((detailIndex - 1 + total) % total),
      });

      estampaCarousel = { open };
    }

    // ---- Teléfono (solo Estampas): en vez de las pilas que se arrastran, todas las prendas
    //      en una galería de scroll vertical, como Posters. Se arma igual en desktop pero
    //      ahí el CSS la oculta (y como son lazy, no se descargan) ----
    if (moodboard.querySelector('.opens-carousel')) {
      const galeria = document.createElement('div');
      galeria.className = 'estampa-mobile-gallery';
      // en el celular las prendas van sin leyenda (solo imágenes); el contexto queda en el carrusel de la compu
      ESTAMPA_DETAIL_IMAGES.forEach((src, i) => {
        const img = document.createElement('img');
        img.className = 'estampa-mobile-item';
        img.alt = 'Estampa ' + (i + 1);
        img.loading = 'lazy'; // cargan a medida que bajás (antes del src, si no no aplica)
        img.decoding = 'async';
        img.src = src;
        fadeWhenLoaded(img);
        galeria.appendChild(img);
      });
      moodboard.parentElement.appendChild(galeria); // dentro del <main>, después del tablero
      agregarBotonArriba();
    }

    function openEstampaCarousel() {
      buildEstampaCarousel();
      const randomIndex = Math.floor(Math.random() * ESTAMPA_DETAIL_IMAGES.length);
      estampaCarousel.open(randomIndex);
    }

    items.forEach((img) => {
      img.addEventListener('animationend', () => img.classList.remove('is-spinning'));

      // teclado: Enter o Espacio hacen lo mismo que el click (dar vuelta la postal / abrir el carrusel)
      img.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        if (img.classList.contains('flip-postcard')) {
          e.preventDefault();
          img.classList.toggle('is-flipped');
        } else if (img.classList.contains('opens-carousel')) {
          e.preventDefault();
          openEstampaCarousel();
        }
      });
    });
  }

  // ---- Galerías del celular: el contexto de cada pieza ----
  // Si todas las piezas comparten el mismo (ej: todos los pósters son personales), se muestra
  // una sola vez arriba, como encabezado, en vez de repetirlo debajo de cada una.
  // Devuelve true si puso el encabezado (entonces las piezas van sin leyenda propia).
  function encabezadoDeGaleria(galeria, piezas) {
    const compartido = piezas.length > 0 && piezas[0] && piezas.every((p) => p === piezas[0]);
    if (!compartido) return false;
    const p = document.createElement('p');
    p.className = 'pieza-contexto pieza-contexto--encabezado';
    pintarContexto(p, piezas[0], true);
    galeria.prepend(p);
    return true;
  }

  // Agrega una pieza a la galería: si tiene contexto propio, la imagen y su leyenda van
  // juntas en un <figure>, así queda claro a qué pieza pertenece cada texto
  function agregarPiezaAGaleria(galeria, img, pieza) {
    if (!pieza) {
      galeria.appendChild(img);
      return;
    }
    const figura = document.createElement('figure');
    figura.className = 'pieza-figura';
    const leyenda = document.createElement('figcaption');
    leyenda.className = 'pieza-contexto pieza-contexto--galeria';
    pintarContexto(leyenda, pieza);
    figura.append(img, leyenda);
    galeria.appendChild(figura);
  }

  // ---- Teléfono: flechita "volver arriba" para las galerías de scroll (Posters y Estampas),
  //      aparece cuando ya bajaste ~una pantalla ----
  function agregarBotonArriba() {
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
      window.scrollTo({ top: 0, behavior: prefiereMenosMovimiento() ? 'auto' : 'smooth' });
    });
  }

  // ---- Función genérica: arma un carrusel (2 imágenes + flechas) con lightbox ----
  // Hoy la usa solo Posters (Estampas tiene su propio carrusel)
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

    function goTo(newIndex, direction, opciones = {}) {
      // con el visor abierto no se bloquea: ahí el que se ve es el swipe del visor,
      // y dos swipes seguidos no pueden perderse
      if (isAnimating && !lightbox.classList.contains('is-open')) return;
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
        // con menos movimiento cambia de póster sin deslizarse
        const deslizar = prefiereMenosMovimiento() ? 'none' : 'transform 300ms cubic-bezier(0.77, 0, 0.175, 1)';
        current.style.transition = deslizar;
        incoming.style.transition = deslizar;
        current.style.transform = `translateX(${-sign * 100}%)`;
        incoming.style.transform = 'translateX(0)';
      });

      index = newIndex;
      activeIdx = 1 - activeIdx;
      preloadAround(index);

      if (lightboxImg && lightbox.classList.contains('is-open')) {
        if (opciones.sinAnimarVisor) {
          // el swipe ya movió el visor entero: acá solo se cambia la imagen
          setLightboxSrc(index);
          resetZoom();
        } else {
          cambiarPosterEnVisor(index, sign);
        }
      }

      setTimeout(() => { isAnimating = false; }, 300);
    }

    setCarouselSrc(imgA, 1);
    preloadAround(1);

    const prevBtn = document.getElementById(idPrefix + '-prev');
    const nextBtn = document.getElementById(idPrefix + '-next');
    const frame = imgA.closest('.poster-frame');

    // ---- Teléfono: en vez del carrusel, todos los pósters en una galería de scroll vertical.
    //      Se arma igual en desktop pero ahí el CSS la oculta. Son solo para ver: tocarlos no abre nada. ----
    const mobileGallery = document.createElement('div');
    mobileGallery.className = 'poster-mobile-gallery';
    const contextos = CONTEXTO_PIEZAS[folder] || [];
    const compartido = encabezadoDeGaleria(mobileGallery, contextos);
    for (let i = 1; i <= total; i++) {
      const item = document.createElement('img');
      item.className = 'poster-mobile-item';
      item.alt = idPrefix + ' ' + i;
      item.loading = 'lazy'; // cargan a medida que bajás (antes del src, si no no aplica)
      item.decoding = 'async';
      setCarouselSrc(item, i);
      fadeWhenLoaded(item);
      agregarPiezaAGaleria(mobileGallery, item, compartido ? null : contextos[i - 1]);
    }
    frame.parentElement.appendChild(mobileGallery);

    agregarBotonArriba();

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
    let autoplayPausado = false;  // lo pausaste con el botón
    let foco = false;             // con teclado estás adentro del carrusel: no avanza solo

    function startAutoplay() {
      if (!autoplayMs || autoplayDisabled || autoplayPausado || foco || isMobile() || prefiereMenosMovimiento()) return; // en el teléfono no hay carrusel; con menos movimiento, no avanza solo
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

    // botón de pausa: el carrusel avanza solo sin fin, así que tiene que poder frenarse
    // (solo aparece si de verdad va a avanzar solo: no en el celular ni con "reducir movimiento")
    let botonPausa = null;
    const ICONO_PAUSA = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"></rect><rect x="14" y="5" width="4" height="14" rx="1"></rect></svg>';
    const ICONO_PLAY = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z"></path></svg>';

    function pintarBotonPausa() {
      botonPausa.innerHTML = autoplayPausado ? ICONO_PLAY : ICONO_PAUSA;
      botonPausa.dataset.i18nAria = autoplayPausado ? 'posters.reanudar' : 'posters.pausar';
      botonPausa.setAttribute('aria-label', TRANSLATIONS[currentLang][botonPausa.dataset.i18nAria]);
      botonPausa.setAttribute('aria-pressed', String(autoplayPausado));
    }

    if (autoplayMs) {
      if (frame && !isMobile() && !prefiereMenosMovimiento()) {
        botonPausa = document.createElement('button');
        botonPausa.type = 'button';
        botonPausa.className = 'poster-autoplay-toggle';
        pintarBotonPausa();
        botonPausa.addEventListener('click', () => {
          autoplayPausado = !autoplayPausado;
          pintarBotonPausa();
          if (autoplayPausado) stopAutoplay();
          else startAutoplay();
        });
        frame.appendChild(botonPausa);
      }

      startAutoplay();
      if (frame) {
        frame.addEventListener('mouseenter', stopAutoplay);
        frame.addEventListener('mouseleave', startAutoplay);
        // con teclado: mientras el foco está en el carrusel (flechas, lupa, pausa), no avanza solo
        const galeria = frame.parentElement;
        galeria.addEventListener('focusin', (e) => {
          if (!e.target.matches(':focus-visible')) return; // un click con el mouse no cuenta
          foco = true;
          stopAutoplay();
        });
        galeria.addEventListener('focusout', (e) => {
          if (galeria.contains(e.relatedTarget)) return;
          foco = false;
          startAutoplay();
        });
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
      <p class="pieza-contexto" aria-live="polite"></p>
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
    const lightboxContexto = lightbox.querySelector('.pieza-contexto');

    function setLightboxSrc(i) {
      setCarouselSrc(lightboxImg, i);
      pintarContexto(lightboxContexto, (CONTEXTO_PIEZAS[folder] || [])[i - 1]);
      aparecerLeyenda(lightboxContexto);
      const full = new Image();
      full.onload = () => {
        if (index === i) {
          lightboxImg.onerror = null;
          lightboxImg.src = full.src;
        }
      };
      full.src = srcOf(i);
    }

    // ---- Cambio de póster en el visor, con dirección (igual que en Estampas): el actual se
    //      corre un poco hacia el lado contrario y se apaga, el nuevo entra desde el lado hacia
    //      el que vas. El visor tiene una sola imagen (por el zoom), así que el que se va es
    //      una copia temporal que se borra al terminar. Con "reducir movimiento", solo fundido ----
    const VISOR_DESPLAZAMIENTO = 6; // % del ancho del póster
    const VISOR_CURVA = 'cubic-bezier(0.23, 1, 0.32, 1)'; // --ease-out

    function cambiarPosterEnVisor(i, sign) {
      const moverse = !prefiereMenosMovimiento();
      lightboxImg.getAnimations().forEach((a) => a.cancel()); // si venía entrando otro, queda en su lugar
      resetZoom();

      // copia del póster actual, exactamente encima, para animar su salida
      const fantasma = lightboxImg.cloneNode();
      fantasma.removeAttribute('id');
      fantasma.alt = '';
      fantasma.classList.add('poster-lightbox-fantasma');
      const caja = lightboxScroll.getBoundingClientRect();
      const r = lightboxImg.getBoundingClientRect();
      Object.assign(fantasma.style, {
        left: r.left - caja.left + 'px',
        top: r.top - caja.top + 'px',
        width: r.width + 'px',
        height: r.height + 'px',
      });
      lightboxScroll.appendChild(fantasma);
      fantasma.animate(
        [
          { opacity: 1, transform: 'none', filter: 'blur(0)' },
          {
            opacity: 0,
            transform: moverse ? `translateX(${-sign * VISOR_DESPLAZAMIENTO}%)` : 'none',
            filter: moverse ? 'blur(2px)' : 'blur(0)',
          },
        ],
        { duration: 200, easing: VISOR_CURVA } // el que se va, más rápido: deja lugar al nuevo
      ).finished.catch(() => {}).then(() => fantasma.remove());

      // el nuevo: invisible hasta que la imagen esté lista (como mucho 150ms), después entra
      lightboxImg.style.opacity = '0';
      setLightboxSrc(i);
      Promise.race([
        lightboxImg.decode().catch(() => {}),
        new Promise((resolve) => setTimeout(resolve, 150)),
      ]).then(() => {
        if (index !== i) return; // ya se pidió otro póster: ese se encarga
        lightboxImg.style.opacity = '';
        lightboxImg.animate(
          [
            {
              opacity: 0,
              transform: moverse ? `translateX(${sign * VISOR_DESPLAZAMIENTO}%)` : 'none',
              filter: moverse ? 'blur(2px)' : 'blur(0)',
            },
            { opacity: 1, transform: 'none', filter: 'blur(0)' },
          ],
          { duration: 300, easing: VISOR_CURVA }
        );
      });
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

    let focoAntesDelVisor = null;

    function openLightbox() {
      setLightboxSrc(index);
      focoAntesDelVisor = document.activeElement;
      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      autoplayDisabled = true; // se abrió el lightbox: el autoplay no vuelve a andar
      stopAutoplay();
      if (botonPausa) botonPausa.hidden = true; // ya no hay nada que pausar
      resetZoom();
      lightboxClose.focus({ preventScroll: true }); // con teclado, el foco entra al visor
    }

    function closeLightbox() {
      lightbox.classList.remove('is-open');
      document.body.style.overflow = '';
      resetZoom();
      if (focoAntesDelVisor) focoAntesDelVisor.focus({ preventScroll: true }); // y al cerrar vuelve
      focoAntesDelVisor = null;
    }

    imgA.addEventListener('click', openLightbox);
    imgB.addEventListener('click', openLightbox);
    // la lupa es un botón: así el visor también se abre con teclado
    const lupa = frame.querySelector('.poster-zoom-hint');
    if (lupa) lupa.addEventListener('click', openLightbox);
    lightboxClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goTo(index === total ? 1 : index + 1, 'next');
      if (e.key === 'ArrowLeft') goTo(index === 1 ? total : index - 1, 'prev');
      // zoom con teclado (+ / − / 0), centrado en el póster
      if (e.key === '+' || e.key === '=' || e.key === '-' || e.key === '0') {
        e.preventDefault();
        lightboxImg.style.transformOrigin = 'center center';
        if (e.key === '0') scale = SCALE_MIN;
        else scale += e.key === '-' ? -SCALE_STEP : SCALE_STEP;
        scale = Math.max(SCALE_MIN, Math.min(SCALE_MAX, scale));
        applyScale();
      }
    });

    // ---- Swipe táctil: el póster sigue al dedo y, al soltar, la velocidad decide
    //      si pasa al siguiente (con zoom no: ahí el dedo es para mirar) ----
    deslizarParaCambiar(lightboxScroll, {
      puedeEmpezar: () => scale === 1,
      siguiente: () => goTo(index === total ? 1 : index + 1, 'next', { sinAnimarVisor: true }),
      anterior: () => goTo(index === 1 ? total : index - 1, 'prev', { sinAnimarVisor: true }),
    });
  }

  // ---- Hub de Diseño: los aparatos se arrastran como las piezas del tablero (seguirYSoltar).
  //      Un toque sin arrastrar sigue entrando a la sección; si lo arrastraste, no navega ----
  const hubEscena = document.querySelector('.hub-escena');
  if (hubEscena) {
    let arriba = 10;
    const aparatos = [...hubEscena.querySelectorAll('.hub-aparato')];
    const originales = aparatos.map((a) => [a.style.left, a.style.top, a.style.zIndex]);
    const avisarMovido = crearBotonReacomodar(aparatos, () => {
      aparatos.forEach((a, i) => { [a.style.left, a.style.top, a.style.zIndex] = originales[i]; });
    });
    aparatos.forEach((aparato) => {
      let arrastrado = false;
      seguirYSoltar(aparato, {
        contenedor: hubEscena,
        alAgarrar: () => {
          aparato.classList.add('is-dragging');
          aparato.style.zIndex = ++arriba; // el que agarrás queda arriba de los demás
        },
        alInclinar: (grados) => {
          aparato.style.transform = `rotate(${grados}deg)`; // se suma a su inclinación (--rot)
        },
        alSoltar: ({ movio }) => {
          aparato.classList.remove('is-dragging');
          aparato.style.transform = '';
          arrastrado = movio;
          if (movio) avisarMovido();
        },
      });
      aparato.addEventListener('click', (e) => {
        if (!arrastrado) return;
        e.preventDefault();
        arrastrado = false;
      });
    });
  }

  initCarouselGallery('poster', 9, 'posters', 4000);

  // ---- 3D + Motion Graphics (compu): carrusel de reels e imágenes, de a uno. Mismo cambio con dirección que
  //      Estampas y Posters: el actual se corre y se apaga, el nuevo entra desde el lado hacia el que vas.
  //      Solo se reproduce el que se ve. En el celular no hay carrusel: van todos uno debajo del otro ----
  const reels = document.querySelector('.reels');
  if (reels) {
    const figuras = [...reels.querySelectorAll('.reel')];
    const videos = figuras.map((f) => f.querySelector('video')); // null en las piezas que son imagen
    const CURVA = 'cubic-bezier(0.23, 1, 0.32, 1)'; // --ease-out
    let actual = 0;

    // en la compu, solo corre el que se ve
    if (!isMobile()) videos.slice(1).forEach((v) => { if (v) { v.removeAttribute('autoplay'); v.pause(); } });

    function mostrarReel(i, sign) {
      if (i === actual) return;
      const sale = figuras[actual];
      const entra = figuras[i];
      if (videos[actual]) videos[actual].pause();
      actual = i;
      sale.classList.remove('is-activo');
      entra.classList.add('is-activo');
      if (videos[i]) {
        videos[i].currentTime = 0;
        if (!prefiereMenosMovimiento()) videos[i].play().catch(() => {});
      }
      if (prefiereMenosMovimiento()) return; // sin movimiento: cambia directo

      const corrido = (x) => `translateX(${x}%)`;
      sale.animate(
        [{ opacity: 1, transform: 'none', filter: 'blur(0)' }, { opacity: 0, transform: corrido(-sign * 6), filter: 'blur(2px)' }],
        { duration: 200, easing: CURVA } // el que se va, más rápido: deja lugar al nuevo
      );
      entra.animate(
        [{ opacity: 0, transform: corrido(sign * 6), filter: 'blur(2px)' }, { opacity: 1, transform: 'none', filter: 'blur(0)' }],
        { duration: 300, easing: CURVA }
      );
    }

    const total = figuras.length;
    reels.querySelector('.reels-prev').addEventListener('click', () => mostrarReel((actual - 1 + total) % total, -1));
    reels.querySelector('.reels-next').addEventListener('click', () => mostrarReel((actual + 1) % total, 1));
  }

  // ============================
  // BRANDING: tarjetas drageables que se dan vuelta + visor de proyecto
  // ============================
  // Cuántas imágenes tiene cada proyecto. Las imágenes van en
  // assets/branding/<proyecto>/<proyecto>-1.jpg, -2.jpg, etc.
  // Para agregar una imagen: subila con el número siguiente y sumá 1 acá.
  const BRANDING_PROJECTS = {
    obsolet: 5,
    benzaiten: 3,
    karamelo: 3,
  };

  const brandingBoard = document.getElementById('branding-board');

  if (brandingBoard) {
    const cards = brandingBoard.querySelectorAll('.brand-card');
    const avisarMovido = crearBotonReacomodar([...cards], () => {
      cards.forEach((c) => {
        c.style.left = c.dataset.x + '%';
        c.style.top = c.dataset.y + '%';
        c.style.zIndex = '';
      });
    });
    let topZ = 10;

    cards.forEach((card) => {
      const rot = parseFloat(card.dataset.rotation) || 0;
      card.style.left = card.dataset.x + '%';
      card.style.top = card.dataset.y + '%';
      card.style.transform = `rotate(${rot}deg)`;
    });

    // ---- Máquina de escribir: al dar vuelta una tarjeta, la descripción del dorso
    //      se escribe letra por letra (cada vez que la das vuelta) ----
    const TIPEO_ESPERA = 250;   // ms: arranca cuando el dorso ya se ve (el giro dura 0.5s, a la mitad ya se ve)
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
      if (prefiereMenosMovimiento()) return; // aparece directo

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

    cards.forEach((card) => {
      const rot = () => parseFloat(card.dataset.rotation) || 0;
      // en el teléfono no se arrastran (así no pelean con el scroll), pero tocarlas las da vuelta
      seguirYSoltar(card, {
        contenedor: brandingBoard,
        habilitado: () => !isMobile(),
        ignorar: (e) => !!e.target.closest('.brand-card-view'), // el botón VIEW no arrastra
        alAgarrar: () => {
          card.classList.add('is-dragging');
          card.style.zIndex = ++topZ; // la que agarrás queda arriba de las demás
        },
        alInclinar: (grados) => {
          card.style.transform = `rotate(${rot() + grados}deg)`;
        },
        alSoltar: ({ movio }) => {
          card.classList.remove('is-dragging');
          card.style.transform = `rotate(${rot()}deg)`;
          if (!movio) flip(card); // fue un click, no un arrastre
          else avisarMovido();
        },
      });

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
