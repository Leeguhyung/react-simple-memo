import { hot } from "react-hot-loader/root";
import React ,{useState, useEffect} from "react";
import ReactDOM from "react-dom";
import Input from "./Input";
import styles from "./App.module.css"

function App(){
  console.log(Input);
  
  return (
  <div>
    <h1>Today's Checking!</h1>
    <hr/>
    
   
    <Input></Input>
    </div>);


}
export default hot(App);


