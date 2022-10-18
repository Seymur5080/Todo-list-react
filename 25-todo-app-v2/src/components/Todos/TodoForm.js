import { useState } from "react";
import Button from "../UI/Button";
import styles from './TodoForm.module.css';

const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState('');

    const onSubmitForm = (e) => {
        e.preventDefault();
        addTodo(text);
        setText('');
    }

    return (
        <div className={styles.todoFormContainer}>
            <form action="#" method="post" onSubmit={onSubmitForm}>
                <input
                    type="text"
                    placeholder="Enter new todo"
                    value={text}
                    onChange={(e) => { setText(e.target.value) }}
                />
                <Button type="submit" title='Submit'>Submit</Button>
            </form>
        </div>
    )
}

export default TodoForm;