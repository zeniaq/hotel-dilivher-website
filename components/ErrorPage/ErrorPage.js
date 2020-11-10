import { Div, Img, H3, Section, Ul } from "./styled";
import AnchorList from "../AnchorList";

export default function ErrorPage() {
    return (
        <Section>
            <Div>
                <H3>
                    LO SENTIMOS!
                    <br />
                    NO ENCONTRAMOS LA PAGINA QUE BUSCAS
                </H3>
                <Img src="icons/exclamation.svg" alt="Exclamation Icon" />
                <Ul>
                    <AnchorList styleProp="true" linkRef="/" titleText="Ir al inicio" />
                </Ul>
            </Div>
        </Section>
    );
}
