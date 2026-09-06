import { aLaCarta } from '../../data/services';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export default function ALaCartaSection() {
  return (
    <section className="py-section-gap relative overflow-hidden" id="carta">
      <div className="absolute -left-24 top-1/3 w-80 h-80 bg-tertiary/10 rounded-full blur-[110px] pointer-events-none"></div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary font-label-bold text-xs tracking-widest mb-4 bubble-badge">
            <span className="material-symbols-outlined text-sm">tune</span>
            DETALLING A LA CARTA
          </div>
          <h2 className="font-headline-xl text-3xl md:text-5xl font-extrabold mb-6">
            Personaliza tu <span className="gradient-text">detailing</span>
          </h2>
          <p className="font-body-lg text-on-surface-variant text-base md:text-lg uppercase tracking-widest">
            Elige solo lo que tu vehículo necesita
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
          {aLaCarta.map((item) => (
            <div key={item.name} className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-primary/50 hover-lift text-center flex flex-col items-center justify-between transition-all">
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary text-2xl">cleaning_services</span>
              </div>
              <h3 className="font-headline-md text-sm text-white font-bold text-center leading-snug mb-1">{item.name}</h3>
              {item.note && <p className="text-[11px] text-on-surface-variant leading-snug mb-2">{item.note}</p>}
              <p className="text-primary font-headline-lg text-2xl font-black mb-4">${item.price}</p>
              <a
                href={getWhatsAppUrl(`Hola Fine & Fresh, quiero cotizar: ${item.name} (Detailing a la Carta)`)}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-label-bold tracking-widest text-primary hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <span>COTIZAR</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}