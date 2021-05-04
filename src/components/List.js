import React from 'react';
import Item from './Item.js'

const List = ({ todos, deleteTodo, change }) => {
  return(
    <ul>
      {
        todos.map((todo) => {
          return (
            <Item 
              content={todo.content} 
              id={todo.id}
              key={todo.id}
              deleteTodo={deleteTodo}
              change={change}
              isDone={todo.isDone}
            />
          )
        })
      }
    </ul>
  );
};

export default List;