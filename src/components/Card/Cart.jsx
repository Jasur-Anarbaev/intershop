// import React from "react";
// import CartItem from "../CartItem";

// export default function Button({
//   item,
//   handleRemoveFromCart,
//   cart,
//   handleAddToCart,
// }) {
//   return (
//     <div className="content__btn">
//       <div className="price">{item.price}</div>
//       <div className="btns">
//         {/* <button onClick={() => setCart(item)}>Корзину +</button> */}
//         <button id="button" onClick={() => handleAddToCart(item)}>
//           Add
//         </button>
//         {cart.length > 0 ? (
//           <CartItem
//             key={item.id}
//             item={item}
//             onRemoveItem={handleRemoveFromCart}
//           />
//         ) : null}
//       </div>
//     </div>
//   );
// }








// import React, { useState, useEffect } from "react";
// import CartItem from "../CartItem";

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     // При загрузке компонента, получите элементы из localStorage (если есть)
//     const storedItems = localStorage.getItem("cartItems");
//     if (storedItems) {
//       setCartItems(JSON.parse(storedItems));
//     }
//   }, []);

//   useEffect(() => {
//     // При изменении элементов корзины, сохраните их в localStorage
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const handleAddToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };

//   const handleRemoveFromCart = (itemId) => {
//     const updatedItems = cartItems.filter((item) => item.id !== itemId);
//     setCartItems(updatedItems);
//   };

//   return (
//     <div>
//       {cartItems.map((item) => (
//         <CartItem
//           key={item.id}
//           item={item}
//           onRemoveItem={handleRemoveFromCart}
//         />
//       ))}
//       <button onClick={() => handleAddToCart({ id: 1, name: "Продукт" })}>
//         Add
//       </button>
//     </div>
//   );
// };

// export default Cart;
