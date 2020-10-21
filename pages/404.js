import Head from "next/head";
import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.css";
import styles404 from "../styles/404.module.css";
import Footer from "../components/Footer";
import AnchorList from "../components/AnchorList/AnchorList";

export default function Home() {
    const classStarted = `${styles.button} ${styles.next}`;
    return (
        <>
            <Head>
                <title>Hotel Dilivher :: Pagina no encontrada</title>
                <meta name="description" content="Hotel Dilivher WebSite" />
            </Head>
            <div className={styles.wrapper}>
                <Navigation />
                <section>
                    <div className={styles404.mainContainer}>
                        <h3>
                            LO SENTIMOS!
                            <br />
                            NO ENCONTRAMOS LA PAGINA QUE BUSCAS
                        </h3>
                        <img
                            className={styles404.icon}
                            src="icons/exclamation.svg"
                            alt="Exclamation Icon"
                        />
                        <ul className={styles.actions}>
                            <AnchorList
                                linkRef="/"
                                styleProp={classStarted}
                                titleText="Ir al inicio"
                            />
                        </ul>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
}
