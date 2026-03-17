// import "./App.css"; 
// import { useState } from "react";
// import { useGoldPrice } from "./Hooks/UseGoldPrice";

// import GoldPriceCard from "./Components/GoldPriceCard";
// import PriceConverter from "./Components/PriceConverter";
// import PriceChart from "./components/PriceChart";

// function App() {
//   const { goldData, chartData, loading, error, refresh } = useGoldPrice();

//   const [currency, setCurrency] = useState("USD");

//   const rates = {
//     USD: 1,
//     INR: 83,
//     AED: 3.67,
//     EUR: 0.92
//   };

//   const convertedPrice = goldData ? goldData.price * rates[currency] : 0;

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="container">
//       <h1>Gold Price Dashboard</h1>

//       <select
//         value={currency}
//         onChange={(e) => setCurrency(e.target.value)}
//       >
//         <option value="USD">USD</option>
//         <option value="INR">INR</option>
//         <option value="AED">AED</option>
//         <option value="EUR">EUR</option>
//       </select>

//       <div className="card">
//         <GoldPriceCard
//           data={{
//             ...goldData,
//             price: convertedPrice,
//             currency: currency
//           }}
//           refresh={refresh}
//         />
//       </div>

//       <div className="card">
//         <PriceConverter price={convertedPrice} />
//       </div>

//       <div className="card">
//         <PriceChart data={chartData} />
//       </div>
//     </div>
//   );
// }

// export default App;




import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Dashboard from "./Pages/Dashboard";
import ProjectCards from "./Components/ProjectCards"
import "./App.css";

function App() {
  return (
    <div className="container">
      <Sidebar />

      <div className="main">
        <Header />
        <Dashboard />
        <ProjectCards />
      </div>
    </div>
  );
}

export default App;