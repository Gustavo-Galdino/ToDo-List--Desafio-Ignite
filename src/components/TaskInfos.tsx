import styles from './TaskInfos.module.css';

interface CountTasks {
    taskCreated: number;
    taskCompleted: number | string;
}

export function TaskInfos({ taskCreated, taskCompleted }: CountTasks) {
    return (
        <div className={styles.container}>
            <div className={styles.infos}>
                <p className={styles.taskCreated}>Tarefas criadas<span>{taskCreated}</span></p>
                <p className={styles.taskCompleted}>Concluidas<span>{taskCompleted}</span></p>
            </div>
        </div >
    )
}