const filterBooks = (books, filter) => {
  if (filter === 'All') return books;
  return books.filter(book => book.category === filter);
};

export default { filterBooks };
