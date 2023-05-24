import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el Curso Intro a React.js", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "Otro Curso", completed: false },
  { text: "Otro Curso 2", completed: true },
  { text: "Otro Curso 3", completed: true }
];
function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  console.log("Los usuarios buscan to do's de" + searchValue);
  return (
    <React.Fragment>
      <TodoCounter 
      completed={completedTodos} 
      total={totalTodos} />
      <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}/>
      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { App };
