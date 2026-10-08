import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Courses from './components/Courses';
import Services from './components/Services';
import Why from './components/Why';
import Register from './components/Register';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

export default function App() {
  // الدورة/الخدمة المختارة: تُحدَّد عند الضغط على "استفسر" وتظهر في النموذج
  const [selected, setSelected] = useState('');

  return (
    <>
      <a href="#main" className="skip">تخطَّ إلى المحتوى</a>
      <Header />
      <main id="main">
        <Hero />
        <Stats />
        <Courses onPick={setSelected} />
        <Services onPick={setSelected} />
        <Why />
        <Register selected={selected} setSelected={setSelected} />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
