import React from "react";
import TodoList from "./TodoList";

const Form = ({ setInputText, todos, setTodos, inputText}) => {

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault(); 
        setTodos([... todos, {
            text: inputText, completed: false, id: Math.random() * 100
        }])
        setInputText("");
    };

    return(
    <form>
      <input onChange={inputTextHandler} type="text" class="todo-input" />
      <button onClick ={submitTodoHandler} class="todo-button" type="submit">
        <i class="fas fa-plus-square"></i>
      </button>
      <div class="select">
        <select name="todos" class="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
}

export default Form;