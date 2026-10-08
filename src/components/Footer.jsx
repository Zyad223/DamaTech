import Logo from './Logo';
import { CONTACT, waUrl, telUrl } from '../config';
import { Icon } from './Icons';

export default function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <a href="#top" className="foot-logo" aria-label="داماتيك">
              <Logo />
            </a>
            <p className="desc">مركز داماتيك للتدريب التقني والمهني. نبني مهارات حقيقية لمستقبل مهني أفضل.</p>
          </div>
          <div>
            <h4>الدورات</h4>
            <ul>
              <li><a href="#f-prog">البرمجة</a></li>
              <li><a href="#f-acc">المحاسبة</a></li>
              <li><a href="#f-des">التصميم والمونتاج</a></li>
              <li><a href="#f-icdl">ICDL</a></li>
              <li><a href="#f-it">الصيانة وIT</a></li>
            </ul>
          </div>
          <div>
            <h4>الخدمات</h4>
            <ul>
              <li><a href="#services">مشاريع التخرج</a></li>
              <li><a href="#services">تطوير المواقع</a></li>
              <li><a href="#why">لماذا داماتيك</a></li>
            </ul>
          </div>
          <div>
            <h4>تواصل معنا</h4>
            <ul>
              <li><a href={waUrl()} target="_blank" rel="noopener noreferrer">واتساب</a></li>
              <li><a href={telUrl}>اتصال هاتفي</a></li>
              <li><a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer">صفحتنا على فيسبوك</a></li>
              <li><a href="#register">أرسل استفسارك</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} داماتيك. جميع الحقوق محفوظة</span>
          <div className="foot-social">
            <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" aria-label="فيسبوك"><Icon name="facebook" /></a>
            {CONTACT.instagram && (
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="انستغرام"><Icon name="instagram" /></a>
            )}
            <a href={waUrl()} target="_blank" rel="noopener noreferrer" aria-label="واتساب"><Icon name="chat" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
