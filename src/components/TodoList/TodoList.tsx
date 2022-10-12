import {FC} from "react";
import {TodoListProps} from "./TodoList.model";

export const TodoList: FC<TodoListProps> = props => {
  const { todos } = props;

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <input type="checkbox" checked={todo.completed} />
          {todo.title}
        </li>
      ))}
    </ul>
  )
}
