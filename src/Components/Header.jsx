
import React from "react";
import "../Styles/Header.css";
import { FiSearch, FiMail, FiBell } from "react-icons/fi";

function Header() {
  return (
    <div className="header">

      {/* Search */}
      <div className="search-box">
        <FiSearch className="icon" />
        <input type="text" placeholder="Search task" />
        <span className="shortcut">⌘ F</span>
      </div>

      <div className="header-right">

        <div className="icon-box">
          <FiMail />
        </div>

        <div className="icon-box">
          <FiBell />
        </div>

        <div className="profile">
          <img
            src="https://api.dicebear.com/7.x/adventurer/svg?seed=Maha"
            alt="profile"
          />

          <div className="profile-text">
            <h4>Totok Michael</h4>
            <p>tmichael20@mail.com</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Header;