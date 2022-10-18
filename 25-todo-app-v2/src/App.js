import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    }

    setTodos([...todos, newTodo]);
  }

  const deleteTodos = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => {
      return todo.id == id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo }
    }))
  }

  const resetTodos = () => {
    setTodos([]);
  }

  const deleteIsCompletedTodos = () => {
    setTodos(todos.filter(todo => !todo.isCompleted));
  }

  const isCompletedCount = todos.filter(todo => todo.isCompleted).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      {
        !!todos.length &&
        <TodosActions
          resetTodos={resetTodos}
          deleteIsCompletedTodos={deleteIsCompletedTodos}
          isCompletedExist={!!isCompletedCount}
        />
      }
      <TodoList todos={todos} deleteTodos={deleteTodos} toggleTodo={toggleTodo} />
      {
        isCompletedCount > 0 &&
        <h2>{`You have completed ${isCompletedCount} ${isCompletedCount > 1 ? 'todos' : 'todo'}`}</h2>
      }
    </div>
  );
}

export default App;
