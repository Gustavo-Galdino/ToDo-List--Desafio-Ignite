import styles from './NewTask.module.css';
import plusIcon from '../assets/plus.svg';
import { ChangeEvent, useState } from 'react';
import { TaskInfos } from './TaskInfos';
import { Task } from './Task';
import { EmpyTask } from './EmpyTask';
import { v4 as uuidv4 } from 'uuid';

interface Task {
    id: string;
    task: string;
    completed: boolean;
}

export function NewTask() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState('');
    const [isCompleted, setIsCompleted] = useState<boolean>(false);
    const [completedCount, setCompletedCount] = useState(0);

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value);
    }

    function handleNewTask() {
        setTasks([
            ...tasks,
            {
                id: uuidv4(),
                task: newTask,
                completed: false
            }
        ]);

        setNewTask('');
    }

    function deleteTask(id: string) {
        setTasks(tasks.filter(task => task.id !== id));

        if (tasks.find(task => task.id === id)?.completed) {
            setCompletedCount(state => state - 1);
        }
    }

    const taskCreated = tasks.length;


    function handleCompletedChange(id: string) {
        setTasks(
            tasks.map(task => {
                if (task.id === id) { return { ...task, completed: !task.completed } }
                return task;
            })
        );
        setCompletedCount(state =>
            tasks.find(task => task.id === id)?.completed ? state - 1 : state + 1
        );
    }


    return (
        <>
            <div className={styles.container}>
                <input
                    type="text"
                    placeholder='Adicione uma nova tarefa'
                    value={newTask}
                    onChange={handleNewTaskChange}
                />
                <button onClick={handleNewTask}>
                    Criar
                    <img src={plusIcon} alt="Icone criar tarefa" />
                </button>
            </div>

            <section>
                <TaskInfos taskCreated={taskCreated} taskCompleted={taskCreated > 0 ? `${completedCount} de ${taskCreated}` : 0} />

                <div>
                    {
                        tasks.length > 0 ? tasks.map((task) =>
                            <Task
                                key={task.id}
                                id={task.id}
                                task={task.task}
                                onDelete={deleteTask}
                                handleCompletedChange={() => handleCompletedChange(task.id)}
                                isChecked={task.completed} />)
                            : <EmpyTask />
                    }
                </div>
            </section>

        </>
    )
}
