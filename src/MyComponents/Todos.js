import React from 'react'
import Todo from './Todo'
import AddTodo from './AddTodo'

const Todos = (props) => {
    const showAdd=()=>{
        var addTodo=document.getElementById("addtodo");
        var showbtn=document.getElementById("showbtn");
        var hidebtn=document.getElementById("hidebtn");
        addTodo.classList.remove("d-none");
        hidebtn.classList.remove("d-none");
        showbtn.classList.add("d-none");
    }
    const hideAdd=()=>{
        var addTodo=document.getElementById("addtodo");
        var showbtn=document.getElementById("showbtn");
        var hidebtn=document.getElementById("hidebtn");
        addTodo.classList.add("d-none");
        hidebtn.classList.add("d-none");
        showbtn.classList.remove("d-none");
    }
    var todosStyle = {
        minHeight: "calc(100vh - 148px)",
    }
    return (
        <>
            <div className='container' style={todosStyle}>
                <h1 className='text-center my-5 '>
                    Todos List
                </h1>
                <button type="button" id="showbtn" onClick={showAdd} className="btn btn-primary btn-sm">Add Todo</button>
                <button type="button" id="hidebtn" onClick={hideAdd} className="btn btn-warning  btn-sm d-none">Hide Add Todo</button>

                <div id="addtodo" className='d-none'>
                <AddTodo addTodo={props.addTodo} hideUI={hideAdd}/>                
                </div>

                {props.todos.length === 0 ?
                    <h3 className='text-center text-danger '>Please Add New Todos</h3>
                    :
                    <div className='row row-cols-2 '>
                        {props.todos.map((todo) => {
                            return (<Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />)
                        })}
                    </div>
                }



            </div>
        </>
    )
}

export default Todos
