import {GetStaticProps, NextPage} from "next";
import {getTodos, useTodos} from "../src/hooks/useTodos";
import {TodoList} from "../src/components/TodoList/TodoList";
import {Todo} from "../src/model/todo.model";

interface HomepageProps {
  todos: Todo[];
}

const Homepage: NextPage<HomepageProps> = ({todos}) => {
  const { data } = useTodos(todos);

  return (
    <TodoList todos={data} />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const todos = await getTodos();

  return {
    props: {
      todos
    }
  }
}

export default Homepage;
