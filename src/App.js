import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css"
import Login from "./User/Login";
import Store from "./Books/Store";
import Register from "./User/Register";
import ClientsTable from "./Admin/admin-users/ClientsTable";
import BookRegister from "./Admin/admin-books/BookRegister";

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
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
  