import React, { useState } from "react";
import "../Modal-adress/Modaladress.scss";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ModalOrder from "../Modal-order/ModalOrder";

const Modaladress = ({
  active,
  SetModalActive,
  cart,
  formtCart,
  end,
  setEnd,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const date = new Date();

  const onSubmit = (data) => {
    axios
      .post(
        "https://myshopecommerce.pythonanywhere.com/api/v1/orders/",
        {
          items: cart.map((item) => ({
            product: item.id,
            quantity: item.quantity,
          })),
          shipping_address: data.shipping_address,
        },
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        formtCart();
        SetModalActive(false);
      });

    setTimeout(setEnd(!end));
  };

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => SetModalActive(false)}
    >
      <div
        className={active ? "modal__content_payment active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <form className="login2" onSubmit={handleSubmit(onSubmit)}>
          <div className="login__items">
            <div className="login__logo">Ваш адресс</div>

            <input
              type="text"
              {...register("shipping_address", {
                required: true,
              })}
              placeholder="Введите свой адресс"
            />
            {errors?.shipping_address && errors?.shipping_address && (
              <p style={{ height: 40 }}>Заполните адресс ? </p>
            )}

            <div className="payment">
              У нас только оплата наличие
              <span
                style={{ color: "#10B981" }}
                className="material-symbols-outlined"
              >
                approval_delegation
              </span>
            </div>

            <div className="btn">
              <button className="submit">заказать</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modaladress;
