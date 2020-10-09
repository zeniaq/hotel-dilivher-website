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
        <div className={styles.container}>
            <Navigation classStyle={styles.style2} strongText="Forty" spanText="By HTML5 Up" />
            <MenuNav />
            <Banner
                titleText="Landing"
                descriptionText="Lorem ipsum dolor sit amet nullam consequat sed veroeros. tempus adipiscing nulla."
                imageSrc="images/pic07.jpeg"
            />
            <div id={styles.main}>
                <section id="one" className={styles.tiles}>
                    <SectionArticle
                        classImage={styles.image}
                        classMajor={styles.major}
                        classLink={styles.link}
                        titleText="Aliquam"
                        descriptionText="Ipsum dolor sit amet"
                        imageSrc="images/pic01.jpeg"
                        linkRef="/landing"
                    />
                    <SectionArticle
                        classImage={styles.image}
                        classMajor={styles.major}
                        classLink={styles.link}
                        titleText="Aliquam"
                        descriptionText="Ipsum dolor sit amet"
                        imageSrc="images/pic02.jpeg"
                        linkRef="/landing"
                    />
                    <SectionArticle
                        classImage={styles.image}
                        classMajor={styles.major}
                        classLink={styles.link}
                        titleText="Aliquam"
                        descriptionText="Ipsum dolor sit amet"
                        imageSrc="images/pic03.jpeg"
                        linkRef="/landing"
                    />
                    <SectionArticle
                        classImage={styles.image}
                        classMajor={styles.major}
                        classLink={styles.link}
                        titleText="Aliquam"
                        descriptionText="Ipsum dolor sit amet"
                        imageSrc="images/pic04.jpeg"
                        linkRef="/landing"
                    />
                    <SectionArticle
                        classImage={styles.image}
                        classMajor={styles.major}
                        classLink={styles.link}
                        titleText="Aliquam"
                        descriptionText="Ipsum dolor sit amet"
                        imageSrc="images/pic05.jpeg"
                        linkRef="/landing"
                    />
                    <SectionArticle
                        classImage={styles.image}
                        classMajor={styles.major}
                        classLink={styles.link}
                        titleText="Aliquam"
                        descriptionText="Ipsum dolor sit amet"
                        imageSrc="images/pic06.jpeg"
                        linkRef="/landing"
                    />
                </section>
                <SectionDescription
                    classInner={styles.inner}
                    classMajor={styles.major}
                    classActions={styles.actions}
                    classButton={styles.button}
                    classNext={styles.next}
                    linkRef="/landing"
                    titleText="Massa libero"
                    descriptionText="Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus."
                    textButton="Get Started"
                />
            </div>
            <SectionContact />
            <Footer />
        </div>
    );
}
