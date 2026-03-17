import "../Styles/Dashboard.css"; 
import { FiArrowUpRight } from "react-icons/fi";

function Dashboard() {
  return (
    <div className="dashboard">

      <div className="dashboard-top">
        <div>
          <h1>Dashboard</h1>
          <p>Plan, prioritize, and accomplish your tasks with ease.</p>
        </div>

        <div className="dashboard-buttons">
          <button className="add-btn">+ Add Project</button>
          <button className="import-btn">Import Data</button>
        </div>
      </div>


      <div className="project-cards">

        <div className="card total">
          <h3>
            Total Projects
            <span className="arrow"><FiArrowUpRight /></span>
          </h3>
          <h1>24</h1>

          <p className="increase">
            <span className="increase-number">5</span>
            Increased from last month
          </p>
        </div>

        <div className="card">
          <h3>Ended Projects</h3>
          <span className="arrow"><FiArrowUpRight /></span>
          <h1>10</h1>

          <p className="increase">
            <span className="increase-number"> 2 </span>
            Increased from last month
          </p>
        </div>

        <div className="card">
          <h3>Running Projects</h3>
          <span className="arrow"><FiArrowUpRight /></span>
          <h1>12</h1>

          <p className="increase">
            <span className="increase-number"> 3 </span>
            Increased from last month
          </p>
        </div>

        <div className="card">
          <h3>Pending Projects</h3>
          <span className="arrow"><FiArrowUpRight /></span>
          <h1>2</h1>

          <p className="increase">
            <span className="increase-number"> 1 </span>
            Increased from last month
          </p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;