import BookGrid from './components/BookGrid';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo-text">Book Verse</div>
      </header>

      <section className="hero">
        <h1>Discover Your Next Favorite Book</h1>
        <p>Join thousands of readers in exploring magical worlds, unforgettable characters, and stories that stay with you forever.</p>
      </section>

      <section className="featured-section">
        <BookGrid />
      </section>
    </div>
  );
}

export default App;