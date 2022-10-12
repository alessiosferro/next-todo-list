import {useQuery} from "react-query";
import {Todo} from "../model/todo.model";

export const getTodos = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/todos?_limit=20`);
  return response.json();
}

export const useTodos = (initialData: Todo[]) => {
  return useQuery(['todos'], getTodos, {
    initialData,
    staleTime: 60000
  });
}
