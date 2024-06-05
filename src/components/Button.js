import React from 'react';
const Button = ({ style, title, onClick }) => {
  return (
    <button style={style} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
