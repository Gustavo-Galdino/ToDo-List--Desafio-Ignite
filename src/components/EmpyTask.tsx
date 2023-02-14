import styles from './EmpyTask.module.css';
import clipboard from '../assets/Clipboard.svg'

export function EmpyTask() {
    return (
        <div className={styles.tasks__container}>
            <img src={clipboard} alt="imagem ilustrativa de um icone de tarefas" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>

    )
}