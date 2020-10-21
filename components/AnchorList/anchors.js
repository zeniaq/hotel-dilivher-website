import styles from "../../styles/Home.module.css";

const classRegister = `${styles.button} ${styles.primary} ${styles.fit}`;
const classSession = `${styles.button} ${styles.fit}`;
export const dataLinks = [
    {
        titleText: "Inicio",
        linkRef: "/",
    },
    {
        titleText: "Habitaciones",
        linkRef: "/landing",
    },
    {
        titleText: "Contacto",
        linkRef: "/generic",
    },
];
export const dataForm = [
    {
        titleText: "Registrarse",
        linkRef: "#f",
        styleProp: classRegister,
    },
    {
        titleText: "Iniciar Sesión",
        linkRef: "g",
        styleProp: classSession,
    },
];
export const dataMaster = [
    {
        titleText: "© 2020 Hotel Dilivher",
    },
    {
        titleText2: "Powered by: ",
        titleText: "Zeniaq Technologies",
        linkRef: "https://zeniaq.com",
    },
    {
        titleText2: "Design: ",
        titleText: "Next JS",
        linkRef: "https://nextjs.org/",
    },
];
