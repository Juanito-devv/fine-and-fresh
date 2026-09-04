import { useState } from 'react';
import Link from 'next/link';
import { SITE } from '../../config/site';
import { services, vehicleTypes, modalities } from '../../data/services';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export default function HeroSection() {
  const [vehicleType, setVehicleType] = useState('sedan');
  const [serviceId, setServiceId] = useState(services[0].id);
  const [modality, setModality] = useState('sede');
  const [date, setDate] = useState('');

  const appointmentHref = `/agendar?service=${serviceId}&vehicleType=${vehicleType}&modality=${modality}${
    date ? `&date=${date}` : ''
  }`;

  return (
    <section className="relative min-h-[92vh] flex items-center pt-16 pb-20 overflow-hidden hydro-shine" id="agendar">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/85 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/15 via-background to-background opacity-70"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[140px] pointer-events-none"></div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-20 w-full flex flex-col lg:flex-row items-center justify-between gap-stack-lg">
        <div className="w-full lg:w-1/2 space-y-7 text-center lg:text-left relative">
          <div className="absolute -left-10 -top-12 text-9xl font-black text-primary/5 select-none -z-10 tracking-widest">FRESH</div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary font-label-bold text-xs tracking-widest bubble-badge">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
            STUDIO BOUTIQUE EN CARACAS
          </div>
          <h1 className="font-display-lg text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
            Brillo impecable, <br />
            <span className="gradient-text">protección absoluta</span>
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto lg:mx-0 text-base md:text-lg">
            Servicios premium de lavado a mano sin rayones, corrección de pintura profesional,
            recubrimientos cerámicos 9H y detallado de interiores. Reserva tu turno en minutos con
            Fine & Fresh.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
            <a
              href="/#paquetes"
              className="font-label-bold aqua-btn px-9 py-4 rounded-full transition-all duration-300 animate-pulse-glow text-xs md:text-sm tracking-widest font-black inline-flex items-center justify-center gap-2 border border-white/20"
            >
              <span>EXPLORAR TRATAMIENTOS</span>
              <span className="material-symbols-outlined text-lg font-bold">arrow_forward</span>
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="font-label-bold glass-panel px-7 py-4 rounded-full hover:bg-primary/10 hover:border-primary/50 transition-all text-xs md:text-sm tracking-widest font-bold inline-flex items-center justify-center gap-2 border border-white/10 text-white"
            >
              <span className="material-symbols-outlined text-[#25D366] text-lg">chat</span>
              <span>CONSULTA EXPRESS</span>
            </a>
          </div>

          <div className="pt-6 grid grid-cols-3 gap-4 border-t border-primary/15 max-w-lg mx-auto lg:mx-0">
            <div>
              <p className="text-2xl font-black text-white">9H & Grafeno</p>
              <p className="text-xs text-on-surface-variant uppercase tracking-wider mt-0.5">Certificado Pro</p>
            </div>
            <div>
              <p className="text-2xl font-black text-primary">100%</p>
              <p className="text-xs text-on-surface-variant uppercase tracking-wider mt-0.5">Anti-Swirls</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white">+2,800</p>
              <p className="text-xs text-on-surface-variant uppercase tracking-wider mt-0.5">Autos Tratados</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-5/12 glass-panel-luxury rounded-3xl p-8 md:p-10 shadow-2xl relative z-30 mt-8 lg:mt-0 border border-primary/30">
          <div className="absolute -top-4 -right-4 w-28 h-28 bg-gradient-to-br from-primary to-tertiary rounded-full blur-3xl opacity-30 pointer-events-none"></div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-headline-md font-bold text-white">Agendar Tratamiento</h2>
              <p className="text-xs text-primary/80 tracking-wider uppercase">Cotización express sin demoras</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-primary/15 text-primary text-[11px] font-label-bold border border-primary/30">
              DISPONIBLE HOY
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-label-bold text-on-surface-variant mb-2 tracking-widest">TIPO DE VEHÍCULO</label>
              <div className="grid grid-cols-2 gap-2">
                {vehicleTypes.map((vt, i) => (
                  <label
                    key={vt.id}
                    className={`flex items-center gap-2 p-3 rounded-xl cursor-pointer transition-all text-xs font-semibold border ${
                      vehicleType === vt.id
                        ? 'bg-surface-container/70 border-primary/50 text-white shadow-[0_0_12px_rgba(0,242,254,0.15)]'
                        : 'bg-surface-container/40 border-white/10 text-on-surface hover:border-primary'
                    }`}
                  >
                    <input
                      type="radio"
                      name="hero-car-type"
                      className="sr-only"
                      checked={vehicleType === vt.id}
                      onChange={() => setVehicleType(vt.id)}
                    />
                    <span className={`material-symbols-outlined text-base ${vehicleType === vt.id ? 'text-primary' : 'text-on-surface-variant'}`}>
                      {vt.icon}
                    </span>
                    {vt.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-label-bold text-on-surface-variant mb-2 tracking-widest">
                SERVICIO REQUERIDO
              </label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary transition-colors">cleaning_services</span>
                <select
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="w-full bg-surface-container-low/70 border border-white/10 rounded-xl py-3.5 pl-12 pr-10 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none font-body-md text-sm backdrop-blur-sm appearance-none cursor-pointer"
                >
                  {services.map((s) => (
                    <option key={s.id} className="bg-surface-container text-white" value={s.id}>
                      {s.name} (${s.price})
                    </option>
                  ))}
                </select>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none">expand_more</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-label-bold text-on-surface-variant mb-2 tracking-widest">MODALIDAD</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary text-lg">storefront</span>
                  <select
                    value={modality}
                    onChange={(e) => setModality(e.target.value)}
                    className="w-full bg-surface-container-low/70 border border-white/10 rounded-xl py-3.5 pl-11 pr-8 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none font-body-md text-xs backdrop-blur-sm appearance-none cursor-pointer"
                  >
                    {modalities.map((m) => (
                      <option key={m.id} className="bg-surface-container text-white" value={m.id}>
                        {m.label}
                      </option>
                    ))}
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-primary text-sm pointer-events-none">expand_more</span>
                </div>
              </div>
              <div>
                <label className="block text-xs font-label-bold text-on-surface-variant mb-2 tracking-widest">FECHA PREFERIDA</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary text-lg">calendar_today</span>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-surface-container-low/70 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none font-body-md text-xs backdrop-blur-sm [color-scheme:dark]"
                  />
                </div>
              </div>
            </div>

            <Link
              href={appointmentHref}
              className="w-full font-label-bold aqua-btn py-4 rounded-xl mt-2 transition-all duration-300 text-xs tracking-widest font-black shadow-[0_0_20px_rgba(0,242,254,0.4)] hover:shadow-[0_0_30px_rgba(0,242,254,0.7)] flex items-center justify-center gap-2 border border-white/20"
            >
              <span className="material-symbols-outlined text-lg font-bold">verified</span>
              <span>COTIZAR Y AGENDAR</span>
            </Link>
            <p className="text-[11px] text-center text-on-surface-variant">Sin compromiso. Confirmación inmediata vía WhatsApp.</p>
          </div>
        </div>
      </div>
    </section>
  );
}