import React,{useState} from 'react';
import './TaskList.css'

const Tasklist=()=>{
   const[inputList,setInputList]=useState("")
   const[taskList,setTaskList]=useState([])
   const changetask=(event)=>{
      
       setInputList(event.target.value);
       }
    const listofItems=(event)=>{
        setTaskList((olditem)=>{
            return[...olditem,inputList];
        })
    }
    return(
        <>
        <header/>
        <div>
            <input type='text' placeholder='Enter the task' onChange={changetask}/> 
            &nbsp;
            <button onClick={listofItems}> ADD</button>
           
       
        <hr/>
        <footer/>
         <ol>

{taskList.map((itemval)=>{
    return <li key={itemval.toString()}>
     <input type='checkbox'/>    
    <label>{itemval}</label>
      </li>
})}  
</ol>
       
        </div>
      
        </>
       
    )
}


export default Tasklist