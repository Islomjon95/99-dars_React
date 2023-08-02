import React from 'react'

function Todo({value , dispatch}) {
  return (
    <>
        <p>Name: <span style={{color: value.completed ? "red" : "black" }}>{value.name}</span>
            <input type="checkbox" onChange={()=>{dispatch({type: "toggle" , payload: {id: value.id}})}} />
            <button onClick={()=>{dispatch({type: "del" , payload: {id: value.id}})}}>🗑️</button>
        </p>
    </>
  )
}

export default Todo