import { waUrl, telUrl } from '../config';
import { Icon, WhatsAppGlyph } from './Icons';

/* زر واتساب عائم (سطح المكتب) + شريط تواصل سفلي (الجوال) */
export default function FloatingContact() {
  return (
    <>
      <a href={waUrl()} target="_blank" rel="noopener noreferrer" className="wa-float" aria-label="تواصل عبر واتساب">
        <WhatsAppGlyph />
      </a>
      <nav className="mobile-bar" aria-label="تواصل سريع">
        <a href={waUrl()} target="_blank" rel="noopener noreferrer" className="mb-wa">
          <WhatsAppGlyph />
          واتساب
        </a>
        <a href={telUrl} className="mb-call">
          <Icon name="phone" />
          اتصل بنا
        </a>
      </nav>
    </>
  );
}
