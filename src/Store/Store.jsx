import React, { useEffect, useState } from "react";
import NavigationStore from "../Navigation/NavigationStore";
import SideBar from "../Navigation/SideBar";
import ProductsBooks from "./ProductsBooks";
import Footer from "../Navigation/Footer";
import axios from "axios";

export default function Store() {
  const [userData, setUserData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showBooks, setShowBooks] = useState(false);
  const urlBase = "http://localhost:8080/books/get-all-books";
  const [dataBooks, setDataBooks] = useState([]);
  const [cartItems, setCartItems] = useState([]);

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
      console.log(cartItems);
    }
  };

  const handleRemoveFromCart = (book) => {
    const updatedCartItems = cartItems.filter((item) => item.bookId !== book.bookId);
    setCartItems(updatedCartItems);
  };

  const handleIncreaseQuantity = (book) => {
    const updatedCartItems = cartItems.map((item) =>
      item.bookId === book.bookId ? { ...item, quantity: item.quantity + 1 } : item
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

  useEffect(() => {
    loadBook();
  }, []);

  const loadBook = async () => {
    try {
      const result = await axios.get(urlBase);
      setDataBooks(result.data);
      setLoading(false);
      setShowBooks(true);
    } catch (error) {
      console.error("Error loading books:", error);
      setLoading(false);
      // Puedes manejar el error de acuerdo a tus necesidades aquí
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    console.log("Datos almacenados en localStorage:", storedUserData);
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  return (
    <div className=" z-3">
      {userData ? (
        <div>
          <NavigationStore
            userName={userData.userName}
            userLog={true}
            isOpen={isOpen}
            toggle={toggleSidebar}
            books={cartItems}
            handleDecreaseQuantity={handleDecreaseQuantity}
            handleRemoveFromCart={handleRemoveFromCart}
            handleIncreaseQuantity={handleIncreaseQuantity}
          />
        </div>
      ) : (
        <NavigationStore
          isOpen={isOpen}
          toggle={toggleSidebar}
          books={cartItems}
          handleDecreaseQuantity={handleDecreaseQuantity}
          handleRemoveFromCart={handleRemoveFromCart}
          handleIncreaseQuantity={handleIncreaseQuantity}
        />
      )}

      <div className="flex z-2 position-fixed">
        <SideBar />
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
