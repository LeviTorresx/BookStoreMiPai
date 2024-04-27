export default function ElementsCart({ books }) {
  return (
    <div>
      <ul>
        {/* Utiliza map para recorrer la lista de libros y renderizar cada uno */}
        {books.map((book, index) => (
          <li className="text-black" key={index}>
            <div>
              <img src={book.bookImage} alt="books" width={"70px"} />
              {book.bookName}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
