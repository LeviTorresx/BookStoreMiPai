import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function BookRegister() {
  const urlBase = "http://localhost:8080/books/save-book";
  const [bookData, setBookData] = useState({
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

  // Función para manejar el cambio en los campos de entrada
  const onInputChange = (e) => {
    const { name, value } = e.target;
    // Si el campo de entrada es 'bookimage', obtenemos la URL de la imagen
    if (name === "bookImage") {
      const src = obtenerSrcDesdeHTML(value);
      // Establecemos el valor de 'bookimage' con la URL de la imagen
      setBookData({ ...bookData, [name]: src });
    } else {
      // Para otros campos, mantenemos el valor existente y solo actualizamos el campo modificado
      setBookData({ ...bookData, [name]: value });
    }
  };

  const obtenerSrcDesdeHTML = (htmlString) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");

    // Verificar si el documento parseado contiene un elemento img válido
    if (doc && doc.body) {
      const imgElement = doc.body.querySelector("img");
      if (imgElement) {
        const src = imgElement.getAttribute("src");
        return src;
      }
    }

    // Si no se encontró una etiqueta img o el documento es nulo, devolvemos null
    return null;
  };

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

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post( urlBase, bookData);
      console.log(bookData);
      setBookData({
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
      Swal.fire({
        icon: "success",
        title: "¡Excelente!",
        text: "¡Registro exitoso!",
      });
    } catch (error) {
      console.error("Error al guardar el libro:", error);
      console.log(bookData);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "¡Hubo un error al guardar el libro!",
      });
    }
  };

  const abrirPopup = () => {
    // Abrir el popup con el enlace de YouTube
    window.open("https://es.imgbb.com/", "Popup", "width=600,height=400");
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
    bookImage,
  } = bookData;

  return (
    <div className="bg-container-log">
      <div className="book-register-form-container">
        <div className="image-upload-container text-center">
          <h2>Ingresar Image </h2>

          <button className="button w-75" onClick={abrirPopup}>
            Image
          </button>
          <img src={bookData.bookImage} alt="" />
        </div>
        <div className="form-container w-50 mt-0">
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
            <div className="form-group">
              <input
                className="w-100 border border-secondary-subtle rounded-2 "
                type="text"
                placeholder="bookimage"
                name="bookImage"
                value={bookImage}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <h6 className="text-danger"> Ingresar Link HTML</h6>
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
