import { SITE } from '../config/site';
import { getService, vehicleTypes, modalities } from '../data/services';
import { fetchBcvRate, formatVes } from './currency';

function formatDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(`${dateStr}T00:00:00`);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString('es-VE', { day: '2-digit', month: 'long', year: 'numeric' });
}

function today() {
  return new Date().toLocaleDateString('es-VE', { day: '2-digit', month: 'long', year: 'numeric' });
}

function money(value) {
  return `$${Number(value || 0).toFixed(2)}`;
}

export async function generateQuotePdf({ booking, total }) {
  const { default: jsPDF } = await import('jspdf');
  const { default: autoTable } = await import('jspdf-autotable');

  const bcvRate = await fetchBcvRate();

  const service = getService(booking.serviceId);
  const vehicleType = vehicleTypes.find((v) => v.id === booking.vehicleType);
  const modality = modalities.find((m) => m.id === booking.modality);

  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 14;

  const quoteNumber = `FF-${String(service ? 1 : 0).padStart(2, '0')}-${Date.now().toString().slice(-4)}`;

  doc.setFillColor(0, 220, 230);
  doc.rect(0, 0, pageW, 38, 'F');
  doc.setFillColor(12, 20, 28);
  doc.rect(0, 38, pageW, 1.5, 'F');

  doc.setTextColor(12, 20, 28);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.text(SITE.name.toUpperCase(), margin, 18);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10.5);
  doc.text(SITE.tagline, margin, 25);
  doc.setFontSize(8.5);
  doc.setTextColor(40, 90, 100);
  doc.text(`${SITE.city} · ${SITE.whatsappDisplay}`, margin, 32);

  doc.setTextColor(12, 20, 28);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.text('COTIZACIÓN / ORDEN DE SERVICIO', pageW - margin, 16, { align: 'right' });
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.text(`No. ${quoteNumber}`, pageW - margin, 23, { align: 'right' });
  doc.text(`Fecha de emisión: ${today()}`, pageW - margin, 28.5, { align: 'right' });
  doc.setFontSize(9);
  doc.setTextColor(120, 130, 140);
  doc.text(SITE.email, pageW - margin, 34, { align: 'right' });

  let y = 52;

  doc.setFillColor(12, 20, 28);
  doc.rect(margin, y - 5, pageW - margin * 2, 8, 'F');
  doc.setTextColor(0, 220, 230);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('FACTURAR A', margin + 3, y);
  y += 12;

  doc.setFontSize(10);
  doc.setTextColor(30, 40, 50);
  doc.setFont('helvetica', 'bold');
  doc.text(booking.name || '—', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.text(`Teléfono: ${booking.phone || '—'}`, pageW - margin, y, { align: 'right' });
  y += 6;
  doc.text(`Correo: ${booking.email || '—'}`, margin + 2, y);
  y += 6;
  doc.text(`Fecha preferida: ${formatDate(booking.date)}`, margin + 2, y);
  y += 8;

  doc.setFontSize(9.5);
  doc.text(`Tipo de vehículo: ${vehicleType ? vehicleType.label : '—'}`, margin, y);
  y += 6;
  doc.text(`Modalidad: ${modality ? modality.label : '—'}`, margin, y);
  y += 8;

  autoTable(doc, {
    startY: y,
    margin: { left: margin, right: margin },
    head: [['Servicio', 'Detalle', 'Duración', 'Inversión ($)']],
    body: service
      ? [[service.name, service.subtitle, service.duration, money(service.price)]]
      : [],
    foot: [['', '', 'TOTAL', money(total)]],
    theme: 'striped',
    headStyles: {
      fillColor: [12, 20, 28],
      textColor: [0, 220, 230],
      fontStyle: 'bold',
      fontSize: 9,
    },
    footStyles: {
      fillColor: [0, 220, 230],
      textColor: [12, 20, 28],
      fontStyle: 'bold',
      fontSize: 11,
    },
    bodyStyles: { fontSize: 9.5, textColor: [30, 40, 50] },
    columnStyles: {
      0: { cellWidth: 70 },
      1: { cellWidth: 56 },
      2: { cellWidth: 24, halign: 'center' },
      3: { cellWidth: 28, halign: 'right' },
    },
  });

  const tableEnd = doc.lastAutoTable ? doc.lastAutoTable.finalY + 6 : y + 10;
  let ny = tableEnd;

  if (bcvRate) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(12, 20, 28);
    doc.text(`Equivalente en bolívares: ${formatVes(bcvRate * total)}`, margin, ny);
    ny += 6;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(90, 100, 110);
    doc.text(
      `Tasa BCV del día (oficial): 1 USD = Bs. ${bcvRate.toLocaleString('es-VE', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`,
      margin,
      ny
    );
    ny += 8;
  }

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(90, 100, 110);
  doc.text(`Horario de atención: ${SITE.hours} (Lunes a Sábado).`, margin, ny);
  ny += 5;
  doc.text('Servicios a domicilio disponibles en la ciudad de Caracas.', margin, ny);
  ny += 5;
  doc.text('Esta cotización es estimada y está sujeta a la confirmación del servicio por WhatsApp.', margin, ny);
  ny += 5;
  doc.text(`Dirección: ${SITE.address}.`, margin, ny);
  ny += 5;
  doc.text(`Contacto: ${SITE.whatsappDisplay} · ${SITE.email}`, margin, ny);

  doc.setFontSize(8.5);
  doc.setTextColor(150, 160, 170);
  doc.text(`${SITE.name} · ${SITE.city}`, pageW - margin, pageH - 12, { align: 'right' });
  doc.text('Documento generado automáticamente por fineandfresh.com', pageW - margin, pageH - 8, { align: 'right' });

  doc.save(`Cotizacion-${quoteNumber}.pdf`);
}