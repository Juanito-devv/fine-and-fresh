const steps = [
  {
    icon: 'event_available',
    number: '01',
    title: 'Reserva en Línea',
    description: 'Escoge servicio, fecha y hora sin esperas interminables ni filas tediosas.',
  },
  {
    icon: 'shield_with_heart',
    number: '02',
    title: 'Cero Rayones',
    description: 'Protocolo estricto de contacto mínimo y microfibras ultra-suaves de 1200 GSM.',
  },
  {
    icon: 'military_tech',
    number: '03',
    title: 'Detalladores Pro',
    description: 'Contamos con los mejores productos y la maquinaria perfecta para trabajar.',
  },
  {
    icon: 'verified',
    number: '04',
    title: 'Inspección Rigurosa',
    description:
      'Diagnóstico, revisión de fluidos/frenos/dirección/refrigerante/limpiaparabrisas y presión de cauchos.',
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-section-gap relative overflow-hidden" id="proceso">
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="text-center mb-24">
          <h2 className="font-headline-xl text-3xl md:text-5xl font-extrabold mb-6">
            Beneficios <span className="gradient-text">Clave</span>
          </h2>
          <p className="font-body-lg text-on-surface-variant text-base md:text-lg uppercase tracking-widest">
            Lo que nos diferencia de un autolavado convencional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          <div className="absolute top-16 left-[10%] w-[80%] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden md:block"></div>
          {steps.map((step, i) => (
            <div key={step.number} className={`text-center relative z-10 group ${i % 2 === 1 ? 'mt-0 md:mt-12' : ''}`}>
              <div className="w-32 h-32 mx-auto glass-panel rounded-full flex items-center justify-center mb-8 border border-white/10 group-hover:border-primary/50 transition-all duration-500 shadow-xl group-hover:shadow-primary/30 relative">
                <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500"></div>
                <span className="material-symbols-outlined text-5xl z-10 text-primary drop-shadow-[0_0_14px_rgba(0,242,254,0.55)]">
                  {step.icon}
                </span>
              </div>
              <span className="text-primary font-label-bold text-sm block mb-4 tracking-widest">{step.number}</span>
              <h3 className="font-headline-md text-xl mb-4 text-white font-bold">{step.title}</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}