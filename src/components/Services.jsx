import { SERVICES, STEPS } from '../data';
import { Icon, Diamond } from './Icons';

export default function Services({ onPick }) {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="section-head">
          <h2>خدمات التنفيذ</h2>
          <p>إلى جانب التدريب، ننفّذ مشاريعك التقنية بفريق متخصص، من الفكرة حتى التسليم.</p>
        </div>

        <div className="service-cards">
          {SERVICES.map((s) => (
            <article className="service-card" key={s.track}>
              <div className="icon-box"><Icon name={s.icon} /></div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul>
                {s.points.map((p) => <li key={p}><Diamond small /> {p}</li>)}
              </ul>
              <a href="#register" className="btn btn-primary" onClick={() => onPick(s.track)}>{s.cta}</a>
            </article>
          ))}
        </div>

        <div className="service-steps">
          {STEPS.map((st) => (
            <div className="step" key={st.num}>
              <span className="step-num">{st.num}</span>
              <div><b>{st.title}</b><span>{st.text}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
