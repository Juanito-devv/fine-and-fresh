import Link from 'next/link';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export default function MuebleriaTeaser() {
  return (
    <section className="py-section-gap relative overflow-hidden" id="muebleria">
      <div className="absolute -right-24 top-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[110px] pointer-events-none"></div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="glass-panel-luxury rounded-3xl p-10 md:p-14 text-center border border-primary/30 relative overflow-hidden">
          <div className="absolute -top-6 -right-6 w-40 h-40 bg-gradient-to-br from-secondary to-primary rounded-full blur-3xl opacity-25 pointer-events-none"></div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/40 text-secondary font-label-bold text-xs tracking-widest mb-6 bubble-badge">
            <span className="material-symbols-outlined text-sm">chair</span>
            FINE & FRESH MUEBLERÍA · SOLO A DOMICILIO
          </div>
          <h2 className="font-headline-xl text-3xl md:text-5xl font-extrabold mb-6">
            Llevamos el detailing <span className="gradient-text">hasta tu hogar</span>
          </h2>
          <p className="font-body-lg text-on-surface-variant mb-8 text-base md:text-lg max-w-2xl mx-auto">
            Detailing profesional para muebles, sillas, colchones, sofás, alfombras y fachadas de
            inmuebles. Vamos a tu casa u oficina y con doble servicio aplicas 10% de descuento.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/muebleria"
              className="font-label-bold aqua-btn px-10 py-4 rounded-full transition-all duration-300 text-xs md:text-sm tracking-widest font-black inline-flex items-center justify-center gap-2 border border-white/20"
            >
              <span className="material-symbols-outlined text-lg font-bold">chair</span>
              <span>VER MUEBLERÍA</span>
            </Link>
            <a
              href={getWhatsAppUrl('Hola Fine & Fresh, quiero información sobre el detailing de muebles a domicilio')}
              target="_blank"
              rel="noreferrer"
              className="font-label-bold glass-panel px-7 py-4 rounded-full hover:bg-primary/10 hover:border-primary/50 transition-all text-xs md:text-sm tracking-widest font-bold inline-flex items-center justify-center gap-2 border border-white/10 text-white"
            >
              <span className="material-symbols-outlined text-[#25D366] text-lg">chat</span>
              <span>COTIZAR MUEBLERÍA</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}