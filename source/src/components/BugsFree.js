import React from "react";
import { Link } from "react-router-dom";
import todos from "../tododata"

export default function BugsBree() {
  const [checked, setChecked] = React.useState(false);
  

  const todo = todos.map(item => {
      return (
        <div className="checkbox-container" key={item.id}>
        <label className="todo-text" htmlFor="todo">
          <input
            className="todo"
            type="checkbox"
            defaultChecked={checked}
            onChange={() => setChecked(!checked)}
            value="Check me!"
          />{item.item}
        </label>
      </div>
      )
  })

  return (
    <div className="bugs-container">
      <Link to="/SuperVillainConference">
        <button>Back</button>
      </Link>
      <h1>TODO:</h1>
    {todo}
    </div>
  );
}
