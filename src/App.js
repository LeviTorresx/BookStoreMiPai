import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css"
import Login from "./User/Login";
import Register from "./User/Register";
import ClientsTable from "./Admin/admin-users/ClientsTable";
import BookRegister from "./Admin/admin-books/BookRegister";
import TableBook from "./Admin/admin-books/TableBook";
import Store from "./Store/Store";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route  exact path="/" element={<Store/>}/>
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path ="/admin/clientTable" element={<ClientsTable/>} />
          <Route exact path="/admin/book-register" element={<BookRegister/>}/>
          <Route exact path="/admin/book-tableContent" element={<TableBook/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
  