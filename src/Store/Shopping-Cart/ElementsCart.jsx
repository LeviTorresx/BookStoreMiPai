

export default function ElementsCart({ books }) {
  return (
    <div>
      <ul>
        {/* Utiliza map para recorrer la lista de libros y renderizar cada uno */}
        {books.map((book, index) => (
          <li className="text-black" key={index}>
            {book.bookName}
          </li>
        ))}
      </ul>
    </div>
  );
}
