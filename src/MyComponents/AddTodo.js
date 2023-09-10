import React, { useState } from "react";

const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const {hideUI}= props;  
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be empty")
        }
        else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");   
            hideUI();                   
        }   
    }
    return (
        <>
            <form onSubmit={submit} className="my-5">
                <h3 className="text-center my-2">
                    Add Todo
                </h3>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Add Title
                    </label>
                    <input type="text" value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                        className="form-control" id="title" placeholder="" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">
                        Add Description
                    </label>
                    <textarea className="form-control" value={desc}
                        onChange={(e) => { setDesc(e.target.value) }}
                        id="desc" rows="3"></textarea>
                </div>
                <button type="Submitf" className="btn btn-success btn-sm">Success</button>
            </form>
        </>
    );
};

export default AddTodo;
