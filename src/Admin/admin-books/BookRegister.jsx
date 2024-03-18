import React, { useState } from "react";

export default function BookRegister() {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    price: "",
    quantity: "",
    type: "",
    image: "",
    previewImage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setBookData({
        ...bookData,
        image: imageFile,
        previewImage: reader.result,
      });
    };
    reader.readAsDataURL(imageFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar los datos del formulario
    console.log(bookData);
  };
  return (
    <div className="bg-container-log">
      <div className="book-register-form-container">
        <div className="image-upload-container">
          <h2>Subir Imagen</h2>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
            className="button"
          />
          {bookData.previewImage && (
            <div className="image-preview">
              <img src={bookData.previewImage} alt="Preview" />
            </div>
          )}
        </div>
        <div className="form-container">
          <h2>Registrar Libro</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group w-auto">
              <input
                type="text"
                placeholder="Nombre del Libro"
                name="title"
                value={bookData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Autor"
                name="author"
                value={bookData.author}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Precio"
                name="price"
                value={bookData.price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Cantidad"
                name="quantity"
                value={bookData.quantity}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <select
                name="type"
                value={bookData.type}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione Tipo</option>
                <option value="Físico">Físico</option>
                <option value="Virtual">Virtual</option>
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
