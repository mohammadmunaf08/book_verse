import React from 'react'
import { useParams, Link } from 'react-router-dom'

const BookDetail = () => {
  const { id } = useParams()
  
  const book = {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
    rating: 4,
    reviews: 150,
    genres: ["Fiction", "Classic", "Romance", "American Literature"],
    description: "A classic novel of the Jazz Age, exploring themes of idealism, resistance to change, social upheaval, and excess. The story primarily concerns the young and mysterious millionaire Jay Gatsby and his quixotic passion for the beautiful Daisy Buchanan. Through the narration of Nick Carraway, the reader is taken on a journey through the lavish world of Long Island's elite during the summer of 1922.",
    pages: 218,
    published: "April 10, 1925",
    language: "English"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 group transition-colors duration-300"
        >
          <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Books
        </Link>

        <div className="bg-white rounded-3xl book-shadow overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Book Cover */}
            <div className="lg:w-2/5 p-8 bg-gradient-to-br from-blue-50 to-purple-50">
              <div className="max-w-sm mx-auto">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-auto rounded-2xl book-shadow"
                />
              </div>
            </div>

            {/* Book Details */}
            <div className="lg:w-3/5 p-8 lg:p-12">
              <div className="max-w-2xl">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                  {book.title}
                </h1>
                
                <p className="text-xl text-gray-600 mb-6 font-medium">
                  by <span className="text-blue-600">{book.author}</span>
                </p>

                {/* Rating and Stats */}
                <div className="flex items-center space-x-6 mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="flex text-2xl text-yellow-400">
                      {'★'.repeat(book.rating)}{'☆'.repeat(5 - book.rating)}
                    </div>
                    <span className="text-2xl font-bold text-gray-800">{book.rating}.0</span>
                  </div>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-600">{book.reviews} reviews</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-600">{book.pages} pages</span>
                </div>

                {/* Genres */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {book.genres.map((genre, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 font-medium rounded-full border border-blue-200 shadow-sm"
                    >
                      {genre}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">About this book</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {book.description}
                  </p>
                </div>

                {/* Book Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Published</div>
                      <div className="font-semibold text-gray-800">{book.published}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Language</div>
                      <div className="font-semibold text-gray-800">{book.language}</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button className="flex-1 min-w-[200px] px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    Add to Bookshelf
                  </button>
                  <button className="flex-1 min-w-[200px] px-8 py-4 bg-white text-gray-700 font-semibold rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300">
                    Write a Review
                  </button>
                  <button className="flex-1 min-w-[200px] px-8 py-4 bg-white text-gray-700 font-semibold rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-green-300 transition-all duration-300">
                    Share Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetail