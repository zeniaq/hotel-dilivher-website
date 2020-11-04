import { Div1, Div2, Section } from "./styled";
import Navigation from "../Navigation";
import Banner from "../Banner";
import SectionDescription from "../SectionDescription";
import Footer from "../Footer";
import SectionContact from "../SectionContact";
import SectionRooms from "../SectionRooms";
import dataRooms from "../SectionRooms/rooms";

export default function SuccessPage() {
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
    return (
        <Div1>
            <Navigation />
            <Banner
                titleText="Landing"
                descriptionText1="Lorem ipsum dolor sit amet nullam consequat"
                descriptionText2="sed veroeros. tempus adipiscing nulla."
                imageSrc="images/pic07.jpg"
            />
            <Div2>
                <SectionDescription
                    titleText="Sed amet aliquam"
                    descriptionText="Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna."
                />
                <Section>{data}</Section>
                <SectionDescription
                    linkRef="/generic"
                    titleText="Massa libero"
                    descriptionText="Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus."
                    textButton="Get Started"
                />
            </Div2>
            <SectionContact />
            <Footer />
        </Div1>
    );
}
