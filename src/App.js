import './App.css';
import {useDrag, useDrop} from "react-dnd";
import {useState} from 'react';
import ChangeNumber from './changeNumber';


function Card() {
  const [{isDragging}, dragRef] = useDrag({
      type: "card",
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <div
    className="card"
    style={{
      backgroundColor: isDragging? "#fff": "gold"
    }}
    ref={dragRef}
    >
      Коробочка
    </div>
  )
}


function Box({card, moveCard}) {
  const [{isOver}, dropRef] = useDrop({
    accept: "card",
    drop: () => moveCard(),
    collect: (monitor) => ({
      isOver: !monitor.isOver(),
    }),
  });
  return (
    <div 
    className="box"
    ref={dropRef}
    style={{
      backgroundColor: isOver? "#bbb": "red"
    }}
    >
      {card ? <Card/> : ""}
    </div>
  )
}
function App() {
  const [index, setIndex] = useState(101);
  const [boxArray,setBoxArray]=useState([...Array(100).keys()]);
  

  function moveCard(i) {
    setIndex(i)
  }
  function addNumber (num) {
    console.log(num);
    let arr=[...Array(+num*+num+1).keys()];
    arr.shift()
    console.log(arr)
    setBoxArray(arr)
    }
  const elements = boxArray.map((item) => {
    return (
      <Box key={item} card={index === item} moveCard={()=>moveCard(item)}></Box>
    );
  });
  return (
    <>
    <h1>Коробки</h1>
    <ChangeNumber addNumber={addNumber}/>
    <Box card={index === boxArray.length+1} moveCard={()=>moveCard(boxArray.length+1)}></Box>
    <div className="app" >
      {elements}
    </div>
    </>
  );
}

export default App;
