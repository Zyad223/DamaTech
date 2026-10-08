import Logo from './Logo';
import { Diamond } from './Icons';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="hero-badge"><Diamond small /> تأهيل علمي وعملي يُصمم مستقبلك المهني</span>
          <h1>اختر التعلّم أونلاين أو انضم إلينا في مراكز "داماتيك" المعتمدة </h1>
          <p className="hero-lead">
            تحت إشراف نخبة من الخبراء والمتخصصين، نضع بين يديك خبرات عمليّة شاملة في أهم المجالات التقنية والإدارية. نوفر لك البيئة المثالية لتطوير مهاراتك أو تنفيذ مشاريعك الجامعية والمستقبلية بثقة واحترافية.
          </p>
          <div className="hero-actions">
            <a href="#register" className="btn btn-primary">استفسر عن دورة</a>
            <a href="#tracks" className="btn btn-ghost">تصفّح الدورات</a>
          </div>
          <ul className="hero-facts">
            <li><Diamond small /> 5 مجالات تدريبية</li>
            <li><Diamond small /> تدريب عملي 100%</li>
            <li><Diamond small /> أونلاين أو في مراكز معتمدة</li>
          </ul>
        </div>

        <div className="hero-art">
          <div className="art-panel">
            <i className="facet f1" /><i className="facet f2" /><i className="facet f3" />
            <div className="logo-plate">
              <Logo alt="DAMA Tech Center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
