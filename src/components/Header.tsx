import rocketIcon from '../assets/rocket.svg';
import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.container}>
            <img src={rocketIcon} alt="Icone foguete Rocket ToDO" />
            <span>to</span>
            <span>do</span>
        </header>
    )
}