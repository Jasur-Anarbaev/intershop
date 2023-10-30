import Category from "./components/Category";
import Header from "./components/Header";
import Search from "./assets/svg/search.svg";
import "../src/styles/Category.scss";
import React, { useState } from "react";
import { Route, Router, Routes, json } from "react-router-dom";
import Main from "./pages/MainLoyaout/Main";
import { Basket } from "./pages/Basket";
import Login from "./pages/MainLoyaout/Login";
import Up from "./assets/img/up_img.png";
import "./js/arrow";
import { Modal } from "./Modal/Modal";
import Register from "./pages/Register";
import { CartContext, FakeBase } from "../src/context/CartContex";
import { accsesuaries } from "./fakeObjects/index";
import Categories from "./pages/Categories";
import Users from "./pages/Users";
import { Provider } from "react-redux";
import { store } from "./redux";
import MainLayout from "./layouts/MainLayout";
import ModalOrder from "./Modal-order/ModalOrder";
function App() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [itemBase, setItemBase] = useState([...accsesuaries]);

  return (
    <Provider store={store}>
      <FakeBase.Provider value={[itemBase, setItemBase]}>
        <CartContext.Provider value={[cart, setCart]}>
          <div className="App">
            <div className="container">
              <Routes>
                <Route path="/" element={<MainLayout />}>
                  <Route
                    path=""
                    element={<Main title={"Trending Earphones"} />}
                  />
                  <Route path="/basket" element={<Basket />} />
                  <Route path="/Login" element={<Login />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/categories" element={<Categories />} />
                </Route>
                <Route path="register" element={<Register />} />
              </Routes>

              <button id="goToTop" title="Go to top">
                <img className="up_img" src={Up} alt="#" />
              </button>
            </div>
          </div>
        </CartContext.Provider>
      </FakeBase.Provider>
    </Provider>
  );
}

export default App;
