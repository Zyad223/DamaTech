import { WHY } from '../data';
import { Icon } from './Icons';

export default function Why() {
  return (
    <section id="why">
      <div className="wrap">
        <div className="section-head">
          <h2>لماذا داماتيك</h2>
          <p>تدريب مبني على التطبيق، لا على الحفظ.</p>
        </div>
        <div className="why-grid">
          {WHY.map((w) => (
            <div className="why-item" key={w.title}>
              <div className="icon-box"><Icon name={w.icon} /></div>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
