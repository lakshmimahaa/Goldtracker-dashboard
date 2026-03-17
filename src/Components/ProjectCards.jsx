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
        d="M20 100 A80 80 0 0 1 180 100"
        className="progress"
        strokeDasharray="251"
        strokeDashoffset="148"  
      />

      <text
  x="100" 
  y="85" 
  className="percent"
  textAnchor="middle"        // centers horizontally
  dominantBaseline="middle"   // centers vertically
>
  41%
</text>
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