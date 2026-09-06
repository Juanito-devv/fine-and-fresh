import Link from 'next/link';
import Header from '../src/components/layout/Header';
import Footer from '../src/components/layout/Footer';
import WhatsAppButton from '../src/components/layout/WhatsAppButton';
import { SITE } from '../src/config/site';
import { getWhatsAppUrl } from '../src/utils/whatsapp';

const mueblesServices = [
  { icon: 'chair', label: 'Detailing de Muebles' },
  { icon: 'table_restaurant', label: 'Sillas' },
  { icon: 'bed', label: 'Colchones' },
  { icon: 'weekend', label: 'Sofás' },
  { icon: 'grid_view', label: 'Alfombras' },
  { icon: 'home', label: 'Fachadas de Inmuebles' },
];

export default function MuebleriaPage() {
  const waUrl = getWhatsAppUrl('Hola Fine & Fresh Mueblería, quiero cotizar el detailing de muebles a domicilio');

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header />
      <main className="py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/40 text-secondary font-label-bold text-xs tracking-widest mb-4 bubble-badge">
              <span className="material-symbols-outlined text-sm">chair</span>
              SOLO A DOMICILIO
            </div>
            <h1 className="font-headline-xl text-3xl md:text-5xl font-extrabold mb-6">
              Fine & Fresh <span className="gradient-text">Mueblería</span>
            </h1>
            <p className="font-body-lg text-on-surface-variant text-base md:text-lg uppercase tracking-widest">
              Detailing profesional de muebles en tu casa u oficina
            </p>
          </div>

          <div className="glass-panel-luxury rounded-3xl p-8 md:p-12 border border-primary/30 relative overflow-hidden mb-12">
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-gradient-to-br from-secondary to-primary rounded-full blur-3xl opacity-20 pointer-events-none"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <h2 className="font-headline-md text-2xl md:text-3xl text-white font-black mb-4">
                  Limpieza profunda y restauración sin moverte de casa
                </h2>
                <p className="text-on-surface-variant text-base leading-relaxed mb-6">
                  Nuestro equipo se desplaza hasta tu dirección con los mejores productos y la
                  maquinaria perfecta para trabajar. Recuperamos la apariencia de tus muebles,
                  alfombras y fachadas.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary mt-0.5">home_work</span>
                    <span>Servicio exclusivo a domicilio en Caracas y alrededores.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary mt-0.5">percent</span>
                    <span>10% de descuento por doble servicio al combinar 2 o más piezas en una misma cita.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary mt-0.5">schedule</span>
                    <span>Coordinación directa por WhatsApp: {SITE.hours}.</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-label-bold aqua-btn px-8 py-4 rounded-full transition-all duration-300 text-xs md:text-sm tracking-widest font-black inline-flex items-center justify-center gap-2 border border-white/20"
                  >
                    <span className="material-symbols-outlined text-[#04131d] text-lg">chat</span>
                    <span>COTIZAR POR WHATSAPP</span>
                  </a>
                  <Link
                    href="/#servicios"
                    className="font-label-bold glass-panel px-8 py-4 rounded-full hover:bg-primary/10 hover:border-primary/50 transition-all text-xs md:text-sm tracking-widest font-bold inline-flex items-center justify-center gap-2 border border-white/10 text-white"
                  >
                    <span className="material-symbols-outlined text-sm">directions_car</span>
                    <span>VOLVER A SERVICIOS DEL AUTO</span>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {mueblesServices.map((s) => (
                  <div key={s.label} className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-secondary/50 hover-lift text-center transition-all">
                    <span className="material-symbols-outlined text-3xl text-secondary mb-3 inline-block">{s.icon}</span>
                    <p className="text-sm text-white font-bold">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}