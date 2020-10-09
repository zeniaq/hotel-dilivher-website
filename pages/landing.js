import MenuNav from "../components/MenuNav";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import styles from "../styles/Home.module.css";
import SectionDescription from "../components/SectionDescription";
import Footer from "../components/Footer";
import SectionContact from "../components/SectionContact";
import SectionRooms from "../components/SectionRooms";

export default function Home() {
    return (
        <div id={styles.wrapper}>
            <Navigation classStyle={styles.style2} strongText="Forty" spanText="By HTML5 Up" />
            <MenuNav />
            <Banner
                titleText="Landing"
                descriptionText="Lorem ipsum dolor sit amet nullam consequat sed veroeros. tempus adipiscing nulla."
                imageSrc="images/pic07.jpeg"
            />
            <div id={styles.main}>
                <SectionDescription
                    titleText="Sed amet aliquam"
                    descriptionText="Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna."
                    classID={styles.one}
                />
                <section id={styles.two} className={styles.spotlights}>
                    <SectionRooms
                        titleText="Orci maecenas"
                        descriptionText="Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus."
                        imageSrc="images/pic08.jpeg"
                        linkRef="/generic"
                        dataPosition="center center"
                    />
                    <SectionRooms
                        titleText="Rhoncus magna"
                        descriptionText="Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus."
                        imageSrc="images/pic09.jpeg"
                        linkRef="/generic"
                        dataPosition="top center"
                    />
                    <SectionRooms
                        titleText="Sed nunc ligula"
                        descriptionText="Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus."
                        imageSrc="images/pic10.jpeg"
                        linkRef="/generic"
                        dataPosition="25% 25%"
                    />
                </section>
                <SectionDescription
                    linkRef="/generic"
                    titleText="Massa libero"
                    descriptionText="Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus."
                    classID={styles.one}
                    textButton="Get Started"
                />
            </div>
            <SectionContact />
            <Footer />
        </div>
    );
}
