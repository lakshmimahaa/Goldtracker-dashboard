import "../Styles/Sidebar.css";

import { RiDashboardFill } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { HiChartBar } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";

import { IoSettingsSharp } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">

      {/* Logo */}

      <div className="logo">
        <div className="logo-icon"></div>
        <h2>Donezo</h2>
      </div>

      <div>

        <p className="menu-title">MENU</p>

        <ul>

          <li className="active">
            <RiDashboardFill className="icon"/>
            Dashboard
          </li>

          <li>
            <FaTasks className="icon"/>
            Tasks
            <span className="badge">12+</span>
          </li>

          <li>
            <MdCalendarMonth className="icon"/>
            Calendar
          </li>

          <li>
            <HiChartBar className="icon"/>
            Analytics
          </li>

          <li>
            <FaUsers className="icon"/>
            Team
          </li>

        </ul>

        <p className="menu-title">GENERAL</p>

        <ul>

          <li>
            <IoSettingsSharp className="icon"/>
            Settings
          </li>

          <li>
            <FaQuestionCircle className="icon"/>
            Help
          </li>

          <li>
            <FaSignOutAlt className="icon"/>
            Logout
          </li>

        </ul>

      </div>

      {/* Download card */}

      <div className="download-card">
        <h4>Download our <br/> Mobile App</h4>
        <p>Get easy in another way</p>

        <button className="download-btn">
          Download
        </button>
      </div>

    </div>
  );
}

export default Sidebar;

