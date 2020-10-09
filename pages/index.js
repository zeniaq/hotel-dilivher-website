import MenuNav from "../components/MenuNav";
import Navigation from "../components/Navigation";
import SectionArticle from "../components/SectionArticle";
import Banner from "../components/Banner";
import styles from "../styles/Home.module.css";
import SectionDescription from "../components/SectionDescription";
import Footer from "../components/Footer";
import SectionContact from "../components/SectionContact";

export default function Home() {
    return (
        <div id={styles.wrapper}>
            <Navigation strongText="Hotel" spanText="Dilivher" />
            <MenuNav />
            <Banner
                titleText="Tú descanso, nuestra razon de ser."
                descriptionText="Amplio estacionamiento, area de juegos infantiles,
                comodidad, esmero y servicio que hará su estancia placentera."
                textButton="Reservar Ahora"
                imageSrc="banner.jpg"
            />
            <div id={styles.main}>
                <section id={styles.one} className={styles.tiles}>
                    <SectionArticle
                        titleText="Aliquam"
                        descriptionText="Ipsum dolor sit amet"
                        imageSrc="images/pic01.jpeg"
                        linkRef="/landing"
                    />
                    <SectionArticle
                        titleText="Aliquam"
                        descriptionText="Ipsum dolor sit amet"
                        imageSrc="images/pic02.jpeg"
                        linkRef="/landing"
                    />
                    <SectionArticle
                        titleText="Aliquam"
                        descriptionText="Ipsum dolor sit amet"
                        imageSrc="images/pic03.jpeg"
                        linkRef="/landing"
                    />
                    <SectionArticle
                        titleText="Aliquam"
                        descriptionText="Ipsum dolor sit amet"
                        imageSrc="images/pic04.jpeg"
                        linkRef="/landing"
                    />
                    <SectionArticle
                        titleText="Aliquam"
                        descriptionText="Ipsum dolor sit amet"
                        imageSrc="images/pic05.jpeg"
                        linkRef="/landing"
                    />
                    <SectionArticle
                        titleText="Aliquam"
                        descriptionText="Ipsum dolor sit amet"
                        imageSrc="images/pic06.jpeg"
                        linkRef="/landing"
                    />
                </section>
                <SectionDescription
                    linkRef="/landing"
                    titleText="Massa libero"
                    descriptionText="Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus."
                    textButton="Get Started"
                    classID={styles.two}
                />
            </div>
            <SectionContact />
            <Footer />
        </div>
    );
}
