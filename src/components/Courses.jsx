import { FIELDS } from '../data';
import { Icon } from './Icons';

function Course({ course: c, onPick }) {
  return (
    <article className={'course' + (c.featured ? ' featured' : '')}>
      <h4>{c.name}</h4>
      {c.desc && <p>{c.desc}</p>}
      <ul className="course-meta">
        <li><span>المدة</span>{c.duration}</li>
        {c.sessions && <li><span>الجلسات</span>{c.sessions}</li>}
      </ul>
      <div className="course-foot">
        <div className="price">
          <b>{c.price}</b> ل.س
          {c.note && <small>{c.note}</small>}
        </div>
        <a className="course-btn" href="#register" onClick={() => onPick(c.name)}>استفسر</a>
      </div>
    </article>
  );
}

export default function Courses({ onPick }) {
  return (
    <section className="tracks" id="tracks">
      <div className="wrap">
        <div className="section-head">
          <h2>اختر الدورة التي تناسب هدفك</h2>
          <p>خمسة مجالات تدريبية يقدّمها كادر داماتيك، أونلاين أو ضمن المراكز المعتمدة من داماتيك.</p>
        </div>

        <nav className="field-nav" aria-label="مجالات التدريب">
          {FIELDS.map((f) => <a key={f.id} href={`#f-${f.id}`}>{f.title}</a>)}
        </nav>

        {FIELDS.map((f) => (
          <div className="field-block" id={`f-${f.id}`} key={f.id}>
            <div className="field-head">
              <div className="icon-box"><Icon name={f.icon} /></div>
              <h3>{f.title}</h3>
            </div>
            <div className="course-grid">
              {f.courses.map((c) => <Course key={c.name} course={c} onPick={onPick} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
