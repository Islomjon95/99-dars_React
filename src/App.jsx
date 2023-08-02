import { useState , useReducer } from 'react'
import './App.css'
import Todo from './components/Todo'
import {v4 as uuidv4} from "uuid"

function App() {
  const reducer=(state , action)=>{
      switch (action.type) {
        case "add":
          return [...state, {name:action.payload.name, id: uuidv4(), completed: false }]
          
          break;

          case "toggle": 
            return state.map(todo=>{
              if(todo.id===action.payload.id){
                return {...todo, completed: !todo.completed}
              }
              return todo
            })
            break;

            case "del": 
              return state.filter(value=>value.id!==action.payload.id)
              break;
      
        default: return state;
          break;
      }
  }

  const [name , setName]= useState("")
  const [todos , dispatch] = useReducer(reducer, [])

  const handleSubmit=()=>{
    dispatch({type: "add" , payload:{name:name}})
    setName("")
  }


  return (
    <>

      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
      <button onClick={handleSubmit} >Submit</button>

      {todos.map((value, index) => {
        return <Todo value={value} key={index} dispatch={dispatch}></Todo>
      })}
   
      
    </>
  )
}

export default App
