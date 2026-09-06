import Link from 'next/link';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const navLinks = [
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Paquetes', href: '/#paquetes' },
  { label: 'Mueblería', href: '/muebleria' },
  { label: 'Proceso', href: '/#proceso' },
  { label: 'Membresías', href: '/#membresias' },
  { label: 'Contacto', href: '/#contacto' },
];

export default function Header() {
  return (
    <nav className="w-full sticky top-0 z-50 bg-background/80 backdrop-blur-2xl border-b border-primary/15 shadow-2xl transition-all duration-300">
      <div className="max-w-container-max mx-auto flex justify-between items-center px-margin-mobile md:px-margin-desktop h-28">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="h-14 md:h-16 flex items-center px-2.5 py-1 rounded-2xl bg-surface-container-low/90 border border-primary/30 shadow-[0_0_20px_rgba(0,242,254,0.25)] group-hover:border-primary transition-all">
            <img
              alt="Fine & Fresh Car Wash & Auto Detailing"
              className="h-12 md:h-14 w-auto object-contain drop-shadow-[0_0_8px_rgba(0,242,254,0.6)]"
              src={`${basePath}/images/logo.jpg`}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-headline-lg text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-tertiary tracking-tight leading-none">
              FINE & FRESH
            </span>
            <span className="font-label-bold text-[10px] md:text-[11px] tracking-[0.28em] text-primary-fixed-dim font-bold mt-1.5">
              CAR WASH & AUTO DETAILING
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-label-bold text-xs tracking-widest text-on-surface hover:text-primary transition-colors luxury-border pb-1"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-5 md:space-x-9">
          <Link
            href="/agendar"
            className="font-label-bold aqua-btn px-7 md:px-9 py-4 rounded-full shadow-lg hover:shadow-primary/40 transition-all duration-300 text-xs tracking-widest font-black inline-flex items-center gap-2 text-surface-dim border border-white/20"
          >
            <span className="material-symbols-outlined text-base font-bold">calendar_month</span>
            <span>AGENDAR CITA</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}