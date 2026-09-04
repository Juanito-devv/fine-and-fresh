export const vehicleTypes = [
  { id: 'sedan', label: 'Sedán / Coupé', icon: 'directions_car' },
  { id: 'suv', label: 'SUV Mediana', icon: 'airport_shuttle' },
  { id: 'pickup', label: 'Camioneta / 4x4', icon: 'local_shipping' },
  { id: 'sport', label: 'Deportivo / Exótico', icon: 'sports_score' },
];

export const modalities = [
  { id: 'sede', label: 'Sede Principal (C.C Los Samanes)', icon: 'storefront' },
  { id: 'domicilio', label: 'A Domicilio', icon: 'home_work' },
];

export const services = [
  {
    id: 'hydro',
    name: 'Lavado Signature Hydro',
    price: 25,
    duration: '60 min',
    category: 'Lavado & Spa',
    badge: 'MANTENIMIENTO',
    subtitle: 'Lavado Premium a Mano',
    icon: 'water_drop',
    gradient: 'from-cyan-400 via-sky-500 to-blue-600',
    description:
      'Pre-lavado con cañón de espuma neutra densa, descontaminación ligera, limpieza profunda de rines/llantas y sellado express hidrofóbico.',
  },
  {
    id: 'interior',
    name: 'Detailing Interior Profundo',
    price: 55,
    duration: '3.5 hrs',
    category: 'Detailing Pro',
    badge: 'INTERIOR SPA',
    subtitle: 'Vapor 140°C & Ozono',
    icon: 'event_seat',
    gradient: 'from-teal-400 via-cyan-500 to-sky-600',
    description:
      'Desinfección térmica con vapor seco, acondicionamiento y nutrición de tapicería de cuero, inyección-succión en telas y esterilización con cañón de ozono.',
  },
  {
    id: 'correction',
    name: 'Corrección de Pintura & Glaze',
    price: 110,
    duration: '1 día',
    category: 'Detailing Pro',
    badge: 'MÁS SOLICITADO',
    badgeStyle: 'aqua',
    subtitle: 'Restauración Espejo 2 Pasos',
    icon: 'auto_awesome',
    gradient: 'from-amber-300 via-orange-400 to-rose-500',
    description:
      'Eliminación de microrrayas y hologramas en hasta un 85%, afinado óptico de laca transparente con abrillantador espejo y sellador polimérico de larga duración.',
  },
  {
    id: 'ceramic',
    name: 'Ceramic Shield 9H & Graphene',
    price: 240,
    duration: '2 días',
    category: 'Tratamientos Cerámicos',
    badge: 'PROTECCIÓN SUPREMA',
    subtitle: 'Grafeno & Cerámica 3 Años',
    icon: 'diamond',
    gradient: 'from-sky-300 via-blue-500 to-indigo-700',
    description:
      'Recubrimiento de grado aeroespacial que sella los poros del barniz con dureza 9H. Efecto superhidrofóbico extremo, repelencia de polvo, lluvia ácida y rayos UV.',
  },
];

export const categories = ['Todos los Servicios', 'Lavado & Spa', 'Detailing Pro', 'Tratamientos Cerámicos'];

export function getService(id) {
  return services.find((s) => s.id === id) || null;
}