/* Sayfa açılışı ve dil değişiminde yeniden çizim. */
(function () {
  'use strict';

  function boot() {
    window.Render.renderAll();
    window.UI.init();
  }

  window.addEventListener('portfolio:i18n', () => {
    window.Render.renderAll();
    window.UI.refresh();
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
