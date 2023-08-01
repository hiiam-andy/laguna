import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./pages/AppRouter";

import "../src/style/normalize.css";
import "../src/font/style-font.css";
import "../src/style/style.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
