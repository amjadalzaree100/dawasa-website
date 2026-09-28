/* Privacy Policy — Arabic / English toggle (privacy page only) */
(function () {
  'use strict';

  const KEY = 'dawasa_privacy_lang';

  function setLang(lang) {
    localStorage.setItem(KEY, lang);
    document.documentElement.lang = lang === 'en' ? 'en' : 'ar';
    document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';
    document.querySelectorAll('[data-lang-block]').forEach(el => {
      el.hidden = el.dataset.langBlock !== lang;
    });
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      btn.classList.toggle('on', btn.dataset.langBtn === lang);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem(KEY) || 'ar';
    setLang(saved);
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      btn.addEventListener('click', () => setLang(btn.dataset.langBtn));
    });
  });
})();
