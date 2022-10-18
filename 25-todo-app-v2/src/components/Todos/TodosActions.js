import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from "../UI/Button";
import styles from './TodosActions.module.css';

const TodosActions = ({ resetTodos, deleteIsCompletedTodos, isCompletedExist }) => {
    return (
        <div className={styles.todosActionsContainer}>
            <Button title="Reset Todos" onClick={resetTodos}>
                <RiRefreshLine />

            </Button>
            <Button
                title="Clear Completed Todos"
                onClick={deleteIsCompletedTodos}
                disabled={!isCompletedExist}
            >
                <RiDeleteBin2Line />
            </Button>
        </div>
    )
}

export default TodosActions;