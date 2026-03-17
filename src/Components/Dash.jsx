import React from 'react';
// import './Dash.css';
import TaskList from './TaskList';
import TeamCollaboration from './TeamCollaboration';
import ProjectProgress from './ProjectProgress';
import TimeTracker from './TimeTracker';

const Dash = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="user-info">
          <span className="user-name">Totok Michael</span>
          <img src="https://i.pravatar.cc/40" alt="user-avatar" className="user-avatar" />
        </div>
      </div>
      
      <div className="dashboard-body">
        <div className="stats">
          <div className="stat-item">
            <h3>Total Projects</h3>
            <p>24</p>
          </div>
          <div className="stat-item">
            <h3>Ended Projects</h3>
            <p>10</p>
          </div>
          <div className="stat-item">
            <h3>Running Projects</h3>
            <p>12</p>
          </div>
          <div className="stat-item">
            <h3>Pending Project</h3>
            <p>2</p>
          </div>
        </div>

        <div className="project-analytics">
          <TaskList />
          <TeamCollaboration />
          <ProjectProgress />
          <TimeTracker />
        </div>
      </div>
    </div>
  );
}

export default Dash;