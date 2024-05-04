import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Card from "./Components/Pages/Card/Card";
import PlaceOrder from "./Components/Pages/PlaceOrder/PlaceOrder";
import Footer from "./Components/Footer/Footer";
import LoginPopUp from "./Components/LoginPopUp/LoginPopUp";
const App = () => {
  const [login, setlogin] = useState(false);
  return (
    <>
      {login ? <LoginPopUp setlogin={setlogin} /> : <></>}
      <div className="app">
        <Navbar setlogin={setlogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Card />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
