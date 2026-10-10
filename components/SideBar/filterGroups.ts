export const filterGroups = [
  {
    name: 'form',
    legend: 'Camper form',
    options: [
      { value: 'alcove', label: 'Alcove' },
      { value: 'panel_van', label: 'Panel Van' },
      { value: 'integrated', label: 'Integrated' },
      { value: 'semi_integrated', label: 'Semi integrated' },
    ],
  },
  {
    name: 'engine',
    legend: 'Engine',
    options: [
      { value: 'diesel', label: 'Diesel' },
      { value: 'petrol', label: 'Petrol' },
      { value: 'hybrid', label: 'Hybrid' },
      { value: 'electric', label: 'Electric' },
    ],
  },
  {
    name: 'transmission',
    legend: 'Transmission',
    options: [
      { value: 'automatic', label: 'Automatic' },
      { value: 'manual', label: 'Manual' },
    ],
  },
] as const;

export type FilterName = (typeof filterGroups)[number]['name'];
