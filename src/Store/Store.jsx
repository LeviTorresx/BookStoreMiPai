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

  useEffect(() => {
    loadBook();
  }, []);

  const loadBook = async () => {
    try {
      const result = await axios.get(urlBase);
      console.log("result of load book");
      console.log(result.data);
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
          />
        </div>
      ) : (
        <NavigationStore isOpen={isOpen} toggle={toggleSidebar} />
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
          />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
