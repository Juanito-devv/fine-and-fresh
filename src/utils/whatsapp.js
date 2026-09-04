import { getService, vehicleTypes, modalities } from '../data/services';
import { SITE } from '../config/site';

export function generateWhatsAppMessage(booking, total) {
  const service = getService(booking.serviceId);
  const vehicleType = vehicleTypes.find((v) => v.id === booking.vehicleType);
  const modality = modalities.find((m) => m.id === booking.modality);

  const sep = '──────────────────────────────────';

  const lines = [
    'FINE & FRESH',
    'Solicitud de Cita / Cotización',
    sep,
    '',
    `Nombre: ${booking.name || '—'}`,
    `Teléfono: ${booking.phone || '—'}`,
  ];

  if (booking.email) {
    lines.push(`Correo: ${booking.email}`);
  }

  lines.push(
    '',
    `Tipo de vehículo: ${vehicleType ? vehicleType.label : '—'}`,
    `Servicio: ${service ? service.name : '—'} ($${service ? service.price : '—'})`,
    `Modalidad: ${modality ? modality.label : '—'}`,
    `Fecha preferida: ${booking.date || '—'}`,
    ''
  );

  lines.push(sep, `TOTAL ESTIMADO: $${total}`, '');
  lines.push(
    `Horario: ${SITE.hours}.`,
    'Servicios a domicilio disponibles.',
    '',
    'Por favor, confirma la disponibilidad y coordina tu cita. ¡Gracias!'
  );

  return lines.join('\n');
}

export function getWhatsAppUrl(message) {
  const base = `https://api.whatsapp.com/send?phone=${SITE.whatsappNumber}`;
  if (!message) {
    return base;
  }
  return `${base}&text=${encodeURIComponent(message)}`;
}