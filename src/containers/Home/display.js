import React from 'react';

export const Display = (props) => {
  const refStr = (ref)=>{
    return `"${ref.title}", ${ref.author}, ${ref.source}, ${ref.date}`;
  }

  const refList = ()=>{
    var refText = "";
    for (var i = 0; i < props.refs.length; i++) {
      refText+= `${i+1}. ${refStr(props.refs[i])}\n`;
    }

    return refText;
  }

  return (
    <div className="flex textWrapper">
      <div className="fileName">
        <span>{props.fileName}</span>
      </div>
      <div className="textContainer">
        <pre id="fileContent">{props.textContent+"\n\nREFERENCES\n\n"+refList()}</pre>
      </div>
    </div>
  )
}
