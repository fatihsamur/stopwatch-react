import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick} className="btn btn-primary m-2">
        {props.name}
      </button>
    </div>
  );
};

export default Button;
