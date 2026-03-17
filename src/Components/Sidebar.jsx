import {
  FaThLarge,
  FaTasks,
  FaCalendar,
  FaChartBar,
  FaUsers,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt
} from "react-icons/fa";
import '../Styles/Sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidebar">

      {/* Logo */}
      <h2 className="logo">Donezo</h2>

      {/* MENU */}
      <p className="section-title">MENU</p>

      <ul className="menu">
        <li className="active">
          <FaThLarge /> <span>Dashboard</span>
        </li>

        <li>
          <FaTasks /> 
          <span>Tasks</span>
          <span className="badge">12+</span>
        </li>

        <li><FaCalendar /> <span>Calendar</span></li>
        <li><FaChartBar /> <span>Analytics</span></li>
        <li><FaUsers /> <span>Team</span></li>
      </ul>

      {/* GENERAL */}
      <p className="section-title">GENERAL</p>

      <ul className="menu">
        <li><FaCog /> <span>Settings</span></li>
        <li><FaQuestionCircle /> <span>Help</span></li>
        <li><FaSignOutAlt /> <span>Logout</span></li>
      </ul>

      {/* DOWNLOAD CARD */}
      <div className="download-box">
        <p>Download our<br />Mobile App</p>
        <button>Download</button>
      </div>

    </div>
  );
}

