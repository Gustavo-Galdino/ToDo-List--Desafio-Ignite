import { Trash } from 'phosphor-react'
import styles from './Task.module.css';


interface CreateTask {
    id: string;
    task: string;
    onDelete: (task: string) => void;
    handleCompletedChange: (id: string) => void;
    isChecked: boolean;
}

export function Task({ id, task, onDelete, handleCompletedChange, isChecked}: CreateTask) {
    function deleteTask() {
        onDelete(id);   
    }

    return (
        <div className={styles.container}>
            <ul>
                <li className={styles.task__list} >
                    <input type="checkbox" id={task} onChange={() => handleCompletedChange(id)} checked={isChecked}/>
                    <label htmlFor={task}>{task}</label>
                    <button className={styles.trash} onClick={deleteTask} >
                        <Trash size={24}/>
                    </button>
                </li>
            </ul>
        </div>
    )
}