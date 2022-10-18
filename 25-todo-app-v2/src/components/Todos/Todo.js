import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.css';

const Todo = ({ todo, deleteTodos, toggleTodo }) => {
    return (
        <div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`}>
            <RiTodoFill className={styles.todoIcon} />
            <div className={styles.todoText}>{todo.text}</div>
            <RiDeleteBin2Line className={styles.deleteIcon} onClick={() => { deleteTodos(todo.id) }} />
            <FaCheck className={styles.checkIcon} onClick={() => { toggleTodo(todo.id) }} />
        </div>
    )
}

export default Todo;