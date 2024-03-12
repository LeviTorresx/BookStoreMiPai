import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css"
import Login from "./User/Login";
import Store from "./Books/Store";

function App() {
  return (
    <div className="containers bg-container">
      <BrowserRouter>
      <Routes>
          <Route  exact path="/" element={<Store/>}/>
          <Route exact path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
