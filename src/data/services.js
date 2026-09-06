export const vehicleTypes = [
  { id: 'carro', label: 'Carro', icon: 'directions_car' },
  { id: 'camioneta', label: 'Camioneta / SUV', icon: 'local_shipping' },
];

export const modalities = [
  { id: 'sede', label: 'Sede Principal (C.C Los Samanes)', icon: 'storefront' },
  { id: 'domicilio', label: 'A Domicilio (vamos a tu casa)', icon: 'home_work' },
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
    priceCar: 15,
    pricePickup: 17,
    duration: '1.5 hrs aprox.',
    badge: 'LAVADO FULL',
    icon: 'local_car_wash',
    gradient: 'from-sky-300 via-blue-500 to-indigo-600',
    description:
      'Servicio La Bonita + protección anti-ultravioleta, aspirado detallado y brillo extra en rines y cauchos. Incluye plan de fidelidad.',
    includes: [
      'Servicio La Bonita +',
      'Protector contra rayos UV para tablero y puerta',
      'Aspirado detallado incluyendo área de caucho de repuesto',
      'Abrillantador de rines y silicón para los cauchos',
      'Plan de fidelidad: paga 4 veces cualquier plan que lo ofrezca y la 5.ª visita te sale gratis',
      'Descuento en aromatizante',
    ],
  },
  {
    id: 'samanes',
    name: 'Los Samanes',
    subtitle: 'Experiencia Premium Completa',
    priceCar: 22,
    pricePickup: 24,
    duration: '2 hrs aprox.',
    badge: 'PREMIUM COMPLETO',
    icon: 'verified',
    gradient: 'from-amber-300 via-orange-400 to-rose-500',
    description:
      'El tratamiento completo: Servicio La Tahona + diagnóstico integral y revisión de todos los fluidos y sistemas del vehículo.',
    includes: [
      'Servicio La Tahona +',
      'Diagnóstico y revisión de todos los fluidos del motor',
      'Revisión de frenos, dirección y refrigerante',
      'Limpiaparabrisas',
      'Presión de los cauchos',
      'Plan de fidelidad: paga 4 veces cualquier plan que lo ofrezca y la 5.ª visita te sale gratis',
      'Descuento en aromatizante',
    ],
  },
  {
    id: 'premium',
    name: 'Detailing Premium Full',
    subtitle: 'Restauración integral de interiores',
    priceCar: 80,
    pricePickup: 100,
    duration: 'Jornada completa aprox.',
    badge: 'PREMIUM FULL',
    icon: 'auto_awesome',
    gradient: 'from-fuchsia-400 via-purple-500 to-indigo-600',
    description:
      'Remozamiento profundo del interior: restauración, hidratación y desinfección de cada superficie de tu vehículo.',
    includes: [
      'Limpieza de techo',
      'Limpieza de alfombra',
      'Limpieza de asientos',
      'Limpieza de cristales',
      'Limpieza de puertas y botones',
      'Restauración de partes plásticas',
      'Hidratación de cueros',
      'Desinfección de cabecera',
      'Brillo para rines',
      'Silicón para los cauchos',
      'Plan de fidelidad: paga 4 veces cualquier plan que lo ofrezca y la 5.ª visita te sale gratis',
      'Descuento en aromatizante',
      'Adicional gratis: lavado exterior de champú con cera',
    ],
  },
];

export const aLaCarta = [
  { name: 'Solo Asiento', price: 40, note: '' },
  { name: 'Alfombra', price: 20, note: '' },
  { name: 'Tablero y Puertas', price: 25, note: '' },
  { name: 'Hidratación de Cuero', price: 45, note: '' },
  { name: 'Restauración de Plástico', price: 25, note: '' },
];

export const products = [
  {
    name: 'Desengrasante H7',
    icon: 'science',
    description: 'Desengrasante de uso profesional para superficies de alto tráfico.',
  },
  {
    name: 'Flamingo',
    icon: 'spa',
    description: 'Línea de limpieza y brillo multiusos de aplicación diaria.',
  },
  {
    name: 'Armor All',
    icon: 'auto_awesome',
    description: 'Protección y brillo prolongado para interiores y plásticos.',
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