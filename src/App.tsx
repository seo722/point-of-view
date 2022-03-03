import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Category from "./Routes/Category";
import Footer from "./components/Footer";
import LogIn from "./Routes/Login";
import MyPage from "./Routes/MyPage";
import ShoppingBag from "./Routes/ShoppingBag";

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/shoppingbag" element={<ShoppingBag />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
