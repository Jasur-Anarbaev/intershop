import React, { useContext, useEffect, useState } from "react";
import { CartContext, FakeBase } from "../context/CartContex";
import "../styles/CartItem.scss";
import Checked from "../assets/svg/checked.svg";
import Star from "../assets/svg/star.svg";

const CartItem = ({
  cart,
  item,
  setCart,
  Remove,
  updateTotalSum,
  counters,
  setCounters,
}) => {
  const Increment = () => {
    setCart([
      ...cart.map((el) =>
        el.id == item.id ? { ...el, quantity: el.quantity + 1 } : el
      ),
    ]);
    updateTotalSum(item.price);
  };

  const Decrement = () => {
    if (item.quantity > 1) {
      setCart([
        ...cart.map((el) =>
          el.id == item.id ? { ...el, quantity: el.quantity - 1 } : el
        ),
      ]);
      updateTotalSum(-item.price);
    }
  };

  console.log(item);
  const allSumm = item.price * item.quantity;

  return (
    <div>
      <div className="cart">
        <div className="cart__inner">
          <div className="content__cart">
            <div className="cart__img">
              {item.photos.length > 0 ? (
                <img src={item.photos[0].photo} alt="" />
              ) : (
                <img src={Star} alt="" />
              )}
            </div>
            <div className="cart__box">
              <div>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
          <div className="quantity ">
            <button onClick={() => Decrement()}>-</button>
            {item.quantity}
            <button onClick={() => Increment()}>+</button>
          </div>

          <div className="items">
            <div className="cart__counter">{item.quantity}.шт</div>
            {item.quantity > 0 ? (
              <div className="price"> {allSumm} сом</div>
            ) : (
              <div className="price"> {item.price} сом</div>
            )}
            <div>
              <img onClick={() => Remove(item.id)} src={Checked} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
