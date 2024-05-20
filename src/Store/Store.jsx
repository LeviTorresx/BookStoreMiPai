import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../Navigation/Footer";
import NavigationStore from "../Navigation/NavigationStore";
import ProductsBooks from "../Store/ProductsBooks";
import SideBar from "../Navigation/SideBar";
import { getUserData } from "../utils/GetUser";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Store() {
  const [userData, setUserData] = useState(getUserData());
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showBooks, setShowBooks] = useState(false);
  const [dataBooks, setDataBooks] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [countBooks, setCountBooks] = useState(0);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [replieDataBooks, setReplieDataBooks] = useState([]);

  let navigation = useNavigate();

  useEffect(() => {
    loadBooks();
    paymentAlert();
  }, [filteredBooks]);

  const urlBase = "http://localhost:8080/books/get-all-books";

  const calculateTotalPrice = (book) => {
    return book.price * book.quantity;
  };

  const calculateCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + calculateTotalPrice(item),
      0
    );
  };

  const handleAddToCart = (book) => {
    const existingBook = cartItems.find((item) => item.bookId === book.bookId);
    if (existingBook) {
      const updatedCartItems = cartItems.map((item) =>
        item.bookId === book.bookId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...book, quantity: 1 }]);
      setCountBooks((prevCount) => prevCount + 1);
    }
  };

  const handleRemoveFromCart = (book) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.bookId !== book.bookId
    );
    setCartItems(updatedCartItems);
    setCountBooks((prevCount) => prevCount - 1);
  };

  const handleIncreaseQuantity = (book) => {
    const updatedCartItems = cartItems.map((item) =>
      item.bookId === book.bookId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCartItems(updatedCartItems);
  };

  const handleDecreaseQuantity = (book) => {
    const updatedCartItems = cartItems.map((item) =>
      item.bookId === book.bookId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCartItems);
  };

  const loadBooks = async () => {
    try {
      if (filteredBooks.length === 0) {
        const result = await axios.get(urlBase);
        setReplieDataBooks(result.data);
        setDataBooks(result.data);
      } else {
        setDataBooks(filteredBooks);
      }
      setLoading(false);
      setShowBooks(true);
    } catch (error) {
      console.error("Error loading books:", error);
      setLoading(false);
    }
  };

  const paymentAlert = async () => {
    const elements = localStorage.getItem("booksShipping");
    if (elements) {
      const booksShipping = JSON.parse(elements);
      if (booksShipping.length > 0) {
        Swal.fire({
          position: "bottom-start",
          title: "Tienes libros en proceso de pago",
          showDenyButton: true,
          showCancelButton: true,
          cancelButtonText: "Cerrar",
          confirmButtonText: "Continuar la compra",
          denyButtonText: `Cancelar compra`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire("Vamos!", "", "success");
            navigation("/payment");
          } else if (result.isDenied) {
            localStorage.setItem("booksShipping", JSON.stringify([]));
            Swal.fire("Proceso de compra finalizado", "", "info");
          }
        });
      }
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleFilteredBooks = (filteredBooks) => {
    setFilteredBooks(filteredBooks);
  };

  return (
    <div className="z-3">
      <NavigationStore
        user={userData ? userData : ""}
        userLog={!!userData}
        isOpen={isOpen}
        toggle={toggleSidebar}
        books={cartItems}
        setBooks={setCartItems}
        handleDecreaseQuantity={handleDecreaseQuantity}
        handleRemoveFromCart={handleRemoveFromCart}
        handleIncreaseQuantity={handleIncreaseQuantity}
        count={countBooks}
        totalPrice={calculateCartTotal()}
        availableBooks={replieDataBooks || []}
        onFilteredBooks={handleFilteredBooks}
      />

      <div className="flex z-2 position-fixed">
        <SideBar administratorAccess={userData ? userData.userType : null} />
      </div>
      <div className="content z-1">
        <div>
          <ProductsBooks
            books={dataBooks}
            load={loading}
            showBook={showBooks}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
