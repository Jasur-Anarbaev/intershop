import React, { useContext, useEffect, useState } from "react";
import "../styles/Category.scss";
import { CartContext, FakeBase } from "../context/CartContex";
import Plus from "../assets/svg/btn-plus.svg";
import ButtonChecked from "../assets/svg/btn-checked.svg";
import { json } from "react-router-dom";
import CartItem from "../components/CartItem";
import Cart from "./Card/Cart";
import axios from "axios";
import "../fakeObjects/index";

const Category = ({ item }) => {
  const [cart, setCart] = useContext(CartContext);
  const [isInCart, setIsInCart] = useState(false);
  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    setIsInCart(!!existingItem);
  }, [cart, item.id]);

  const handleAddToCart = () => {
    setCart([...cart, { ...item, quantity: 1 }]);
  };

  const handleRemoveFromCart = () => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  console.log(cart);

  return (
    <div className="content">
      <div className="content__category">
        <div className="content__inner">
          <div className="boxes">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <div className="content__img">
              {item.photos.length > 0 ? (
                <img src={item.photos[0].photo} alt="" />
              ) : (
                <img src={ButtonChecked} alt="" />
              )}
            </div>
            {/* <img src={item.Star} alt="#" /> */}
            <div className="content__btn">
              <div className="btns">
                {isInCart ? (
                  <button onClick={handleRemoveFromCart}>
                    Убрать из корзины
                  </button>
                ) : (
                  <button onClick={handleAddToCart}>Добавить</button>
                )}
              </div>
            </div>
            <div className="price">{item.price}сом</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
