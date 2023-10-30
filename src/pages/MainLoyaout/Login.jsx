import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/Login.scss";

let Logen = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios
      .post("https://orozkg.pythonanywhere.com/api/v1/auth/login/", {
        username: data.username,
        password: data.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/");
        console.log(res.data);
      });
  };
  const token = localStorage.getItem("token");
  return (
    <section className="logen">
      <h1>not aliexpress</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            <span className="material-symbols-outlined">person</span>
            <input
              placeholder="Enter username"
              {...register("surname", {
                required: "поля обязателно к заполнению",
                minLength: { value: 4, message: "минимум 5 символов" },
              })}
            />
          </label>
          {errors?.username && errors?.username && (
            <p style={{ heght: 40 }}>{errors?.username?.message || "error"}</p>
          )}
        </div>

        <div>
          <label>
            <span className="material-symbols-outlined">lock</span>
            <input
              placeholder="Enter password"
              {...register("password", {
                required: "поля обязателно к заполнению",
                minLength: { value: 4, message: "минимум 5 символов" },
              })}
            />
          </label>
          {errors?.password && errors?.password && (
            <p style={{ heght: 40 }}>{errors?.password?.message || "error"}</p>
          )}
        </div>

        <button className="submit">войти</button>
      </form>
      <b>
        У вас ещё нет аккаунта? <span> Зарегистрироваться</span>
      </b>

      <div className="application">
        <img
          className="img1"
          src="https://static.cdninstagram.com/rsrc.php/v3/y9/r/E_2mQvC3HG-.png"
          alt=""
        />
        <img
          className="img2"
          src="https://static.cdninstagram.com/rsrc.php/v3/yr/r/fDjwyLC88oO.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Logen;
