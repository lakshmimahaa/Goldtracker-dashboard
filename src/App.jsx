import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import "./styles/dashboard.css";

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;