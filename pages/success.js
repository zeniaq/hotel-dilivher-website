import Head from "next/head";
import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.css";
import stylesSuccess from "../styles/success.module.css";
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
                    <div className={stylesSuccess.mainContainer}>
                        <div className={stylesSuccess.dataMessage}>
                            <h2 className={stylesSuccess.h1}>Mensaje enviado exitosamente</h2>
                            <img
                                className={stylesSuccess.icon}
                                src="icons/check.svg"
                                alt="Check Icon"
                            />
                            <ul className={stylesSuccess.button}>
                                <AnchorList
                                    linkRef="/"
                                    styleProp={classStarted}
                                    titleText="Ir al inicio"
                                />
                            </ul>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
}
