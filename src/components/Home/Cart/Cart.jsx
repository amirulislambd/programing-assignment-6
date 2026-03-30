import React from "react";
import emptyPng from "../../../assets/products/shopping-cart.png";
import { MdShoppingCart } from "react-icons/md";
import { toast } from "react-toastify";

const Cart = ({ cartData, setCartData }) => {
  const totalPrice = cartData.reduce((sum, current) => sum + current.price, 0);
  const handleRemove = (item) => {
    const filteredData = cartData.filter(
      (filteredItem) => filteredItem.id !== item.id,
    );
    if (filteredData) {
      setCartData(filteredData);
      toast.error(`${item.name} Item removed from cart.🗑️`,{
        position:"top-center"
      })
    }
  };
  const handlePayment = () => {
    setCartData([]);
    toast.success('Payment Successful! Thank you .',{
        position:"top-center"
    })
  };

  return (
    <div>
      {cartData.length === 0 ? (
        <div className="flex flex-col items-center justify-center  py-20 bg-white border rounded-xl border-zinc-200">
          <MdShoppingCart className="w-20 h-20 animate-pulse" />
          <p className="text-xl font-bold text-zinc-400">Empty your cart</p>
        </div>
      ) : (
        <div className="space-y-2 container lg:max-w-7xl mx-auto">
          {cartData.map((item) => (
            <div className="flex justify-between items-center border border-zinc-200 rounded-xl p-2 md:p-3">
              <div className="flex gap-2 items-center">
                <img
                  className="w-20 border border-zinc-100 rounded-full p-2"
                  src={item.icon}
                  alt={item.icon}
                />
                <div>
                  <h2>{item.name}</h2>
                  <p>${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item)}
                className="btn btn-sm text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          <h2 className="flex items-center justify-between">
            <span className="text-xl  text-zinc-500">Total:</span>
            <span className="text-2xl font-bold">${totalPrice}</span>
          </h2>
          <button
            onClick={handlePayment}
            className="btn w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
