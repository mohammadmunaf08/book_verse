import React from 'react'

const BookCard = ({ book }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
      {/* Book Cover with Overlay */}
      <div className="relative overflow-hidden">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {book.rating}.0
            </span>
          </div>
        </div>
      </div>

      {/* Book Info */}
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
          {book.title}
        </h3>
        <p className="text-gray-600 mb-3 font-medium">by {book.author}</p>
        
        {/* Rating */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-lg ${
                  i < book.rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-500">({book.reviews} reviews)</span>
        </div>

        {/* Genres */}
        <div className="flex flex-wrap gap-2">
          {book.genres.map((genre, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 text-xs font-medium rounded-full border border-blue-100"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BookCard