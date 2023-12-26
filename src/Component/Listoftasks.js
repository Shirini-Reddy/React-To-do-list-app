import React from 'react';
import Tasklist from './Taskslis';

 const Listoftasks=(props)=>{

    const tasklist=props.tasks.map((items)=>{
        return(
      console.log(items))
    })

    return(
        {tasklist}
    )
   
 }
 export default Listoftasks