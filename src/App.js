import React from 'react';
import Potato_h from './Potato_hate';
import PropTypes from 'prop-types';

class App extends React.Component{
  
  state={ //바꿀 데이터를 state안에 넣으셈
    count:0
  };

  //얘네는 자바스크립트 코드 (this.state.count도 가능한데 current를 이용하는거 추천)
  add = () => {
    this.setState(current =>({count: current.count+1}));
  };
  minus = () => {
    this.setState(current =>({count: current.count-1}));
  };
  componentDidMount(){ 
    console.log("component rendered");
  }
  componentDidUpdate(){ // 버튼을 누르는 등의 업데이트 될경우
    console.log("I just updated")
  }
  componentWillUnmount(){ // 컴포넌트가 죽을때/떠날때
    console.log("Goodbye")
  }

  //버튼 클릭할 경우에만 위의 add, minus 함수 호출되도록 onclick 사용
  // 매번 state 상태를 변경할경우, react가 render function을 호출해서 바꿔주길 바람, state는 직접변경하면 안대
  // 즉 setState를 사용해서 새로운 state를 가지고 render을 다시 실행하게 해야함
  render(){
    console.log("I'm rendering")
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
      );
  }
}
// class 컴포넌트 (state를 가짐 , 리액트컴포넌트를 extends 해오는겅)
// class react component는 fuction이 아니라 return을 가지지 않음, render method있음
// state는 object이고 컴포넌트의 data를 넣을 공간이 있으며 이 데이터는 변할 수 있음
export default App;
