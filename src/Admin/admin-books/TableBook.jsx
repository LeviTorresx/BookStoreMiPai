import axios from "axios";
import React, { useEffect, useState } from "react";
import ModalEditBooks from "./ModalEditBooks";
import SideBarAdmin from "../NavigationAdmin/SideBarAdmin";
import NavBarAdmin from "../NavigationAdmin/NavBarAdmin";
import Swal from "sweetalert2";

// Componente para mostrar una tabla de libros y permitir la edición y eliminación de los mismos
export default function TableBook() {
  const urlBase = "http://localhost:8080/books";
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  // Cargar los libros cuando el componente se monte
  useEffect(() => {
    loadBooks();
  }, []);

  // Función para cargar los libros desde el servidor
  const loadBooks = async () => {
    try {
      const result = await axios.get(urlBase + "/get-all-books");
      setBooks(result.data);
    } catch (error) {
      console.error("Error loading books:", error);
    }
  };

  // Función para eliminar un libro
  const deleteBook = async (id) => {
    const handleDelete = async () => {
      try {
        await axios.delete(`${urlBase}/delete-book?bookId=${id}`);
        setBooks(books.filter((book) => book.bookId !== id));
      } catch (error) {
        console.error("Error deleting book:", error);
      }
    };

    Swal.fire({
      title: "¿Estás seguro?",
      text: "El libro se eliminará por completo",
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

  // Función para abrir el modal de edición de libros
  const openModal = () => {
    setShowModal(true);
  };

  // Función para cerrar el modal de edición de libros
  const closeModal = () => {
    setShowModal(false);
  };

  // Función para manejar el clic en el botón de edición de un libro
  const handleEditClick = (id) => {
    setSelectedBook(id);
    openModal();
  };

  // Función para realizar la búsqueda de libros
  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === "") {
      loadBooks();
    } else {
      const filtered = books.filter(
        (book) =>
          book.bookName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.bookType.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (filtered.length === 0) {
        Swal.fire({
          title: "Sin coincidencias",
          text: "No se encontraron libros que coincidan con los criterios de búsqueda.",
          icon: "info",
          confirmButtonText: "Aceptar",
        });
      } else {
        setBooks(filtered);
      }
    }
  };

  return (
    <div className="z-3">
      {/* Barra de navegación */}
      <div className="w-100">
        <NavBarAdmin onSearch={handleSearch} />
      </div>
      {/* Barra lateral */}
      <div className="flex z-2 position-fixed">
        <SideBarAdmin />
      </div>
      {/* Contenido principal */}
      <div className="">
        <div className="text-center"></div>
        <div className="container" style={{ paddingTop: "90px" }}>
          {/* Tabla de libros */}
          <table className="table table-borderless rounded-table border">
            <thead className="thead">
              <tr className="text-center">
                <th scope="col">Id</th>
                <th scope="col">Imagen</th>
                <th scope="col">Nombre del libro</th>
                <th scope="col">Editorial</th>
                <th scope="col">Autor</th>
                <th scope="col">Categoría</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Tipo</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* Mapeo de los libros para renderizar filas de la tabla */}
              {books.map((book) => (
                <tr key={book.bookId} className="text-center">
                  <th scope="row">{book.bookId}</th>
                  <td>
                    {/* Imagen del libro */}
                    <img
                      src={book.bookImage}
                      alt="img-book"
                      width={"100px"}
                      className="rounded-3"
                    />
                  </td>
                  <td>{book.bookName}</td>
                  <td>{book.editorial}</td>
                  <td>{book.author}</td>
                  <td>{book.category}</td>
                  <td>{book.price}</td>
                  <td>{book.quantity}</td>
                  <td>{book.bookType}</td>
                  <td className="text-center">
                    {/* Botones de edición y eliminación del libro */}
                    <div className="flex">
                      <button
                        className="btn btn-primary mx-2"
                        onClick={() => handleEditClick(book.bookId)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteBook(book.bookId)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Modal de edición de libros */}
      {showModal && (
        <ModalEditBooks closeModal={closeModal} booksId={selectedBook} />
      )}
    </div>
  );
}
