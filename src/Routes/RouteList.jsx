import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageError from "../pages/PageError";
import Login from "../pages/Login";
import Home from "../pages/Home";
const RouteList = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PageError />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default RouteList;