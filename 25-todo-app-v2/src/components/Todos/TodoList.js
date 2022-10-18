import Todo from "./Todo";
import styles from './TodoList.module.css';

const TodoList = ({ todos, deleteTodos, toggleTodo }) => {
    return (
        <div className={styles.todoListContainer}>
            {
                !todos.length && <h2>Todo list is empty</h2>
            }

            {
                todos.map((todo) => {
                    return <Todo
                        key={todo.id}
                        todo={todo}
                        deleteTodos={deleteTodos}
                        toggleTodo={toggleTodo}
                    />
                })
            }

        </div>
    )
}

export default TodoList;