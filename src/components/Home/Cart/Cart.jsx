import React from "react";

const Cart = ({ cartData, setCartData }) => {
  console.log(cartData);
  return (
    <div className="space-y-2 container lg:max-w-7xl mx-auto">
      {cartData.map((item) => (
        <div className="flex justify-between items-center border border-zinc-200 rounded-xl p-2 md:p-3">
          <div className="flex gap-2 items-center">
            <img className="w-20 border border-zinc-100 rounded-full p-2" src={item.icon} alt={item.icon} />
            <div>
              <h2>{item.name}</h2>
              <p>${item.price}</p>
            </div>
          </div>
          <button className="btn btn-sm text-red-500">Remove</button>
        </div>
      ))}
      <h2 className="flex items-center justify-between">
        <span className="text-xl font-bold text-zinc-500">Total:</span>
      <span className="text-2xl font-bold">$</span>
      </h2>
    </div>
  );
};

export default Cart;
