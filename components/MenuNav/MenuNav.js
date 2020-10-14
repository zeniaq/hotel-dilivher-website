import styles from "../../styles/Home.module.css";

const MenuNav = () => {
    const classRegister = `${styles.button} ${styles.primary} ${styles.fit}`;
    const classSession = `${styles.button} ${styles.fit}`;
    const classForm = `${styles.actions} ${styles.stacked}`;
    return (
        <nav className={styles.menu}>
            <ul className={styles.links}>
                <li>
                    <a className={styles.menuA} href="/">
                        Inicio
                    </a>
                </li>
                <li>
                    <a href="/landing">Habitaciones</a>
                </li>
                <li>
                    <a href="/generic">Contacto</a>
                </li>
            </ul>
            <ul className={classForm}>
                <li>
                    <a href="#f" className={classRegister}>
                        Registrarse
                    </a>
                </li>
                <li>
                    <a href="#d" className={classSession}>
                        Iniciar Sesión
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default MenuNav;
