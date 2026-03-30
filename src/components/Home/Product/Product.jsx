import React from "react";
import { GiCheckMark } from "react-icons/gi";

const Product = ({ item }) => {
  console.log(item);
  return (
    <div className="border border-zinc-300 p-2 rounded-xl relative">
      <img className="w-16 bg-base-100 shadow-sm p-2 rounded-full" src={item.icon} alt="" />
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">{item.name}</h1>
      <p className="text-sm md:text-lg text-zinc-500">{item.description}</p>
      <div className="flex items-center gap-1">
        <p>
          <span className="text-3xl font-bold">${item.price}</span>
        </p>
        <p>/ <span className="text-zinc-500">{item.period}</span></p>
      </div>
      {item.features.map((feature, i) => (
          <div key={i}>
          <p className="inline-flex items-center gap-1 text-zinc-500"><GiCheckMark className="text-green-500" />{feature}</p>
        </div>
      ))}
      <button className="btn w-full">Buy Now</button>
      <p className="absolute right-2 top-2 inline-flex border rounded-full px-2">{item.tag}</p>
    </div>
  );
};

export default Product;
