import React from "react";

const Item = ({ content, id, deleteTodo, change, isDone}) => {
  const handleDelete = () => {
    deleteTodo(id);
  };

  const handleChange = () => {
    change(id)
  }

  return (
    <li>
      <input type="checkbox" onChange={handleChange} />
      <span style={
        { textDecoration: isDone ? "line-through" : "none" }
      }>
        {content}
      </span>
      <button onClick={handleDelete}>削除</button>
    </li>
  );
};

export default Item;
