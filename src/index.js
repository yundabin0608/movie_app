import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// react application은 하나의 component만을 렌더링해야함
// 따라서 <APP/> 옆에 potato를 쓰는게 아니라 App안에 포테이토 넣을것임