import Button from "../components/Button";

import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <h1>Hotel Dilivher</h1>
            <Button className={styles.button}>Enviar Mensaje</Button>
        </div>
    );
}
