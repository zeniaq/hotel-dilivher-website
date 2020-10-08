import MenuNav from "../components/MenuNav";
import Navigation from "../components/Navigation";
import SectionArticle from "../components/SectionArticle";
import Banner from "../components/Banner";
import styles from "../styles/Home.module.css";
import SectionDescription from "../components/SectionDescription";
import Footer from "../components/Footer/Footer";

export default function Home() {
    return (
        <div className={styles.container}>
            <Navigation class={styles.logo} strongText="Hotel" spanText="Dilivher" />
            <MenuNav
                classButton={styles.button}
                classPrimary={styles.primary}
                classFit={styles.fit}
                classLinks={styles.links}
                classActions={styles.actions}
                classStacked={styles.stacked}
            />
            <Banner
                classInner={styles.inner}
                classMajor={styles.major}
                classContent={styles.content}
                classActions={styles.actions}
                classButton={styles.button}
                classNext={styles.next}
                classScrolly={styles.scrolly}
                titleText="Tú descanso, nuestra razon de ser."
                descriptionText="Amplio estacionamiento, area de juegos infantiles,
                comodidad, esmero y servicio que hará su estancia placentera."
                textButton="Reservar Ahora"
            />
            <div id="main">
                <section id="one" className={styles.tiles}>
                    <SectionArticle
                        classImage={styles.image}
                        classMajor={styles.major}
                        classLink={styles.link}
                        titleText="Aliquam"
                        descriptionText="Ipsum dolor sit amet"
                        imageSrc="images/pic01.jpeg"
                        linkRef="landing.html"
                    />
                    <SectionArticle
                        classImage={styles.image}
                        classMajor={styles.major}
                        classLink={styles.link}
                        titleText="Aliquam"
                        descriptionText="Ipsum dolor sit amet"
                        imageSrc="images/pic02.jpeg"
                        linkRef="landing.html"
                    />
                    <SectionArticle
                        classImage={styles.image}
                        classMajor={styles.major}
                        classLink={styles.link}
                        titleText="Aliquam"
                        descriptionText="Ipsum dolor sit amet"
                        imageSrc="images/pic03.jpeg"
                        linkRef="landing.html"
                    />
                    <SectionArticle
                        classImage={styles.image}
                        classMajor={styles.major}
                        classLink={styles.link}
                        titleText="Aliquam"
                        descriptionText="Ipsum dolor sit amet"
                        imageSrc="images/pic04.jpeg"
                        linkRef="landing.html"
                    />
                    <SectionArticle
                        classImage={styles.image}
                        classMajor={styles.major}
                        classLink={styles.link}
                        titleText="Aliquam"
                        descriptionText="Ipsum dolor sit amet"
                        imageSrc="images/pic05.jpeg"
                        linkRef="landing.html"
                    />
                    <SectionArticle
                        classImage={styles.image}
                        classMajor={styles.major}
                        classLink={styles.link}
                        titleText="Aliquam"
                        descriptionText="Ipsum dolor sit amet"
                        imageSrc="images/pic06.jpeg"
                        linkRef="landing.html"
                    />
                </section>
                <SectionDescription
                    classInner={styles.inner}
                    classMajor={styles.major}
                    classActions={styles.actions}
                    classButton={styles.button}
                    classNext={styles.next}
                    linkRef="landing.html"
                    titleText="Massa libero"
                    descriptionText="Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus."
                    textButton="Get Started"
                />
            </div>
            <Footer />
        </div>
    );
}
