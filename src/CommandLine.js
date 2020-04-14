import React, { useState } from 'react';
import './CommandLine.css';

function CommandLine(props) {
  const [inputValue, updateInput] = useState('');

  const onChange = (e) => {
    updateInput(e.target.value.toLowerCase());
  }

  const enterCheck = (e) => {
    if(e.key === 'Enter') {
      let url;
      switch(inputValue) {
        case 'kisa': url = 'https://www.youtube.com/watch?v=0vt47I3k088'; break;
        case 'totw': url = 'https://www.youtube.com/watch?v=5V-auvEuLO4'; break;
        case 'wcbh': url = 'https://youtu.be/360qEjSpGdI?t=4'; break;
        default: return;
      }
      if(url) {
        window.open(url);
      }
    }
  }

  return (
    <div className="command-line" style={{display: props.hidden ? 'none' : 'flex'}}>
      <p className="command-line__text">></p>
      <input className="command-line__input" onChange={onChange} onKeyPress={enterCheck} autoFocus spellCheck="false" />
    </div>
  )
}

export default CommandLine;