import axios from "axios";
import React, { useEffect, useState } from "react";
import ModalEditBooks from "./ModalEditBooks";
import SideBarAdmin from "../NavigationAdmin/SideBarAdmin";
import NavBarAdmin from "../NavigationAdmin/NavBarAdmin";
import Swal from "sweetalert2";

export default function TableBook() {
  const urlBase = "http://localhost:8080/books";
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, [filteredBooks]);

  const loadBooks = async () => {
    try {
      if (filteredBooks.length === 0) {
        const result = await axios.get(urlBase + "/get-all-books");
        setBooks(result.data);
      } else setBooks(filteredBooks);
    } catch (error) {
      console.error("Error loading books:", error);
    }
  };

  const deleteBook = async (Id) => {
    const handleDelete = async () => {
      try {
        await axios.delete(`${urlBase}/delete-book?bookId=${Id}`);
        window.location.reload();
      } catch (error) {
        console.error("Error deleting book:", error);
      }
    };

    Swal.fire({
      title: "¿Estás seguro?",
      text: "El libro se eliminara por completo",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete();
      }
    });
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

  const handleSearch = (searchTerm) => {
    const filtered = books.filter(
      (book) =>
        book.bookName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.bookType.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <div className="z-3">
      <div className="w-100">
        <NavBarAdmin onSearch={handleSearch} />
      </div>
      <div className="flex z-2 position-fixed">
        <SideBarAdmin />
      </div>
      <div className="containers text-center"></div>
      <div className="container" style={{ paddingTop: "90px" }}>
        <table className="table table-striped table-table-hover align-middle">
          <thead className="table-dark">
            <tr className="text-center">
              <th scope="col">Id</th>
              <th scope="col">Image</th>
              <th scope="col">Book name</th>
              <th scope="col">Editorial</th>
              <th scope="col">Author</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Stock</th>
              <th scope="col">Type</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr
                key={index}
                className="text-center border border-2 border-dark"
              >
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
                    <button
                      className="button"
                      onClick={() => handleEditClick(book.bookId)}
                    >
                      Edit
                    </button>
                  </div>
                  <div>
                    <button
                      className="button delete"
                      onClick={() => deleteBook(book.bookId)}
                    >
                      {" "}
                      Delete
                    </button>
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
