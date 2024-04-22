import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function TableBook() {
  const urlBase = "http://localhost:8080/books/get-all-books";
  const [book, setBook] = useState([]);

  useEffect(() => {
    loadBook();
  }, []);

  const loadBook = async () => {
    try {
      const result = await axios.get(urlBase);
      console.log("result of load book");
      console.log(result.data);
      setBook(result.data);
    } catch (error) {
      console.error("Error loading user:", error);
      // Puedes manejar el error de acuerdo a tus necesidades aquí
    }
  };

  return (
    <div>
      <div>
        <div className="containers text-center" style={{ margin: "30px" }}>
          <h3> book of table</h3>
        </div>
        <div className="container">
          <table className="table table-striped table-table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Image</th>
                <th scope="col">Name Book</th> 
                <th scope='col'>Editorial</th>
                <th scope="col">Author</th>
                <th scope="col">Category</th>
                <th scope='col'>Price</th>
                <th scope='col'>Type</th>
               

                <th> </th>
              </tr>
            </thead>
            <tbody>
              {
                //iteramos el arreglo de empleados
                book.map((book, index) => (
                  <tr key={index}>
                    <th scope="row">{book.bookId}</th>
                    <td><img src={book.bookImage} alt="img-book" width={"100px"} /></td>
                    <td>{book.bookName}</td>
                    <td>{book.editorial}</td>
                    <td>{book.author}</td>
                    <td>{book.category}</td>
                    <td>{book.price}</td>
                    <td>{book.quantity}</td>
                    <td>{book.type}</td>
                    <td className="text-center">
                      
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
