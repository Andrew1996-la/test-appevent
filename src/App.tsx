import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes, redirect, Navigate} from "react-router-dom";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import BasketPage from "./pages/BasketPage/BasketPage";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
        <Header />

        <Routes>
            <Route path="/" element={<Navigate to="/catalog" />} />
            <Route path="/catalog" element={<CatalogPage />}/>
            <Route path="/basket" element={<BasketPage />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    </div>
  );
}

export default App;
