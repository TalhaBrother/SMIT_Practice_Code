import React from "react";
let TodoList=()=>{
    let data=[
        {task:"Reading",completed:false},
        {task:"Writing",completed:true},
        {task:"Listening",completed:false},
        {task:"Speaking",completed:true},
        
    ]
    return(
    <div>
        <h2>To Do List</h2>
        {data.map((todo)=>(
           <div> {todo.task}</div>
        )
          
        
                
            
        )}
    </div>
)}

export default TodoList