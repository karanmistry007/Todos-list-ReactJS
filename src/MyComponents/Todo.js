import React from 'react'

const Todo = (props) => {
  var todoStyle = {
    marginTop: "20px",
    marginBottom: "20px",
  }
  return (
    <>
      <div style={todoStyle}>
        <h4>
          <span className='mx-2'>
            {props.todo.sno}. 
          </span>
          {props.todo.title}
        </h4>
        <p>
          {props.todo.desc}
        </p>
        <button type="button" className="btn btn-danger btn-sm" onClick={() => props.onDelete(props.todo)}>Delete</button>
        <hr />
      </div>
    </>
  )
}

export default Todo
