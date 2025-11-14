/**
 * Perfiles falsos para mostrar en la landing
 * Estos perfiles son solo para demostración visual
 */

export interface MockProfile {
  id: string;
  name: string;
  age: number;
  location: string;
  bio: string;
  imgUrl: string;
  tags: Array<{ id: number; name: string }>;
  compatibility: number;
  sevilla_zona: string;
  roommatesNeeded: number;
  has_apartment: boolean;
}

export const mockProfiles: MockProfile[] = [
  {
    id: 'mock-1',
    name: 'Elena',
    age: 23,
    location: 'Sevilla',
    bio: 'Estudiante de Arquitectura. Me gusta leer, el arte y las noches tranquilas. Busco piso cerca de la universidad.',
    imgUrl: '/3b1eaee0f490dfab8219bc84cffdd648.jpg',
    tags: [
      { id: 1, name: 'Ordenada' },
      { id: 2, name: 'Tranquila' },
      { id: 3, name: 'Estudiante' }
    ],
    compatibility: 92,
    sevilla_zona: 'Nervión',
    roommatesNeeded: 2,
    has_apartment: false
  },
  {
    id: 'mock-2',
    name: 'Carlos',
    age: 25,
    location: 'Sevilla',
    bio: 'Desarrollador web, amante de la tecnología y los videojuegos. Busco un ambiente relajado.',
    imgUrl: '/5abb58d3e467cea5db565121acb6a011.jpg',
    tags: [
      { id: 1, name: 'Tecnología' },
      { id: 4, name: 'Deportista' },
      { id: 5, name: 'Profesional' }
    ],
    compatibility: 88,
    sevilla_zona: 'Triana',
    roommatesNeeded: 1,
    has_apartment: true
  },
  {
    id: 'mock-3',
    name: 'Laura',
    age: 22,
    location: 'Sevilla',
    bio: 'Estudiante de Medicina. Me encanta cocinar y compartir momentos con amigos.',
    imgUrl: '/a8a02f1699d7efe522aa4bc1247cc6cd.jpg',
    tags: [
      { id: 6, name: 'Sociable' },
      { id: 7, name: 'Cocinera' },
      { id: 3, name: 'Estudiante' }
    ],
    compatibility: 95,
    sevilla_zona: 'Los Remedios',
    roommatesNeeded: 2,
    has_apartment: false
  },
  {
    id: 'mock-4',
    name: 'Miguel',
    age: 24,
    location: 'Sevilla',
    bio: 'Estudiante de Ingeniería. Deportista y amante de las actividades al aire libre.',
    imgUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000',
    tags: [
      { id: 1, name: 'Deportista' },
      { id: 2, name: 'Activo' },
      { id: 3, name: 'Estudiante' }
    ],
    compatibility: 87,
    sevilla_zona: 'Centro',
    roommatesNeeded: 1,
    has_apartment: false
  },
  {
    id: 'mock-5',
    name: 'Sara',
    age: 21,
    location: 'Sevilla',
    bio: 'Estudiante de Derecho. Busco un ambiente de estudio tranquilo y compañeras responsables.',
    imgUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000',
    tags: [
      { id: 1, name: 'Estudiosa' },
      { id: 2, name: 'Responsable' },
      { id: 3, name: 'Tranquila' }
    ],
    compatibility: 94,
    sevilla_zona: 'Nervión',
    roommatesNeeded: 2,
    has_apartment: true
  },
  {
    id: 'mock-6',
    name: 'Javier',
    age: 26,
    location: 'Sevilla',
    bio: 'Trabajador freelance. Flexible con horarios y busco compañeros de piso relajados.',
    imgUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000',
    tags: [
      { id: 1, name: 'Flexible' },
      { id: 2, name: 'Tranquilo' },
      { id: 3, name: 'Profesional' }
    ],
    compatibility: 90,
    sevilla_zona: 'Triana',
    roommatesNeeded: 1,
    has_apartment: false
  }
];
