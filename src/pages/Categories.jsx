import React, { useContext, useEffect, useState } from "react";
import { FakeBase } from "../context/CartContex";
import axios from "axios";
import Category from "../components/Category";

const Categories = () => {
  const [itemBase, setItemBase] = useContext(FakeBase);
  const [products, setProducts] = useState();

  useEffect(() => {
    axios
      .get("https://myshopecommerce.pythonanywhere.com/api/v1/category/")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      {/* {products?.results?.map((obj, index) => (
        <Category
          key={index}
          item={obj}
          cartItem={itemBase}
          SetCartItem={setItemBase}
        />
      ))} */}
    </div>
  );
};

export default Categories;
