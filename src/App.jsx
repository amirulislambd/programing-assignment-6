import "./App.css";
import Banner from "./components/Home/Banner/Banner";
import Navbar from "./components/Home/Navbar/Navbar";
import Stats from "./components/Home/Stats/Stats";
import ToggleBTN from "./components/Home/ToggleBTN/ToggleBTN";
import Products from "./components/Home/Products/Products";

const productsFetch=async()=>{
  const res = await fetch('/productData.json')
  return res.json()
}
const promiseData=productsFetch()
function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <Stats/>
      <ToggleBTN promiseData={promiseData}/>
      <Products promiseData={promiseData}/>
    </>
  );
}

export default App;
