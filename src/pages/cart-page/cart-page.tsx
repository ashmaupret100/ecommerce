import React from "react";
import { useSelector } from "react-redux";
import Container from "../../components/container";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Calculate the total price of items in the cart
  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <Container>
      <div className="flex justify-center mt-8">
        {/* Left Side: Cart Items and Descriptions */}
        <div className="w-1/2 border-r border-gray-400 pr-4">
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="mb-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>

        {/* Right Side: Checkout Button and Total Display */}
        <div className="w-1/2 pl-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            {cartItems.length > 0 ? (
              <>
                <div className="mb-4">
                  <p>Number of items: {cartItems.length}</p>
                </div>
                <div className="mb-4">
                  <p>Total: ${getTotalAmount()}</p>
                </div>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  Checkout
                </button>
              </>
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
