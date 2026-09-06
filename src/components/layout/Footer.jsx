import Link from 'next/link';
import { SITE } from '../../config/site';
import { getWhatsAppUrl } from '../../utils/whatsapp';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Footer() {
  const waUrl = getWhatsAppUrl('Hola Fine & Fresh, quiero información sobre sus servicios de autolavado y detailing');

  return (
    <footer className="relative overflow-hidden bg-surface-container-lowest border-t border-primary/20" id="contacto">
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-14 flex items-center px-2 py-1 rounded-2xl bg-surface-container-low/90 border border-primary/30">
                <img alt="Fine & Fresh" className="h-10 w-auto object-contain" src={`${basePath}/images/logo.jpg`} />
              </div>
              <div>
                <span className="font-headline-lg text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-tertiary leading-none block">
                  FINE & FRESH
                </span>
                <span className="font-label-bold text-[9px] tracking-[0.28em] text-primary-fixed-dim font-bold block mt-1">
                  CAR WASH & DETAILING
                </span>
              </div>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Autolavado y detailing profesional en Caracas. Cuidado artesanal, química avanzada y
              experiencia premium para tu vehículo.
            </p>
          </div>

          <div>
            <h4 className="font-label-bold text-xs tracking-widest text-primary mb-5 font-bold">CONTACTO</h4>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg">schedule</span>
                <span>{SITE.hours}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg">phone_iphone</span>
                <a href={`tel:+58${SITE.whatsappNumber.slice(1)}`} className="hover:text-white transition-colors">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg">home_work</span>
                <span>Servicios a domicilio disponibles</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-label-bold text-xs tracking-widest text-primary mb-5 font-bold">ENLACES</h4>
            <ul className="space-y-3 text-sm text-on-surface-variant">
              <li><Link href="/#servicios" className="hover:text-primary transition-colors">Nuestra Propuesta</Link></li>
              <li><Link href="/#paquetes" className="hover:text-primary transition-colors">Tratamientos y Paquetes</Link></li>
              <li><Link href="/#carta" className="hover:text-primary transition-colors">Detailing a la Carta</Link></li>
              <li><Link href="/#productos" className="hover:text-primary transition-colors">Productos</Link></li>
              <li><Link href="/muebleria" className="hover:text-primary transition-colors">Fine & Fresh Mueblería</Link></li>
              <li><Link href="/#proceso" className="hover:text-primary transition-colors">Beneficios Clave</Link></li>
              <li><Link href="/agendar" className="hover:text-primary transition-colors">Agendar Cita</Link></li>
            </ul>
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-6 aqua-btn px-6 py-3 rounded-full text-xs tracking-widest font-black text-surface-dim border border-white/20 transition-all"
            >
              <span className="material-symbols-outlined text-sm">chat</span>
              ESCRIBIR POR WHATSAPP
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant/70">
          <span>© {new Date().getFullYear()} {SITE.name} · {SITE.city}</span>
          <span>Autolavado y Detailing Profesional</span>
        </div>
      </div>
    </footer>
  );
}