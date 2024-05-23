import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import SideBarAdmin from "../NavigationAdmin/SideBarAdmin";
import NavBarAdmin from "../NavigationAdmin/NavBarAdmin";

// Componente para registrar un nuevo libro
export default function BookRegister() {
  const urlBase = "http://localhost:8080/books/save-book";

  // Estado para almacenar los datos del libro
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

  // Función para extraer la URL de la imagen desde el código HTML
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

  // Lista de categorías disponibles
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

  // Función para enviar los datos del libro al servidor
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(urlBase, bookData);
      // Limpiar los campos del formulario después del registro exitoso
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
      // Mostrar un mensaje de éxito al usuario
      Swal.fire({
        icon: "success",
        title: "¡Excelente!",
        text: "¡Registro exitoso!",
      });
    } catch (error) {
      console.error("Error al guardar el libro:", error);
      // Mostrar un mensaje de error al usuario en caso de que falle el registro
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "¡Hubo un error al guardar el libro!",
      });
    }
  };

  // Función para abrir el popup para subir la imagen
  const abrirPopup = () => {
    // Abrir el popup con el enlace proporcionado
    window.open("https://es.imgbb.com/", "Popup", "width=600,height=400");
  };

  // Desestructurar los datos del libro del estado
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
    <div className="bg-login">
      <div className="w-100">
        <NavBarAdmin/>
      </div>
      <div className="flex z-2 position-fixed">
        <SideBarAdmin/>
      </div>
      <div className="book-register-form-container" style={{paddingTop: "100px"}}>
        <div className="image-upload-container text-center">
          <h2>Previsualizar imagen</h2>

          <button className="button w-75" onClick={abrirPopup}>
            Subir imagen
          </button>
          <img src={bookData.bookImage} alt="" />
        </div>
        <div className="form-container w-50">
          <h2>Registrar libro</h2>
          <form onSubmit={onSubmit}>
            <div className="form-group w-auto">
              <input
                type="text"
                placeholder="Nombre"
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
                <option value="">Seleccione Categoría</option>
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
                placeholder="Descripción"
                name="bookDescription"
                value={bookDescription}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Precio"
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Cantidad"
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
            <div className="form-group">
              <input
                className="w-100 border border-secondary-subtle rounded-2 "
                type="text"
                placeholder="Imagen del libro"
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
