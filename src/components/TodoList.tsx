import { TodoTitle } from "./TodoTitle";
import { TodoItem } from "./TodoItem";
import { Todo } from "../types/Todo";

// TodoItemをループして表示
// todoListが0件の場合、タイトルとTODOリストを表示しない
export const TodoList = ({
  todoList,
  toggleTodoListItemStatus,
  deleteTodoListItem,
  title,
  as,
}: {
  todoList: Todo[];
  toggleTodoListItemStatus: (id: string, status: boolean) => void;
  deleteTodoListItem: (id: string) => void;
  title: string;
  as: string;
}) => {
  return (
    <>
      {todoList.length !== 0 && (
        <>
          <TodoTitle title={title} as={as} />
          <ul style={{ listStyleType: "none", padding: 0 }}> {/* スタイルを適用 */}
            {todoList.map((todo) => (
              <li key={todo.id}>
                <TodoItem todo={todo} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem} />
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};