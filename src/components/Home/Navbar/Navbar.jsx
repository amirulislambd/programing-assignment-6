import React, { useState } from "react";

const Navbar = ({cartData}) => {
  const totalPrice = cartData.reduce((sum, current) => sum + current.price, 0)
  const [active, setActive]=useState('')

  return (
    <div className=" bg-base-100 shadow-sm sticky top-0 z-20 ">
      <div className="flex items-center justify-between container lg:max-w-7xl mx-auto py-4 md:py-5 lg:py-7 px-4 md:px-6 lg:px-8">
      <div className="">
        <h2 className="hidden md:block text-5xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</h2>
        <div className="dropdown md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <h2 className=" text-xl font-bold ml-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent"><a href="/">DigiTools</a></h2>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
      <ul className="hidden lg:flex items-center gap-2 ">
          <li>
            <button onClick={()=>setActive('features')} className={`btn ${active === 'features' ? 'btn border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white ' : 'btn-ghost'}`}>Features</button>
          </li>
          <li>
            <button onClick={()=>setActive('pricing')} className={`btn  ${active === 'pricing' ? 'btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none' : 'btn-ghost'}`}>Pricing</button>
          </li>
          <li>
            <button onClick={()=>setActive('testimonials')} className={`btn ${active === 'testimonials' ? 'btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none' : 'btn-ghost'}`}>Testimonials</button>
          </li>
          <li>
            <button onClick={()=>setActive('FAQ')} className={`btn ${active === 'FAQ' ? ' bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none' : 'btn-ghost'}`}>FAQ</button>
          </li>
        </ul>

      </div>
      <div className="flex items-center gap-2">
        <div className="dropdown dropdown-start md:dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />{" "}
              </svg>
             {
              cartData.length === 0 ? null :  <span className="badge badge-xs indicator-item bg-red-500 w-3 text-white">{cartData.length}</span>
             }
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">{cartData.length} Items</span>
              <span className="text-info">Subtotal: ${totalPrice.toFixed(2)}</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div  className="flex items-center gap-2">
          <p className="font-bold cursor-pointer">Login</p>
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">Get Started</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
