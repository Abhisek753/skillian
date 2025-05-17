import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../redux/crud/axtion";

const Todo = () => {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todo?.todos);
  const [editIndex,setEditIndex]=useState("")
  const [editText,setEditText]=useState("")

  const dispatch = useDispatch();



  const handleAdd = () => {
    if (input.trim() !== "") {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  const handleDelete = (index) => { 
 
    dispatch(deleteTodo(index));
  }

  const handleEdit = (index, text) => {
    console.log(index,text,"000000000")

    setEditIndex(index);
    setEditText(text)
  }
  const handleSave=()=>{
      console.log("edit text1")

     if(editText.trim()!==""){
      console.log("edit text2")
      dispatch(editTodo(editIndex,editText))
      setEditIndex(null);
      setEditText("")
     }
  }
  console.log(todos)
  return (
    <div>
      <div>
        <h2>Todo app</h2>
      </div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Please Enter Text"
        />
        <button onClick={()=>handleAdd()}>Add Todo</button>
      </div>
      <div>
        {/* {todos?.map((todo, index) => (
         <div style={{ display: "flex", gap: "10px",marginLeft:"50%" }} key={index}>
           <div>{todo}</div>
          <button onClick={()=>handleDelete(index)}>Delete</button>
           <button onClick={()=>handleEdit(index,todo)}>Edit</button>
         </div>
        ))} */}

      {
        todos?.map((todo,index)=>(
          <div key={index}>
             {editIndex===index?(
              <>
              <input 
               type="text"
               value={editText}
               onChange={(e)=>setEditText(e.target.value)}
              />
             <button onClick={()=>handleDelete(index)}>Delete</button>
               <button onClick={handleSave}>Save</button>
              </>
             ):(
              <>
              <span>{todo}</span>
                  <button onClick={()=>handleDelete(index)}>Delete</button>
               <button onClick={()=>handleEdit(index,todo)}>Edit</button>
              </>
             )}
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default Todo;
