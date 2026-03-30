import "./App.css";
import Banner from "./components/Home/Banner/Banner";
import Navbar from "./components/Home/Navbar/Navbar";
import Stats from "./components/Home/Stats/Stats";
import ToggleBTN from "./components/Home/ToggleBTN/ToggleBTN";
import Products from "./components/Home/Products/Products";
import { useState } from "react";
import Cart from "./components/Home/Cart/Cart";
import Steps from "./components/Home/Steps/Steps";

const productsFetch = async () => {
  const res = await fetch("/productData.json");
  return res.json();
};
const promiseData = productsFetch();
function App() {
  const [active, setActive] = useState("active");
  const [cartData, setCartData] = useState([]);

  return (
    <>
      <Navbar cartData={cartData} />
      <Banner />
      <Stats />
      <ToggleBTN
        promiseData={promiseData}
        cartData={cartData}
        active={active}
        setActive={setActive}
      />
      {active === "active" ? (
        <Products
          promiseData={promiseData}
          cartData={cartData}
          setCartData={setCartData}
        />
      ) : (
        <Cart cartData={cartData} setCartData={setCartData} />
      )}
      <Steps/>
    </>
  );
}

export default App;
