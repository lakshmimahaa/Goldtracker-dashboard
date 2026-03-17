import "../Styles/Navbar.css";
import { FaBell, FaSearch, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="navbar">
      
      {/* Search Box */}
      <div className="search-box">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search task..." />
        {/* <FaEnvelope className="inside-icon" /> */}
      </div>

      {/* Right Section */}
      <div className="nav-right">
        
        {/* Message Icon */}
        <div className="icon-circle">
          <FaEnvelope />
        </div>

        {/* Notification Icon */}
        <div className="icon-circle">
          <FaBell />
        </div>

        {/* Profile */}
        <div className="profile">
          <img src="https://i.pravatar.cc/40" alt="user" />
          <div className="profile-text">
            <p>Totok Michael</p>
            <span>tmichael20@mail.com</span>
          </div>
        </div>

      </div>
    </div>
  );
}