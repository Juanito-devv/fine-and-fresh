import Link from 'next/link';
import { services, priceLabel } from '../../data/services';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export default function PackagesSection() {
  return (
    <section className="py-section-gap relative" id="paquetes">
      <div className="absolute inset-0 bg-surface-container-low/40 skew-y-3 -z-10 transform origin-top-left"></div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
        <h2 className="font-headline-xl text-3xl md:text-5xl font-extrabold mb-4">
          Nuestros <span className="gradient-text">Servicios</span>
        </h2>
        <p className="font-body-lg text-on-surface-variant mb-12 text-base md:text-lg uppercase tracking-widest">
          Cuatro niveles de cuidado para tu vehículo en cada visita
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {services.map((s) => {
            const isTop = s.id === 'samanes';
            const waMessage = `Hola Fine & Fresh, deseo agendar el servicio ${s.name}`;
            return (
              <div
                key={s.id}
                className={`glass-panel rounded-3xl overflow-hidden hover-lift group text-left flex flex-col relative ${
                  isTop ? 'border border-primary/40 shadow-[0_0_30px_rgba(0,242,254,0.2)]' : 'border border-primary/20'
                }`}
              >
                <div className="h-52 overflow-hidden relative">
                  <div className={`w-full h-full bg-gradient-to-br ${s.gradient} relative`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_45%)]"></div>
                    <span className="absolute bottom-6 left-1/2 -translate-x-1/2 material-symbols-outlined text-8xl text-white/85 drop-shadow-[0_0_25px_rgba(255,255,255,0.45)] group-hover:scale-110 transition-transform duration-700">
                      {s.icon}
                    </span>
                  </div>
                  <span className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full aqua-btn text-surface-dim text-[11px] font-label-bold font-black tracking-wider border border-white/20">
                    {s.badge}
                  </span>
                </div>

                <div className="p-7 flex-1 flex flex-col justify-between relative z-20 -mt-10 bg-gradient-to-b from-transparent to-surface-container-lowest">
                  <div>
                    <h3 className="font-headline-md text-2xl mb-1 text-white font-black">{s.name}</h3>
                    <p className="font-body-md text-xs text-primary uppercase tracking-widest mb-3 font-bold">{s.subtitle}</p>
                    <p className="text-xs text-on-surface-variant leading-relaxed mb-4">{s.description}</p>

                    <ul className="space-y-2 mb-5">
                      {s.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-on-surface-variant">
                          <span className="material-symbols-outlined text-primary text-sm mt-0.5">check</span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <div className="flex justify-between items-end mb-4">
                      <div>
                        <span className="text-xs text-on-surface-variant block uppercase tracking-wider">Inversión</span>
                        <p className="text-white font-headline-lg text-2xl font-black">
                          {priceLabel(s)}
                        </p>
                      </div>
                      <div className="text-xs text-primary/80 font-semibold text-right">Duración: {s.duration}</div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <a
                        href={getWhatsAppUrl(waMessage)}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-3 aqua-btn text-surface-dim text-xs font-label-bold tracking-wider flex items-center justify-center gap-2 font-black shadow-md border border-white/20 rounded-xl transition-all"
                      >
                        <span>AGENDAR POR WHATSAPP</span>
                        <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
                      </a>
                      <Link
                        href="/agendar"
                        className="w-full py-2.5 rounded-xl text-xs font-label-bold tracking-wider flex items-center justify-center gap-2 transition-all font-bold bg-surface-container/70 hover:bg-primary hover:text-surface-dim border border-primary/30 hover:border-primary text-white"
                      >
                        <span className="material-symbols-outlined text-sm">calendar_month</span>
                        <span>AGENDAR EN LÍNEA</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <a
          href={getWhatsAppUrl('Hola, quisiera recibir el catalogo completo de servicios de Fine & Fresh')}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 aqua-btn text-surface-dim font-label-bold px-12 py-5 rounded-full transition-all shadow-[0_0_25px_rgba(0,242,254,0.3)] hover:shadow-[0_0_35px_rgba(56,189,248,0.5)] tracking-widest font-black text-xs md:text-sm border border-white/20"
        >
          <span className="material-symbols-outlined text-lg">view_list</span>
          <span>VER TODOS LOS SERVICIOS</span>
        </a>
      </div>
    </section>
  );
}