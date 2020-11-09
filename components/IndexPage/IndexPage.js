import { Div, Section } from "./styled";
import SectionArticle from "../SectionArticle";
import Banner from "../Banner";
import SectionDescription from "../SectionDescription";
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
    return (
        <>
            <Banner
                titleText="Tú descanso, nuestra razon de ser."
                descriptionText1="Amplio estacionamiento, area de juegos infantiles,"
                descriptionText2="comodidad, esmero y servicio que hará su estancia placentera."
                textButton="Reservar Ahora"
                imageSrc="images/banner.jpg"
            />
            <Div>
                <Section>{data}</Section>
                <SectionDescription
                    linkRef="/landing"
                    titleText="Massa libero"
                    descriptionText="Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus."
                    textButton="Get Started"
                />
            </Div>
        </>
    );
}
