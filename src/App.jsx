import "./App.css";
import BarChart from "./Components/Barchart/BarChart";
// import DaisyNav from "./Components/DaisyNav/DaisyNav";
import Navbar from "./Components/DaisyNav/Navbar/Navbar";
import LineChart from "./Components/LineChart/LineChart";
import PriceOptions from "./Components/PriceOptions/PriceOptions";
import Phone from "./Components/phones/Phone";


function App() {
  return (
    <>
    <Navbar></Navbar>
    <PriceOptions></PriceOptions>
    <LineChart></LineChart>
    <BarChart></BarChart>
    <Phone></Phone>
    </>
  );
}

export default App;
