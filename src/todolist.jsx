import { hot } from "react-hot-loader/root";
import React ,{useState, useEffect} from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import styles from "./App.module.css"

function App(){
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (e) => {
    setToDo(e.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault(); //기본 동작 막는거
    if(toDo === ""){
      return;
    }
    //setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]);
    //함수를 불러올떈 ...붙ㅇㅕ서 불러오기
    setToDo("");
    //console.log(toDo);
  };
  console.log(toDos);

  //form은 submit 이벤트를 가지고 있다.
  return <div>
    <h1>My To Dos ({toDos.length})</h1>
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."></input>
      <button>Add To Do</button>
    </form>
    <hr></hr>
    {toDos.map((item, index)=> <li key={index}>{item}</li>)}

  </div>;

}
//map() ==> 모든 아이쳄에 대해 실행
//투두스 배열에 6개가 들어가있으면 맵이 6번 실행댐
//map((item) => ":)")
//포인트는 맵의 함수의 첫번째 아규먼트가 진행되고 있는 순서에 맞는 아이템이라는거야
//즉 지네들을 반환시킬 수 있음
//ex) => map((item) => item.toUpperCase());
//이러면 지네들이 갖고있는거 대문자로 배열 변환해서 뱉어냄
//키값 오류 체크
export default hot(App);


