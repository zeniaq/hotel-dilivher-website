import { Div1, Div2, Section } from "./styled";
import Navigation from "../Navigation";
import SectionArticle from "../SectionArticle";
import Banner from "../Banner";
import styles from "../../styles/Home.module.css";
import SectionDescription from "../SectionDescription";
import Footer from "../Footer";
import SectionContact from "../SectionContact";
import dataArticles from "../SectionArticle/articles";

export default function SuccessPage() {
    const data = dataArticles.map((articles) => (
        <SectionArticle
            key={articles.titleText}
            titleText={articles.titleText}
            descriptionText={articles.descriptionText}
            imageSrc={articles.imageSrc}
            linkRef={articles.linkRef}
        />
    ));
    const classMainSection = `${styles.one} ${styles.tiles}`;
    return (
        <Div1 className={styles.wrapper}>
            <Navigation />
            <Banner
                titleText="Tú descanso, nuestra razon de ser."
                descriptionText1="Amplio estacionamiento, area de juegos infantiles,"
                descriptionText2="comodidad, esmero y servicio que hará su estancia placentera."
                textButton="Reservar Ahora"
                imageSrc="images/banner.jpg"
            />
            <Div2 className={styles.main}>
                <Section className={classMainSection}>{data}</Section>
                <SectionDescription
                    linkRef="/landing"
                    titleText="Massa libero"
                    descriptionText="Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus."
                    textButton="Get Started"
                    classID={styles.two}
                />
            </Div2>
            <SectionContact />
            <Footer />
        </Div1>
    );
}
