import React, { useState } from 'react'
import "./style.css";

function Todo() {
    const [inputData, setInputData] = useState("");
  return (
    <>
      <div className="main-div">
        <div className="child-div">
            <figure>
                <img src="./images/todo.svg" alt="todo list" />
                <figcaption>Add your list here</figcaption>
            </figure>
            <div className="addItems">
                <input 
                type="text" 
                placeholder= "✍️ Add Items"
                className='form-control'
                value={inputData}
                onChange={(event) => setInputData(event.target.value)}/>
                <i className="fa  fa-solid fa-plus add-btn"></i>
            </div>
            <div className="showItems">
                <div className="eachItem">
                    <h3>apple</h3>
                    <div className="todo-btn">
                        <i className="far fa-edit add-btn"></i>
                        <i className="far fa-solid fa-trash-alt add-btn"></i>
                    </div>
                </div>
            </div>
            <div className="showItems">
                <button className='btn effect04' data-sm-link-text="Remove All">
                    <span>Check List </span>
                </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Todo
