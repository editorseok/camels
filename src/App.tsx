import React from "react";
import "./assets/sass/App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import MenuPage from "./pages/MenuPage";
import WhatsNewPage from "./pages/WhatsNewPage";
import ContactUsPage from "./pages/ContactUsPage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route path="/whatsnew" element={<WhatsNewPage />}></Route>
        <Route path="/contact" element={<ContactUsPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
