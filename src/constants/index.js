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
  },
  {
    id: uuid(),
    title: 'Stephen King Book',
    category: 'Horror',
  },
  {
    id: uuid(),
    title: 'Turkish History',
    category: 'History',
  },
  {
    id: uuid(),
    title: 'The Pink Chicken',
    category: 'Kids',
  },
  {
    id: uuid(),
    title: 'Napoleon',
    category: 'History',
  },
];
