import React, { useState } from "react";
import "../Modal-order/Modalorder.scss";
const ModalOrder = ({ end }) => {
  return (
    <div className={end ? "order" : "none"}>
      <div className="order__inner">
        <h1>Товар получено</h1>
        <span className="material-symbols-outlined">check_circle</span>
      </div>
    </div>
  );
};
export default ModalOrder;
