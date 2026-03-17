import "../Styles/Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">

      {/* Header */}
      <div className="top-bar">
        <div>
          <h1 className="title">Dashboard</h1>
          <p className="subtitle">
            Plan, prioritize, and accomplish your tasks with ease
          </p>
        </div>

        <div className="actions">
          <button className="btn-green">+ Add Project</button>
          <button className="btn-light">Import Data</button>
        </div>
      </div>

      {/* TOP CARDS */}
      <div className="top-cards">
        <div className="card green">
          <div className="card-head">
            <h4>Total Projects</h4>
            <div className="arrow-circle">↗</div>
          </div>
          <h1>24</h1>
          <p className="sub-text">Increased from last month</p>
        </div>

        <div className="card">
          <div className="card-head">
            <h4>Ended Projects</h4>
            <div className="arrow-circle">↗</div>
          </div>
          <h1>10</h1>
          <p className="sub-text">Increased from last month</p>
        </div>

        <div className="card">
          <div className="card-head">
            <h4>Running Projects</h4>
            <div className="arrow-circle">↗</div>
          </div>
          <h1>12</h1>
          <p className="sub-text">Increased from last month</p>
        </div>

        <div className="card">
          <div className="card-head">
            <h4>Pending Projects</h4>
            <div className="arrow-circle">↗</div>
          </div>
          <h1>2</h1>
          <p className="sub-text">On Discuss</p>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="main-grid">

        {/* ANALYTICS */}
        <div className="box-analytics">
          <h3>Project Analytics</h3>

          <div className="chart">
            <div className="bar active" style={{height:"60%"}}></div>
            <div className="bar" style={{height:"80%"}}></div>
            <div className="bar active" style={{height:"50%"}}></div>
            <div className="bar" style={{height:"90%"}}></div>
            <div className="bar active" style={{height:"70%"}}></div>
            <div className="bar" style={{height:"40%"}}></div>
            <div className="bar active" style={{height:"75%"}}></div>
          </div>

          <div className="days">
            <span>Sun</span>
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
          </div>
        </div>

        {/* REMINDER */}
        <div className="box-reminders">
          <h3>Reminders</h3>
          <p className="meeting">Meeting with ARC Company</p>
          <p className="time">02:00 PM - 04:00 PM</p>

          <button className="btn-video">🎥 Start Meeting</button>
        </div>

        {/* PROJECT */}
        <div className="boxproject-tall">
          <div className="project-header">
            <h3>Project</h3>
            <button className="btn-small">+ New</button>
          </div>

          {["Develop API Endpoints","Onboarding Flow","Build Dashboard","Optimize Page Load","Cross-Browser Testing"].map((item,i)=>(
            <div className="project-item" key={i}>
              <div className="circle-icon">⚙️</div>
              <div className="project-text">
                <p>{item}</p>
                <span>Duedate: Nov {26+i}, 2024</span>
              </div>
            </div>
          ))}
        </div>

        {/* TEAM */}
        <div className="boxteam-box">
          <div className="team-header">
            <h3>Team Collaboration</h3>
            <button className="btn-add">+ Add Member</button>
          </div>

          {[
            ["Alexandra Deff","Github Project Repository","completed"],
            ["Edwin Adenike","User Authentication","progress"],
            ["Isaac Oluwatemiloun","Search & Filter","pending"],
            ["David Oshodi","Responsive Layout","progress"]
          ].map((m,i)=>(
            <div className="team-member" key={i}>
              <img src={`https://i.pravatar.cc/40?img=${i+1}`} alt="" />
              <div>
                <p>{m[0]}</p>
                <span>{m[1]}</span>
              </div>
              <span className={`status ${m[2]}`}>
                {m[2]}
              </span>
            </div>
          ))}
        </div>

        {/* PROGRESS */}
        <div className="boxprogress-box">
          <h3>Project Progress</h3>

          <div className="circle">
            <span>41%</span>
            <p>Project Ended</p>
          </div>

          <div className="legend">
            <div><span className="dot green"></span>Completed</div>
            <div><span className="dot dark"></span>In Progress</div>
            <div><span className="dot light"></span>Pending</div>
          </div>
        </div>

        {/* TRACKER */}
        <div className="boxtracker-box">
          <h3>Time Tracker</h3>

          <h1>01:24:08</h1>

          <div className="controls">
            <button className="pause">⏸</button>
            <button className="stop">⏹</button>
          </div>
        </div>

      </div>
    </div>
  );
}