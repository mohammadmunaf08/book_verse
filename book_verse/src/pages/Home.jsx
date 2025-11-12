import React from 'react'
import BookCard from '../components/BookCard'

const Home = () => {
  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
      rating: 4,
      reviews: 150,
      genres: ["Fiction", "Classic", "Romance"]
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
      rating: 5,
      reviews: 200,
      genres: ["Fiction", "Classic", "Drama"]
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop",
      rating: 4,
      reviews: 180,
      genres: ["Dystopian", "Science Fiction"]
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      coverImage: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=400&h=600&fit=crop",
      rating: 5,
      reviews: 175,
      genres: ["Romance", "Classic"]
    },
    {
      id: 5,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      coverImage: "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=400&h=600&fit=crop",
      rating: 5,
      reviews: 220,
      genres: ["Fantasy", "Adventure"]
    },
    {
      id: 6,
      title: "Harry Potter",
      author: "J.K. Rowling",
      coverImage: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=400&h=600&fit=crop",
      rating: 5,
      reviews: 300,
      genres: ["Fantasy", "Young Adult"]
    },
    {
      id: 7,
      title: "Dune",
      author: "Frank Herbert",
      coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
      rating: 4,
      reviews: 160,
      genres: ["Science Fiction", "Adventure"]
    },
    {
      id: 8,
      title: "The Alchemist",
      author: "Paulo Coelho",
      coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
      rating: 4,
      reviews: 190,
      genres: ["Fiction", "Philosophy"]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-bg rounded-3xl mx-4 mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-8 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Discover Your Next
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Favorite Book
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Join thousands of readers in exploring magical worlds, unforgettable characters, 
            and stories that stay with you forever.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300">
              Explore Books
            </button>
            <button className="px-8 py-4 glass-effect text-white font-semibold rounded-2xl hover:scale-105 transition-transform duration-300">
              Join Community
            </button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-300/20 rounded-full blur-2xl"></div>
      </section>

      {/* Featured Books */}
      <section className="container mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Books</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Curated collection of timeless classics and modern masterpieces
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-3xl mx-4 py-16 mb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">10K+</div>
              <div className="text-gray-600 font-medium">Books Reviewed</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">5K+</div>
              <div className="text-gray-600 font-medium">Active Readers</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-gray-600 font-medium">New Books Monthly</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home