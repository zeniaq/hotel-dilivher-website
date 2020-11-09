import { Div, Img, H3, Section, Ul } from "./styled";
import AnchorList from "../AnchorList";
import styles from "../../styles/Home.module.css";

export default function ErrorPage() {
    const classStarted = `${styles.button} ${styles.next}`;
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
                    <AnchorList styleProp={classStarted} linkRef="/" titleText="Ir al inicio" />
                </Ul>
            </Div>
        </Section>
    );
}
