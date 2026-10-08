import { STATS } from '../data';

export default function Stats() {
  return (
    <section className="stats" aria-label="أرقام داماتيك">
      <div className="wrap stats-grid">
        {STATS.map((s) => (
          <div className="stat" key={s.label}>
            <b dir="ltr">{s.value}</b>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
