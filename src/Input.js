import React ,{useState} from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.css"

function Input(){
    const [content, setContent] = useState("");
    const [save, setSave] = useState([]);
  
    const onChange = (event) => {
      setContent(event.target.value);
      //console.log(event.target.value);
    }; 
    
    const onSubmit = (event) => {
      event.preventDefault();
      
      if(content === ""){
        return;
  
      }
  
      setSave((currentArray) => [content, ...currentArray]);
      //console.log(save);
      setContent("");
    };
  
    //console.log(save);
    
    return(
        <div>
    <form id="submitForm" onSubmit={onSubmit}>
        <input value={content} onChange={onChange} placeholder="할일을 입력하세요"></input>
        <button>Submit!</button>
    </form>
  
    {save.map((item) => <li>{item}</li> )}
    
    </div>
);
}


export default Input;