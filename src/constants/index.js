import uuid from 'uuid';

export const userConstants = {
  LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
  LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
  LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',
  LOGOUT: 'USERS_LOGOUT',
};

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
    // eslint-disable-next-line radix
    percentage: parseInt(Math.random() * 100),
  },
  {
    id: uuid(),
    title: 'Stephen King Book',
    category: 'Horror',
    // eslint-disable-next-line radix
    percentage: parseInt(Math.random() * 100),
  },
  {
    id: uuid(),
    title: 'Turkish History',
    category: 'History',
    // eslint-disable-next-line radix
    percentage: parseInt(Math.random() * 100),
  },
  {
    id: uuid(),
    title: 'The Pink Chicken',
    category: 'Kids',
    // eslint-disable-next-line radix
    percentage: parseInt(Math.random() * 100),
  },
  {
    id: uuid(),
    title: 'Napoleon',
    category: 'History',
    // eslint-disable-next-line radix
    percentage: parseInt(Math.random() * 100),
  },
];
