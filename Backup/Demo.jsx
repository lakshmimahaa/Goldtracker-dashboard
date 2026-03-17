
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

      {/* Right side */}
      <div className="header-right">

        <div className="icon-box">
          <FiMail />
        </div>

        <div className="icon-box">
          <FiBell />
        </div>

        {/* Profile */}
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



import "../Styles/ProjectCards.css";
import { FaVideo, FaPause, FaStop, FaRegPauseCircle } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";
import { MdApi } from "react-icons/md";
import { BsFillKanbanFill } from "react-icons/bs";

function ProjectCards() {
  return (
    <div className="dashboardGrid">

      {/* PROJECT ANALYTICS */}

      <div className="card-analytics">

        <h3>Project Analytics</h3>

        <div className="bars">

          <div className="bar b1"></div>
          <div className="bar b2"></div>
          <div className="bar b3"></div>
          <div className="bar b4 active"></div>
          <div className="bar b5"></div>
          <div className="bar b6"></div>
          <div className="bar b7"></div>

        </div>

        <div className="days">
          <span>S</span>
          <span>M</span>
          <span>T</span>
          <span>W</span>
          <span>T</span>
          <span>F</span>
          <span>S</span>
        </div>

      </div>


      {/* REMINDERS */}

      <div className="card-reminders">

      <div  className='cards'>
        <h3>Reminders</h3>

        <h4>Meeting with Arc Company</h4>

        <p>Time: 02:00 pm - 04:00 pm</p>

      </div>

        <button className="meetingBtn">
          <FaVideo />
          Start Meeting
        </button>

      </div>


      {/* PROJECT LIST */}

      <div className="card-projects">

        <div className="projectHeader">
          <h3>Project</h3>
          <button className="newBtn">+ New</button>
        </div>

        <ul className="demo">

          <li className="list">
            <MdApi className="icon" style={{ color: "#2563eb" }} />
            <div className="points">
              <h2>Develop API Endpoints</h2>
              <p>Due date: Nov 26</p>
            </div>
          </li>

          <li className="list">
            <HiOutlineSparkles className='icon' style={{ color: "#ff5733" }} />
            <div className="points">
              <h2>Onboarding Flow</h2>
              <p>Due date: Nov 28</p>
            </div>
          </li>

          <li className="list">
            <BsFillKanbanFill className="icon" style={{ color: "brown" }} />
            <div className="points">
              <h2>Build Dashboard</h2>
              <p>Due date: Nov 30</p>
            </div>
          </li>

          <li className="list">
            <HiOutlineSparkles className="icon" style={{ color: "#facc15" }} />
            <div className="points">
              <h2>Optimize Page Load</h2>
              <p>Due date: Dec 5</p>
            </div>
          </li>

          <li className="list">
            <BsFillKanbanFill className="icon violet" />
            <div className="points">
              <h2>Cross Browser Testing</h2>
              <p>Due date: Dec 8</p>
            </div>
          </li>

        </ul>

      </div>


      {/* TEAM COLLABORATION */}
  
    <div className="card-team">
  <div className="teamHeader">
    <h3>Team Collaboration</h3>
    <button className="addBtn">+ Add Member</button>
  </div>

  <div className="membersList">
    <div className="member">
      <img
        src="https://api.dicebear.com/7.x/adventurer/svg?seed=Alexandra"
        alt="Alexandra"
        className="avatar"
      />
      <div className="memberInfo">
        <span className="name">Alexandra Deff</span>
        <small>Github Project Repository</small>
      </div>
      <div className="statusBtns">
        <button className="inprogress">In Progress</button>
      </div>
    </div>

    <div className="member">
      <img
        src="https://api.dicebear.com/7.x/adventurer/svg?seed=Edwin"
        alt="Edwin"
        className="avatar"
      />
      <div className="memberInfo">
        <span className="name">Edwin Adenike</span>
        <small>User Authentication System</small>
      </div>
      <div className="statusBtns">
        <button className="complete">Complete</button>
      </div>
    </div>

    <div className="member">
      <img
        src="https://api.dicebear.com/7.x/adventurer/svg?seed=Isaac"
        alt="Isaac"
        className="avatar"
      />
      <div className="memberInfo">
        <span className="name">Isaac Oluwatemilrun</span>
        <small>Search and Filter Functionality</small>
      </div>
      <div className="statusBtns">
        <button className="pending">Pending</button>
      </div>
    </div>

    <div className="member">
      <img
        src="https://api.dicebear.com/7.x/adventurer/svg?seed=David"
        alt="David"
        className="avatar"
      />
      <div className="memberInfo">
        <span className="name">David Oshodi</span>
        <small>Responsive Layout</small>
      </div>
      <div className="statusBtns">
        <button className="inprogress">In Progress</button>
      </div>
    </div>
  </div>
</div>


      {/* PROJECT PROGRESS */}
    
   <div className="card-progress1">
  <h3>Project Progress</h3>

  <div className="halfCircleWrapper">
    <svg viewBox="0 0 200 120" className="halfCircleChart">

      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6ee7b7" />   
          <stop offset="35%" stopColor="#22c55e" />  
          <stop offset="70%" stopColor="#15803d" />  
          <stop offset="100%" stopColor="#14532d" /> 
        </linearGradient>
      </defs>

      <path
        d="M20 100 A80 80 0 0 1 180 100"
        className="bg"
      />

      <path
        d="M20 100 A80 80 0 0 1 180 100"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />

      <path
        d="M20 100 A80 80 0 0 1 180 100"
        className="progress"
        strokeDasharray="251"
        strokeDashoffset="148"  
      />

      <text x="100" y="85" className="percent">41%</text>

    </svg>

    <p className="label">Project Ended</p>
  </div>

  <div className="legend">
    <div><span className="dot completed"></span> Completed</div>
    <div><span className="dot progressDot"></span> In Progress</div>
    <div><span className="dot pending"></span> Pending</div>
  </div>
</div>

  <div className="card-tracker">
  <h3>Time Tracker</h3>

  <h1 className="time">01:24:08</h1>

  <div className="trackerButtons">
    <button className="pause-btn">
      <FaPause />
    </button>

    <button className="stop">
      <FaStop />
    </button>
  </div>
</div>

    </div>
  );
}

export default ProjectCards;


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

import "../Styles/Dashboard.css"; 
import { FiArrowUpRight } from "react-icons/fi";

function Dashboard() {
  return (
    <div className="dashboard">

      {/* Top Title */}
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

        {/* Ended Projects */}
        <div className="card">
          <h3>Ended Projects</h3>
          <span className="arrow"><FiArrowUpRight /></span>
          <h1>10</h1>

          <p className="increase">
            <span className="increase-number"> 2 </span>
            Increased from last month
          </p>
        </div>

        {/* Running Projects */}
        <div className="card">
          <h3>Running Projects</h3>
          <span className="arrow"><FiArrowUpRight /></span>
          <h1>12</h1>

          <p className="increase">
            <span className="increase-number"> 3 </span>
            Increased from last month
          </p>
        </div>

        {/* Pending Projects */}
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



.header{
display:flex;
justify-content:space-between;
align-items:center;
background:#ffffff;
padding:10px 20px;
border-radius:12px;
box-shadow:0 2px 5px rgba(0,0,0,0.04);
height:60px;
margin-bottom:10px;
margin-left: -15px;
width: 76vw;
/* border: 2px solid black; */
}

/* Search */

.search-box{
display:flex;
align-items:center;
background:#f5f6f8;
padding:6px 12px;
border-radius:15px;
width:260px;
gap:8px;
}

.search-box input{
border:none;
background:transparent;
outline:none;
flex:1;
font-size:13px;
}

.shortcut{
background:#e9ecef;
padding:2px 6px;
border-radius:5px;
font-size:11px;
color:#777;
}

/* Right side */

.header-right{
display:flex;
align-items:center;
gap:12px;
}

.icon-box{
width:34px;
height:34px;
display:flex;
align-items:center;
justify-content:center;
background:#f5f6f8;
border-radius:14px;
font-size:16px;
cursor:pointer;
}

/* Profile */

.profile{
display:flex;
align-items:center;
gap:8px;
/* background:#f5f6f8; */
padding:4px 8px;
border-radius:8px;
}

.profile img{
width:32px;
height:32px;
border-radius:50%;
padding:6px;              /* space around image */
background:lightcoral;      /* circle background color */
}

.profile-text h4{
font-size:13px;
margin:0;
}

.profile-text p{
font-size:11px;
color:#777;
margin:0;
}



.sidebar{
width:205px;
height:154vh;
background:#ffffff;
border-radius:25px;
padding:25px;
display:flex;
flex-direction:column;
justify-content:space-between;
box-shadow:0 5px 20px rgba(0,0,0,0.05);
font-family: "Inter", sans-serif;
border: 2px solid red;
}

.logo{
display:flex;
gap:18px;
}

.logo h2{
font-size:20px;
font-weight:700;
color:black;
}

.logo-icon{
width:20px;
height:20px;
background:black;
border-radius:4px;
box-shadow:
9px 0 black,
0 9px black,
9px 9px black;
}

.menu-title{
font-size:12px;
color:#9aa3a1;
margin:18px 0 10px 0;
letter-spacing:1px;
}

.sidebar ul{
list-style:none;
padding:0;
margin:0;
}

.sidebar li{
display:flex;
align-items:center;
gap:12px;
padding:12px 14px;
border-radius:10px;
cursor:pointer;
margin-bottom:8px;
font-size:14px;
color:#1fa97a;
transition:0.2s;
position:relative;
}

.sidebar li:hover{
background:#f2f4f3;
}

.sidebar li.active{
background:#e6f4ea;
color:black;
font-weight:600;
}

.icon{
font-size:18px;
color:#1fa97a;
font-weight: 300;
}

.sidebar li.active .icon{
color:#0f7a58;
}

.badge{
margin-left:auto;
background:#0f7a58;
color:white;
font-size:9px;
padding:3px;
border-radius:3px;
font-weight:300;
}

.download-card{
margin-top:30px;
padding:22px;
border-radius:20px;
background:linear-gradient(160deg,#0d3f35,#0a2f2a);
color:white;
text-align:center;
box-shadow:0 8px 18px rgba(0,0,0,0.15);
border:2px solid palegreen;
height: 33vh;
width: 15vw;
margin-left: -8px;
}

.download-card h4{
font-size:16px;
font-weight:600;
margin-bottom:10px;
}

.download-card p{
font-size:12px;
color:#b7e4d9;
margin-bottom:18px;
}

.download-btn{
background:#1fa97a;
border:none;
padding:10px 20px;
border-radius:25px;
color:white;
font-size:14px;
cursor:pointer;
transition:0.3s;
}

.download-btn:hover{
background:#169b6c;
}


.dashboard {
  padding: 20px;
  font-family: Arial, sans-serif;
  /* border: 2px solid black; */
  margin-left: -15px;
  width: 78vw;

}

/* Top section */
.dashboard-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.dashboard-top h1 {
  font-size: 28px;
  margin: 0 0 5px 0;
  margin-left: -15px;

}

.dashboard-top p {
  font-size: 12px;
  color: #1f7a4f;
  font-weight:100;
  margin: 0;
  margin-left: -15px;

}

.dashboard-buttons{
  /* border: 2px solid red; */
  margin-left: 15px;

}
/* Top buttons */
.dashboard-buttons button {
  padding: 6px 12px;
  margin-left: 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  transition: 0.2s all;
  /* border: 2px solid red; */
}

.add-btn {
  background-color: #1f7a4f;
  color: white;
  height: 7vh;
  width: 10vw;
  border-radius: 33px;
  /* margin-left: 55px; */
}

.import-btn {
  background-color: #f0f0f0;
  font-weight: 200;
  color: #333;
  height: 7vh;
  width: 10vw;
  color: #1f7a4f;
  /* margin-left: 55px; */

}

.dashboard-buttons button:hover {
  opacity: 0.85;
}

.project-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  height: 28vh;
  width: 76vw;
  /* border: 2px solid black; */
  margin-left: -15px;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative; /* important for absolute arrow */
}

/* Arrow on top-right corner */
.card .arrow {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #1f7a4f;
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

/* Card titles */
.card h3 {
  font-size: 13px;
  color: #666;
  margin-bottom: 5px;
}

/* Card numbers */
.card h1 {
  font-size: 28px;
  margin-bottom: 10px;
}

/* Total card styling */
.card.total {
  background: linear-gradient(135deg, #1f7a4f, #0f5132);
  color: white;
}

.card.total h3 {
  color: white;
}

/* Increase box below number */
.increase {
  font-size: 8.5px;
  color: #1f7a4f;
  display: flex;
  align-items: center;
  gap: 5px;
}

.card.total .increase {
  color: #d1f5e0;
}

/* Number box with arrow inside for other cards */
.increase-number {
  background: #e8f5e9;
  color: #1f7a4f;
  padding: 3px 8px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

/* Arrow inside number box */
.increase-number .arrow {
  background: #1f7a4f;
  color: white;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
}


/* ===================== */
/* GRID LAYOUT */
/* ===================== */


* {
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
}

.dashboardGrid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 20px;
  margin-top: -1%;
  margin-left: -1%;
  /* border: 3px solid black; */
}

/* ===================== */
/* COMMON CARD */
/* ===================== */
.card,
.card-analytics,
.card-reminders,
.card-projects,
.card-progress1,
.card-team,
.tracker {
  background: #fff;
  border-radius: 18px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

/* ===================== */
/* PROJECT ANALYTICS */
/* ===================== */
.card-analytics {
  grid-column: span 1;
  border: 2px solid brown;
  height: 40vh;
  width: 38vw;
}

.bars {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 120px;
}

.bar {
  width: 20px;
  border-radius: 20px;
  background: #e5e7eb;
}

.b1 { height: 70px; }
.b2 { height: 100px; background:#0f6b4f; }
.b3 { height: 80px; background:#3fb58d; }
.b4 { height: 110px; background:#134e3a; }
.b5 { height: 85px; }
.b6 { height: 60px; }
.b7 { height: 75px; }

.days {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #888;
  margin-top: 10px;
}

/* ===================== */
/* REMINDERS */
/* ===================== */
.card-reminders {
  grid-column: span 1;
  border: 2px solid tomato;
  height: 40vh;
  width: 18.5vw;
  margin-left: -8%;
}

.cards{
    /* border: 2px solid gold; */
    margin-bottom: 3px;
    /* text-align: center; */
    display: flex;
    flex-direction: column;
    gap: 13px;
}
.card-reminders h3{
    font-weight: 200;
}
.card-reminders h4{
    font-size: 20px;
    color: linear-gradient(160deg,#0d3f35,#0a2f2a);
}
.card-reminders p{
    font-size: 13px;
}
.meetingBtn {
  margin-top: 28px;
  background:linear-gradient(160deg,#0d3f35,#0a2f2a);
  color: white;
  border: none;
  padding: 10px;
  border-radius: 23px;
  display: flex;
  gap: 8px;
  width: 13vw;
  align-items: center;
  margin-left: 20px;
}

/* ===================== */
/* PROJECT LIST */
/* ===================== */
.card-projects {
  grid-column: span 1;
  margin-left: -15%;
  width: 19vw;
  height: 56vh;
}

.projectHeader {
  display: flex;
  justify-content: space-between;
}

.newBtn{
   background: linear-gradient(135deg, #22c55e, #16a34a);
  color: #fff;
  border: none;
  padding: 8px 14px;
  border-radius: 14px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.demo {
  list-style: none;
  padding: 0;
  margin-top: 8px;
  /* border: 2px solid blueviolet; */
}

.points{
    display: flex;
    flex-direction: column;
    gap: 5px;
    /* border: 2px solid red; */
}

.list {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.icon {
  margin-right: 10px;
}

.card-projects .points h2 {
  font-size: 12px;
}

.points p {
  font-size: 11px;
  color: #6b7280;
}

/* ===================== */
/* TEAM */
/* ===================== */
.card-team {
  grid-column: span 2;
  border: 2px solid green;
  width: 35vw;
  margin-top: -14%;
  height: 49vh;

}

.addBtn {
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: #fff;
  border: none;
  padding: 8px 14px;
  border-radius: 14px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.teamHeader{
  /* border: 2px solid blue; */
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: space-between;
}

.member {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.percent{
    border: 2px solid red;
}

.legend {
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-top: 10px;
  margin-left: 15%;
  font-size: 13px;
  width: 17vw;
  /* border: 2px solid black; */
}

.legend div {
  display: flex;
  align-items: center;
  gap: 6px;
}

/* COMMON DOT */
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

/* COLORS */
.completed {
  background-color: #16a34a; /* green */
}

.progressDot {
  background-color: #22c55e; /* light green */
}

.pending {
  background-color: #d1d5db; /* grey */
}

.avatar {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}

.memberInfo {
  flex: 1;
  margin-left: 10px;
}

.statusBtns button {
  font-size: 10px;
  padding: 5px 8px;
  border-radius: 6px;
  border: none;
}

.complete { background: #22c55e; color: white; }
.inprogress { background: orange; }
.pending { background: #e5e7eb; }

/* ===================== */
/* ✅ PROJECT PROGRESS */
/* ===================== */
.card-progress1 {
  grid-column: span 1;
  border: 2px solid navy;
  margin-left: -120%;
  margin-top: -40%;
  width: 21vw;
  height: 50vh;
}

.card-progress1 .halfCircleWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-progress1 .bg {
  fill: none;
  stroke: #e5e7eb;
  stroke-width: 10;
}

.card-progress1 .progress {
  fill: none;
  stroke: url(#gradient);
  stroke-width: 10;
}

.card-progress1 .percent {
  font-size: 20px;
  font-weight: bold;
}

.card-progress1 .legend {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.card-progress1 .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.completed { background: green; }
.progressDot { background: #22c55e; }
.pending { background: #ddd; }

/* ===================== */
/* TRACKER */
/* ===================== */

/* CARD */
.card-tracker {
  background:linear-gradient(160deg,#0d3f35,#0a2f2a);
  padding: 20px;
  border-radius: 18px;
  width: 19vw;
  margin-left: 151%;
  margin-top: -48%;
  height: 34vh;
  text-align: center;
  box-shadow:0 8px 18px rgba(0,0,0,0.15);
}

/* TITLE */
.card-tracker h3 {
  font-size: 15px;
  color:white;
  margin-bottom: 10px;
}

/* TIME TEXT */
.card-tracker .time {
  font-size: 34px;
  font-weight: 500;
  color: white;
  margin: 15px 0 25px;
  letter-spacing: 2px;
}

/* BUTTON WRAPPER */
.trackerButtons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

/* COMMON BUTTON */
.trackerButtons button {
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
}

/* PAUSE BUTTON (GREEN) */
.pause-btn {
  background: #FFF;
  color:linear-gradient(135deg, #22c55e, #16a34a);;
  box-shadow: 0 6px 15px rgba(34, 197, 94, 0.4);
}

/* STOP BUTTON (RED) */
.stop {
  background: #ef4444;
  color: #fff;
  box-shadow: 0 6px 15px rgba(239, 68, 68, 0.4);
}

/* HOVER EFFECT */
.trackerButtons button:hover {
  transform: translateY(-3px) scale(1.05);
}

/* CLICK EFFECT */
.trackerButtons button:active {
  transform: scale(0.95);
}


