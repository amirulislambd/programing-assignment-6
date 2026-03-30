import React, { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { toast } from "react-toastify";

const Product = ({ item, cartData, setCartData }) => {
  const isAlreadyInCart = cartData.some(cartItem=>cartItem.id===item.id)
  const handleAbbBtn = (item) => {
    const filterCar = cartData.find((cartItem) => cartItem.id === item.id);
    console.log(filterCar);
    if (filterCar) {
      toast.warning(`${item.name} already in your cart.`, {
        position: "top-center",
      });
      return;
    } else {
      setCartData([...cartData, item]);
      toast.success(`${item.name} Product successfully added to the cart 🛒`, {
        position: "top-center",
      });
    }
  };
  return (
    <div className="border border-zinc-300 p-4 rounded-xl relative flex flex-col justify-between space-y-6 transition-all duration-1000 hover:shadow-2xl ">
      <div className="space-y-1 md:space-y-2">
      
      <p
        className={`absolute right-2 top-2 inline-flex  rounded-full px-3 md:py-1 ${item.tag === "popular" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-[#E1E7FF]" : item.tag === "best seller" ? "bg-[#FEF3C6] text-yellow-700" : item.tag === "new" ? "bg-[#DBFCE7]" : ""}`}
      >
        {item.tag}
      </p>
      <img
        className="w-16 bg-base-100 shadow-sm p-2 rounded-full"
        src={item.icon}
        alt=""
      />
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">{item.name}</h1>
      <p className="text-sm md:text-lg text-zinc-500">{item.description}</p>
      <div className="flex items-center gap-1">
        <p>
          <span className="text-3xl font-bold">${item.price}</span>
        </p>
        <p>
          / <span className="text-zinc-500">{item.period}</span>
        </p>
      </div>
   <div>
   {item.features.map((feature, i) => (
        <div key={i}>
          <p className="inline-flex items-center gap-1 text-zinc-500">
            <GiCheckMark className="text-green-500" />
            {feature}
          </p>
        </div>
      ))}
   </div>
      </div>
      <button
        onClick={() => handleAbbBtn(item)}
        className={`btn  w-full rounded-full ${isAlreadyInCart ? " btn-primary " : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"}`}
      >
        {
          isAlreadyInCart ? "added to cart" :"Buy Now"
        }

        
      </button>
    </div>
  );
};

export default Product;
