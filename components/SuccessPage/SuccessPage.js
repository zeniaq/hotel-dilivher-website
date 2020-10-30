import { Div1, Div2, Img, H2, Section, Ul } from "./styled";
import AnchorList from "../AnchorList";
import styles from "../../styles/Home.module.css";

export default function SuccessPage() {
    const classStarted = `${styles.button} ${styles.next}`;
    return (
        <Section>
            <Div1>
                <Div2>
                    <H2>Mensaje enviado exitosamente</H2>
                    <Img src="icons/check.svg" alt="Check Icon" />
                    <Ul>
                        <AnchorList styleProp={classStarted} linkRef="/" titleText="Ir al inicio" />
                    </Ul>
                </Div2>
            </Div1>
        </Section>
    );
}
