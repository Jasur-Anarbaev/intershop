import React, { useContext, useState, useEffect } from "react";
import Category from "../components/Category";
import "../styles/Basket.scss";
import { CartContext } from "../context/CartContex";
import Icon from "../assets/svg/basket.svg";
import Clear from "../assets/svg/basket2.svg";
import Smail from "../assets/svg/smail.svg";
import Arrow from "../assets/svg/arrow.svg";
import User from "../assets/svg/user-basket.svg";
import Shopping from "../assets/svg/shopping-basket.svg";

import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import axios from "axios";
import { calcTotalPrice } from "../components/utils";
import Modaladress from "../Modal-adress/Modaladress";
import ModalOrder from "../Modal-order/ModalOrder";

export const Basket = () => {
  const [cart, setCart] = useContext(CartContext);
  const [totalSum, setTotalSum] = useState(calcTotalPrice(cart));
  const [modalActive, SetModalActive] = useState(false);
  const [counters, setCounters] = useState(1);
  const [end, setEnd] = useState(false);

  const updateTotalSum = (price) => {
    setTotalSum(totalSum + price);
  };

  const Remove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    localStorage.setItem(
      "cart",
      JSON.stringify(cart.filter((item) => item.id !== id))
    );
  };

  const formtCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div>
      <div className="basket">
        <div className="basket__items">
          <img src={Icon} alt="#" />
          <h2>Корзина</h2>
        </div>

        <div className="clear">
          <img onClick={formtCart} src={Clear} alt="#" />
        </div>
      </div>
      <div>
        {cart.map((item, index) =>
          item && item.id ? (
            <CartItem
              counters={counters}
              Remove={Remove}
              key={index}
              item={item}
              cart={cart}
              setCart={setCart}
              updateTotalSum={updateTotalSum}
            />
          ) : null
        )}
      </div>

      {cart && cart.length !== 0 ? (
        <div className="control"></div>
      ) : (
        <div className="control">
          <div className="basket__content">
            <div className="content__logo">
              <h1>Корзина пустая </h1>
              <img src={Smail} alt="#" />
            </div>
            <p>
              Вероятней всего, вы не заказывали ещё товар. <br /> Для того,
              чтобы заказать товар, перейди на главную страницу.
            </p>
            <div className="img">
              <img src={Shopping} alt="#" />
            </div>
            <Link to={"/"}>
              <button>Вернуться назад</button>
            </Link>
          </div>
        </div>
      )}
      {cart.length > 0 ? (
        <>
          <div className="all__price">
            <div
              className="number"
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              Всего товар <span className="total_number">{cart.length}</span>шт.
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              Сумма заказа:<span>{totalSum}</span>сом
            </div>
          </div>
          <div className="footer">
            <Link to={"/"}>
              <button className="age">Вернуться назад</button>
            </Link>
            <button className="send" onClick={() => SetModalActive(true)}>
              Оплатить сейчас
            </button>
          </div>
        </>
      ) : null}
      <Modaladress
        active={modalActive}
        SetModalActive={SetModalActive}
        cart={cart}
        formtCart={formtCart}
        end={end}
        setEnd={setEnd}
      />
      <ModalOrder end={end} />
    </div>
  );
};
