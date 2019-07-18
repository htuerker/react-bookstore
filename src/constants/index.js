import uuid from 'uuid';

export const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

export const filters = ['All', ...categories];

export const mockBooks = [
  {
    id: uuid(),
    title: 'El Zorro Fuerte',
    category: 'Action',
    percentage: parseInt(Math.random() * 100),
  },
  {
    id: uuid(),
    title: 'Stephen King Book',
    category: 'Horror',
    percentage: parseInt(Math.random() * 100),
  },
  {
    id: uuid(),
    title: 'Turkish History',
    category: 'History',
    percentage: parseInt(Math.random() * 100),
  },
  {
    id: uuid(),
    title: 'The Pink Chicken',
    category: 'Kids',
    percentage: parseInt(Math.random() * 100),
  },
  {
    id: uuid(),
    title: 'Napoleon',
    category: 'History',
    percentage: parseInt(Math.random() * 100),
  },
];
