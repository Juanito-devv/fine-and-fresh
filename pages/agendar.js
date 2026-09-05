import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '../src/components/layout/Header';
import Footer from '../src/components/layout/Footer';
import { services, vehicleTypes, modalities, getService, getPrice, priceLabel } from '../src/data/services';
import { SITE } from '../src/config/site';
import { generateWhatsAppMessage, getWhatsAppUrl } from '../src/utils/whatsapp';
import { generateQuotePdf } from '../src/utils/invoice';

export default function Agendar() {
  const router = useRouter();

  const [booking, setBooking] = useState({
    name: '',
    phone: '',
    email: '',
    serviceId: services[0].id,
    vehicleType: 'carro',
    modality: 'sede',
    date: '',
  });

  useEffect(() => {
    if (!router.isReady) return;
    const q = router.query;
    setBooking((prev) => ({
      ...prev,
      serviceId: services.some((s) => s.id === q.service) ? q.service : prev.serviceId,
      vehicleType: vehicleTypes.some((v) => v.id === q.vehicleType) ? q.vehicleType : prev.vehicleType,
      modality: modalities.some((m) => m.id === q.modality) ? q.modality : prev.modality,
      date: typeof q.date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(q.date) ? q.date : prev.date,
    }));
  }, [router.isReady]);

  const service = getService(booking.serviceId);
  const total = getPrice(service, booking.vehicleType);

  const emailFilled = booking.email.trim().length > 0;
  const emailValid = !emailFilled || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(booking.email.trim());
  const required = booking.name.trim() && booking.phone.trim() && booking.date && emailValid;

  const handleDownloadQuote = () => {
    generateQuotePdf({ booking, total });
  };

  const handleConfirm = () => {
    const message = generateWhatsAppMessage(booking, total);
    window.open(getWhatsAppUrl(message), '_blank');
    handleDownloadQuote();
  };

  const update = (key) => (e) => setBooking((prev) => ({ ...prev, [key]: e.target.value }));

  const inputClass =
    'w-full bg-surface-container-low/70 border border-white/10 rounded-xl py-3.5 pl-4 pr-4 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none font-body-md text-sm backdrop-blur-sm';

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header />

      <main className="py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary font-label-bold text-xs tracking-widest mb-4 bubble-badge">
              <span className="material-symbols-outlined text-sm">calendar_month</span>
              COTIZACIÓN EXPRESS
            </div>
            <h1 className="font-headline-xl text-3xl md:text-5xl font-extrabold mb-6">
              Agendar <span className="gradient-text">Cita</span>
            </h1>
            <p className="font-body-lg text-on-surface-variant text-base md:text-lg uppercase tracking-widest">
              Completa tus datos y coordina tu cita por WhatsApp
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="glass-panel rounded-3xl p-8 md:p-10 border border-primary/20 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-tertiary rounded-full blur-3xl opacity-20"></div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-label-bold text-on-surface-variant mb-2 tracking-widest">NOMBRE</label>
                    <input type="text" value={booking.name} onChange={update('name')} className={inputClass} placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label className="block text-xs font-label-bold text-on-surface-variant mb-2 tracking-widest">TELÉFONO</label>
                    <input type="tel" value={booking.phone} onChange={update('phone')} className={inputClass} placeholder="0412-0000000" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-label-bold text-on-surface-variant mb-2 tracking-widest">CORREO (OPCIONAL)</label>
                  <input type="email" value={booking.email} onChange={update('email')} className={inputClass} placeholder="tucorreo@ejemplo.com" />
                  {emailFilled && !emailValid && (
                    <p className="text-error text-xs mt-1">Revisa el correo: no parece válido.</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-label-bold text-on-surface-variant mb-2 tracking-widest">TIPO DE VEHÍCULO</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {vehicleTypes.map((vt) => (
                      <label
                        key={vt.id}
                        className={`flex items-center gap-2 p-3 rounded-xl cursor-pointer transition-all text-xs font-semibold border ${
                          booking.vehicleType === vt.id
                            ? 'bg-surface-container/70 border-primary/50 text-white shadow-[0_0_12px_rgba(0,242,254,0.15)]'
                            : 'bg-surface-container/40 border-white/10 text-on-surface hover:border-primary'
                        }`}
                      >
                        <input type="radio" name="car-type" className="sr-only" checked={booking.vehicleType === vt.id} onChange={() => setBooking((p) => ({ ...p, vehicleType: vt.id }))} />
                        <span className={`material-symbols-outlined text-base ${booking.vehicleType === vt.id ? 'text-primary' : 'text-on-surface-variant'}`}>{vt.icon}</span>
                        {vt.label}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-label-bold text-on-surface-variant mb-2 tracking-widest">SERVICIO REQUERIDO</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">cleaning_services</span>
                    <select value={booking.serviceId} onChange={update('serviceId')} className={`${inputClass} pl-12 appearance-none cursor-pointer`}>
                      {services.map((s) => (
                        <option key={s.id} className="bg-surface-container text-white" value={s.id}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none">expand_more</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-label-bold text-on-surface-variant mb-2 tracking-widest">MODALIDAD</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary text-lg">storefront</span>
                      <select value={booking.modality} onChange={update('modality')} className={`${inputClass} pl-11 appearance-none cursor-pointer`}>
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
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary text-lg">calendar_today</span>
                      <input type="date" value={booking.date} onChange={update('date')} className={`${inputClass} pl-11 [color-scheme:dark]`} />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-surface/50 border border-white/10 rounded-xl flex items-start gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                  <p>
                    Horario de atención: <span className="text-white font-semibold">{SITE.hours}</span>. Servicios a domicilio
                    disponibles en Caracas.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel-luxury rounded-3xl p-8 md:p-10 border border-primary/30 sticky top-28 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-tertiary rounded-full blur-3xl opacity-20"></div>

              <h2 className="font-headline-md text-2xl text-white font-black mb-8">Resumen de Cita</h2>

              <div className={`rounded-2xl overflow-hidden border border-primary/20 mb-6 h-24 relative bg-gradient-to-br ${service ? service.gradient : 'from-cyan-400 to-blue-600'}`}>
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 material-symbols-outlined text-5xl text-white/85 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                  {service ? service.icon : 'water_drop'}
                </span>
              </div>

              <div className="space-y-4 mb-6">
                {service && (
                  <div className="flex items-center gap-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary">cleaning_services</span>
                    <span>{service.name} · {service.duration}</span>
                  </div>
                )}
                <div className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary">directions_car</span>
                  <span>{vehicleTypes.find((v) => v.id === booking.vehicleType)?.label || '—'}</span>
                </div>
                <div className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary">storefront</span>
                  <span>{modalities.find((m) => m.id === booking.modality)?.label || '—'}</span>
                </div>
                {booking.date && (
                  <div className="flex items-center gap-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary">calendar_today</span>
                    <span>Fecha: {booking.date}</span>
                  </div>
                )}
                {service && (
                  <div className="flex items-center gap-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary">sell</span>
                    <span>Precio {vehicleTypes.find((v) => v.id === booking.vehicleType)?.label.toLowerCase() || ''}: ${getPrice(service, booking.vehicleType)} · {priceLabel(service)}</span>
                  </div>
                )}
              </div>

              <div className="border-t border-white/10 mt-4 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-white">TOTAL ESTIMADO</span>
                  <span className="text-3xl font-bold gradient-text">{total > 0 ? `$${total}` : '—'}</span>
                </div>
              </div>

              <button
                onClick={handleConfirm}
                disabled={!required}
                className="w-full mt-6 aqua-btn rounded-xl px-6 py-4 text-lg tracking-widest font-black disabled:opacity-50 disabled:cursor-not-allowed border border-white/20 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-lg font-bold">verified</span>
                Confirmar y Enviar a WhatsApp
              </button>

              <button
                onClick={handleDownloadQuote}
                disabled={!required}
                className="w-full mt-3 flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-primary/40 text-primary text-sm tracking-widest font-bold hover:bg-primary/10 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined text-lg">download</span>
                Descargar Cotización PDF
              </button>

              {!required && (
                <div className="text-yellow-400 text-sm mt-2 text-center">
                  {emailFilled && !emailValid
                    ? 'Revisa el correo electrónico: no parece válido'
                    : 'Completa nombre, teléfono y fecha para confirmar'}
                </div>
              )}

              <p className="text-[11px] text-center text-on-surface-variant mt-4">
                Sin compromiso. Confirmación inmediata vía WhatsApp.
              </p>

              <div className="mt-5 pt-4 border-t border-white/10">
                <Link href="/" className="text-xs text-primary hover:text-white transition-colors tracking-widest font-label-bold inline-flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                  VOLVER AL INICIO
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}