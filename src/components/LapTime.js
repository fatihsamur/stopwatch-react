import React from 'react';

const LapTime = (props) => {
  const { lap, index } = props;
  return (
    <div>
      <li className="list-group-item">
        <div className="center">
          <h1 className="text-primary">
            lap
            {index + 1} __ {lap}
          </h1>
        </div>
      </li>
    </div>
  );
};

export default LapTime;
