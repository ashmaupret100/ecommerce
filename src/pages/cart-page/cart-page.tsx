// import React, { useState } from "react";

// const CartPage = () => {
//   // For example, you can use state to manage cart items
//   const [cartItems, setCartItems] = useState([]);

//   // Function to add an item to the cart
//   const addToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };

//   // Function to remove an item from the cart
//   const removeFromCart = (itemId) => {
//     setCartItems(cartItems.filter((item) => item.id !== itemId));
//   };

//   // Function to calculate the total price of all items in the cart
//   const calculateTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + item.price, 0);
//   };

//   return (
//     <div>
//       <h1>Cart Page</h1>
//       {/* Display cart items */}
//       <ul>
//         {cartItems.map((item) => (
//           <li key={item.id}>
//             {item.name} - ${item.price}
//             <button onClick={() => removeFromCart(item.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>

//       {/* Display total price */}
//       <p>Total: ${calculateTotalPrice()}</p>
//       <button className="bg-slate-100 border-1 border-transparent rounded-full py-2 px-4 text-black hover:bg-green-800 hover:text-white text-sm">
//         Add To Cart
//       </button>
//     </div>
//   );
// };

// export default CartPage;
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
