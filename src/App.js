import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import Login from "./User/Login";
import Register from "./User/Register";
import ClientsTable from "./Admin/admin-users/ClientsTable";
import BookRegister from "./Admin/admin-books/BookRegister";
import TableBook from "./Admin/admin-books/TableBook";
import Store from "./Store/Store";
import ProtectedRoute from "./utils/ProtectedRoute";
import { useLocalStorage } from "react-use";
import ProtectedRouteAdmin from "./utils/protectedRouteAdmin";

function App() {
  const [user, setUser] = useLocalStorage("userData");

  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route exact path="/" element={<Store />} />

          <Route element={<ProtectedRoute canActivate={user} redirect={"/"} />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route
            element={<ProtectedRouteAdmin userLog={user} redirect={"/"} />}
          >
            <Route
              exact
              path="/admin/book-tableContent"
              element={<TableBook />}
            />
            <Route
              exact
              path="/admin/book-register"
              element={<BookRegister />}
            />
            <Route exact path="/admin/clientTable" element={<ClientsTable />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
