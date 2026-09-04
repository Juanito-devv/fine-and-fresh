import Link from 'next/link';
import Header from '../src/components/layout/Header';
import Footer from '../src/components/layout/Footer';

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-x-hidden">
      <Header />
      <main className="flex-1 flex items-center justify-center px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="glass-panel-luxury rounded-3xl p-10 md:p-14 text-center max-w-lg border border-primary/20">
          <span className="material-symbols-outlined text-6xl text-primary mb-6 block">car_wash</span>
          <h1 className="font-headline-xl text-3xl md:text-5xl font-extrabold mb-4">
            Página <span className="gradient-text">no encontrada</span>
          </h1>
          <p className="font-body-lg text-on-surface-variant mb-10">
            La página que buscas no existe o fue movida. Explora nuestros tratamientos o agenda tu cita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="aqua-btn font-label-bold px-8 py-4 rounded-full tracking-widest text-xs font-black inline-flex items-center justify-center gap-2 border border-white/20"
            >
              VOLVER AL INICIO
            </Link>
            <Link
              href="/agendar"
              className="glass-panel font-label-bold px-8 py-4 rounded-full tracking-widest text-xs font-bold inline-flex items-center justify-center gap-2 border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
            >
              AGENDAR CITA
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}