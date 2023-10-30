import React, { useContext, useState } from "react";
import "../styles/Header.scss";
import Logo from "../assets/svg/logo.svg";
import Bag from "../assets/svg/bag.svg";
import User from "../assets/svg/user.svg";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import { CartContext } from "../context/CartContex";
import Users from "../pages/Users";

const Header = () => {
  const [cart, setCart] = useContext(CartContext);
  const [modalActive, SetModalActive] = useState(false);
  const token = localStorage.getItem("token");
  function onClick() {}
  return (
    <div className="header">
      <div className="container">
        <div className="header__items">
          <div className="header__logo">
            <Link to={"/"}>
              <img className="header_img" src={Logo} alt="#" />
            </Link>
          </div>
          <div className="header__buttons">
            <div className="header__inner">
              <Link to="/basket">
                <button className="bag">
                  <img src={Bag} alt="#" />
                  <h3>{cart.length} В Корзину </h3>
                </button>
              </Link>
              {!token ? (
                <button onClick={() => SetModalActive(true)}>
                  <img src={User} alt="#" />
                  <h4>Войдите</h4>
                </button>
              ) : (
                <Link to={"users"}>
                  <button>
                    <h4>Профиль</h4>
                  </button>
                </Link>
              )}
              <Modal active={modalActive} SetModalActive={SetModalActive} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
