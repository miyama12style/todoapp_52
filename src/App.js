import React, { useState } from "react";
import shortid from 'shortid';

import Form from "./components/Form.js";
import List from "./components/List.js";



const App = () => {
  const [todos, setTodos] = useState([
    {
      content: '課題する',
      id: 'hfdhfjsdfdf',
      isDone: false
    },
    {
      content: '洗濯する',
      id: 'jsfhsdfjsd',
      isDone: false
    },
    {
      content: '電話する',
      id: 'sfjdfdsnf',
      isDone: false
    },
  ])

  const addTodo = content => {
    setTodos([
      ...todos,
      {
        content: content,
        id: shortid.generate(),
        isDone: false
      }
    ])
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const change = id => {
    setTodos(todos.map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          isDone: !todo.isDone
        }
      }else {
        return todo
      }
    }))
  }

  return (
    <>
      <h1>Todo App</h1>
      <Form addTodo={addTodo} />
      <List 
        todos={todos} 
        deleteTodo={deleteTodo}
        change={change}
      />
    </>
  );
};

export default App;
