import React, { useContext, useEffect, useState } from "react";
import "../../styles/Main.scss";
import Search from "../../assets/svg/search.svg";
import Remove from "../../assets/svg/remove.svg";
import Tv from "../../assets/img/Tv.png";
import Naush from "../../assets/img/earphone.png";
import Naush2 from "../../assets/img/earphone2.png";
import Category from "../../components/Category";
import { FakeBase } from "../../context/CartContex";
import axios from "axios";
import ModalOrder from "../../Modal-order/ModalOrder";

const Main = ({ title }) => {
  const [itemBase, setItemBase] = useContext(FakeBase);
  const [search, Setsearch] = useState("");
  const OnChangeInput = (event) => {
    Setsearch(event.target.value);
  };

  const [products, setProducts] = useState();

  useEffect(() => {
    axios
      .get("https://myshopecommerce.pythonanywhere.com/api/v1/products/")
      .then((res) => setProducts(res.data));
  }, []);

  const filteredProducts = products?.results?.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="Main">
      <div className="container">
        <div className="main__desc">
          <h2>
            {search ? `Поиск по запросу: "${search}"` : "Популярные Товары"}
            {/* {title} */}
          </h2>
          <div className="main__search">
            <img src={Search} alt="Search" />
            <input
              onChange={OnChangeInput}
              value={search}
              placeholder="Поиск..."
            />
            {search && (
              <img onClick={() => Setsearch("")} src={Remove} alt="Clear" />
            )}
          </div>
        </div>

        <div className="content__category">
          <div className="content__inner">
            {filteredProducts?.map((obj, index) => (
              <Category
                key={index}
                item={obj}
                cartItem={itemBase}
                SetCartItem={setItemBase}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
