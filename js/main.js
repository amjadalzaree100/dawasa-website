/* Dawasa Website — Shared Scripts */
(function () {
  'use strict';

  const LOGO = `<svg viewBox="0 0 64 64" fill="none"><circle cx="16" cy="44" r="11" stroke="#fff" stroke-width="4"/><circle cx="48" cy="44" r="11" stroke="#fff" stroke-width="4"/><path d="M16 44 26 22h14l8 22M26 22l10 22M22 15h8" stroke="#C9F24F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="36" cy="44" r="4" fill="#C9F24F" stroke="#fff" stroke-width="2.5"/></svg>`;

  const NAV = [
    { href: 'index.html', label: 'الرئيسية' },
    { href: 'about.html', label: 'من نحن' },
    { href: 'how-it-works.html', label: 'كيف تعمل' },
    { href: 'stations.html', label: 'المحطات' },
    { href: 'bikes.html', label: 'الدراجات' },
    { href: 'pricing.html', label: 'الأسعار' },
    { href: 'faq.html', label: 'الأسئلة الشائعة' },
    { href: 'contact.html', label: 'تواصل معنا' }
  ];

  const FOOTER = {
    company: [
      { href: 'about.html', label: 'من نحن' },
      { href: 'how-it-works.html', label: 'كيف تعمل الخدمة' },
      { href: 'pricing.html', label: 'الأسعار' },
      { href: 'download.html', label: 'تحميل التطبيق' }
    ],
    support: [
      { href: 'faq.html', label: 'الأسئلة الشائعة' },
      { href: 'contact.html', label: 'تواصل معنا' },
      { href: 'partnership.html', label: 'الشراكة معنا' }
    ],
    legal: [
      { href: 'privacy.html', label: 'سياسة الخصوصية' },
      { href: 'terms.html', label: 'الشروط والأحكام' },
      { href: 'cookies.html', label: 'ملفات تعريف الارتباط' }
    ]
  };

  const CONTACT = {
    email: 'amjadamjadalzaree2@gmail.com',
    phone: '+963991844960',
    phoneDisplay: '+963 991 844 960',
    whatsapp: '963991844960',
    address: 'دمشق، سوريا'
  };

  const current = location.pathname.split('/').pop() || 'index.html';

  function navLinks(active) {
    return NAV.map(n =>
      `<a href="${n.href}" class="${n.href === active ? 'active' : ''}">${n.label}</a>`
    ).join('');
  }

  function injectHeader() {
    const el = document.getElementById('site-header');
    if (!el) return;
    el.innerHTML = `
      <div class="container header-inner">
        <a href="index.html" class="brand">
          <span class="brand-icon">${LOGO}</span>
          دواسة
        </a>
        <nav class="nav">${navLinks(current)}</nav>
        <a href="download.html" class="btn sm header-cta">حمّل التطبيق</a>
        <button class="menu-toggle" id="menuToggle" aria-label="القائمة">
          <svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
      </div>`;
  }

  function injectMobileNav() {
    if (document.getElementById('mobileNav')) return;
    const div = document.createElement('div');
    div.className = 'mobile-nav';
    div.id = 'mobileNav';
    div.innerHTML = `
      <div class="mobile-panel">
        ${NAV.map(n => `<a href="${n.href}">${n.label}</a>`).join('')}
        <a href="partnership.html">الشراكة معنا</a>
        <a href="download.html" class="btn">حمّل التطبيق</a>
      </div>`;
    document.body.appendChild(div);
  }

  function injectFooter() {
    const el = document.getElementById('site-footer');
    if (!el) return;
    el.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="index.html" class="brand">
              <span class="brand-icon">${LOGO}</span>
              دواسة
            </a>
            <p>منصة رقمية لتأجير الدراجات الهوائية في دمشق. استأجر دراجة من أي محطة وأعدها إلى محطة أخرى — بسهولة وأمان.</p>
            <div class="social">
              <a href="#" aria-label="Facebook" title="Facebook"><svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
              <a href="#" aria-label="Instagram" title="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
              <a href="#" aria-label="X" title="X"><svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
              <a href="https://wa.me/${CONTACT.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp" title="WhatsApp"><svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
            </div>
          </div>
          <div class="footer-col">
            <h4>الشركة</h4>
            ${FOOTER.company.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
          </div>
          <div class="footer-col">
            <h4>الدعم</h4>
            ${FOOTER.support.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
          </div>
          <div class="footer-col">
            <h4>قانوني</h4>
            ${FOOTER.legal.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
            <p style="margin-top:16px;font-size:13px;line-height:1.8">
              ${CONTACT.phoneDisplay}<br>
              <a href="mailto:${CONTACT.email}" style="color:rgba(255,255,255,0.65)">${CONTACT.email}</a>
            </p>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} Dawasa / دواسة. جميع الحقوق محفوظة.</span>
          <span>${CONTACT.address}</span>
        </div>
      </div>`;
  }

  function initMenu() {
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('mobileNav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
    nav.addEventListener('click', e => {
      if (e.target === nav) nav.classList.remove('open');
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    const onScroll = () => header.classList.toggle('scrolled', scrollY > 20);
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
  }

  function initFaq() {
    document.querySelectorAll('.faq-q').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const wasOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(i => {
          i.classList.remove('open');
          i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
        });
        if (!wasOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  function validateForm(form) {
    let ok = true;
    form.querySelectorAll('[required]').forEach(field => {
      const wrap = field.closest('.field');
      const val = field.value.trim();
      wrap?.classList.remove('err');
      if (!val) { wrap?.classList.add('err'); ok = false; }
      if (field.type === 'email' && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        wrap?.classList.add('err'); ok = false;
      }
      if (field.type === 'tel' && val && val.replace(/\D/g, '').length < 8) {
        wrap?.classList.add('err'); ok = false;
      }
    });
    return ok;
  }

  function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!validateForm(form)) return;
      const d = new FormData(form);
      const name = d.get('name');
      const phone = d.get('phone');
      const email = d.get('email') || '';
      const subject = d.get('subject') || 'استفسار';
      const message = d.get('message');
      const text = encodeURIComponent(`الاسم: ${name}\nالهاتف: ${phone}\nالبريد: ${email}\nالموضوع: ${subject}\n\n${message}`);
      window.open(`https://wa.me/${CONTACT.whatsapp}?text=${text}`, '_blank');
    });
  }

  function initPartnershipForm() {
    const form = document.getElementById('partnershipForm');
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!validateForm(form)) return;
      const d = new FormData(form);
      const text = encodeURIComponent(
        `طلب شراكة — دواسة\n\n` +
        `اسم المحل: ${d.get('shop')}\n` +
        `اسم المسؤول: ${d.get('name')}\n` +
        `الهاتف: ${d.get('phone')}\n` +
        `البريد: ${d.get('email') || '—'}\n` +
        `العنوان: ${d.get('address')}\n` +
        `نوع النشاط: ${d.get('type')}\n\n` +
        `ملاحظات:\n${d.get('notes') || '—'}`
      );
      window.open(`https://wa.me/${CONTACT.whatsapp}?text=${text}`, '_blank');
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    injectHeader();
    injectMobileNav();
    injectFooter();
    initMenu();
    initHeaderScroll();
    initFaq();
    initContactForm();
    initPartnershipForm();
  });

  window.DAWASA = { CONTACT, LOGO };
})();
