import React, { useContext } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
// import { Outlet } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "../src/Routes/Home";
import Detail from "../src/Routes/Detail";
import Favs from "../src/Routes/Favs";
import Contact from "../src/Routes/Contact";
import Error from "./Components/Error";
import { ThemeContext } from "./Context/ThemeContextProvider";

function App() {

  const {theme} = useContext(ThemeContext)

  return (
    <div className= {`App ${theme}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/home" element={<Home />} />*/}
        <Route path="/dentist/" element={<Detail />}>
          <Route path="/dentist/:id" element={<Detail />} />
        </Route>
        <Route path="/contacto" element={<Contact />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
