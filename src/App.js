import React from 'react';
import Potato_h from './Potato_hate';
import PropTypes from 'prop-types';

// 여기엔 from ~~ 엔 파일이름을 정확히 써주고 import 옆에 쓴애를 < /> 안에 넣어주는거

// 파일로 만들지 않고 그냥 App안에서 함수를 만들어서 사용할 수도 있음

function Food({name, picture, rating}){  // (props)라고 쓴 후 밑에서 props.fav로 kimchi를 쓸 수 있지만 그냥 {fav}로 props object의 내부의 인자의 속성을 가져와서 쓸 수 있음
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture}/>
  </div>; 
}
// => 컴포넌트에 정보를 보낼 수 있으며 재사용가능한 컴포넌트를 만들 수 있음 (반복가능)
// 따라서 app에서 food component로 정보를 보내고 이 정보를 food 컴포넌트에서 어떻게 사용? props


// 함수를 만들어서 동적 데이터 추가하기 => object의 list 가져오는 방식 , JS의 map 사용할것
const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
      rating:5
  },
  {
    id:2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
      rating:4.9
  },
  {
    id:3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
      rating:4.8
  },
  {
    id:4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
      rating: 4.7
  },
  {
    id:5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
      rating:4.6
  }
];

Food.propTypes={
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired 
};
// 타입체크 혹은 require , type 체크 가능 이름은 무조건 .propTypes로 할것

//{~~} 이러케 쓰면 javascript
// FoodILike.map 안의 dish는 object이고 FoodILike 배열에 있는 인자들 각각을 가리키는것
// 부모로 부터 받은 props가 우리가 예상한 속성인지 확인해야함 npm i prop-types 설치 (패키지.json에서 확인O)
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
