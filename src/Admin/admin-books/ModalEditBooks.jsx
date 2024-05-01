import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ModalEditBooks({ closeModal, booksId }) {
  const urlBase = "http://localhost:8080/books/get-book";

  const [book, setBook] = useState({
    bookName: "",
    author: "",
    editorial: "",
    bookDescription: "",
    price: "",
    category: "",
    quantity: "",
    bookType: "",
    bookImage: "",
  });

  const {
    bookName,
    author,
    editorial,
    bookDescription,
    price,
    category,
    quantity,
    bookType,
    bookImage,
  } = book;

  const categories = [
    "Ficción contemporánea",
    "Literatura clásica",
    "Literatura universal",
    "Ciencia ficción",
    "Fantasía",
    "Historia",
    "Misterio y suspenso",
    "Romance",
    "Política",
    "Psicología",
    "Biografías y autobiografías",
    "Ciencia y divulgación científica",
    "Autoayuda y desarrollo personal",
  ];

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:8080/books/edit-book?bookId=${booksId}`,
        book
      );

      loadsBook();
    } catch (error) {
      console.error("Error al guardar el libro:", error);
    }
  };

  const onInputChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const loadsBook = async () => {
    try {
      const response = await axios.get(`${urlBase}?bookId=${booksId}`);

      let typeCode;
      if (response.data.bookType === "PHYSICAL") {
        typeCode = 0;
      } else if (response.data.bookType === "DIGITAL") {
        typeCode = 1;
      } else {
        console.log("type null");
      }

      const bookData = {
        ...response.data,
        bookType: typeCode,
      };

      setBook(bookData);
    } catch (error) {
      console.error("Error al cargar el libro:", error);
    }
  };

  useEffect(() => {
    loadsBook();
  }, []);

  return (
    <div className="modal fade show" tabIndex="-1" style={{ display: "block" }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={closeModal}
            ></button>
          </div>
          <div className="modal-body">
            <h1 className="text-center">Edit Book</h1>
            <form onSubmit={onSubmit}>
              <div className="flex p-2">
                <div className="pt-5">
                  <img src={bookImage} alt="previewimage" />
                </div>
                <div className="px-5">
                  <form onSubmit={onSubmit}>
                    <div className="form-group ">
                      <input
                        type="text"
                        placeholder="Name"
                        name="bookName"
                        value={bookName}
                        onChange={(e) => onInputChange(e)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Autor"
                        name="author"
                        value={author}
                        onChange={(e) => onInputChange(e)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Editorial"
                        name="editorial"
                        value={editorial}
                        onChange={(e) => onInputChange(e)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <select
                        name="category"
                        value={category}
                        onChange={(e) => onInputChange(e)}
                        required
                      >
                        <option value="">Seleccione Categoria</option>
                        {categories.map((cat, index) => (
                          <option key={index} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="w-100 border border-secondary-subtle rounded-2 "
                        type="text"
                        placeholder="Description"
                        name="bookDescription"
                        value={bookDescription}
                        onChange={(e) => onInputChange(e)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        placeholder="Price"
                        name="price"
                        value={price}
                        onChange={(e) => onInputChange(e)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        placeholder="Quantity"
                        name="quantity"
                        value={quantity}
                        onChange={(e) => onInputChange(e)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <select
                        name="bookType"
                        value={bookType}
                        onChange={(e) => onInputChange(e)}
                        required
                      >
                        <option value="">Seleccione Tipo</option>
                        <option value="0">Físico</option>
                        <option value="1">Virtual</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex justify-content-center">
                <button className="btn btn-secondary" type="submit">
                  Save changes
                </button>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
