import React from "react";

const TodoAdd = ({
  addCard,
  inpName,
  setInpName,
  inpDes,
  setInpDes,
  btnText,
}) => {
  return (
    <form className="todo-add" onSubmit={(e) => addCard(e)}>
      <label htmlFor="todo-name">Todo Name</label>

      <input
        type="text"
        name="text"
        id="todo-name"
        placeholder="Todo Name"
        required
        value={inpName}
        onChange={(e) => setInpName(e.target.value)}
      />

      <label htmlFor="todo-description">Todo Description</label>

      <input
        type="text"
        name="text"
        id="todo-description"
        placeholder="Todo Description"
        required
        value={inpDes}
        onChange={(e) => setInpDes(e.target.value)}
      />

      <button className="todo-add-btn">{btnText}</button>
    </form>
  );
}
export default TodoAdd;