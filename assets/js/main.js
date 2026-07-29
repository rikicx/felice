/* ==========================================================================
   Felice Engenharia e Topografia — comportamento de interface
   Módulos independentes, sem dependências externas.
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------ *
   * Cabeçalho fixo — ganha fundo assim que a página sai do topo
   * ------------------------------------------------------------------ */
  function stickyMasthead() {
    var masthead = document.querySelector('[data-masthead]');
    if (!masthead) return;

    var ticking = false;
    function update() {
      masthead.classList.toggle('is-stuck', window.scrollY > 24);
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }, { passive: true });
    update();
  }

  /* ------------------------------------------------------------------ *
   * Menu móvel
   * ------------------------------------------------------------------ */
  function mobileMenu() {
    var toggle = document.querySelector('[data-menu-toggle]');
    var drawer = document.querySelector('[data-drawer]');
    if (!toggle || !drawer) return;

    var masthead = document.querySelector('[data-masthead]');

    function setOpen(open) {
      toggle.setAttribute('aria-expanded', String(open));
      drawer.setAttribute('data-open', String(open));
      drawer.toggleAttribute('inert', !open);
      if (masthead) masthead.classList.toggle('is-stuck', open || window.scrollY > 24);
    }

    setOpen(false);

    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    drawer.addEventListener('click', function (event) {
      if (event.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });

    window.matchMedia('(min-width: 62em)').addEventListener('change', function (event) {
      if (event.matches) setOpen(false);
    });
  }

  /* ------------------------------------------------------------------ *
   * Revelação por rolagem — deslocamento curto, uma única vez
   * ------------------------------------------------------------------ */
  function scrollReveal() {
    var targets = document.querySelectorAll('[data-reveal]');
    if (!targets.length) return;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      targets.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });

    targets.forEach(function (el, index) {
      var group = el.closest('[data-reveal-group]');
      if (group) {
        var siblings = Array.prototype.slice.call(group.querySelectorAll('[data-reveal]'));
        el.style.setProperty('--reveal-delay', Math.min(siblings.indexOf(el), 5) * 70 + 'ms');
      } else {
        el.style.setProperty('--reveal-delay', (index % 3) * 60 + 'ms');
      }
      observer.observe(el);
    });
  }

  /* ------------------------------------------------------------------ *
   * Campo topográfico — resposta sutil ao ponteiro
   * ------------------------------------------------------------------ */
  function topographicMotion() {
    var hero = document.querySelector('.hero');
    if (!hero || reduceMotion) return;

    var targetX = 0;
    var targetY = 0;
    var currentX = 0;
    var currentY = 0;
    var frame = 0;

    function render() {
      currentX += (targetX - currentX) * 0.055;
      currentY += (targetY - currentY) * 0.055;
      hero.style.setProperty('--topo-x', currentX.toFixed(2) + 'px');
      hero.style.setProperty('--topo-y', currentY.toFixed(2) + 'px');

      if (Math.abs(targetX - currentX) > .05 || Math.abs(targetY - currentY) > .05) {
        frame = window.requestAnimationFrame(render);
      } else {
        frame = 0;
      }
    }

    function queue() {
      if (!frame) frame = window.requestAnimationFrame(render);
    }

    hero.addEventListener('pointermove', function (event) {
      var rect = hero.getBoundingClientRect();
      targetX = ((event.clientX - rect.left) / rect.width - .5) * 18;
      targetY = ((event.clientY - rect.top) / rect.height - .5) * 12;
      queue();
    }, { passive: true });

    hero.addEventListener('pointerleave', function () {
      targetX = 0;
      targetY = 0;
      queue();
    });
  }

  /* ------------------------------------------------------------------ *
   * Mapa sob demanda — nada de terceiros antes do primeiro clique
   * ------------------------------------------------------------------ */
  function deferredMap() {
    var mount = document.querySelector('[data-map]');
    if (!mount) return;
    var facade = mount.querySelector('[data-map-load]');
    if (!facade) return;

    facade.addEventListener('click', function () {
      var frame = document.createElement('iframe');
      frame.src = mount.getAttribute('data-map-src');
      frame.title = 'Mapa com a localização da Felice Engenharia e Topografia em São João do Polêsine, RS';
      frame.loading = 'lazy';
      frame.referrerPolicy = 'no-referrer-when-downgrade';
      frame.setAttribute('allowfullscreen', '');
      mount.appendChild(frame);
      facade.remove();
    }, { once: true });
  }

  /* ------------------------------------------------------------------ *
   * Ano corrente no rodapé
   * ------------------------------------------------------------------ */
  function currentYear() {
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }

  /* ------------------------------------------------------------------ *
   * Inicialização
   * ------------------------------------------------------------------ */
  function init() {
    stickyMasthead();
    mobileMenu();
    scrollReveal();
    topographicMotion();
    deferredMap();
    currentYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
