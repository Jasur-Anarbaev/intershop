import React, { useState } from "react";
import "../Modal/Modal.scss";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Modal = ({ active, SetModalActive }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    axios
      .post("https://myshopecommerce.pythonanywhere.com/api/v1/auth/login/", {
        username: data.username,
        password: data.password,
      })

      .then((res) => {
        console.log(res);
        localStorage.setItem("profile", JSON.stringify(res.data));
        localStorage.setItem("token", res.data.token);
        if (res.data.token) {
          window.location.replace("/");
        }
      });
  };
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => SetModalActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="login">
          <div className="login__items">
            <div className="login__logo">Войдите в аккаунт</div>

            <input
              type="text"
              {...register("username", {
                required: "поля обязателно к заполнению",
                minLength: { value: 4, message: "минимум 8 символов" },
              })}
              placeholder="Введите свой Имя"
            />
            {errors?.username && errors?.username && (
              <p style={{ heght: 40 }}>
                {errors?.username?.message || "error"}
              </p>
            )}
            <input
              type="passw"
              {...register("password", {
                required: "поля обязателно к заполнению",
                minLength: { value: 4, message: "минимум 8 символов" },
              })}
              placeholder="Введите свой Пароль"
            />
            {errors?.username && errors?.username && (
              <p style={{ heght: 40 }}>
                {errors?.username?.message || "error"}
              </p>
            )}
            <div className="btn">
              <div className="submit" onClick={handleSubmit(onSubmit)}>
                Войти
              </div>
            </div>
            <b className="b_inner">
              <div className="title"> У вас ещё нет аккаунта?</div>
              <Link to={"/register"}>
                <span onClick={() => SetModalActive(!active)}>
                  Зарегистрироваться
                </span>
              </Link>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
