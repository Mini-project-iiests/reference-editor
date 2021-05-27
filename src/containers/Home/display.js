import React from 'react';

export const Display = (props) => {
  return (
    <div className="flex textWrapper">
      <div className="fileName">
        <span>{props.fileName}</span>
      </div>
      <div className="textContainer">
        <pre id="textContent">{props.textContent}</pre>
      </div>
    </div>
  )
}
