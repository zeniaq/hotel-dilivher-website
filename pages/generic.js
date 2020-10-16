import Head from "next/head";
import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import SectionContact from "../components/SectionContact";
import SectionGeneric from "../components/SectionGeneric/SectionGeneric";

export default function Home() {
    const classMainSection = `${styles.main} ${styles.alt}`;
    return (
        <>
            <Head>
                <title>Hotel Dilivher :: Generic</title>
                <meta name="description" content="Hotel Dilivher WebSite" />
                <link
                    rel="preload"
                    as="style"
                    href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
                    integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
                    crossOrigin="anonymous"
                    media="screen"
                    onLoad="this.rel='stylesheet'"
                />
                <noscript>
                    <link
                        href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
                        rel="stylesheet"
                        media="screen"
                    />
                </noscript>
            </Head>
            <div className={styles.wrapper}>
                <Navigation classStyle={styles.style2} />
                <div className={classMainSection}>
                    <SectionGeneric
                        titleText="Generic"
                        imageSrc="images/pic11.webp"
                        descriptionText1="Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit."
                        descriptionText2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula."
                        descriptionText3="Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor."
                    />
                </div>
                <SectionContact />
                <Footer />
            </div>
        </>
    );
}
