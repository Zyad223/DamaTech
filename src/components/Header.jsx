import { useEffect, useState } from 'react';
import Logo from './Logo';
import { NAV_LINKS } from '../data';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    const mq = window.matchMedia('(min-width: 981px)');
    const onMq = (e) => { if (e.matches) setOpen(false); };
    document.addEventListener('keydown', onKey);
    mq.addEventListener('change', onMq);
    return () => {
      document.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onMq);
    };
  }, []);

  // قفل التمرير عند فتح القائمة على الجوال
  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('no-scroll', 'menu-open');
  }, [open]);

  const cls = [open && 'open', scrolled && 'scrolled'].filter(Boolean).join(' ');

  return (
    <header id="siteHeader" className={cls}>
      <nav className="nav" aria-label="القائمة الرئيسية">
        <a href="#top" className="brand" aria-label="داماتيك - الصفحة الرئيسية">
          <Logo alt="" />
        </a>
        <ul
          className="nav-links"
          id="navLinks"
          onClick={(e) => { if (e.target.closest('a')) setOpen(false); }}
        >
          {NAV_LINKS.map(([href, label]) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
          <li className="drawer-cta"><a href="#register">استفسر الآن</a></li>
        </ul>
        <a href="#register" className="nav-cta">استفسر الآن</a>
        <button
          type="button"
          className="burger"
          aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
          aria-expanded={open}
          aria-controls="navLinks"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="burger-lines" />
        </button>
      </nav>
    </header>
  );
}
