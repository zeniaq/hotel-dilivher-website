import MenuNav from "../components/MenuNav";
import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import SectionContact from "../components/SectionContact";
import SectionGeneric from "../components/SectionGeneric/SectionGeneric";

export default function Home() {
    return (
        <div id={styles.wrapper}>
            <Navigation classStyle={styles.style2} strongText="Forty" spanText="By HTML5 Up" />
            <MenuNav />
            <div id={styles.main} className={styles.alt}>
                <SectionGeneric
                    titleText="Generic"
                    imageSrc="images/pic11.jpeg"
                    descriptionText1="Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit."
                    descriptionText2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula."
                    descriptionText3="Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor."
                />
            </div>
            <SectionContact />
            <Footer />
        </div>
    );
}
