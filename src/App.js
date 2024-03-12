import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css"
import Navigation from "./Navigation/Navigation";
import Login from "./User/Login";
import Store from "./Books/Store";
function App() {
  return (
    <div className="containers bg-container">
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route  exact path="/" element={<Store/>}/>
        <Route exact path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
