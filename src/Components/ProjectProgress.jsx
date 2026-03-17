import React from 'react';

const ProjectProgress = () => {
  return (
    <div className="project-progress">
      <h3>Project Progress</h3>
      <div className="progress-bar">
        <div className="progress" style={{ width: '41%' }}></div>
      </div>
      <p>41% Project Ended</p>
    </div>
  );
}

export default ProjectProgress;