import { useEffect, useRef, useState } from 'react';
import { CONTACT, isPlaceholder, waUrl, telUrl } from '../config';
import { FIELDS, SERVICES } from '../data';
import { Icon, Diamond } from './Icons';

const DEFAULT_NOTE = 'سنتواصل معك خلال 24 ساعة بكل التفاصيل';

export default function Register({ selected, setSelected }) {
  const [note, setNote] = useState({ text: DEFAULT_NOTE, ok: false });
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setNote({ text: 'عبّئ الاسم ورقم الهاتف واختر الدورة أو الخدمة أولًا.', ok: false });
      form.querySelector(':invalid')?.focus();
      return;
    }
    const d = new FormData(form);
    const msg = [
      'مرحبًا داماتيك،',
      'الاسم: ' + d.get('name'),
      'الهاتف: ' + d.get('phone'),
      'الدورة/الخدمة: ' + d.get('track'),
      d.get('mode') && 'طريقة الدورة: ' + d.get('mode'),
      d.get('note') && 'ملاحظات: ' + d.get('note'),
    ].filter(Boolean).join('\n');

    // عند وضع رقم واتساب حقيقي في config.js يُفتح واتساب برسالة جاهزة
    if (!isPlaceholder) window.open(waUrl(msg), '_blank', 'noopener');

    setNote({ text: 'وصل استفسارك. سنتواصل معك قريبًا.', ok: true });
    form.reset();
    setSelected('');
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setNote({ text: DEFAULT_NOTE, ok: false }), 5000);
  }

  return (
    <section className="register" id="register">
      <div className="wrap">
        <div className="reg-grid">
          <div className="reg-side">
            <Diamond />
            <h2>هل لديك استفسار عن دوراتنا أو خدماتنا؟</h2>
            <p>
              عبّئ النموذج وسيتواصل معك فريقنا خلال وقت قصير، ويزوّدك بكل التفاصيل عن الدورة أو
              الخدمة المناسبة لك، وطريقة الدورة (أونلاين أو في أحد مراكزنا المعتمدة)، وموعد أقرب دورة.
            </p>
            <div className="reg-contact">
              <a href={waUrl()} target="_blank" rel="noopener noreferrer">
                <span className="icon-box"><Icon name="chat" /></span>
                واتساب: تواصل مباشر
              </a>
              <a href={telUrl}>
                <span className="icon-box"><Icon name="phone" /></span>
                اتصل بنا مباشرة
              </a>
              <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer">
                <span className="icon-box"><Icon name="facebook" /></span>
                تابعنا على فيسبوك
              </a>
            </div>
          </div>

          <div className="reg-form">
            <form id="regForm" onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="fName">الاسم الكامل</label>
                  <input id="fName" name="name" type="text" placeholder="اكتب اسمك" autoComplete="name" required />
                </div>
                <div className="field">
                  <label htmlFor="fPhone">رقم الهاتف</label>
                  <input id="fPhone" name="phone" type="tel" inputMode="tel" placeholder="09xxxxxxxx" autoComplete="tel" required />
                </div>
              </div>

              <div className="form-row">
                <div className="field full">
                  <label htmlFor="fTrack">الدورة أو الخدمة</label>
                  <select id="fTrack" name="track" value={selected} onChange={(e) => setSelected(e.target.value)} required>
                    <option value="">اختر الدورة أو الخدمة</option>
                    {FIELDS.map((f) => (
                      <optgroup key={f.id} label={f.title}>
                        {f.courses.map((c) => <option key={c.name} value={c.name}>{c.name}</option>)}
                      </optgroup>
                    ))}
                    <optgroup label="خدمات التنفيذ">
                      {SERVICES.map((s) => <option key={s.track} value={s.track}>{s.track}</option>)}
                    </optgroup>
                    <optgroup label="أخرى">
                      <option value="غير متأكد / أريد الاستفسار">غير متأكد / أريد الاستفسار</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="field full">
                  <label htmlFor="fMode">طريقة الدورة</label>
                  <select id="fMode" name="mode" defaultValue="">
                    <option value="">لا فرق عندي</option>
                    <option value="أونلاين">أونلاين</option>
                    <option value="ضمن أحد المراكز المعتمدة من داماتيك">ضمن أحد المراكز المعتمدة من داماتيك</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="field full">
                  <label htmlFor="fNote">ملاحظات أو استفسار (اختياري)</label>
                  <input id="fNote" name="note" type="text" placeholder="أي تفاصيل تود إضافتها" />
                </div>
              </div>

              <button type="submit" className="btn btn-primary form-submit">أرسل استفسارك</button>
              <p className={'form-note' + (note.ok ? ' ok' : '')} role="status" aria-live="polite">{note.text}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
