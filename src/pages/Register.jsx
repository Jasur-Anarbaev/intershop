import React, { useState } from "react";
import "../styles/Register.scss";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);

    axios
      .post(
        "https://myshopecommerce.pythonanywhere.com/api/v1/auth/register/",
        {
          username: data.username,
          email: data.email,
          password: data.password,
        }
      )
      .then((res) => {
        console.log(res);

        localStorage.setItem("token", res.data.token);
        window.location.replace("/");
      });
  };
  return (
    <div className="register">
      <div className="register__items">
        <div className="register__elements">
          <h1>Зарегистрировать аккаунт</h1>
          <label>
            <span className="material-symbols-outlined">person</span>
            <input
              type="text"
              {...register("username", {
                required: "поля обязателно к заполнению",
                minLength: { value: 4, message: "минимум 8 символов" },
              })}
              placeholder="Имя пользователя"
            />
          </label>
          {errors?.username && errors?.username && (
            <p style={{ heght: 40 }}>{errors?.username?.message || "error"}</p>
          )}
          <label>
            <span className="material-symbols-outlined">email</span>
            <input
              type="email"
              {...register("email", {
                required: "поля обязателно к заполнению",
                minLength: { value: 4, message: "минимум 8 символов" },
              })}
              placeholder="Электронная почта"
            />
          </label>
          {errors?.username && errors?.username && (
            <p style={{ heght: 40 }}>{errors?.username?.message || "error"}</p>
          )}
          <label>
            <span className="material-symbols-outlined">lock</span>
            <input
              type="passw"
              {...register("password", {
                required: "поля обязателно к заполнению",
                minLength: { value: 4, message: "минимум 8 символов" },
              })}
              placeholder="Пароль"
            />
          </label>
          {errors?.username && errors?.username && (
            <p style={{ heght: 40 }}>{errors?.username?.message || "error"}</p>
          )}
          <div className="btn">
            <button className="submit" onClick={handleSubmit(onSubmit)}>
              Зарегистрироваться
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
