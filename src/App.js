import React from 'react';
import Potato_h from './Potato_hate';
import PropTypes from 'prop-types';

function App() {
  return  (
    <div>
      <Potato_h /> 
       {foodILike.map(dish=>(
         <Food 
           key={dish.id} 
           name={dish.name} 
           picture={dish.image}
           rating={dish.rating}
          />
       ))} 
    </div>
  )
}// map은 각각의 item별로 fuction 호출함, key로 리액트 내부에서 구분을 위해 사용
export default App;
