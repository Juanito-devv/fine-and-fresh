import { getWhatsAppUrl } from '../../utils/whatsapp';

const segments = [
  {
    icon: 'person',
    color: 'primary',
    title: 'Particulares & Entusiastas',
    subtitle: 'Cuidado personal y valor de reventa',
    items: [
      'Mantén tu auto de uso diario con aroma y aspecto de nuevo.',
      'Protege la pintura original contra el sol abrasador y lluvia ácida.',
      'Plan de fidelidad: paga 4 servicios y la 5.ª visita te sale gratis.',
    ],
    cta: '',
    waText: 'Hola, deseo conocer las membresias para particulares',
  },
  {
    icon: 'apartment',
    color: 'tertiary',
    title: 'Empresas & Flotas',
    subtitle: 'Imagen corporativa impecable',
    items: [
      'Convenios corporativos para flotas ejecutivas y directivas.',
      'Preparación estética para concesionarios, lanzamientos y eventos VIP.',
      'Facturación fiscal, horarios y servicio in-situ / delivery.',
    ],
    cta: 'SOLICITAR PROPUESTA CORPORATIVA',
    waText: 'Hola, quiero más información acerca de los planes corporativos y las tarifas para flotas, por favor.',
  },
];

export default function Segments() {
  return (
    <section className="py-section-gap relative" id="membresias">
      <div className="absolute inset-0 bg-surface-container-lowest/80 -z-10"></div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-headline-xl text-3xl md:text-5xl font-extrabold mb-6">
            Soluciones a <span className="gradient-text">tu Medida</span>
          </h2>
          <p className="font-body-lg text-on-surface-variant text-base md:text-lg uppercase tracking-widest">
            Planes de cuidado estético para cada exigencia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {segments.map((seg) => {
            const isPrimary = seg.color === 'primary';
            return (
              <div
                key={seg.title}
                className={`glass-panel p-10 md:p-12 rounded-3xl hover-lift border relative overflow-hidden group ${
                  isPrimary ? 'border-primary/20' : 'border-tertiary/25'
                }`}
              >
                <div
                  className={`absolute -right-20 -bottom-20 w-64 h-64 rounded-full blur-3xl transition-all duration-700 ${
                    isPrimary ? 'bg-primary/10 group-hover:bg-primary/20' : 'bg-tertiary/10 group-hover:bg-tertiary/20'
                  }`}
                ></div>
                <div className="flex items-center space-x-6 mb-10 relative z-10">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-surface flex items-center justify-center shadow-lg group-hover:border transition-colors ${
                      isPrimary ? 'border-primary/30 group-hover:border-primary' : 'border-tertiary/30 group-hover:border-tertiary'
                    }`}
                  >
                    <span className={`material-symbols-outlined text-4xl ${isPrimary ? 'text-primary' : 'text-tertiary'}`}>
                      {seg.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headline-md text-2xl md:text-3xl text-white font-black">{seg.title}</h3>
                    <p className={`text-xs uppercase tracking-widest font-bold mt-1 ${isPrimary ? 'text-primary' : 'text-tertiary'}`}>
                      {seg.subtitle}
                    </p>
                  </div>
                </div>

                <ul className="space-y-6 relative z-10 mb-8">
                  {seg.items.map((item) => (
                    <li key={item} className="flex items-center space-x-4 text-on-surface-variant text-base md:text-lg">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${
                          isPrimary ? 'bg-primary/10 border-primary/30' : 'bg-tertiary/10 border-tertiary/30'
                        }`}
                      >
                        <span className={`material-symbols-outlined text-sm font-bold ${isPrimary ? 'text-primary' : 'text-tertiary'}`}>check</span>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={getWhatsAppUrl(seg.waText)}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 text-xs font-label-bold transition-colors tracking-widest ${
                    seg.cta ? (isPrimary ? 'text-primary hover:text-white' : 'text-tertiary hover:text-white') : 'hidden'
                  }`}
                >
                  <span>{seg.cta}</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}