import MenuNav from "../components/MenuNav";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import styles from "../styles/Home.module.css";
import SectionDescription from "../components/SectionDescription";
import Footer from "../components/Footer";
import SectionContact from "../components/SectionContact";
import SectionRooms from "../components/SectionRooms";
import dataRooms from "../components/SectionRooms/rooms";

export default function Home() {
    const data = dataRooms.map((rooms) => (
        <SectionRooms
            key={rooms.titleText}
            titleText={rooms.titleText}
            descriptionText={rooms.descriptionText}
            imageSrc={rooms.imageSrc}
            linkRef={rooms.linkRef}
            dataPosition={rooms.dataPosition}
        />
    ));
    const classMainSection = `${styles.two} ${styles.spotlights}`;
    return (
        <div className={styles.wrapper}>
            <Navigation classStyle={styles.style2} strongText="Forty" spanText="By HTML5 Up" />
            <MenuNav />
            <Banner
                titleText="Landing"
                descriptionText1="Lorem ipsum dolor sit amet nullam consequat"
                descriptionText2="sed veroeros. tempus adipiscing nulla."
                imageSrc="images/pic07.jpeg"
            />
            <div className={styles.main}>
                <SectionDescription
                    titleText="Sed amet aliquam"
                    descriptionText="Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna."
                    classID={styles.one}
                />
                <section className={classMainSection}>{data}</section>
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
