import React from 'react';

function Box({ id, width, height, backgroundColor, removeBox }) {
  const handleRemove = () => removeBox(id);

  return (
    <div>
      <div 
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: backgroundColor,
          display: 'inline-block',
          margin: '10px'
        }} 
      />
      <button onClick={handleRemove}>X</button>
    </div>
  );
}

export default Box;