export const vehicleTypes = [
  { id: 'carro', label: 'Carro', icon: 'directions_car' },
  { id: 'camioneta', label: 'Camioneta / SUV', icon: 'local_shipping' },
];

export const modalities = [
  { id: 'sede', label: 'Sede Principal (C.C Los Samanes)', icon: 'storefront' },
  { id: 'domicilio', label: 'A Domicilio', icon: 'home_work' },
];

export const services = [
  {
    id: 'bonita',
    name: 'La Bonita',
    subtitle: 'Lavado Básico Completo',
    priceCar: 12,
    pricePickup: 14,
    duration: '40 min aprox.',
    badge: 'LIMPIEZA COMPLETA',
    icon: 'water_drop',
    gradient: 'from-cyan-400 via-sky-500 to-blue-600',
    description:
      'Lavado esencial para mantener tu vehículo impecable, con enjuague de champú con cera a alta presión y limpieza rápida de rines y cauchos.',
    includes: [
      'Lavado básico con enjuague de champú con cera a alta presión',
      'Aspirado interno',
      'Aspirado de cabina',
      'Limpieza básica de rines y caucho',
    ],
  },
  {
    id: 'tahona',
    name: 'La Tahona',
    subtitle: 'Lavado Full + Cuidado',
    priceCar: 18,
    pricePickup: 22,
    duration: '1.5 hrs aprox.',
    badge: 'LAVADO FULL',
    icon: 'local_car_wash',
    gradient: 'from-sky-300 via-blue-500 to-indigo-600',
    description:
      'Todo lo de La Bonita más protección anti-ultravioleta, aspirado detallado y brillo extra en rines y cauchos. Incluye plan de fidelidad.',
    includes: [
      'Todo lo de La Bonita',
      'Protector contra rayos UV para tablero y puerta',
      'Aspirado detallado incluyendo área de caucho de repuesto',
      'Abrillantador de rines y silicón para los cauchos',
      'Plan de fidelidad',
      'Descuento en aromatizante',
    ],
  },
  {
    id: 'vip',
    name: 'VIP',
    subtitle: 'Experiencia Premium Completa',
    priceCar: 25,
    pricePickup: 30,
    duration: '2.5 hrs aprox.',
    badge: 'PREMIUM COMPLETO',
    icon: 'verified',
    gradient: 'from-amber-300 via-orange-400 to-rose-500',
    description:
      'El tratamiento completo: todo lo de La Tahona más diagnóstico integral y revisión de todos los fluidos y sistemas del vehículo.',
    includes: [
      'Todo lo de La Tahona',
      'Diagnóstico y revisión de todos los fluidos del motor',
      'Revisión de frenos, dirección y refrigerante',
      'Limpiaparabrisas',
      'Presión de los cauchos',
      'Descuento en aromatizante',
    ],
  },
];

export function getService(id) {
  return services.find((s) => s.id === id) || null;
}

export function getPrice(service, vehicleType) {
  if (!service) return 0;
  return vehicleType === 'camioneta' ? service.pricePickup : service.priceCar;
}

export function priceLabel(service) {
  if (!service) return '';
  return `$${service.priceCar} carro / $${service.pricePickup} camioneta`;
}

export function getVehicleType(id) {
  return vehicleTypes.find((v) => v.id === id) || null;
}