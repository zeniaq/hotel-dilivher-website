import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { Button } from "../CardPay/styled";
import {
    Container,
    OxxoPay,
    Header,
    Reminder,
    Info,
    Brand,
    Ammount,
    Reference,
    Instructions,
    FootNote,
    Img,
    P,
    Sup,
    Anchor,
    TitleH1,
    TitleH2,
    TitleH3,
    OrderList,
    Item,
    Strong,
    DivPrint,
} from "./styled";

const Payment = () => {
    return (
        <Container>
            <OxxoPay>
                <Header>
                    <Reminder>Ficha digital. No es necesario imprimir.</Reminder>
                    <Info>
                        <Brand>
                            <Img src="images/oxxopay.png" alt="OXXOPay" />
                        </Brand>
                        <Ammount>
                            <TitleH3>Monto a pagar</TitleH3>
                            <TitleH2>
                                $10,000.00
                                <Sup>MXN</Sup>
                            </TitleH2>
                            <P>
                                OXXO cobrará una comisión adicional al momento de realizar el pago.
                            </P>
                        </Ammount>
                    </Info>
                    <Reference>
                        <TitleH3>Referencia</TitleH3>
                        <TitleH1>0000-0000-0000-00</TitleH1>
                    </Reference>
                </Header>
                <Instructions>
                    <TitleH3>Instrucciones</TitleH3>
                    <OrderList>
                        <Item>
                            Acude a la tienda OXXO más cercana.{" "}
                            <Anchor
                                href="https://www.google.com.mx/maps/search/oxxo/"
                                target="_blank"
                            >
                                Encuéntrala aquí
                            </Anchor>
                            .
                        </Item>
                        <Item>
                            Indica en caja que quieres realizar un pago de <Strong>OXXOPay</Strong>.
                        </Item>
                        <Item>
                            Dicta al cajero el número de referencia en esta ficha para que tecleé
                            directamete en la pantalla de venta.
                        </Item>
                        <Item>Realiza el pago correspondiente con dinero en efectivo.</Item>
                        <Item>
                            Al confirmar tu pago, el cajero te entregará un comprobante impreso.{" "}
                            <Strong>
                                En el podrás verificar que se haya realizado correctamente.
                            </Strong>{" "}
                            Conserva este comprobante de pago.
                        </Item>
                    </OrderList>
                    <FootNote>
                        Al completar estos pasos recibirás un correo confirmando tu pago.
                    </FootNote>
                </Instructions>
            </OxxoPay>
        </Container>
    );
};
class ComponentToPrint extends React.PureComponent {
    render() {
        return <Payment />;
    }
}

// eslint-disable-next-line react/prop-types
const CashPay = ({ setPayState }) => {
    const componentRef = useRef();
    return (
        <div>
            <ComponentToPrint ref={componentRef} />
            <ReactToPrint
                trigger={() => (
                    <Container>
                        <DivPrint>
                            <Button type="submit">Guardar referencia</Button>
                        </DivPrint>
                    </Container>
                )}
                content={() => componentRef.current}
            />
            <Container>
                <DivPrint>
                    <Button type="submit" onClick={() => setPayState(0)}>
                        Regresar
                    </Button>
                </DivPrint>
            </Container>
        </div>
    );
};
export default CashPay;
