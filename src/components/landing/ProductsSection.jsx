import { products } from '../../data/services';

export default function ProductsSection() {
  return (
    <section className="py-section-gap relative overflow-hidden" id="productos">
      <div className="absolute inset-0 bg-surface-container-low/50 -z-10"></div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary font-label-bold text-xs tracking-widest mb-4 bubble-badge">
            <span className="material-symbols-outlined text-sm">lab_profile</span>
            PRODUCTOS UTILIZADOS EN TODOS LOS SERVICIOS
          </div>
          <h2 className="font-headline-xl text-3xl md:text-5xl font-extrabold mb-6">
            Nuestros <span className="gradient-text">Productos</span>
          </h2>
          <p className="font-body-lg text-on-surface-variant text-base md:text-lg uppercase tracking-widest">
            Química profesional de limpieza y conservación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {products.map((p) => (
            <div key={p.name} className="glass-panel rounded-2xl p-8 border border-white/10 hover:border-primary/50 hover-lift text-center transition-all">
              <div className="w-16 h-16 rounded-2xl mx-auto bg-primary/10 border border-primary/30 flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-3xl text-primary">{p.icon}</span>
              </div>
              <h3 className="font-headline-md text-lg text-white font-black mb-2">{p.name}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}