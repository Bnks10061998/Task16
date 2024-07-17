import React from 'react';

const FilterTodo = ({ filterCard, handleFilter }) => {
  return (
    <div className="filter-box">
      <span>My Todos</span>

      <div>
        <label htmlFor="todo-filter">Status Filter: </label>

        <select
          name="todo-filter"
          id="todo-filter"
          value={filterCard}
          className={`${filterCard}`}
          onChange={(e) => handleFilter(e)}
        >
          <option value="All">All</option>

          <option value="notCompleted">Not Completed</option>

          <option value="completed">Completed</option>
        </select>
      </div>
    </div>
  );
}


export default FilterTodo;