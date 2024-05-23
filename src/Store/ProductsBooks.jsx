import Books from "./Books";

/**
 * Componente que muestra los libros disponibles en la tienda.
 * 
 * @param {Object[]} books - Array de objetos que representa los libros disponibles.
 * @param {boolean} load - Indica si los libros se están cargando.
 * @param {boolean} showBook - Indica si hay libros disponibles para mostrar.
 * @param {Function} onAddToCart - Función para agregar un libro al carrito.
 * @returns {JSX.Element} El elemento JSX que representa los libros disponibles en la tienda.
 */
export default function ProductsBooks({ books, load, showBook, onAddToCart }) {

  return (
    <div>
      {load ? (
        // Muestra un spinner de carga mientras se cargan los libros
        <div className="text-center">
          <div
            className="spinner-border m-5"
            role="status"
            style={{ width: "4rem", height: "4rem" }}
          >
            <span className="visually-hidden"> Loading...</span>
          </div>
        </div>
      ) : (
        // Muestra los libros disponibles
        <div
          className={`row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 g-4 ${
            showBook ? "fade-in" : ""
          }`}
        >
          {books.map((book) => (
            <div key={book.bookId} className="col">
              {/* Componente para mostrar un libro específico */}
              <Books book={book} addToCart={onAddToCart} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
