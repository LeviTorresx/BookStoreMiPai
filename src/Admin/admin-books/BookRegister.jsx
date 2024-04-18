import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function BookRegister() {
  const initialBookData = {
    bookName: "",
    author: "",
    editorial: "",
    bookDescription: "",
    price: "",
    category: "",
    quantity: "",
    bookType: "",
    image: null,
  };

  const [bookData, setBookData] = useState(initialBookData);
  //const [imagen, setImagen] = useState(null);

  const categories = [
    "Ficción contemporánea",
    "Literatura clásica",
    "Ciencia ficción",
    "Fantasía",
    "Misterio y suspense",
    "Romance",
    "No ficción histórica",
    "Biografías y autobiografías",
    "Ciencia y divulgación científica",
    "Autoayuda y desarrollo personal",
  ];

  const onInputChange = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      setBookData({
        ...bookData,
        image: file
      });
    } else {
      setBookData({ ...bookData, [e.target.name]: e.target.value });
    }
  };



  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/books/save-book", bookData);
      console.log(bookData);
      //console.log(imagen)
      Swal.fire({
        icon: "success",
        title: "¡Excelente!",
        text: "¡Registro exitoso!",
      });
      //setBookData(initialBookData);
    } catch (error) {
      console.error("Error al guardar el libro:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "¡Hubo un error al guardar el libro!",
      });
    }
  };
  const {
    bookName,
    author,
    editorial,
    bookDescription,
    price,
    category,
    quantity,
    bookType,
    image,
  } = bookData;

  return (
    <div className="bg-container-log">
      <div className="book-register-form-container">
        <div className="image-upload-container">
          <h2>Subir Imagen</h2>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => onInputChange(e)}
            name="image"
            required
            className="button"
          />
        </div>
        <div className="form-container w-50">
          <h2>Registrar Libro</h2>
          <form onSubmit={onSubmit}>
            <div className="form-group w-auto">
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
                <option value="1">Físico</option>
                <option value="2">Virtual</option>
              </select>
            </div>
            <div className="container-button form-group">
              <button className="button" type="submit">
                Registrar Libro
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
