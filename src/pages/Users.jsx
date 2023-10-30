import React, { useContext, useEffect, useState } from "react";
import "../styles/Users.scss";
import axios from "axios";
import { FakeBase } from "../context/CartContex";
const Users = ({ item }) => {
  const [itemBase, setItemBase] = useContext(FakeBase);
  const token = localStorage.getItem("token");

  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get("https://myshopecommerce.pythonanywhere.com/api/v1/users/", {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setList(res.data.results));
  }, []);

  const removeToken = () => {
    localStorage.removeItem("token");
    window.location.replace("/");
  };

  return (
    <div className="container">
      <div className="group">
        <div className="group__items">
          <div className="group__items_blog">
            {list.map((obj, index) => (
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  flexWrap: "wrap",
                }}
                key={index}
              >
                <div className="username">{obj.username}</div>
                <div className="email">{obj.email}</div>
                <div className="id">{obj.id}</div>
              </div>
            ))}

            {/* <input type="email" placeholder="Email" /> */}
            <div className="group__btns">
              <button>Edit</button>
              <button>Delete</button>
              <button style={{ background: "red" }} onClick={removeToken}>
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
