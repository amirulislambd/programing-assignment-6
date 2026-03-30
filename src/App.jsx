import "./App.css";
import Banner from "./components/Home/Banner/Banner";
import Navbar from "./components/Home/Navbar/Navbar";
import Stats from "./components/Home/Stats/Stats";
import ToggleBTN from "./components/Home/ToggleBTN/ToggleBTN";
function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Stats/>
      <ToggleBTN/>
    </>
  );
}

export default App;
