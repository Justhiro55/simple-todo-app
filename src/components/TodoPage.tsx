import React, { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { useTodo } from "../hooks/useTodo";
import { Todo } from "../types/Todo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { TodoTitle } from "./TodoTitle";

function TodoPage() {
  const navigate = useNavigate();
  const { todoList, toggleTodoListItemStatus, addTodoListItem, deleteTodoListItem } = useTodo();
  const inputEl = useRef<HTMLTextAreaElement>(null);

  const handleAddTodoListItem = () => {
    if (inputEl.current?.value === "") {
      return;
    }
    addTodoListItem(inputEl.current!.value);
    inputEl.current!.value = "";
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const incompletedList = todoList.filter((todo: Todo) => !todo.done);
  const completedList = todoList.filter((todo: Todo) => todo.done);

  return (
    <div style={{ textAlign: "center" }}> {/* 中央揃えのスタイルを適用 */}
      <button onClick={handleBackToHome} style={{ position: "absolute", top: 10, left: 10 }}>ホームに戻る</button> {/* ホームに戻るボタンを左上に配置 */}
      <TodoTitle title="TODO進捗管理" as="h1" />
      <TodoAdd buttonText="+ TODOを追加" inputEl={inputEl} handleAddTodoListItem={handleAddTodoListItem} />
      <TodoList todoList={incompletedList} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem} title="未完了TODOリスト" as="h2" />
      <TodoList todoList={completedList} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem} title="完了TODOリスト" as="h2" />
    </div>
  );
}

export default TodoPage;