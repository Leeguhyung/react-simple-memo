import { hot } from "react-hot-loader/root";
import React ,{useState, useEffect} from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import styles from "./App.module.css"

//리액트는 변화가 일어날때 알아서 리프레쉬 해줌
// 컴포넌트 자체를 리프레쉬 하는건데 한번만해실행하고 싶은 경우가 잇음
// 아니먄 특정 상황에서만스실행사시키고 싶음
//그걸 활용하고자 하는게 useEffect(1,2)
//1.우리가 실행시키고 싶은 코드
//2.dependecies 라고 변화를 감지하는거 지켜보아야하는거


function Hello(){
  

  /*
  useEffect(() => {
    console.log("CREATED");
    return () => console.log("destroyed");
    //이게 바로 cleanUp function 임
  }, []);
  */
 //결론은 밑에랑 똑같음.!!!
 
 function byFn(){
  console.log("bye");

 }
  function hiFn() {
    console.log("created :)");
    return byFn;
  };
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}
//코드를 아예 삭제시키는걸  destroy 라고 한다
function App() {
  const [showing, setShowing] = useState(false);
  const onClick2 = () => {
    setShowing((c) => !c);
  }
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("ss");
  const onClick = () =>{
    setValue((current) => current + 1);
  };
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  
  //console.log("i run all time");
  const iRunOnlyOnce = () => {
    console.log('i run only once');
  };

  
  /*
  useEffect(() => { console.log("I run only Once!!") }, []);
  //dependency가 지켜볼께 없으니거 처음 한번만 실행댐ㅌ
  useEffect(() => {console.log("I run when 'keyword' change.")}, [keyword]);
  //ㅏ키워드의 변화.
  useEffect(() => {console.log("I run when 'counter' change.")}, [counter]);
  //카운터의 변화.
  useEffect(() => {console.log("I run when 'keyword and counter' changes.")}, [keyword, counter]);
  */
  /*useEffect(() => {  
    if(keyword !== "" && keyword.length > 5){
    console.log("SEARCH FOR", keyword)}
  } , [keyword]
  );*/

  //키워드가 변화할때 코드를 실행하고 싶다면 배열에 키워드를 적어줘
  //즉 배열안에 저걸 넣어서 저게 바뀔때마다 실행하라고 알려주는 거임
  return (<div>
    {showing ? <Hello/> : null}
    <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button>
    <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."></input>
    <h1 className={styles.title}>Hello111</h1>
    <h2>{counter}</h2>
    <button onClick = {onClick}>Click me</button>
    < Button text={"continue"} ></Button>
  </div>);
  
}

//useEffect (1, 2) ==> 
//1. 우리가 딱 한번만 실행하고 싶은 코드
//2. 

export default hot(App);


