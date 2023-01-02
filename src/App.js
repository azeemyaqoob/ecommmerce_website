import "./App.scss";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import SecondHeaderBar from "./components/Header/SecondHeaderBar";
import Footer from "./components/Footer/Footer";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./components/Products/Product";
import Navbar from "./components/Header/Navbar";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Redirect,
// } from 'react-router-dom
// import Product from "./components/Products/Product";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <SecondHeaderBar />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/product/:handle" element={<Product />} />
        </Routes>

        <div className="space_div"></div>
        <Footer />

        <a
          href="https://wa.me/+923046049079"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp whatsappstyle"></i>
        </a>
      </Router>
    </div>
  );
}

export default App;
