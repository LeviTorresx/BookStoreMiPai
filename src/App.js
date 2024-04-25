import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./app.css";
import Login from "./User/Login";
import Register from "./User/Register";
import ClientsTable from "./Admin/admin-users/ClientsTable";
import BookRegister from "./Admin/admin-books/BookRegister";
import TableBook from "./Admin/admin-books/TableBook";
import Store from "./Store/Store";
import SideBar from "./Admin/NavigationAdmin/SideBarAdmin";


const isUserAuthenticated = () => {
  return localStorage.getItem("isLoggedIn") === "true";
};

const isUserAdmin = () => {
  const userData = JSON.parse(localStorage.getItem("userData")); 
  return userData && userData.userType === "ADMINISTRATOR"; 
};

const AdminRoute = ({ element: Element, ...rest }) => {
  return isUserAuthenticated() && isUserAdmin() ? (
    <>
      <SideBar />
      <Element {...rest} />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

const ProtectedRoute = ({ element: Element, ...rest }) => {
  return isUserAuthenticated() ? (
    <Navigate to="/" replace />
  ) : (
    <Element {...rest} />
  );
};

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Store />} />
          <Route
            exact
            path="/login"
            element={<ProtectedRoute element={<Login />} />}
          />
          <Route
            exact
            path="/register"
            element={<ProtectedRoute element={<Register />} />}
          />
          <Route
            exact
            path="/admin/clientTable"
            element={<AdminRoute element={<ClientsTable />} />}
          />
          <Route
            exact
            path="/admin/book-register"
            element={<AdminRoute element={<BookRegister />} />}
          />
          <Route
            exact
            path="/admin/book-tableContent"
            element={<AdminRoute element={<TableBook />} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
