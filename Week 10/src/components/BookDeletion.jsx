import { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, BookText, ArrowLeft, RefreshCw, Layers } from "lucide-react";

function BookDeletion() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Java Programming"
    },
    {
      id: 2,
      title: "Python Fundamentals"
    },
    {
      id: 3,
      title: "React Development"
    }
  ]);

  const [loading, setLoading] = useState(false);

  const deleteBook = async (id) => {
    setLoading(true);

    // Simulating API Call
    await new Promise(resolve =>
      setTimeout(resolve, 2000)
    );

    setBooks(
      books.filter(book => book.id !== id)
    );

    setLoading(false);
  };

  return (
    <div className="card card-lg fade-in" style={{ width: "100%", maxWidth: "800px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
        <Link to="/dashboard" className="nav-link" style={{ fontSize: "0.9rem" }}>
          <ArrowLeft size={16} />
          <span>Back to Dashboard</span>
        </Link>
        <span className="profile-badge" style={{ borderColor: "var(--color-danger-glow)" }}>
          <Layers size={14} style={{ marginRight: "4px", color: "var(--color-danger)" }} />
          <span style={{ color: "var(--color-danger)", fontWeight: "600" }}>Deletion Mode</span>
        </span>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h2 className="title-gradient">Book Deletion System</h2>
        <p className="subtitle">Select a book from the catalog below to remove it permanently. Action requires authorization.</p>
      </div>

      {loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
          <span>Deleting Book... Please wait...</span>
        </div>
      )}

      {books.length === 0 ? (
        <div style={{ textAlign: "center", padding: "3rem 0", color: "var(--text-muted)" }}>
          <BookText size={48} style={{ marginBottom: "1rem", opacity: "0.5" }} />
          <p>No books remaining in the catalog.</p>
        </div>
      ) : (
        <ul className="catalog-container" style={{ listStyleType: "none" }}>
          {books.map(book => (
            <li key={book.id} className="book-item">
              <div className="book-info">
                <BookText className="book-icon" size={20} />
                <div>
                  <span className="book-title">{book.title}</span>
                  <div className="book-author">Catalog ID: LIB-00{book.id}</div>
                </div>
              </div>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteBook(book.id)}
                disabled={loading}
                style={{ display: "inline-flex", gap: "0.4rem", alignItems: "center" }}
              >
                <Trash2 size={14} />
                <span>Delete</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookDeletion;
