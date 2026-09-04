# Fine & Fresh

Sitio web de **Fine & Fresh — Autolavado y Detailing Profesional** en Caracas, Venezuela.

Next.js 14 + Tailwind CSS (export estático). Basado en el demo de Rueda Libre reutilizando el flujo de
cotización por WhatsApp + PDF y adaptado al diseño del estudio de detailing.

## Negocio
- Nombre: Fine & Fresh
- Dirección: C.C Los Samanes, Avenida 1, Caracas 1061, Miranda
- Horario: Lunes a Sábado, 8:30 am a 4:30 pm
- Servicios a domicilio disponibles
- WhatsApp: `0424-7377365` (+584247377365)

## Desarrollo
```bash
npm install
npm run dev      # desarrollo
npm run build    # export estático en /out
```

## Funcionalidad
- Landing con agendamiento express (widget en el hero) que precarga la página /agendar.
- Página /agendar: datos del cliente + tipo de vehículo + servicio + modalidad + fecha.
- Confirmación vía WhatsApp (mensaje de texto plano, sin emojis ni markdown).
- Cotización en PDF (jspdf) con equivalente en bolívares a la tasa BCV del día.