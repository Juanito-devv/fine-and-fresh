const steps = [
  {
    icon: 'tune',
    number: 'PASO 1',
    title: 'Elige',
    description: 'Selecciona el paquete o tratamiento ideal según las necesidades de tu auto.',
    accent: 'tertiary',
  },
  {
    icon: 'chat',
    number: 'PASO 2',
    title: 'Agenda',
    description: 'Confirma fecha, hora o servicio a domicilio al instante por WhatsApp.',
    accent: 'aqua',
  },
  {
    icon: 'auto_awesome',
    number: 'PASO 3',
    title: 'Disfruta',
    description: 'Recibe tu vehículo con acabado espejo, tacto de seda y fragancia exclusiva a nuevo.',
    accent: 'tertiary',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-section-gap relative">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
        <h2 className="font-headline-xl text-3xl md:text-5xl font-extrabold mb-6">
          Cómo <span className="gradient-text">Funciona</span>
        </h2>
        <p className="font-body-lg text-on-surface-variant mb-20 text-base md:text-lg uppercase tracking-widest">
          Un proceso fluido en 3 simples pasos
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="absolute top-24 left-[10%] w-[80%] h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden md:block z-0"></div>

          {steps.map((step) => (
            <div
              key={step.number}
              className={`relative z-10 glass-panel p-10 rounded-3xl ${
                step.accent === 'aqua'
                  ? 'border border-primary/40 md:mt-12 shadow-[0_0_30px_rgba(0,242,254,0.15)]'
                  : 'border border-white/5 hover:border-primary/40 transition-colors'
              }`}
            >
              <div
                className={`w-24 h-24 mx-auto rounded-2xl flex items-center justify-center mb-8 shadow-xl relative ${
                  step.accent === 'aqua'
                    ? 'aqua-btn border border-white/20 shadow-lg shadow-primary/30'
                    : 'bg-gradient-to-br from-surface to-surface-bright border border-primary/20'
                }`}
              >
                {step.accent !== 'aqua' && <div className="absolute inset-0 bg-primary/20 blur-xl rounded-2xl -z-10"></div>}
                <span className={`material-symbols-outlined text-4xl ${step.accent === 'aqua' ? 'text-surface-dim fill-icon' : 'text-primary'}`}>
                  {step.icon}
                </span>
              </div>
              <span className={`font-label-bold text-sm block mb-4 tracking-widest ${step.accent === 'aqua' ? 'text-primary' : 'text-primary'}`}>
                {step.number}
              </span>
              <h3 className="font-headline-md text-2xl mb-4 text-white font-bold">{step.title}</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}