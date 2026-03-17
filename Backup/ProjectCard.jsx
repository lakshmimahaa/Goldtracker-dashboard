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

      <button className="meetingBtn">
          <FaVideo />
          Start Meeting
        </button>

      </div>  

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
        d="M20 100 A80 80 0 0 1 180 100" className="progress" strokeDasharray="251" strokeDashoffset="148"  
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



/* ===================== */
/* GLOBAL RESET */
/* ===================== */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  overflow-x: hidden;
  font-family: "Inter", sans-serif;
  background: #f3f5f4;
}

/* ===================== */
/* DASHBOARD GRID LAYOUT */
/* ===================== */
.dashboardGrid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 8px;           /* Reduced gap from 12px to 8px */
  padding: 0;          /* Removed extra padding */
  align-items: start;
}

/* ===================== */
/* CARDS */
/* ===================== */
.card,
.card-analytics,
.card-reminders,
.card-projects,
.card-progress1,
.card-team,
.card-tracker {
  background: #fff;
  border-radius: 18px;
  padding: 12px;      /* Reduced padding slightly */
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  width: 100%;
  height: auto;
  /* border:3px solid black; */
}

/* ===================== */
/* GRID POSITION */
/* ===================== */
.card-analytics { grid-column: 1 / 2; }
.card-reminders { grid-column: 2 / 3; }
.card-projects { grid-column: 3 / 4; }

.card-team { grid-column: 1 / 2; }
.card-progress1 { grid-column: 2 / 3; }
.card-tracker { 
  grid-column: 3 / 4;
  background: linear-gradient(160deg,#0d3f35,#0a2f2a);
  color: white;
  text-align: center;
}

/* ===================== */
/* ANALYTICS */
/* ===================== */
.bars {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 110px;
}

.bar {
  width: 18px;
  border-radius: 20px;
  background: #e5e7eb;
}

.b1 { height: 65px; }
.b2 { height: 95px; background: #0f6b4f; }
.b3 { height: 75px; background: #3fb58d; }
.b4 { height: 105px; background: #134e3a; }
.b5 { height: 80px; }
.b6 { height: 55px; }
.b7 { height: 70px; }

.days {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #888;
  margin-top: 6px;
}

/* ===================== */
/* REMINDERS */
/* ===================== */
.cards {
  display: flex;
  flex-direction: column;
  gap: 6px;   /* reduced from 8px */
}

.meetingBtn {
  margin-top: 8px;
  background: linear-gradient(160deg,#0d3f35,#0a2f2a);
  color: white;
  padding: 6px;   /* reduced slightly */
  border-radius: 20px;
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
}

/* ===================== */
/* PROJECTS */
.projectHeader {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;  /* reduced */
}

.newBtn {
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 14px;
  font-size: 12px;
  cursor: pointer;
}

.points {
  display: flex;
  flex-direction: column;
  gap: 4px;  /* reduced gap */
}

.list {
  display: flex;
  align-items: center;
  gap: 6px; /* reduced gap */
}

.points h2 { font-size: 12px; }
.points p { font-size: 11px; color: #6b7280; }

/* ===================== */
/* TEAM */
.teamHeader {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
}

.addBtn {
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 14px;
  font-size: 12px;
  cursor: pointer;
}

.member {
  display: flex;
  align-items: center;
  margin-bottom: 6px;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.memberInfo {
  flex: 1;
  margin-left: 6px;
}

.statusBtns button {
  font-size: 10px;
  padding: 3px 5px;
  border-radius: 6px;
  border: none;
  margin-right: 3px;
}

.complete { background: #22c55e; color: white; }
.inprogress { background: orange; }
.pending { background: #e5e7eb; }

/* ===================== */
/* PROGRESS */
.card-progress1 .halfCircleWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.percent {
  font-size: 18px;
  font-weight: bold;
}

.legend {
  display: flex;
  flex-direction: column;
  font-size: 12px;
  margin-top: 4px;
}

/* ===================== */
/* TRACKER */
.card-tracker h3 { font-size: 14px; }

.time {
  font-size: 22px;
  margin: 8px 0;
}

.trackerButtons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.trackerButtons button {
  border: none;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  cursor: pointer;
}

.pause-btn { background: white; }
.stop { background: red; color: white; }

/* ===================== */
/* MOBILE */
@media (max-width: 768px) {
  .dashboardGrid {
    grid-template-columns: 1fr;
    gap: 6px;
    padding: 0;
  }
}