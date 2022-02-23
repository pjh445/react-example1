import React from 'react';
import ReactDOM from 'react-dom';
import Mall from './Mall.js';

function Chain(props) {
  return <h2>나는 큰 맘을 먹고  {props.shop} <Mall />에서 구찌백을
  질렀습니다.</h2>;
}

ReactDOM.render(<Chain shop="스타필드"/>, document.getElementById('root'));