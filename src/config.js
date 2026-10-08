/* ===== إعدادات التواصل: عدّل القيم هنا فقط ===== */
export const CONTACT = {
  whatsapp: '963957321957',   // بصيغة دولية بدون + (مثال: 963912345678)
  phone: '+963957321957',     // بصيغة دولية مع +
  facebook: 'https://www.facebook.com/share/1CjFn8PrEf/',
  instagram: '',              // ضع رابط انستغرام هنا ليظهر في الفوتر
};

export const isPlaceholder = /^0+$/.test(CONTACT.whatsapp);
export const waUrl = (text) =>
  `https://wa.me/${CONTACT.whatsapp}` + (text ? `?text=${encodeURIComponent(text)}` : '');
export const telUrl = `tel:${CONTACT.phone}`;
