# موقع داماتيك (React + Vite)

## التشغيل
```bash
npm install
npm run dev       # تشغيل محلي للتطوير
npm run build     # إنشاء النسخة النهائية في مجلد dist
npm run preview   # معاينة النسخة النهائية
```
ارفع محتويات مجلد `dist` على أي استضافة ثابتة (Netlify, Vercel, GitHub Pages, cPanel...).

## أين أعدّل؟
| المطلوب | الملف |
|---|---|
| رقم الواتساب والهاتف ورابط فيسبوك/انستغرام | `src/config.js` |
| الدورات والأسعار والخدمات والأرقام | `src/data.js` |
| الألوان والخطوط والتصميم | `src/styles.css` (المتغيرات في أعلاه `:root`) |
| الشعار | `src/assets/logo.png` |
| العنوان ووصف الصفحة (SEO) | `index.html` |

## البنية
```
src/
  main.jsx            نقطة الدخول
  App.jsx             تجميع الأقسام وحالة "الدورة المختارة"
  config.js           بيانات التواصل
  data.js             المحتوى
  components/         Header, Hero, Stats, Courses, Services, Why, Register, Footer, FloatingContact
```
