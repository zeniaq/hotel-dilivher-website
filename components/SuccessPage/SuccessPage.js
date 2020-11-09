import { Div1, Div2, Img, H2, Section, Ul } from "./styled";
import AnchorList from "../AnchorList";

export default function SuccessPage() {
    return (
        <Section>
            <Div1>
                <Div2>
                    <H2>Mensaje enviado exitosamente</H2>
                    <Img src="icons/check.svg" alt="Check Icon" />
                    <Ul>
                        <AnchorList styleProp="true" linkRef="/" titleText="Ir al inicio" />
                    </Ul>
                </Div2>
            </Div1>
        </Section>
    );
}
