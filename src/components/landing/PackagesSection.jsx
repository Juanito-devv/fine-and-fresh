import { useState } from 'react';
import { services, categories } from '../../data/services';
import { SITE } from '../../config/site';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export default function PackagesSection() {
  const [active, setActive] = useState('Todos los Servicios');

  const filtered =
    active === 'Todos los Servicios' ? services : services.filter((s) => s.category === active);

  return (
    <section className="py-section-gap relative" id="paquetes">
      <div className="absolute inset-0 bg-surface-container-low/40 skew-y-3 -z-10 transform origin-top-left"></div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
        <h2 className="font-headline-xl text-3xl md:text-5xl font-extrabold mb-4">
          Tratamientos <span className="gradient-text">Destacados</span>
        </h2>
        <p className="font-body-lg text-on-surface-variant mb-12 text-base md:text-lg uppercase tracking-widest">
          Planes y paquetes diseñados para devolverle la perfección a tu vehículo
        </p>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-14">
          {categories.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-7 py-3 rounded-full font-label-bold text-xs md:text-sm tracking-wider transition-all ${
                  isActive
                    ? 'aqua-btn text-surface-dim shadow-lg shadow-primary/25 font-black border border-white/20'
                    : 'bg-surface-container/60 border border-primary/20 text-on-surface hover:text-white hover:border-primary backdrop-blur-sm'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${active !== 'Todos los Servicios' ? '' : 'mb-16'}`}>
          {filtered.map((s) => {
            const isFeatured = s.id === 'correction';
            const waMessage = `Hola Fine & Fresh, deseo agendar ${s.name}`;
            return (
              <div
                key={s.id}
                className={`glass-panel rounded-3xl overflow-hidden hover-lift group text-left flex flex-col relative ${
                  isFeatured ? 'border border-primary/40 shadow-[0_0_30px_rgba(0,242,254,0.2)]' : 'border border-primary/20'
                }`}
              >
                <div className="h-56 overflow-hidden relative">
                  <div className={`w-full h-full bg-gradient-to-br ${s.gradient} relative`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_45%)]"></div>
                    <span className="absolute bottom-6 left-1/2 -translate-x-1/2 material-symbols-outlined text-8xl text-white/85 drop-shadow-[0_0_25px_rgba(255,255,255,0.45)] group-hover:scale-110 transition-transform duration-700">
                      {s.icon}
                    </span>
                  </div>
                  <span
                    className={`absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-[11px] font-label-bold border ${
                      s.badgeStyle === 'aqua'
                        ? 'aqua-btn text-surface-dim font-black tracking-wider border border-white/20'
                        : 'bg-background/85 backdrop-blur-md text-primary border-primary/30'
                    }`}
                  >
                    {s.badge}
                  </span>
                </div>

                <div className="p-7 flex-1 flex flex-col justify-between relative z-20 -mt-10 bg-gradient-to-b from-transparent to-surface-container-lowest">
                  <div>
                    <h3 className="font-headline-md text-xl mb-1 text-white font-black">{s.name}</h3>
                    <p className="font-body-md text-xs text-primary uppercase tracking-widest mb-3 font-bold">{s.subtitle}</p>
                    <p className="text-xs text-on-surface-variant leading-relaxed mb-5">{s.description}</p>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex justify-between items-end mb-4">
                      <div>
                        <span className="text-xs text-on-surface-variant block uppercase tracking-wider">Inversión</span>
                        <p className="text-white font-headline-lg text-3xl font-black">
                          ${s.price}
                          <span className="text-xs font-label-bold text-primary uppercase tracking-widest ml-1">/ sesión</span>
                        </p>
                      </div>
                      <div className={`text-xs font-semibold text-right ${isFeatured ? 'text-primary' : 'text-primary/80'}`}>
                        Duración: {s.duration}
                      </div>
                    </div>
                    <a
                      href={getWhatsAppUrl(waMessage)}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-full py-2.5 rounded-xl text-xs font-label-bold tracking-wider flex items-center justify-center gap-2 transition-all font-bold ${
                        isFeatured
                          ? 'aqua-btn text-surface-dim font-black shadow-md border border-white/20'
                          : 'bg-surface-container/70 hover:bg-primary hover:text-surface-dim border border-primary/30 hover:border-primary text-white'
                      }`}
                    >
                      <span>AGENDAR AHORA</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <a
          href={getWhatsAppUrl(`Hola, quisiera recibir el catalogo completo de tratamientos de detailing de ${SITE.name}`)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 aqua-btn text-surface-dim font-label-bold px-12 py-5 rounded-full transition-all shadow-[0_0_25px_rgba(0,242,254,0.3)] hover:shadow-[0_0_35px_rgba(56,189,248,0.5)] tracking-widest font-black text-xs md:text-sm border border-white/20"
        >
          <span className="material-symbols-outlined text-lg">view_list</span>
          <span>VER TODOS LOS TRATAMIENTOS Y ADICIONALES</span>
        </a>
      </div>
    </section>
  );
}