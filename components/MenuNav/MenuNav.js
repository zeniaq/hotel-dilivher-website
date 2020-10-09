import styles from "../../styles/Home.module.css";

const MenuNav = () => {
    const classRegister = `${styles.button} ${styles.primary} ${styles.fit}`;
    const classSession = `${styles.btton} ${styles.fit}`;
    const classForm = `${styles.actions} ${styles.stacked}`;
    return (
        <nav id={styles.menu}>
            <ul className={styles.links}>
                <li>
                    <a href="index.html">Inicio</a>
                </li>
                <li>
                    <a href="landing.html">Habitaciones</a>
                </li>
                <li>
                    <a href="generic.html">Contacto</a>
                </li>
                <li>
                    <a href="elements.html">Elements</a>
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