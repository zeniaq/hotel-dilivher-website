import Head from "next/head";
import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import ErrorPage from "../components/ErrorPage";

export default function Home() {
    return (
        <>
            <Head>
                <title>Hotel Dilivher :: Pagina no encontrada</title>
                <meta name="description" content="Hotel Dilivher WebSite" />
            </Head>
            <div className={styles.wrapper}>
                <Navigation />
                <ErrorPage />
                <Footer />
            </div>
        </>
    );
}
