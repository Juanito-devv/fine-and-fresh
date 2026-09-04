import Link from 'next/link';
import { SITE } from '../../config/site';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export default function ContactSection() {
  return (
    <section className="py-28 relative overflow-hidden border-t border-primary/20" id="contacto">
      <div className="absolute inset-0">
        <div className="absolute -top-24 right-10 w-96 h-96 bg-primary/15 rounded-full blur-[130px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-aqua-deep/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface-container-low/60 via-background to-background opacity-80"></div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="glass-panel-luxury rounded-3xl p-10 md:p-16 text-center border border-primary/30 relative overflow-hidden">
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary to-tertiary rounded-full blur-3xl opacity-30 pointer-events-none"></div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary font-label-bold text-xs tracking-widest mb-6 bubble-badge">
            <span className="material-symbols-outlined text-sm">auto_awesome</span>
            LISTOS PARA TRANSFORMAR TU AUTO
          </div>
          <h2 className="font-headline-xl text-3xl md:text-5xl font-extrabold mb-6">
            Agenda tu <span className="gradient-text">cita hoy</span>
          </h2>
          <p className="font-body-lg text-on-surface-variant mb-10 text-base md:text-lg max-w-2xl mx-auto">
            Cotización express sin compromiso. Confirmación inmediata vía WhatsApp.
            <br />
            Horario: {SITE.hours}.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              href="/agendar"
              className="font-label-bold aqua-btn px-10 py-4 rounded-full transition-all duration-300 animate-pulse-glow text-xs md:text-sm tracking-widest font-black inline-flex items-center justify-center gap-2 border border-white/20"
            >
              <span className="material-symbols-outlined text-lg font-bold">calendar_month</span>
              <span>AGENDAR CITA</span>
            </Link>
            <a
              href={getWhatsAppUrl('Hola Fine & Fresh, quiero cotizar y agendar un servicio de detailing')}
              target="_blank"
              rel="noreferrer"
              className="font-label-bold glass-panel px-7 py-4 rounded-full hover:bg-primary/10 hover:border-primary/50 transition-all text-xs md:text-sm tracking-widest font-bold inline-flex items-center justify-center gap-2 border border-white/10 text-white"
            >
              <span className="material-symbols-outlined text-[#25D366] text-lg">chat</span>
              <span>ESCRIBIR POR WHATSAPP</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
            <div className="glass-panel p-5 rounded-2xl border border-white/10">
              <p className="font-label-bold text-[10px] tracking-widest text-primary mb-2 font-bold">UBICACIÓN</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">{SITE.address}</p>
            </div>
            <div className="glass-panel p-5 rounded-2xl border border-white/10">
              <p className="font-label-bold text-[10px] tracking-widest text-primary mb-2 font-bold">HORARIO</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">{SITE.hours}</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">Servicios a domicilio</p>
            </div>
            <div className="glass-panel p-5 rounded-2xl border border-white/10">
              <p className="font-label-bold text-[10px] tracking-widest text-primary mb-2 font-bold">WHATSAPP</p>
              <a
                href={`tel:+58${SITE.whatsappNumber.slice(1)}`}
                className="text-sm text-white font-semibold hover:text-primary transition-colors"
              >
                {SITE.phoneDisplay}
              </a>
              <p className="text-sm text-on-surface-variant">Respuesta rápida</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}