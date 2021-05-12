import { useMemo, useState } from "react";
import FadeIn from "react-fade-in";
import { Spinner } from "../spinner";
import Todo from "./todo";

function Todos() {
  const [todos, setTodos] = useState([]);

  useMemo(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  if (todos.length === 0) {
    return <Spinner animation="border" />;
  } else {
    return (
      <FadeIn>
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </FadeIn>
    );
  }
}

export default Todos;
