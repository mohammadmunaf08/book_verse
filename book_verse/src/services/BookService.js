export const searchBooks = async (query, maxResults = 20) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=${maxResults}`
    );
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};

export const formatBookData = (book) => {
  const volumeInfo = book.volumeInfo;
  return {
    id: book.id,
    title: volumeInfo.title || 'Unknown Title',
    author: volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Unknown Author',
    description: volumeInfo.description || 'No description available',
    coverImage: volumeInfo.imageLinks?.thumbnail?.replace('http://', 'https://') || '/default-book-cover.jpg',
    genre: volumeInfo.categories ? volumeInfo.categories[0] : 'Uncategorized',
    publishedDate: volumeInfo.publishedDate,
    rating: volumeInfo.averageRating,
    pageCount: volumeInfo.pageCount
  };
};