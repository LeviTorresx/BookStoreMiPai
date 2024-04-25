import axios from "axios";
import React, { useEffect, useState } from "react";
import ModalEditBooks from "./ModalEditBooks";
import SearchBook from "./SearchBook";

export default function TableBook() {
  const urlBase = "http://localhost:8080/books/get-all-books";
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const result = await axios.get(urlBase);
      setBooks(result.data);
    } catch (error) {
      console.error("Error loading books:", error);
    }
  };

  const deleteBook = async (Id) =>{
    alert("chupas");
    //await axios.delete("  ")
    
  };

  const openModal = () => {
    console.log("Abriendo modal");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleEditClick = (selectedBook) => {
    setSelectedBook(selectedBook);
    openModal();
  };

  return (
    <div>
      <div>
        <SearchBook />
      </div>
      <div className="containers text-center" style={{ margin: "30px" }}>
        <h3>Books Table</h3>
      </div>
      <div className="container">
        <table className="table table-striped table-table-hover align-middle">
          <thead className="table-dark">
            <tr className="text-center">
              <th scope="col">Id</th>
              <th scope="col">Image</th>
              <th scope="col">Name Book</th>
              <th scope="col">Editorial</th>
              <th scope="col">Author</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Type</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index} className="text-center border border-2 border-dark">
                <th scope="row">{book.bookId}</th>
                <td>
                  <img src={book.bookImage} alt="img-book" width={"100px"} />
                </td>
                <td>{book.bookName}</td>
                <td>{book.editorial}</td>
                <td>{book.author}</td>
                <td>{book.category}</td>
                <td>{book.price}</td>
                <td>{book.quantity}</td>
                <td>{book.bookType}</td>
                <td className="text-center flex border-0 pt-4">
                  <div>
                    <button className="button edit" onClick={() => handleEditClick(book.bookId)}>
                      Edit
                    </button>
                  </div>
                  <div>
                    <button className="button delete" onClick={() => deleteBook(book.bookId)}> Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        {showModal && (
          <ModalEditBooks closeModal={closeModal} booksId={selectedBook} />
        )}
      </div>
    </div>
  );
}
