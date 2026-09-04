const pillars = [
  {
    icon: 'water_drop',
    color: 'primary',
    title: 'Cuidado Artesanal',
    description:
      'Técnica de lavado con dos cubos con rejilla grit-guard, toallas de microfibra de 1200 GSM y secado con sopladores de aire filtrado tibio para cero microrrayas (anti-swirls).',
    footer: 'Cero rayones garantizado',
    footerIcon: 'shield',
  },
  {
    icon: 'science',
    color: 'tertiary',
    title: 'Química Avanzada',
    highlight: true,
    description:
      'Formulaciones pH neutro seguras para la pintura, descontaminación química férrica, selladores infundidos con grafeno y recubrimientos cerámicos de grado industrial.',
    footer: 'Protección hasta 36 meses',
    footerIcon: 'auto_fix_high',
  },
  {
    icon: 'local_cafe',
    color: 'secondary',
    title: 'Comodidad Total',
    description:
      'Disfruta de nuestra Sala VIP Lounge con barra de café de especialidad, fibra óptica de alta velocidad y vista al estudio, o solicita nuestro servicio de recolección y entrega a domicilio.',
    footer: 'Experiencia VIP Concierge',
    footerIcon: 'room_service',
  },
];

export default function ValueProps() {
  return (
    <section className="py-section-gap relative" id="servicios">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary font-label-bold text-xs tracking-widest mb-4 bubble-badge">
          ESTÁNDAR DE DETALLADO INTERNACIONAL
        </div>
        <h2 className="font-headline-xl text-3xl md:text-5xl font-extrabold mb-6">
          Nuestra <span className="gradient-text">Propuesta</span>
        </h2>
        <p className="font-body-lg text-on-surface-variant mb-20 text-base md:text-lg uppercase tracking-widest max-w-2xl mx-auto">
          Tres pilares que redefinen la estética automotriz en cada detalle
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div
              key={p.title}
              className={`glass-panel p-10 rounded-3xl hover-lift text-left border relative overflow-hidden group ${
                p.highlight ? 'border-primary/30 shadow-[0_0_30px_rgba(0,242,254,0.15)]' : 'border-white/5'
              }`}
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl transition-colors ${
                  p.color === 'tertiary' ? 'bg-tertiary/15 group-hover:bg-tertiary/25' : p.color === 'secondary' ? 'bg-secondary/10 group-hover:bg-secondary/20' : 'bg-primary/10 group-hover:bg-primary/20'
                }`}
              ></div>
              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-inner border ${
                  p.color === 'tertiary'
                    ? 'bg-gradient-to-br from-tertiary/25 to-primary/10 border-primary/40'
                    : p.color === 'secondary'
                      ? 'bg-gradient-to-br from-secondary/20 to-secondary/5 border-secondary/20'
                      : 'bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30'
                }`}
              >
                <span className={`material-symbols-outlined text-4xl ${p.color === 'secondary' ? 'text-secondary' : 'text-primary'}`}>
                  {p.icon}
                </span>
              </div>
              <h3 className="font-headline-md text-2xl mb-4 text-on-surface font-black">{p.title}</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed text-sm md:text-base">{p.description}</p>
              <div
                className={`mt-6 pt-4 border-t flex items-center text-xs font-label-bold tracking-wider gap-2 ${
                  p.color === 'tertiary' ? 'text-tertiary border-primary/20' : p.color === 'secondary' ? 'text-secondary border-t border-white/10' : 'text-primary border-white/10'
                }`}
              >
                <span className="material-symbols-outlined text-sm">{p.footerIcon}</span>
                {p.footer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}