import { useState } from "react";

import "./App.css";

//variabel för att generera id när objekt läggs till

let nextId = 0;

function MyForm() {
  // Input value där vi lägger till text
  const [inputName, setInputName] = useState("");

  // Arrayen där vi vill lägga till vår task
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Clean bathroom",
      checked: false,
    },
  ]);

  // Delete from todolist

  const deleteById = (id: number) => {
    setTasks((oldValue) => {
      return oldValue.filter((task) => task.id !== id);
    });
  };

  // funktion för att ändra check och unchecked

  const handleCheckboxChange = (id: number) => {
    setTasks((oldTasks) =>
      oldTasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  // returnerar listan och interaction i DOM:en
  return (
    <article>
      <h1 className="myTodo">Min TodoLista</h1>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id} className={task.checked ? "check" : ""}>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(task.id)}
                />
              </label>
              <span>{task.name}</span>
              <span>{task.id}</span>

              <button onClick={() => deleteById(task.id)}> Delete task</button>
            </li>
          );
        })}
      </ul>

      <form className="myForm">
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          placeholder="skriv text"
        />
      </form>
      <button
        onClick={() => {
          setTasks([
            ...tasks,
            {
              id: nextId++,
              name: inputName,
              checked: false,
            },
          ]);
        }}
      >
        {" "}
        Add to list
      </button>
    </article>
  );
}

export default MyForm;
